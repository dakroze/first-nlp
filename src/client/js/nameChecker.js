function checkForText(inputText) {
    console.log("::: Running checkForText :::", inputText);
    if(typeof(inputText) ==! string) {
        alert("Please input text only")
        return "NOK"
    } else {
        alert ("Text Received")
        return "OK"
    }
}

export { checkForName }
