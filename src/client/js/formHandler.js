function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    // fetch('http://localhost:8081/test')
    // .then(res => res.json())
    const postData = async (url, data) => {
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data) // body data type must match "Content-Type" header        
      });
        try {
          const newData = await response.json();
          console.log(newData);
          document.getElementById('results').innerHTML = newData;
          return newData
        }catch(error) {
        console.log("error oh error", error.message);
        }
    }
    postData('/pr',formText)
}


export { handleSubmit }
