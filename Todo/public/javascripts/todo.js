//var Items=[]; //配列に保存。リロードすると消える

document.getElementById('add').onclick =function(){
	var str0=document.getElementById('text').value; //入力された値
	if(str0=='')return;//文字列なし
	console.log('add '+str0);
	var xhr=new XMLHttpRequest();
	xhr.open("POST","/add",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('text='+str0);
//	Items.push(str0);
	list();
}

function del(id){
//	if((id<0)||(id>=Items.length)) return;//範囲外
	console.log('del ('+id+')');
//	for(i0=id;i0<(Items.length-1);i0++){
//		Items[i0]=Items[i0+1];//１つずつ詰める
//	}
//	Items.pop();
	list();
}

function list(){
	var xhr=new XMLHttpRequest();
	xhr.open("GET","/list");
	xhr.addEventListener("load",function(ev){
		var Items =JSON.parse(xhr.responseText);
		console.log(Items);
		var str0='<table>'
		+'<thead><tr><th>内容</th>'
		+'<th class="th-btn">削除</th></tr></thead>'
		+'<tbody>';
		for(i0=(Items.length-1);i0>=0;i0--){//逆順
			str0+='<tr><td>'+Items[i0].text+'</td><td class="td-btn">'
			+'<input type="submit" onclick="del('+i0
			+')" value="削除" /></td></tr>';
		}　　
		 str0+='</tbody></table>';
		document.getElementById('list').innerHTML=str0;
	});
	xhr.send();
}

window.onload =list;