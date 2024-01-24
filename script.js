setInterval(function Change() {
  modifyColor(document.getElementById('modify'));}, 10000);


function modifyColor() { 
   
 let button = document.getElementById('modify');
 if (button.classList.contains('btn-danger')) {
     button.classList.remove('btn-danger');
     button.classList.add('btn-warning');
 } else if (button.classList.contains('btn-warning')) {
     button.classList.remove('btn-warning');
     button.classList.add('btn-success');
 } else {
     button.classList.remove('btn-success');
     button.classList.add('btn-danger');
 }
}
