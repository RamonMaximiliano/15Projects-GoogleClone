/* menu-home*/
function showHome() {
    document.querySelector("p.menu-home").classList.remove("class-hidden")
    document.querySelector("p.menu-home").classList.add("class-visible")
}

function hideHome() {
    document.querySelector("p.menu-home").classList.remove("class-visible")
    document.querySelector("p.menu-home").classList.add("class-hidden")
}
/* menu-home*/

/* menu-google*/
function showGoogle() {
    document.querySelector("p.menu-Google").classList.remove("class-hidden")
    document.querySelector("p.menu-Google").classList.add("class-visible")
}

function hideGoogle() {
    document.querySelector("p.menu-Google").classList.remove("class-visible")
    document.querySelector("p.menu-Google").classList.add("class-hidden")
}
/* menu-google*/


/* menu-fox*/
function showFox() {
    document.querySelector("p.menu-Fox").classList.remove("class-hidden")
    document.querySelector("p.menu-Fox").classList.add("class-visible")
}

function hideFox() {
    document.querySelector("p.menu-Fox").classList.remove("class-visible")
    document.querySelector("p.menu-Fox").classList.add("class-hidden")
}
/* menu-fox*/

/* menu-about*/
function showAbout() {
    document.querySelector("p.menu-About").classList.remove("class-hidden")
    document.querySelector("p.menu-About").classList.add("class-visible")
}

function hideAbout() {
    document.querySelector("p.menu-About").classList.remove("class-visible")
    document.querySelector("p.menu-About").classList.add("class-hidden")
}
/* menu-about*/


/* FOX PROJECT */

function loadFox() {
    fetch("https://randomfox.ca/floof/")
        .then(function (fox) {
            return fox.json();
        })
        //abaixo tem que usar o "src" atribute para adicionar ele á image tag
        .then(function (json) {
            document.querySelector(".fox-image").src = (json.image)
            console.log(json)
        })
        .catch(function () {
            console.log("Deu erro");
        })
}

/* FOX PROJECT */

/* GOOGLE CLONE */

function feeling() {
    window.alert("Good for you!!!")
}


function googleSearch() {
    let searchText = document.querySelector(".search").value
    console.log(searchText)
    if (searchText == '') {
        window.alert("Type something!!!")
    } else {
        //on the below URL, whatever comes after the q= is the word google will search for 
        window.open(`https://www.google.com/search?q=${searchText}`, "_blank")
    }
}

/* GOOGLE CLONE */



function refresh() {
    window.location.reload()
}