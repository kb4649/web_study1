var Items=[];

document.getElementById('add').onclick =function(){
	var str0=document.getElementById('text').value; //入力された値
	if(str0=='')return;
	console.log('add ('+Items.length+') '+str0);
	Items.push(str0);
	list();
}

function list(){
	var str0='';
	for(i0=(Items.length-1);i0>=0;i0--){//逆順
		str0+='<li>'+Items[i0]+'</li>';
	}
	document.getElementById('list').innerHTML=str0;
}

