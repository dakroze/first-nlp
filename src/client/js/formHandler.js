function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into form field
    let formText = document.getElementById('name').value

    if (Client.checkForName(formText) === "NOK"){
        alert("Please input text only")
    }
    else {
        console.log("::: Form Submitted :::")
        client.postData('/pr',formText)
    }
}

export {handleSubmit}
