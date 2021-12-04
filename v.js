const Flutterwave = require('flutterwave-node-v3');
const Virtual_card = require('flutterwave-node-v3/lib/rave.virtual_cards');

const flw = new Flutterwave("FLWPUBK_TEST-7ddc35270ae9e171f75aed3a94574fe3-X", "FLWSECK_TEST-3537a78df717fc25483c43a423c9a9d3-X");

const createVcard = async () => {

    try {
        const payload = {
            "currency": "NGN",
            "amount": 200,
            "billing_name": "Jermaine Graham",
            "billing_address": "2014 Forest Hills Drive",
            "billing_city": "San Francisco",
            "billing_state": "CA",
            "billing_postal_code": "000009",
            "billing_country": "NG",
            "callback_url": "https://your-callback-url.com/"
        }
        const response = await flw;

        const card = response.VirtualCard.create(payload);
        console.log(JSON.stringify(card));
        
    } 
    catch (error) {
        console.log(error)
    }

}

createVcard();
