const postData = async (url, data) => {
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin',
    mode: 'cors',
    headers: {'Content-Type': 'text/plain'},
    body: data // body data type must match "Content-Type" header        
  });
    try {
      const newData = await response.json();
      return newData
    } 
    catch(error) {
        console.log("error oh error", error.message);
    }
}
export {postData}