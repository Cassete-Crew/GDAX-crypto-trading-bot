import CoinbasePro from 'coinbase-pro';
import { Command } from 'commander';
const program = new Command();

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

const strategyAppllied = readMt4Template();

const myCallback = (err, response, data) => {
    /* ... */
};

const readMt4Template = async() =>{
    //Read in mt4 template then look for 
    //a piece of text with the id of strategyAppllied 

    // Read in H4 template then create an instance of the following classses [Fib, MACD, 10EMA, 20EMA]

    // Analyze market conditions by mainly looking for support that has turned to resistance, or that has failed to do so

    // A simple algorithm for achieving this is by triggering an event whenever a swing high/low is detected
}
 
const getProductHistoricRates = async () =>{
    await publicClient.getProductHistoricRates(
    'BTC-USD',
    { granularity: 3600 },
    (err, response, data) => {
        console.log("The data is ..."+data[data.length -1]);
        if(err){
            console.log("An errror was encountered while fetching the data.."+ err);
        }
    });
}

function toDate(val) {
  return new Date(val * 1e3)
}

const main = async function(){
    // program.version('1.0.0')
    // .option('-i. --interval [interval]', 'Interval in seconds for candlestick',
    //         parseInt, 300)
    // .parse(process.argv);

    // program
    // .option('--first')
    // .option('-s, --separator <char>');
    
    // program.parse();
    
    // const options = program.opts();
    // const limit = options.first ? 1 : undefined;
    // console.log('program.args[0] ... '+program.args[0]);

    const now = new Date()
    const yesterday = new Date(now.getTime() - (24 * 60 * 60 * 1e3))


    program.version('1.0.0')
    .option('-i, --interval [interval]', 'Interval in seconds for candlestick',
            parseInt)
    .option('-p, --product [product]', 'Product identifier', 'BTC-USD')
    .option('-s, --start [start]', 'Start time in unix seconds',
            toDate, yesterday)

    .option('-e, --end [end]', 'End time in unix seconds', toDate, now)
    .option('-t, --strategy [strategy]', 'Strategy Type')
    .option('-r, --type [type]', 'Run type')
    .option('-f, --funds [funds]', 'Amount of money to use', parseInt)
    .option('-l, --live', 'Run live')
    .parse(process.argv)
        //Configurations

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

    getProductHistoricRates();
    // console.log("program.interval is... "+program.interval);
    // console.log("process.argv is... "+process.argv);
    // console.log(program.args[0].split(options.separator, limit));

}

await main();

export default {
    getProductHistoricRates,
    };
