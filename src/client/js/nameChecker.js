function checkForText(inputText) {
    console.log("::: Running checkForText :::", inputText);
    if(!inputText) {
        console.log('NOK')
        return "NOK"
    } else {
        return "OK"
    }
}

export { checkForText }
