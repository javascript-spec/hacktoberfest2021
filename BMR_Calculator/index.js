function find(){
    var str1 = parseFloat(document.getElementById("text1").value);
    var str2 = parseFloat(document.getElementById("text2").value);
    var str3 = parseFloat(str1/(str2*str2));
    document.getElementById("heading2").innerHTML="BMI Is : " + str3;
    if(str3>0 && str3<18.6){
        document.getElementById("heading3").innerHTML="You Are Underweight !!";
    }
    else if(str3 >= 18.6 && str3<=24.9){
        document.getElementById("heading3").innerHTML="You Are Having Normal weight";
    }
    else if(str3>24.9){
        document.getElementById("heading3").innerHTML="You Are Overweight !!";
    }
    else {
        document.getElementById("heading3").innerHTML="You Are Not In Any Category !!";
    }
    }