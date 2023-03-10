/*
============================================================================
Name        : GDAX Trading Bot
Author      : Bongisipho
Version     : 1.0.0
Copyright   : GNU General Public License (GPLv3)
Description : Educational trading bot for NEMISA project
============================================================================
*/
// import config from './app/config.json';
import crypto from 'crypto';
import request from 'request';
import GdaxModule from 'coinbase-pro';

const environment = process.env.NODE_ENV
if(environment === 'development'){
    dotenv.config({path:process.cwd() + "/.env.development"})
}else if(environment === 'production'){
    dotenv.config({path:process.cwd()+"/.env.production"})
}

const APP_VERSION = "v1.00";
const SLEEP_TIME = 30000;

 
// const passphrase = process.env.TRADING_BOT_PASSPHRASE || '';
const key = process.env.TRADING_BOT_KEY || '';
const secrete = process.env.TRADING_BOT_SECRET || '';
const apiUrl = process.env.API_URL || '';

// const apiUrl = config.get('GDAX_API_URL');

// const client = new gdax.PublicClient();
const publicClient1 = new GdaxModule.PublicClient(apiUrl); 
const authedClient2 = new GdaxModule.AuthenticatedClient(key, secrete, apiUrl);

//get unix time in seconds
let timestamp = Math.floor(Date.now() / 1000);

// set the parameter for the request message
let req = {
    method: 'GET',
    path: '/v2/exchange-rates?currency=USD',
    body: ''
};

const product = 'BTC-EUR';

let message = timestamp + req.method + req.path + req.body;
console.log(message);

//create a hexedecimal encoded SHA256 signature of the message
let signature = crypto.createHmac("sha256", secrete).update(message).digest("hex");

//create the request options object
let options = {
    baseUrl: 'https://api.coinbase.com/',
    url: req.path,
    method: req.method,
    headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': key,
        'CB-VERSION': '2015-07-22'
    }
};

request(options,function(err, response){
    if (err) console.log(err);
    console.log(response.body);
});

//Methods
async function historicalRates(){
    const results = await publicClient1.getProductHistoricalRates(product, {
        granuality: 300
    })
    console.log(results[results.length - 1]);
}
// Main logic
  
console.log("\n");
console.log("          __________  ___   _  __    ______               ___");
console.log("         / ____/ __ \\/   | | |/ /   /_  __/________ _____/ (_)___  ____ _");
console.log("        / / __/ / / / /| | |   /     / / / ___/ __ `/ __  / / __ \\/ __ `/");
console.log("       / /_/ / /_/ / ___ |/   |     / / / /  / /_/ / /_/ / / / / / /_/ / ");
console.log("       \\____/_____/_/  |_/_/|_|    /_/ /_/   \\__,_/\\__,_/_/_/ /_/\\__, /");
console.log("                                                                /____/");   
console.log("                                  ____        __");
console.log("                                 / __ )____  / /_");
console.log("                                / __  / __ \\/ __/");
console.log("                               / /_/ / /_/ / /_ ");
console.log("                              /_____/\\____/\\__/   " + APP_VERSION);

console.log("\n\n\n\n                    \"The Revolution Will Be Decentralized\"");

console.log("\n\n\n\nConnecting to Coinbase Pro in " + parseInt(SLEEP_TIME/1000) + " seconds ..."); 

historicalRates();

export default {
        historicalRates
    };

