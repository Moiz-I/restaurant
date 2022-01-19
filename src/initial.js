function initialLoad() {
  const content = document.getElementById("content")

  //buttons
  const menuBtn = document.createElement("button")
  menuBtn.textContent="Menu"
  menuBtn.id="menu"
  const contactBtn = document.createElement("button")
  contactBtn.textContent="Contact"
  contactBtn.id="contact"
  const homeBtn = document.createElement("button")
  homeBtn.textContent="Home"
  homeBtn.id="home"

  //header
  const header = document.createElement("div")
  header.classList.add("header")  
  header.appendChild(homeBtn)
  header.appendChild(menuBtn)
  header.appendChild(contactBtn)

  //body
  const body = document.createElement("div")
  body.id="body"

  content.appendChild(header)
  content.appendChild(body)

}

export default initialLoad