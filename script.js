const qrCodeContainer = document.getElementById("qr-code");
const generateBtn = document.getElementById("generate-btn");
const emailInput = document.getElementById("email-input");

generateBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  if (!email) {
    alert("Mohon masukkan email!");
    return;
  }

  // Hapus QR Code yang lama (jika ada)
  qrCodeContainer.innerHTML = "";

  // Generate QR Code dengan format mailto
  const mailtoLink = `mailto:${email}`;
  new QRCode(qrCodeContainer, {
    text: mailtoLink,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
});
