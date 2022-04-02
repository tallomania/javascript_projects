const formInput = document.querySelector(".form input"),
checkBtn = document.querySelector(".btn"),
checkResult = document.querySelector(".result"),
container = document.querySelector(".container");
let transformInput;

checkBtn.addEventListener('click',() => {
    // this will enable us split,reverse and join inputs
    let reverseInput = transformInput.split("").reverse("").join("");
    checkResult.style.display = "block";
    if(transformInput != reverseInput){
        container.style.backgroundColor = "crimson"
        checkBtn.innerHTML = "Check for a new word";
        return  checkResult.innerHTML = `sorry ! <span>" ${formInput.value.toUpperCase()} "</span> isn't a Palindrome`;
    };
    checkResult.innerHTML = `Yes ! <span>" ${formInput.value.toUpperCase()} "</span> is a Palindrome`;
    checkBtn.innerHTML = "Palindrome Result !!!";

});
formInput.addEventListener("keyup", () => {
    // this is to return input value to uppercase and replace other values as empty
    transformInput = formInput.value.replace(/[^a-z]/g, "");

    if(transformInput){
          checkBtn.classList.add("clicked")
          checkBtn.innerHTML = "Check Your Result !!!";
    };
    checkResult.style.display = "none";
    checkBtn.classList.remove("clicked");

});
