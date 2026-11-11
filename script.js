/*
  KinzoraBD — MULTI-CATEGORY STORE
*/

const WHATSAPP_NUMBER = "8801912420580"; 
const CONTACT_EMAIL = "admin@kinzorabd.com"; 
const CONTACT_PHONE = ""; 

const PRODUCTS = [
  {
    id: 1, category: "electronics", name: "Wireless Bluetooth Earbuds",
    bnName: "ওয়্যারলেস ব্লুটুথ ইয়ারবাডস",
    description: "High bass, touch control, and long-lasting battery backup.",
    bnDescription: "হাই বেস, টাচ কন্ট্রোল এবং দীর্ঘস্থায়ী ব্যাটারি ব্যাকআপযুক্ত ইয়ারবাডস।",
    price: 1550, color: "#e3eddf", pack: "jar", packColor: "#f7f4e9", label: "TRENDING"
  },
  {
    id: 2, category: "fashion", name: "Men's Casual Cotton Shirt",
    bnName: "পুরুষদের ক্যাজুয়াল কটন শার্ট",
    description: "Comfortable and premium quality cotton fabric for daily wear.",
    bnDescription: "দৈনিক ব্যবহারের জন্য আরামদায়ক এবং প্রিমিয়াম মানের কটন শার্ট।",
    price: 850, color: "#f4e0d4", pack: "tube", packColor: "#fff8ef", label: "NEW"
  },
  {
    id: 3, category: "home", name: "Non-Stick Cookware Set (5 Pcs)",
    bnName: "নন-স্টিক কুকওয়্যার সেট (৫ পিস)",
    description: "Durable and scratch-resistant coating for safe cooking.",
    bnDescription: "নিরাপদ রান্নার জন্য টেকসই এবং স্ক্যাচ-প্রতিরোধী কোটিং যুক্ত সেট।",
    price: 2800, color: "#e6e9d7", pack: "jar", packColor: "#eaf0d9", label: "BEST SELLER"
  },
  {
    id: 4, category: "healthcare", name: "Natural Aloe Vera Face Gel",
    bnName: "ন্যাচারাল অ্যালোভেরা ফেস জেল",
    description: "Hydrates and nourishes skin for a glowing and fresh look.",
    bnDescription: "ত্বকের উজ্জ্বলতা ও সতেজতার জন্য ময়েশ্চারাইজিং ফেস জেল।",
    price: 450, color: "#dfeaf0", pack: "tube", packColor: "#f4f8f8", label: "POPULAR"
  },
  {
    id: 5, category: "groceries", name: "Organic Flower Honey (500g)",
    bnName: "অর্গানিক ফুলের মধু (৫০০ গ্রাম)",
    description: "100% pure and natural raw honey collected from local sources.",
    bnDescription: "স্থানীয় উৎস থেকে সংগৃহীত ১০০% খাঁটি ও প্রাকৃতিক মধু।",
    price: 600, color: "#f1e3d2", pack: "bottle", packColor: "#fff5e9", label: "PURE"
  }
];

const translations = {
  en: {
    announcement: "Welcome to KinzoraBD — Explore our wide range of products!",
    tagline: "Quality products, right at your doorstep", contactUs: "Contact us",
    heroEyebrow: "WELCOME TO OUR STORE", heroTitle: "Everything you need, all in one place.",
    heroText: "Explore our multi-category product collection. Message us on WhatsApp to order directly.",
    shopNow: "Explore products", sampleNote: "Demo website: replace sample products and prices before publishing.",
    trustOne: "100% Genuine Products", trustTwo: "Fast & Reliable Delivery", trustThree: "Easy WhatsApp Order",
    collectionEyebrow: "OUR PRODUCTS", productsTitle: "Shop by Categories",
    productsIntro: "Browse through our quality product catalog and find what you need.",
    searchPlaceholder: "Search products...", allProducts: "All Products", 
    electronics: "Electronics", fashion: "Fashion", homeLiving: "Home & Living", 
    healthCare: "Health & Care", groceries: "Groceries", 
    noProducts: "No products match your search. Try another term.",
    aboutEyebrow: "ABOUT US", aboutTitle: "Welcome to KinzoraBD",
    aboutText: "We are committed to providing top-quality products across multiple categories with convenient shopping and quick customer support.",
    deliveryEyebrow: "DELIVERY DETAILS", deliveryTitle: "Nationwide Shipping",
    deliveryText: "We deliver across Bangladesh. Contact us on WhatsApp for exact delivery charges and estimated arrival times for your location.",
    contactEyebrow: "CONTACT US", contactTitle: "Get in Touch",
    contactText: "Have questions about a product or bulk orders? Reach out to us directly!",
    emailLabel: "Email", phoneLabel: "Phone / WhatsApp", messageUs: "Message us on WhatsApp",
    footerNote: "Official storefront for KinzoraBD. Verify all product details before ordering.",
    orderNow: "Order on WhatsApp", examplePrice: "price", 
    productCategories: { 
      electronics: "Electronics", fashion: "Fashion", home: "Home & Living", 
      healthcare: "Health & Care", groceries: "Groceries" 
    },
    orderMessage: "Hello KinzoraBD! I’m interested in: "
  },
  bn: {
    announcement: "স্বাগতম KinzoraBD-তে — আমাদের প্রডাক্টগুলো দেখে নিন!",
    tagline: "গুণগত মানের পণ্য, আপনার দোরগোড়ায়", contactUs: "যোগাযোগ",
    heroEyebrow: "আমাদের দোকানে স্বাগতম", heroTitle: "আপনার প্রয়োজনীয় সবকিছু এক ছাদের নিচে।",
    heroText: "আমাদের বিভিন্ন ক্যাটাগরির পণ্য সংগ্রহ দেখুন। সরাসরি অর্ডার করতে হোয়াটসঅ্যাপে মেসেজ করুন।",
    shopNow: "পণ্য দেখুন", sampleNote: "ডেমো ওয়েবসাইট: প্রকাশের আগে নমুনা পণ্য ও দাম পরিবর্তন করুন।",
    trustOne: "১০০% আসল পণ্য", trustTwo: "দ্রুত ও নির্ভরযোগ্য ডেলিভারি", trustThree: "সহজেই হোয়াটসঅ্যাপে অর্ডার",
    collectionEyebrow: "আমাদের সংগ্রহ", productsTitle: "ক্যাটাগরি অনুযায়ী কেনাকাটা করুন",
    productsIntro: "আমাদের মানসম্মত ক্যাটালগ থেকে আপনার প্রয়োজনীয় পণ্যটি বেছে নিন।",
    searchPlaceholder: "পণ্য খুঁজুন...", allProducts: "সকল পণ্য", 
    electronics: "ইলেকট্রনিক্স", fashion: "ফ্যাশন", homeLiving: "হোম অ্যান্ড লিভিং", 
    healthCare: "হেলথ কেয়ার", groceries: "গ্রোসারিজ", 
    noProducts: "আপনার অনুসন্ধানের সাথে কোনো পণ্য মিলছে না। অন্য শব্দ দিয়ে চেষ্টা করুন।",
    aboutEyebrow: "আমাদের সম্পর্কে", aboutTitle: "KinzoraBD-তে আপনাকে স্বাগতম",
    aboutText: "আমরা বিভিন্ন ক্যাটাগরির সেরা মানের পণ্য এবং দ্রুত কাস্টমার সাপোর্ট প্রদানে প্রতিশ্রুতিবদ্ধ।",
    deliveryEyebrow: "ডেলিভারি তথ্য", deliveryTitle: "দেশব্যাপী শিপিং",
    deliveryText: "আমরা সারা বাংলাদেশে ডেলিভারি করি। আপনার এলাকার ডেলিভারি চার্জ জানতে হোয়াটসঅ্যাপে যোগাযোগ করুন।",
    contactEyebrow: "যোগাযোগ করুন", contactTitle: "কথা বলুন আমাদের সাথে",
    contactText: "পণ্য বা পাইকারি অর্ডার সম্পর্কে কোনো প্রশ্ন আছে? সরাসরি আমাদের সাথে যোগাযোগ করুন!",
    emailLabel: "ইমেইল", phoneLabel: "ফোন / হোয়াটসঅ্যাপ", messageUs: "হোয়াটসঅ্যাপে মেসেজ করুন",
    footerNote: "KinzoraBD-এর অফিশিয়াল স্টোরফ্রন্ট। অর্ডার করার আগে পণ্যের বিবরণ যাচাই করুন।",
    orderNow: "WhatsApp-এ অর্ডার", examplePrice: "মূল্য", 
    productCategories: { 
      electronics: "ইলেকট্রনিক্স", fashion: "ফ্যাশন", home: "হোম অ্যান্ড লিভিং", 
      healthcare: "হেলথ কেয়ার", groceries: "গ্রোসারিজ" 
    },
    orderMessage: "আসসালামু আলাইকুম KinzoraBD! আমি এই পণ্যটি নিতে আগ্রহী: "
  }
};

let currentLanguage = "en";
let activeCategory = "all";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const languageToggle = document.getElementById("languageToggle");

function money(amount) {
  return new Intl.NumberFormat(currentLanguage === "bn" ? "bn-BD" : "en-BD", {
    style: "currency", currency: "BDT", maximumFractionDigits: 0
  }).format(amount);
}

function whatsappReady() {
  return /^\d{10,15}$/.test(WHATSAPP_NUMBER) && !WHATSAPP_NUMBER.includes("X");
}

function makeWhatsAppLink(message) {
  if (!whatsappReady()) return "#contact";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const t = translations[currentLanguage];
  const query = searchInput.value.trim().toLocaleLowerCase();
  const shown = PRODUCTS.filter(product => {
    const name = currentLanguage === "bn" ? product.bnName : product.name;
    const description = currentLanguage === "bn" ? product.bnDescription : product.description;
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesQuery = `${name} ${description} ${product.name} ${product.bnName}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  productGrid.innerHTML = shown.map(product => {
    const name = currentLanguage === "bn" ? product.bnName : product.name;
    const description = currentLanguage === "bn" ? product.bnDescription : product.description;
    const category = t.productCategories[product.category] || product.category;
    const packClass = product.pack === "jar" ? "jar" : product.pack === "tube" ? "tube" : "";
    const message = `${t.orderMessage}${name}. মূল্য: ${money(product.price)}. দয়া করে স্টক ও ডেলিভারি চার্জ নিশ্চিত করুন।`;
    const href = makeWhatsAppLink(message);
    const target = whatsappReady() ? 'target="_blank" rel="noopener"' : '';
    const disabledNote = whatsappReady() ? "" : (currentLanguage === "bn" ? " (আগে নম্বর যোগ করুন)" : " (add number first)");
    return `
      <article class="product-card">
        <div class="product-image" style="--product-bg:${product.color};--pack-color:${product.packColor}">
          <span class="sample-label">KinzoraBD</span>
          <div class="pack ${packClass}">KB</div>
        </div>
        <div class="product-info">
          <span class="product-category">${category}</span>
          <h3>${escapeHTML(name)}</h3>
          <p>${escapeHTML(description)}</p>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
          </div>
          <a class="order-button" href="${href}" ${target} data-order-id="${product.id}">${t.orderNow}${disabledNote}</a>
        </div>
      </article>`;
  }).join("");

  emptyState.hidden = shown.length > 0;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language === "bn" ? "bn" : "en";
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const value = translations[language][key];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    const value = translations[language][key];
    if (value) element.placeholder = value;
  });
  languageToggle.textContent = language === "en" ? "বাংলা" : "English";
  renderProducts();
}

document.getElementById("categoryFilters").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  document.querySelectorAll(".filter-button").forEach(item => item.classList.toggle("active", item === button));
  renderProducts();
});

if (searchInput) searchInput.addEventListener("input", renderProducts);
if (languageToggle) languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "bn" : "en"));

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const emailEl = document.getElementById("emailDisplay");
if (emailEl) emailEl.textContent = CONTACT_EMAIL;

const phoneEl = document.getElementById("phoneDisplay");
if (phoneEl) phoneEl.textContent = CONTACT_PHONE;

const generalWhatsApp = document.getElementById("generalWhatsApp");
if (generalWhatsApp) {
  generalWhatsApp.href = makeWhatsAppLink(currentLanguage === "bn"
    ? "আসসালামু আলাইকুম KinzoraBD! পণ্য ও ডেলিভারি সম্পর্কে জানতে চাই।"
    : "Hello KinzoraBD! I'd like to ask about your products and delivery.");
}

renderProducts();
