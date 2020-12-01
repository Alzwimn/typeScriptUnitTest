import { Utils } from "../app/Utils";

describe ('Utils test suite', () => {

  test('First test', () => {
    const testString = Utils.toUpperCase('testing string')
    console.log(testString);
  })
})