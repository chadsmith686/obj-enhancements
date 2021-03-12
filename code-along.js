function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive: true
    }
}

const mathStuff = {
    x: 200,
    add: function (a,b) {
        return a+b;
    },
    square: function(a){
        return a * a; 
    }
};

mathStuff.add(3,7)

const mathStuff = {
    x   : 200,
    add(a, b){
        return a + b;
    },
    square(a) {
        return a*a;
    }
}

function makeColor(name, hex) {
    return {
    [name] : hex,
    [hex] : name,
    }
}