 const myNumbers = [1, 2, 3, 4];

  const odd=myNumbers.filter(newValue=>{
       return newValue%2!==0
  }).map (newValue => newValue*2);
  
console.log(odd)