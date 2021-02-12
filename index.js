// console.log("hell World")

// call back function
// function printGreeting(msg,alertGreeting) {
//     if(msg === "evening"){
//         evening(alertGreeting)
//     }
// }
// function  evening(alertGreeting) {
//      alert("Good Evening")
//      alertGreeting("hello World")
// }
// function alertGreeting(msgs) {
//     alert(msgs)
// }
// printGreeting('evening',alertGreeting)


//promise method
// console.log(Math.floor(Math.random() *10) % 2)


// const apiFunction=() =>{
//     return Math.floor(Math.random() * 10) % 2 === 0 ? true : false
// }


// const resolveFunction=() => console.log("Success");
// const rejectFunction=() => console.log("failure");

// const result= new Promise(function(resolve,reject) {
//    setTimeout(() => (apiFunction() ? resolve() : reject()),1000)
// })

// result.then(resolveFunction).catch(rejectFunction)


// const promises= new Promise(function(resolve,reject){

//     setTimeout(function(){
//         console.log("hello World")
//         // reject()
//         resolve()
//     },1000)
// })
// promises.then(function(){
//     console.log("hello Moiz")
//     return 2
// })
// .then(function(val){
//     console.log(val)
//     return val +5
// })
// .then(function(val2){
//   console.log(val2)
// })

// .catch(function(){
//     console.log("error")
// })


//call back

// console.log("start");


// function first() {
//     setTimeout(function(){
//     console.log("First callback");
//     },300)
// }
// function second(){
//     setTimeout(function(){
//         console.log("Second callback");
//     },200)
// }
// function third(){
//     setTimeout(function(){
//         console.log("Third  callback");
//     },100)
// }

// function func1() {
//     console.log("This function 1");
//     first()
// }
// func1()
// function func2() {
//     console.log("This function 2");
//     second()
// }
// func2()
// function func3() {
//     console.log("This function 3");
//     third()
// }
// func3()
// console.log("end");


// function fetchApi() {
//     const promises= new Promise(function(resolve,reject){

//         setTimeout(function(){
//             console.log("hello World")
//             // resolve("data")
//             reject("error")
//         },1000)
//     })
//     return promises        
// }




// async function  asyncs() {
//     //it takes  resolve values
//     try{
//       let data= await fetchApi()    
//       console.log(data ,"successful")
//     }
//     //it takes false values reject values,in this error we get the values which we passed in promise
//     catch(error){
//         console.log(error , "data")
//     }
// }
// asyncs()

// const callback1=() =>{
//   setTimeout(function(){
//    console.log("This is call back function 1");
//   },100)    
// }

// const callback2=() =>{
//     setTimeout(function(){
//         console.log("This is second call back 2");
//     },50)
// }

// function func1() {
//     console.log("this is func1");
//     callback1()
// }
// func1()

// function func2() {
//     console.log("this is func2")
//     callback2()
// }
// func2()

// promise

//     const promise= new Promise(function(resolve,reject) {
//     setTimeout(function(){
//       console.log("hello Moiz")               
//     //   resolve("Data")
//     reject("Error")
//     },100)
//         })
//         promise.then(function(data){
//             console.log(data, "Sucessful")
//             return "Abdul moiz relax"
//         })
// .then((val) =>{
//   console.log(val)
// })
// .catch(function(error){
//    console.log(error,"not found")
// })



// function fetchApi(){
//     const promise= new Promise(function(resolve,reject) {
//             setTimeout(function(){
//             //   console.log("hello Moiz")               
//               resolve("Data")
//             // reject("Error")
//             },100)
//                 })
//                 return promise
// }


// async function asynsc(){
//     try{
//     let data= await fetchApi()
//     console.log(data,"hello moiz")
//     // return data
//     }
//     catch(error){
//     console.log(error,"issue")
//     }
// }

// asynsc()


