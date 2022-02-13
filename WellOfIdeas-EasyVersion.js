function well(x){
    let goodArray = x.filter(f => f === 'good');
    if (goodArray.length > 2){
        return "I smell a series!";
    } if (goodArray.length > 0){
        return "Publish!";
    } else {
        return "Fail!";
    }
}