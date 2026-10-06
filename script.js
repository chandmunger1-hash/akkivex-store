// AKKIVEX STORE
// Fictional/demo frontend data only.
// Authentication: GitHub Pages + localStorage.
// No Supabase / Firebase required.

document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     PRODUCTS
  ========================= */

  const products = [

    {
      id: 1,
      category: "VISA",
      price: 150,
      balance: 3000,
      holder: "Alex Carter",
      card: "5722 XXXX XXXX 3548",
      expiry: "09/32",
      type: "DEBIT CARD",
      level: "HOFC PREMIUM",
      stock: 8
    },

    {
      id: 2,
      category: "VISA",
      price: 210,
      balance: 5000,
      holder: "Daniel Wilson",
      card: "5722 XXXX XXXX 4821",
      expiry: "07/33",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 6
    },

    {
      id: 3,
      category: "VISA",
      price: 270,
      balance: 6000,
      holder: "James Anderson",
      card: "5722 XXXX XXXX 4217",
      expiry: "11/32",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 5
    },

    {
      id: 4,
      category: "VISA",
      price: 330,
      balance: 8000,
      holder: "Robert Miller",
      card: "5722 XXXX XXXX 4532",
      expiry: "04/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 4
    },

    {
      id: 5,
      category: "VISA",
      price: 390,
      balance: 9000,
      holder: "William Davis",
      card: "5722 XXXX XXXX 4916",
      expiry: "12/33",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 3
    },

    {
      id: 6,
      category: "MASTERCARD",
      price: 170,
      balance: 3200,
      holder: "Chris Brown",
      card: "5234 XXXX XXXX 5234",
      expiry: "08/33",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 8
    },

    {
      id: 7,
      category: "MASTERCARD",
      price: 230,
      balance: 4000,
      holder: "Matthew Johnson",
      card: "5234 XXXX XXXX 5487",
      expiry: "03/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 7
    },

    {
      id: 8,
      category: "MASTERCARD",
      price: 290,
      balance: 6000,
      holder: "Andrew Thompson",
      card: "5234 XXXX XXXX 5271",
      expiry: "10/33",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 6
    },

    {
      id: 9,
      category: "MASTERCARD",
      price: 350,
      balance: 8000,
      holder: "Joseph Martinez",
      card: "5234 XXXX XXXX 5548",
      expiry: "06/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 4
    },

    {
      id: 10,
      category: "MASTERCARD",
      price: 410,
      balance: 10000,
      holder: "Anthony Taylor",
      card: "5234 XXXX XXXX 5103",
      expiry: "01/35",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 3
    },

    {
      id: 11,
      category: "RUPAY",
      price: 190,
      balance: 3500,
      holder: "Joshua Thomas",
      card: "6071 XXXX XXXX 6071",
      expiry: "05/33",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 8
    },

    {
      id: 12,
      category: "RUPAY",
      price: 250,
      balance: 4500,
      holder: "Ryan Jackson",
      card: "6071 XXXX XXXX 6521",
      expiry: "09/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 6
    },

    {
      id: 13,
      category: "RUPAY",
      price: 310,
      balance: 6000,
      holder: "Brandon White",
      card: "6071 XXXX XXXX 6384",
      expiry: "02/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 5
    },

    {
      id: 14,
      category: "RUPAY",
      price: 370,
      balance: 8000,
      holder: "Kevin Harris",
      card: "6071 XXXX XXXX 6214",
      expiry: "07/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 4
    },

    {
      id: 15,
      category: "RUPAY",
      price: 430,
      balance: 10000,
      holder: "Jason Martin",
      card: "6071 XXXX XXXX 6528",
      expiry: "11/34",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 3
    },

    {
      id: 16,
      category: "RUPAY",
      price: 500,
      balance: 15000,
      holder: "Eric Robinson",
      card: "6071 XXXX XXXX 6712",
      expiry: "12/35",
      type: "DEBIT CARD",
      level: "PREMIUM",
      stock: 2
    }

  ];


  /* =========================
     SHORTCUT
  ========================= */

  const $ = id =>
    document.getElementById(id);


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


  /* =========================
     AUTH STORAGE
  ========================= */

  const USERS_KEY =
    "akkivexUsers";

  const SESSION_KEY =
    "akkivexCurrentUser";


  function getUsers() {

    try {

      return JSON.parse(
        localStorage.getItem(
          USERS_KEY
        )
      ) || {};

    }

    catch {

      return {};

    }

  }


  function saveUsers(users) {

    localStorage.setItem(
      USERS_KEY,
      JSON.stringify(users)
    );

  }


  function normalizeEmail(email) {

    return email
      .trim()
      .toLowerCase();

  }


  /* =========================
     PASSWORD HASH
  ========================= */

  async function hashPassword(
    password,
    salt
  ) {

    const data =
      new TextEncoder().encode(
        salt + ":" + password
      );


    const hash =
      await crypto.subtle.digest(
        "SHA-256",
        data
      );


    return Array.from(
      new Uint8Array(hash)
    )
      .map(byte =>
        byte
          .toString(16)
          .padStart(2, "0")
      )
      .join("");

  }


  function createSalt() {

    const array =
      new Uint8Array(16);

    crypto.getRandomValues(array);


    return Array.from(array)
      .map(byte =>
        byte
          .toString(16)
          .padStart(2, "0")
      )
      .join("");

  }


  /* =========================
     REFERRAL
  ========================= */

  function generateReferralCode() {

    return (
      "KS" +
      Math.floor(
        100000 +
        Math.random() * 900000
      )
    );

  }


  let referralCode =
    "KS000000";


  /* =========================
     CURRENT USER
  ========================= */

  let currentUser = null;


  /* =========================
     SHOW LOGIN
  ========================= */

  function showLoginForm() {

    loginForm.classList.remove(
      "hidden"
    );

    signupForm.classList.add(
      "hidden"
    );

    authTitle.textContent =
      "Welcome Back";

    authSubtitle.textContent =
      "Login to access your AKKIVEX STORE account.";

    loginMessage.textContent = "";

    signupMessage.textContent = "";

  }


  /* =========================
     SHOW SIGNUP
  ========================= */

  function showSignupForm() {

    signupForm.classList.remove(
      "hidden"
    );

    loginForm.classList.add(
      "hidden"
    );

    authTitle.textContent =
      "Create Account";

    authSubtitle.textContent =
      "Create your AKKIVEX STORE account.";

    loginMessage.textContent = "";

    signupMessage.textContent = "";

  }


  showSignup.addEventListener(
    "click",
    showSignupForm
  );


  showLogin.addEventListener(
    "click",
    showLoginForm
  );


  /* =========================
     SIGNUP
  ========================= */

  signupBtn.addEventListener(
    "click",
    async () => {

      const name =
        signupName.value.trim();

      const email =
        normalizeEmail(
          signupEmail.value
        );

      const password =
        signupPassword.value;

      const confirm =
        signupConfirm.value;


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


      const users =
        getUsers();


      if (users[email]) {

        signupMessage.textContent =
          "Account already exists. Please login.";

        return;

      }


      const salt =
        createSalt();


      const passwordHash =
        await hashPassword(
          password,
          salt
        );


      users[email] = {

        name: name,

        email: email,

        passwordHash:
          passwordHash,

        salt: salt,

        referralCode:
          generateReferralCode(),

        coinBalance: 0,

        claimedTasks: [],

        orders: [],

        createdAt:
          new Date().toISOString()

      };


      saveUsers(users);


      localStorage.setItem(
        SESSION_KEY,
        email
      );


      currentUser =
        users[email];


      signupMessage.textContent =
        "Account created successfully ✓";


      setTimeout(() => {

        authPage.classList.add(
          "hidden"
        );

        app.classList.remove(
          "hidden"
        );

        loadCurrentUser();

      }, 500);

    }
  );


  /* =========================
     LOGIN
  ========================= */

  loginBtn.addEventListener(
    "click",
    async () => {

      const email =
        normalizeEmail(
          loginEmail.value
        );

      const password =
        loginPassword.value;


      if (!email || !password) {

        loginMessage.textContent =
          "Enter email and password.";

        return;

      }


      const users =
        getUsers();


      const user =
        users[email];


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


      currentUser =
        user;


      loginMessage.textContent =
        "Login successful ✓";


      setTimeout(() => {

        authPage.classList.add(
          "hidden"
        );

        app.classList.remove(
          "hidden"
        );

        loadCurrentUser();

      }, 400);

    }
  );


  /* =========================
     LOAD CURRENT USER
  ========================= */

  function loadCurrentUser() {

    const users =
      getUsers();


    const email =
      localStorage.getItem(
        SESSION_KEY
      );


    if (
      !email ||
      !users[email]
    ) {

      currentUser = null;


      app.classList.add(
        "hidden"
      );


      authPage.classList.remove(
        "hidden"
      );


      showLoginForm();

      return;

    }


    currentUser =
      users[email];


    app.classList.remove(
      "hidden"
    );


    authPage.classList.add(
      "hidden"
    );


    referralCode =
      currentUser.referralCode;


    if (referralDisplay) {

      referralDisplay.textContent =
        referralCode;

    }


    if (profileGreeting) {

      profileGreeting.textContent =
        "Welcome, " +
        currentUser.name +
        ". Manage your account and referral information.";

    }


    if (accountName) {

      accountName.textContent =
        currentUser.name;

    }


    if (accountEmail) {

      accountEmail.textContent =
        currentUser.email;

    }


    updateCoinStats();

    renderOrderHistory();

  }


  /* =========================
     SAVE CURRENT USER
  ========================= */

  function saveCurrentUser() {

    if (!currentUser) {
      return;
    }


    const users =
      getUsers();


    users[
      currentUser.email
    ] = currentUser;


    saveUsers(users);

  }


  /* =========================
     LOGOUT
  ========================= */

  logoutBtn.addEventListener(
    "click",
    () => {

      localStorage.removeItem(
        SESSION_KEY
      );


      currentUser = null;


      loginEmail.value = "";

      loginPassword.value = "";


      app.classList.add(
        "hidden"
      );


      authPage.classList.remove(
        "hidden"
      );


      showLoginForm();


      window.scrollTo({
        top: 0,
        behavior: "instant"
      });

    }
  );


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


  const timer =
    setInterval(() => {

      progress++;


      percent.textContent =
        progress + "%";


      barFill.style.width =
        progress + "%";


      const index =
        Math.min(
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

          loader.style.opacity =
            "0";

          loader.style.pointerEvents =
            "none";


          setTimeout(() => {

            loader.style.display =
              "none";

          }, 500);

        }, 300);

      }

    }, 20);


  /* =========================
     NAVIGATION
  ========================= */

  function showPage(page) {

    homePage.classList.add(
      "hidden"
    );

    profilePage.classList.add(
      "hidden"
    );

    freePage.classList.add(
      "hidden"
    );


    if (page === "profile") {

      profilePage.classList.remove(
        "hidden"
      );

    }

    else if (page === "free") {

      freePage.classList.remove(
        "hidden"
      );

      renderFreeTasks();

      updateCoinStats();

    }

    else {

      homePage.classList.remove(
        "hidden"
      );


      if (page === "store") {

        setTimeout(() => {

          $("store").scrollIntoView({
            behavior: "smooth"
          });

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

          if (!currentUser) {
            return;
          }

          showPage(
            button.dataset.page
          );

        }
      );

    });


  profileBtn.addEventListener(
    "click",
    () => {

      if (!currentUser) {
        return;
      }

      showPage("profile");

    }
  );


  $("backHome").addEventListener(
    "click",
    () => {

      showPage("home");

    }
  );


  $("backHomeFree").addEventListener(
    "click",
    () => {

      showPage("home");

    }
  );


  /* =========================
     PROFILE SUB PAGES
  ========================= */

  const profileSections = [

    $("referBox"),
    $("ordersBox"),
    $("accountBox")

  ];


  function hideProfileSections() {

    profileSections.forEach(
      section => {

        if (section) {

          section.classList.add(
            "hidden"
          );

        }

      }
    );

  }


  $("referOpen").addEventListener(
    "click",
    () => {

      hideProfileSections();

      $("referBox").classList.remove(
        "hidden"
      );

    }
  );


  $("ordersOpen").addEventListener(
    "click",
    () => {

      hideProfileSections();

      $("ordersBox").classList.remove(
        "hidden"
      );

      renderOrderHistory();

    }
  );


  $("accountOpen").addEventListener(
    "click",
    () => {

      hideProfileSections();

      $("accountBox").classList.remove(
        "hidden"
      );

    }
  );


  /* =========================
     REFERRAL COPY
  ========================= */

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

      }

      catch {

        alert(
          "Referral Code: " +
          referralCode
        );

      }

    }
  );


  /* =========================
     FILTERS
  ========================= */

  let selectedCategory =
    "ALL";


  function renderFilters() {

    const categories = [

      "ALL",
      "VISA",
      "MASTERCARD",
      "RUPAY"

    ];


    filtersBox.innerHTML =
      categories.map(
        category => `

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

      `
      ).join("");


    document
      .querySelectorAll(
        "[data-category]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            selectedCategory =
              button.dataset.category;


            document
              .querySelectorAll(
                "[data-category]"
              )
              .forEach(btn =>
                btn.classList.remove(
                  "active"
                )
              );


            button.classList.add(
              "active"
            );


            renderProducts();

          }
        );

      });

  }


  /* =========================
     PRODUCTS
  ========================= */

  function renderProducts() {

    const text =
      searchBox.value
        .trim()
        .toLowerCase();


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
            .includes(text);


        return (
          categoryMatch &&
          searchMatch
        );

      });


    if (!list.length) {

      productsBox.innerHTML = `

        <div class="empty-state">

          <div>⌕</div>

          <h3>
            No products found
          </h3>

          <p>
            Try another category or search.
          </p>

        </div>

      `;

      return;

    }


    productsBox.innerHTML =
      list.map(
        product => `

        <article class="product">

          <div class="product-top">

            <span class="tag">
              ${product.category}
            </span>

            <span class="demo-badge">
              DEMO
            </span>

          </div>


          <div
            class="demo-card"
            data-info="${product.id}"
          >

            <div class="demo-card-top">

              <span>
                KX
              </span>

              <span>
                ${product.category}
              </span>

            </div>


            <div class="demo-number">
              ${product.card}
            </div>


            <div class="card-mid">

              <div>

                <small>
                  MONTH/YEAR
                </small>

                <strong>
                  ${product.expiry}
                </strong>

              </div>


              <div>

                <small>
                  BALANCE
                </small>

                <strong>
                  ${product.balance
                    .toLocaleString("en-IN")}
                </strong>

              </div>

            </div>


            <div class="demo-card-bottom">

              <span>
                ${product.holder}
              </span>

              <span>
                ${product.type}
              </span>

            </div>

          </div>


          <div class="product-meta">

            <div>

              <span>
                LEVEL
              </span>

              <strong>
                ${product.level}
              </strong>

            </div>


            <div>

              <span>
                BAL
              </span>

              <strong>
                ${product.balance
                  .toLocaleString("en-IN")}
              </strong>

            </div>

          </div>


          <div class="stock-line">

            <span>
              STOCK PROTOCOL
            </span>

            <strong>
              ONLY ${product.stock} LEFT
            </strong>

          </div>


          <div class="product-actions">

            <button
              class="details-btn"
              data-info="${product.id}"
            >
              DETAILS
            </button>


            <button
              class="primary buy-btn"
              data-buy="${product.id}"
            >
              BUY NOW · ₹${product.price}
            </button>

          </div>

        </article>

      `
      ).join("");


    document
      .querySelectorAll("[data-info]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const product =
              products.find(
                p =>
                  p.id ===
                  Number(
                    button.dataset.info
                  )
              );


            if (product) {

              openProduct(
                product
              );

            }

          }
        );

      });


    document
      .querySelectorAll("[data-buy]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const product =
              products.find(
                p =>
                  p.id ===
                  Number(
                    button.dataset.buy
                  )
              );


            if (product) {

              openCheckout(
                product
              );

            }

          }
        );

      });

  }


  searchBox.addEventListener(
    "input",
    renderProducts
  );


  /* =========================
     PRODUCT DETAILS
  ========================= */

  function openProduct(product) {

    productDetail.innerHTML = `

      <div class="detail-card">

        <div class="detail-brand">

          <span>
            KX
          </span>

          <strong>
            ${product.category}
          </strong>

        </div>


        <div class="detail-number">
          ${product.card}
        </div>


        <div class="detail-grid">

          <div>

            <small>
              MONTH/YEAR
            </small>

            <strong>
              ${product.expiry}
            </strong>

          </div>


          <div>

            <small>
              BALANCE
            </small>

            <strong>
              ${product.balance
                .toLocaleString("en-IN")}
            </strong>

          </div>


          <div>

            <small>
              CARD TYPE
            </small>

            <strong>
              ${product.type}
            </strong>

          </div>


          <div>

            <small>
              LEVEL
            </small>

            <strong>
              ${product.level}
            </strong>

          </div>

        </div>


        <div class="detail-holder">

          <small>
            DEMO HOLDER
          </small>

          <strong>
            ${product.holder}
          </strong>

        </div>


        <div class="detail-stock">

          STOCK PROTOCOL ·
          ONLY ${product.stock} LEFT

        </div>


        <button
          class="primary detail-buy"
          data-detail-buy="${product.id}"
        >
          BUY NOW · ₹${product.price}
        </button>

      </div>

    `;


    productModal.classList.remove(
      "hidden"
    );


    const detailBuy =
      document.querySelector(
        "[data-detail-buy]"
      );


    if (detailBuy) {

      detailBuy.addEventListener(
        "click",
        () => {

          productModal.classList.add(
            "hidden"
          );

          openCheckout(product);

        }
      );

    }

  }


  $("closeProduct").addEventListener(
    "click",
    () => {

      productModal.classList.add(
        "hidden"
      );

    }
  );


  productModal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        productModal
      ) {

        productModal.classList.add(
          "hidden"
        );

      }

    }
  );


  /* =========================
     CHECKOUT
  ========================= */

  let selectedCheckoutProduct =
    null;


  function openCheckout(product) {

    selectedCheckoutProduct =
      product;


    selectedProduct.innerHTML = `

      Selected:
      <strong>
        ${product.category}
      </strong>
      · Balance ₹${product.balance
        .toLocaleString("en-IN")}
      · Price ₹${product.price}

    `;


    utrInput.value = "";


    emailInput.value =
      currentUser
        ? currentUser.email
        : "";


    modal.classList.remove(
      "hidden"
    );

  }


  $("closeModal").addEventListener(
    "click",
    () => {

      modal.classList.add(
        "hidden"
      );

    }
  );


  modal.addEventListener(
    "click",
    event => {

      if (
        event.target === modal
      ) {

        modal.classList.add(
          "hidden"
        );

      }

    }
  );


  /* =========================
     COPY UPI
  ========================= */

  copyUpi.addEventListener(
    "click",
    async () => {

      const upi =
        "kaivexstore@ybl";


      try {

        await navigator.clipboard.writeText(
          upi
        );


        copyUpi.innerHTML = `

          <span>
            ${upi}
          </span>

          <span>
            Copied ✓
          </span>

        `;


        setTimeout(() => {

          copyUpi.innerHTML = `

            <span>
              ${upi}
            </span>

            <span>
              Copy
            </span>

          `;

        }, 1500);

      }

      catch {

        alert(
          "UPI ID: " + upi
        );

      }

    }
  );


  /* =========================
     PAYMENT SUBMIT
  ========================= */

  submitPayment.addEventListener(
    "click",
    () => {

      const utr =
        utrInput.value.trim();

      const email =
        emailInput.value.trim();


      if (!currentUser) {

        alert(
          "Please login first."
        );

        return;

      }


      if (!utr) {

        alert(
          "Please enter your UTR / Transaction ID."
        );

        return;

      }


      if (!email) {

        alert(
          "Please enter your delivery email."
        );

        return;

      }


      if (!selectedCheckoutProduct) {

        alert(
          "No product selected."
        );

        return;

      }


      const order = {

        id:
          "ORD-" +
          Date.now(),

        productId:
          selectedCheckoutProduct.id,

        category:
          selectedCheckoutProduct.category,

        price:
          selectedCheckoutProduct.price,

        email:
          email,

        utr:
          utr,

        status:
          "PENDING",

        createdAt:
          new Date().toISOString()

      };


      if (!Array.isArray(
        currentUser.orders
      )) {

        currentUser.orders = [];

      }


      currentUser.orders.unshift(
        order
      );


      saveCurrentUser();


      alert(
        "Payment submitted for verification.\n\n" +
        "Status: PENDING\n\n" +
        "Admin/merchant verification is required."
      );


      modal.classList.add(
        "hidden"
      );


      renderOrderHistory();

    }
  );


  /* =========================
     ORDER HISTORY
  ========================= */

  function renderOrderHistory() {

    if (!orderHistory) {
      return;
    }


    if (!currentUser) {

      orderHistory.innerHTML = `

        <div class="empty-box">
          Please login first.
        </div>

      `;

      return;

    }


    const orders =
      Array.isArray(
        currentUser.orders
      )
        ? currentUser.orders
        : [];


    if (!orders.length) {

      orderHistory.innerHTML = `

        <div class="empty-box">
          No orders yet.
        </div>

      `;

      return;

    }


    orderHistory.innerHTML =
      orders.map(order => {

        const date =
          new Date(
            order.createdAt
          ).toLocaleString(
            "en-IN"
          );


        return `

          <div class="order-card">

            <div class="order-top">

              <strong>
                ${order.category}
              </strong>

              <span class="order-status">
                ${order.status}
              </span>

            </div>


            <div class="order-meta">

              Order:
              ${order.id}

              <br>

              Price:
              ₹${Number(
                order.price
              ).toLocaleString("en-IN")}

              <br>

              UTR:
              ${order.utr}

              <br>

              Email:
              ${order.email}

              <br>

              Date:
              ${date}

            </div>

          </div>

        `;

      }).join("");

  }


  /* =========================
     FREE COIN TASKS
  ========================= */

  const freeCoinTasks = [

    {
      id: "telegram-1",
      title: "Join Telegram Channel 1",
      icon: "✈",
      reward: 2,
      url: "https://t.me/+lIJ6-tAMwBdiYTU1"
    },

    {
      id: "telegram-2",
      title: "Join Telegram Channel 2",
      icon: "✈",
      reward: 2,
      url: "https://t.me/+cpHtijIv1eM4ZDM1"
    },

    {
      id: "telegram-3",
      title: "Open Telegram Channel 3",
      icon: "✈",
      reward: 2,
      url: "https://t.me/kaivexmodssetup"
    },

    {
      id: "telegram-4",
      title: "Join Telegram Channel 4",
      icon: "✈",
      reward: 2,
      url: "https://t.me/+F_wsXeD3Dt8zMjll"
    },

    {
      id: "telegram-5",
      title: "Join Telegram Channel 5",
      icon: "✈",
      reward: 2,
      url: "https://t.me/+GIXruxf0uFVkNDdl"
    },

    {
      id: "youtube-1",
      title: "Subscribe on YouTube",
      icon: "▶",
      reward: 2,
      url: "https://youtube.com/@kaivexmods?si=y0TTNew1OQTvaxOi"
    },

    {
      id: "youtube-2",
      title: "Subscribe on YouTube",
      icon: "▶",
      reward: 2,
      url: "https://youtube.com/@akki.mods.2.0?si=uO0h-gd01DYcNS3g"
    },

    {
      id: "youtube-3",
      title: "Like YouTube Video",
      icon: "♥",
      reward: 2,
      url: "https://youtu.be/sqChhCblg5w?si=ah4UFAx6pL-L3rqt"
    }

  ];


  let activeTaskId = null;


  function getClaimedTasks() {

    if (!currentUser) {
      return [];
    }


    if (
      !Array.isArray(
        currentUser.claimedTasks
      )
    ) {

      currentUser.claimedTasks = [];

    }


    return currentUser.claimedTasks;

  }


  function updateCoinStats() {

    if (!currentUser) {
      return;
    }


    const balance =
      Number(
        currentUser.coinBalance || 0
      );


    const claimed =
      getClaimedTasks();


    const available =
      freeCoinTasks.filter(
        task =>
          !claimed.includes(
            task.id
          )
      );


    if ($("coinBalance")) {

      $("coinBalance").textContent =
        balance.toFixed(2);

    }


    if ($("availableTasks")) {

      $("availableTasks").textContent =
        available.length;

    }


    if ($("claimedTasks")) {

      $("claimedTasks").textContent =
        claimed.length;

    }

  }


  function renderFreeTasks() {

    const channels =
      $("channels");


    if (!channels) {
      return;
    }


    if (!currentUser) {

      channels.innerHTML = `

        <div class="empty-box">
          Please login to view tasks.
        </div>

      `;

      return;

    }


    const claimed =
      getClaimedTasks();


    channels.innerHTML =
      freeCoinTasks.map(
        task => {

          const isClaimed =
            claimed.includes(
              task.id
            );


          return `

            <div
              class="task-card ${
                isClaimed
                  ? "task-claimed"
                  : ""
              }"
            >

              <div class="task-info">

                <div class="task-icon">

                  ${task.icon}

                </div>


                <div>

                  <strong>
                    ${task.title}
                  </strong>

                  <span class="tiny">
                    Reward: 🪙 ${task.reward}
                  </span>

                </div>

              </div>


              ${
                isClaimed

                  ? `

                    <button
                      class="task-btn"
                      disabled
                    >
                      CLAIMED ✓
                    </button>

                  `

                  : `

                    <button
                      class="task-btn"
                      data-task-open="${task.id}"
                    >
                      OPEN
                    </button>

                  `
              }

            </div>

          `;

        }
      ).join("");


    document
      .querySelectorAll(
        "[data-task-open]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const task =
              freeCoinTasks.find(
                item =>
                  item.id ===
                  button.dataset.taskOpen
              );


            if (task) {

              openTaskVerify(
                task
              );

            }

          }
        );

      });

  }


  function openTaskVerify(task) {

    activeTaskId =
      task.id;


    const channels =
      $("channels");


    channels.innerHTML = `

      <div class="verify-box">

        <div class="verify-icon">

          ${task.icon}

        </div>


        <p class="section-label">
          TASK
        </p>


        <h3>
          ${task.title}
        </h3>


        <p class="muted">
          Open the task link, then return here
          and claim the displayed reward.
        </p>


        <div class="verify-reward">

          🪙 ${task.reward}

        </div>


        <button
          class="primary claim-btn"
          id="openTaskLink"
        >
          OPEN TASK
        </button>


        <button
          class="task-btn verify-back"
          id="claimTask"
        >
          CLAIM COINS
        </button>


        <button
          class="task-btn verify-back"
          id="backTasks"
        >
          ← BACK TO TASKS
        </button>


        <p class="tiny verify-note">

          This is a self-claim flow.
          This page does not independently verify
          Telegram or YouTube membership.

        </p>

      </div>

    `;


    $("openTaskLink").addEventListener(
      "click",
      () => {

        window.open(
          task.url,
          "_blank",
          "noopener,noreferrer"
        );

      }
    );


    $("claimTask").addEventListener(
      "click",
      () => {

        claimTask(task);

      }
    );


    $("backTasks").addEventListener(
      "click",
      () => {

        activeTaskId = null;

        renderFreeTasks();

        updateCoinStats();

      }
    );

  }


  function claimTask(task) {

    if (!currentUser) {

      alert(
        "Please login first."
      );

      return;

    }


    const claimed =
      getClaimedTasks();


    if (
      claimed.includes(
        task.id
      )
    ) {

      alert(
        "This task has already been claimed."
      );

      renderFreeTasks();

      return;

    }


    currentUser.claimedTasks.push(
      task.id
    );


    currentUser.coinBalance =
      Number(
        currentUser.coinBalance || 0
      ) +
      Number(
        task.reward
      );


    saveCurrentUser();


    activeTaskId = null;


    alert(
      "Coins claimed successfully!\n\n" +
      "Reward: 🪙 " +
      task.reward
    );


    renderFreeTasks();

    updateCoinStats();

  }


  /* =========================
     INITIAL RENDER
  ========================= */

  renderFilters();

  renderProducts();

  loadCurrentUser();

});