---
title: The Art of Clean Code
publishedAt: 2025-02-16 
updatedAt: 2025-02-16
tags:
    - Programming
    - Clean Code
unlisted: false
slug: art-of-clean-code
heroImage: '../../assets/potd.jpeg'
---

# The Art Of Clean Code

Cillum aliquip non proident ut labore irure ipsum commodo Lorem duis sunt in eiusmod proident. Occaecat esse aute dolore ut est duis.

---

## Why Clean Code Matters

Culpa velit irure ad sit veniam amet dolore in sint sunt. Eiusmod ea nulla laborum et dolore. Excepteur laborum consectetur amet id labore.

### The Three Pillars

1. **Readability** — Code is read far more than it is written.
2. **Simplicity** — Do one thing, and do it well.
3. **Consistency** — Follow conventions religiously.

---

## Inline Formatting

This is **bold text**, this is *italic text*, and this is ***bold and italic***. You can also use ~~strikethrough~~ for removed content. Here's some `inline code` for good measure.

---

## Blockquote

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
> — Martin Fowler

---

## Code Block

Here's a JavaScript function that follows clean code principles:
```javascript
// Bad
function d(a, b) {
  return a * b * 0.5;
}

// Good
function calculateTriangleArea(base, height) {
  const HALF = 0.5;
  return base * height * HALF;
}
```

And a Python example:
```python
# Bad
def fn(x):
    return x**2+2*x+1

# Good
def evaluate_polynomial(x: int) -> int:
    return x**2 + 2*x + 1
```

---

## Lists

### Unordered List

- Meaningful variable names
- Small, focused functions
- Avoid magic numbers
- Write comments that explain *why*, not *what*

### Nested List

- Functions
  - Should do one thing
  - Should be small
  - Should have descriptive names
- Variables
  - Use intention-revealing names
  - Avoid abbreviations

---

## Table

| Principle       | Bad Example         | Good Example              |
|----------------|---------------------|---------------------------|
| Naming          | `int d;`            | `int daysSinceCreation;`  |
| Function Size   | 200-line function   | Single-responsibility fn  |
| Comments        | Explain what        | Explain why               |
| Magic Numbers   | `if (age > 18)`     | `if (age > LEGAL_AGE)`    |

---

## Links and Images

Check out the [Clean Code book](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) by Robert C. Martin.

---

# A Final Thought

Writing clean code is not about being clever — it's about being **kind to your future self** and your teammates. Start small, be consistent, and refactor often.
title: The Art of Clean Code
publishedAt: 2025-02-16 
updatedAt: 2025-02-16
tags:
    - Programming
    - Clean Code
unlisted: false
slug: art-of-clean-code
heroImage: '../../assets/potd.jpeg'
---

# The Art Of Clean Code

Cillum aliquip non proident ut labore irure ipsum commodo Lorem duis sunt in eiusmod proident. Occaecat esse aute dolore ut est duis. Voluptate ipsum qui enim excepteur eiusmod aute quis id ullamco commodo elit et aliqua labore. Lorem Lorem deserunt magna magna ea qui sit. Officia occaecat aliqua reprehenderit dolor quis proident excepteur quis fugiat quis excepteur. Do in occaecat nostrud dolore amet et aute velit ut. Veniam cillum Lorem consectetur aliqua laborum incididunt.

Culpa velit irure ad sit veniam amet dolore in sint sunt. Eiusmod ea nulla laborum et dolore. Excepteur laborum consectetur amet id labore. Eiusmod tempor est deserunt eu aute dolor et enim. Labore eu nostrud elit veniam aliqua anim culpa consequat enim et magna aute.


