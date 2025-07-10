const body= document.querySelector("body");
body.innerHTML += `
  <main class ="container">

  <!--TEXT ON THE LEFT SECTION-->
  <section class="left">
  <h1>Learn to code by watching others</h1>
  <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, 
  but understanding how developers think is invaluable.</p>
  </section>

  <!--TEXT ON THE RIGHT SECTION-->
  <section class="right">   
    <div class="trial-text">
      <strong>Try it free 7 days</strong> <span class="faint">then $20/mo. thereafter</span>
    </div>

    <!--inpute-->
    <form id="signup-form" novalidate>
      <div class="form-control">
        <input type="text" id="firstName" placeholder="First Name" />
        <small class="error"></small><!-- .nextElementSibling looks for this -->
      </div>

      <div class="form-control">
        <input type="text" id="lastName" placeholder="Last Name" />
        <small class="error"></small>
      </div>

      <div class="form-control">
        <input type="email" id="email" placeholder="Email Address" />
        <small class="error"></small>
      </div>

            <div class="form-control">
        <input type="password" id="password" placeholder="password" />
        <small class="error"></small>
      </div>

      <button type="submit" class="submit-btn">CLAIM YOUR FREE TRIAL</button>
      <p class="terms">
        By clicking the button, you are agreeing to our
        <span class="red-text">Terms and Services</span>
      </p>
    </form>
  </section>
  </main> `
  // Function to validate single input live
  function validateInput(input) {
    if (input === firstName && input.value.trim() === "") {
      showError(input, "First Name cannot be empty");
    } else if (input === firstName && input.value.length < 3) {
      showError(input, "First Name must be at least 3 characters");
    } else if (input === lastName && input.value.length < 3) {
      showError(input, "Last Name cannot be empty");
    } else if (input === email && !checkEmail(input.value)) {
      showError(input, "Looks like this is not an email");
    } else if (input === password && (input.value.trim() === "" || input.value.length < 8)) {
      showError(input, "Password cannot be empty or too short");
    } else {
      clearSingleError(input);
    }
  }

  // Attach input event for live validation
  [firstName, lastName, email, password].forEach(input => {
    input.addEventListener("input", () => validateInput(input));
  });

  // Submit form handler
  function validateForm(event) {
    event.preventDefault();
    clearErrors();
    let hasError = false;

    if (firstName.value.trim() === "" || firstName.value.trim().leng < 5) {
      showError(firstName, "First Name cannot be empty");
      hasError = true;
    }

    if (lastName.value.trim() === "") {
      showError(lastName, "Last Name cannot be empty");
      hasError = true;
    }

    if (!checkEmail(email.value)) {
      showError(email, "Looks like this is not an email");
      hasError = true;
    }

    if (password.value.trim() === "" || password.value.length < 8) {
      showError(password, "Password cannot be empty or too short");
      hasError = true;
    }

    if (!hasError) {
      alert("Form submitted successfully!");
      form.reset();
      clearErrors();
    }
  }

  // Show error
  function showError(input, message) {
    const errorText = input.nextElementSibling;
    errorText.textContent = message;
    input.classList.add("error-border");
  }

  // Clear error for one input
  function clearSingleError(input) {
    const errorText = input.nextElementSibling;
    errorText.textContent = "";
    input.classList.remove("error-border");
  }

  // Clear all errors
  function clearErrors() {
    const errorTexts = document.querySelectorAll("small");
    errorTexts.forEach(el => el.textContent = "");

    const inputs = document.querySelectorAll("input");
    inputs.forEach(el => el.classList.remove("error-border"));
  }

  // Email check
  function checkEmail(email) {
    return email.includes("@") && email.includes(".") && email.length > 5;
  }

  // Listen to form submit
  form.addEventListener("submit", validateForm);
const form = document.getElementById("signup-form");
