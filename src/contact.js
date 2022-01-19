function createContact() {
  const body = document.getElementById("body")
  body.textContent = ""

  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="If you want"
  title.textContent="Call us"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="phone.jpg"

  
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

export default createContact