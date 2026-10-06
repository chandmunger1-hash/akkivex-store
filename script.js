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
     AUTH STORAGE
  ========================= */

  const USERS_KEY = "akkivexUsers";
  const SESSION_KEY = "akkivexCurrentUser";


  function getUsers() {
    try {
      return JSON.parse(
        localStorage.getItem(USERS_KEY)
      ) || {};
    } catch {
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
    return email.trim().toLowerCase();
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

    return Array.from(
      new Uint8Array(hash)
    )
      .map(byte =>
        byte.toString(16).padStart(2, "0")
      )
      .join("");
  }


  function createSalt() {

    const array = new Uint8Array(16);

    crypto.getRandomValues(array);

    return Array.from(array)
      .map(byte =>
        byte.toString(16).padStart(2, "0")
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


  let referralCode = "KS000000";


  /* =========================
     CURRENT USER
  ========================= */

  let currentUser = null;


  /* =========================
     SHOW LOGIN
  ========================= */

  function showLoginForm() {

    if (!loginForm || !signupForm) return;

    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");

    if (authTitle) {
      authTitle.textContent = "Welcome Back";
    }

    if (authSubtitle) {
      authSubtitle.textContent =
        "Login to access your AKKIVEX STORE account.";
    }

    if (loginMessage) {
      loginMessage.textContent = "";
    }

    if (signupMessage) {
      signupMessage.textContent = "";
    }
  }


  /* =========================
     SHOW SIGNUP
  ========================= */

  function showSignupForm() {

    if (!loginForm || !signupForm) return;

    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");

    if (authTitle) {
      authTitle.textContent = "Create Account";
    }

    if (authSubtitle) {
      authSubtitle.textContent =
        "Create your AKKIVEX STORE account.";
    }

    if (loginMessage) {
      loginMessage.textContent = "";
    }

    if (signupMessage) {
      signupMessage.textContent = "";
    }
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


        const users = getUsers();


        if (users[email]) {
          signupMessage.textContent =
            "Account already exists. Please login.";
          return;
        }


        const salt = createSalt();

        const passwordHash =
          await hashPassword(
            password,
            salt
          );


        users[email] = {

          name: name,
          email: email,

          passwordHash: passwordHash,
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


        currentUser = users[email];


        signupMessage.textContent =
          "Account created successfully ✓";


        setTimeout(() => {

          authPage.classList.add("hidden");
          app.classList.remove("hidden");

          loadCurrentUser();

        }, 500);

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

          authPage.classList.add("hidden");
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
      localStorage.getItem(
        SESSION_KEY
      );


    /*
      IMPORTANT:
      No session = AUTH PAGE
    */

    if (
      !email ||
      !users[email]
    ) {

      currentUser = null;

      app.classList.add("hidden");

      authPage.classList.remove("hidden");

      showLoginForm();

      return;
    }


    currentUser = users[email];


    /*
      Existing session = STORE
    */

    app.classList.remove("hidden");
    authPage.classList.add("hidden");


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

        if (loginEmail) {
          loginEmail.value = "";
        }

        if (loginPassword) {
          loginPassword.value = "";
        }

        app.classList.add("hidden");

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


  const timer = setInterval(() => {

    progress++;

    if (percent) {
      percent.textContent =
        progress + "%";
    }

    if (barFill) {
      barFill.style.width =
        progress + "%";
    }


    const index =
      Math.min(
        Math.floor(progress / 20),
        messages.length - 1
      );


    if (loaderText) {
      loaderText.textContent =
        messages[index];
    }


    if (progress >= 100) {

      clearInterval(timer);


      setTimeout(() => {

        if (loader) {

          loader.classList.add(
            "loader-finished"
          );

          loader.style.opacity = "0";

          loader.style.pointerEvents =
            "none";

          setTimeout(() => {

            loader.style.display =
              "none";

          }, 500);

        }

        /*
          IMPORTANT:
          Loader finished -> check auth
        */

        loadCurrentUser();

      }, 300);
    }

  }, 20);


  /* =========================
     NAVIGATION
  ========================= */

  function showPage(page) {

    homePage.classList.add("hidden");
    profilePage.classList.add("hidden");
    freePage.classList.add("hidden");


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

          const store =
            $("store");

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
      () => {
        showPage("home");
      }
    );

  }


  const backHomeFree =
    $("backHomeFree");

  if (backHomeFree) {

    backHomeFree.addEventListener(
      "click",
      () => {
        showPage("home");
      }
    );

  }


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


  const referOpen =
    $("referOpen");

  if (referOpen) {

    referOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        $("referBox").classList.remove(
          "hidden"
        );

      }
    );

  }


  const ordersOpen =
    $("ordersOpen");

  if (ordersOpen) {

    ordersOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        $("ordersBox").classList.remove(
          "hidden"
        );

        renderOrderHistory();

      }
    );

  }


  const accountOpen =
    $("accountOpen");

  if (accountOpen) {

    accountOpen.addEventListener(
      "click",
      () => {

        hideProfileSections();

        $("accountBox").classList.remove(
          "hidden"
        );

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

        }

        catch {

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

    const categories = [
      "ALL",
      "VISA",
      "MASTERCARD",
      "RUPAY"
    ];


    if (!filtersBox) return;


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


    filtersBox
      .querySelectorAll(
        "[data-category]"
      )
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

    if (!productsBox) return;


    const text =
      searchBox
        ? searchBox.value
            .trim()
            .toLowerCase()
        : "";


    const list =
      products
        .filter(product => {

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
              .includes(text) ||
            String(product.price)
              .includes(text);


          return (
            categoryMatch &&
            searchMatch
          );

        })
        .sort(
          (a, b) =>
            a.price - b.price
        );


    productsBox.innerHTML =
      list.map(
        product => `

          <article
            class="product-card"
            data-product-id="${product.id}"
          >

            <div class="card-demo-badge">
              DEMO
            </div>

            <div class="mock-card">

              <div class="mock-top">

                <span>
                  ${product.category}
                </span>

                <span>
                  KX
                </span>

              </div>


              <div class="mock-number">
                ${product.card}
              </div>


              <div class="mock-bottom">

                <div>
                  <small>CARD HOLDER</small>
                  <strong>
                    ${product.holder}
                  </strong>
                </div>

                <div>
                  <small>VALID</small>
                  <strong>
                    ${product.expiry}
                  </strong>
                </div>

              </div>

            </div>


            <div class="product-info">

              <div>
                <span class="section-label">
                  ${product.level}
                </span>

                <h3>
                  ${product.category}
                </h3>

                <p>
                  Balance: ₹${product.balance.toLocaleString("en-IN")}
                </p>

                <p>
                  Stock: ${product.stock}
                </p>
              </div>


              <div class="product-price">

                <strong>
                  ₹${product.price}
                </strong>

                <button
                  class="primary buy-btn"
                  data-id="${product.id}"
                >
                  BUY NOW
                </button>

              </div>

            </div>

          </article>

        `
      )
      .join("");


    productsBox
      .querySelectorAll(
        ".product-card"
      )
      .forEach(card => {

        card.addEventListener(
          "click",
          event => {

            if (
              event.target.closest(
                ".buy-btn"
              )
            ) {
              return;
            }

            const id =
              Number(
                card.dataset.productId
              );

            openProductDetails(id);

          }
        );

      });


    productsBox
      .querySelectorAll(
        ".buy-btn"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();

            const id =
              Number(
                button.dataset.id
              );

            openCheckout(id);

          }
        );

      });

  }


  if (searchBox) {

    searchBox.addEventListener(
      "input",
      renderProducts
    );

  }


  /* =========================
     PRODUCT DETAILS
  ========================= */

  function openProductDetails(id) {

    const product =
      products.find(
        item => item.id === id
      );


    if (!product || !productDetail) {
      return;
    }


    productDetail.innerHTML = `

      <div class="detail-card">

        <div class="mock-card">

          <div class="mock-top">
            <span>${product.category}</span>
            <span>KX</span>
          </div>

          <div class="mock-number">
            ${product.card}
          </div>

          <div class="mock-bottom">

            <div>
              <small>CARD HOLDER</small>
              <strong>
                ${product.holder}
              </strong>
            </div>

            <div>
              <small>VALID</small>
              <strong>
                ${product.expiry}
              </strong>
            </div>

          </div>

        </div>


        <div class="info-row">
          <span>Type</span>
          <strong>${product.type}</strong>
        </div>

        <div class="info-row">
          <span>Category</span>
          <strong>${product.category}</strong>
        </div>

        <div class="info-row">
          <span>Balance</span>
          <strong>₹${product.balance.toLocaleString("en-IN")}</strong>
        </div>

        <div class="info-row">
          <span>Price</span>
          <strong>₹${product.price}</strong>
        </div>

        <div class="info-row">
          <span>Stock</span>
          <strong>${product.stock}</strong>
        </div>

        <button
          class="primary detail-buy"
          data-id="${product.id}"
        >
          BUY NOW
        </button>

      </div>

    `;


    productModal.classList.remove(
      "hidden"
    );


    const detailBuy =
      productDetail.querySelector(
        ".detail-buy"
      );


    if (detailBuy) {

      detailBuy.addEventListener(
        "click",
        () => {

          productModal.classList.add(
            "hidden"
          );

          openCheckout(id);

        }
      );

    }

  }


  const closeProduct =
    $("closeProduct");

  if (closeProduct) {

    closeProduct.addEventListener(
      "click",
      () => {

        productModal.classList.add(
          "hidden"
        );

      }
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


    if (!product) return;


    selectedProduct.textContent =
      `${product.category} • Balance ₹${product.balance.toLocaleString("en-IN")} • ₹${product.price}`;


    modal.classList.remove(
      "hidden"
    );

  }


  const closeModal =
    $("closeModal");

  if (closeModal) {

    closeModal.addEventListener(
      "click",
      () => {

        modal.classList.add(
          "hidden"
        );

      }
    );

  }


  /* =========================
     COPY UPI
  ========================= */

  if (copyUpi) {

    copyUpi.addEventListener(
      "click",
      async () => {

        try {

          await navigator.clipboard.writeText(
            "kaivexstore@ybl"
          );

          copyUpi.innerHTML =
            "<span>kaivexstore@ybl</span><span>Copied ✓</span>";


          setTimeout(() => {

            copyUpi.innerHTML =
              "<span>kaivexstore@ybl</span><span>Copy</span>";

          }, 1500);

        }

        catch {

          alert(
            "UPI ID: kaivexstore@ybl"
          );

        }

      }
    );

  }


  /* =========================
     PAYMENT SUBMISSION
  ========================= */

  if (submitPayment) {

    submitPayment.addEventListener(
      "click",
      () => {

        if (!currentUser) {
          return;
        }


        const utr =
          utrInput.value.trim();

        const email =
          emailInput.value.trim();


        if (!utr) {

          alert(
            "Please enter UTR / Transaction ID."
          );

          return;

        }


        if (!email) {

          alert(
            "Please enter delivery email."
          );

          return;

        }


        const order = {

          id:
            "ORD-" +
            Date.now(),

          utr: utr,

          email: email,

          status: "PENDING",

          createdAt:
            new Date().toISOString()

        };


        if (!currentUser.orders) {
          currentUser.orders = [];
        }


        currentUser.orders.unshift(
          order
        );


        saveCurrentUser();

        renderOrderHistory();


        alert(
          "Order submitted. Status: PENDING"
        );


        utrInput.value = "";
        emailInput.value = "";


        modal.classList.add(
          "hidden"
        );

      }
    );

  }


  /* =========================
     ORDER HISTORY
  ========================= */

  function renderOrderHistory() {

    if (!orderHistory) return;


    if (
      !currentUser ||
      !currentUser.orders ||
      currentUser.orders.length === 0
    ) {

      orderHistory.innerHTML = `
        <div class="empty-box">
          No orders yet.
        </div>
      `;

      return;
    }


    orderHistory.innerHTML =
      currentUser.orders
        .map(
          order => `

            <div class="order-item">

              <div>

                <strong>
                  ${order.id}
                </strong>

                <span>
                  ${new Date(
                    order.createdAt
                  ).toLocaleString()}
                </span>

              </div>


              <div>

                <strong>
                  ${order.status}
                </strong>

                <span>
                  UTR: ${escapeHTML(order.utr)}
                </span>

              </div>

            </div>

          `
        )
        .join("");

  }


  /* =========================
     FREE COIN TASKS
  ========================= */

  const freeTasks = [

    {
      id: "tg1",
      type: "Telegram",
      title: "Join Telegram Channel 1",
      reward: 2,
      url:
        "https://t.me/+lIJ6-tAMwBdiYTU1"
    },

    {
      id: "tg2",
      type: "Telegram",
      title: "Join Telegram Channel 2",
      reward: 2,
      url:
        "https://t.me/+cpHtijIv1eM4ZDM1"
    },

    {
      id: "tg3",
      type: "Telegram",
      title: "Join Telegram Channel 3",
      reward: 2,
      url:
        "https://t.me/kaivexmodssetup"
    },

    {
      id: "tg4",
      type: "Telegram",
      title: "Join Telegram Channel 4",
      reward: 2,
      url:
        "https://t.me/+F_wsXeD3Dt8zMjll"
    },

    {
      id: "tg5",
      type: "Telegram",
      title: "Join Telegram Channel 5",
      reward: 2,
      url:
        "https://t.me/+GIXruxf0uFVkNDdl"
    },

    {
      id: "yt1",
      type: "YouTube",
      title: "Subscribe to YouTube",
      reward: 2,
      url:
        "https://youtube.com/@kaivexmods?si=y0TTNew1OQTvaxOi"
    },

    {
      id: "yt2",
      type: "YouTube",
      title: "Subscribe to YouTube 2",
      reward: 2,
      url:
        "https://youtube.com/@akki.mods.2.0?si=uO0h-gd01DYcNS3g"
    },

    {
      id: "yt3",
      type: "YouTube",
      title: "Like YouTube Video",
      reward: 2,
      url:
        "https://youtu.be/sqChhCblg5w?si=ah4UFAx6pL-L3rqt"
    }

  ];


  function renderFreeTasks() {

    const channels =
      $("channels");


    if (!channels || !currentUser) {
      return;
    }


    if (!currentUser.claimedTasks) {
      currentUser.claimedTasks = [];
    }


    channels.innerHTML =
      freeTasks
        .map(task => {

          const claimed =
            currentUser.claimedTasks.includes(
              task.id
            );


          return `

            <div
              class="task-item ${
                claimed ? "task-complete" : ""
              }"
            >

              <div class="task-info">

                <span class="task-type">
                  ${task.type}
                </span>

                <strong>
                  ${task.title}
                </strong>

                <small>
                  Reward: 🪙 ${task.reward}
                </small>

              </div>


              <div class="task-actions">

                ${
                  claimed
                    ? `
                      <button
                        class="task-btn claimed"
                        disabled
                      >
                        CLAIMED ✓
                      </button>
                    `
                    : `
                      <button
                        class="task-btn open-task"
                        data-id="${task.id}"
                      >
                        OPEN
                      </button>

                      <button
                        class="task-btn verify-task"
                        data-id="${task.id}"
                      >
                        VERIFY
                      </button>
                    `
                }

              </div>

            </div>

          `;

        })
        .join("");


    channels
      .querySelectorAll(
        ".open-task"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const task =
              freeTasks.find(
                item =>
                  item.id ===
                  button.dataset.id
              );


            if (task) {

              window.open(
                task.url,
                "_blank"
              );

            }

          }
        );

      });


    channels
      .querySelectorAll(
        ".verify-task"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            claimTask(
              button.dataset.id
            );

          }
        );

      });

  }


  function claimTask(taskId) {

    if (!currentUser) return;


    if (!currentUser.claimedTasks) {
      currentUser.claimedTasks = [];
    }


    if (
      currentUser.claimedTasks.includes(
        taskId
      )
    ) {
      return;
    }


    const task =
      freeTasks.find(
        item =>
          item.id === taskId
      );


    if (!task) return;


    currentUser.claimedTasks.push(
      taskId
    );


    currentUser.coinBalance =
      Number(
        currentUser.coinBalance || 0
      ) +
      Number(task.reward);


    saveCurrentUser();


    renderFreeTasks();
    updateCoinStats();


    alert(
      `🪙 ${task.reward} coins added!`
    );

  }


  function updateCoinStats() {

    if (!currentUser) return;


    const balance =
      $("coinBalance");

    const available =
      $("availableTasks");

    const claimed =
      $("claimedTasks");


    const claimedCount =
      currentUser.claimedTasks
        ? currentUser.claimedTasks.length
        : 0;


    if (balance) {

      balance.textContent =
        Number(
          currentUser.coinBalance || 0
        ).toFixed(2);

    }


    if (available) {

      available.textContent =
        Math.max(
          freeTasks.length -
          claimedCount,
          0
        );

    }


    if (claimed) {

      claimed.textContent =
        claimedCount;

    }

  }


  /* =========================
     ESCAPE HTML
  ========================= */

  function escapeHTML(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  /* =========================
     INITIALIZE STORE
  ========================= */

  renderFilters();
  renderProducts();


  /* =========================
     IMPORTANT:
     INITIAL AUTH CHECK
  ========================= */

  /*
    This is the missing part that
    was causing the authentication
    screen to be skipped.

    First page load:
    Loader -> loadCurrentUser()
    No session -> Login/Signup

    Existing session:
    Loader -> loadCurrentUser()
    Session exists -> Store
  */

  app.classList.add("hidden");
  authPage.classList.add("hidden");

  setTimeout(() => {

    /*
      If loader is still running,
      loadCurrentUser() will also
      be called when loader finishes.
    */

  }, 0);

});