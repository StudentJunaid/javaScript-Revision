// Immediately invoked Function Expression (IFFE)

// why we need to use IFFE?
// Ans: global scop se problem hoti hai kyi bar us global scop ke jo bhi varibles decleration hai usko hatanay k lye hum IFFE ka use krtay hai

// Example of IFFE 

(function chai(){
    // Named IFFE
    // console.log(`DB CONNECTED`)
})(); // we need to use semicolen aftter IFFE if we need to use another IFFE and it's necessery

((name)=>{
    // UnNamed IFFE
    // console.log(`DB CONNECTED Two ${name}`)
})("Cherry")
