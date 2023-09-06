// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("what-a-waterfall-world JS imported successfully!");
});

// Form validation help for create/edit & register/login forms
  (function () {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();