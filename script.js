// AKKIVEX MODS
// Frontend demo store interactions

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // DEMO PRODUCT DATA
  // =========================

  // Fictional/demo data only.
  // Card numbers are intentionally masked.

  const products = [
    // VISA
    {
      id: 1,
      category: "VISA",
      name: "VISA Demo 3000",
      price: 150,
      balance: 3000,
      holder: "Michael Carter",
      card: "3548 •••• •••• ••••"
    },
    {
      id: 2,
      category: "VISA",
      name: "VISA Demo 5000",
      price: 210,
      balance: 5000,
      holder: "Daniel Wilson",
      card: "4821 •••• •••• ••••"
    },
    {
      id: 3,
      category: "VISA",
      name: "VISA Demo 6000",
      price: 270,
      balance: 6000,
      holder: "James Anderson",
      card: "4217 •••• •••• ••••"
    },
    {
      id: 4,
      category: "VISA",
      name: "VISA Demo 8000",
      price: 330,
      balance: 8000,
      holder: "Robert Miller",
      card: "4532 •••• •••• ••••"
    },
    {
      id: 5,
      category: "VISA",
      name: "VISA Demo 9000",
      price: 390,
      balance: 9000,
      holder: "William Davis",
      card: "4916 •••• •••• ••••"
    },

    // MASTERCARD
    {
      id: 6,
      category: "MASTERCARD",
      name: "MASTERCARD Demo 3200",
      price: 170,
      balance: 3200,
      holder: "Christopher Brown",
      card: "5234 •••• •••• ••••"
    },
    {
      id: 7,
      category: "MASTERCARD",
      name: "MASTERCARD Demo 4000",
      price: 230,
      balance: 4000,
      holder: "Matthew Johnson",
      card: "5487 •••• •••• ••••"
    },
    {
      id: 8,
      category: "MASTERCARD",
      name: "MASTERCARD Demo 6000",
      price: 290,
      balance: 6000,
      holder: "Andrew Thompson",
      card: "5271 •••• •••• ••••"
    },
    {
      id: 9,
      category: "MASTERCARD",
      name: "MASTERCARD Demo 8000",
      price: 350,
      balance: 8000,
      holder: "Joseph Martinez",
      card: "5548 •••• •••• ••••"
    },
    {
      id: 10,
      category: "MASTERCARD",
      name: "MASTERCARD Demo 10000",
      price: 410,
      balance: 10000,
      holder: "Anthony Taylor",
      card: "5103 •••• •••• ••••"
    },

    // RUPAY
    {
      id: 11,
      category: "RUPAY",
      name: "RUPAY Demo 3500",
      price: 190,
      balance: 3500,
      holder: "Joshua Thomas",
      card: "6071 •••• •••• ••••"
    },
    {
      id: 12,
      category: "RUPAY",
      name: "RUPAY Demo 4500",
      price: 250,
      balance: 4500,
      holder: "Ryan Jackson",
      card: "6521 •••• •••• ••••"
    },
    {
      id: 13,
      category: "RUPAY",
      name: "RUPAY Demo 6000",
      price: 310,
      balance: 6000,
      holder: "Brandon White",
      card: "6384 •••• •••• ••••"
    },
    {
      id: 14,
      category: "RUPAY",
      name: "RUPAY Demo 8000",
      price: 370,
      balance: 8000,
      holder: "Kevin Harris",
      card: "6214 •••• •••• ••••"
    },
    {
      id: 15,
      category: "RUPAY",
      name: "RUPAY Demo 10000",
      price: 430,
      balance: 10000,
      holder: "Jason Martin",
      card: "6528 •••• •••• ••••"
    },
    {
      id: 16,
      category: "RUPAY",
      name: "RUPAY Demo 15000",
      price: 500,
      balance: 15000,
      holder: "Eric Robinson",
      card: "6712 •••• •••• ••••"
    }
  ];


  // =========================
  // ELEMENTS
  // =========================

  const loader = document.getElementById("loader");
  const app = document.getElementById("app");
  const percent = document.getElementById("percent");
  const loaderText = document.getElementById("loaderText");
  const barFill = document.getElementById("barFill");

  const productsBox = document.getElementById("products");
  const filtersBox = document.getElementById("filters");
  const searchBox = document.getElementById("search");

  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const selectedProduct = document.getElementById("selectedProduct");

  const copyUpi = document.getElementById("copyUpi");
  const submitPayment = document.getElementById("submitPayment");

  const utrInput = document.getElementById("utr");
  const emailInput = document.getElementById("email");

  const copyRef = document.getElementById("copyRef");

  let selectedCategory = "ALL";


  // =========================
  // SECURITY LOADER
  // =========================

  let progress = 0;

  const loadingMessages = [
    "Initializing security...",
    "Checking system...",
    "Verifying connection...",
    "Loading AKKIVEX MODS...",
    "Security check complete."
  ];

  const loaderTimer = setInterval(() => {

    progress++;

    if (percent) {
      percent.textContent = progress + "%";
    }

    if (barFill) {
      barFill.style.width = progress + "%";
    }

    if (loaderText) {
      const index = Math.min(
        Math.floor(progress / 20),
        loadingMessages.length - 1
      );

      loaderText.textContent = loadingMessages[index];
    }

    if (progress >= 100) {

      clearInterval(loaderTimer);

      setTimeout(() => {

        if (app) {
          app.classList.remove("hidden");
        }

        if (loader) {

          loader.style.opacity = "0";
          loader.style.pointerEvents = "none";

          setTimeout(() => {
            loader.style.display = "none";
          }, 500);

        }

      }, 300);
    }

  }, 25);


  // =========================
  // CATEGORY BUTTONS
  // =========================

  function renderFilters() {

    if (!filtersBox) return;

    const categories = [
      "ALL",
      "VISA",
      "MASTERCARD",
      "RUPAY"
    ];

    filtersBox.innerHTML = categories
      .map(category => `
        <button
          class="filter ${category === "ALL" ? "active" : ""}"
          data-category="${category}"
        >
          ${category}
        </button>
      `)
      .join("");

    document
      .querySelectorAll("[data-category]")
      .forEach(button => {

        button.addEventListener("click", () => {

          selectedCategory =
            button.dataset.category;

          document
            .querySelectorAll("[data-category]")
            .forEach(btn => {
              btn.classList.remove("active");
            });

          button.classList.add("active");

          renderProducts();
        });

      });
  }


  // =========================
  // PRODUCT CARDS
  // =========================

  function renderProducts() {

    if (!productsBox) return;

    const searchText =
      searchBox
        ? searchBox.value.trim().toLowerCase()
        : "";

    const filteredProducts = products.filter(product => {

      const categoryMatch =
        selectedCategory === "ALL" ||
        product.category === selectedCategory;

      const searchMatch =
        searchText === "" ||
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.holder.toLowerCase().includes(searchText);

      return categoryMatch && searchMatch;
    });


    if (filteredProducts.length === 0) {

      productsBox.innerHTML = `
        <div class="empty-state">
          <div>⌕</div>
          <h3>No products found</h3>
          <p>Try another search or category.</p>
        </div>
      `;

      return;
    }


    productsBox.innerHTML =
      filteredProducts
        .map(product => `

          <article
            class="product"
            data-product-card
            data-category="${product.category}"
          >

            <div class="product-top">

              <span class="tag">
                ${product.category}
              </span>

              <span class="demo-badge">
                DEMO
              </span>

            </div>


            <div class="demo-card">

              <div class="demo-card-top">
                <span>AKV</span>
                <span>${product.category}</span>
              </div>

              <div class="demo-number">
                ${product.card}
              </div>

              <div class="demo-card-bottom">
                <span>
                  ${product.holder}
                </span>

                <span>
                  DEMO
                </span>
              </div>

            </div>


            <h3>
              ${product.name}
            </h3>


            <div class="product-info">

              <div>
                <span class="info-label">
                  DEMO BALANCE
                </span>

                <strong>
                  ₹${product.balance.toLocaleString("en-IN")}
                </strong>
              </div>

              <div>
                <span class="info-label">
                  PRICE
                </span>

                <strong>
                  ₹${product.price}
                </strong>
              </div>

            </div>


            <button
              class="primary buy-btn"
              data-buy="${product.id}"
            >
              Buy Demo
            </button>


            <p class="demo-note">
              Fictional demo product •
              no real card credentials
            </p>

          </article>

        `)
        .join("");


    document
      .querySelectorAll("[data-buy]")
      .forEach(button => {

        button.addEventListener("click", () => {

          const id =
            Number(button.dataset.buy);

          const product =
            products.find(item => item.id === id);

          if (!product) return;

          openCheckout(product);
        });

      });
  }


  // =========================
  // SEARCH
  // =========================

  if (searchBox) {

    searchBox.addEventListener("input", () => {
      renderProducts();
    });

  }


  // =========================
  // CHECKOUT
  // =========================

  function openCheckout(product) {

    if (!modal) return;

    if (selectedProduct) {

      selectedProduct.innerHTML = `
        <strong>${product.name}</strong><br>
        Demo balance: ₹${product.balance.toLocaleString("en-IN")}<br>
        Price: ₹${product.price}
      `;

    }

    modal.classList.remove("hidden");

  }


  function closeCheckout() {

    if (modal) {
      modal.classList.add("hidden");
    }

  }


  if (closeModal) {
    closeModal.addEventListener(
      "click",
      closeCheckout
    );
  }


  if (modal) {

    modal.addEventListener("click", event => {

      if (event.target === modal) {
        closeCheckout();
      }

    });

  }


  // =========================
  // UPI COPY
  // =========================

  const upiId = "kaivexstore@ybl";

  if (copyUpi) {

    copyUpi.addEventListener("click", async () => {

      try {

        await navigator.clipboard.writeText(upiId);

        copyUpi.innerHTML =
          "<span>Copied ✓</span><span>Done</span>";

        setTimeout(() => {

          copyUpi.innerHTML =
            "<span>kaivexstore@ybl</span><span>Copy</span>";

        }, 1500);

      } catch (error) {

        alert("UPI ID: " + upiId);

      }

    });

  }


  // =========================
  // PAYMENT SUBMISSION
  // =========================

  if (submitPayment) {

    submitPayment.addEventListener("click", () => {

      const utr =
        utrInput
          ? utrInput.value.trim()
          : "";

      const email =
        emailInput
          ? emailInput.value.trim()
          : "";


      if (!utr || !email) {

        alert(
          "Please enter Transaction ID and Delivery Email."
        );

        return;
      }


      alert(
        "Order submitted.\n\n" +
        "Status: Pending Verification"
      );

    });

  }


  // =========================
  // FREE COIN TASKS
  // =========================

  const channels = [
    {
      name: "Channel Task 01",
      url: "#"
    },
    {
      name: "Channel Task 02",
      url: "#"
    },
    {
      name: "Channel Task 03",
      url: "#"
    },
    {
      name: "Channel Task 04",
      url: "#"
    },
    {
      name: "Channel Task 05",
      url: "#"
    }
  ];


  const channelsBox =
    document.getElementById("channels");


  if (channelsBox) {

    channelsBox.innerHTML =
      channels.map((channel, index) => `

        <div class="channel">

          <div>
            <strong>
              ${channel.name}
            </strong>

            <div class="tiny">
              Task ${index + 1} • ₹0.50
            </div>
          </div>

          <a
            href="${channel.url}"
            class="task-btn"
          >
            Join
          </a>

        </div>

      `).join("");

  }


  // =========================
  // REFERRAL COPY
  // =========================

  if (copyRef) {

    copyRef.addEventListener("click", async () => {

      const code = "AKV8457";

      try {

        await navigator.clipboard.writeText(code);

        copyRef.textContent =
          "Referral Code Copied ✓";

        setTimeout(() => {
          copyRef.textContent =
            "Copy Referral Code";
        }, 1500);

      } catch (error) {

        alert("Referral Code: " + code);

      }

    });

  }


  // =========================
  // INITIAL RENDER
  // =========================

  renderFilters();
  renderProducts();

});