function calc(a,b){
    return new Promise(function(reslove,reject){
        setTimeout(function(){
            reslove(a+b);
        },2000)
    })
}
calc(2,4).then(x=>{console.log(x+1); return x+1})
            .then(y=>{console.log(y); });