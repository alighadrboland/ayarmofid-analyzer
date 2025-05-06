export default async function handler(req, res) {
  const tsetmcId = "21903460399224052"; // شناسه نماد عیار مفید در TSETMC
  const url = `https://www.tsetmc.com/instinfo/${tsetmcId}`;

  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0'
    }
  });

  const html = await response.text();

  // داده‌ها را با regex یا cheerio استخراج کن (نیاز به scraping)
  const fake = {
    price: 1240,
    rsi: 42,
    netBuy: -500000000,
    pbr: 0.9
  };

  res.setHeader('Access-Control-Allow-Origin', '*'); // برای استفاده در مرورگر
  res.json(fake);
}
