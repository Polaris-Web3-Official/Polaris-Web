export default function formatMarketCap(str){
  const trillion = 1000000000000;
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  const marketCap = parseInt(str);

  if (marketCap >= trillion) {
    return `${(marketCap / trillion).toFixed(2)} T`;
  } else if (marketCap >= billion) {
    return `${(marketCap / billion).toFixed(2)} B`;
  } else if (marketCap >= million) {
    return `${(marketCap / million).toFixed(2)} M`;
  } else if (marketCap >= thousand) {
    return `${(marketCap / thousand).toFixed(0)} K`;
  } else {
    return `${marketCap}`;
  }
}
