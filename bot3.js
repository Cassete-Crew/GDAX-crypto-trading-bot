import CoinbasePro from 'coinbase-pro';
const publicClient = new CoinbasePro.PublicClient();

const environment = process.env.NODE_ENV
if(environment === 'development'){
    dotenv.config({path:process.cwd() + "/.env.development"})
}else if(environment === 'production'){
    dotenv.config({path:process.cwd()+"/.env.production"})
}

const key = process.env.TRADING_BOT_KEY || '';
const secrete = process.env.TRADING_BOT_SECRET || '';
const apiUrl = process.env.API_URL || '';

const APP_VERSION = "v1.00";
const SLEEP_TIME = 30000;
const product = 'BTC-USD';

const myCallback = (err, response, data) => {
    /* ... */
};

async function placeholderMethod(){
    await publicClient.getProductOrderBook(
        'ETH-USD',
        { level: 3 },
        (error, response, book) => {
        console.log('book ...', book);

        if(error){
            console.log("There was an error with fetching the data..."+ error)
        }
        }
    );
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

// console.log("\n\n\n\nConnecting to Coinbase Pro in " + parseInt(SLEEP_TIME/1000) + " seconds ..."); 

placeholderMethod();

export default {
    placeholderMethod,
    };
