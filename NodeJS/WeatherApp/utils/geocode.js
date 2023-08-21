const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +encodeURIComponent(address)  + '.json?access_token=pk.eyJ1IjoiZ2lhbGUxMjM0IiwiYSI6ImNrcW80NHRlODBpc3MzMHN0ZHpoZHpteHcifQ.OM8I4hwfJrzOqjQZ9Uptrw'

    request({url, json:true}, (err, {body})=> {
        if (err){
            callback('Unable to connect to location service', undefined)
        }else if (body.features.length === 0){
            callback('Unable to find location. Try to search', undefined)
        }else{
            callback(undefined, {
                latitude:body.features[0].center[1],
                longitude : body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })
}


module.exports =geocode