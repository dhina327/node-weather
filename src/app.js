const path = require('path')
const express = require('express')
const hbs = require('hbs')
const userloc = require("./ulits/geo")




const app = express()

//define path for express confiq
const overload = path.join(__dirname,'../public')
const dirtem = path.join(__dirname,"../templates/view")
const partialsloc = path.join(__dirname,"../templates/partials")

//setup handlerber engine and views loaction
app.set('view engine','hbs')
app.set("views",dirtem)
hbs.registerPartials(partialsloc)

// setup static directory to serve
app.use(express.static(overload))

app.get('',(req,res) => {
    res.render('index',{
        title:'Weather',
        king:'dhina'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title:'funbets the great',
        king:'suresh'
    })
})

app.get('/help',(req,res) => {
    res.render('help',{
        title:' the great',
        king:'praveen'
    })
})

app.get("/weather",(req,res) =>{
    if(!req.query.address){
        return res.send({
            error:"please provide the valid address"})
    } 
    userloc(req.query.address,(error,data) => {
        
        
        if(error){
            return res.send({error})
        }
            res.send(
                data
            )
        



    })
})

        


app.get("/products",(req,res) =>{

    if(!req.query.search){
        return res.send('oru pundaiyum vera paru')
    }else {
    res.send({
        products:["mobile"]
    })}
})

app.get('*',(req,res) =>{
    res.render('404',{
        title: "404 page error",
        errormessage: "page not found",
        king:"error"
    })
})






app.listen(3000)
console.log('Engine start')