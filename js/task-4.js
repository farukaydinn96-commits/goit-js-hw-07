const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  // Sayfanın yenilenmesini engelliyoruz
  event.preventDefault();

  // elements özelliğini kullanarak form elemanlarına ulaşıyoruz
  const email = loginForm.elements.email.value.trim();
  const password = loginForm.elements.password.value.trim();

  // Eğer alanlardan biri boşsa uyarı veriyoruz
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  // Verileri bir nesneye topluyoruz
  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  // Formu sıfırlıyoruz
  loginForm.reset();
});
