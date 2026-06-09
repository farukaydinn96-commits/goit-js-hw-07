const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  // Girilen değeri alıp başındaki ve sonundaki boşlukları siliyoruz
  const trimmedValue = event.currentTarget.value.trim();

  // Eğer temizlenmiş değer boşsa 'Anonymous' yazdır, değilse girilen değeri yazdır
  if (trimmedValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = trimmedValue;
  }
});
