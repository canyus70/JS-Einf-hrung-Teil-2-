// die ersten 6 beispiele in reiehnfolge mit true
const beispiel1 = Boolean(100 ==100);
console.log(beispiel1);

const beispiel2 = Boolean(3.14 === 3.14);
console.log(beispiel2);

const beispiel3 = Boolean(-15 > -20);
console.log(beispiel3);

const beispiel4 = Boolean("hello" == "hello");
console.log(beispiel4);

const beispiel5 = Boolean(false == 0);
console.log(beispiel5);

const beispiel6 = Boolean(1 +7 +3.14 <= 20);
console.log(beispiel6);

// die nächsten (3) beispiele mit false

const beispiel7 = Boolean(0 <= -2);
console.log(beispiel7);

const beispiel8 = Boolean(-0 >= 2);
console.log(beispiel8);

const beispiel9 = Boolean(NaN === 20);
console.log(beispiel9);

// nächsten beispiele mit null

const beispiel10 = Boolean(null !== NaN);
console.log(beispiel10);
const steck12 =typeof(null);
console.log(steck12);


// letztes beispiele mit false

const beispiel11 = Boolean(false > NaN);
console.log(beispiel11);


