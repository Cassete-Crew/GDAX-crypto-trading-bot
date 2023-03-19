import CoinbasePro from 'coinbase-pro';

class HistoricalService{
    constructor([start, end, interval, product]){
        this.client = new CoinbasePro.PublicClient();
        this.start = start;
        this.end = end;
        this.interval = intervall;
    }

    async getData(){
        const results = await this.client.getProductHistoricRates(this.product, {
            granuality: this.interval
        })

        return results;
    }
}

export default HistoricalService;