const doSomethingAsync = () => {
   return new Promise((resolve, reject) => {
      (true)
      ? setTimeout(() => resolve('Do something async'), 3000)
      : reject(new Error('Test error'))
   });
}

const doSomething = async () => {
   const something = await doSomethingAsync();
   console.log('doSomething ::: ' + something);
}

console.log('Before');
doSomething();
console.log('After');

//usar el try catch en js
const anotherFunction = async () => {
   try {
      const something = await doSomethingAsync();
      console.log('anotherFunction ::: ' + something);
   } catch(error) {
      console.error(error);
   }
}


console.log('Before anotherFunction');
anotherFunction();
console.log('After anotherFunction');
