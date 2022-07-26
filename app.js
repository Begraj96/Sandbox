// const name = 'BegRaj';
// const age = 25;
// let html;

// html = '<ul>' +
// '<li> Name: ' + name + '<li>' +
// '<li> Age: ' + age + '<li>' +
// '<ul>';


// document.body.innerHTML = html;


// let val;

// val = window.innerHeight;
// val = window.outerHeight;


// // Navigator Object
//    val = window.navigator;
//    val = window.navigator.appName;
//    val = window.navigator.appVersion;
//    val = window.navigator.platform;
//    val = window.navigator.vendor;
   

// console.log(val);


// // Global Scope 
// var a = 1;
// let b = 2;
// const c = 3;

// if(true) {
//     var a = 5;
//     let b = 6;
//     const c = 7;
//     console.log('If Scope: ', a, b, c);
// }

// console.log('Global Scope: ', a, b, c);


// val = document.links;
// val = document.links[0];
// val = document.URL;

// val = document.scripts;

// console.log(val);



// // document.getElementById()
// console.log(document.getElementById('task-title').id);

// console.log(document.getElementById('task-title').className);


// // Change Styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.color = '#fff';
// document.getElementById('task-title').style.background = '#333';


// // Change Content 
// document.getElementById('task-title').textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Task';



// // document.getElementByClassName
//  const items = document.getElementsByClassName('collection-item');
//  console.log(items);
//  console.log(items[0]);
//  items[0].style.color = 'red';


// // document.getElementByTagName

// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[2].textContent = 'Hello!';

// // Convert HTML Collection into array
//  lis = Array.from(lis);
//  lis.reverse();

//  lis.forEach(function(li){
//      console.log(li)
//  });
 
// console.log(lis);


// // document.querySelectorAll
//  const items = document.querySelectorAll('ul.collection li.collection-item');

//  items.forEach(function(item, index){
//   item.textContent = `${index}:Hello`;
//  });

//  const liOdd = document.querySelectorAll('li:nth-child(odd)');
//  const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){
//     li.style.background = '#aaa';
// });

// for(let i=0; i<liEven.length; i++){
//     liEven[i].style.background = '#666'
// }

//  console.log(items);



// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get children element nodes
// val = list.childNodes;
// val = list.childNodes[0];

//  val = list.children;
//  val = list.children[1];

//  // First Child
//  val = list.firstChild;
//  val = list.firstElementChild;

//  // Last Child
//  val = list.lastChild;
//  val = list.lastElementChild;

// // Count child element
// val = list.childElementCount;

// // Get parent node
//  val = listItem.parentNode;
//  val = listItem.parentElement;

// console.log(val);


// // Create Element
// const li = document.createElement('li');

// // Add Class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attributes
//  li.setAttribute('title', 'New Item');

// // Create text node and append 
//  li.appendChild(document.createTextNode('Hello World!')); 

// console.log(li);


// document.querySelector('.clear-tasks').addEventListener('click', onclick);

// function onclick(e){
//   //  console.log('clicked'); 
  
//     let val;
//     val = e;

//     console.log(val);

// }


const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click 
 clearBtn.addEventListener('click', runEvent);


// Event Handler
 function runEvent(e){
     console.log(`EVENT TYPE: ${e.type}`);
 }