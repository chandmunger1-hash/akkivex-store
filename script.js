// AKKIVEX STORE
// Fictional/demo frontend data only.

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
     REFERRAL CODE
  ========================= */

  let referralCode =
    localStorage.getItem("kaivexReferralCode");


  if (!referralCode) {

    referralCode =
      "KS" +
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    localStorage.setItem(
      "kaivexReferralCode",
      referralCode
    );

  }


  const referralDisplay =
    $("referralDisplay");


  if (referralDisplay) {

    referralDisplay.textContent =
      referralCode;

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

          app.classList.remove(
            "hidden"
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

          showPage(
            button.dataset.page
          );

        }
      );

    });


  profileBtn.addEventListener(
    "click",
    () => {

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

    profileSections.forEach(section => {

      if (section) {
        section.classList.add(
          "hidden"
        );
      }

    });

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
      list.map(product => `

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

      `).join("");


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

  function openCheckout(product) {

    selectedProduct.innerHTML = `

      Selected:
      <strong>
        ${product.category}
      </strong>
      · Balance ₹${product.balance.toLocaleString("en-IN")}
      · Price ₹${product.price}

    `;


    utrInput.value = "";
    emailInput.value = "";


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


      alert(
        "Payment submitted for verification.\n\n" +
        "Status: PENDING\n\n" +
        "Admin/merchant verification is required."
      );


      modal.classList.add(
        "hidden"
      );

    }
  );


  /* =========================
     FREE COIN TASKS
  ========================= */

  const freeTasks = [

    {
      id: "telegram-01",
      type: "telegram",
      title: "Join Telegram Channel 01",
      reward: 0.50,
      link: "https://t.me/+lIJ6-tAMwBdiYTU1"
    },

    {
      id: "telegram-02",
      type: "telegram",
      title: "Join Telegram Channel 02",
      reward: 0.50,
      link: "https://t.me/+cpHtijIv1eM4ZDM1"
    },

    {
      id: "telegram-03",
      type: "telegram",
      title: "Join Telegram Channel 03",
      reward: 0.50,
      link: "https://t.me/kaivexmodssetup"
    },

    {
      id: "telegram-04",
      type: "telegram",
      title: "Join Telegram Channel 04",
      reward: 0.50,
      link: "https://t.me/+F_wsXeD3Dt8zMjll"
    },

    {
      id: "telegram-05",
      type: "telegram",
      title: "Join Telegram Channel 05",
      reward: 0.50,
      link: "https://t.me/+GIXruxf0uFVkNDdl"
    },

    {
      id: "youtube-01",
      type: "youtube",
      title: "Subscribe to KAIVEX MODS",
      reward: 0.50,
      link: "https://youtube.com/@kaivexmods?si=y0TTNew1OQTvaxOi"
    },

    {
      id: "youtube-02",
      type: "youtube",
      title: "Subscribe to AKKI MODS",
      reward: 0.50,
      link: "https://youtube.com/@akki.mods.2.0?si=uO0h-gd01DYcNS3g"
    },

    {
      id: "youtube-like-01",
      type: "youtube-like",
      title: "Like YouTube Video",
      reward: 0.50,
      link: "https://youtu.be/sqChhCblg5w?si=ah4UFAx6pL-L3rqt"
    }

  ];


  let coinBalance =
    Number(
      localStorage.getItem(
        "kaivexCoins"
      ) || 0
    );


  let claimedTasks =
    JSON.parse(
      localStorage.getItem(
        "kaivexClaimedTasks"
      ) || "[]"
    );


  let openedTasks =
    JSON.parse(
      localStorage.getItem(
        "kaivexOpenedTasks"
      ) || "[]"
    );


  function saveCoinData() {

    localStorage.setItem(
      "kaivexCoins",
      coinBalance.toFixed(2)
    );


    localStorage.setItem(
      "kaivexClaimedTasks",
      JSON.stringify(
        claimedTasks
      )
    );


    localStorage.setItem(
      "kaivexOpenedTasks",
      JSON.stringify(
        openedTasks
      )
    );

  }


  function updateCoinStats() {

    const balanceBox =
      $("coinBalance");

    const availableBox =
      $("availableTasks");

    const claimedBox =
      $("claimedTasks");


    if (balanceBox) {

      balanceBox.textContent =
        coinBalance.toFixed(2);

    }


    if (availableBox) {

      availableBox.textContent =
        freeTasks.filter(
          task =>
            !claimedTasks.includes(
              task.id
            )
        ).length;

    }


    if (claimedBox) {

      claimedBox.textContent =
        claimedTasks.length;

    }

  }


  function taskIcon(type) {

    if (type === "telegram") {
      return "✈";
    }

    if (type === "youtube") {
      return "▶";
    }

    if (type === "youtube-like") {
      return "♥";
    }

    return "◈";

  }


  function renderFreeTasks() {

    const box =
      $("channels");


    if (!box) {
      return;
    }


    box.innerHTML =
      freeTasks.map(task => {

        const claimed =
          claimedTasks.includes(
            task.id
          );


        const opened =
          openedTasks.includes(
            task.id
          );


        if (claimed) {

          return `

            <div class="task-card task-claimed">

              <div class="task-info">

                <div class="task-icon">
                  ${taskIcon(task.type)}
                </div>

                <div>

                  <strong>
                    ${task.title}
                  </strong>

                  <div class="tiny">
                    Reward ₹${task.reward.toFixed(2)}
                    · Claimed ✓
                  </div>

                </div>

              </div>


              <button
                class="task-btn"
                disabled
              >
                CLAIMED
              </button>

            </div>

          `;

        }


        return `

          <div
            class="task-card ${
              opened
                ? "task-verify"
                : ""
            }"
          >

            <div class="task-info">

              <div class="task-icon">
                ${taskIcon(task.type)}
              </div>

              <div>

                <strong>
                  ${task.title}
                </strong>

                <div class="tiny">
                  Reward ₹${task.reward.toFixed(2)}
                </div>

              </div>

            </div>


            <div class="task-action">

              ${
                opened

                ? `

                  <button
                    class="task-btn verify-btn"
                    data-verify="${task.id}"
                  >
                    VERIFY
                  </button>

                `

                : `

                  <button
                    class="task-btn"
                    data-open-task="${task.id}"
                  >
                    OPEN
                  </button>

                `
              }

            </div>

          </div>

        `;

      }).join("");


    document
      .querySelectorAll(
        "[data-open-task]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const task =
              freeTasks.find(
                item =>
                  item.id ===
                  button.dataset.openTask
              );


            if (!task) {
              return;
            }


            if (
              !openedTasks.includes(
                task.id
              )
            ) {

              openedTasks.push(
                task.id
              );

              saveCoinData();

            }


            /*
              External task is opened.
              The page does not independently
              verify Telegram/YouTube action.
            */

            window.open(
              task.link,
              "_blank"
            );


            renderFreeTasks();

          }
        );

      });


    document
      .querySelectorAll(
        "[data-verify]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const task =
              freeTasks.find(
                item =>
                  item.id ===
                  button.dataset.verify
              );


            if (task) {

              showTaskVerification(
                task
              );

            }

          }
        );

      });

  }


  function showTaskVerification(task) {

    const box =
      $("channels");


    box.innerHTML = `

      <div class="verify-box">

        <div class="verify-icon">
          ${taskIcon(task.type)}
        </div>


        <p class="section-label">
          TASK CHECK
        </p>


        <h3>
          ${task.title}
        </h3>


        <div class="verify-reward">
          +₹${task.reward.toFixed(2)}
        </div>


        <p class="muted">
          Continue only if you completed the task.
        </p>


        <button
          class="primary claim-btn"
          id="claimTask"
        >
          CLAIM ₹${task.reward.toFixed(2)}
        </button>


        <button
          class="details-btn verify-back"
          id="verifyBack"
        >
          ← BACK TO TASKS
        </button>


        <p class="tiny verify-note">
          This frontend uses self-claiming and does not
          independently verify the external action.
        </p>

      </div>

    `;


    $("claimTask").addEventListener(
      "click",
      () => {

        if (
          claimedTasks.includes(
            task.id
          )
        ) {

          return;

        }


        coinBalance +=
          Number(task.reward);


        claimedTasks.push(
          task.id
        );


        saveCoinData();

        updateCoinStats();

        renderFreeTasks();


        alert(
          `₹${task.reward.toFixed(2)} reward added to your coin balance.`
        );

      }
    );


    $("verifyBack").addEventListener(
      "click",
      () => {

        renderFreeTasks();

        updateCoinStats();

      }
    );

  }


  /* =========================
     START
  ========================= */

  renderFilters();

  renderProducts();

  renderFreeTasks();

  updateCoinStats();

});