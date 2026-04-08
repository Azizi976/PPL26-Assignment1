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

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

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
