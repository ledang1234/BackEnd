const request = require('request')

const forecast = (lat,long, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query='+lat + ','+ long+'&units=f'
    const url = 'http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query='+lat + ','+ long
    request({url, json:true}, (err, {body})=>{
        if (err){
            callback('Unable to connect to weather service',undefined)
        }else if (body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined,'It is currently ' + body.current.temperature)
        }
    })
}
module.exports = forecast
// request({url:url, json:true}, (err, response)=>{
//     if (err){
//         callback('Unable to connect to weather service',undefined)
//     }else if (response.body.error){
//         callback('Unable to find location', undefined)
//     }else{
//         callback(undefined,'It is currently ' + response.body.current.temperature)
//     }
// })