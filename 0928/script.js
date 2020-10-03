var button = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var donelist=document.getElementById('donelist');
var date=document.getElementById('date');

var cnt = 1;
var cnt2 = 1;


button.addEventListener('click', clickButton);

function clickButton() {
  var temp = document.createElement('li');
  temp.setAttribute("class", "list-group-item");
  temp.setAttribute("id", "li"+cnt);
  temp.innerHTML = input.value;
  temp.innerHTML += "<button style='float: right;' class='btn btn-success' type='button' onclick='done("+cnt+")'>완료</button>";
  temp.innerHTML += "<button style='float: right;' class='btn btn-danger' type='button' onclick='remove("+cnt+")'>삭제</button>";
  temp.innerHTML += "<br><br>";
  temp.innerHTML += "<p align='right'>"+date.value+"</p>";
  list.appendChild(temp);
  cnt++;
}

function remove(cnt) {
  //window.alert(cnt);
  var li = document.getElementById('li'+cnt);
  list.removeChild(li);
}

function remove2(cnt2) {
    //window.alert(cnt);
    var li_2 = document.getElementById('li_2'+cnt2);
    donelist.removeChild(li_2);
}

function done(){
    var temp = document.createElement('li_2');
    temp.setAttribute("class", "donelist-group-item");
    temp.setAttribute("id", "li_2"+cnt2);
    temp.innerHTML = input.value;
    temp.innerHTML += "<button style='float: right;' class='btn btn-danger' type='button' onclick='remove2("+cnt2+")'>삭제</button>";
    temp.innerHTML += "<br><br>";
    temp.innerHTML += "<p align='right'>"+date.value+"</p>";
    donelist.appendChild(temp);
    cnt2++;
  
}
