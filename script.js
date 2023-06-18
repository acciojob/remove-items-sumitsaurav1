//your JS code here. If required.
let colorSelect = document.getElementById("colorSelect");
let button = document.getElementById("btn");

button.addEventListener('click',(e)=>{
    e.preventDefault();

    let currentSelected = colorSelect.options[colorSelect.selectedIndex]
    if(currentSelected!=null){
      colorSelect.removeChild(currentSelected)
    }
})