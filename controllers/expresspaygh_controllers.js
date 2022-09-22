const axios = require('axios');
const { response } = require('express');
const FormData = require('form-data');
var $ = require("jquery");
const superagent = require('superagent');


exports.postTransact = (req, res) => {
    let type = req.body.type
    let transaction_name = req.body.transaction_name
    console.log('request body in frontend ', req.body)
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

        // expressgh_data = {
        //     "merchant-id": merchant_id,
        //     "api-key": api_key,
        //     "firstname": firstname,
        //     "lastname": lastname,
        //     "email": email,
        //     "phonenumber": phone_number,
        //     "currency": "USD",
        //     "amount": "0.10",
        //     "order-id": "qtslp",
        //     "redirect-url": RedirectURL,
        // }

        let body = new FormData();
        // body.append("merchant-id", merchant_id)
        // body.append("api-key", api_key)
        // body.append("firstname", firstname)
        // body.append("lastname", lastname)
        // console.log('email is', email)
        // body.append("email", 'yotuo2003@gmail.com')
        // body.append("phonenumber", phone_number)
        // body.append("currency", "USD")
        // body.append("amount", "0.10")
        // body.append("order-id", "qtslp")
        // body.append("redirect-url", RedirectURL)
        const configHeaders = {
            "content-type": "application/json",
            "Accept": "application/json"
        };
        let jsonData = {
            "merchant-id": "461826155167",
            "api-key": "7FdxlkOcWh16T0RDoajGL-xtPNm87sztz1H43troqY-jlXsSEpZcgHH1JQstlAx-H2LY442qj6Vqa1QShZZ",
            "firstname": "long",
            "lastname": "pass",
            "email": "longpass2020@gmail.com",
            "phonenumber": "233244123123",
            "username": "longpass2020@gmail.com",
            "accountnumber": "36longpass2020@gmail.com",
            "currency": "GHS",
            "amount": "10",
            "order-id": "88cb4568-7e94-43b4-8233-0809eece8405",
            "redirect-url": "https://google.com",
            "post-url": ""
        };

        for (key in jsonData) {
            body.append(key, jsonData[key]);
        }
        // axios({
        //     method: 'post',
        //     url: 'https://sandbox.expresspaygh.com/api/submit.php',
        //     data: body,
        //     headers: { "Content-Type": "multipart/form-data" }

        // })
        axios({
            method: "post",
            url: "https://sandbox.expresspaygh.com/api/submit.php",
            data: body,
            headers: {
                'Content-Type':  `multipart/form-data; ${body.getBoundary()}`,
                'Content-Length': body.getLengthSync()
          }})
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

    //     .then(function (response) {
    //         // console.log(response);
    //         console.log('form data variables', body.entries())
    //     })
    //     .catch(function (error) {
    //         //handle error
    //         // console.log(error);
    //     });
    // axios.post("https://sandbox.expresspaygh.com/api/submit.php",
    //     body, headers = {
    //         "headers": {
    //             "Content-Type": "multipart/form-data",
    //         }
    //     }
    // )
    //     .then((response) => console.log(response))
    //     .catch((err) => console.log(err))


    // superagent.post('https://sandbox.expresspaygh.com/api/submit.php')
    //     .send(body).end((err, res) => {
    //         if (err) { return console.log(err); }
    //         console.log(res);
    //         console.log(res);
    //     });
    // $.ajax({
    //     url: "https://sandbox.expresspaygh.com/api/submit.php",
    //     type: "POST",
    //     data: {
    //         body
    //     },
    //     // dataType: 'json',
    //     success: function (result) {
    //         console.log(result)
    //     }
    // });
};

sendMoney()

}


