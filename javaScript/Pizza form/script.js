// Elements
const form = document.getElementById("orderForm");
const deliveryRadios = document.getElementsByName("deliveryOption");
const addressFields = document.getElementById("addressFields");
const sizeEl = document.getElementById("size");
const crustEl = document.getElementById("crust");
const toppingEls = document.querySelectorAll(".topping");
const extraEls = document.querySelectorAll(".extra");
const quantityEl = document.getElementById("quantity");
const paymentEl = document.getElementById("paymentMethod");
const cardFields = document.getElementById("cardFields");
const promoInput = document.getElementById("promo");
const promoBtn = document.getElementById("applyPromo");
const promoMsg = document.getElementById("promoMsg");

const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const discountEl = document.getElementById("discount");
const totalEl = document.getElementById("total");

const previewBtn = document.getElementById("previewBtn");
const orderModal = new bootstrap.Modal(document.getElementById("orderModal"));
const modalBody = document.getElementById("modalBody");
const confirmOrderBtn = document.getElementById("confirmOrder");

let appliedPromo = null;

// Helpers
function money(v) {
  return "$" + v.toFixed(2);
}

function updateAddressVisibility() {
  const delivery =
    Array.from(deliveryRadios).find((r) => r.checked).value === "delivery";
  addressFields.querySelectorAll("input").forEach((i) => {
    i.required = delivery;
  });
  addressFields.style.display = delivery ? "flex" : "none";
  updateSummary();
}

function gatherOrder() {
  const size = sizeEl.value;
  const crust = crustEl.value;
  const toppings = Array.from(toppingEls)
    .filter((t) => t.checked)
    .map((t) => t.value);
  const extras = Array.from(extraEls)
    .filter((e) => e.checked)
    .map((e) => e.value);
  const qty = Math.max(1, parseInt(quantityEl.value) || 1);
  const delivery = Array.from(deliveryRadios).find((r) => r.checked).value;
  return { size, crust, toppings, extras, qty, delivery };
}

function calcPrices() {
  const o = gatherOrder();
  let base = PRICES.size[o.size] || 0;
  base += PRICES.crust[o.crust] || 0;
  let toppingsTotal = o.toppings.reduce(
    (s, t) => s + (PRICES.toppings[t] || 0),
    0
  );
  let extrasTotal = o.extras.reduce((s, e) => s + (PRICES.extras[e] || 0), 0);
  let subtotal = (base + toppingsTotal) * o.qty + extrasTotal;
  let deliveryFee = o.delivery === "delivery" ? PRICES.deliveryFee : 0;
  let discount = 0;
  if (appliedPromo === "SAVE10") discount = subtotal * 0.1;
  if (appliedPromo === "FREEDEL" && deliveryFee > 0) deliveryFee = 0;
  const total = Math.max(0, subtotal + deliveryFee - discount);
  return {
    subtotal,
    deliveryFee,
    discount,
    total,
    breakdown: { base, toppingsTotal, extrasTotal },
  };
}

function updateSummary() {
  const p = calcPrices();
  subtotalEl.textContent = money(p.subtotal);
  deliveryFeeEl.textContent = money(p.deliveryFee);
  discountEl.textContent = "-" + money(p.discount);
  totalEl.textContent = money(p.total);
}

// Promo apply
promoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();
  if (!code) return;
  if (code === "SAVE10" || code === "FREEDEL") {
    appliedPromo = code;
    promoMsg.classList.remove("d-none", "text-danger");
    promoMsg.classList.add("text-success");
    promoMsg.textContent = "Promo applied: " + code;
  } else {
    appliedPromo = null;
    promoMsg.classList.remove("d-none");
    promoMsg.classList.add("text-danger");
    promoMsg.textContent = "Invalid code";
  }
  updateSummary();
});

// Payment method toggle
paymentEl.addEventListener("change", () => {
  cardFields.style.display = paymentEl.value === "card" ? "block" : "none";
});

// Delivery option toggle
Array.from(deliveryRadios).forEach((r) =>
  r.addEventListener("change", updateAddressVisibility)
);

// Inputs that affect price
[sizeEl, crustEl, quantityEl, ...toppingEls, ...extraEls].forEach((el) => {
  el.addEventListener("change", updateSummary);
  el.addEventListener("input", updateSummary);
});

// Preview modal
previewBtn.addEventListener("click", () => {
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }
  const o = gatherOrder();
  const p = calcPrices();
  const customer = {
    name: document.getElementById("customerName").value,
    email: document.getElementById("customerEmail").value,
    phone: document.getElementById("customerPhone").value,
    address:
      addressFields.style.display !== "none"
        ? {
            line: document.getElementById("addressLine").value,
            city: document.getElementById("city").value,
            zip: document.getElementById("zip").value,
          }
        : null,
  };

  modalBody.innerHTML = `
                <h6>Customer</h6>
                <p>${customer.name} • ${customer.email} • ${customer.phone}</p>
                ${
                  customer.address
                    ? `<p>${customer.address.line}, ${customer.address.city} ${customer.address.zip}</p>`
                    : "<p>Pickup</p>"
                }
                <hr/>
                <h6>Order</h6>
                <p>Size: ${o.size} • Crust: ${o.crust} • Qty: ${o.qty}</p>
                <p>Toppings: ${
                  o.toppings.length ? o.toppings.join(", ") : "None"
                }</p>
                <p>Extras: ${o.extras.length ? o.extras.join(", ") : "None"}</p>
                <p>Notes: ${document.getElementById("notes").value || "—"}</p>
                <hr/>
                <h6>Payment</h6>
                <p>${paymentEl.value || "N/A"}</p>
                <hr/>
                <h6>Pricing</h6>
                <ul>
                    <li>Subtotal: ${money(p.subtotal)}</li>
                    <li>Delivery fee: ${money(p.deliveryFee)}</li>
                    <li>Discount: -${money(p.discount)}</li>
                    <li class="fw-bold">Total: ${money(p.total)}</li>
                </ul>
            `;
  orderModal.show();
});

// Confirm order
confirmOrderBtn.addEventListener("click", () => {
  // Fake submit
  orderModal.hide();
  alert(
    "Order placed! A confirmation email/sms would be sent in a real system."
  );
  form.reset();
  appliedPromo = null;
  promoMsg.classList.add("d-none");
  cardFields.style.display = "none";
  updateAddressVisibility();
  updateSummary();
  form.classList.remove("was-validated");
});

// Form submission (also trigger preview/confirm)
form.addEventListener("submit", (e) => {
  e.preventDefault();
  previewBtn.click();
});

// Initial state
updateAddressVisibility();
updateSummary();

// Basic bootstrap validation UI
(function () {
  "use strict";
  // no-op — using manual checks on preview/submit
})();
