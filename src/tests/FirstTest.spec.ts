import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Davi'

  expect(user.name).toEqual('Davi')
})
