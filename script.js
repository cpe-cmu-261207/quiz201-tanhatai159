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
  let student_id = 630610732;
  author.innerHTML = student_id+length.value;
  btn_toggle.innerHTML = "show Author"
}

reset_btn.addEventListener("click", () => {
  p.innerHTML = oringin_word;
})

search_btn.addEventListener("click", () => {
  const span = document.createElement("span")
  span.color = color.value;
  p.foreach(() => {
    
  })
})


// more codes for Search and Reset buttons here
