var Items=[]; //配列に保存。リロードすると消える

document.getElementById('add').onclick =function(){
	var str0=document.getElementById('text').value; //入力された値
	if(str0=='')return;
	console.log('add ('+Items.length+') '+str0);
	Items.push(str0);
	list();
}

function del(id){
	if((id<0)||(id>=Items.length)) return;//範囲外
	console.log('del ('+id+')');
	for(i0=id;i0<(Items.length-1);i0++){
		Items[id]=Items[id+1];//１つずつ詰める
	}
	Items.pop();
	list();
}

function list(){
	var str0='<table>'
	+'<thead><tr><th style="width:80%">　内容　</th><th>削除</th></tr></thead>'
	+'<tbody>';
	for(i0=(Items.length-1);i0>=0;i0--){//逆順
		str0+='<tr><td>'+Items[i0]+'</td>'
		+'<td><input type="submit" onclick="del('+i0
		+')" value="削除" /></td></tr>';
	}　　
	　str0+='</tbody></table>';
	document.getElementById('list').innerHTML=str0;
}
