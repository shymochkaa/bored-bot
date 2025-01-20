const generateIdeaBtn = document.querySelector('#generate-idea-btn')
const ideaContainer = document.querySelector('#idea-container')

ideaContainer.textContent = 'Say NO to Boredom!'


const generateIdea = () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            typeWriter(ideaContainer, data.activity)
        })
}


generateIdeaBtn.addEventListener('click', () => {
    generateIdea()
})

let currentTimeout = null

function typeWriter(element, text, speed = 50) {

    if (currentTimeout) {
        clearTimeout(currentTimeout)
    }

    element.textContent = ''
    let i = 0

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i)
            i++
            currentTimeout = setTimeout(type, speed)
        }
    }

    type()
}