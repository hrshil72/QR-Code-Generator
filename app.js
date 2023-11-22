let qrText = document.getElementById("qrText");
let imgbox = document.getElementById("imgbox");
let qrImg = document.getElementById("qrImg");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgbox.classList.add("show-img");
  } else {
    qrText.classList.add("shake");
    setTimeout(() => {
      qrText.classList.remove("shake");
    }, 1000);
  }
}
