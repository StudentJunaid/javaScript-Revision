function Language(addLang){
    const li = document.createElement('li')
     li.innerHTML = `${addLang}`
     document.querySelector(".language").appendChild(li)
}

Language("Java")
Language("C++")

// This Optimize way to do

function OptimiLanguage(addLang) {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(addLang))
    document.querySelector(".language").appendChild(li) 
}

OptimiLanguage("PHP")

// Edit Value

const Secondvalue = document.querySelector("li:nth-child(2)")
// Secondvalue.innerHTML = "Assembli"
const newli = document.createElement('li')
newli.textContent = "Assembly"
Secondvalue.replaceWith(newli);

// Edit Value

const firstValue = document.querySelector("li:nth-child(1)")
// firstValue.innerHTML = "TypeScript"
// firstValue.outerHTML = '<li>TypyScript</li>'

const firstLi = document.createElement("li")
firstLi.textContent = "TypeScript"
firstValue.replaceWith(firstLi) 

// Remove

const lastvalue = document.querySelector("li:last-child")
lastvalue.remove()