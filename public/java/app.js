

console.log("client data loaded sucessfully.... ")



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherform.addEventListener('submit',(e) => {
    e.preventDefault()
    
    const output = search.value
    message1.textContent = "Loading...."
    message2.textContent = ' '


    fetch("/weather?address=" + output).then((response) => {

        response.json().then((data) => {
            
            if(data.error){
                message1.textContent = data.error
            } else {
                message1.textContent = data.location
                message2.textContent = data.temperature
                console.log(data.location)
                console.log(data.temperature)
            }
        })
    })

 
})
