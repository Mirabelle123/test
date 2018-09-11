 var hour,minute,second;//时 分 秒
 hour=minute=second=0;//初始化     
 var msecond=0;//毫秒     
 var int; 
function countTime(){
  msecond=msecond+50;
  if(msecond>=1000){
  	msecond=0;
  	second=second+1;
  }
  	if(second>=60){
  		second=0;
  		minute=minute+1;
  	}
  		if(minute>=60){
  			minute=0;
  			hour=hour+1;
  		} 
  		document.getElementById('timetext').value=(todo(hour)+":"+todo(minute)+":"+todo(second)+":"+msecond);
}
function start(){ 
	clearInterval(int);
 int=setInterval(countTime, 50);
}
function stop(){
clearInterval(int);
document.getElementById('counttext').value=(document.getElementById('counttext').value+'\n'+"暂停："+todo(hour)+':'+todo(minute)+':'+todo(second)+':'+msecond);
}
function count(){
	var str;
	str=todo(hour)+":"+todo(minute)+":"+todo(second)+":"+msecond;
document.getElementById('counttext').value=(document.getElementById('counttext').value+'\n'+"计次："+str);
}
function reset(){
clearInterval(int);
hour=minute=second=msecond=0;
document.getElementById('timetext').value=("00:00:00:000");
document.getElementById('counttext').value=("");
}
function todo(n){
	if(n<10){
		return "0"+n;
	}else{
		return n;
	}
}
function change1(){
	var b1=document.getElementById("but1");
	var b2=document.getElementById("but2");
	b1.style.display="none";
	b2.style.display="block";

}
function change2(){
	var b1=document.getElementById("but1");
	var b2=document.getElementById("but2");
	b2.style.display="none";
	b1.style.display="block";

}