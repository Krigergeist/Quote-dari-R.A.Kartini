const quotes = [
  "Habis gelap terbitlah terang.",
  "Tiada awan di langit yang tetap selamanya.",
  "Jangan biarkan kegelapan menghentikan langkahmu.",
  "Perempuan bukan makhluk lemah.",
  "Pendidikan adalah jalan menuju kemerdekaan sejati.",
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
