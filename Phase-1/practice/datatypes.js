# LEVEL 1: Arithmetic Operators

1. Predict:

```js
   console.log(10 + 5 * 2);
   ```
ans. 20

2. Predict:

```js
   console.log((10 + 5) * 2);
   ```
ans. 30

3. What is the difference between:

```js
   10 / 3
   ```

and

    ```js
   Math.floor(10 / 3)
   ```
ans. 1st one will give 3.5 and math floor, will rounds down the fractional value

4. Predict:

```js
   console.log(10 % 3);
   ```
ans. 1

5. Why is `%` called ** remainder ** and not modulo in JavaScript ?

    ---
    ans.idk
# LEVEL 2: Assignment Operators

6. Predict:

```js
   let a = 10;
   a += 5;
   console.log(a);
   ```
ans. 15
7. Is this exactly the same as Question 6 ? Why or why not ?

    ```js
   let a = 10;
   a = a + 5;
   ```
   it is the same because a += 5 is the same as a= a + 5

8. Predict:

```js
   let x = 5;
   x *= 2 + 1;
   console.log(x);
   ```
ans.11
---

# LEVEL 3: Increment & Decrement(Classic trap)

9. Predict:

```js
   let i = 5;
   console.log(i++);
   console.log(i);
   ```
ans. 5 then 6
10. Predict:

```js
let i = 5;
console.log(++i);
```
ans. 6
11. Explain the difference between `i++` and`++i` ** without ** using the words “before” or “after”.
the i++ is also know as the post Increment which
12. Predict:

```js
let i = 1;
let j = i++ + ++i;
console.log(j);
```

---

# LEVEL 4: Comparison Operators

13. Predict:

```js
console.log(5 > "3");
```

14. Predict:

```js
console.log("2" > "12");
```

15. Why does Question 14 behave that way ?

    16. Predict:

```js
console.log(null == undefined);
console.log(null === undefined);
```

---

# LEVEL 5: Equality(`==` vs`===`)

17. Predict:

```js
console.log(0 == false);
```

18. Predict:

```js
console.log(0 === false);
```

19. Predict:

```js
console.log("" == false);
```

20. Why is `===` called ** strict equality **?

    ---

# LEVEL 6: Logical Operators

21. Predict:

```js
console.log(true && false);
```

22. Predict:

```js
console.log("hello" && 0);
```

23. Predict:

```js
console.log(null || "JS");
```

24. What does `&&` and `||` return in JavaScript:

* boolean only ?
* or actual values ?

    Explain.

---

# LEVEL 7: Short - Circuit Behavior

25. Predict:

```js
let x = 0;
x && console.log("Hi");
```

26. Predict:

```js
let x = 1;
x || console.log("Hello");
```

27. Why are logical operators often used instead of `if` statements ?

    ---

# LEVEL 8: Unary Operators

28. Predict:

```js
console.log(typeof +"5");
```

29. Predict:

```js
console.log(!"hello");
```

30. Why does the unary `+` convert strings to numbers ?

    ---

# LEVEL 9: Bitwise(Don’t panic, just think)

31. Predict:

```js
console.log(5 & 1);
```

32. Predict:

```js
console.log(5 | 1);
```

33. Why are bitwise operators rarely used in everyday JS ?

    ---

# LEVEL 10: Reality Check

34. Which operator causes the ** most bugs ** in JavaScript and why ?

    35. Why is understanding ** operator precedence ** more important than memorizing operators ?

        ---

### How to practice properly

    * Write outputs first
        * Explain ** why **, not what
            * If your explanation includes “because JS is weird”, you don’t understand it yet

Send your answers level by level.I’ll correct them brutally but fairly.
