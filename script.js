/*
  KinboShop — SAMPLE SHOP
  1) Change WHATSAPP_NUMBER below to your number with country code.
     Bangladesh example format: 8801912420580 (no +, spaces or dashes).
  2) Replace sample products, descriptions and prices in PRODUCTS.
  3) Update CONTACT_EMAIL and CONTACT_PHONE.
  This is a static demo: it does not save orders to a database or process payments.
*/

const WHATSAPP_NUMBER ="8801912420580"; // TODO: replace with your real WhatsApp number
const CONTACT_EMAIL ="swajanshah@gmail.com"; // TODO: replace
const CONTACT_PHONE ="01912420580"; // TODO: replace



const PRODUCTS = [
  {
    id: 1, category: "cleanser", name: "Daily Gentle Cleanser",
    bnName: "ডেইলি জেন্টল ক্লেনজার",
    description: "A sample gentle cleanser for a fresh-feeling routine.",
    bnDescription: "সতেজ অনুভূতির দৈনন্দিন রুটিনের জন্য নমুনা ক্লেনজার।",
    price: 450, color: "#e3eddf", pack: "tube", packColor: "#f7f4e9", label: "DAILY CLEANSE"
  },
  {
    id: 2, category: "moisturizer", name: "Hydrating Face Cream",
    bnName: "হাইড্রেটিং ফেস ক্রিম",
    description: "A sample face cream for a simple skincare routine.",
    bnDescription: "সহজ স্কিনকেয়ার রুটিনের জন্য নমুনা ফেস ক্রিম।",
    price: 590, color: "#f4e0d4", pack: "jar", packColor: "#fff8ef", label: "HYDRATE"
  },
  {
    id: 3, category: "sunscreen", name: "Daily Sun Lotion",
    bnName: "ডেইলি সান লোশন",
    description: "A sample sunscreen listing. Check the real product label before use.",
    bnDescription: "নমুনা সানস্ক্রিন তালিকা। ব্যবহারের আগে আসল পণ্যের লেবেল যাচাই করুন।",
    price: 650, color: "#e6e9d7", pack: "tube", packColor: "#eaf0d9", label: "SUN LOTION"
  },
  {
    id: 4, category: "cleanser", name: "Soft Foam Face Wash",
    bnName: "সফট ফোম ফেস ওয়াশ",
    description: "A sample face wash product card. Brand and stock are not verified.",
    bnDescription: "নমুনা ফেসওয়াশ কার্ড। ব্র্যান্ড ও স্টক যাচাই করা হয়নি।",
    price: 380, color: "#dfeaf0", pack: "tube", packColor: "#f4f8f8", label: "SOFT FOAM"
  },
  {
    id: 5, category: "moisturizer", name: "Daily Body Lotion",
    bnName: "ডেইলি বডি লোশন",
    description: "A sample body lotion listing for demonstration only.",
    bnDescription: "শুধু প্রদর্শনের জন্য নমুনা বডি লোশন তালিকা।",
    price: 520, color: "#f1e3d2", pack: "bottle", packColor: "#fff5e9", label: "BODY LOTION"
  },
  {
    id: 6, category: "sunscreen", name: "Lightweight Sun Cream",
    bnName: "লাইটওয়েট সান ক্রিম",
    description: "Example listing only. Confirm SPF, ingredients and authenticity with the seller.",
    bnDescription: "শুধু উদাহরণ। SPF, উপাদান ও আসল পণ্য কি না বিক্রেতার কাছে নিশ্চিত করুন।",
    price: 720, color: "#e5eddf", pack: "tube", packColor: "#f7f7e9", label: "SUN CREAM"
  }
];


const translations = {
  en: {
    announcement: "Sample storefront — product names, photos and prices are examples.",
    tagline: "Everyday care, made simple", contactUs: "Contact us",
    heroEyebrow: "WELCOME TO OUR ONLINE SHOP", heroTitle: "A little care goes a long way.",
    heroText: "Explore our sample skincare collection. Message us to ask about products and delivery.",
    shopNow: "Explore products", sampleNote: "Demo website: replace sample products and prices before publishing.",
    trustOne: "Friendly service", trustTwo: "Carefully selected items", trustThree: "Order by WhatsApp",
    collectionEyebrow: "THE COLLECTION", productsTitle: "Shop our products",
    productsIntro: "These are demonstration products. Confirm real prices and availability with the seller.",
    searchPlaceholder: "Search products...", allProducts: "All", cleanser: "Cleansers",
    moisturizer: "Moisturizers", sunscreen: "Sunscreen", noProducts: "No products match your search. Try another word.",
    aboutEyebrow: "A LITTLE ABOUT US", aboutTitle: "Welcome to Irfan Enterprise",
    aboutText: "We’re building a simple and helpful online shopping experience. Contact us to confirm product details, current stock, and delivery options before ordering.",
    deliveryEyebrow: "DELIVERY INFORMATION", deliveryTitle: "Delivery made clear",
    deliveryText: "Delivery coverage, charges and estimated time are not set on this demo site. Please ask us on WhatsApp before confirming an order.",
    contactEyebrow: "WE’RE HERE TO HELP", contactTitle: "Let’s talk",
    contactText: "Have a question about a product? Send us a message and we’ll help you with the details.",
    emailLabel: "Email", phoneLabel: "Phone / WhatsApp", messageUs: "Message us on WhatsApp",
    footerNote: "Sample storefront for demonstration. Verify all product details before selling.",
    orderNow: "Order on WhatsApp", examplePrice: "example price", productCategories: { cleanser: "Cleanser", moisturizer: "Moisturizer", sunscreen: "Sunscreen" },
    orderMessage: "Hello Irfan Enterprise! I’m interested in: "
  },
  bn: {
    announcement: "নমুনা অনলাইন শপ — পণ্যের নাম, ছবি ও দাম উদাহরণ হিসেবে দেওয়া হয়েছে।",
    tagline: "প্রতিদিনের যত্ন, সহজভাবে", contactUs: "যোগাযোগ",
    heroEyebrow: "আমাদের অনলাইন শপে স্বাগতম", heroTitle: "যত্নের ছোট অভ্যাস, বড় উপকার।",
    heroText: "আমাদের নমুনা স্কিনকেয়ার পণ্য দেখুন। পণ্য ও ডেলিভারি সম্পর্কে জানতে মেসেজ করুন।",
    shopNow: "পণ্য দেখুন", sampleNote: "ডেমো ওয়েবসাইট: প্রকাশের আগে নমুনা পণ্য ও দাম পরিবর্তন করুন।",
    trustOne: "বন্ধুত্বপূর্ণ সেবা", trustTwo: "বাছাই করা পণ্য", trustThree: "WhatsApp-এ অর্ডার",
    collectionEyebrow: "আমাদের সংগ্রহ", productsTitle: "আমাদের পণ্য দেখুন",
    productsIntro: "এগুলো প্রদর্শনের জন্য নমুনা পণ্য। আসল দাম ও স্টক বিক্রেতার কাছে নিশ্চিত করুন।",
    searchPlaceholder: "পণ্য খুঁজুন...", allProducts: "সব", cleanser: "ক্লেনজার",
    moisturizer: "ময়েশ্চারাইজার", sunscreen: "সানস্ক্রিন", noProducts: "আপনার খোঁজের সঙ্গে মেলে এমন পণ্য নেই। অন্য শব্দ দিয়ে চেষ্টা করুন।",
    aboutEyebrow: "আমাদের সম্পর্কে", aboutTitle: "Irfan Enterprise-এ স্বাগতম",
    aboutText: "আমরা সহজ ও সহায়ক অনলাইন কেনাকাটার অভিজ্ঞতা তৈরি করছি। অর্ডারের আগে পণ্যের বিবরণ, বর্তমান স্টক ও ডেলিভারির তথ্য নিশ্চিত করতে যোগাযোগ করুন।",
    deliveryEyebrow: "ডেলিভারি তথ্য", deliveryTitle: "ডেলিভারি সম্পর্কে জেনে নিন",
    deliveryText: "এই ডেমো সাইটে ডেলিভারি এলাকা, চার্জ ও সম্ভাব্য সময় নির্ধারণ করা হয়নি। অর্ডার নিশ্চিত করার আগে WhatsApp-এ জেনে নিন।",
    contactEyebrow: "আমরা সাহায্য করতে প্রস্তুত", contactTitle: "কথা বলুন",
    contactText: "পণ্য সম্পর্কে কোনো প্রশ্ন আছে? মেসেজ করুন, আমরা বিস্তারিত জানাতে সাহায্য করব।",
    emailLabel: "ইমেইল", phoneLabel: "ফোন / WhatsApp", messageUs: "WhatsApp-এ মেসেজ করুন",
    footerNote: "প্রদর্শনের জন্য নমুনা দোকান। বিক্রির আগে সব পণ্যের তথ্য যাচাই করুন।",
    orderNow: "WhatsApp-এ অর্ডার", examplePrice: "নমুনা দাম", productCategories: { cleanser: "ক্লেনজার", moisturizer: "ময়েশ্চারাইজার", sunscreen: "সানস্ক্রিন" },
    orderMessage: "আসসালামু আলাইকুম Irfan Enterprise! আমি এই পণ্যটি নিতে আগ্রহী: "
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
    const message = `${t.orderMessage}${name}. ${currentLanguage === "bn" ? "নমুনা দাম" : "Example price"}: ${money(product.price)}. ${currentLanguage === "bn" ? "দয়া করে স্টক ও ডেলিভারি চার্জ নিশ্চিত করুন।" : "Please confirm stock and delivery charge."}`;
    const href = makeWhatsAppLink(message);
    const target = whatsappReady() ? 'target="_blank" rel="noopener"' : '';
    const disabledNote = whatsappReady() ? "" : (currentLanguage === "bn" ? " (আগে নম্বর যোগ করুন)" : " (add number first)");
    return `

    
      <article class="product-card">
        <div class="product-image" style="--product-bg:${product.color};--pack-color:${product.packColor}">
          <span class="sample-label">${currentLanguage === "bn" ? "নমুনা পণ্য" : "SAMPLE ITEM"}</span>
          <div class="pack ${packClass}">${product.label}</div>
        </div>
        <div class="product-info">
          <span class="product-category">${category}</span>
          <h3>${escapeHTML(name)}</h3>
          <p>${escapeHTML(description)}</p>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
            <span class="example-price">${t.examplePrice}</span>
          </div>
          <a class="order-button" href="${href}" ${target} data-order-id="${product.id}">${t.orderNow}${disabledNote}</a>
        </div>
      </article>`;
  }).join("");

  emptyState.hidden = shown.length > 0;
  productGrid.querySelectorAll("[data-order-id]").forEach(link => {
    if (!whatsappReady()) {
      link.addEventListener("click", event => {
        event.preventDefault();
        alert(currentLanguage === "bn"
          ? "script.js ফাইলে WHATSAPP_NUMBER-এর জায়গায় আপনার WhatsApp নম্বর দিন। বাংলাদেশের নম্বর 880 দিয়ে শুরু করুন; + বা স্পেস দেবেন না।"
          : "Add your WhatsApp number to WHATSAPP_NUMBER in script.js. For Bangladesh, start with 880 and do not include + or spaces.");
      });
    }
  });
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

searchInput.addEventListener("input", renderProducts);
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "bn" : "en"));

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("emailDisplay").textContent = CONTACT_EMAIL;
document.getElementById("phoneDisplay").textContent = CONTACT_PHONE;
const generalWhatsApp = document.getElementById("generalWhatsApp");
generalWhatsApp.href = makeWhatsAppLink(currentLanguage === "bn"
  ? "আসসালামু আলাইকুম KinboShop! পণ্য ও ডেলিভারি সম্পর্কে জানতে চাই।"
  : "Hello KinboShop! I'd like to ask about your products and delivery.");
if (!whatsappReady()) {
  generalWhatsApp.addEventListener("click", event => {
    event.preventDefault();
    alert(currentLanguage === "bn"
      ? "script.js ফাইলে WHATSAPP_NUMBER-এর জায়গায় আপনার WhatsApp নম্বর দিন।"
      : "Add your WhatsApp number to WHATSAPP_NUMBER in script.js first.");
  });
}

renderProducts();
