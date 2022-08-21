const axios = require('axios')
var parseString = require('xml2js').parseString;
let today = new Date().toISOString().slice(0, 10)

exports.postTransact = (req, res) => {
    let type = req.body.type
    console.log(req.body)
    let transaction_name = req.body.transaction_name
    console.log(transaction_name)
    // let transaction_cost = req.body.transaction_cost
    var transaction_cost;
    let RedirectURL = ''
    let dog_name = req.body.dog_name
    let username = req.body.username || 'DEAR AFBR USER'
    let email = req.body.email
    var company_token = "B069C2B2-B27D-42DE-B913-0B539235D0F6"
    var service_type = "51851"

    console.log(dog_name, username)

    const getcurrentuserLocation = () => {
        axios.get('https://ipapi.co/json/')

            .then((res) => {
                console.log(res.data)
                if (res.data.country_name === 'Ghana') {
                    if (transaction_name == "litter_registrations") transaction_cost = 20.00
                    if (transaction_name == 'dog_registrations') transaction_cost = 30.00
                    if (transaction_name == 'adult_registrations') transaction_cost = 35.00
                    if (transaction_name == 'Test') {
                        transaction_cost = 0.50
                        company_token = '8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3'
                        service_type = "3854"
                    }

                    console.log('transactions cost', transaction_cost)

                }
                else {
                    if (transaction_name == "litter_registrations") transaction_cost = 25.00
                    if (transaction_name == 'dog_registrations') transaction_cost = 35.00
                    if (transaction_name == 'adult_registrations') transaction_cost = 40.00
                    if (transaction_name == 'Test') {
                        transaction_cost = 0.50
                        company_token = '8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3'
                        service_type = "3854"
                    }

                    console.log('transactions cost', transaction_cost)


                }

                sendMoney()
            })


            .catch((err) => console.log(err))
    }

    getcurrentuserLocation()

    if (transaction_name == 'Litter_Registrations') {
        RedirectURL = 'https://afbr-80930.web.app/litter_registrations_success'
        console.log('litter registrations in gettransact url')
    }
    else {
        RedirectURL = `https://afbr-80930.web.app/dog_registrations_success/${dog_name}/${username}/${email}/`
        RedirectURL - 'https://afbr-80930.web.app/dog_registrations'
        console.log('other registrations in gettransact url')

    }

    console.log(RedirectURL)
    //  http://afbr-80930.web.app/dog_registrations_success


    const sendMoney = () => {

        var dpo_data =
            "<?xml version='1.0' encoding='utf-8'?>" +
            "<API3G>" +
            `<CompanyToken>${company_token}</CompanyToken>` +
            "<Request>createToken</Request>" +
            "<Transaction>" +
            `<PaymentAmount>${transaction_cost}</PaymentAmount>` +
            "<PaymentCurrency>USD</PaymentCurrency>" +
            "<CompanyRef>49FKEOA</CompanyRef>" +
            `<RedirectURL>${RedirectURL}</RedirectURL>` +
            `<BackURL>${RedirectURL}</BackURL>` +
            "<CompanyRefUnique>0</CompanyRefUnique>" +
            "<PTL>5</PTL>" +
            "</Transaction>" +
            "<Services>" +
            "  <Service>" +
            `<ServiceType>${service_type}</ServiceType> ` +
            `<ServiceDescription>${transaction_name}</ServiceDescription>}` +
            `<ServiceDate>${today}</ServiceDate>` +
            " </Service>" +
            "</Services>" +
            "</API3G>"

        console.log(transaction_cost, 'is the transaction cost')

        console.log(dpo_data)
        console.log('company token - ', company_token)

        axios.post('https://secure.3gdirectpay.com/API/v6/', data = dpo_data)
            .then((response) => {
                var TransToken = ''
                token = response.data
                parseString(token, function (err, result) {

                    TransToken = result.API3G.TransToken
                    console.log('result', result)
                    console.log('Transtoken', TransToken)
                    res.send('https://secure.3gdirectpay.com/dpopayment.php?ID=' + TransToken)
                })
            }
            )
            .catch((err) => console.log(err))

    }



}
