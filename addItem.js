const addItem = function (e){
  if( e.key === 'Enter' || e.type === 'click' ){

    if(document.getElementById('item_name').value.trim() === ""){
      alert('enter value');
    } else{
      // create list item on the fly
      const listItem = document.createElement('li');
      //create text input for thelet editing task
      const textInput = document.createElement('input');
      //manuplate the textInput attributes
      textInput.className = 'item-input';
      textInput.hidden = true;
      listItem.appendChild(textInput);

      // listItem.innerHTML = `${document.getElementById('item_name').value} -- <span class="edit" style="color:green">edit </span> <span class="remove" style="color:red"> delete</span>`

      //Create text note item for the editing a task
      const textItem = document.createElement('span');
      textItem.className = 'item-text';
      textItem.innerHTML = document.getElementById('item_name').value;
      listItem.appendChild(textItem);
      listItem.addEventListener('click', completeItem)

      //create edit btn
      const editBtn = document.createElement('span');
      editBtn.className = 'edit btn-group-edit';
      editBtn.innerHTML = '- edit - ';
      editBtn.style.color = 'green';
      editBtn.addEventListener('click', editItem);
      listItem.appendChild(editBtn);

       //create save btn
      const savebtn = document.createElement('span');
      savebtn.className = 'save btn-group-save';
      savebtn.innerHTML = '- save - ';
      savebtn.style.color = 'green';
      savebtn.hidden = true;
      savebtn.addEventListener('click', saveItem);
      listItem.appendChild(savebtn);
 

      //create remove btn
      const removeBtn = document.createElement('span');
      removeBtn.className = 'remove btn-group-edit';
      removeBtn.innerHTML = ' delete ';
      removeBtn.style.color = 'red';
      removeBtn.addEventListener('click', removeItem);
      listItem.appendChild(removeBtn);

      //create cancel btn
      const cancelBtn = document.createElement('span');
      cancelBtn.className = 'cancel btn-group-save';
      cancelBtn.innerHTML = ' cancel ';
      cancelBtn.style.color = 'red';
      cancelBtn.hidden = true;
      cancelBtn.addEventListener('click', cancelItem);
      listItem.appendChild(cancelBtn);

      
      document.getElementById('taskList').appendChild(listItem);
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
    const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');

    textItem.hidden = true;
    textInput.hidden = false;
    
    for(let i of editGroupBtn){
      i.hidden = true;
    };

    for(let i of saveGroupBtn){
      i.hidden = false;
    };

    textInput.value = textItem.innerText;

    textInput.select();
    // console.log(textInput);  
   
  }

  const cancelItem = function (e) {
    // console.log(e.target.style.color= 'yellow')
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');

    textItem.hidden = false;
    textInput.hidden = true;
    
    for(let i of editGroupBtn){
      i.hidden = false;
    };

    for(let i of saveGroupBtn){
      i.hidden = true;
    };

    textInput.value = textItem.innerText;
      
  }

  const saveItem = function (e) {
    // console.log(e.target.style.color= 'yellow')
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    const textInput = e.target.parentElement.getElementsByClassName('item-input')[0];
    const editGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-edit');
    const saveGroupBtn = e.target.parentElement.getElementsByClassName('btn-group-save');

    textItem.hidden = false;
    textInput.hidden = true;
    
    for(let i of editGroupBtn){
      i.hidden = false;
    };

    for(let i of saveGroupBtn){
      i.hidden   = true;
    };

    
    //Assign Text inputs value to text items innerHtml
    if(textInput.value.trim() === ""){
      alert('enter a value');
      //empty the input value if there are empty spaces
      document.getElementById('item_name').value = '';
    } else {
      textItem.innerText = textInput.value;
    }
    
  }
  
  const completeItem = function (e) {
    //select textItem from the HTML elements
    const textItem = e.target.parentElement.getElementsByClassName('item-text')[0];
    
    if(textItem.style.textDecoration === 'line-through'){
      textItem.style.textDecoration = 'none'
    } else {
      textItem.style.textDecoration = 'line-through';
    }
    
  }
  

export {addItem, removeItem, editItem, cancelItem, saveItem, completeItem}




