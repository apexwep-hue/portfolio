/**
 * RAGHD - WEB DEVELOPER & DIGITAL CREATIVE
 * Portfolio & Service Website System
 */

/* ==========================================================================
   1. CENTRALIZED CONFIGURATION
   ========================================================================== */
const SITE_CONFIG = {
  name: "Raghd",
  title: "Web Developer & Digital Creative",
  whatsapp: "201000000000", // Central WhatsApp Number (Country code + number)
  email: "hello@example.com",
  instagram: "https://instagram.com",
  linkedin: "https://linkedin.com",
  github: "https://github.com"
};

/* ==========================================================================
   2. DATA STRUCTURES
   ========================================================================== */
const SERVICES_DATA = [
  {
    id: "s1",
    num: "01",
    title: "Website Development",
    desc: "Business websites, corporate platforms, and bespoke web experiences engineered from scratch.",
    deliverables: ["Custom HTML5/CSS3/JS Code", "SEO Architecture", "Cross-browser testing", "Fast performance setup"],
    timeline: "2 - 3 Weeks"
  },
  {
    id: "s2",
    num: "02",
    title: "E-Commerce Stores",
    desc: "Modern online shopping experiences complete with product showcases, cart functionality, and direct WhatsApp ordering.",
    deliverables: ["Product Catalog Grid", "WhatsApp Cart & Checkout", "Category Filtering", "Mobile Touch UI"],
    timeline: "3 - 4 Weeks"
  },
  {
    id: "s3",
    num: "03",
    title: "React Development",
    desc: "Interactive dashboards, dynamic client portals, and fast React applications.",
    deliverables: ["React Component System", "State Management", "API Integrations", "Optimized Build Workflow"],
    timeline: "3 - 5 Weeks"
  },
  {
    id: "s4",
    num: "04",
    title: "Landing Pages",
    desc: "High-converting single-page websites optimized for marketing campaigns and product debuts.",
    deliverables: ["Conversion-focused Copy Layout", "WhatsApp Lead CTAs", "Fast Load Speed", "Analytics Ready"],
    timeline: "1 - 2 Weeks"
  },
  {
    id: "s5",
    num: "05",
    title: "UI / Web Design",
    desc: "Bespoke interface designs centered on luxury branding, clarity, and visual hierarchy.",
    deliverables: ["Design Mockups", "Design Tokens", "Typography Hierarchy", "Responsive Rules"],
    timeline: "1 - 2 Weeks"
  },
  {
    id: "s6",
    num: "06",
    title: "Website Redesign",
    desc: "Transform outdated websites into high-end, responsive, and effective modern digital experiences.",
    deliverables: ["UI Audit", "Full Visual Overhaul", "Code Refactoring", "Mobile Optimization"],
    timeline: "2 - 3 Weeks"
  },
  {
    id: "s7",
    num: "07",
    title: "Custom Web Solutions",
    desc: "Tailored interactive tools, estimators, or bespoke feature integrations built for your business.",
    deliverables: ["Custom Logic", "Interactive UI Tools", "Bespoke Calculators", "Integration Setup"],
    timeline: "2 - 4 Weeks"
  },
  {
    id: "s8",
    num: "08",
    title: "Website Optimization",
    desc: "Performance tuning, responsive fixes, usability enhancements, and structural code cleanup.",
    deliverables: ["PageSpeed Enhancements", "Mobile Layout Fixes", "Asset Compression", "SEO Tagging"],
    timeline: "1 Week"
  }
];

const PORTFOLIO_DATA = [
  {
    id: "lumiere",
    name: "LUMIÈRE",
    category: "websites",
    categoryLabel: "Medical & Aesthetic",
    desc: "Luxury medical & aesthetic center site with procedure previews and direct WhatsApp appointment booking.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    tech: ["HTML5", "CSS3", "JavaScript", "WhatsApp API"],
    challenge: "Creating an ultra-luxury aesthetic experience while keeping clinic booking simple for mobile users.",
    solution: "Custom responsive grid, smooth animations, and zero-friction WhatsApp doctor consultation routing."
  },
  {
    id: "aurelia",
    name: "AURELIA",
    category: "e-commerce",
    categoryLabel: "Luxury Accessories",
    desc: "E-Commerce store with interactive product viewports, collection filtering, and WhatsApp cart order submission.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    tech: ["Vanilla JS", "CSS Variables", "WhatsApp Cart"],
    challenge: "Building a fluid shopping cart experience without heavy backend frameworks.",
    solution: "Client-side JS cart state that compiles orders into structured WhatsApp text briefs."
  },
  {
    id: "luxeron",
    name: "LUXERON",
    category: "e-commerce",
    categoryLabel: "High-End E-Commerce",
    desc: "Bespoke jewelry store interface focusing on sleek dark-mode aesthetics and quick-view product modal cards.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    tech: ["HTML5", "CSS Grid", "JavaScript"],
    challenge: "Presenting high-resolution product photography with fast page load speed.",
    solution: "Lazy loading, webp image formats, and clean CSS animation layers."
  },
  {
    id: "tech-docs",
    name: "Technical Docs Portal",
    category: "dashboards",
    categoryLabel: "Developer Tools",
    desc: "Fast documentation platform with instant client search, side navigation, and clean typography hierarchy.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "JavaScript", "CSS Modules"],
    challenge: "Structuring large amounts of technical data cleanly for easy scanning.",
    solution: "Real-time client search filtering and accessible collapsible menu structures."
  },
  {
    id: "tracker-app",
    name: "Release Tracker",
    category: "react",
    categoryLabel: "React Portal",
    desc: "Software and firmware release tracking portal with filterable status tables and visual metric badges.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tech: ["React", "CSS3", "JSON Data"],
    challenge: "Delivering real-time status visibility for engineering teams.",
    solution: "Dynamic React state filtering with custom responsive table layouts."
  },
  {
    id: "resource-portal",
    name: "Company Resource Portal",
    category: "business",
    categoryLabel: "Corporate Portal",
    desc: "Centralized internal resources portal for enterprise teams with categorized resource links and search.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    tech: ["HTML5", "JS Search", "CSS Variables"],
    challenge: "Organizing fragmented corporate files into a single dashboard.",
    solution: "Minimalist grid layout featuring instant keyword filter logic."
  },
  {
    id: "velvet-dining",
    name: "VELVET Dining",
    category: "landing-pages",
    categoryLabel: "Luxury Hospitality",
    desc: "High-end dining landing page with online table reservation requests via WhatsApp.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    tech: ["HTML5", "CSS Flexbox", "JavaScript"],
    challenge: "Encouraging weekend table reservations directly from social media traffic.",
    solution: "Prominent floating reservation CTA that formats restaurant booking details directly to WhatsApp."
  },
  {
    id: "estate-prime",
    name: "PRIME Real Estate",
    category: "business",
    categoryLabel: "Property Showcase",
    desc: "Property listing showcase platform featuring high-res galleries and agent contact triggers.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    tech: ["JavaScript", "CSS Grid", "Responsive Design"],
    challenge: "Displaying property specs seamlessly on mobile devices.",
    solution: "Touch-swipe friendly image viewports and clean structured data tables."
  }
];

const FAQ_DATA = [
  { q: "How long does a website project take?", a: "Timelines depend on complexity. Single landing pages typically take 1–2 weeks, standard business websites take 2–3 weeks, and advanced e-commerce or custom solutions take 3–5 weeks." },
  { q: "Do you build fully responsive websites?", a: "Yes. Every website is engineered from the ground up to render flawlessly on mobile, tablet, and high-resolution desktop screens." },
  { q: "Can you connect WhatsApp directly to my site?", a: "Absolutely. I build custom WhatsApp triggers that automatically format inquiries, cart items, or booking requests straight to your phone." },
  { q: "Do you build online stores?", a: "Yes. I create sleek e-commerce solutions with product catalogs, shopping carts, and instant checkout or WhatsApp ordering workflows." },
  { q: "Do you work with existing websites?", a: "Yes. I offer complete website redesigns, performance optimization, and layout modernizations for existing platforms." },
  { q: "Can you redesign my current website?", a: "Definitely. I can audit your current site, create a contemporary design direction, and rebuild it with modern code." },
  { q: "Do you provide hosting and deployment?", a: "I guide you through domain setup, hosting selection, and handle the final deployment to your live server." },
  { q: "Can you build custom interactive features?", a: "Yes. I specialize in custom calculators, interactive project wizards, product configurators, and bespoke UI tools." },
  { q: "Do you build React applications?", a: "Yes. For complex web portals, client dashboards, or dynamic tools, I engineer clean React applications." },
  { q: "How does the project process work?", a: "We follow 5 clear steps: Discover -> Plan -> Design -> Develop -> Launch. You receive progress updates at every milestone." },
  { q: "What do I need to prepare before starting?", a: "Having your logo, brand guidance, and core text/images ready helps speed up launch, but I can guide you through preparing them." },
  { q: "How do I start a project with you?", a: "You can use the interactive Project Builder tool on this site, fill out the inquiry form, or click 'Chat on WhatsApp' to start immediately." }
];

/* ==========================================================================
   3. DOM INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initCentralConfig();
  initHeaderScroll();
  initMobileMenu();
  renderServices();
  renderPortfolio();
  initPortfolioFilters();
  initModals();
  initProjectBuilder();
  initInquiryForm();
  renderFAQs();
  initBackToTop();
  initScrollAnimations();
});

/* central config binder */
function initCentralConfig() {
  const emailEl = document.getElementById("config-email");
  const phoneEl = document.getElementById("config-phone");
  const waBtn = document.getElementById("direct-wa-btn");
  const floatWa = document.getElementById("floating-whatsapp");
  
  if (emailEl) { emailEl.textContent = SITE_CONFIG.email; emailEl.href = `mailto:${SITE_CONFIG.email}`; }
  if (phoneEl) phoneEl.textContent = `+${SITE_CONFIG.whatsapp}`;
  
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello Raghd, I would like to inquire about starting a project.")}`;
  if (waBtn) waBtn.href = waUrl;
  if (floatWa) floatWa.href = waUrl;

  // Social Links
  ["instagram", "linkedin", "github"].forEach(s => {
    const el = document.getElementById(`social-${s}`);
    const footEl = document.getElementById(`foot-${s}`);
    if (el) el.href = SITE_CONFIG[s];
    if (footEl) footEl.href = SITE_CONFIG[s];
  });
}

/* Header Scroll Glass Effect */
function initHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* Mobile Menu Navigation */
function initMobileMenu() {
  const btn = document.getElementById("mobile-toggle");
  const nav = document.getElementById("main-nav");
  
  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", !expanded);
    nav.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==========================================================================
   4. SERVICES RENDER & MODAL
   ========================================================================== */
function renderServices() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = SERVICES_DATA.map(s => `
    <div class="service-card">
      <div>
        <span class="service-num">${s.num}</span>
        <div class="service-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
      <button class="service-link open-service-modal" data-id="${s.id}">Learn More &rarr;</button>
    </div>
  `).join("");

  document.querySelectorAll(".open-service-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const serviceId = e.currentTarget.getAttribute("data-id");
      openServiceModal(serviceId, e.currentTarget);
    });
  });
}

function openServiceModal(id, opener) {
  const service = SERVICES_DATA.find(s => s.id === id);
  if (!service) return;

  const modal = document.getElementById("service-modal");
  const body = document.getElementById("service-modal-body");

  body.innerHTML = `
    <span class="modal-subtitle">Service Details</span>
    <h3 class="modal-title" id="service-modal-title">${service.title}</h3>
    <p class="modal-body-text">${service.desc}</p>
    
    <h4 style="font-size:1rem; margin-bottom:12px; color:var(--purple-deep);">What's Included:</h4>
    <ul class="modal-list">
      ${service.deliverables.map(d => `<li>✓ ${d}</li>`).join("")}
    </ul>
    
    <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:24px;"><strong>Typical Timeline:</strong> ${service.timeline}</p>

    <a href="#inquiry" class="btn btn-primary full-width close-and-scroll" data-service="${service.title}">Request This Service</a>
  `;

  showModal(modal, opener);

  const reqBtn = body.querySelector(".close-and-scroll");
  reqBtn.addEventListener("click", () => {
    closeModal(modal);
    const selectEl = document.getElementById("projectType");
    if (selectEl) selectEl.value = service.title.includes("E-Commerce") ? "E-Commerce Store" : "Business Website";
  });
}

/* ==========================================================================
   5. PORTFOLIO RENDER, FILTERING & CASE STUDY MODAL
   ========================================================================== */
function renderPortfolio(category = "all") {
  const grid = document.getElementById("portfolio-grid");
  if (!grid) return;

  const filtered = category === "all" ? PORTFOLIO_DATA : PORTFOLIO_DATA.filter(p => p.category === category);

  grid.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category}">
      <div class="project-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="project-overlay">
          <button class="btn btn-primary btn-sm open-case-modal" data-id="${p.id}">View Case Study</button>
        </div>
      </div>
      <div class="project-info">
        <span class="project-cat">${p.categoryLabel}</span>
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".open-case-modal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const caseId = e.currentTarget.getAttribute("data-id");
      openCaseStudyModal(caseId, e.currentTarget);
    });
  });
}

function initPortfolioFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      const filter = btn.getAttribute("data-filter");
      renderPortfolio(filter);
    });
  });

  // Featured Spotlight Trigger
  const featuredBtn = document.querySelector(".open-featured-case");
  if (featuredBtn) {
    featuredBtn.addEventListener("click", (e) => {
      openCaseStudyModal("lumiere", e.currentTarget);
    });
  }
}

function openCaseStudyModal(id, opener) {
  const project = PORTFOLIO_DATA.find(p => p.id === id);
  if (!project) return;

  const modal = document.getElementById("case-study-modal");
  const body = document.getElementById("case-modal-body");

  body.innerHTML = `
    <span class="modal-subtitle">${project.categoryLabel}</span>
    <h3 class="modal-title" id="case-modal-title">${project.name}</h3>
    <img src="${project.image}" alt="${project.name}" class="case-preview-img">
    
    <div style="margin-bottom:20px;">
      <h4 style="color:var(--purple-deep); margin-bottom:8px;">Project Overview</h4>
      <p style="color:var(--text-muted); font-size:0.95rem;">${project.desc}</p>
    </div>

    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px; margin-bottom:24px;">
      <div>
        <h5 style="color:var(--purple-deep); font-size:0.95rem; margin-bottom:6px;">The Challenge</h5>
        <p style="color:var(--text-muted); font-size:0.85rem;">${project.challenge}</p>
      </div>
      <div>
        <h5 style="color:var(--purple-deep); font-size:0.95rem; margin-bottom:6px;">The Solution</h5>
        <p style="color:var(--text-muted); font-size:0.85rem;">${project.solution}</p>
      </div>
    </div>

    <div style="margin-bottom:24px;">
      <h5 style="color:var(--purple-deep); font-size:0.95rem; margin-bottom:8px;">Technologies Used:</h5>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>

    <a href="#inquiry" class="btn btn-primary full-width close-and-scroll">Start Similar Project</a>
  `;

  showModal(modal, opener);

  const reqBtn = body.querySelector(".close-and-scroll");
  reqBtn.addEventListener("click", () => {
    closeModal(modal);
  });
}

/* ==========================================================================
   6. ACCESSIBLE MODAL FOCUS MANAGEMENT
   ========================================================================== */
let lastFocusedElement = null;

function showModal(modal, opener) {
  lastFocusedElement = opener || document.activeElement;
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("active");

  const closeBtn = modal.querySelector(".modal-close-btn");
  if (closeBtn) closeBtn.focus();

  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  // 1. Return focus to opener FIRST
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
  
  // 2. Hide modal afterwards
  modal.setAttribute("aria-hidden", "true");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function initModals() {
  document.querySelectorAll(".modal-overlay").forEach(modal => {
    const closeBtn = modal.querySelector(".modal-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => closeModal(modal));
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal-overlay.active").forEach(m => closeModal(m));
    }
  });
}

/* ==========================================================================
   7. INTERACTIVE PROJECT BUILDER
   ========================================================================== */
function initProjectBuilder() {
  let currentStep = 1;
  const totalSteps = 4;
  
  const state = {
    projectType: "",
    industry: "",
    features: [],
    budget: ""
  };

  const progressBar = document.getElementById("builder-progress-bar");
  const prevBtn = document.getElementById("builder-prev-btn");
  const nextBtn = document.getElementById("builder-next-btn");
  const summaryBlock = document.getElementById("builder-summary");
  const applyBtn = document.getElementById("apply-builder-btn");

  // Option Click Handlers
  document.querySelectorAll(".options-grid").forEach(grid => {
    const field = grid.getAttribute("data-field");
    const isMulti = grid.classList.contains("multi-select");

    grid.querySelectorAll(".option-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");

        if (isMulti) {
          btn.classList.toggle("selected");
          if (state.features.includes(val)) {
            state.features = state.features.filter(f => f !== val);
          } else {
            state.features.push(val);
          }
        } else {
          grid.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          state[field] = val;
        }
      });
    });
  });

  // Next Step
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateStep();
      } else {
        showSummary();
      }
    });
  }

  // Prev Step
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateStep();
      }
    });
  }

  function updateStep() {
    document.querySelectorAll(".builder-step").forEach(s => {
      s.classList.remove("active");
      if (parseInt(s.getAttribute("data-step")) === currentStep) {
        s.classList.add("active");
      }
    });

    progressBar.style.width = `${(currentStep / totalSteps) * 100}%`;
    prevBtn.disabled = currentStep === 1;

    if (currentStep === totalSteps) {
      nextBtn.textContent = "View Summary";
    } else {
      nextBtn.textContent = "Next Step";
    }
  }

  function showSummary() {
    document.querySelectorAll(".builder-step").forEach(s => s.classList.remove("active"));
    summaryBlock.style.display = "block";
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";

    const detailsEl = document.getElementById("summary-details");
    detailsEl.innerHTML = `
      <div class="summary-item"><strong>Project Type:</strong> ${state.projectType || "Not Specified"}</div>
      <div class="summary-item"><strong>Industry:</strong> ${state.industry || "Not Specified"}</div>
      <div class="summary-item"><strong>Requested Features:</strong> ${state.features.length ? state.features.join(", ") : "None Selected"}</div>
      <div class="summary-item"><strong>Budget Range:</strong> ${state.budget || "Not Specified"}</div>
    `;
  }

  // Pass configuration to inquiry form
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const projSelect = document.getElementById("projectType");
      const budgetSelect = document.getElementById("budget");
      const featuresInput = document.getElementById("featuresList");

      if (projSelect && state.projectType) projSelect.value = state.projectType;
      if (budgetSelect && state.budget) budgetSelect.value = state.budget;
      if (featuresInput) featuresInput.value = `Features: ${state.features.join(", ")} | Industry: ${state.industry}`;

      window.location.hash = "#inquiry";
    });
  }
}

/* ==========================================================================
   8. PROJECT INQUIRY FORM & WHATSAPP ENCODING
   ========================================================================== */
function initInquiryForm() {
  const form = document.getElementById("project-form");
  if (!form) return;

  // Package selector bindings
  document.querySelectorAll(".select-package").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const pkg = e.currentTarget.getAttribute("data-package");
      const projSelect = document.getElementById("projectType");
      if (projSelect) {
        if (pkg.includes("Landing")) projSelect.value = "Landing Page";
        else if (pkg.includes("Business")) projSelect.value = "Business Website";
        else projSelect.value = "Custom Solution";
      }
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm(form)) return;

    const name = document.getElementById("fullName").value.trim();
    const business = document.getElementById("businessName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const projectType = document.getElementById("projectType").value;
    const budget = document.getElementById("budget").value;
    const timeline = document.getElementById("timeline").value.trim();
    const features = document.getElementById("featuresList").value.trim();
    const currentWeb = document.getElementById("currentWebsite").value.trim();
    const description = document.getElementById("description").value.trim();

    // Clean formatted WhatsApp text message
    const rawMessage = 
`Hello Raghd,

I would like to discuss a project.

Name: ${name}
Business: ${business}
Email: ${email}
Phone: ${phone}

Project Type: ${projectType}
Budget: ${budget}
Timeline: ${timeline || "Flexible"}

Requested Features: ${features || "N/A"}
Current Website: ${currentWeb || "None"}

Project Description:
${description}

Thank you.`;

    const encoded = encodeURIComponent(rawMessage);
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(waUrl, "_blank", "noopener");
  });
}

function validateForm(form) {
  let valid = true;
  const fields = ["fullName", "businessName", "email", "phone", "description"];

  fields.forEach(fieldId => {
    const el = document.getElementById(fieldId);
    const errEl = document.getElementById(`err-${fieldId}`);
    if (!el) return;

    if (!el.value.trim()) {
      valid = false;
      if (errEl) errEl.textContent = "This field is required";
      el.style.borderColor = "#EF4444";
    } else {
      if (errEl) errEl.textContent = "";
      el.style.borderColor = "var(--border)";
    }
  });

  return valid;
}

/* ==========================================================================
   9. FAQ ACCORDION
   ========================================================================== */
function renderFAQs() {
  const container = document.getElementById("faq-accordion");
  if (!container) return;

  container.innerHTML = FAQ_DATA.map((f, i) => `
    <div class="faq-item">
      <button class="faq-header" aria-expanded="false" aria-controls="faq-ans-${i}">
        <span>${f.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div id="faq-ans-${i}" class="faq-body">
        <p>${f.a}</p>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all other panels
      document.querySelectorAll(".faq-item").forEach(i => {
        i.classList.remove("active");
        i.querySelector(".faq-header").setAttribute("aria-expanded", "false");
        i.querySelector(".faq-body").style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add("active");
        header.setAttribute("aria-expanded", "true");
        const body = item.querySelector(".faq-body");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

/* ==========================================================================
   10. BACK TO TOP & SCROLL ANIMATIONS
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".service-card, .project-card, .benefit-card, .price-card, .timeline-step").forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}