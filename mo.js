const Flutterwave = require('flutterwave-node-v3');

const flw = new Flutterwave("FLWPUBK-ceabbd43b8f178fa6da2a6681cbe516e-X", "FLWSECK-1d731caf0259ea50d8cd3ddbd86c92dd-X");

const Gh_mobilemoney =  async () =>{
 
    try {

        const payload = {
            "tx_ref": "87869",
            "amount": "580",
            "type": "mobile_money_ghana",
            "currency": "GHS",
            "network": "MTN", //This is the customer's mobile money network provider (possible values: MTN, VODAFONE, TIGO)
            "phone_number": "0240369071",
            "email":"dukeopoku@gmail.com",
    }

       const response =  await flw.MobileMoney.ghana(payload)
       console.log(response);
    } catch (error) {
        console.log(erro)
    }                            
   
}
 
 
Gh_mobilemoney();
