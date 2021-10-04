var numlist=document.querySelectorAll("button");
function display(){
  var dis=document.querySelector('#out');
  if(this.textContent==='C')
  {
    dis.value="";
  }
  else if(this.textContent==='='){
    dis.value=eval(dis.value);
  }
  else if(this.textContent==='SIN'){
    dis.value=Math.sin(eval(dis.value)*3.14159265359/180);
  }
  else if(this.textContent==='COS'){
    dis.value=Math.cos(eval(dis.value)*3.14159265359/180);
  }
  else if(this.textContent==='TAN'){
    dis.value=Math.tan(eval(dis.value)*3.14159265359/180);
  }
  else if(this.textContent==='RECI'){
    dis.value=1/eval(dis.value);
  }
  else if(this.textContent==='.'){
    dis.value+='.';
  }
  else if(this.textContent==='DEL'){
    dis.value=Math.floor(dis.value/10)
  }
  else if(this.textContent==='FACT'){
    fact=1
    for(var n=eval(dis.value);n>0;n--){
      fact*=n;
    }
    dis.value=fact;
  }
  else if(this.textContent==='POW'){
    dis.value+='**'
  }
  else if(this.textContent==='EXP'){
    e=2.71828182846
    dis.value+='e'
  }
  else if(this.textContent==='LN'){
    dis.value=Math.log(eval(dis.value))
  }
  else{
    dis.value+=this.textContent;
  }
}
for(var i=0;i<numlist.length;i++)
{
  numlist[i].addEventListener("click",display);
}
