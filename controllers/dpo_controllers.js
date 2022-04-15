const axios = require('axios')
var parseString = require('xml2js').parseString;

exports.postTransact = (req, res) => {

    var dpo_data =
        "<?xml version='1.0' encoding='utf-8'?>" +
        "<API3G>" +
        "<CompanyToken>8D3DA73D-9D7F-4E09-96D4-3D44E7A83EA3</CompanyToken>" +
        "<Request>createToken</Request>" +
        "<Transaction>" +
        "<PaymentAmount>0.01</PaymentAmount>" +
        "<PaymentCurrency>USD</PaymentCurrency>" +
        "<CompanyRef>49FKEOA</CompanyRef>" +
        "<RedirectURL>http://afbr-80930.web.app/dog_registrations_success</RedirectURL>" +
        "<BackURL>http://afbr-80930.web.app/dog_registrations</BackURL>" +
        "<CompanyRefUnique>0</CompanyRefUnique>" +
        "<PTL>5</PTL>" +
        "</Transaction>" +
        "<Services>" +
        "  <Service>" +
        "  <ServiceType>3854</ServiceType>" +
        "  <ServiceDescription>Dog Registrations</ServiceDescription>" +
        "<ServiceDate>2013/12/20 19:00</ServiceDate>" +
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
