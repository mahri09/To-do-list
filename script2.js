
const addItem = function(e){
  if (e.key === 'Enter' || e.type === 'click'){
    if(document.getElementById('item_name').value.trim() === ""){
      alert('enter value');
    } else{
      const listItem = document.createElement('li');

      const itemInput = document.createElement('input');
      itemInput.className = 'item-input';
      itemInput.hidden = true;
      listItem.appendChild(itemInput);
      listItem.addEventListener('click', completeItem);

      const itemText = document.createElement('span');
      itemText.className = 'item-text';
      itemText.innerHTML = document.getElementById('item_name').value;
      listItem.appendChild(itemText);

      const editBtn = document.createElement('span');
      editBtn.className = 'edit btn-group-edit';
      editBtn.innerHTML  = ' - edit ';
      editBtn.style.color = 'green';
      editBtn.addEventListener('click', editItem);
      listItem.appendChild(editBtn);
      
      const saveBtn = document.createElement('span');
      saveBtn.className = 'save btn-group-save';
      saveBtn.style.color = 'green';
      saveBtn.innerHTML  = ' - save ';
      saveBtn.hidden = true;
      saveBtn.addEventListener('click', saveItem);
      listItem.appendChild(saveBtn);

      const cancelBtn = document.createElement('span');
      cancelBtn.className = 'cancel btn-group-save';
      cancelBtn.style.color = 'red';
      cancelBtn.innerHTML  = ' cancel ';
      cancelBtn.hidden = true;
      cancelBtn.addEventListener('click', cancelItem);
      listItem.appendChild(cancelBtn);
      
      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove btn-group-edit';
      removeBtn.style.color = 'red';
      removeBtn.innerHTML  = ' delete ';
      removeBtn.addEventListener('click', removeItem);
      listItem.appendChild(removeBtn);
      
    
      document.getElementById('taskList').appendChild(listItem);
      document.getElementById('item_name').value = '';
    }
  }
}

function removeItem(e){
  document.getElementById('taskList').removeChild(e.target.parentElement)
}

function editItem(e){
  const itemInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const itemText = e.target.parentElement.getElementsByClassName('item-text')[0];
  const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
  const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');

   // console.log(itemText)
  // console.log(textItem)

  itemText.hidden = true;
  itemInput.hidden = false;
 
  for(i of editGroupBtn) {
    i.hidden = true
  }
  for(i of saveGroupBtn) {
    i.hidden = false
  }

  itemInput.value = itemText.innerText;
  
  textInput.select();
}

function cancelItem(e){
  const itemInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const itemText = e.target.parentElement.getElementsByClassName('item-text')[0];

  itemInput.hidden = true;
  itemText.hidden = false;
  
  const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
  const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');
  for(i of editGroupBtn) {
    i.hidden = false
  }
  for(i of saveGroupBtn) {
    i.hidden = true
  }
}

function saveItem(e){
  const itemInput = e.target.parentElement.getElementsByClassName('item-input')[0];
  const itemText = e.target.parentElement.getElementsByClassName('item-text')[0];

  itemInput.hidden = true;
  itemText.hidden = false;
  itemText.innerHTML = itemInput.value;
  
  const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
  const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');
  
  for(i of editGroupBtn) {
    i.hidden = false;
  }
  for(i of saveGroupBtn) {
    i.hidden = true
  }

  if(itemInput.value.trim() === ''){
    alert('enter a value');
    document.getElementById('item_name').value = '';
  } else {
    itemInput.value = itemText.innerHTML;
  }

}

function completeItem(e){
  const itemText = e.target.parentElement.getElementsByClassName('item-text')[0];

 if(itemText.style.textDecoration === 'line-through'){
  itemText.style.textDecoration = 'none';
 } else {
  itemText.style.textDecoration = 'line-through';
 }

}




document.getElementById('btn_add').addEventListener('click', addItem);

for (let i of document.getElementsByClassName('remove')){
  i.addEventListener('click', removeItem)
}

for (let i of document.getElementsByClassName('edit')){
  i.addEventListener('click', editItem)
}

for (let i of document.getElementsByClassName('cancel')){
  i.addEventListener('click', cancelItem)
}

for (let i of document.getElementsByClassName('save')){
  i.addEventListener('click', saveItem)
}

for (let i of document.getElementsByClassName('item-text')){
  i.addEventListener('click', completeItem)
}

