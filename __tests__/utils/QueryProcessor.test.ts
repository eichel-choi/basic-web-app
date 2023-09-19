import QueryProcessor from "../../utils/QueryProcessor";

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test('should return Shakespeare description', () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe(
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  });

  test('should return Andrew ID', () => {
    const query = "andrew id";
    const response: string = QueryProcessor(query);
    expect(response).toBe("sebinc");
  });

  test('should return name', () => {
    const query = "name";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Sebin (Eichel) Choi");
  });

  test('should return multiplication result', () => {
    const query = "What is 5 multiplied by 3?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("The result of 5 multiplied by 3 is 15.");
  });

  test('should return addition result', () => {
    const query = "What is 7 plus 4?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("The result of 7 plus 4 is 11.");
  });

  test('should return the largest number', () => {
    const query = "Which of the following numbers is the largest: 21, 19, 32?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("The largest number among 21, 19, and 32 is 32.");
  });

  test('should return square and cube numbers', () => {
    const query = "Which of the following numbers is both a square and a cube: 1331, 4096, 144?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("The numbers that are both a square and a cube are: 1331, 4096.");
  });
});
