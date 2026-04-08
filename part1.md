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

## Question 1.2

```java
const getDiscountedProductAveragePriceFP = (inventory : Product[]) : number => {
    const discounted = inventory.filter(product => product.discounted);
    return discounted.length === 0 ? 0 :
    discounted.map(p => p.price).reduce((acc,curr) => acc + curr,0)/discounted.length;
}
```


### Explanation of the Function:
At first, we define the function, which takes an array of products as input and returns the avg we want to calculate. Inside we create a const named discounted by applying the *filter* function to keep only the products that is discounted. then we use a condetional expression - if we get an empty array, return 0, else we calculate the avg and return it.

##  Question 1.3
```java 
1.<T> (x : T[], y : (item : T => boolean) => boolean;
```
explenation : 'x' is an array of a generic type T. 'y' is a function that takes an item of type T and returns a boolean. The method *some* always returns a boolean answer.

```java 
2.(x : number[]) => number[];
```
explenation : Because of the arithmetic multiplication (y*2) the elements in the array are forced to be numbers. map will therefore return an array of numbers.

```java 
3.<T> (x : T[], y : (item : T) = > boolean) => T[];
```
explenation : 'x' is an array of a generic type T. 'y' is a function that takes an item of type T and returns a boolean. The method *filter* always returns a new array of the same generic type T.

```java 
4.(x : number[]) => number
```
explenation : Because of the arithmetic accumulation of the elements in the *reduce* function (with the +) 'x' has to be an array of numbers.

```java 
5.<T>(x:boolean,y:T[]) => T;
```
explenation : 'x' is used as a condition (before the ? mark) so it must be a boolean. 'y' is an array from which we extract elements, so it's an array of a generic type. The function  returns a single element of type T.

```java 
6.<T,S>((f : (val : T) => S),(g : (num : number) => T) => ((x : number) => S)
```

explenation : 'x' + 1 means 'x' must be a number. 'g' recives a number and returns a generic type T. The function f recives T and returns another generic type S.


