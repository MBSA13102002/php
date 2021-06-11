window.onload=function () {
  render();
};
function render() {
    window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    //get the number
    var number=document.getElementById('number').value;
    localStorage.setItem("mob_no", number);
    //phone number authentication function of firebase
    //it takes two parameter first one is number,,,second one is recaptcha
    firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier).then(function (confirmationResult) {
        //s is in lowercase
        window.confirmationResult=confirmationResult;
        coderesult=confirmationResult;
        // console.log(coderesult);
        document.getElementById("message").innerHTML="OTP SENT"
        document.getElementById('send_otp').style.display="none";
        document.getElementById('confirm_otp').style.display="block";
        // alert("Message sent");
    }).catch(function (error) {
        document.getElementById("message").innerHTML=error.message;
        // alert(error.message);
    });
}
function codeverify() {
    var code=document.getElementById('verificationCode').value;
    coderesult.confirm(code).then(function (result) {
        // alert("Successfully registered");
        document.getElementById("message").innerHTML="OTP VERIFIED!!!!";
        var user=result.user;
        // console.log(user);
    }).catch(function (error) {
        document.getElementById("message").innerHTML=error.message;
        // alert(error.message);
    });
}
function send_data(){
    
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var number=localStorage.getItem('mob_no')
    let formMessage=firebase.database().ref("FORM DATA");
    formMessage.push({
        name:name,
        email:email,
        number:number,
    });
    document.getElementById('send_otp').style.display="block";
    document.getElementById('confirm_otp').style.display="none";
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("number").value="";
    document.getElementById("verificationCode").value="";
  
    ;

};
