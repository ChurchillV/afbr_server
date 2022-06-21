const request = require('supertest')
const app = require('../server')


// describe('dpo should work', () => {
//   it('should debit money into account successfully', async () => {
//     const res = await request(app)
//       .post('/api/dpo/transact')
//       .send({
//         transaction_name: 'Testing',
//         transaction_cost: 0.50,
//       })
    
//     expect(res.statusCode).toEqual(200)

//     console.log('Transtoken', res._data)
//     console.log('Transtoken', res.text)


//   })
// })