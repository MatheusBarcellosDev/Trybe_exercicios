function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let encode = [...string];
  for (let i = 0; i < encode.length; i++) {
    if (encode[i] == 'a') {
      encode[i] = '1';
    } else if (encode[i] == 'e') {
      encode[i] = '2';
    } else if (encode[i] == 'i') {
      encode[i] = '3';
    } else if (encode[i] == 'o') {
      encode[i] = '4';
    } else if (encode[i] == 'u') {
      encode[i] = '5';
    }
  }
  return encode.join('');
}

function decode(string) {
  let decode = [...string];
  for (let i = 0; i < decode.length; i++) {
    if (decode[i] == '1') {
      decode[i] = 'a';
    } else if (decode[i] == '2') {
      decode[i] = 'e';
    } else if (decode[i] == '3') {
      decode[i] = 'i';
    } else if (decode[i] == '4') {
      decode[i] = 'o';
    } else if (decode[i] == '5') {
      decode[i] = 'u';
    }
  }
  return decode.join('');
}

function techList(tech, name) {
  if (tech.length === 0 || tech.length === undefined) {
    return 'Vazio!';
  }
  let tec = [...tech];
  let listTechAll = [];
  for (t of tec) {
    listTechAll.push({
     name,
     tech: t,
    });
  }
  
  listTechAll.sort(function (a, b) {
    if (a.tech < b.tech) {
      return -1;
    }
    return true;
  });

  return listTechAll;
}




module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
}