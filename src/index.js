import _ from "lodash"
import "./style.css"
import printMe from "./print.js"

function component() {
  const element = document.createElement("div")
    const btn = document.createElement("button")


  // Lodash, now imported by this script

  element.innerHTML = _.join(["This is really crazy", "webpack"], " ")
  element.classList.add("hello")

  btn.innerHTML = "Fuck!"
  btn.onclick = printMe

  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
