import "@fontsource-variable/outfit";
import QRCode from "qrcode";

// DOM SELECTORS

const input = <HTMLInputElement>document.querySelector("input");

const button = <HTMLButtonElement>document.querySelector("button");

const qrcodeImg = <HTMLCanvasElement>document.querySelector("#canvas");

const buttonGroup = <HTMLButtonElement>document.querySelector("#button-group");

// Logic
button.addEventListener("click", () => {
  const text = input.value;
  if (text) {
    QRCode.toCanvas(qrcodeImg, text, { width: 300 }, (error) => {
      if (error) console.error(error);
    });

    buttonGroup.innerHTML = ` <a href="${qrcodeImg.toDataURL()}" download="QrCode"><button class="px-3 py-4 bg-[#3662E3] w-28 lg:w-32 rounded-lg text-white">
    Download
  </button></a>
  `;

    input.value = "";
  }
});
