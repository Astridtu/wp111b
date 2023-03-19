function isPrime(num) {
    num = parseInt(prompt("Enter a positive number: "));
    if (num <= 1) {
      return ;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  console.log(isPrime(7));
  console.log(isPrime(12));