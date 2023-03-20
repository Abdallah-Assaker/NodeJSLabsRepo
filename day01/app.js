customMods = require("./customModules");

console.log(customMods.welcome("Abdallah", "1998-1-31"));

console.log(customMods.welcome("Mohammed", "2020-1-31"));

console.log(customMods.math.add(5, 6));

console.log(customMods.math.add("5", 6));

console.log(customMods.math.add("a", 6));

console.log(customMods.math.sub(5, 6));

console.log(customMods.math.sub("5", 6));

console.log(customMods.math.sub("a", 6));

console.log(customMods.math.multi(5, 6));

console.log(customMods.math.multi("5", 6));

console.log(customMods.math.multi("a", 6));

console.log(customMods.math.div(5, 6));

console.log(customMods.math.div("5", 6));

console.log(customMods.math.div("a", 6));
