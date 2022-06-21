const axios = require('axios')
var parseString = require('xml2js').parseString;
let today = new Date().toISOString().slice(0, 10)

exports.postTransact = (req, res) => {
    let type = req.body.type
    console.log(req.body)
    let transaction_name = req.body.transaction_name
    console.log(transaction_name)
    let transaction_cost = req.body.transaction_cost
    console.log(transaction_cost)
    let RedirectURL = ''
    let dog_name = req.body.dog_name
    let username = req.body.username
    
    console.log(dog_name, username)

    if (transaction_name == 'Litter_Registrations') {
        RedirectURL = 'https://afbr-80930.web.app/litter_registrations_success'
        console.log('litter registrations in gettransact url')
    }
    else {
        RedirectURL = `https://afbr-80930.web.app/dog_registrations_success/${dog_name}/${username}`
        console.log('other registrations in gettransact url')

    }

    //  http://afbr-80930.web.app/dog_registrations_success
    var dpo_data =
        "<?xml version='1.0' encoding='utf-8'?>" +
        "<API3G>" +
        "<CompanyToken>B069C2B2-B27D-42DE-B913-0B539235D0F6</CompanyToken>" +
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
        "  <ServiceType>51851</ServiceType>" +
        `<ServiceDescription>${transaction_name}</ServiceDescription>}` +
        `<ServiceDate>${today}</ServiceDate>` +
        " </Service>" +
        "</Services>" +
        "</API3G>"


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
