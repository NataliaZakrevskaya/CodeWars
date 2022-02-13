function find_average(array) {
    if(array.length === 0){
        return 0
    } return array.reduce((sum, current) => sum + current, 0) / array.length
}