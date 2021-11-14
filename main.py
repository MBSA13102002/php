from flask import Flask,render_template,redirect,url_for
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


firebase = Firebase(config)
db = firebase.database()

app = Flask(__name__)
@app.route("/")
def begin():
    key = db.generate_key()
    _key = db.generate_key()
    db.child("Data").child(key).set({
        'count':1
    })
    return redirect(url_for('start',app_key = key,inner_key = _key))
@app.route('/<string:app_key>/<string:inner_key>/',methods=['GET','POST'])
def start(app_key,inner_key):
    count = db.child("Data").child(app_key).get().val()['count']
    if(count<=2):
        db.child("Data").child(app_key).update({
            'count':count+1
        })
        return  render_template("chat.html",secret_key = app_key,inner_secret_key = inner_key)
    else:
        return "Already 2 in the chat!!!"

if __name__ == '__main__':
    app.run()