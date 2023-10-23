// All valid credit card numbers
const dobre1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const dobre2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const dobre3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const dobre4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const dobre5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const zle1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const zle2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const zle3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const zle4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const zle5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const zagadka1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const zagadka2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const zagadka3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const zagadka4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const zagadka5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const myks = [dobre1, dobre2, dobre3, dobre4, dobre5, zle1, zle2, zle3, zle4, zle5, zagadka1, zagadka2, zagadka3, zagadka4, zagadka5]


// Add your functions below:

function sprawdzacz(array) {
    let zmiennatestowa = []
    for (let i = array.length - 1; i >= 0; i -= 2) {
        zmiennatestowa.push(array[i])
    }
    for (let x = array.length - 2; x >= 0; x -= 2) {
        let zmiana = array[x] * 2
        if (zmiana > 9) {
            zmiana -= 9
        }
        zmiennatestowa.push(zmiana)
    }
    let suma = 0;
    for (const element of zmiennatestowa) {
        suma += element
    }
    if (suma % 10 === 0) {
        return ("karta jest prawidłowa")
    } else {
        return ("karta jest nieprawidłowa")
    }

}

let nieprawidlowe = []

function sprawdzaczzlych(array) {
    for (let i in array) {
        if (sprawdzacz(array[i]) === "karta jest nieprawidłowa") {
            nieprawidlowe.push(array[i])
        }
    }
}

sprawdzaczzlych(myks)

function złekarty(array) {
    let złekarty = [];
    for (let i in array) {
        if (array[i][0] === 3) {
            złekarty.push("Amex");
        } else if (array[i][0] === 4) {
            złekarty.push("Visa");
        } else if (array[i][0] === 5) {
            złekarty.push("Mastercard");
        } else if (array[i][0] === 6) {
            złekarty.push("Discover");
        } else {
            złekarty.push("Company not found");
        }
    }
    let providers = [];
    function brakpowielania(array) {
        for (let i in array) {
            if (providers.indexOf(array[i]) === -1) {
                providers.push(array[i]);
            }
        }
        return providers;
    }
    console.log(`Złe karty: ${brakpowielania(złekarty)}`);
}

złekarty(nieprawidlowe)






