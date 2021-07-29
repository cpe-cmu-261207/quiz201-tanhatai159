const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const reset_btn = document.querySelector("#reset")
const p = document.querySelector("#text")
const search_btn = document.querySelector("#search")
const oringin_word = p.innerHTML;
const color = document.querySelector("#color")

// define more constants and variables here

btn_toggle.onclick = () => {

}

reset_btn.addEventListener("click", () => {
  p.innerHTML = oringin_word;
})

search_btn.addEventListener("click", () => {
  
})


// more codes for Search and Reset buttons here
