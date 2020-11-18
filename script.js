const addItem = function (e){
  if( e.key === 'Enter' || e.type === 'click' ){
    if(document.getElementById('item_name').value.trim() === ""){
      alert('enter value');
    } else{
      const lisItem = document.createElement('li');
      // lisItem.innerHTML = `${document.getElementById('item_name').value} -- <span class="edit" style="color:green">edit </span> <span class="remove" style="color:red"> delete</span>`
      lisItem.innerHTML = document.getElementById('item_name').value + ' -';
      
      const editBtn = document.createElement('span');
      const removeBtn = document.createElement('span');

      editBtn.innerHTML = ' edit ';
      removeBtn.innerHTML = ' delete';
      
      removeBtn.style.color = 'red';
      editBtn.style.color = 'green';
      removeBtn.addEventListener('click', removeItem);
      editBtn.addEventListener('click', editItem);

      lisItem.appendChild(editBtn);
      lisItem.appendChild(removeBtn);
      
      document.getElementById('taskList').appendChild(lisItem);
      document.getElementById('item_name').value = '';
    }
  } 
  }
  
  const removeItem = function (e) {
    document.getElementById('taskList').removeChild(e.target.parentElement);
  }

  const editItem = function (e) {
    // console.log(e.target.style.color= 'yellow')
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');
    const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');

    textItem.hidden = true;
    textInput.hidden = false;
    
    for( i of editGroupBtn){
      i.hidden = true;
    };

    for( i of saveGroupBtn){
      i.hidden = false;
    };

    textInput.value = textItem.innerText;

  
    // for(i of document.getElementsByClassName('editLi')){
    //   i.contentEditable = true;
    // }   
  }
  // document.getElementById('btn_add').onclick = addItem; // function assign ediyor;
  //when we click btn or keypress add eventlistener and cal add item function
  document.getElementById('btn_add').addEventListener('click', addItem); //we call function whne we click btn
  document.getElementById('item_name').addEventListener('keypress', addItem); //we call function whne we click btn

  for( i of document.getElementsByClassName('remove')){
      i.addEventListener('click', removeItem);
  };

  for( i of document.getElementsByClassName('edit')){
    i.addEventListener('click', editItem);
    
};

// document.querySelectorAll('.remove').addEventListener('click', removeItem);