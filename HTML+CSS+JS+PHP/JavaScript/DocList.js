

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const d = new Date();
let name = month[d.getMonth()];
var j=d.getDate();
var z=0;
let p=d.getDay();
var q=(j+1);
for(var i=0;i<7;i++){
z=z+1;p=p+1;
if((p)==7 || (p)==0){q=q+1;}
document.getElementById("d"+z).innerText =  q +" / " +(d.getMonth()+1) +" / "+ d.getFullYear();
q=q+1;
}
var bid="d1";
var tid="tb1";


function dateb(clicked_id){
	
	document.getElementById(bid).style.backgroundColor = '#ddd';
	document.getElementById("tb1").disabled= false;
	document.getElementById("tb2").disabled= false;
	document.getElementById("tb3").disabled= false;
	document.getElementById("tb4").disabled= false;
	bid=clicked_id;
	let element=document.getElementById(bid);
	let style=window.getComputedStyle(element,"");
	let bgColor=style.getPropertyValue("background-color");
	
	if(bgColor== "rgb(221, 221, 221)"){document.getElementById(bid).style.backgroundColor = 'Red';setd(bid);clear(0);}
	else{ document.getElementById(bid).style.backgroundColor = '#ddd';
	document.getElementById("tb1").disabled= true;
	document.getElementById("tb2").disabled= true;
	document.getElementById("tb3").disabled= true;
	document.getElementById("tb4").disabled= true;fill();}
	document.getElementById(tid).style.backgroundColor = '#ddd'; 

	}
	
function timeb(clicked_id){
	document.getElementById(tid).style.backgroundColor = '#ddd';
	tid=clicked_id;
	let element=document.getElementById(tid);
	let style=window.getComputedStyle(element,"");
	let bgColor=style.getPropertyValue("background-color");
	if(bgColor== "rgb(221, 221, 221)"){document.getElementById(tid).style.backgroundColor = 'Red';sett(tid);}
	else {document.getElementById(tid).style.backgroundColor = '#ddd';clear(0);}
	}

function openform(clicked_id) {
        document.getElementById("popupForm").style.display = "block";
		var intro = document.getElementsByClassName('btn');
		intro.setAttribute('id',clicked_id);
}
function closeForm() {
        document.getElementById("popupForm").style.display = "none";
}
