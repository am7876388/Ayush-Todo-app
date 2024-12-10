function calculateFinalSpeed(initialSpeed, inclinations) {
    let num1 = initialSpeed;
    for(let i = 0; i < inclinations.length;i++){
      if(inclinations[i] < 0){
        num1 += inclinations[i];
      }
      if(inclinations[i] > 0){
        num1 -= inclinations[i];
      }
    }
    return num1;
  }
  
  console.log(calculateFinalSpeed(60, [0, 30, 0, -45, 0]));
