# Using `index.js` for Efficient Imports in JavaScript

## Goal
To streamline the process of importing functions by creating a single module, thereby simplifying code in the main JavaScript file.

## Method
- An `index.js` file is used to create a module that consolidates multiple function exports into one.
- This approach reduces the number of import lines in your main file, making it tidier and more maintainable, which is particularly beneficial in larger projects.(lowkey overkill here but good for learning purposes to use when you start your resume projects)

## How It Works
- In `index.js`, you create a central export point for the functions you wish to use across your application, like `fetchManyPokemon` and `fetchOnePokemon`.
- In your main JavaScript file, you import this module. This way, you have all the necessary functions accessible through a single import, reducing clutter and improving organization.

### Detailed Example

#### Setting Up `index.js`
- `index.js` serves as a hub for exporting your functions.
- Located in the same directory as your function files (e.g., `fetchManyPokemon.js`), it provides a centralized export point.

##### In `index.js`
```javascript
import { fetchManyPokemon } from "./fetchManyPokemon";
import { fetchOnePokemon } from "./fetchOnePokemon";

export { fetchManyPokemon, fetchOnePokemon };
```

###### IN `main.js`
```javascript
import fetch from "./fetchFunctions";

// Example of calling functions from the 'fetch' module
fetch.ManyPokemon("pikachu");
fetch.OnePokemon(25);
