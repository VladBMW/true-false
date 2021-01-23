let vm = new Vue({
    el: "#app" ,
    data: {
        check: true
    
    }
    })






































let textarea = document.getElementById('txt')
let text = textarea.value
let small = text.toLowerCase()

let bezZnakov = small.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
let splitted = bezZnakov.split(' ')

console.log(splitted)
if(splitted.length < 5 ){
    splitted.splice(index,1) 
    console.log(splitted)
}


