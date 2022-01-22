function userCreator(name, score) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
 };
 const userFunctionStore = {
  increment: function() {
  this.score++;
  }
 };
 const user1 = userCreator("Will", 3);
 const user2 = userCreator("Tim", 5);
 console.log(user1);
 console.log(user2);
 user1.increment(); 
 console.log(user1);
 console.log(user2);