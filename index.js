document.addEventListener("DOMContentLoaded", function(){
    let firstText = document.querySelector("p");
    firstText.textContent = "This is really cool!";
    console.log(firstText.textContent);
})

console.log(document.querySelector("p").textContent);