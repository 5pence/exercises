function something() {
  console.log("in the function");
}

setTimeout(() => {
  something();
}, 0);

console.log("im at the end");