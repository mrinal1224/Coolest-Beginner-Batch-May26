
---

# ✅ JavaScript OOPs – Class 1

## Understanding the `this` Keyword (10/10 Version)

---

## Agenda of the Lecture (2 Hours)

### What we will cover today

1. What is `this` in JavaScript (core idea)
2. The **Golden Rule** of `this`
3. `this` in:

   * Global context
   * Regular functions
   * Object methods
   * Nested functions
4. `this` in **Browser vs Node.js** (non-strict mode)
5. `this` with **Arrow Functions**
6. Common mistakes & interview traps
7. Live doubt session

> 💡 *This session focuses on intuition and execution, not memorization.*

---

## 1. Introduction to the `this` Keyword

### What is `this`?

* `this` is a **special keyword** in JavaScript.
* It refers to **the object that is currently calling the function**.
* Its value is **not fixed**.
* It is decided **at runtime**, not while writing the code.

---

### 🔑 The Golden Rule of `this` (MOST IMPORTANT)

> 🧠 **The value of `this` depends on HOW a function is called, not WHERE it is written.**

📌 **Only one exception:** Arrow Functions
(we’ll see why later)

If students remember **only this line**, the class is successful.

---

## 2. `this` in the Global Context

### Browser (non-strict mode)

```js
console.log(this);
```

✅ Output: `window`

Explanation:

* In browsers, the global object is `window`
* So `this === window` in global scope

---

### Node.js (non-strict mode)

```js
console.log(this);
```

✅ Output: `{}`

⚠️ **Important clarification (VERY IMPORTANT FOR 10/10):**

> In Node.js, **every file is a module**, not a global script.
> Top-level `this` refers to `module.exports`, not `global`.

This single line prevents **a LOT of confusion**.

---

## 3. `this` Inside a Regular Function

### Browser (non-strict)

```js
function fn() {
  console.log(this);
}
fn();
```

✅ Output: `window`

Why?

* Function is called **normally**
* No object before the call
* So `this` falls back to the global object

---

### Node.js (non-strict)

```js
function fn() {
  console.log(this);
}
fn();
```

✅ Output: `global`

---

## 4. `this` Inside an Object Method

```js
const obj = {
  name: "JavaScript",
  showName: function () {
    console.log(this.name);
  }
};

obj.showName();
```

✅ Output:

```
JavaScript
```

### Why?

* Function is called using **dot notation**
* `this` refers to the object **before the dot**
* Here → `obj`

📌 **Rule:**

> `obj.method()` → `this === obj`

---

## 5. `this` Inside Nested Functions (Classic Interview Trap)

```js
const obj = {
  name: "JS",
  fn: function () {
    console.log(this.name); // JS

    function innerFn() {
      console.log(this.name);
    }

    innerFn();
  }
};

obj.fn();
```

### Output:

```
JS
undefined
```

### Why?

* `fn()` is called as a method → `this === obj`
* `innerFn()` is a **normal function call**
* So `this` falls back to global object
* Global object does **not** have `name`

📌 This is where **most bugs happen in real projects**.

---

## 6. Browser vs Node.js (Non-Strict Mode Summary)

| Scenario         | Browser       | Node.js               |
| ---------------- | ------------- | --------------------- |
| Global `this`    | `window`      | `{}` (module.exports) |
| Regular function | `window`      | `global`              |
| Object method    | object itself | object itself         |
| Nested function  | global object | global object         |

---

## 7. Strict Mode and `this` (Concept Only – No Deep Dive)

Enable strict mode:

```js
"use strict";
```

### Key Change:

> ❗ In strict mode, **default `this` is `undefined`**

Example:

```js
"use strict";
function fn() {
  console.log(this);
}
fn();
```

✅ Output:

```
undefined
```

📌 Strict mode **removes dangerous defaults**.
This makes bugs easier to catch.

---

## 8. `this` with Arrow Functions

### What is an Arrow Function?

A shorter way to write functions:

```js
const add = (a, b) => a + b;
```

But arrows are **not just syntax sugar**.

---

### 🚨 Arrow Functions DO NOT have their own `this`

> Arrow functions **borrow `this` from their surrounding scope**

This is called **lexical `this`**.

---

### Regular Function Example

```js
const obj = {
  name: "JS",
  fn: function () {
    console.log(this.name);
  }
};

obj.fn();
```

✅ Output:

```
JS
```

---

### Arrow Function Example

```js
const obj = {
  name: "JS",
  fn: () => {
    console.log(this.name);
  }
};

obj.fn();
```

✅ Output:

```
undefined
```

### Why?

* Arrow function does **not bind `this`**
* It takes `this` from where it was **defined**
* That scope is global → no `name`

📌 **Never use arrow functions as object methods** (unless intentional).

---

## 9. Interview Cheat Sheet (Screenshot-worthy)

| Case              | `this`                 |
| ----------------- | ---------------------- |
| Arrow function    | Lexical (parent scope) |
| `obj.method()`    | `obj`                  |
| `fn()` non-strict | global                 |
| `fn()` strict     | `undefined`            |
| Nested function   | global / undefined     |

---

## 10. Final Takeaways

1. `this` is decided at **call time**
2. Dot (`.`) matters more than definition
3. Arrow functions **ignore call-site**
4. Strict mode removes silent bugs
5. Most `this` bugs come from **nested functions & callbacks**

---

## Start the Doubt Session 🚀

“Give me any `this` code — we’ll decode it together.”

---

