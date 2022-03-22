const flip=(d, a)=>{
    if (d === 'R'){
        return a.sort((c, d) => c - d)
    } else {
        return a.sort((c, d) => d - c)
    }
}