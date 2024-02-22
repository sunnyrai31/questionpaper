// how it work ?
//use memo hook, use to take a value and remember it and when the its value changes then only it do the assign work,
// whenever state values changes functional component get triggers and it execute everything from the top to bottom..
// now if we have some common function which calculate a heavy data. [in this case everything state changes whether its related or not, calculation will happend]
// To avoid this kind of case, react has offered a hook which memo right the value and if value changes then only it does the computation.
// we should not mix this concept with useEffect. because they have only one difference, useEffect is a sideEffect hook it doesn't memorized anythhing but useMemo does that.

import { Fragment, useState, useMemo } from "react";

// example for useMemo, lets say i have input here,
//providing some number, based on the input  number, i am calculating nth prime number
//(reason - to take this example because its heavy work)
// and also i have a button which changes the background color of some/ parent/ container element.
// now here is the probelm we dont use the memo, on button click this calculate is unnessary.

const UseMemoHook = () => {
  const [primeValue, setPrimeValue] = useState(0);
  const [theme, setTheme] = useState(false);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }

  function findNthPrime(n) {
    console.log("Calculating prime number.....");
    if (n === 1) return 2; // 2 is the first prime number

    let count = 1; // Start with the first prime number
    let num = 3; // Check odd numbers starting from 3

    while (count < n) {
      if (isPrime(num)) {
        count++;
      }

      if (count < n) {
        num += 2; // Move to the next odd number
      }
    }

    return num;
  }
  // lets create a bug and seek the need to use memo. if we use this code inside the handleInputChange, we dont need useMemo. about
  // but again this is use case. to compoute some at common place but not on any event.
  //   const nthPrime = findNthPrime(primeValue); // here we can see that on button click findNthPrime is being called
  // now lets use the useMemo and fix this problem. by memorizing the nth prime number
  // after comment this above line @54, we need to write like this for memo

  // [] dependency array, right now - primeValue is dependent. not the button click.
  const nthPrime = useMemo(() => findNthPrime(primeValue), [primeValue]);

  const handleInputChange = (e) => {
    setPrimeValue(nthPrime);
  };
  const handleButtonClick = () => {
    setTheme(!theme);
  };
  return (
    <Fragment>
      <div
        id="#container"
        className={theme ? "bg-dark text-white" : "bg-light text-black"}
      >
        <input type="number" onChange={(e) => handleInputChange(e)}></input>
        <h1>prime number is : {primeValue}</h1>

        <button onClick={handleButtonClick}>change theme</button>
      </div>
    </Fragment>
  );
};

export default UseMemoHook;
