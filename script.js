const apiURL = "https://brsapi.ir/Api/User.php?key=FreeTZPrEbgTZzbW2SSGXOlzjlulRFcz";

async function fetchData() {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();

    const { price, rsi, pbr, netBuy } = data;

    let signal = "";
    if (pbr > 2 && netBuy > 500000000 && rsi < 30) {
      signal = "📈 سیگنال ورود";
    } else if (pbr < 1 && netBuy < -500000000 && rsi > 70) {
      signal = "📉 سیگنال خروج";
    } else {
      signal = "⚖️ بدون سیگنال واضح";
    }

    document.getElementById("signal").textContent = signal;

    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["قیمت", "RSI", "PBR", "خالص خرید"],
        datasets: [{
          label: "تحلیل",
          data: [price, rsi, pbr, netBuy / 1e8],
          backgroundColor: ["blue", "orange", "green", "red"]
        }]
      }
    });
  } catch (err) {
    document.getElementById("signal").textContent = "❌ خطا در دریافت اطلاعات";
    console.error("Fetch error:", err);
  }
}

fetchData();
