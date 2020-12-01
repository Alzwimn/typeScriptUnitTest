import { Utils } from '../app/Utils';

describe ('Utils test suite', () => {

  test('First test', () => {
    const result = Utils.toUpperCase('testing string')
    expect(result).toBe('TESTING STRING')
  })

  test('Parse simple URL', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:3000/login')
    expect(parsedUrl.href).toBe('http://localhost:3000/login')
    expect(parsedUrl.port).toBe('3000')
    expect(parsedUrl.protocol).toBe('http:')
    expect(parsedUrl.query).toEqual({})
  })

  test('parse URL with query', () => {
    const parsedUrl = Utils.parseUrl('http://localhost:3000/login?user=user&password=pass')
    const expectedQuery = {
      user: 'user',
      password: 'pass'
    }
    expect(parsedUrl.query).toEqual(expectedQuery)
  })
})