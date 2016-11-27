## Matrix

Matrix is a small stand alone javascript library for rendering matrix into canvas element.

### Demo
Here's a glipse of the matrix effect. You can also play with the [demo live here](https://codepen.io/dennisxiao/full/KNvvEo).

![A glipse of the Matrix](https://raw.githubusercontent.com/dennisboys/MatrixAnimation/master/matrix.gif)

### Usage

You will need a canvas element with an id "canvas" for the matrix to be rendered within.

```html
<!-- Use a canvas element to show the matrix animation -->
<canvas id="canvas"></canvas>

<!-- include the matrix.js in your HTML doc -->
<script src="matrix.js"></script>
```

Then you can use the matrix library in your own Javascript file.

```javascript
// create a string with as many characters as you want to form the matrix animation
const symbolString = "¼µ¶±¿ÇÐØĦƔƢǄȡȹɊҖӁ‰＠ξζω□∮〓※∏卐√№↑↓→←↘↙Ψ※㊣∑╳々♀♂∞①ㄨ≡╬";
// define your preferred matrix font size.
const fontSize = 10;
// initialize the matrix
const matrix = Matrix(symbolString, fontSize);

// place the matrix into a setInterval method 
setInterval(matrix, 33);
```

### License

MIT © [Dennis Xiao](https://github.com/dennisboys)
