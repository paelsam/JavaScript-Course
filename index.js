const ovejas = [{
    name: 'Noa',
    color: 'azul'
  },
  {
    name: 'Euge',
    color: 'rojo'
  },
  {
    name: 'Navidad',
    color: 'rojo'
  },
  {
    name: 'Ki Na Ma',
    color: 'rojo'
  },
  {
    name: 'AAAAAaaaaa',
    color: 'rojo'
  },
  {
    name: 'Nnnnnnnn',
    color: 'rojo'
  }
];




/* function contarOvejas(ovejas) {
  ovejas.forEach((object, index) => {
    let lowerName = object.name.toLowerCase();
    let redColor = object.color;
    if ((lowerName.indexOf("a") !== -1 && lowerName.indexOf("n") !== -1) && redColor === "rojo") {
      console.log(object);
    } else ovejas.splice(index, 1);
  });
  return ovejas;
} */

// function contarOvejas(ovejas) {
//   return ovejas.filter(({name, color}) => {
//     if (name.toLowerCase().includes('a') &&  
//         color.toLowerCase().includes('rojo') && 
//         name.toLowerCase().includes('n')) return true; 
//     else return false;
//   });
// }

// console.log(contarOvejas(ovejas));

/* const carta = 'bici coche balón _playstation bici coche peluche';

console.log(carta.trim().split(' '));
console.log(carta.split(' '))

function listGifts(letter) {
  const gifts = letter.trim().split(' ');
  const giftObject = {};
  for (const gift of gifts) {
    if (gift.startsWith("_") || gift.startsWith(" ")) continue;
    if (giftObject.hasOwnProperty(gift)) { 
      giftObject[gift.trim()] += 1
    } else {
      giftObject[gift.trim()] = 1;
    }
  }
  return giftObject;
}

const regalos = listGifts(carta);

console.log(regalos); */


let letter = "bici coche (balón) bici coche peluche";
// "(muñeca) consola bici"

function isValid(letter) {
  let pattern = /[a-zA-Z]\*(\*)/;
  if (pattern.test(letter)) return true;
  return false;
}

console.log(isValid(letter));

