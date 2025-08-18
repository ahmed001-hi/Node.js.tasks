function countVowels(str) {
  let x = str.split("");
  let ans = 0;
  for (let i = 0; i < x.length; i++) {
    if (
      x[i] == "a" ||
      x[i] == "e" ||
      x[i] == "i" ||
      x[i] == "o" ||
      x[i] == "u"
    ) {
      ans++;
    } else {
      continue;
    }
  }
  console.log(ans);
}

let str = "aeiou";
//countVowels(str);
/*==================================================*/
function invertCase(string) {
  let ans2 = "";
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i).toUpperCase()) {
      ans2 += string.charAt(i).toLowerCase();
    } else if (string.charAt(i) === string.charAt(i).toLowerCase()) {
      ans2 += string.charAt(i).toUpperCase();
    }
  }
  console.log(ans2);
}
//invertCase("AHmEd");
/*=====================================================*/
let a = [1, 2, 3];
let b = [3, 4, 5];
let result = a.concat(b);

let i = 0;
let t = 0;
let ans3 = [];

while (i < result.length) {
  if (result[i] !== result[t]) {
    t++;
    if (t >= result.length) {
      i++;
      t = i + 1;
    }
    continue;
  } else if (i !== t && result[i] === result[t]) {
    ans3.push(result[i]);
    i++;
    t = i + 1;
  } else {
    t++;
    if (t >= result.length) {
      i++;
      t = i + 1;
    }
  }
}

//console.log(ans3);
/*==============================*/
function findFirstIndexDivisibleBy(nums, x, y) {
  let Var = [7, 13, 77, 73];
  for (let i = 0; i < Var.length; i++) {
    if (Var[i] % x == false && Var[i] % y == false) {
      console.log(i);
    } else if (Var[i] % x == true && Var[i] % x == true) {
      console.log(-1);
    }
  }
}
let num = [6, 12, 15, 9];
//findFirstIndexDivisibleBy(num, 2, 3);
/*==========================================*/
function allTruthy(car) {
  for (let i = 0; i < car.length; i++) {
    if (
      car[i] !== false &&
      car[i] !== 0 &&
      car[i] !== null &&
      car[i] !== " " &&
      car[i] !== undefined
    ) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
let car = [1, 8, 0, 5];
//allTruthy(car);
/*==========================================*/
function pickEveryNth(array, n) {
  let array2 = [];
  for (let i = 0; i < array.length; i += n) {
    array2.push(array[i]);
  }
  console.log(array2);
}
let array = [1, 6, 4, 6, 8, 2];
let n = 2;
//pickEveryNth(array, n);
/*===================================================*/
function ticketPrice(customer) {
  let price;
  if (customer.age < 6) {
    price = 0;
  } else if (customer.age <= 18 || customer.isStudent == true) {
    price = 8;
  } else if (customer.age >= 65) {
    price = 6;
  } else {
    price = 12;
  }
  if (customer.hasCoupon == true) {
    if (price == 0) {
      price = 0;
    } else {
      price -= 2;
    }
  }
  console.log(price);
}
//ticketPrice({ age: 20, isStudent: true, hasCoupon: true });
/*========================================================*/
function normalizeNames(Name) {
  let name2 = [];
  let o = 0;
  for (let i = 0; i < Name.length; i++) {
    o = Name[i].trim();
    o = o.toLowerCase();
    o = o[0].toUpperCase() + o.slice(1).toLowerCase();
    name2.push(o);
  }
  console.log(name2);
}
let Name = [" ahMED ", " MOntAsER "];
//normalizeNames(Name);
/*====================================================*/
function sumUntilLimit(nums, limit) {
  let c = 0;
  for (let i = 0; i < arra.length; i++) {
    if (c + arra[i] > limit) {
      break;
    } else {
      c += arra[i];
      if (c === limit) {
        break;
      }
    }
  }
  console.log(c);
}
let arra = [5, 7, 4];
let limit = 12;
//sumUntilLimit(arra,limit)
/*===============================================*/
function safeLogin(user, policy) {
  const password = user.password;
  const minLen = policy.minLen;
  const mustIncludeNumber = policy.mustIncludeNumber;
  const blockWord = policy.blockWord;
  if (password.length < minLen) {
    return false;
  }
  if (mustIncludeNumber) {
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
      if (char >= "0" && char <= "9") {
        hasNumber = true;
        break;
      }
    }
    if (!hasNumber) return false;
  }
  const lowerPassword = password.toLowerCase();
  const lowerBlock = blockWord.toLowerCase();
  if (lowerPassword.includes(lowerBlock)) {
    return false;
  }

  return true;
}
