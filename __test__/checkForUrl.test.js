// Import the js file to test
import { checkForUrl } from "../src/client/js/urlChecker";

describe("Testing the checkForUrl functionality", () => {
  test("Testing the checkForUrl() function", () => {
    expect(checkForUrl).toBeDefined();
  });
});
