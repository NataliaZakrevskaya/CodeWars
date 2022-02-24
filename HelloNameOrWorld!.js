function hello(name) {
    if (!name){
        return "Hello, World!";
    } else {
        let wordInLowerCase = name.toLowerCase();
        let correctName = wordInLowerCase[0].toUpperCase() + wordInLowerCase.slice(1);
        return "Hello, " + correctName + "!";
    }}