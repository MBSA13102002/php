confirmation = null;
function Send_OTP() {
    var Name = document.getElementById("name").value
    var Email = document.getElementById('email').value
    var Number = document.getElementById('phone_number').value
    if (Name != "" && Email != "" && Number != "") {

        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText;
        var res = result.split(",");
        stat = res[0].slice(11, res[0].length - 1);
        detail = res[1].slice(11, res[1].length - 2);
        window.session_id = detail;

        if (stat == "Success") {
            localStorage.setItem("phone_num", Number)
            localStorage.setItem("Name", Name)
            localStorage.setItem("Email", Email)
            document.getElementById('confirm_otp').style.display = "block";
            // document.getElementById('send_otp').style.display="none"; 
        }
        else {
            alert("ERROR OCCURED")
        }

    }
    else {
        alert("FIRST FILL ALL THE DETAILS")
    }

    // console.log(stat,session_id)
    // console.log(xmlHttp.responseText);

}
function Confirm_OTP() {

    var Name = document.getElementById("name").value
    var Email = document.getElementById('email').value
    var Number = document.getElementById('phone_number').value
    var Verification_Code = document.getElementById('verificationCode').value
    var Choice = document.getElementById('type_flats').value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;

    if (Name != '' && Email != '' && Number != '' && Verification_Code != '' && Choice!="CHOOSE") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText
        var res = result.split(",");
        stat = res[0].slice(11, res[0].length - 1)
        // detail = res[1].slice(10,res[1].length-1)
        if (stat == "Success") {
            let formMessage = firebase.database().ref("FORM DATA");
            formMessage.push({
                Name: Name,
                Email: Email,
                Number: Number,
                OTP: Verification_Code,
                date: today,
                Choice: Choice
            });
            alert("OTP CONFIRMED & VERIFIED!!! AND FORM SUBMITTED SUCCESSFULLY!!!")
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("phone_number").value = ''
            document.getElementById("type_flats").value = "CHOOSE"
            document.getElementById("confirm_otp").style.display = "none";
            
            
          
        }
        else {
            alert("ERROR OCCURED")

        }
    }
    else {
        alert("FIIL OUT ALL THE DETAILS OF THE FORM AND VERIFY YOUR PHONE NUMBER AS WELL")
    }




}

// function submit() {
//     var Name = document.getElementById("name").value
//     var Email = document.getElementById('email').value
//     var Number = document.getElementById('phone_number').value
//     var Verification_Code = document.getElementById('verificationCode').value
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
//     var yyyy = today.getFullYear();
//     today = dd + '/' + mm + '/' + yyyy;
//     if (confirmation != null) {
//         if (Name != '' && Email != '' && Number != '' && Verification_Code != '') {
//             let formMessage = firebase.database().ref("FORM DATA");
//             formMessage.push({
//                 Name: Name,
//                 Email: Email,
//                 Number: Number,
//                 OTP: Verification_Code,
//                 date: today
//             });

//             alert("Form Submitted Successfully")
//             document.getElementById("name").value = ''
//             document.getElementById("email").value = ''
//             document.getElementById("phone_number").value = ''
//             document.getElementById("confirm_otp").style.display = "none";


//         }
//         else {
//             alert("FIIL OUT ALL THE DETAILS OF THE FORM AND VERIFY YOUR PHONE NUMBER AS WELL")
//             //    location.reload()
//         }
//     }
//     else {
//         alert("Please confirm the otp and check whether all details are filled or not")
//     }
// }
function scrollwin() {
    window.scrollTo(0, 750);
    alert("Fill the Form to Contact our Experts")
}

