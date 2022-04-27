const axios = require('axios')
var parseString = require('xml2js').parseString;
let today = new Date().toISOString().slice(0, 10)
exports.postTransact = (req, res) => {
    let type = req.body.type
    console.log(req.body)
    let transaction_name = req.body.transaction_name
    let transaction_cost = req.body.transaction_cost
    console.log(transaction_cost)
    let RedirectURL = ''

    transaction_name = 'Litter Registrations ' ? 
     RedirectURL = 'http://afbr-80930.web.app/dog_registrations_success'
     :      RedirectURL = 'http://afbr-80930.web.app/litter_registrations_success'


    var dpo_data =
        "<?xml version='1.0' encoding='utf-8'?>" +
        "<API3G>" +
        "<CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>" +
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
        "  <ServiceType>3854</ServiceType>" +
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
                console.log('Transtoken', result.API3G.TransToken)
                res.send('https://secure.3gdirectpay.com/dpopayment.php?ID='+ TransToken)
            })
        }
        )
        .catch((err) => console.log(err))


    
}
