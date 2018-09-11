 function doClick(o){
     o.className="newsearchinsider";
     var j;
     var id;
     var e;
     for(var i=1;i<=11;i++){
       id ="v"+i;
       j = document.getElementById(id);
       e = document.getElementById("e"+i);
       if(id != o.id){
         j.className="newsearchinsidew";
         e.style.visibility = "hidden";
       }else{
            e.style.visibility = "visible";
       }
     }
     
    var id = o.id+""; 
    var dd=id.substring(1,2);
    var curForm = document.getElementById("FormSearch"+dd);
    var inputv ;
    for(var i=1;i<=11;i++){
    var otherForm = document.getElementById("FormSearch"+i);
    }
    
}
function doOut(o){
 
}