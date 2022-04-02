function sumMix(x){
    if(x.length > 1){
        return x.reduce((acc, el) => +acc + +el)
    }
    return +x
}