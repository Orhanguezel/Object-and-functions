// Task 1

const user1 = {
    firstName:"Mark",
    lastName:"Zuckerberg",
    email: "mark@email.com",
    age:36
};  
const user2 = {
    firstName:"Elon",
    lastName:"Musk",
    email: "elon@email.com",
    age:49
};  
const user3 = {
    firstName:"Bill",
    lastName:"Gates",
    email: "bill@email.com",
    age:65

};  

console.log(user1);
console.log(user2);
console.log(user3);

// Task 1.1

user1.city = "California";
user2.city = "Arizona";
user3.city = "New York";

// Task 1.2

function describe() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. He lives in ${this.city}. You can contact him via ${this.email}.`;
}

// Task 1.3
user1.job="Software Developer";
user2.job="Ingenieur";

function showJob(user) {
    if (user.job) {
      return `${user.firstName} ${user.lastName} works as a ${user.job}`;
    } else {
      return `${user.firstName} ${user.lastName} is currently unemployed`;
    }
  }

console.log(showJob(user1)); 
console.log(showJob(user2)); 
console.log(showJob(user3));


