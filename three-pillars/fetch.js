function display(data) {
  console.log(data);
}

const functionalData = fetch('https://twitter.com/will/tweets/1');
functionalData.then(display);

console.log("Me first");