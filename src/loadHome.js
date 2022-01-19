function  createHome() { 
    
  //text
  const title = document.createElement("h1")
  const description = document.createElement("p")
  description.textContent="Very Nice"
  title.textContent="Get some food"


  //image
  const foodsImage = document.createElement("img");
  foodsImage.src="foods.jpg"


  //body
  const body = document.getElementById("body")
  body.textContent=""

  body.appendChild(title)
  body.appendChild(foodsImage)
  body.appendChild(description)

}

export default createHome


