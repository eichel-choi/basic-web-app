export default function QueryProcessor(query: string): string {
  const lowerCaseQuery = query.toLowerCase();

  // Define regular expressions for different operations
  const additionRegex = /(\d+) plus (\d+)/;
  const subtractionRegex = /(\d+) minus (\d+)/;
  const multiplicationRegex = /(\d+) multiplied by (\d+)/;
  const divisionRegex = /(\d+) divided by (\d+)/;
  const squareRegex = /square of (\d+)/;
  const squareRootRegex = /square root of (\d+)/;
  const powerRegex = /(\d+) to the power of (\d+)/;
  const primesRegex = /which of the following numbers are primes: (.+)/;

  // Check if the query asks for addition
  if (additionRegex.test(lowerCaseQuery)) {
    const [, x, y] = lowerCaseQuery.match(additionRegex);
    return String(parseInt(x) + parseInt(y));
  }

  // Check if the query asks for subtraction
  if (subtractionRegex.test(lowerCaseQuery)) {
    const [, x, y] = lowerCaseQuery.match(subtractionRegex);
    return String(parseInt(x) - parseInt(y));
  }

  // Check if the query asks for multiplication
  if (multiplicationRegex.test(lowerCaseQuery)) {
    const [, x, y] = lowerCaseQuery.match(multiplicationRegex);
    return String(parseInt(x) * parseInt(y));
  }

  // Check if the query asks for division
  if (divisionRegex.test(lowerCaseQuery)) {
    const [, x, y] = lowerCaseQuery.match(divisionRegex);
    if (parseInt(y) === 0) {
      return "Division by zero is not allowed.";
    }
    return String(parseInt(x) / parseInt(y));
  }

  // Check if the query asks for squaring
  if (squareRegex.test(lowerCaseQuery)) {
    const [, x] = lowerCaseQuery.match(squareRegex);
    return String(Math.pow(parseInt(x), 2));
  }

  // Check if the query asks for square root
  if (squareRootRegex.test(lowerCaseQuery)) {
    const [, x] = lowerCaseQuery.match(squareRootRegex);
    return String(Math.sqrt(parseInt(x)));
  }

  // Check if the query asks for a number raised to a power
  if (powerRegex.test(lowerCaseQuery)) {
    const [, base, exponent] = lowerCaseQuery.match(powerRegex);
    return String(Math.pow(parseInt(base), parseInt(exponent)));
  }

  // Check if the query asks for prime numbers
  if (primesRegex.test(lowerCaseQuery)) {
    const [, numbersStr] = lowerCaseQuery.match(primesRegex);
    const numbers = numbersStr.split(',').map(num => parseInt(num.trim()));
    const primeNumbers = numbers.filter(isPrime);
    return primeNumbers.join(', ');
  }

  // If no matching condition is found, return an empty string or a default response
  return "I'm sorry, I don't understand your query.";

  // Function to check if a number is prime
  function isPrime(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
}
