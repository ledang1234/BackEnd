

// // /////// 32.
// // //https://weatherstack.com/documentation

// // const request = require('request')

// // // const url = 'http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query=14.058324,108.277199'
// // // const url = 'http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query=Viet Nam&units=f'

// // const url = 'http://api.weatherstack.com/current?access_key=f9bace562f60c106f3141e0a99a70323&query=&units=f'
// // // request({url:url} ,(error, response) => {
// // //     const data = JSON.parse(response.body)
// // //     console.log(data.current)
// // // })


// // request({url:url, json:true}, (error, response) =>{
// //     if (error){
// //         console.log('Unable to connect to weather service')
// //     }else if(response.body.error){
// //         console.log('Unable to find location')
// //     }else{
// //         const current = response.body.current
// //         console.log('It is currently ' + current.temperature + ' degrees out.'  )
// //         console.log('Now is ' + current.weather_descriptions  )
// //     }
    
// // })

// //// 33
// // https://www.mapbox.com/
// // https://docs.mapbox.com/api/search/geocoding/
// // Geocoding
// // address -> lat/long -> weather
// const request = require('request')
// // const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Viet%20Nam.json?access_token=pk.eyJ1IjoiZ2lhbGUxMjM0IiwiYSI6ImNrcW80NHRlODBpc3MzMHN0ZHpoZHpteHcifQ.OM8I4hwfJrzOqjQZ9Uptrw'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12121212.json?access_token=pk.eyJ1IjoiZ2lhbGUxMjM0IiwiYSI6ImNrcW80NHRlODBpc3MzMHN0ZHpoZHpteHcifQ.OM8I4hwfJrzOqjQZ9Uptrw'

// request({url:geocodeURL, json:true},(err, res)=>{
//     if (err){
//         console.log('Unable to connect to weather service')
//     }else if (res.body.features.length === 0){
//         console.log('Unable to find location')
//     }else{
//         const latitude =  res.body.features[0].center[1]
//         const longitude = res.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }  
// })

const request = require('request')
const geocode =  require('./utils/geocode')
const forecast =  require('./utils/forecast')


const address = process.argv[2]
if (!address) {
    console.log('Please provide an address')
}else{
    geocode(address,(error, {latitude,longitude,location} = {})=>{
        if (error){
            return console.log(error)
        }
        forecast(latitude,longitude, (_error, forecaseData) => {
            if (_error){
                return console.log(_error)
            }
            console.log(location)
            console.log(forecaseData)
        })
    
    })
}



