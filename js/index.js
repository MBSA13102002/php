
function Send_OTP() {
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Number = document.getElementById('phone_number').value
    var Choice = document.getElementById('type_flats').value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    today = dd + '/' + mm + '/' + yyyy;
    time = hour + ":" + min + ":" + sec
    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != "" && Email != "" && Number != "" && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();

        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText;
        Result = JSON.parse(result)
        stat = Result.Status;
        detail = Result.Details;
        window.session_id = detail;

        if (stat == "Success") {
            // alert("OTP HAS BEEN SENT TO YOUR MOBILE NUMBER")
            var xmlHttps = new XMLHttpRequest();

            theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjY1NDY5Ig_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice
            // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
            // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
            xmlHttps.open("GET", theUrl, false); // false for synchronous request
            xmlHttps.send(null);
            results = xmlHttp.responseText;
            Results = JSON.parse(result)
            stats = Result.Status;    
            document.getElementById('confirm_otp').style.display = "block";
            document.getElementById('block_chain').style.display = "none";
            // document.getElementById('send_otp').style.display="none"; 
        }
        else {
            alert("ERROR OCCURED")
            let formMessage = firebase.database().ref("FORM DATA").child(New_Name + "  " + Number.substring(Number.length - 10));
            formMessage.set({
                Name: New_Name,
                Email: Email,
                Number: Number,
                date: today,
                time: time,
            });
        //     document.getElementById('confirm_otp').style.display = "block";
        //     document.getElementById('block_chain').style.display = "none";
        }

    }
    else {
        alert("First Fill All The Details.")
    }

}

function New_Send_OTP() {
    var Name = document.getElementById('new_name').value
    var Email = document.getElementById('new_email').value
    var Number = document.getElementById('new_phone_number').value
    var Choice = document.getElementById('new_type_flats').value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    today = dd + '/' + mm + '/' + yyyy;
    time = hour + ":" + min + ":" + sec
    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != "" && Email != "" && Number != "" && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText;
        Result = JSON.parse(result)
        stat = Result.Status;
        detail = Result.Details;
        window.session_id = detail;

        if (stat == "Success") {
           // alert("OTP HAS BEEN SENT TO YOUR MOBILE NUMBER")
           var xmlHttps = new XMLHttpRequest();

           theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjY1NDY5Ig_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice
           // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
           // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
           xmlHttps.open("GET", theUrl, false); // false for synchronous request
           xmlHttps.send(null);
           results = xmlHttp.responseText;
           Results = JSON.parse(result)
           stats = Result.Status;    
           document.getElementById('confirm_otp').style.display = "block";
           document.getElementById('block_chain').style.display = "none";
           // document.getElementById('send_otp').style.display="none";  
        }
        else {
            alert("ERROR OCCURED")
            let formMessage = firebase.database().ref("FORM DATA").child(New_Name + "  " + Number.substring(Number.length - 10));
            formMessage.set({
                Name: New_Name,
                Email: Email,
                Number: Number,
                date: today,
                time: time,
            });
        }

    }
    else {
        alert("First Fill All The Details.")
    }



}

function Popup_Send_OTP() {
    var Name = document.getElementById('popup_name').value
    var Email = document.getElementById('popup_email').value
    var Number = document.getElementById('popup_phone_number').value
    var Choice = document.getElementById('popup_type_flats').value
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    today = dd + '/' + mm + '/' + yyyy;
    time = hour + ":" + min + ":" + sec
    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != "" && Email != "" && Number != "" && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText;
        Result = JSON.parse(result)
        stat = Result.Status;
        detail = Result.Details;
        window.session_id = detail;

        if (stat == "Success") {
            document.getElementById("splash").style.top = (window.pageYOffset+120).toString() + 'px';
           // alert("OTP HAS BEEN SENT TO YOUR MOBILE NUMBER")
           var xmlHttps = new XMLHttpRequest();

           theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/IjY1NDY5Ig_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice
           // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
           // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
           xmlHttps.open("GET", theUrl, false); // false for synchronous request
           xmlHttps.send(null);
           results = xmlHttp.responseText;
           Results = JSON.parse(result)
           stats = Result.Status;    
           document.getElementById('confirm_otp').style.display = "block";
           document.getElementById('block_chain').style.display = "none";
           // document.getElementById('send_otp').style.display="none"; 
        }
        else {
            alert("ERROR OCCURED")
            let formMessage = firebase.database().ref("FORM DATA").child(New_Name + "  " + Number.substring(Number.length - 10));
            formMessage.set({
                Name: New_Name,
                Email: Email,
                Number: Number,
                date: today,
                time: time,
            });
        }

    }
    else {
        alert("First Fill All The Details.")
    }



}
function Confirm_OTP() {

    var Name = document.getElementById("name").value
    var Email = document.getElementById('email').value
    var Number = document.getElementById('phone_number').value
    var Verification_Code = document.getElementById('verificationCode').value
    var Choice = document.getElementById('type_flats').value
    var today = new Date();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    time = hour + ":" + min + ":" + sec

    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != '' && Email != '' && Number != '' && Verification_Code != '' && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText
        Result = JSON.parse(result)
        stat = Result.Status;
        if (stat == "Success") {
            var xmlHttps = new XMLHttpRequest();

            theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/Ijk1NDQxIg_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice+"&OTP="+Verification_Code
            // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
            // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
            xmlHttps.open("GET", theUrl, false); // false for synchronous request
            xmlHttps.send(null);
            // results = xmlHttp.responseText;
            // Results = JSON.parse(result)
            // stats = Result.Status;    
            alert("Our expert will get in touch with you shortly!!")
            document.getElementById("splash").classList.add("animate__zoomOutDown");
            setTimeout(function () {
                document.getElementById("main_content").classList.remove("main_imp");
                document.getElementById("splash").style.display = "none";
            }, 1000);
            window.onscroll = function () { };
            window.confirmation = false;
            document.getElementById("name").value = ''
            document.getElementById("email").value = ''
            document.getElementById("phone_number").value = ''
            document.getElementById("type_flats").value = "CHOOSE YOUR REQUIREMENT"
            document.getElementById("confirm_otp").style.display = "none";
        }
        else {
            alert("ERROR OCCURED")
        }
    }
    else {
        alert("Fill Out All The Details Of The Form & Verify Your Phone Number As Well.")
    }
}
function New_Confirm_OTP() {

    var Name = document.getElementById("new_name").value
    var Email = document.getElementById('new_email').value
    var Number = document.getElementById('new_phone_number').value
    var Verification_Code = document.getElementById('new_verificationCode').value
    var Choice = document.getElementById('new_type_flats').value
    var today = new Date();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    time = hour + ":" + min + ":" + sec

    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != '' && Email != '' && Number != '' && Verification_Code != '' && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText
        Result = JSON.parse(result)
        stat = Result.Status;
        if (stat == "Success") {
            var xmlHttps = new XMLHttpRequest();

            theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/Ijk1NDQxIg_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice+"&OTP="+Verification_Code
            // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
            // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
            xmlHttps.open("GET", theUrl, false); // false for synchronous request
            xmlHttps.send(null);
            alert("Our expert will get in touch with you shortly!!")
            document.getElementById("splash").classList.add("animate__zoomOutDown");
            setTimeout(function () {
                document.getElementById("main_content").classList.remove("main_imp");
                document.getElementById("splash").style.display = "none";
            }, 1000);
            window.onscroll = function () { };
            window.confirmation = false;
            document.getElementById("new_name").value = ''
            document.getElementById("new_email").value = ''
            document.getElementById("new_phone_number").value = ''
            document.getElementById("new_type_flats").value = "CHOOSE YOUR REQUIREMENT"
            document.getElementById("new_confirm_otp").style.display = "none";
        }
        else {
            alert("ERROR OCCURED")
        }
    }
    else {
        alert("Fill Out All The Details Of The Form & Verify Your Phone Number As Well.")
    }
}
function Popup_Confirm_OTP() {

    var Name = document.getElementById("popup_name").value
    var Email = document.getElementById('popup_email').value
    var Number = document.getElementById('popup_phone_number').value
    var Verification_Code = document.getElementById('popup_verificationCode').value
    var Choice = document.getElementById('popup_type_flats').value
    var today = new Date();
    var hour = today.getHours()
    var min = today.getMinutes()
    var sec = today.getSeconds()
    time = hour + ":" + min + ":" + sec
    New_Name=''
    for (i = 0; i < Name.length; i++) {
        if (Name.charAt(i) == '.'||Name.charAt(i) == '#'||Name.charAt(i) == '$'||Name.charAt(i) == '['||Name.charAt(i) == ']') {
            New_Name = New_Name + " "
        }
        else {
            New_Name = New_Name + Name.charAt(i)
        }
    }
    if (Name != '' && Email != '' && Number != '' && Verification_Code != '' && Choice != "CHOOSE YOUR REQUIREMENT") {
        var xmlHttp = new XMLHttpRequest();
        theUrl = "https://2factor.in/API/V1/" + "ace23105-cc2a-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/VERIFY/" + session_id + "/" + Verification_Code
        // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
        xmlHttp.open("GET", theUrl, false); // false for synchronous request
        xmlHttp.send(null);
        result = xmlHttp.responseText
        Result = JSON.parse(result)
        stat = Result.Status;
        if (stat == "Success") {
            var xmlHttps = new XMLHttpRequest();

            theUrl = "https://connect.pabbly.com/workflow/sendwebhookdata/Ijk1NDQxIg_3D_3D?Name="+Name+"&Email="+Email+"&Number="+Number+"&Choice="+Choice+"&OTP="+Verification_Code
            // theUrl = "https://2factor.in/API/V1/" + "16f346f4-cad2-11eb-8089-0200cd936042" + "/SMS/" + Number.substring(Number.length - 10) + "/" + Math.floor(1000 + Math.random() * 9000).toString()
            // theUrl="http://2factor.in/API/V1/293832-67745-11e5-88de-5600000c6b13/SMS/9911991199/4499"
            xmlHttps.open("GET", theUrl, false); // false for synchronous request
            xmlHttps.send(null);
            alert("Our expert will get in touch with you shortly.")
            document.getElementById("splash").classList.add("animate__zoomOutDown");
            setTimeout(function () {
                document.getElementById("main_content").classList.remove("main_imp");
                document.getElementById("splash").style.display = "none";
            }, 1000);
            window.onscroll = function () { };
            window.confirmation = false;
            document.getElementById("popup_name").value = ''
            document.getElementById("popup_email").value = ''
            document.getElementById("popup_phone_number").value = ''
            document.getElementById("popup_type_flats").value = "CHOOSE YOUR REQUIREMENT"
            document.getElementById("popup_confirm_otp").style.display = "none";
        }
        else {
            alert("ERROR OCCURED")

        }
    }
    else {
        alert("Fill Out All The Details Of The Form & Verify Your Phone Number As Well.")
    }
}
function Splash() {
    setTimeout(function () {
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = window.pageYOffset.toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,


            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }, 3000);

}
function removed_done() {
    var Name = document.getElementById("popup_name").value
    var Email = document.getElementById('popup_email').value
    var Number = document.getElementById('popup_phone_number').value
    var Choice = document.getElementById('popup_type_flats').value
    var code_display = document.getElementById("popup_confirm_otp").style.display
    if (code_display == 'none') {
        if (Name != '' || Email != '' || Number != '' || Choice != "CHOOSE YOUR REQUIREMENT") {
            var ref = confirm("Do you really want to exit the enquiry?")
            if (ref == true) {
                document.getElementById("splash").classList.add("animate__zoomOutDown");
                setTimeout(function () {
                    document.getElementById("main_content").classList.remove("main_imp");
                    document.getElementById("splash").style.display = "none";
                }, 1000);
                window.onscroll = function () { };
                window.confirmation = false;

            } else {

            }
        }
        else {
            document.getElementById("splash").classList.add("animate__zoomOutDown");
            setTimeout(function () {
                document.getElementById("main_content").classList.remove("main_imp");
                document.getElementById("splash").style.display = "none";
            }, 1000);
            window.onscroll = function () { };
        } window.confirmation = false;
    }
    else {
        alert("Verfication under process..Enter the OTP & Submit the form.")
    }
}
window.confirmation = false
function Display_Popup() {
    if (window.confirmation == false) {
        document.getElementById("splash").classList.remove("animate__zoomOutDown");
        console.log("if")
        document.getElementById("main_content").classList.add("main_imp");
        document.getElementById("splash").style.display = "block";
        document.getElementById("splash").style.top = window.pageYOffset.toString() + 'px';
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
        window.confirmation = true;
    }
    else {
        var Name = document.getElementById("popup_name").value
        var Email = document.getElementById('popup_email').value
        var Number = document.getElementById('popup_phone_number').value
        var Choice = document.getElementById('popup_type_flats').value
        var code_display = document.getElementById("popup_confirm_otp").style.display
        if (code_display == 'none') {
            if (Name != '' || Email != '' || Number != '' || Choice != "CHOOSE YOUR REQUIREMENT") {
                var ref = confirm("Do you really want to exit the enquiry?")
                if (ref == true) {
                    document.getElementById("splash").classList.add("animate__zoomOutDown");
                    setTimeout(function () {
                        document.getElementById("main_content").classList.remove("main_imp");
                        document.getElementById("splash").style.display = "none";
                    }, 1000);
                    window.onscroll = function () { };
                    document.getElementById("popup_name").value=""
                    document.getElementById('popup_email').value=""
                   document.getElementById('popup_phone_number').value=""
                   document.getElementById('popup_type_flats').value=""
                    window.confirmation = false;

                } else {

                }
            }
            else {
                document.getElementById("splash").classList.add("animate__zoomOutDown");
                setTimeout(function () {
                    document.getElementById("main_content").classList.remove("main_imp");
                    document.getElementById("splash").style.display = "none";
                }, 1000);
                window.onscroll = function () { };
            } window.confirmation = false;
        }
        else {
            alert("Verfication under process..Enter the OTP & Submit the form.")
            var Name = document.getElementById("popup_name").value
            var Email = document.getElementById('popup_email').value
            var Number = document.getElementById('popup_phone_number').value
            var Choice = document.getElementById('popup_type_flats').value
            var code_display = document.getElementById("popup_confirm_otp").style.display
        }
        
    }
}