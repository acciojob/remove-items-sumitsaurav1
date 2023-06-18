//your JS code here. If required.
let colorSelect = document.getElementById("colorSelect");
let button = document.getElementById("btn");

button.addEventListener('click',(e)=>{
    e.preventDefault();

    let colors = document.querySelectorAll("#colorSelect option")
  
    for(let i=0;i<colors.length;i++){

      if(colorSelect.value===colors[i].value){
        colorSelect.removeChild(colors[i]);
      }
    }
})