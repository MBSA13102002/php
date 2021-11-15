
from flask import Flask,render_template,request,session,g,url_for,redirect
import os
import json 
from firebase import Firebase
config = {
    "apiKey": "AIzaSyDO2W0QCmFCo0a-PTsT7ficA_QLI5e_WHg",
    "authDomain": "chat-a7bab.firebaseapp.com",
    "databaseURL": "https://chat-a7bab-default-rtdb.firebaseio.com",
    "projectId": "chat-a7bab",
    "storageBucket": "chat-a7bab.appspot.com",
    "messagingSenderId": "550345253145",
    "appId": "1:550345253145:web:c6f493380c62bed2d02588",
    "measurementId": "G-R8DG3WGW88"
  };
# config = {
#   "apiKey": "AIzaSyAU3FDUxBIHiIfo8szINjTds7oGZN1WPa0",
#   "authDomain": "codoctober-hackathon.firebaseapp.com",
#   "databaseURL": "https://codoctober-hackathon-default-rtdb.firebaseio.com",
#   "projectId": "codoctober-hackathon",
#   "storageBucket": "codoctober-hackathon.appspot.com",
#   "messagingSenderId": "765466062931",
#   "appId": "1:765466062931:web:4a5e0e96dc88300ef996a6",
#   "measurementId": "G-QM19VJWCME"
# }
firebase = Firebase(config)
db = firebase.database()
auth = firebase.auth()

app = Flask(__name__)
app.secret_key = os.urandom(24)
with open('config.json', 'r') as c:                                                                
    params = json.load(c)["params"]
def handle_catch(caller, on_exception):
    try:
         return caller()
    except:
         return on_exception
@app.route("/",methods = ['GET','POST'])
def index():
    if request.method == 'POST':
        session.pop('user',None)
        uname = request.form.get("username")
        upass = request.form.get("password")
        try:
            user_ = auth.sign_in_with_email_and_password(uname ,upass)
            session['user'] = user_['localId']
            session['email'] = user_['email']
            g.user  = session['user']
            return redirect(url_for('dashboard'))
        except:
            return redirect(url_for('dashboard'))
    if 'user' in session:
        return redirect(url_for('dashboard'))

    return render_template("index.html")

@app.route('/dashboard')
def dashboard():
    if g.user:
        friends_list = db.child("Users").child(session['user']).child("friends").get()
        return render_template("dashboard.html",friends_list =friends_list,handle_catch = handle_catch )
    return redirect(url_for('index'))

@app.route("/drop",methods=['GET','POST'])
def drop():
    if request.method=='POST':
        session.pop('user')
        return redirect(url_for('index'))
    return "go to sigin"

@app.route("/signup", methods = ['GET','POST'])
def signup():
    if request.method=='POST':
        name = request.form.get("name")
        username = request.form.get("username")
        password = request.form.get("password")
        try:
            _user_ = auth.create_user_with_email_and_password(username ,password)
            auth.send_email_verification(_user_['idToken'])
            db.child("User_Emails").child(username.split("@")[0]).set({
                "UID":_user_['localId']
            })
            db.child("Users").child(_user_['localId']).set({
                "name":name,    
            })
            return render_template("success.html")
        except Exception as e:
            pass
            return render_template(url_for('index'))
    return render_template("signup.html")

@app.route('/passchange',methods = ['GET','POST'])
def passchange():
    if request.method == 'POST':
        email = request.form.get("pass_change_email")
        auth.send_password_reset_email(email)
        return render_template("passwordchange.html",val = "true")
    return render_template("passwordchange.html",val = "false")

@app.route('/addfriend',methods = ['GET','POST'])
def addfriend():
    if request.method=='POST':
        femail = request.form.get('friend_add_email').split("@")[0]
        all_emails = dict(db.child("User_Emails").get().val())
        all_emails_list  = list(all_emails.keys())
        try:
            user_friend_list = list(dict(db.child("Users").child(session['user']).child("friends").get().val()).keys())
            if femail in all_emails_list and femail not in user_friend_list:
                friends_name = db.child('Users').child(all_emails[femail]['UID']).child("name").get().val()
                db.child("Users").child(session['user']).child("friends").child(all_emails[femail]['UID']).update({
                    'name':friends_name
                })
                user_name = db.child('Users').child(session['user']).child("name").get().val()
                db.child("Users").child(all_emails[femail]['UID']).child("friends").child(session['user']).update({
                'name':user_name
                })
        except:

            if femail in all_emails_list:
                friends_name = db.child('Users').child(all_emails[femail]['UID']).child("name").get().val()
                db.child("Users").child(session['user']).child("friends").child(all_emails[femail]['UID']).update({
                    'name':friends_name
                })
                user_name = db.child('Users').child(session['user']).child("name").get().val()
                db.child("Users").child(all_emails[femail]['UID']).child("friends").child(session['user']).update({
                'name':user_name
                })
            
        return redirect(url_for('dashboard')) 
    return redirect(url_for('dashboard')) 

@app.route("/<string:friend_uid>/",methods = ['GET','POST'])
def chat(friend_uid):
    if request.method == 'POST':
        user_name = db.child('Users').child(session['user']).child("name").get().val()
        friends_name = db.child('Users').child(friend_uid).child("name").get().val()
        return render_template("chat.html",user_uid = session['user'],friend_uid = friend_uid,user_name = user_name,friend_name =friends_name )
@app.before_request
def before_request():
    g.user = None
    if 'user' in session:
        g.user = session['user']

