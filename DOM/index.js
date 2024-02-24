// id

// document.getElementById('title')
// document.getElementById('title').id;
// document.getElementById('title').class
// document.getElementById('title').className
// document.getElementById('title').getAttribute('id')
// document.getElementById('title').getAttribute('class')
// document.getElementById('title').setAttribute('class', 'test')
// document.getElementById('title').setAttribute('class', 'test heading')
// const title = document.getElementById('title')
// title.style.backgroundColor = 'red'
// title.style.padding = '5px'

// title.innerText     //innerText wahi value deta hai jo display me show howa wa hota hai
// 'Dom Learning'
// title.textContent   // textContent sari value dy dyta jis me display none css bhi apply hwi v ho
// 'Dom Learning  hy'
// title.innerHTML    // innerHTML gives us htmlTag also and whole content
// 'Dom Learning  <span style="display: none;">hy</span>'

// document.querySelector('h1')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​
// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​


// let myUl = document.querySelector('ul')​
// let List = myUl.querySelector('li')
// List.style.color = "green"



// let nodelist = document.querySelectorAll('h2')
// NodeList(3) [h2, h2, h2]

// nodelist.style.backgroundColor = "red" // Wrong Syntex

// nodelist[0].style.backgroundColor = "red"
// 'red'         // We can use ForEach Loop in NodeList

// let ListI = document.getElementsByClassName('list-item')
// document.getElementsByClassName('list-item')
// HTMLCollection // It will give us HTMLCollection and we can't loop in HTMLCollectin we have to convert this into Array
// Array.from(ListI) // that's how we cover HTMLCollection into Array