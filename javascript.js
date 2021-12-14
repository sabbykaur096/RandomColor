var selectorArr = document.querySelectorAll(".btn .color-selector")
var reset = document.querySelector(".btn .reset")

var circleArr = document.querySelectorAll("main>div")



for(let i = 0; i < circleArr.length; i++)
{
    circleArr[i].innerHTML = i+1 
    var rndm = Math.floor(Math.random() * 4)
    circleArr[i].classList.add(`${selectorArr[rndm].classList[1]}`) 
}

for(let i = 0; i < selectorArr.length; i++)
{
    selectorArr[i].addEventListener("click", removeExtra) ;
}

reset.addEventListener("click", displayAll)

function removeExtra(e)
{
    displayAll()
    console.log(e.currentTarget.className)
    for(let i = 0; i < circleArr.length; i++)
    {
        if((circleArr[i].classList[1]) !== e.currentTarget.classList[1])
            circleArr[i].style.display = "none"
    }
}

function displayAll()
{
    for(let i = 0; i < circleArr.length; i++){
        circleArr[i].style.display = "flex"
    }
}