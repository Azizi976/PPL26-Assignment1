# Part 1: Theoretical Questions

## Question 1.1

**1. Explanation of the Paradigms:**

* **Imperative:** This paradigm is about telling the computer exactly *how* to achieve a goal, step by step. You write a sequence of instructions that explicitly change the program's state over time, heavily relying on variables, loops, and conditional statements.

* **Object-Oriented (OO):** The program is based on defining objects and passing messages between them (methods).

* **Functional:** The program is an expression or a series of expressions. The execution of the program is carried out by evaluating the expressions, and there are no assignment operations (there are no side-effects).

**2. How does Object-Oriented (OO) improve upon Imperative?**
Imperative approaches suffer from repetition and make it difficult to separate logic from data. Because there is a "shared mutable state," the logic becomes complex, creating real difficulties in verifying code correctness or performing optimizations and concurrency. Object-Oriented solves this by organizing the program around the objects that communicate with each other (methods), which brings order to the data structures and the logic.

**3. How does Functional improve upon Object-Oriented?**
The main advantage of functional programming is the absence of assignment operations (which causes side-effects) and shared mutable states. Without a shared state that constantly updates, it becomes easier to prove code correctness and safely run code in parallel (concurrency).

### Question 1.2

const getDiscountedProductAveragePriceFP = (inventory : Product[]) : number => {
    const discounted = inventory.filter(product => product.discounted);
    return discounted.length === 0 ? 0 :
    discounted.map(p => p.price).reduce((acc,curr) => acc + curr,0)/discounted.length;
}

** Explanation of the Function: **
At first, we define the function, which takes an array of products as input and returns the avg we want to calculate. Inside we create a const named discounted by applying the *filter* function to keep only the products that is discounted. then we use a condetional expression - if we get an empty array, return 0, else we calculate the avg and return it.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
