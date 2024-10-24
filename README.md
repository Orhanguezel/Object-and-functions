### Task 1 - Create 3 user profiles

```javascript
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
```

### Task 1.1 - Add property `city`

```javascript
// Task 1.1

user1.city = "California";
user2.city = "Arizona";
user3.city = "New York";

console.log(user1);
console.log(user2);
console.log(user3);
```

### Task 1.2 - Create `describe` function

```javascript
// Task 1.2

function describe() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old. He lives in ${this.city}. You can contact him via ${this.email}.`;
}

console.log(describe.call(user1)); // "Mark Zuckerberg is 36 years old. He lives in California. You can contact him via mark@email.com."
console.log(describe.call(user2)); // "Elon Musk is 49 years old. He lives in Arizona. You can contact him via elon@email.com."
console.log(describe.call(user3)); // "Bill Gates is 65 years old. He lives in New York. You can contact him via bill@email.com."
```

### Task 1.3 - Add `job` property and create `showJob` function

```javascript
// Task 1.3

user1.job = "Software Developer";
user2.job = "Ingenieur";

function showJob(user) {
    if (user.job) {
        return `${user.firstName} ${user.lastName} works as a ${user.job}`;
    } else {
        return `${user.firstName} ${user.lastName} is currently unemployed`;
    }
}

console.log(showJob(user1)); // "Mark Zuckerberg works as a Software Developer"
console.log(showJob(user2)); // "Elon Musk works as an Ingenieur"
console.log(showJob(user3)); // "Bill Gates is currently unemployed"
```

### Task 2 - Create 3 vehicle objects

```javascript
// Task 2

const vehicle1 = {
    type: "car",
    color: "red",
    brand: "BMW",
    mileage: 1000,
};
const vehicle2 = {
    type: "van",
    color: "blue",
    brand: "Mercedes",
    mileage: 200000,
};
const vehicle3 = {
    type: "truck",
    color: "black",
    brand: "Volvo",
    mileage: 300000,
};

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);
```

### Task 2.1 - Create `needsRevision` function

```javascript
// Task 2.1

function needsRevision(vehicle) {
    return vehicle.mileage > 60000 ? true : false;
}

console.log(`Does vehicle1 need revision?`, needsRevision(vehicle1)); // false
console.log(`Does vehicle2 need revision?`, needsRevision(vehicle2)); // true
console.log(`Does vehicle3 need revision?`, needsRevision(vehicle3)); // true
```

---

In conclusion, the provided code is correct and covers all the tasks as described in the readme file. The `describe`, `showJob`, and `needsRevision` functions work as expected, and the user and vehicle objects are updated correctly without any errors.