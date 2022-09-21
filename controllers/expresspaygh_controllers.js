const axios = require('axios')
var parseString = require('xml2js').parseString;
let today = new Date().toISOString().slice(0, 10)

exports.postTransact = (req, res) => {
    let type = req.body.type
    let transaction_name = req.body.transaction_name
    console.log(req.body)
    console.log(transaction_name)
    var transaction_cost;
    let RedirectURL = ''
    let dog_name = req.body.dog_name
    let username = req.body.username || 'DEAR AFBR USER'
    let firstname = username[0]
    let lastname = username[1]
    //change the name to a list format]
    let email = req.body.email
    let phone_number = "2020"
    var merchant_id = "461826155167"
    var api_key = "7FdxlkOcWh16T0RDoajGL-xtPNm87sztz1H43troqY-jlXsSEpZcgHH1JQstlAx-H2LY442qj6Vqa1QShZZ"

    if (transaction_name == 'litter_registrations') {
        RedirectURL = `https://africanbullyregistry.com?order-id=xxxx&token=xxxxxdog_registrations_success/${dog_name}/${username}/${email}/`
        console.log('litter registrations in gettransact url')
    }
    else {
        RedirectURL = `https://africanbullyregistry.com?order-id=xxxx&token=xxxxxdog_registrations_success/${dog_name}/${username}/${email}/`
        console.log('other registrations in gettransact url')

    }
    const sendMoney = () => {

        expressgh_data = {
            "merchant-id": merchant_id,
            "api-key": api_key,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "phonenumber": phone_number,
            "currency": "USD",
            "amount": "0.10",
            "order-id": "qtslp",
            "redirect-url":RedirectURL,
        }

        console.log('expressghdata', expressgh_data)
        axios.post('https://sandbox.expresspaygh.com/api/submit.php', 
                 expressgh_data, {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }})
            .then((response) => {
                token = response.data.token
                console.log('response', response)
                res.send('https://sandbox.expresspaygh.com/api/checkout.php?token=' + token)
            }
            )

            .catch((err) => console.log(err))

    }

    

    sendMoney()
}
