const request = require('supertest')
const app = require('../server')


// describe('send dog to temporal database', () => {
//   it('should add dog to record', async () => {
//     const res = await request(app)
//       .post('/api/dogs/temporal')
//       .send({

//             dog: {
//             'name': 'heavt',
//             'sex': 'female',

//         },
//             user:{
//                 uid: 'eAkfRFACAJNwCFQOyHdRG69chmJ2'
//             }
//       })


//     console.log('body', res.error)
//     expect(res.statusCode).toEqual(200  )

//     // console.log('text', res)
//   })
// })

// describe('very dog payment', () => {
//     it('should add dog to record in dog db', async () => {
//         const res = await request(app)
//             .post('/api/dogs/has_paid')
//             .send({

//                 dog: {
//                     name: 'HELEN',
//                 },
//                 user: {
//                     uid: 'eAkfRFACAJNwCFQOyHdRG69chmJ2',
//                     'id': 28
//                 }
//             })


//         console.log('body', res.error)
//         expect(res.statusCode).toEqual(200)

//         // console.log('text', res)
//     })
// })

describe('TEST search works', () => {
    it('make sure unnpaid ones do not show', async () => {
        const res = await request(app)
            .get('/api/dogs/search/chaka')
            


        // console.log('body', res.data)
        expect(res.statusCode).toEqual(200)

        // console.log('text', res)
    })
})

describe('give only users dogs', () => {
    it('make sure unnpaid ones do not show', async () => {
        const res = await request(app)
            .get('/api/dogs/getdoguser/9')
            


        // console.log('body', res.data)
        expect(res.statusCode).toEqual(200)

        // console.log('text', res)
    })
})
