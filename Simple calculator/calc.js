var _num1,_num2,_ans,_operator;

function setscreen(num) {

    if (document.getElementById('textinscreen').value != 0) {
        document.getElementById('textinscreen').value += num;
    }
    else {
        document.getElementById('textinscreen').value = num;
    }

    console.log(num);
}

function reset(){
    document.getElementById('textinscreen').value = "0";
}

function setOperator(op) {
    
    _num1=document.getElementById('textinscreen').value;
    document.getElementById('textinscreen').value = "0";
    console.log("num1=" +_num1);
    _operator=op;
    
}

function getAnswer() {
    _num2=document.getElementById('textinscreen').value;
    console.log("num2=" +_num2);
    if(_operator=='+'){
        _ans=Number(_num1)+Number(_num2);
    }
    else if(_operator=='-'){
        _ans=Number(_num1)-Number(_num2);
    }
    else if(_operator=='*'){
        _ans=Number(_num1)*Number(_num2);
    }
    else if(_operator=='/'){
        _ans=Number(_num1)/Number(_num2);
    }
    else if(_operator=='%'){
        _ans=Number(_num1)%Number(_num2);
    }
    else if(_operator=='**'){
        _ans=Number(_num1)**Number(_num2);
    }
    else if(_operator=='='){
        _ans=Number(_num2);
    }

    

    console.log("Answer="+_ans);
    document.getElementById('textinscreen').value=_ans;
}