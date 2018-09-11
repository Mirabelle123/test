var arr=[1,2,3,4,4,3,5,5];
console.log(arr);
var i,j;
var k=new Array();
for(i=0;i<arr.length;i++){
	var a=arr[i]
	for(j=i+1;j<arr.length;j++){
		if(a==arr[j])
			k.push(j);
	}
}
console.log(k);
for(var n=0;n<k.length;n++){
		arr.splice(k[n]-n,1);
}
	console.log(arr);
