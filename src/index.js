import createHome from "./loadHome"
import createMenu from "./menu"
import createContact from "./contact"
import initialLoad from "./initial"



initialLoad()
createHome()

const homeBtn = document.getElementById("home")
const menuBtn = document.getElementById("menu")
const contactBtn = document.getElementById("contact")

menuBtn.addEventListener("click",() => {
  createMenu()
} )

homeBtn.addEventListener("click",() => {
  createHome()
} )

contactBtn.addEventListener("click",() => {
  createContact()
} )