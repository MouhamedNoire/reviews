const reviews =[
    {
        id: 1,
        name: "sam smith",
        job: "web developer",
        img:"images/person-1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum."
    },
    {
        id: 2,
        name: "john doe",
        job: "web designer",
        img:"images/person-2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum."
    },
    {
        id: 3,
        name: "peter doe",
        job: "intern",
        img:"images/person-3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum."
    },
    {
        id: 4,
        name: "susan doe",
        job: "Ux designer",
        img:"images/person-4.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Quisquam, voluptatum."
    }
];
//select items
const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

//set starting item

let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    let item = reviews[currentItem];
    console.log(item);
    console.log(img);
});