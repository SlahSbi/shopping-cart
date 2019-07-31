// change color of button like

let likeList = document.querySelectorAll(".like")
for (element of likeList) {
  element.addEventListener("click", (element) => {
    if (element.target.style.color === "rgb(255, 0, 0)") { element.target.style.color = "rgb(128, 128, 128)" }
    else { element.target.style.color = "rgb(255,0,0)" }
  })
}

//delete button
let deleteList = document.querySelectorAll(".delete")
for (element of deleteList) {
  element.addEventListener("click", (element) => {
    // change the total bag
    let x = element.target.parentNode.parentNode //select the product to delete
    let z = parseInt(x.querySelector(".total > .btn_total").textContent)
    document.querySelector("#totalBag").textContent = parseInt(document.querySelector("#totalBag").textContent) - z
    element.target.parentNode.parentNode.remove()

  })
}


//the first total
let totProd1 = parseInt(document.querySelector("#totalProd1").textContent)
let totProd2 = parseInt(document.querySelector("#totalProd2").textContent)
let totProd3 = parseInt(document.querySelector("#totalProd3").textContent)
let totalBag = parseInt(document.querySelector("#totalBag").textContent)
let total = document.querySelector("#totalBag").textContent = totProd1 + totProd2 + totProd3

//change sum of product with plus_button

let itemList1 = document.querySelectorAll(".plus_btn")

for (element of itemList1) {
  element.addEventListener("click", element => {
    let oldTotal = parseInt(element.target.parentNode.parentNode.querySelector(".btn_total").textContent)
    let sum = element.target.parentNode.querySelector(".total_item").value
    let newSum = parseInt(sum) + 1
    element.target.parentNode.querySelector(".total_item").value = newSum
    let newtotal = newSum * parseInt(element.target.parentNode.parentNode.querySelector(".price").innerText)
    element.target.parentNode.parentNode.querySelector(".btn_total").textContent = newtotal + " Dinars"
    //add the newtotal to total bag
    document.querySelector("#totalBag").textContent = parseInt(document.querySelector("#totalBag").textContent) + newtotal - oldTotal
  })

}

// change sum of product with minus_button
let itemList2 = document.querySelectorAll(".minus_btn")

for (element of itemList2) {
  element.addEventListener("click", element => {
    let oldTotal = parseInt(element.target.parentNode.parentNode.querySelector(".btn_total").textContent)
    let sum = element.target.parentNode.querySelector(".total_item").value
    if (parseInt(sum) > 0) {
      let newSum = parseInt(sum) - 1
      element.target.parentNode.querySelector(".total_item").value = newSum
      let newtotal = newSum * parseInt(element.target.parentNode.parentNode.querySelector(".price").innerText)
      element.target.parentNode.parentNode.querySelector(".btn_total").textContent = newtotal + " Dinars"
      document.querySelector("#totalBag").textContent = parseInt(document.querySelector("#totalBag").textContent) + newtotal - oldTotal
    }
  })
}











