function getGrade (s1, s2, s3) {
    let res = (s1 + s2 + s3) / 3
    if(res < 60 && res >= 0 ){
        return 'F'
    }
    if(res < 70 && res >= 60 ){
        return 'D'
    }
    if(res < 80 && res >= 70 ){
        return 'C'
    }
    if(res < 90 && res >= 80 ){
        return 'B'
    }
    if(res <= 100 && res >= 90 ){
        return 'A'
    }
}