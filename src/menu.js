
function createMenu() {
  const body = document.getElementById("body")
  body.textContent = ""
  
  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="Pizza"
  title.textContent="Le Menu"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="pizza.png"

  
  //buttons
  const menuBtn = document.createElement("button")
  menuBtn.textContent="Menu"
  menuBtn.id="menu"
  const contactBtn = document.createElement("button")
  contactBtn.textContent="Contact"
  contactBtn.id="contact"

  //body
  body.appendChild(title)
  body.appendChild(foodsImage)
  body.appendChild(description)

}

export default createMenu