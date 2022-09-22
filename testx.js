const axios = require('axios');
const { response } = require('express');
const FormData = require('form-data');
var $ = require("jquery");
// const { postTransact } = require('./controllers/expresspaygh_controllers');


postTransact = (req, res) => {

    const sendMoney = () => {
        let body = new FormData();
        let jsonData = {
            // "merchant-id": "461826155167",
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

        // })
        //     .then(function (response) {
        //         // console.log(response);
        //         console.log('form data variables', body.entries())
        //     })
        //     .catch(function (error) {
        //         //handle error
        //         // console.log(error);
        //     });
        axios.post("https://sandbox.expresspaygh.com/api/submit.php",
            body
        )
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
    };

    sendMoney()

}


postTransact()