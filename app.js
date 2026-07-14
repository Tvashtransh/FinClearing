// APIExplore Landing Page Interactive Behaviors

document.addEventListener("DOMContentLoaded", () => {
  
  // ── MOBILE MENU TOGGLE ───────────────────────────────────────────────────
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      const isHidden = mobileMenu.classList.contains("hidden");
      if (isHidden) {
        mobileMenu.classList.remove("hidden");
        mobileMenuBtn.innerHTML = `<i data-lucide="x" class="h-6 w-6"></i>`;
      } else {
        mobileMenu.classList.add("hidden");
        mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="h-6 w-6"></i>`;
      }
      lucide.createIcons();
    });
  }

  // Close mobile menu on clicking any link
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      if (mobileMenuBtn) {
        mobileMenuBtn.innerHTML = `<i data-lucide="menu" class="h-6 w-6"></i>`;
        lucide.createIcons();
      }
    });
  });


  // ── FAQ ACCORDION ────────────────────────────────────────────────────────
  const faqTriggers = document.querySelectorAll(".faq-trigger");
  
  faqTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const content = trigger.nextElementSibling;
      const icon = trigger.querySelector("i");
      const isExpanded = trigger.getAttribute("aria-expanded") === "true";
      
      // Close other FAQs
      faqTriggers.forEach(otherTrigger => {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute("aria-expanded", "false");
          otherTrigger.nextElementSibling.classList.add("hidden");
          const otherIcon = otherTrigger.querySelector("i");
          if (otherIcon) {
            otherIcon.style.transform = "rotate(0deg)";
            otherIcon.innerHTML = `<i data-lucide="plus" class="h-5 w-5 text-zinc-500"></i>`;
          }
        }
      });

      // Toggle current
      if (isExpanded) {
        trigger.setAttribute("aria-expanded", "false");
        content.classList.add("hidden");
        if (icon) {
          icon.style.transform = "rotate(0deg)";
        }
      } else {
        trigger.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden");
        if (icon) {
          icon.style.transform = "rotate(45deg)";
        }
      }
      lucide.createIcons();
    });
  });


  // ── API & COMPUTE NODE ESTIMATOR ─────────────────────────────────────────
  const disbursementSlider = document.getElementById("disbursement-slider");
  const commissionSlider = document.getElementById("commission-slider");
  const branchesSlider = document.getElementById("branches-slider");

  const disbursementVal = document.getElementById("disbursement-val");
  const commissionVal = document.getElementById("commission-val");
  const branchesVal = document.getElementById("branches-val");

  const calcGross = document.getElementById("calc-gross");
  const calcTds = document.getElementById("calc-tds");
  const calcNet = document.getElementById("calc-net");
  const calcLabor = document.getElementById("calc-labor");

  function formatINR(amount) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);
  }

  function updateCalculator() {
    if (!disbursementSlider || !commissionSlider || !branchesSlider) return;

    const apiRequests = parseInt(disbursementSlider.value);
    const payloadSize = parseInt(commissionSlider.value);
    const nodes = parseInt(branchesSlider.value);

    // Update labels
    if (disbursementVal) {
      if (apiRequests >= 1000000) {
        disbursementVal.textContent = `${(apiRequests / 1000000).toFixed(1)}M Requests`;
      } else {
        disbursementVal.textContent = `${(apiRequests / 1000).toFixed(0)}K Requests`;
      }
    }
    if (commissionVal) commissionVal.textContent = `${payloadSize} KB / req`;
    if (branchesVal) branchesVal.textContent = `${nodes} Shards`;

    // Calculations
    // Base cluster node cost: ₹1,200 per node VPS cost
    const baseNodeCost = nodes * 1200;
    // API gateway routing cost: ₹150 per 100k requests
    const gatewayCost = (apiRequests / 100000) * 150;
    const grossCost = baseNodeCost + gatewayCost;
    
    // Bandwidth: requests * payload size in KB converted to GB
    const outboundBandwidthGB = (apiRequests * payloadSize) / (1024 * 1024);
    // Bandwidth fee: ₹4.5 per GB outbound data transfer
    const bandwidthCost = outboundBandwidthGB * 4.5;
    
    const netTotalCost = grossCost + bandwidthCost;
    const devopsHrsSaved = nodes * 3; // Approx 3 hrs saved per node setup automation monthly

    // Update displays
    if (calcGross) calcGross.textContent = formatINR(grossCost);
    if (calcTds) calcTds.textContent = `${outboundBandwidthGB.toFixed(1)} GB`;
    if (calcNet) calcNet.textContent = formatINR(netTotalCost);
    if (calcLabor) calcLabor.textContent = `${devopsHrsSaved} Hrs / mo`;
  }

  // Attach Listeners
  if (disbursementSlider) disbursementSlider.addEventListener("input", updateCalculator);
  if (commissionSlider) commissionSlider.addEventListener("input", updateCalculator);
  if (branchesSlider) branchesSlider.addEventListener("input", updateCalculator);

  // Run initial calculations
  updateCalculator();


  // ── CONTACT FORM TOAST / MODAL ───────────────────────────────────────────
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const company = document.getElementById("contact-company").value;
      const volume = document.getElementById("contact-volume").value;

      // Premium popup simulation
      const modalHtml = `
        <div id="success-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div class="w-full max-w-md p-8 rounded-2xl bg-zinc-950 border border-zinc-800 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div class="mx-auto h-14 w-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <i data-lucide="check-circle-2" class="h-8 w-8"></i>
            </div>
            <div class="space-y-2">
              <h4 class="text-xl font-bold text-white">Sandbox Initialized</h4>
              <p class="text-zinc-400 text-sm font-light">
                Secure integration credentials for <span class="text-zinc-200 font-semibold">${company}</span> are being provisioned. An onboarding engineer will contact <span class="text-zinc-200 font-semibold">${email}</span> within 2 hours.
              </p>
            </div>
            <button id="close-modal" class="w-full py-3.5 bg-white text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-zinc-200 transition-all">
              Acknowledge Secure Token
            </button>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML("beforeend", modalHtml);
      lucide.createIcons();

      const closeModalBtn = document.getElementById("close-modal");
      if (closeModalBtn) {
        closeModalBtn.addEventListener("click", () => {
          const successModal = document.getElementById("success-modal");
          if (successModal) {
            successModal.remove();
          }
          contactForm.reset();
        });
      }
    });
  }

});
