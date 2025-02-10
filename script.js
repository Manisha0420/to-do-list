function recentDate() {
     const now = new Date();

     const date = now.getDate();
     const month = now.getMonth() + 1; 
     const year = now.getFullYear();

     const formattedDate = `${date}-${month}-${year}`;
     return formattedDate; 
 }

 document.getElementById('currentDate').textContent = recentDate();

 let inputs = document.getElementById('inp');
 let text =document.querySelector('.text')

 function Add(){
    if(inputs.value == ""){
        alert('please enter task')
    }else{
        let newElement =document.createElement('ul');
        newElement.innerHTML=`${inputs.value} <i class="ri-close-line"></i>`;
        text.append(newElement);
        inputs.value="";
        newElement.querySelector('i').addEventListener('click',remove);
        function remove(){
            newElement.remove()
        }
    }
 }
