document.getElementById('add').onclick =function(){
	var str0=document.getElementById('text').value; //入力された値
	if(str0=='')return;//文字列なし
	console.log('add '+str0);
	var xhr=new XMLHttpRequest();
	xhr.open("POST","/add",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('text='+str0);
	list();
}

function del(id){
	var str0=id; //文字列
	if(str0=='')return;//文字列なし
	console.log('del '+str0);
	var xhr=new XMLHttpRequest();
	xhr.open("POST","/del",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('id='+str0);
	list();
}

function update(id){
	var str0=document.getElementById('text').value; //入力された値
	if((id=='')||(str0==''))return;//文字列なし
	console.log('update '+id+' '+str0);
	var xhr=new XMLHttpRequest();
	xhr.open("POST","/update",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('id='+id+'&text='+str0);
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
		+'<th class="th-btn">更新</th>'
		+'<th class="th-btn">削除</th>'
		+'</tr></thead><tbody>';
		for(i0=(Items.length-1);i0>=0;i0--){//逆順
			str0+='<tr><td>'+Items[i0].text+'</td>'
			+'<td class="td-btn"><input type="submit" onclick="update(\''
			+Items[i0]._id+'\')" value="更新" /></td>'
			+'<td class="td-btn"><input type="submit" onclick="del(\''
			+Items[i0]._id+'\')" value="削除" /></td>'
			+'</tr>';
		}
		 str0+='</tbody></table>';
		document.getElementById('list').innerHTML=str0;
	});
	xhr.send();
}

window.onload =list;
