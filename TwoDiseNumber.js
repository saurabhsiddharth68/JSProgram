function firstDise(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function secondDise(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  
  const rndInt1 = firstDise(1, 6)
  console.log(rndInt1);
  const rndInt2 = secondDise(1, 6)
  console.log(rndInt2);

  S = rndInt1 + rndInt2;

  console.log(S);
   