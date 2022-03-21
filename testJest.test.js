const validation = require('./testJest');

describe("Calculator tests", () => {
    test('password', () => {
      expect(validation("ramsantosh34@gmail.com","ram","testpass@34","testpass@34")).toBe(false);
    });
    test('email', () => {
        expect(validation("ramsantosh34@gma","ram","Testpass@34","Testpass@34")).toBe(false);
      });
    test('passwordLength', () => {
        expect(validation("ramsantosh34@gmail.com","ram","tes@34","test@34")).toBe(false);
      });
    test('userName', () => {
        expect(validation("ramsantosh34@gmail.com","","testpolA@34","testpolA@34")).toBe(false);
      });
})