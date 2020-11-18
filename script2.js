
const addItem = function(e){
  if (e.key === 'Enter' || e.type === 'click'){
  
  let listItem = document.createElement('li');
  listItem.innerHTML = document.getElementById('item_name').value;

  

  document.getElementById('taskList').appendChild(listItem);
  document.getElementById('item_name').value = '';


  }
}

function removeItem(e){
  document.getElementById('taskList').removeChild(e.target.parentElement)
}

document.getElementById('btn_add').addEventListener('click', addItem);

for (i of document.getElementsByClassName('remove')){
  i.addEventListener('click', removeItem)

}