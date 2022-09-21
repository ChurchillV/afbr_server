const request = require('supertest')
const app = require('../server')


describe('expresspay should work', () => {
  it('should debit money into account successfully', async () => {
    const res = await request(app)
      .post('/api/expresspay/transact')
      .send({
        transaction_name: 'Test',
        dog_name: 'hope',
      })
    
    expect(res.statusCode).toEqual(200)

    // console.log('Transtoken', res._data)


  })
})