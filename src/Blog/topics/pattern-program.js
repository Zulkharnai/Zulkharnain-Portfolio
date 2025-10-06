const pattern_program = [
  {
    title: "Right-Angled Triangle Pattern",
    description: `
This program prints a simple right-angled triangle pattern using asterisks (*).

🧠 **Logic:**
- Outer loop controls the number of rows.
- Inner loop prints '*' characters for each row.
- After each row, a newline is printed.
    `,
    code: `
function rightAngledTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

// Example
rightAngledTriangle(5);
`,
    output: `
*
* *
* * *
* * * *
* * * * *
`,
    category: "pattern-program",
  },
  {
    title: "Pyramid Pattern",
    description: `
This program prints a centered pyramid of stars.

🧠 **Logic:**
- Print spaces before stars to center each row.
- Number of stars increases with each row.
    `,
    code: `
function pyramidPattern(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}

// Example
pyramidPattern(5);
`,
    output: `
    *
   * *
  * * *
 * * * *
* * * * *
`,
    category: "pattern-program",
  },
  {
    title: "Inverted Triangle Pattern",
    description: `
This program prints an inverted right-angled triangle.

🧠 **Logic:**
- Start from maximum stars and decrease one star each row.
    `,
    code: `
function invertedTriangle(n) {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
}

// Example
invertedTriangle(5);
`,
    output: `
* * * * *
* * * *
* * *
* *
*
`,
    category: "pattern-program",
  },
  {
    title: "Diamond Pattern",
    description: `
This program prints a diamond-shaped pattern of stars.

🧠 **Logic:**
- Combine a pyramid and an inverted pyramid.
- The first half prints increasing stars, the second half decreasing.
    `,
    code: `
function diamondPattern(n) {
  // Upper pyramid
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
  // Lower inverted pyramid
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}

// Example
diamondPattern(5);
`,
    output: `
    *
   * *
  * * *
 * * * *
* * * * *
 * * * *
  * * *
   * *
    *
`,
    category: "pattern-program",
  },
  {
    title: "Number Pyramid Pattern",
    description: `
This program prints a pyramid of increasing numbers.

🧠 **Logic:**
- Each row prints numbers from 1 to the row number.
- Uses string concatenation to format each line.
    `,
    code: `
function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let numbers = "";
    for (let j = 1; j <= i; j++) {
      numbers += j + " ";
    }
    console.log(spaces + numbers);
  }
}

// Example
numberPyramid(5);
`,
    output: `
    1
   1 2
  1 2 3
 1 2 3 4
1 2 3 4 5
`,
    category: "pattern-program",
  },
];

export default pattern_program;
