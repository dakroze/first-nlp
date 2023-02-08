const FormData = require('form-data');
const fetch = require('node-fetch');
const posExt = async (key, text) => {

// console.log(`Your API key is ${process.env.API_KEY}`)
    const formdata = new FormData();
    formdata.append("key", key);
    formdata.append("txt", text);
    formdata.append("lang", 'es');  // 2-letter code, like en es fr ...

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };

    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    try {
        const res = await response.json()
        console.log(res)
        const data =  {
                        score_tag: res.score_tag,
                        subjectivity: res.subjectivity 
                      }
        console.log(data)
        return data
    }
    catch(err) {
        console.log(err, error.message)
    }
}

module.exports = posExt;