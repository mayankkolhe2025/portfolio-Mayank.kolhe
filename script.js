document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copyEmail");
  const email = "mayankkolhe2007@gmail.com";
  const msg = document.getElementById("copyMsg");

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(email).then(() => {
      msg.style.display = "block";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    });
  });
});
