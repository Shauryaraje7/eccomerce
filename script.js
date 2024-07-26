let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let nextt = document.querySelector(".nextt");
let prevv  = document.querySelector(".prevv")
let index = 1;
let minIndex = 1; // define the minimum index value
let maxIndex = 4; 

function main() {
    
nextt.addEventListener("click", ()=>{
    if (index < maxIndex) { // check if we're not at the maximum index
        index++;
        nextt.href = `#home${index}`;
        nextLink.textContent = `sdasdasdasd`;
        nextt.style.display = 'block';
      }
    });
prevv.addEventListener("click" , ()=>{
    if (index > minIndex) { // check if we're not at the minimum index
        index--;
        prevv.href = `#home${index}`;
        prevLink.textContent = `sdasdasdasd`;
      }
    });
}
main();