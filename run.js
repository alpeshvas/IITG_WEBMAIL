/*
* author - alpesh vas
*/
var table=document.getElementsByTagName("table")[7];
for ( var i=0;row=table.rows[i],i<100;i++){
		var col=row.cells[1];
		// console.log(col);
		if(col!=null){

			var title=col.getAttribute("title"));
			if(col.getElementsByTagName("label")[0]!=null)
				console.log(col.getElementsByTagName("label")[0].getAttribute("for"));
		}

		// title;
	// console.log("done this ")
}
;