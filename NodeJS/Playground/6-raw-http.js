const http = require('http')
const url ='http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query=14.058324,108.277199'

const request =  http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) =>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)       
    })

})
request.on('error', (error)=>{
    console.log('An error ', error)
})
request.end()