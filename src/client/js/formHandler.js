function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into form field
    let formText = document.getElementById('name').value

    if (Client.checkForText(formText) === "NOK"){
        alert("No input provided")
    }
    else {
        console.log("::: Form Submitted :::")
        let score = document.getElementById('score')
        let sub = document.getElementById('sub')
        let text = document.getElementById('text')
        Client.postData('http://localhost:8081/pr',formText)
        .then( data => {
            score.innerHTML = `::: Score_Tag: ${Client.scoreCheck(data.score_tag)} :::`
            sub.innerHTML = `::: Subjectivity: ${data.subjectivity} :::`
            text.innerHTML = `::: Subjectivity: ${data.text} :::`
        })
    }
}

export {handleSubmit}
