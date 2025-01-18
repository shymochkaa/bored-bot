const generateIdeaBtn = document.querySelector('#generate-idea-btn')
const ideaContainer = document.querySelector('#idea-container')

ideaContainer.textContent = 'Say NO to Boredom!'


const generateIdea = () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            ideaContainer.textContent = data.activity
        })
}


generateIdeaBtn.addEventListener('click', () => {
    generateIdea()

})

