function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into form field
    let formText = document.getElementById('name').value

    if (Client.checkForText(formText) === "NOK"){
        alert("No input provided")
    }
    else {
        console.log("::: Form Submitted :::")
        Client.postData('http://localhost:8081/pr',formText)
        .then( data => {
            document.getElementById('results').innerHTML = `:::Score_Tag: ${Client.scoreCheck(data.score_tag)}
                                                            :::Subjectivity: ${data.subjectivity}`
        })
    }
}

export {handleSubmit}
