// ==UserScript==
// @name        delete mails
// @namespace   https://webmail.iitg.ernet.in/src/right_main.php?PG_SHOWALL=1&use_mailbox_cache=1&startMessage=1&mailbox=INBOX
// @include     https://webmail.iitg.ernet.in/src/right_main.php?PG_SHOWALL=1&use_mailbox_cache=1&startMessage=1&mailbox=INBOX
// @version     1
// @grant       none
// ==/UserScript==
var table=document.getElementsByTagName("table")[7];
var webmailIds=["noticeboard","sports","security","patel","medsec","maintenance","mailman-owner",
"gtm","estb","engoff","elections","dos","arun","akb","vp@iitg","techniche","swc@","pro@i","placement@","clhod@","hackers@",
"techsec","gensec_welfare@","sport","cultsec","edc","alcheringa"];
var checked=false;
function check(withthis){
	for(var i=0,len=webmailIds.length;i<len;++i){
		if(withthis.startsWith(webmailIds[i])){
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
					checked=true;
					// console.log(title);
				}
			}
		}

		// title;
	// console.log("done this ")
}
;
if(checked==true){
	document.forms[0].submit();
// 	window.open("https://webmail.iitg.ernet.in/src/webmail.php");
}