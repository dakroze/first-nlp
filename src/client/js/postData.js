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
    } 
    catch(error) {
        console.log("error oh error", error.message);
    }
}
export {postData}