const axios = require('axios');
const url = require('../weburl')['url']

var merchant_id = "461826155167"
var api_key = "7FdxlkOcWh16T0RDoajGL-xtPNm87sztz1H43troqY-jlXsSEpZcgHH1JQstlAx-H2LY442qj6Vqa1QShZZ"

exports.postTransact = (req, res) =>
{
    let type = req.body.type
    let transaction_name = req.body.transaction_name
    console.log('request body in frontend ', req.body)
    console.log(transaction_name)
    var transaction_cost = req.body.transaction_cost
    let RedirectURL = ''
    let dog_name = req.body.dog_name || 'No name supplied'
    let username = req.body.username || 'DEAR AFBR USER'
    let firstname = username.split(" ")[0]
    let lastname = username.split(" ")[-1]
    let email = req.body.email
    let phone_number = "2020"
    let order_id = 'afjfs'
    let a = ''
    var postExpresspayUrl = `${url}api/email/expresspay_post_url`
    if (transaction_name == 'litter_registrations')
    {
        RedirectURL = `https://africanbullyregistry.com/dog_registrations_success/${dog_name}/${username}/${email}/`
        console.log('litter registrations in gettransact url')
    }
    else
    {
        RedirectURL = `https://africanbullyregistry.com/dog_registrations_success/${dog_name}/${username}/${email}/`
        console.log('other registrations in gettransact url')
    }
    const sendMoney = () =>
    {

        expressgh_data = {
            "merchant-id": merchant_id,
            "api-key": api_key,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "phonenumber": phone_number,
            "currency": "GHS",
            "amount": transaction_cost,
            "order-id": order_id,
            "redirect-url": RedirectURL,
            "post-url": postExpresspayUrl
        }

        axios({
            method: 'post',
            url: 'https://sandbox.expresspaygh.com/api/submit.php',

            params: expressgh_data,
            headers: { "Content-Type": "multipart/form-data" }
        }

        )
            .then((resp) =>
            {
                token = resp.data.token
                //update token and url in dog database 
                axios
                    .post(`${url}api/dogs/set_token_and_order_id`, {
                        dog_name: dog_name, token:
                            token, order_id: order_id
                    })
                    .then((resp) =>
                    {
                        console.log('successfully updated dog token and order_id in database')
                        let checkout_link = `https://sandbox.expresspaygh.com/api/checkout.php?token=${token}`
                        console.log(token)
                        console.log(checkout_link)
                        res.send(checkout_link)
                    })


            })



    };

    sendMoney()

}

// test the status of a transaction
exports.getTransactionStatus = (req, res) =>
{
    let token = req.body.token
    let query_data = {
        token: token,
        "merchant-id":merchant_id,
        "api-key": api_key
    }

    console.log(token)
    console.log(merchant_id)
    console.log(api_key)
    axios({
        method: 'post',
        url: 'https://sandbox.expresspaygh.com/api/query.php',

        params: query_data,
        headers: { "Content-Type": "multipart/form-data" }
    }

    )
        .then((resp) =>
        {
            console.log(resp.data)
            res.send(resp.data)
        })
        .catch((err) => console.log(err))

}