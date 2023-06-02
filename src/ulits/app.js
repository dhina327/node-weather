const userloc = require('./geo')

const findout = process.argv[2]



userloc(findout,(error,data) => {
    if(error){
        return console.log(error)
    } else {

       
       return  console.log(data)
    }
})





module.exports = userloc