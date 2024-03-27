   document.getElementById("submit").addEventListener("click", function submitData(e) {
   e.preventDefault();
   let tasktitle=document.getElementById("tasktitle").value;
   let taskdescription=document.getElementById("taskdescription").value;
   alert('Task added successfully!')
   localStorage.setItem(tasktitle,taskdescription)
   location.reload();
   document.getElementById('taskadded').innerHTML = localStorage.getItem(tasktitle);
});

document.getElementById("clear").addEventListener("click", function clearData(e) {
    e.preventDefault();
    document.getElementById("tasktitle").value="";
    document.getElementById("taskdescription").value="";
    alert('Task cleared!')
    localStorage.removeItem(tasktitle,taskdescription)
 });

 
 let isWhite = false;

 document.getElementById("swicth").addEventListener("click", function changeTheme() {
     if (isWhite) {
         document.body.style.backgroundColor = "white";
     } else {
         document.body.style.backgroundColor = "black";
         
     }
     isWhite = !isWhite; 
 });
 