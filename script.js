// AKKIVEX STORE
// Frontend interactions

document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // SECURITY LOADER
  // =========================

  const loader = document.getElementById("loader");
  const percent = document.getElementById("percent");
  const loaderText = document.getElementById("loaderText");

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

    if (loaderText) {
      const messageIndex = Math.min(
        Math.floor(progress / 20),
        loadingMessages.length - 1
      );

      loaderText.textContent =
        loadingMessages[messageIndex];
    }

    if (progress >= 100) {

      clearInterval(loaderTimer);

      setTimeout(() => {

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
  // UPI COPY
  // =========================

  const upiId = "kaivexstore@ybl";
  const copyButtons = document.querySelectorAll("[data-copy-upi]");

  copyButtons.forEach((button) => {

    button.addEventListener("click", async () => {

      try {

        await navigator.clipboard.writeText(upiId);

        const oldText = button.textContent;
        button.textContent = "Copied ✓";

        setTimeout(() => {
          button.textContent = oldText;
        }, 1500);

      } catch (error) {

        alert("UPI ID: " + upiId);

      }

    });

  });


  // =========================
  // PRODUCT SEARCH
  // =========================

  const searchBox = document.querySelector("[data-search]");

  const productCards = [
    ...document.querySelectorAll("[data-product-card]")
  ];

  if (searchBox) {

    searchBox.addEventListener("input", () => {

      const searchText =
        searchBox.value.trim().toLowerCase();

      productCards.forEach((card) => {

        const cardText =
          card.textContent.toLowerCase();

        card.hidden =
          searchText !== "" &&
          !cardText.includes(searchText);

      });

    });

  }


  // =========================
  // CATEGORY FILTER
  // =========================

  const categoryButtons =
    document.querySelectorAll("[data-category]");

  categoryButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const selectedCategory =
        button.dataset.category;

      productCards.forEach((card) => {

        const cardCategory =
          card.dataset.category;

        card.hidden =
          selectedCategory !== "ALL" &&
          cardCategory !== selectedCategory;

      });

      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

    });

  });


  // =========================
  // UTR FORM
  // =========================

  const utrForm =
    document.querySelector("[data-utr-form]");

  if (utrForm) {

    utrForm.addEventListener("submit", (event) => {

      event.preventDefault();

      const utrInput =
        utrForm.querySelector("[name='utr']");

      const emailInput =
        utrForm.querySelector("[name='email']");

      const utr =
        utrInput ? utrInput.value.trim() : "";

      const email =
        emailInput ? emailInput.value.trim() : "";

      if (!utr || !email) {

        alert(
          "Please enter UTR number and email."
        );

        return;
      }

      alert(
        "Payment submitted successfully.\n\n" +
        "Status: Pending Verification"
      );

    });

  }


  // =========================
  // FREE COIN TASK
  // =========================

  const freeCoinButtons =
    document.querySelectorAll("[data-free-coin]");

  freeCoinButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const channel =
        button.dataset.freeCoin;

      if (channel) {
        window.open(channel, "_blank");
      }

    });

  });


  // =========================
  // MOBILE MENU
  // =========================

  const menuButton =
    document.querySelector("[data-menu]");

  const mobileMenu =
    document.querySelector("[data-mobile-menu]");

  if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

      mobileMenu.classList.toggle("open");

    });

  }


  // =========================
  // BUY BUTTON
  // =========================

  const buyButtons =
    document.querySelectorAll("[data-buy]");

  buyButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const product =
        button.dataset.buy || "Product";

      alert(
        "Selected: " +
        product +
        "\n\nProceeding to checkout."
      );

    });

  });


});