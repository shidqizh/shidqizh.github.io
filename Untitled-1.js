function filterBar(context) {
    let movieItems = document.getElementById("listMovie").children
    let searchTerms = context.value.split(" ")
    if (context.value != "") {
        for (let index = 0; index < movieItems.length; index++) {
            const element = movieItems[index];
            let text = element.getElementsByClassName("movieTitle")[0].innerText
            if (searchTerms.every(term => text.toLowerCase().includes(term.toLowerCase()))) {
                element.style.display = "block"
            } else {
                element.style.display = "none"
            }
        }
    } else {
        for (let index = 0; index < movieItems.length; index++) {
            const element = movieItems[index]
            element.style.display = "block"
        }
    }
}