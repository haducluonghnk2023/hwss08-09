function checkArray(str:string|string[]):void{
    if(typeof str === "string"){
        console.log(str);
    }else if(Array.isArray(str)){
        str.forEach(item=>console.log(item));
    }
}
checkArray("hello");
checkArray(["a","b"])