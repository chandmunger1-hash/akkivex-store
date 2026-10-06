// AKKIVEX STORE
// Fictional frontend data only.
// Authentication: GitHub Pages + localStorage.

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PRODUCTS
  ========================= */

  const products = [
    { id: 1, category: "VISA", price: 150, balance: 3000, holder: "Alex Carter", card: "5722 XXXX XXXX 3548", expiry: "09/32", type: "DEBIT CARD", level: "HOFC PREMIUM", stock: 8 },
    { id: 2, category: "VISA", price: 210, balance: 5000, holder: "Daniel Wilson", card: "5722 XXXX XXXX 4821", expiry: "07/33", type: "DEBIT CARD", level: "PREMIUM", stock: 6 },
    { id: 3, category: "VISA", price: 270, balance: 6000, holder: "James Anderson", card: "5722 XXXX XXXX 4217", expiry: "11/32", type: "DEBIT CARD", level: "PREMIUM", stock: 5 },
    { id: 4, category: "VISA", price: 330, balance: 8000, holder: "Robert Miller", card: "5722 XXXX XXXX 4532", expiry: "04/34", type: "DEBIT CARD", level: "PREMIUM", stock: 4 },
    { id: 5, category: "VISA", price: 390, balance: 9000, holder: "William Davis", card: "5722 XXXX XXXX 4916", expiry: "12/33", type: "DEBIT CARD", level: "PREMIUM", stock: 3 },

    { id: 6, category: "MASTERCARD", price: 170, balance: 3200, holder: "Chris Brown", card: "5234 XXXX XXXX 5234", expiry: "08/33", type: "DEBIT CARD", level: "PREMIUM", stock: 8 },
    { id: 7, category: "MASTERCARD", price: 230, balance: 4000, holder: "Matthew Johnson", card: "5234 XXXX XXXX 5487", expiry: "03/34", type: "DEBIT CARD", level: "PREMIUM", stock: 7 },
    { id: 8, category: "MASTERCARD", price: 290, balance: 6000, holder: "Andrew Thompson", card: "5234 XXXX XXXX 5271", expiry: "10/33", type: "DEBIT CARD", level: "PREMIUM", stock: 6 },
    { id: 9, category: "MASTERCARD", price: 350, balance: 8000, holder: "Joseph Martinez", card: "5234 XXXX XXXX 5548", expiry: "06/34", type: "DEBIT CARD", level: "PREMIUM", stock: 4 },
    { id: 10, category: "MASTERCARD", price: 410, balance: 10000, holder: "Anthony Taylor", card: "5234 XXXX XXXX 5103", expiry: "01/35", type: "DEBIT CARD", level: "PREMIUM", stock: 3 },

    { id: 11, category: "RUPAY", price: 190, balance: 3500, holder: "Joshua Thomas", card: "6071 XXXX XXXX 6071", expiry: "05/33", type: "DEBIT CARD", level: "PREMIUM", stock: 8 },
    { id: 12, category: "RUPAY", price: 250, balance: 4500, holder: "Ryan Jackson", card: "6071 XXXX XXXX 6521", expiry: "09/34", type: "DEBIT CARD", level: "PREMIUM", stock: 6 },
    { id: 13, category: "RUPAY", price: 310, balance: 6000, holder: "Brandon White", card: "6071 XXXX XXXX 6384", expiry: "02/34", type: "DEBIT CARD", level: "PREMIUM", stock: 5 },
    { id: 14, category: "RUPAY", price: 370, balance: 8000, holder: "Kevin Harris", card: "6071 XXXX XXXX 6214", expiry: "07/34", type: "DEBIT CARD", level: "PREMIUM", stock: 4 },
    { id: 15, category: "RUPAY", price: 430, balance: 10000, holder: "Jason Martin", card: "6071 XXXX XXXX 6528", expiry: "11/34", type: "DEBIT CARD", level: "PREMIUM", stock: 3 },
    { id: 16, category: "RUPAY", price: 500, balance: 15000, holder: "Eric Robinson", card: "6071 XXXX XXXX 6712", expiry: "12/35", type: "DEBIT CARD", level: "PREMIUM", stock: 2 }
  ];

  /* =========================
     SHORTCUT
  ========================= */

  const $ = id => document.getElementById(id);

  /* =========================
     ELEMENTS
  ========================= */

  const loader = $("loader");
  const app = $("app");

  const barFill = $("barFill");
  const percent = $("percent");
  const loaderText = $("loaderText");

  const productsBox = $("products");
  const filtersBox = $("filters");
  const searchBox = $("search");

  const profileBtn = $("profileBtn");

  const homePage = $("homePage");
  const profilePage = $("profilePage");
  const freePage = $("freePage");

  const productModal = $("productModal");
  const productDetail = $("productDetail");

  const modal = $("modal");
  const selectedProduct = $("selectedProduct");

  const copyUpi = $("copyUpi");
  const submitPayment = $("submitPayment");

  const utrInput = $("utr");
  const emailInput = $("email");

  const copyRef = $("copyRef");

  /* =========================
     AUTH ELEMENTS
  ========================= */

  const authPage = $("authPage");

  const loginForm = $("loginForm");
  const signupForm = $("signupForm");

  const authTitle = $("authTitle");
  const authSubtitle = $("authSubtitle");

  const loginEmail = $("loginEmail");
  const loginPassword = $("loginPassword");
  const loginBtn = $("loginBtn");
  const loginMessage = $("loginMessage");

  const signupName = $("signupName");
  const signupEmail = $("signupEmail");
  const signupPassword = $("signupPassword");
  const signupConfirm = $("signupConfirm");
  const signupBtn = $("signupBtn");
  const signupMessage = $("signupMessage");

  const showSignup = $("showSignup");
  const showLogin = $("showLogin");

  const logoutBtn = $("logoutBtn");

  const profileGreeting = $("profileGreeting");
  const accountName = $("accountName");
  const accountEmail = $("accountEmail");
  const orderHistory = $("orderHistory");

  const referralDisplay = $("referralDisplay");

  /* =========================
     STORAGE
  ========================= */

  const USERS_KEY = "akkivexUsers";
  const SESSION_KEY = "akkivexCurrentUser";

  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function normalizeEmail(email) {
    return String(email || "").trim().toLowerCase();
  }

  /* =========================
     PASSWORD HASH
  ========================= */

  async function hashPassword(password, salt) {

    const data = new TextEncoder().encode(
      salt + ":" + password
    );

    const hash = await crypto.subtle.digest(
      "SHA-256",
      data
    );

    return Array.from(new Uint8Array(hash))
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  function createSalt() {

    const array = new Uint8Array(16);
    crypto.getRandomValues(array);

    return Array.from(array)
      .map(byte => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  /* =========================
     REFERRAL
  ========================= */

  function generateReferralCode() {

    return "KS" + Math.floor(
      100000 + Math.random() * 900000
    );
  }

  let referralCode = "KS000000";
  let currentUser = null;

  /* =========================
     AUTH VIEW
  ========================= */

  function showLoginForm() {

    if (!loginForm || !signupForm) return;

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    if (authTitle)
      authTitle.textContent = "Welcome Back";

    if (authSubtitle)
      authSubtitle.textContent =
        "Login to access your AKKIVEX STORE account.";

    if (loginMessage)
      loginMessage.textContent = "";

    if (signupMessage)
      signupMessage.textContent = "";
  }

  function showSignupForm() {

    if (!loginForm || !signupForm) return;

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    if (authTitle)
      authTitle.textContent = "Create Account";

    if (authSubtitle)
      authSubtitle.textContent =
        "Create your AKKIVEX STORE account.";

    if (loginMessage)
      loginMessage.textContent = "";

    if (signupMessage)
      signupMessage.textContent = "";
  }

  if (showSignup) {
    showSignup.addEventListener(
      "click",
      showSignupForm
    );
  }

  if (showLogin) {
    showLogin.addEventListener(
      "click",
      showLoginForm
    );
  }

  /* =========================
     SIGNUP
  ========================= */

  if (signupBtn) {

    signupBtn.addEventListener(
      "click",
      async () => {

        const name = signupName.value.trim();
        const email = normalizeEmail(signupEmail.value);
        const password = signupPassword.value;
        const confirm = signupConfirm.value;

        if (!name) {
          signupMessage.textContent =
            "Please enter your name.";
          return;
        }

        if (!email) {
          signupMessage.textContent =
            "Please enter your email.";
          return;
        }

        if (
          !email.includes("@") ||
          !email.includes(".")
        ) {
          signupMessage.textContent =
            "Please enter a valid email.";
          return;
        }

        if (password.length < 6) {
          signupMessage.textContent =
            "Password must be at least 6 characters.";
          return;
        }

        if (password !== confirm) {
          signupMessage.textContent =
            "Passwords do not match.";
          return;
        }

        const users = getUsers();

        if (users[email]) {
          signupMessage.textContent =
            "Account already exists. Please login.";
          return;
        }

        const salt = createSalt();

        const passwordHash =
          await hashPassword(password, salt);

        users[email] = {
          name,
          email,
          passwordHash,
          salt,
          referralCode: generateReferralCode(),
          coinBalance: 0,
          claimedTasks: [],
          orders: [],
          createdAt: new Date().toISOString()
        };

        saveUsers(users);

        localStorage.setItem(
          SESSION_KEY,
          email
        );

        currentUser = users[email];

        signupMessage.textContent =
          "Account created successfully ✓";

        setTimeout(() => {

          if (authPage)
            authPage.classList.add("hidden");

          if (app)
            app.classList.remove("hidden");

          loadCurrentUser();

        }, 400);
      }
    );
  }

  /* =========================
     LOGIN
  ========================= */

  if (loginBtn) {

    loginBtn.addEventListener(
      "click",
      async () => {

        const email =
          normalizeEmail(loginEmail.value);

        const password =
          loginPassword.value;

        if (!email || !password) {

          loginMessage.textContent =
            "Enter email and password.";

          return;
        }

        const users = getUsers();
        const user = users[email];

        if (!user) {

          loginMessage.textContent =
            "Account not found.";

          return;
        }

        const passwordHash =
          await hashPassword(
            password,
            user.salt
          );

        if (
          passwordHash !==
          user.passwordHash
        ) {

          loginMessage.textContent =
            "Incorrect email or password.";

          return;
        }

        localStorage.setItem(
          SESSION_KEY,
          email
        );

        currentUser = user;

        loginMessage.textContent =
          "Login successful ✓";

        setTimeout(() => {

          if (authPage)
            authPage.classList.add("hidden");

          if (app)
            app.classList.remove("hidden");

          loadCurrentUser();

        }, 400);
      }
    );
  }

  /* =========================
     LOAD CURRENT USER
  ========================= */

  function loadCurrentUser() {

    const users = getUsers();

    const email =
      localStorage.getItem(SESSION_KEY);

    if (!email || !users[email]) {

      currentUser = null;

      if (app)
        app.classList.add("hidden");

      if (authPage)
        authPage.classList.remove("hidden");

      showLoginForm();

      return;
    }

    currentUser = users[email];

    if (app)
      app.classList.remove("hidden");

    if (authPage)
      authPage.classList.add("hidden");

    referralCode =
      currentUser.referralCode;

    if (referralDisplay)
      referralDisplay.textContent =
        referralCode;

    if (profileGreeting)
      profileGreeting.textContent =
        "Welcome, " +
        currentUser.name +
        ". Manage your account and referral information.";

    if (accountName)
      accountName.textContent =
        currentUser.name;

    if (accountEmail)
      accountEmail.textContent =
        currentUser.email;

    updateCoinStats();
    renderOrderHistory();
  }

  /* =========================
     SAVE USER
  ========================= */

  function saveCurrentUser() {

    if (!currentUser) return;

    const users = getUsers();

    users[currentUser.email] =
      currentUser;

    saveUsers(users);
  }

  /* =========================
     LOGOUT
  ========================= */

  if (logoutBtn) {

    logoutBtn.addEventListener(
      "click",
      () => {

        localStorage.removeItem(
          SESSION_KEY
        );

        currentUser = null;

        if (loginEmail)
          loginEmail.value = "";

        if (loginPassword)
          loginPassword.value = "";

        if (app)
          app.classList.add("hidden");

        if (authPage)
          authPage.classList.remove("hidden");

        showLoginForm();

        window.scrollTo({
          top: 0,
          behavior: "instant"
        });
      }
    );
  }

  /* =========================
     LOADER
  ========================= */

  let progress = 0;

  const messages = [
    "Initializing security...",
    "Checking system...",
    "Verifying connection...",
    "Loading AKKIVEX STORE...",
    "Security check complete."
  ];

  if (loader && barFill && percent && loaderText) {

    const timer = setInterval(() => {

      progress++;

      percent.textContent =
        progress + "%";

      barFill.style.width =
        progress + "%";

      const index = Math.min(
        Math.floor(progress / 20),
        messages.length - 1
      );

      loaderText.textContent =
        messages[index];

      if (progress >= 100) {

        clearInterval(timer);

        setTimeout(() => {

          loader.classList.add(
            "loader-finished"
          );

          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";

          /*
           * MAIN FIX:
           * Authentication check happens
           * after loading finishes.
           */
          loadCurrentUser();

          setTimeout(() => {
            loader.style.display = "none";
          }, 500);

        }, 300);
      }

    }, 20);

  } else {

    /*
     * If loader elements are missing,
     * still check authentication.
     */
    loadCurrentUser();
  }

  /* =========================
     NAVIGATION
  ========================= */

  function showPage(page) {

    if (homePage)
      homePage.classList.add("hidden");

    if (profilePage)
      profilePage.classList.add("hidden");

    if (freePage)
      freePage.classList.add("hidden");

    if (page === "profile") {

      if (profilePage)
        profilePage.classList.remove("hidden");

    } else if (page === "free") {

      if (freePage)
        freePage.classList.remove("hidden");

      renderFreeTasks();
      updateCoinStats();

    } else {

      if (homePage)
        homePage.classList.remove("hidden");

      if (page === "store") {

        setTimeout(() => {

          const store = $("store");

          if (store) {
            store.scrollIntoView({
              behavior: "smooth"
            });
          }

        }, 50);
      }
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  document
    .querySelectorAll("[data-page]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          if (!currentUser) return;

          showPage(
            button.dataset.page
          );
        }
      );
    });

  if (profileBtn) {

    profileBtn.addEventListener(
      "click",
      () => {

        if (!currentUser) return;

        showPage("profile");
      }
    );
  }

  const backHome = $("backHome");

  if (backHome) {
    backHome.addEventListener(
      "click",
      () => showPage("home")
    );
  }

  const backHomeFree = $("backHomeFree");

  if (backHomeFree) {
    backHomeFree.addEventListener(
      "click",
      () => showPage("home")
    );
  }

  /* =========================
     PROFILE
  ========================= */

  const profileSections = [
    $("referBox"),
    $("ordersBox"),
    $("accountBox")
  ];

  function hideProfileSections() {

    profileSections.forEach(section => {

      if (section)
        section.classList.add("hidden");

    });
  }

  const referOpen = $("referOpen");

  if (referOpen) {

    referOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        const box = $("referBox");

        if (box)
          box.classList.remove("hidden");
      }
    );
  }

  const ordersOpen = $("ordersOpen");

  if (ordersOpen) {

    ordersOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        const box = $("ordersBox");

        if (box)
          box.classList.remove("hidden");

        renderOrderHistory();
      }
    );
  }

  const accountOpen = $("accountOpen");

  if (accountOpen) {

    accountOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        const box = $("accountBox");

        if (box)
          box.classList.remove("hidden");
      }
    );
  }

  /* =========================
     REFERRAL COPY
  ========================= */

  if (copyRef) {

    copyRef.addEventListener(
      "click",
      async () => {

        try {

          await navigator.clipboard.writeText(
            referralCode
          );

          copyRef.textContent =
            "Referral Code Copied ✓";

          setTimeout(() => {

            copyRef.textContent =
              "Copy Referral Code";

          }, 1500);

        } catch {

          alert(
            "Referral Code: " +
            referralCode
          );
        }
      }
    );
  }

  /* =========================
     FILTERS
  ========================= */

  let selectedCategory = "ALL";

  function renderFilters() {

    if (!filtersBox) return;

    const categories = [
      "ALL",
      "VISA",
      "MASTERCARD",
      "RUPAY"
    ];

    filtersBox.innerHTML =
      categories.map(category => `

        <button
          class="filter ${
            category === "ALL"
              ? "active"
              : ""
          }"
          data-category="${category}"
        >
          ${category}
        </button>

      `).join("");

    filtersBox
      .querySelectorAll("[data-category]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            selectedCategory =
              button.dataset.category;

            filtersBox
              .querySelectorAll(
                "[data-category]"
              )
              .forEach(btn =>
                btn.classList.remove(
                  "active"
                )
              );

            button.classList.add("active");

            renderProducts();
          }
        );
      });
  }

  /* =========================
     ESCAPE HTML
  ========================= */

  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* =========================
     PRODUCTS
  ========================= */

  function renderProducts() {

    if (!productsBox) return;

    const text =
      searchBox
        ? searchBox.value.trim().toLowerCase()
        : "";

    const list =
      products.filter(product => {

        const categoryMatch =
          selectedCategory === "ALL" ||
          product.category ===
          selectedCategory;

        const searchMatch =
          text === "" ||
          product.category
            .toLowerCase()
            .includes(text) ||
          product.holder
            .toLowerCase()
            .includes(text) ||
          product.level
            .toLowerCase()
            .includes(text);

        return (
          categoryMatch &&
          searchMatch
        );
      });

    if (!list.length) {

      productsBox.innerHTML = `
        <div class="empty-state">
          No products found.
        </div>
      `;

      return;
    }

    productsBox.innerHTML =
      list.map(product => `

        <article
          class="product-card"
          data-product-id="${product.id}"
        >

          <div class="card-top">
            <span>
              ${escapeHTML(product.category)}
            </span>

            <span>
              ${escapeHTML(product.level)}
            </span>
          </div>

          <div class="mock-card">

            <div class="mock-number">
              ${escapeHTML(product.card)}
            </div>

            <div class="mock-bottom">

              <span>
                ${escapeHTML(product.holder)}
              </span>

              <span>
                ${escapeHTML(product.expiry)}
              </span>

            </div>

          </div>

          <div class="product-info">

            <div>
              <small>BALANCE</small>
              <strong>
                ₹${product.balance.toLocaleString("en-IN")}
              </strong>
            </div>

            <div>
              <small>STOCK</small>
              <strong>
                ${product.stock}
              </strong>
            </div>

          </div>

          <div class="product-bottom">

            <strong>
              ₹${product.price}
            </strong>

            <button
              class="buy-btn"
              data-buy="${product.id}"
              type="button"
            >
              BUY NOW
            </button>

          </div>

        </article>

      `).join("");

    productsBox
      .querySelectorAll("[data-product-id]")
      .forEach(card => {

        card.addEventListener(
          "click",
          event => {

            if (
              event.target.closest(
                "[data-buy]"
              )
            ) return;

            const id =
              Number(
                card.dataset.productId
              );

            openProduct(id);
          }
        );
      });

    productsBox
      .querySelectorAll("[data-buy]")
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();

            const id =
              Number(
                button.dataset.buy
              );

            openCheckout(id);
          }
        );
      });
  }

  /* =========================
     PRODUCT DETAIL
  ========================= */

  function openProduct(id) {

    const product =
      products.find(
        item => item.id === id
      );

    if (!product || !productModal)
      return;

    if (productDetail) {

      productDetail.innerHTML = `

        <div class="product-detail-card">

          <p class="section-label">
            ${escapeHTML(product.category)}
          </p>

          <h2>
            ${escapeHTML(product.level)}
          </h2>

          <div class="mock-card">

            <div class="mock-number">
              ${escapeHTML(product.card)}
            </div>

            <div class="mock-bottom">

              <span>
                ${escapeHTML(product.holder)}
              </span>

              <span>
                ${escapeHTML(product.expiry)}
              </span>

            </div>

          </div>

          <p>
            Type:
            ${escapeHTML(product.type)}
          </p>

          <p>
            Balance:
            ₹${product.balance.toLocaleString("en-IN")}
          </p>

          <p>
            Stock:
            ${product.stock}
          </p>

          <h3>
            ₹${product.price}
          </h3>

          <button
            class="primary"
            id="detailBuyBtn"
            type="button"
          >
            BUY NOW
          </button>

        </div>

      `;

      const detailBuy =
        $("detailBuyBtn");

      if (detailBuy) {

        detailBuy.addEventListener(
          "click",
          () => {

            closeProductModal();
            openCheckout(id);

          }
        );
      }
    }

    productModal.classList.remove(
      "hidden"
    );
  }

  function closeProductModal() {

    if (productModal)
      productModal.classList.add(
        "hidden"
      );
  }

  const productClose =
    $("productClose");

  if (productClose) {

    productClose.addEventListener(
      "click",
      closeProductModal
    );
  }

  /* =========================
     CHECKOUT
  ========================= */

  function openCheckout(id) {

    const product =
      products.find(
        item => item.id === id
      );

    if (!product || !modal)
      return;

    if (selectedProduct) {

      selectedProduct.innerHTML = `

        <div>
          <strong>
            ${escapeHTML(product.category)}
            ${escapeHTML(product.level)}
          </strong>

          <span>
            ₹${product.price}
          </span>
        </div>

      `;
    }

    if (utrInput)
      utrInput.value = "";

    if (emailInput && currentUser)
      emailInput.value =
        currentUser.email;

    modal.classList.remove(
      "hidden"
    );

    modal.dataset.productId =
      String(id);
  }

  function closeCheckout() {

    if (modal)
      modal.classList.add(
        "hidden"
      );
  }

  const modalClose =
    $("modalClose");

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      closeCheckout
    );
  }

  if (copyUpi) {

    copyUpi.addEventListener(
      "click",
      async () => {

        const upi =
          "kaivexstore@ybl";

        try {

          await navigator.clipboard.writeText(
            upi
          );

          copyUpi.textContent =
            "COPIED ✓";

          setTimeout(() => {

            copyUpi.textContent =
              "COPY UPI";

          }, 1500);

        } catch {

          alert(
            "UPI ID: " +
            upi
          );
        }
      }
    );
  }

  if (submitPayment) {

    submitPayment.addEventListener(
      "click",
      () => {

        if (!currentUser) return;

        const utr =
          utrInput
            ? utrInput.value.trim()
            : "";

        const email =
          emailInput
            ? emailInput.value.trim()
            : "";

        if (!utr) {

          alert(
            "Please enter your UTR / transaction ID."
          );

          return;
        }

        if (!email) {

          alert(
            "Please enter your email."
          );

          return;
        }

        const productId =
          Number(
            modal.dataset.productId
          );

        const product =
          products.find(
            item => item.id === productId
          );

        if (!product) return;

        currentUser.orders =
          currentUser.orders || [];

        currentUser.orders.push({
          id:
            Date.now(),
          productId:
            product.id,
          category:
            product.category,
          price:
            product.price,
          status:
            "PENDING",
          utr:
            utr,
          email:
            email,
          createdAt:
            new Date().toISOString()
        });

        saveCurrentUser();

        closeCheckout();
        renderOrderHistory();

        alert(
          "Order submitted. Payment verification is pending."
        );
      }
    );
  }

  /* =========================
     ORDER HISTORY
  ========================= */

  function renderOrderHistory() {

    if (!orderHistory) return;

    if (!currentUser) {

      orderHistory.innerHTML =
        "<p>No account logged in.</p>";

      return;
    }

    const orders =
      currentUser.orders || [];

    if (!orders.length) {

      orderHistory.innerHTML =
        "<p>No orders yet.</p>";

      return;
    }

    orderHistory.innerHTML =
      orders.slice().reverse()
        .map(order => `

          <div class="order-item">

            <strong>
              ${escapeHTML(order.category)}
            </strong>

            <span>
              ₹${order.price}
            </span>

            <small>
              Status:
              ${escapeHTML(order.status)}
            </small>

            <small>
              UTR:
              ${escapeHTML(order.utr)}
            </small>

          </div>

        `).join("");
  }

  /* =========================
     FREE COIN
  ========================= */

  const freeTasks = [
    {
      id: "telegram-1",
      title: "Join Telegram Channel 1",
      type: "Telegram",
      url: "https://t.me/+lIJ6-tAMwBdiYTU1",
      reward: 1
    },
    {
      id: "telegram-2",
      title: "Join Telegram Channel 2",
      type: "Telegram",
      url: "https://t.me/+cpHtijIv1eM4ZDM1",
      reward: 1
    },
    {
      id: "telegram-3",
      title: "Open Telegram Channel",
      type: "Telegram",
      url: "https://t.me/kaivexmodssetup",
      reward: 1
    },
    {
      id: "telegram-4",
      title: "Join Telegram Channel 4",
      type: "Telegram",
      url: "https://t.me/+F_wsXeD3Dt8zMjll",
      reward: 1
    },
    {
      id: "telegram-5",
      title: "Join Telegram Channel 5",
      type: "Telegram",
      url: "https://t.me/+GIXruxf0uFVkNDdl",
      reward: 1
    },
    {
      id: "youtube-1",
      title: "Visit YouTube Channel",
      type: "YouTube",
      url: "https://youtube.com/@kaivexmods?si=y0TTNew1OQTvaxOi",
      reward: 1
    },
    {
      id: "youtube-2",
      title: "Visit YouTube Channel 2",
      type: "YouTube",
      url: "https://youtube.com/@akki.mods.2.0?si=uO0h-gd01DYcNS3g",
      reward: 1
    },
    {
      id: "youtube-3",
      title: "Watch YouTube Video",
      type: "YouTube",
      url: "https://youtu.be/sqChhCblg5w?si=ah4UFAx6pL-L3rqt",
      reward: 1
    }
  ];

  function updateCoinStats() {

    if (!currentUser) return;

    const coinBalance =
      $("coinBalance");

    const availableTasks =
      $("availableTasks");

    const claimedTasks =
      $("claimedTasks");

    if (coinBalance)
      coinBalance.textContent =
        currentUser.coinBalance || 0;

    if (availableTasks) {

      const claimed =
        currentUser.claimedTasks || [];

      availableTasks.textContent =
        freeTasks.filter(
          task =>
            !claimed.includes(task.id)
        ).length;
    }

    if (claimedTasks) {

      claimedTasks.textContent =
        (currentUser.claimedTasks || [])
          .length;
    }
  }

  function renderFreeTasks() {

    const channels =
      $("channels");

    if (!channels) return;

    if (!currentUser) return;

    const claimed =
      currentUser.claimedTasks || [];

    channels.innerHTML =
      freeTasks.map(task => {

        const isClaimed =
          claimed.includes(task.id);

        return `

          <div class="task-card">

            <div>

              <strong>
                ${escapeHTML(task.title)}
              </strong>

              <small>
                ${escapeHTML(task.type)}
                • +${task.reward} Coin
              </small>

            </div>

            <div class="task-actions">

              ${
                isClaimed
                  ? `
                    <button
                      disabled
                      type="button"
                    >
                      CLAIMED ✓
                    </button>
                  `
                  : `
                    <a
                      href="${escapeHTML(task.url)}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      OPEN
                    </a>

                    <button
                      type="button"
                      data-claim="${escapeHTML(task.id)}"
                    >
                      VERIFY & CLAIM
                    </button>
                  `
              }

            </div>

          </div>

        `;
      }).join("");

    channels
      .querySelectorAll("[data-claim]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            claimTask(
              button.dataset.claim
            );
          }
        );
      });
  }

  function claimTask(taskId) {

    if (!currentUser) return;

    const task =
      freeTasks.find(
        item => item.id === taskId
      );

    if (!task) return;

    currentUser.claimedTasks =
      currentUser.claimedTasks || [];

    if (
      currentUser.claimedTasks.includes(
        taskId
      )
    ) {

      return;
    }

    currentUser.claimedTasks.push(
      taskId
    );

    currentUser.coinBalance =
      (currentUser.coinBalance || 0) +
      task.reward;

    saveCurrentUser();

    renderFreeTasks();
    updateCoinStats();

    alert(
      "+" +
      task.reward +
      " Coin added ✓"
    );
  }

  /* =========================
     SEARCH
  ========================= */

  if (searchBox) {

    searchBox.addEventListener(
      "input",
      renderProducts
    );
  }

  /* =========================
     MODAL BACKDROP
  ========================= */

  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {
          closeCheckout();
        }
      }
    );
  }

  if (productModal) {

    productModal.addEventListener(
      "click",
      event => {

        if (
          event.target ===
          productModal
        ) {
          closeProductModal();
        }
      }
    );
  }

  /* =========================
     INITIAL STORE
  ========================= */

  renderFilters();
  renderProducts();

});