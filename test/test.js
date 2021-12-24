let a = {y:10};
a.x = a;
// console.log(JSON.stringify(a));

let inputs = [1, "tur", {x:2}, [3, 4], {y:5}];
for (let i = 0; i < inputs.length; i++) {
    if(inputs[i] === "tur") inputs.splice(i, 1)
    else console.log(inputs[i])
    
}