function findMultiples(integer, limit) {
    let step = integer
    let arr = []
    while(integer <= limit) {
        arr.push(integer)
        integer += step
    }
    return arr
}
