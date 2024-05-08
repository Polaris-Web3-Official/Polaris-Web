//importando funciones externas de /src/fuctions
import { fetchData } from "../../../functions/fetchData";
import { formatDate } from "../../../functions/formatDate";

//Se busca la data de las x monedas para las graficas con undelay para la api
//de coinguecko.

//Puede optimizarse para que no sea tan repetitiva 
//pero no se hizo la optimizacion por falta de tiempo.
export async function searchHistoryCoins() {
  try {
    const bitcoinData = await fetchDataWithDelay('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily&precision=0', 4000);
    console.log(bitcoinData);

    const ethereumData = await fetchDataWithDelay('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=30&interval=daily&precision=0', 8000);
    console.log(ethereumData);

    const tetherData = await fetchDataWithDelay('https://api.coingecko.com/api/v3/coins/tether/market_chart?vs_currency=usd&days=30&interval=daily&precision=0', 12000);
    console.log(tetherData);

    const binanceData = await fetchDataWithDelay('https://api.coingecko.com/api/v3/coins/binancecoin/market_chart?vs_currency=usd&days=30&interval=daily&precision=0', 16000);
    console.log(binanceData);

    const formattedBitcoinData = []
    bitcoinData?.total_volumes?.map(x => {
      let x1 = formatDate(new Date(x[0]))
      formattedBitcoinData.push({
        value: x[1],
        time: x1,
      })
    })

    const formattedEthereumData = []
    ethereumData?.total_volumes?.map(x => {
      let x1 = formatDate(new Date(x[0]))
      formattedEthereumData.push({
        value: x[1],
        time: x1,
      })
    })

    const formattedTetherData = []
    tetherData?.total_volumes?.map(x => {
      let x1 = formatDate(new Date(x[0]))
      formattedTetherData.push({
        value: x[1],
        time: x1,
      })
    })

    const formattedBinanceData = []
    binanceData?.total_volumes?.map(x => {
      let x1 = formatDate(new Date(x[0]))
      formattedBinanceData.push({
        value: x[1],
        time: x1,
      })
    })

    formattedBitcoinData.pop();
    formattedEthereumData.pop();
    formattedTetherData.pop();
    formattedBinanceData.pop();

    return {
      bitcoin: formattedBitcoinData,
      ethereum: formattedEthereumData,
      tether: formattedTetherData,
      binance: formattedBinanceData
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return error;
  }
}

async function fetchDataWithDelay(url, delay) {
  await wait(delay);
  const data = await fetchData(url);
  return data
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
