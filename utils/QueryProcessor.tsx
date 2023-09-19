export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "sebinc";
  }

  if (query.toLowerCase().includes("name")) {
    return "Sebin (Eichel) Choi";
  }

  // Check if the query asks for multiplication or addition
  if (query.toLowerCase().includes("multiplied by")) {
    const match = query.match(/(\d+) multiplied by (\d+)/);
    if (match && match.length === 3) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const result = x * y;
      return `The result of ${x} multiplied by ${y} is ${result}.`;
    }
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+) plus (\d+)/);
    if (match && match.length === 3) {
      const x = parseInt(match[1]);
      const y = parseInt(match[2]);
      const result = x + y;
      return `The result of ${x} plus ${y} is ${result}.`;
    }
  }

  // Check if the query asks for finding the largest number
  if (query.toLowerCase().includes("largest")) {
    const numbersMatch = query.match(/(\d+), (\d+), (\d+)/);
    if (numbersMatch && numbersMatch.length === 4) {
      const x = parseInt(numbersMatch[1]);
      const y = parseInt(numbersMatch[2]);
      const z = parseInt(numbersMatch[3]);
      const largest = Math.max(x, y, z);
      return `The largest number among ${x}, ${y}, and ${z} is ${largest}.`;
    }
  }

  // Check if the query asks for a square and cube number
  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")) {
    const numbersMatch = query.match(/(\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
    if (numbersMatch && numbersMatch.length === 8) {
      const numbers = numbersMatch.slice(1).map(Number);
      const squareAndCubeNumbers = numbers.filter(num => Math.cbrt(num) === Math.sqrt(num));
      if (squareAndCubeNumbers.length > 0) {
        return `The numbers that are both a square and a cube are: ${squareAndCubeNumbers.join(", ")}.`;
      } else {
        return "None of the provided numbers are both a square and a cube.";
      }
    }
  }

  // If no matching condition is found, return an empty string or a default response
  return "I'm sorry, I don't understand your query.";
}
