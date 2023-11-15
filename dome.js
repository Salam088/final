const plusbuttons = document.getElementsByClassName('plusbuttons');
const minusbuttons = document.getElementsByClassName('minusbuttons');
const removeall = document.getElementsByClassName('removeall')
const removebuttons = document.getElementsByClassName('removebuttons')
const price = document.getElementsByClassName('price')
const likebuttons = document.getElementsByClassName('likebuttons')
const count = document.getElementsByClassName('count')
const total = document.getElementsByClassName('total')
const totalamount1 = document.getElementsByClassName('totalamount')
const amount = document.getElementsByClassName('amount')




// button management plus
for (const button of plusbuttons) {
    button.addEventListener('click', () => {
        const count = button.nextElementSibling.innerHTML
        const countInt = parseInt(count)

        button.nextElementSibling.innerHTML = countInt + 1
        checkout()
        console.log()
    })
}


// button management minus
for (const button of minusbuttons ) {
    button.addEventListener('click', () => {
        const count = button.previousElementSibling.innerHTML
        const countInt = parseInt(count)

        button.previousElementSibling.innerHTML = countInt - 1
        checkout()
        console.log()
    })
}


// button management removeall
for (const button of removeall ) {
    button.addEventListener('click', () => {
        const grandParent = button.parentElement.parentElement
        grandParent.remove()
        checkout()
        console.log()
    })
}


// button management remove
for (const button of removebuttons ) {
    button.addEventListener('click', () => {
        const grandParent = button.parentElement.parentElement
        grandParent.remove()
        checkout()
        console.log()
    })
}

// button management like
for (const button of likebuttons ) {
    button.addEventListener('click', () => {
        const icon = button.firstElementChild 
        const iconClass = icon.getAttribute("class")

        if (iconClass.includes("liked")) {
           const newClass = "bi bi-heart-fill"
           icon.setAttribute("class", newClass)
        } else {
            const newClass = "bi bi-heart-fill liked"
            icon.setAttribute("class", newClass)
        }
        console.log("========== ",icon)
        checkout()
        console.log()
    })
}


// solution 
const checkout = () => {
    var totalamount = 0
    for (let i= 0; i<count.length; i++) {
        totalamount+= parseInt(count[i].innerHTML) * parseInt(amount[i].innerHTML)
        console.log(totalamount)
        //totalamount.innerHTML = totalamount
    }
    // Mettre à jour l'élément HTML correspondant
    $(totalamount1).text(totalamount)
}
checkout()
