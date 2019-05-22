
let totProd1= parseInt(document.querySelector("#totalProd1").textContent)
console.log(totProd1) 
let totProd2= parseInt(document.querySelector("#totalProd2").textContent)
console.log(totProd2)
let totProd3= parseInt(document.querySelector("#totalProd3").textContent)
console.log(totProd3) 
let totalBag= parseInt(document.querySelector("#totalBag").textContent)
console.log(totalBag) 
//let total= document.querySelector("#totalBag").textContent = totProd1+ totProd2 + totProd3
//console.log(total) 


 // change color of button like

let likeTab = Array.from(document.querySelectorAll(".like"))
for (element of likeTab){element.addEventListener("click",(element)=>{
      if(getComputedStyle(element.target).color === "rgb(255, 0, 0)" ){element.target.style.color = "rgb(128, 128, 128)"; }
     else{ element.target.style.color = "rgb(255,0,0)"; }})
    }





 //change sum of product with plus_button

let itemTab1 = Array.from(document.querySelectorAll(".plus_btn"))
console.log(itemTab1)

for(element of itemTab1){element.addEventListener("click", element=>{
  let sum = element.target.parentNode.querySelector(".total_item").value
  let newSum = parseInt(sum) + 1
  element.target.parentNode.querySelector(".total_item").value = newSum
  let total1= newSum*parseInt(element.target.parentNode.parentNode.querySelector(".price").innerText)
  let n = total1.toString();
  element.target.parentNode.parentNode.querySelector(".btn_total").textContent = n+" Dinars"
  document.querySelector(".totalStore").textContent = total1
})}



// change sum of product with minus_button
let itemTab2 = Array.from(document.querySelectorAll(".minus_btn"))
console.log(itemTab2)

for(element of itemTab2){element.addEventListener("click", element=>{
  let sum = element.target.parentNode.querySelector(".total_item").value
  if(parseInt(sum)>0){
    let newSum = parseInt(sum) - 1
    element.target.parentNode.querySelector(".total_item").value = newSum
    let total1= newSum*parseInt(element.target.parentNode.parentNode.querySelector(".price").innerText)
    let n = total1.toString();
    element.target.parentNode.parentNode.querySelector(".btn_total").textContent = n+" Dinars"
    document.querySelector(".totalStore").textContent = total1
  }
})}




//delete button
let deleteTab = Array.from(document.querySelectorAll(".delete"))
for (element of deleteTab){element.addEventListener("click",(element)=>{
      // change the total bag
      let  x = element.target.parentNode.parentNode 
      console.log(x)
      let y= x.querySelector(".total > .btn_total").textContent
       let z= parseInt(x.querySelector(".total > .btn_total").textContent)
       let newTotal =parseInt(document.querySelector(".totalStore").textContent)-z
       document.querySelector(".totalStore").textContent= newTotal
       
 element.target.parentNode.parentNode.remove()
    
    })
}







