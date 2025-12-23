document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("contactMessage").value.trim();

  if (!name) {
    alert("Name is required!");
    return;
  }

  if (!email || !email.includes("@")) {
    alert("Valid email is required!");
    return;
  }

  if (!message || message.length < 10) {
    alert("Message must be at least 10 characters!");
    return;
  }

  alert(`Thank you for contacting us, ${name}!`);
  this.reset();
});

document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const college = document.getElementById("college").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.getElementById("gender").value;
  const courseName = document.getElementById("courseName").value.trim();

  if (
    !name ||
    !college ||
    !branch ||
    !semester ||
    !phone ||
    !email ||
    !gender ||
    !courseName
  ) {
    alert("All fields are required!");
    return;
  }

  if (phone.length !== 10 || isNaN(phone)) {
    alert("Phone number must be 10 digits!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
    return;
  }

  if (isNaN(semester) || semester < 1 || semester > 8) {
    alert("Semester must be a number between 1 and 8!");
    return;
  }

  alert(
    `🎉 Thank you for enrolling, ${name}! Your course (${courseName}) has been submitted successfully.`
  );
  this.reset();
});

document.getElementById("enrollForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const college = document.getElementById("college").value.trim();
  const branch = document.getElementById("branch").value.trim();
  const semester = document.getElementById("semester").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const gender = document.getElementById("gender").value;
  const courseName = document.getElementById("courseName").value.trim();

  if (
    !name ||
    !college ||
    !branch ||
    !semester ||
    !phone ||
    !email ||
    !gender ||
    !courseName
  ) {
    alert("All fields are required!");
    return;
  }

  alert(`Thank you for Enrolling, ${name}!`);
  this.reset();
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!email || !password) {
    alert("All fields are required!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email address!");
    return;
  }

  alert("Login Successful!");
  this.reset();
});

document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const phone = document.getElementById("registerPhone").value.trim();
    const pass = document.getElementById("registerPassword").value.trim();
    const confirmPass = document
      .getElementById("registerConfirmPassword")
      .value.trim();
    const agree = document.getElementById("agreeTerms").checked;

    if (!name || !email || !phone || !pass || !confirmPass) {
      alert("All fields are required!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Enter a valid email address!");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Phone number must be 10 digits!");
      return;
    }

    if (pass !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    if (!agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    alert(`Registration Successful! Welcome, ${name}.`);
    this.reset();
  });
