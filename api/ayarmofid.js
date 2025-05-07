export default async function handler(req, res) {
  const data = {
    price: 1245,
    rsi: 27,
    pbr: 2.1,
    netBuy: 800000000
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
