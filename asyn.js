async function Hello(){
    return await "Hello";

}
Hello().then(x=>{console.log(x); return x+1;})
setTimeout(1000)
        .then(y=>{console.log(y); return y+1;})
