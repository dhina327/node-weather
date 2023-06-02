
const request = require('request')

const userloc = (address,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f3eccfe8f1d62e05c9aa79656ee1ea8b&query='+ address

    request({url,json:true},(error,{ body }) => {

        if(error){
            callback("unable to connect the location service",error)
        } else if(body.error){
            callback("location not found!!! try different location",error)
        } else {
            const data1 = body.current
            const loaddata = data1.temperature
            
            const arrs = {
                temperature: loaddata,
                location: address,
                weather: body.weather_descripation
                

            }
           
            callback(undefined,(arrs))
        }
        
    })




}











module.exports = userloc