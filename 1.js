/*
* author - alpesh vas
*/
var table=document.getElementsByTagName("table")[7];
var extra=["noticeboard","sports","security","patel","medsec","maintenance","mailman-owner",
"gtm","estb","engoff","elections","dos","arun","akb","vp@iitg","techniche","swc@","pro@i","placement@","clhod@","hackers@",
"techsec","gensec_welfare@","sport","cultsec","edc","alcheringa"];
function check(withthis){
	for(var i=0,len=extra.length;i<len;++i){
		if(withthis.startsWith(extra[i])){
			return true;
		}
	}
	return false;
}
for ( var i=0;row=table.rows[i];i++){
		var col=row.cells[1];
		// console.log(col);
		if(col!=null){

			if(col.getElementsByTagName("label")[0]!=null){
				var title=col.getAttribute("title");
				var id=col.getElementsByTagName("label")[0].getAttribute("for");
				if(check(title)){
					document.getElementById(id).checked=true;
					// console.log(title);
				}
			}
		}

		// title;
	// console.log("done this ")
}
;
document.forms[0].submit();