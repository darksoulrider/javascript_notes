function expect(val) {
    return {
      toBe: function (otherVal) {
        if (val !== otherVal) {
          throw new Error("Not Equal");
        }
        return true ;
      },
      notToBe: function (otherVal) {
        if (val === otherVal) {
          throw new Error("Equal");
        }
        return true;
      },
    };
  }
  
  // Example usage:
  try {
    const result1 = expect(5).toBe(5);
    console.log(result1); // Output: { "value": true }
  
    const result2 = expect(5).toBe(null); // This will throw an error
    console.log(result2);
  } catch (error) {
    console.error({ error: error.message }); // Output: { "error": "Not Equal" }
  }
  
  try {
    const result3 = expect(5).notToBe(null);
    console.log(result3); // Output: { "value": true }
  } catch (error) {
    console.error({ error: error.message });
  }
  