((window) => {
  const noThanks = document.getElementById("upsellNoThanks");
  const noThanksClone = noThanks.cloneNode(true);

  noThanks.parentNode.replaceChild(noThanksClone, noThanks);

  noThanksClone.addEventListener("click", (e) => {
    e.preventDefault();
    window.showAlert = "false";
    window.location.replace(
      `${location.origin}/Path/25kCasinoWorldSummerSpinsEDP_FCF84754DC444371BE18C2E58A8347B5/CEInt.aspx`
    );
  });
})(window);