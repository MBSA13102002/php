function add(){
    var num1=document.getElementById("num1").value
    var num2=document.getElementById("num2").value
    eel.add(num1,num2)(function(ret){
        document.getElementById('ans').innerHTML=ret
        // console.log(ret)
    }
    )
}