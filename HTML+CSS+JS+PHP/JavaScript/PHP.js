var data1;
var dateid;var timeid;
document.addEventListener("DOMContentLoaded", getspec());
function getspec(){
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
          data[tmp[0]] = tmp[1];
    }
	
	document.getElementById('demo').innerHTML = data.name;
	data1=data.name;
	
}
document.addEventListener("DOMContentLoaded", fill());



function fill(){
	let	str= data1;
	 var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		var text=this.responseText;
		 var obj = eval('(' + text + ')');
            var res = [];
			var count=0;
            for(var i in obj)
                res.push(obj[i]);
		for(var i in res){
		document.getElementById('doc'+count+'1').innerHTML = res[count].DocId;
		document.getElementById('doc'+count+'2').innerHTML = res[count].DocName;
		document.getElementById('doc'+count+'3').innerHTML = res[count].Age;
		document.getElementById('doc'+count+'4').innerHTML = res[count].Exp;
		count++;
		}
			for(var i=0;i<5;i++){
				document.getElementById('doc'+i+'1').style.filter = "blur(0px)";
				document.getElementById('doc'+i+'2').style.filter = "blur(0px)";
				document.getElementById('doc'+i+'3').style.filter = "blur(0px)";
				document.getElementById('doc'+i+'4').style.filter = "blur(0px)";
				document.getElementById('bookbtn'+i).style.filter = "blur(0px)";
				document.getElementById("bookbtn"+i).disabled= true;
				}		
    }
};
xmlhttp.open("GET", "FetchDocList.php?q="+str+"", true);
xmlhttp.send();
}

function clear(count){
	for(var i=count;i<5;i++){
		document.getElementById('doc'+i+'1').style.filter = "blur(8px)";
		document.getElementById('doc'+i+'2').style.filter = "blur(8px)";
		document.getElementById('doc'+i+'3').style.filter = "blur(8px)";
		document.getElementById('doc'+i+'4').style.filter = "blur(8px)";
		document.getElementById('bookbtn'+i).style.filter = "blur(8px)";
		document.getElementById("bookbtn"+i).disabled= true;
		}
}

function setd(date_id){
dateid=date_id;
}
function sett(time_id){
	timeid=time_id;fillbdt();
}
	

function fillbdt(){
	let sd= document.getElementById(dateid).textContent;
	let st= document.getElementById(timeid).textContent;
	let	s= data1;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function()	 {
    if (this.readyState == 4 && this.status == 200) {
		var text=this.responseText;
		 var obj = eval('(' + text + ')');
            var res = [];
			var count=0;
            for(var i in obj)
                res.push(obj[i]);
		for(var i in res){
		document.getElementById('doc'+count+'1').innerHTML = res[count].DocId;
		document.getElementById('doc'+count+'2').innerHTML = res[count].DocName;
		document.getElementById('doc'+count+'3').innerHTML = res[count].Age;
		document.getElementById('doc'+count+'4').innerHTML = res[count].Exp;
		count++;
		}for(var i=0;i<5;i++){
		document.getElementById('doc'+i+'1').style.filter = "blur(0px)";
		document.getElementById('doc'+i+'2').style.filter = "blur(0px)";
		document.getElementById('doc'+i+'3').style.filter = "blur(0px)";
		document.getElementById('doc'+i+'4').style.filter = "blur(0px)";
		document.getElementById('bookbtn'+i).style.filter = "blur(0px)";
		document.getElementById("bookbtn"+i).disabled= false;
		}	
		clear(count);
    }
};
xmlhttp.open("GET", "FetchDocListbdt.php?s="+s+"&d="+sd+"&t="+st+"", true);
xmlhttp.send();	
}


function book(){
	let no=clicked_id.charAt(clicked_id.length-1);
	let str = document.getElementById('doc'+no+'1').textContent;
	let sd= document.getElementById(dateid).textContent;
	let st= document.getElementById(timeid).textContent;
	document.getElementById('demo').innerHTML = sd;
	 var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
			fillbdt();
	}
};
xmlhttp.open("GET", "book.php?str="+str+"&sd="+sd+"&st="+st+"", true);
xmlhttp.send();	
}



	
