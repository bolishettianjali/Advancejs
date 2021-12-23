function calc(a,b){
   return new Promise(function(reslove,reject){
        setTimeout(function(){
                reslove(a+b);
        },1000)
    })
}
const Add=async function(){
    var res1=await calc(5,5);

    return await calc(res1,10);
}

Add().then(x=>{console.log(x)});