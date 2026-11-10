/**
 * AURA LUXE - ULTRA-PREMIUM HOSPITALITY & CONCIERGE PLATFORM
 * State Management, Interactive Booking Engine, Dynamic Filtering,
 * Wishlist, Currencies, and AI Concierge.
 */

// ==========================================
// 1. CURATED DATA STORE (HOTELS & SERVICES)
// ==========================================
const DEFAULT_CATALOG_DATA = [
  {
    id: "stay-bora-bora",
    type: "stay",
    category: "villas",
    title: "Overwater Azure Sanctuary",
    location: "Bora Bora, French Polynesia",
    destinationKey: "bora bora",
    priceUSD: 1850,
    priceUnit: "night",
    rating: 4.98,
    reviewsCount: 142,
    image: "assets/images/overwater-villa.jpg",
    badge: "Lagoon View",
    tagline: "Stunning overwater haven with glass floor viewing and private infinity pool",
    description: "Suspended directly over Bora Bora’s turquoise crystal lagoon, this world-renowned sanctuary offers endless panoramic Pacific horizons. Features an expansive sun deck, direct ocean swimming ladder, transparent glass living room floors, and 24/7 dedicated Polynesian butler service.",
    specs: { guests: 3, beds: 1, baths: 2, size: "2,200 sq.ft" },
    amenities: ["Private Pool", "Oceanfront", "Private Butler", "Spa", "Champagne Bar"],
    gallery: [
      "assets/images/overwater-villa.jpg",
      "assets/images/hero.jpg",
      "assets/images/santorini-suite.jpg"
    ],
    addons: [
      { id: "addon-boat", name: "VIP Catamaran Airport Transfer", price: 220 },
      { id: "addon-champagne", name: "Dom Pérignon & French Caviar Welcome", price: 340 },
      { id: "addon-spa", name: "Couples Polynesian Coconut Oil Massage", price: 280 }
    ]
  },
  {
    id: "stay-zermatt-chalet",
    type: "stay",
    category: "chalets",
    title: "Matterhorn Royal Alpine Chalet",
    location: "Zermatt, Swiss Alps",
    destinationKey: "zermatt",
    priceUSD: 2400,
    priceUnit: "night",
    rating: 4.99,
    reviewsCount: 96,
    image: "assets/images/alpine-chalet.jpg",
    badge: "Ski-in / Ski-out",
    tagline: "Ultra-luxury modern chalet framing unobstructed views of the Matterhorn",
    description: "Perched high on the sun-kissed slopes of Zermatt, this architectural masterwork combines hand-cut Swiss stone, reclaimed cedar beams, roaring granite fireplaces, and floor-to-ceiling panoramic glass facing the iconic Matterhorn. Includes a private ski room, cedar sauna, and outdoor heated jacuzzi.",
    specs: { guests: 6, beds: 3, baths: 4, size: "3,800 sq.ft" },
    amenities: ["Ski-in", "Private Pool", "Helipad", "Spa", "Private Chef"],
    gallery: [
      "assets/images/alpine-chalet.jpg",
      "assets/images/hero.jpg"
    ],
    addons: [
      { id: "addon-ski-pass", name: "Unlimited VIP Heliskiing Pass & Guide", price: 850 },
      { id: "addon-sommelier", name: "Private Valais Wine Cellar Tasting", price: 310 },
      { id: "addon-fire-fondue", name: "Artisanal Alpine Truffle Fondue Evening", price: 190 }
    ]
  },
  {
    id: "stay-santorini-cave",
    type: "stay",
    category: "villas",
    title: "Santorini Caldera Cliffside Suite",
    location: "Oia, Santorini, Greece",
    destinationKey: "santorini",
    priceUSD: 1650,
    priceUnit: "night",
    rating: 4.97,
    reviewsCount: 168,
    image: "assets/images/santorini-suite.jpg",
    badge: "Caldera Sunset",
    tagline: "Iconic whitewashed luxury cave suite with cliffside infinity plunge pool",
    description: "Carved gracefully into the steep volcanic cliffs of Oia, this minimalist masterpiece features a private heated infinity pool cantilevered over the Aegean Sea. Sip crisp Assyrtiko wine as you take in the most famous sunset on earth directly from your secluded sun lounger.",
    specs: { guests: 2, beds: 1, baths: 1, size: "1,450 sq.ft" },
    amenities: ["Private Pool", "Oceanfront", "Spa", "Champagne Bar"],
    gallery: [
      "assets/images/santorini-suite.jpg",
      "assets/images/overwater-villa.jpg"
    ],
    addons: [
      { id: "addon-sunset-cruise", name: "Private 4-Hour Sunset Catamaran Tour", price: 480 },
      { id: "addon-helicopter", name: "Helicopter Transfer to Mykonos (One Way)", price: 950 },
      { id: "addon-breakfast", name: "Gourmet Greek Champagne Breakfast on Cliff", price: 120 }
    ]
  },
  {
    id: "service-aurelia-yacht",
    type: "service",
    category: "aviation-yachts",
    title: "Aurelia Superyacht Charter",
    location: "Monaco & French Riviera",
    destinationKey: "monaco",
    priceUSD: 4800,
    priceUnit: "charter",
    rating: 5.0,
    reviewsCount: 52,
    image: "assets/images/private-yacht.jpg",
    badge: "VIP Charter",
    tagline: "115ft sleek tri-deck superyacht with captain, private chef, and sea toys",
    description: "Cruise between Monaco, Saint-Tropez, and Cannes in supreme elegance. Accompanied by a dedicated crew of 6, complete with a jacuzzi on the flybridge, jet skis, sea-bobs, bespoke cocktail bar, and an onboard Michelin-trained private chef serving freshly caught Mediterranean seafood.",
    specs: { guests: 12, beds: 5, baths: 6, size: "115 ft" },
    amenities: ["Oceanfront", "Private Butler", "Michelin Chef", "Champagne Bar"],
    gallery: [
      "assets/images/private-yacht.jpg",
      "assets/images/hero.jpg"
    ],
    addons: [
      { id: "addon-seabob", name: "Full Seabob & E-Foil Hydrofoil Package", price: 450 },
      { id: "addon-vintage-wine", name: "Prestige Grand Cru Burgundy Wine Curation", price: 750 },
      { id: "addon-tender", name: "High-Speed Beach Club Riva Tender Service", price: 300 }
    ]
  },
  {
    id: "service-gulfstream-jet",
    type: "service",
    category: "aviation-yachts",
    title: "Gulfstream G650 Executive Aviation",
    location: "Global / Transcontinental",
    destinationKey: "paris",
    priceUSD: 8500,
    priceUnit: "flight",
    rating: 4.99,
    reviewsCount: 78,
    image: "assets/images/private-jet.jpg",
    badge: "Ultra Long-Range",
    tagline: "Non-stop intercontinental private aviation with custom cabin luxury",
    description: "The pinnacle of private aviation. Travel anywhere worldwide at Mach 0.90 in hand-stitched Connolly leather club suites, ultra-quiet cabin technology, high-speed Ka-band satellite Wi-Fi, and personalized fine dining paired with sommelier-curated champagne.",
    specs: { guests: 14, beds: 6, baths: 2, size: "Cabin: 53 ft" },
    amenities: ["Helipad", "Private Butler", "Michelin Chef", "Champagne Bar"],
    gallery: [
      "assets/images/private-jet.jpg",
      "assets/images/hero.jpg"
    ],
    addons: [
      { id: "addon-tarmac-rolls", name: "Tarmac Rolls-Royce Phantom Chauffeur", price: 650 },
      { id: "addon-caviar-tasting", name: "Imperial Beluga Caviar Flight Service", price: 580 },
      { id: "addon-sleep-suite", name: "Master Suite Cashmere Bedding Setup", price: 250 }
    ]
  },
  {
    id: "stay-paris-montaigne",
    type: "stay",
    category: "penthouses",
    title: "Palais Montaigne Royal Penthouse",
    location: "Paris, Avenue Montaigne, France",
    destinationKey: "paris",
    priceUSD: 3100,
    priceUnit: "night",
    rating: 4.96,
    reviewsCount: 112,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    badge: "Eiffel Views",
    tagline: "Haute couture private residence overlooking the sparkling Eiffel Tower",
    description: "Situated in the beating heart of Paris’ Golden Triangle on Avenue Montaigne. Boasts high ceiling moldings, French herringbone oak parquet, hand-selected contemporary art, Carrara marble bathrooms, and a wrap-around private terrace with front-row views of the Eiffel Tower.",
    specs: { guests: 4, beds: 2, baths: 3, size: "3,200 sq.ft" },
    amenities: ["Oceanfront", "Private Butler", "Spa", "Champagne Bar"],
    gallery: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "assets/images/hero.jpg"
    ],
    addons: [
      { id: "addon-louvre", name: "After-Hours Private Access to the Louvre Museum", price: 1200 },
      { id: "addon-personal-shopper", name: "Avenue Montaigne VIP Personal Stylist", price: 400 },
      { id: "addon-french-baker", name: "Daily In-House Viennoiserie & Pâtisserie Chef", price: 160 }
    ]
  },
  {
    id: "service-michelin-chef",
    type: "service",
    category: "dining",
    title: "3-Star Michelin Chef & Sommelier",
    location: "Available Worldwide in Your Stay",
    destinationKey: "paris",
    priceUSD: 1450,
    priceUnit: "evening",
    rating: 5.0,
    reviewsCount: 89,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    badge: "Culinary Art",
    tagline: "Bespoke 7-course gastronomic journey prepared live in your private residence",
    description: "An extraordinary culinary spectacle right at your villa table. A celebrated Michelin 3-star chef, accompanied by an executive sommelier, designs a bespoke tasting menu tailored to your preferences, utilizing A5 Miyazaki Wagyu, Alba white truffles, and vintage Grand Crus.",
    specs: { guests: 8, beds: 0, baths: 0, size: "Private Dinner" },
    amenities: ["Michelin Chef", "Champagne Bar", "Private Butler"],
    gallery: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
    ],
    addons: [
      { id: "addon-wine-pairing", name: "Grand Cru Burgundy & Bordeaux Pairing", price: 500 },
      { id: "addon-caviar-bump", name: "Rare Ossetra Caviar Canapés & Vodka", price: 320 }
    ]
  },
  {
    id: "stay-kyoto-ryokan",
    type: "stay",
    category: "villas",
    title: "Imperial Arashiyama Heritage Ryokan",
    location: "Kyoto, Japan",
    destinationKey: "kyoto",
    priceUSD: 1950,
    priceUnit: "night",
    rating: 4.99,
    reviewsCount: 130,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    badge: "Private Onsen",
    tagline: "400-year preserved sanctuary nestled amidst sacred bamboo groves and thermal waters",
    description: "Step into an ancient realm of tranquility and refined Japanese craftsmanship. Features fragrant Hinoki cypress wood architecture, tatami mat suites, a secluded outdoor private hot spring onsen overlooking serene koi ponds, and traditional Kaiseki dining.",
    specs: { guests: 4, beds: 2, baths: 2, size: "2,600 sq.ft" },
    amenities: ["Spa", "Private Pool", "Private Butler", "Michelin Chef"],
    gallery: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80"
    ],
    addons: [
      { id: "addon-tea-master", name: "Private Urasenke Zen Tea Master Ceremony", price: 260 },
      { id: "addon-monk-walk", name: "Early Morning VIP Access to Golden Pavilion", price: 350 }
    ]
  },
  {
    id: "service-thermal-spa",
    type: "service",
    category: "wellness",
    title: "Holistic Alpine Thermal Spa Retreat",
    location: "St. Moritz, Switzerland",
    destinationKey: "zermatt",
    priceUSD: 980,
    priceUnit: "session",
    rating: 4.95,
    reviewsCount: 64,
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    badge: "Restorative",
    tagline: "Thermal mineral pools, cryotherapy chambers, and epigenetic wellness therapy",
    description: "Rejuvenate body and mind under the guidance of world-class longevity physicians. Includes natural thermal spring immersion, whole-body cryotherapy, Tibetan singing bowl sound baths, and customized antioxidant intravenous infusions.",
    specs: { guests: 2, beds: 0, baths: 2, size: "Day Retreat" },
    amenities: ["Spa", "Private Pool"],
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    addons: [
      { id: "addon-cryo", name: "Sub-Zero Cryotherapy & Oxygen Chamber", price: 180 },
      { id: "addon-nad", name: "Customized Cellular Longevity Infusion", price: 290 }
    ]
  },
  {
    id: "stay-tuscany-estate",
    type: "stay",
    category: "villas",
    title: "Villa Di Bellosguardo Wine Estate",
    location: "Florence, Tuscany, Italy",
    destinationKey: "florence",
    priceUSD: 2800,
    priceUnit: "night",
    rating: 4.97,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    badge: "Historic Estate",
    tagline: "16th-century Renaissance villa set amidst 40 acres of private Chianti vineyards",
    description: "Surrounded by silver olive groves and rolling cypress hills just outside Florence. Features frescoed vaulted ceilings, a private wine cellar, heated stone infinity pool overlooking the Duomo cathedral in the distance, and vintage Vespa tours.",
    specs: { guests: 10, beds: 5, baths: 6, size: "6,500 sq.ft" },
    amenities: ["Private Pool", "Helipad", "Private Chef", "Private Butler"],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    addons: [
      { id: "addon-truffle-hunt", name: "Tuscan Forest Truffle Hunting with Dogs", price: 340 },
      { id: "addon-chianti-cask", name: "Private Cask Selection & Bottling", price: 450 }
    ]
  },
  {
    id: "service-ferrari-chauffeur",
    type: "service",
    category: "aviation-yachts",
    title: "Ferrari 296 GTB & Supercar Chauffeur",
    location: "Milan, Lake Como & Riviera",
    destinationKey: "monaco",
    priceUSD: 1600,
    priceUnit: "day",
    rating: 4.98,
    reviewsCount: 71,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    badge: "Supercar",
    tagline: "Bespoke high-performance supercar driving experience along scenic alpine passes",
    description: "Unleash 819 horsepower along the winding panoramic mountain roads above Lake Como or the French Riviera. Opt to drive yourself with a chase-car escort or relax as a professional security chauffeur steers you to your destination in grand tourer comfort.",
    specs: { guests: 2, beds: 0, baths: 0, size: "Supercar" },
    amenities: ["Helipad", "VIP Access"],
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
    ],
    addons: [
      { id: "addon-monza-track", name: "Monza Formula 1 Circuit Private Hot Laps", price: 950 },
      { id: "addon-drone-footage", name: "Cinematic 4K Drone Driving Video", price: 320 }
    ]
  }
];

// Dynamic Catalog Storage with Persistent LocalStorage
let CATALOG_DATA = loadCatalog();

function loadCatalog() {
  try {
    const saved = localStorage.getItem("aura_catalog_data");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.error("Error loading catalog from localStorage", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_CATALOG_DATA));
}

function saveCatalog() {
  localStorage.setItem("aura_catalog_data", JSON.stringify(CATALOG_DATA));
  renderCatalog();
  renderAdminCatalog();
  updateAdminBadges();
}

// Payment Methods Configuration & Gateways
const DEFAULT_PAYMENT_CONFIG = {
  taxRate: 0.12, // 12% Luxury Hospitality Tax
  serviceFee: 0,
  testMode: true,
  ownerPin: "admin123", // Master Security PIN
  methods: {
    card: {
      id: "card",
      name: "Credit / Debit Card (Stripe)",
      icon: "💳",
      enabled: true,
      publishableKey: "pk_test_51MzLuxeVIPDemoKey00000000000000",
      secretKey: "sk_test_••••••••••••••••••••••••••••",
      mode: "test"
    },
    paypal: {
      id: "paypal",
      name: "PayPal",
      icon: "🅿️",
      enabled: true,
      businessEmail: "concierge-billing@auraluxe.com",
      clientId: "sb-client-id-demo-aura-luxe",
      mode: "sandbox"
    },
    applepay: {
      id: "applepay",
      name: "Apple Pay & G Pay",
      icon: "",
      enabled: true,
      merchantId: "merchant.luxury.auraluxe"
    },
    wire: {
      id: "wire",
      name: "VIP Direct Bank Wire / Escrow",
      icon: "🏛️",
      enabled: true,
      bankName: "Banque Privée Edmond de Rothschild / JPMorgan Private",
      accountName: "Aura Luxe Private Client Escrow SA",
      iban: "CH93 0876 5432 1098 7654 3",
      swift: "EDROCHGGXXX",
      routingNumber: "021000021",
      instructions: "Direct bank wire transfers are held in client escrow until concierge verification. Payment due within 48 hours."
    },
    crypto: {
      id: "crypto",
      name: "Cryptocurrency (USDT/BTC/ETH)",
      icon: "💎",
      enabled: true,
      usdtAddress: "0x71C66B9eA166A841EdeD4255E1D3Fe948B012111",
      btcAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
      ethAddress: "0x32Be343B94f860124dC4fEe278FDCBD38C102D88",
      network: "ERC-20, TRC-20 & Native Bitcoin"
    }
  }
};

let PAYMENT_CONFIG = loadPaymentConfig();

function loadPaymentConfig() {
  try {
    const saved = localStorage.getItem("aura_payment_config");
    if (saved) return JSON.parse(saved);
  } catch (e) {
    console.error("Error loading payment config", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_PAYMENT_CONFIG));
}

function savePaymentConfig() {
  localStorage.setItem("aura_payment_config", JSON.stringify(PAYMENT_CONFIG));
  if (APP_STATE.currentModalItem) recalculateModalPricing();
}

// ==========================================
// 2. APPLICATION STATE
// ==========================================
const APP_STATE = {
  category: "all",
  searchQuery: "",
  checkIn: "",
  checkOut: "",
  guests: "2",
  maxPrice: 10000,
  activeAmenity: null,
  sortBy: "recommended",
  currency: "USD",
  currencyRates: {
    USD: 1,
    EUR: 0.92,
    GBP: 0.79,
    JPY: 154.5,
    AED: 3.67
  },
  currencySymbols: {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    AED: "AED "
  },
  wishlist: JSON.parse(localStorage.getItem("aura_wishlist") || "[]"),
  bookings: JSON.parse(localStorage.getItem("aura_bookings") || "[]"),
  theme: localStorage.getItem("aura_theme") || "dark",
  isOwnerAuthenticated: false,
  ownerMode: localStorage.getItem("aura_owner_mode") === "true",
  adminTab: "catalog",
  checkoutPaymentMethod: "card",
  editingItemId: null,
  currentModalItem: null,
  activeAddons: new Set(),
  discountRate: 0,
  appliedPromo: null
};

// ==========================================
// 3. INITIALIZATION & DOM CACHE
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initDates();
  checkOwnerAuthentication();
  renderCatalog();
  updateWishlistCount();
  updateBookingsCount();
  updateAdminBadges();
  setupEventListeners();
  setupConciergeChat();
  setupAdminShortcuts();
});

// Format Price with chosen currency
function formatCurrency(amountUSD) {
  const rate = APP_STATE.currencyRates[APP_STATE.currency] || 1;
  const converted = Math.round(amountUSD * rate);
  const symbol = APP_STATE.currencySymbols[APP_STATE.currency] || "$";
  return `${symbol}${converted.toLocaleString()}`;
}

// Set default dates (Today + 3, Today + 7)
function initDates() {
  const today = new Date();
  const checkIn = new Date(today);
  checkIn.setDate(today.getDate() + 3);
  const checkOut = new Date(today);
  checkOut.setDate(today.getDate() + 7);

  const format = (d) => d.toISOString().split("T")[0];
  APP_STATE.checkIn = format(checkIn);
  APP_STATE.checkOut = format(checkOut);

  const dockIn = document.getElementById("dockCheckIn");
  const dockOut = document.getElementById("dockCheckOut");
  if (dockIn) dockIn.value = APP_STATE.checkIn;
  if (dockOut) dockOut.value = APP_STATE.checkOut;
}

// Theme handling
function initTheme() {
  document.documentElement.setAttribute("data-theme", APP_STATE.theme);
  const btn = document.getElementById("themeToggleBtn");
  if (btn) {
    btn.innerHTML = APP_STATE.theme === "dark" 
      ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
      : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

function toggleTheme() {
  APP_STATE.theme = APP_STATE.theme === "dark" ? "light" : "dark";
  localStorage.setItem("aura_theme", APP_STATE.theme);
  initTheme();
  showToast(`Switched to ${APP_STATE.theme.toUpperCase()} mode`);
}

// ==========================================
// 4. RENDER CATALOG (FILTER & SORT)
// ==========================================
function getFilteredCatalog() {
  return CATALOG_DATA.filter(item => {
    // Category match
    if (APP_STATE.category !== "all" && item.category !== APP_STATE.category) {
      if (APP_STATE.category === "stays" && item.type !== "stay") return false;
      if (APP_STATE.category === "services" && item.type !== "service") return false;
      if (APP_STATE.category !== "stays" && APP_STATE.category !== "services" && item.category !== APP_STATE.category) {
        return false;
      }
    }

    // Search query match
    if (APP_STATE.searchQuery.trim()) {
      const q = APP_STATE.searchQuery.toLowerCase();
      const match = item.title.toLowerCase().includes(q) ||
                    item.location.toLowerCase().includes(q) ||
                    item.destinationKey.toLowerCase().includes(q) ||
                    item.description.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Max price
    if (item.priceUSD > APP_STATE.maxPrice) return false;

    // Amenity filter
    if (APP_STATE.activeAmenity && !item.amenities.includes(APP_STATE.activeAmenity)) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (APP_STATE.sortBy === "rating") return b.rating - a.rating;
    if (APP_STATE.sortBy === "price-low") return a.priceUSD - b.priceUSD;
    if (APP_STATE.sortBy === "price-high") return b.priceUSD - a.priceUSD;
    return b.reviewsCount - a.reviewsCount; // recommended
  });
}

function renderCatalog() {
  const grid = document.getElementById("listingsGrid");
  const countEl = document.getElementById("catalogCount");
  if (!grid) return;

  const filtered = getFilteredCatalog();
  if (countEl) countEl.innerText = `${filtered.length} curations available`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 70px 20px;">
        <div style="font-size: 3rem; margin-bottom: 16px;">✦</div>
        <h3 style="font-size: 1.6rem; margin-bottom: 10px;">No exact curations match your criteria</h3>
        <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 24px;">
          Try adjusting your price filter, expanding your destination search, or clear filters to view our full collection.
        </p>
        <button class="btn btn-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isSaved = APP_STATE.wishlist.includes(item.id);
    const formattedPrice = formatCurrency(item.priceUSD);
    const amenitiesBadges = item.amenities.slice(0, 3).map(a => `<span class="amenity-tag">${a}</span>`).join("");

    return `
      <article class="stay-card" data-id="${item.id}">
        <div class="card-media">
          <button class="card-owner-badge" onclick="openQuickPriceEdit('${item.id}', event)" title="Owner: Click to Edit Price">
            ✏️ ${formattedPrice}
          </button>
          <img src="${item.image}" alt="${item.title}" class="card-img" loading="lazy" />
          <span class="card-badge-top">${item.badge}</span>
          <button class="card-wishlist-btn ${isSaved ? 'active' : ''}" 
                  onclick="toggleWishlist('${item.id}', event)" 
                  title="${isSaved ? 'Remove from wishlist' : 'Add to wishlist'}"
                  aria-label="Wishlist toggle">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <div class="card-location">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              ${item.location}
            </div>
            <div class="card-rating">
              ★ ${item.rating} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${item.reviewsCount})</span>
            </div>
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-desc">${item.tagline}</p>
          <div class="card-amenities">${amenitiesBadges}</div>
          <div class="card-footer-row">
            <div class="card-price-block">
              <span class="price-unit">Starting From / ${item.priceUnit}</span>
              <div class="price-amount">${formattedPrice} <span>*</span></div>
            </div>
            <button class="btn btn-primary" onclick="openDetailModal('${item.id}')">
              Reserve Experience
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function resetFilters() {
  APP_STATE.category = "all";
  APP_STATE.searchQuery = "";
  APP_STATE.maxPrice = 10000;
  APP_STATE.activeAmenity = null;
  APP_STATE.sortBy = "recommended";

  const searchInput = document.getElementById("dockSearch");
  const priceSlider = document.getElementById("priceSlider");
  const sortSelect = document.getElementById("sortSelector");
  if (searchInput) searchInput.value = "";
  if (priceSlider) priceSlider.value = 10000;
  if (sortSelect) sortSelect.value = "recommended";

  document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
  const allPill = document.querySelector('.category-pill[data-category="all"]');
  if (allPill) allPill.classList.add("active");

  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));

  renderCatalog();
  showToast("Filters reset to default");
}

// ==========================================
// 5. DETAIL & BOOKING MODAL
// ==========================================
function openDetailModal(id) {
  const item = CATALOG_DATA.find(i => i.id === id);
  if (!item) return;

  APP_STATE.currentModalItem = item;
  APP_STATE.activeAddons.clear();
  APP_STATE.discountRate = 0;
  APP_STATE.appliedPromo = null;

  const modal = document.getElementById("detailModal");
  const modalImg = document.getElementById("modalGalleryImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalLoc = document.getElementById("modalLocation");
  const modalDesc = document.getElementById("modalDescription");
  const modalSpecs = document.getElementById("modalSpecs");
  const modalAddons = document.getElementById("modalAddons");

  modalImg.src = item.image;
  modalTitle.innerText = item.title;
  modalLoc.innerHTML = `
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
    ${item.location} • <span style="color:#ffc107">★ ${item.rating} (${item.reviewsCount} reviews)</span>
  `;
  modalDesc.innerText = item.description;

  // Specs
  modalSpecs.innerHTML = `
    <div class="spec-item">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      ${item.specs.guests} Guests
    </div>
    <div class="spec-item">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M6 12h12"/></svg>
      ${item.specs.beds} Beds
    </div>
    <div class="spec-item">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 6h.01"/><circle cx="12" cy="5" r="2"/></svg>
      ${item.specs.baths} Bathrooms
    </div>
    <div class="spec-item">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
      ${item.specs.size}
    </div>
  `;

  // Add-ons list
  if (item.addons && item.addons.length > 0) {
    modalAddons.innerHTML = `
      <h4>Enhance Your Experience</h4>
      ${item.addons.map(addon => `
        <div class="addon-row">
          <label class="addon-left" for="${addon.id}">
            <input type="checkbox" id="${addon.id}" onchange="toggleModalAddon('${addon.id}', ${addon.price})">
            <span class="addon-name">${addon.name}</span>
          </label>
          <span class="addon-price">+${formatCurrency(addon.price)}</span>
        </div>
      `).join("")}
    `;
  } else {
    modalAddons.innerHTML = "";
  }

  // Pre-fill dates
  const modalIn = document.getElementById("modalCheckIn");
  const modalOut = document.getElementById("modalCheckOut");
  if (modalIn) modalIn.value = APP_STATE.checkIn;
  if (modalOut) modalOut.value = APP_STATE.checkOut;

  renderCheckoutPaymentMethods();
  recalculateModalPricing();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(modalId = "detailModal") {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function toggleModalAddon(addonId, price) {
  if (APP_STATE.activeAddons.has(addonId)) {
    APP_STATE.activeAddons.delete(addonId);
  } else {
    APP_STATE.activeAddons.add(addonId);
  }
  recalculateModalPricing();
}

function calculateNights() {
  const inVal = document.getElementById("modalCheckIn")?.value || APP_STATE.checkIn;
  const outVal = document.getElementById("modalCheckOut")?.value || APP_STATE.checkOut;
  if (!inVal || !outVal) return 1;

  const d1 = new Date(inVal);
  const d2 = new Date(outVal);
  const diffTime = Math.abs(d2 - d1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 1;
}

function recalculateModalPricing() {
  const item = APP_STATE.currentModalItem;
  if (!item) return;

  const nights = calculateNights();
  const baseTotal = item.priceUSD * (item.type === "stay" ? nights : 1);

  // Addons total
  let addonsTotal = 0;
  if (item.addons) {
    item.addons.forEach(a => {
      if (APP_STATE.activeAddons.has(a.id)) {
        addonsTotal += a.price;
      }
    });
  }

  const subtotal = baseTotal + addonsTotal;
  const discountAmount = subtotal * APP_STATE.discountRate;
  const taxRate = PAYMENT_CONFIG.taxRate !== undefined ? PAYMENT_CONFIG.taxRate : 0.12;
  const tax = Math.round((subtotal - discountAmount) * taxRate);
  const grandTotal = Math.round(subtotal - discountAmount + tax);

  const rateEl = document.getElementById("modalRate");
  if (rateEl) rateEl.innerText = formatCurrency(item.priceUSD);
  
  const baseLabel = document.getElementById("costBaseLabel");
  if (baseLabel) baseLabel.innerText = `${item.title} (${nights} ${item.priceUnit}s)`;
  
  const baseVal = document.getElementById("costBaseVal");
  if (baseVal) baseVal.innerText = formatCurrency(baseTotal);
  
  const addonsVal = document.getElementById("costAddonsVal");
  if (addonsVal) addonsVal.innerText = formatCurrency(addonsTotal);
  
  const taxVal = document.getElementById("costTaxVal");
  if (taxVal) {
    taxVal.innerText = formatCurrency(tax);
    const taxLabelRow = taxVal.previousElementSibling;
    if (taxLabelRow) taxLabelRow.innerText = `Hospitality & Luxury Tourism Tax (${Math.round(taxRate * 100)}%)`;
  }

  const discountRow = document.getElementById("costDiscountRow");
  if (discountRow) {
    if (APP_STATE.discountRate > 0) {
      discountRow.style.display = "flex";
      const discVal = document.getElementById("costDiscountVal");
      if (discVal) discVal.innerText = `-${formatCurrency(discountAmount)}`;
    } else {
      discountRow.style.display = "none";
    }
  }

  const grandTotalEl = document.getElementById("costGrandTotal");
  if (grandTotalEl) grandTotalEl.innerText = formatCurrency(grandTotal);

  // Update dynamic submit button text
  const submitBtn = document.getElementById("confirmPaymentBtn");
  if (submitBtn) {
    const formattedGrand = formatCurrency(grandTotal);
    const curMethod = APP_STATE.checkoutPaymentMethod || "card";
    if (curMethod === "card") {
      submitBtn.innerHTML = `Pay ${formattedGrand} with Card &bull; 🔒 Guaranteed`;
    } else if (curMethod === "paypal") {
      submitBtn.innerHTML = `Proceed to PayPal (${formattedGrand})`;
    } else if (curMethod === "applepay") {
      submitBtn.innerHTML = `Pay ${formattedGrand} with Pay`;
    } else if (curMethod === "wire") {
      submitBtn.innerHTML = `Confirm Wire Reservation (${formattedGrand})`;
    } else if (curMethod === "crypto") {
      submitBtn.innerHTML = `Confirm Crypto Payment (${formattedGrand})`;
    }
  }
}

function applyPromoCode() {
  const input = document.getElementById("promoInput");
  const code = input?.value.trim().toUpperCase();

  if (code === "LUXE2026") {
    APP_STATE.discountRate = 0.15;
    APP_STATE.appliedPromo = "LUXE2026 (15% VIP Privileges)";
    showToast("Promo LUXE2026 applied: 15% discount!");
  } else if (code === "AURA100") {
    APP_STATE.discountRate = 0.10;
    APP_STATE.appliedPromo = "AURA100 (10% Welcome Credit)";
    showToast("Promo AURA100 applied: 10% discount!");
  } else if (code === "HORIZON") {
    APP_STATE.discountRate = 0.20;
    APP_STATE.appliedPromo = "HORIZON (20% Founder Circle)";
    showToast("Promo HORIZON applied: 20% discount!");
  } else {
    showToast("Invalid promo code. Try 'LUXE2026' or 'HORIZON'");
    return;
  }
  recalculateModalPricing();
}

// Complete Booking Reservation Flow with Payment Processing
function confirmReservation(event) {
  if (event) event.preventDefault();
  const item = APP_STATE.currentModalItem;
  if (!item) return;

  const guestName = document.getElementById("guestName")?.value.trim() || "Distinguished Guest";
  const guestEmail = document.getElementById("guestEmail")?.value.trim() || "guest@luxe.com";
  
  if (!guestName || !guestEmail) {
    showToast("Please provide your name and email address for reservation confirmation.");
    return;
  }

  const methodKey = APP_STATE.checkoutPaymentMethod || "card";
  let paymentBadgeName = "Credit Card";
  let txnPrefix = "ST";
  let paymentDetails = "";
  let paymentStatus = "Paid & Settled";

  // Validate specific payment method inputs
  if (methodKey === "card") {
    const cardNum = document.getElementById("checkoutCardNumber")?.value.replace(/\s+/g, '') || "4242424242424242";
    const cardExp = document.getElementById("checkoutCardExp")?.value.trim() || "12/28";
    const cardCvc = document.getElementById("checkoutCardCvc")?.value.trim() || "888";
    const last4 = cardNum.slice(-4) || "4242";
    
    txnPrefix = "ST";
    paymentBadgeName = `Card (•••• ${last4})`;
    paymentDetails = `Stripe ${PAYMENT_CONFIG.testMode ? '[Test Mode]' : '[Live]'} &bull; Card ending in ${last4}`;
    paymentStatus = "Paid & Settled (Stripe)";
  } else if (methodKey === "paypal") {
    txnPrefix = "PP";
    paymentBadgeName = "PayPal";
    paymentDetails = `PayPal Account: ${guestEmail} &bull; Merchant: ${PAYMENT_CONFIG.methods.paypal.businessEmail || "Aura Luxe"}`;
    paymentStatus = "Paid & Confirmed (PayPal)";
  } else if (methodKey === "applepay") {
    txnPrefix = "AP";
    paymentBadgeName = "Apple Pay";
    paymentDetails = `Apple Pay Biometric Token: •••• 9821`;
    paymentStatus = "Paid & Settled (Apple Pay)";
  } else if (methodKey === "wire") {
    txnPrefix = "WIRE";
    paymentBadgeName = "Bank Wire Escrow";
    paymentDetails = `Wire to: ${PAYMENT_CONFIG.methods.wire.bankName} &bull; IBAN: ${PAYMENT_CONFIG.methods.wire.iban}`;
    paymentStatus = "Awaiting Wire Transfer (48h Escrow Hold)";
  } else if (methodKey === "crypto") {
    txnPrefix = "CRYPTO";
    paymentBadgeName = "Cryptocurrency";
    paymentDetails = `USDT/ETH Network Transfer &bull; Client Wallet Verification`;
    paymentStatus = "Crypto Pending Confirmation";
  }

  const nights = calculateNights();
  const confirmationCode = "AUR-" + Math.floor(100000 + Math.random() * 900000);
  const txnId = `TXN-${txnPrefix}-${Math.floor(100000 + Math.random() * 900000)}`;
  const totalStr = document.getElementById("costGrandTotal")?.innerText || "$0";

  const newBooking = {
    id: confirmationCode,
    txnId: txnId,
    itemId: item.id,
    title: item.title,
    location: item.location,
    image: item.image,
    checkIn: document.getElementById("modalCheckIn")?.value || APP_STATE.checkIn,
    checkOut: document.getElementById("modalCheckOut")?.value || APP_STATE.checkOut,
    nights: nights,
    guestName: guestName,
    guestEmail: guestEmail,
    total: totalStr,
    bookingDate: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    paymentMethod: paymentBadgeName,
    paymentDetails: paymentDetails,
    status: paymentStatus
  };

  APP_STATE.bookings.unshift(newBooking);
  localStorage.setItem("aura_bookings", JSON.stringify(APP_STATE.bookings));
  updateBookingsCount();
  updateAdminBadges();

  // Show Confirmation Receipt inside modal
  const checkoutCard = document.getElementById("modalCheckoutCard");
  checkoutCard.innerHTML = `
    <div style="text-align: center; padding: 16px 0;">
      <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(16,185,129,0.15); border: 2px solid var(--accent-emerald); color: var(--accent-emerald); font-size: 1.6rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px;">
        ✓
      </div>
      <span style="color: var(--accent-gold); font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.15em; font-weight: 700;">Reservation Confirmed</span>
      <h3 style="font-size: 1.35rem; margin: 4px 0 10px;">Welcome to Aura Luxe</h3>
      <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 16px;">
        Thank you, <strong>${guestName}</strong>. Your luxury booking has been confirmed and locked. A formal receipt and itinerary has been dispatched to <strong>${guestEmail}</strong>.
      </p>
      
      <div style="background: rgba(255,255,255,0.04); border: 1px dashed var(--border-gold); border-radius: var(--radius-sm); padding: 14px; margin-bottom: 16px; text-align: left; font-size: 0.82rem;">
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
          <span style="color:var(--text-muted);">Confirmation Code:</span>
          <strong style="color:var(--accent-gold); letter-spacing: 0.05em;">${confirmationCode}</strong>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
          <span style="color:var(--text-muted);">Transaction ID:</span>
          <span style="font-family: monospace; color: var(--accent-gold-light);">${txnId}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
          <span style="color:var(--text-muted);">Payment Method:</span>
          <span style="color: var(--text-primary); font-weight: 600;">${paymentBadgeName}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
          <span style="color:var(--text-muted);">Status:</span>
          <span style="color: var(--accent-emerald); font-weight: 700;">${paymentStatus}</span>
        </div>
        <div style="display:flex; justify-content:space-between; margin-bottom: 6px;">
          <span style="color:var(--text-muted);">Itinerary Dates:</span>
          <span>${newBooking.checkIn} to ${newBooking.checkOut}</span>
        </div>
        <div style="display:flex; justify-content:space-between; border-top: 1px solid var(--border-subtle); padding-top: 6px; margin-top: 4px;">
          <span style="color:var(--text-muted);">Total Paid / Charged:</span>
          <strong style="color:var(--accent-gold); font-size: 0.95rem;">${totalStr}</strong>
        </div>
      </div>

      ${methodKey === "wire" ? `
        <div class="wire-details-box" style="text-align: left; margin-bottom: 16px;">
          <strong style="color: var(--accent-gold);">🏛️ VIP Wire Escrow Instructions</strong>
          <span>Please initiate transfer within 48h referencing <strong>${confirmationCode}</strong>.</span>
          <div style="font-family: monospace; font-size: 0.76rem; color: var(--text-secondary); margin-top: 4px;">
            Bank: ${PAYMENT_CONFIG.methods.wire.bankName}<br>
            IBAN: ${PAYMENT_CONFIG.methods.wire.iban}<br>
            SWIFT: ${PAYMENT_CONFIG.methods.wire.swift}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; gap: 8px; flex-direction: column;">
        <button class="btn btn-primary" onclick="openDrawer('bookings'); closeModal('detailModal');">
          View in My Bookings
        </button>
        <button class="btn btn-secondary" onclick="window.print()">
          Print / Download Official Voucher
        </button>
      </div>
    </div>
  `;

  showToast(`Booking ${confirmationCode} confirmed via ${paymentBadgeName}!`);
}

// ==========================================
// 6. WISHLIST & BOOKINGS DRAWERS
// ==========================================
function toggleWishlist(id, event) {
  if (event) event.stopPropagation();

  const idx = APP_STATE.wishlist.indexOf(id);
  if (idx > -1) {
    APP_STATE.wishlist.splice(idx, 1);
    showToast("Removed from Wishlist");
  } else {
    APP_STATE.wishlist.push(id);
    showToast("Saved to your Wishlist collection");
  }

  localStorage.setItem("aura_wishlist", JSON.stringify(APP_STATE.wishlist));
  updateWishlistCount();
  renderCatalog();
  renderWishlistDrawer();
}

function updateWishlistCount() {
  const el = document.getElementById("wishlistCountBadge");
  if (el) el.innerText = APP_STATE.wishlist.length;
}

function updateBookingsCount() {
  const el = document.getElementById("bookingsCountBadge");
  if (el) el.innerText = APP_STATE.bookings.length;
}

function openDrawer(type) {
  const overlay = document.getElementById("drawerOverlay");
  const title = document.getElementById("drawerTitle");
  const body = document.getElementById("drawerBody");

  if (type === "wishlist") {
    title.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent-gold)" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      Saved Wishlist (${APP_STATE.wishlist.length})
    `;
    renderWishlistDrawer();
  } else {
    title.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
      My Reservations (${APP_STATE.bookings.length})
    `;
    renderBookingsDrawer();
  }

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  const overlay = document.getElementById("drawerOverlay");
  if (overlay) overlay.classList.remove("active");
  document.body.style.overflow = "auto";
}

function renderWishlistDrawer() {
  const body = document.getElementById("drawerBody");
  if (!body) return;

  const items = CATALOG_DATA.filter(i => APP_STATE.wishlist.includes(i.id));

  if (items.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">♡</div>
        <h4>Your Wishlist is Empty</h4>
        <p style="font-size: 0.88rem; margin: 8px 0 18px;">Click the heart icon on any villa, penthouse, or concierge service to save it here.</p>
        <button class="btn btn-secondary" onclick="closeDrawer()">Browse Collection</button>
      </div>
    `;
    return;
  }

  body.innerHTML = items.map(item => `
    <div class="drawer-item-card">
      <img src="${item.image}" alt="${item.title}" class="drawer-item-img" />
      <div class="drawer-item-info">
        <h4 class="drawer-item-title">${item.title}</h4>
        <div class="drawer-item-sub">${item.location}</div>
        <div class="drawer-item-price">${formatCurrency(item.priceUSD)} / ${item.priceUnit}</div>
        <button class="btn btn-primary" style="padding: 6px 14px; font-size: 0.78rem; margin-top: 8px; width: fit-content;"
                onclick="closeDrawer(); openDetailModal('${item.id}');">
          Book Now
        </button>
      </div>
      <button class="drawer-item-remove" onclick="toggleWishlist('${item.id}')" title="Remove">✕</button>
    </div>
  `).join("");
}

function renderBookingsDrawer() {
  const body = document.getElementById("drawerBody");
  if (!body) return;

  if (APP_STATE.bookings.length === 0) {
    body.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">✦</div>
        <h4>No Active Reservations</h4>
        <p style="font-size: 0.88rem; margin: 8px 0 18px;">You haven't reserved any stays or private services yet. Your confirmed bookings will appear here.</p>
        <button class="btn btn-secondary" onclick="closeDrawer()">Explore Stays & Services</button>
      </div>
    `;
    return;
  }

  body.innerHTML = APP_STATE.bookings.map(b => `
    <div class="drawer-item-card" style="flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 12px; align-items: center;">
        <img src="${b.image}" alt="${b.title}" style="width: 70px; height: 60px; border-radius: 8px; object-fit: cover;" />
        <div>
          <div style="font-size: 0.72rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase;">${b.id}</div>
          <h4 style="font-size: 0.95rem; font-weight: 700;">${b.title}</h4>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${b.location}</span>
        </div>
      </div>
      
      <div style="background: rgba(255,255,255,0.03); padding: 10px; border-radius: 6px; font-size: 0.8rem; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">Dates:</span>
          <span>${b.checkIn} → ${b.checkOut} (${b.nights} nights)</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">Guest:</span>
          <span>${b.guestName}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span style="color: var(--text-muted);">Status:</span>
          <span style="color: var(--accent-emerald); font-weight: 700;">${b.status}</span>
        </div>
        <div style="display: flex; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 4px; margin-top: 2px;">
          <span style="color: var(--text-muted);">Total:</span>
          <strong style="color: var(--accent-gold);">${b.total}</strong>
        </div>
      </div>

      <div style="display: flex; gap: 8px; justify-content: flex-end;">
        <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.76rem;" onclick="cancelBooking('${b.id}')">
          Cancel Reservation
        </button>
      </div>
    </div>
  `).join("");
}

function cancelBooking(bookingId) {
  if (confirm(`Are you sure you wish to cancel reservation ${bookingId}?`)) {
    APP_STATE.bookings = APP_STATE.bookings.filter(b => b.id !== bookingId);
    localStorage.setItem("aura_bookings", JSON.stringify(APP_STATE.bookings));
    updateBookingsCount();
    renderBookingsDrawer();
    showToast(`Reservation ${bookingId} cancelled.`);
  }
}

// ==========================================
// 7. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Category Pills
  document.querySelectorAll(".category-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      APP_STATE.category = pill.getAttribute("data-category") || "all";
      renderCatalog();
    });
  });

  // Dock Search
  const searchInput = document.getElementById("dockSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      APP_STATE.searchQuery = e.target.value;
      renderCatalog();
    });
  }

  // Price Slider
  const priceSlider = document.getElementById("priceSlider");
  const priceDisplay = document.getElementById("priceSliderVal");
  if (priceSlider) {
    priceSlider.addEventListener("input", (e) => {
      APP_STATE.maxPrice = Number(e.target.value);
      if (priceDisplay) priceDisplay.innerText = formatCurrency(APP_STATE.maxPrice);
      renderCatalog();
    });
  }

  // Amenity Chips
  document.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const amenity = chip.getAttribute("data-amenity");
      if (APP_STATE.activeAmenity === amenity) {
        APP_STATE.activeAmenity = null;
        chip.classList.remove("active");
      } else {
        document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        APP_STATE.activeAmenity = amenity;
      }
      renderCatalog();
    });
  });

  // Sort Selector
  const sortSelect = document.getElementById("sortSelector");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      APP_STATE.sortBy = e.target.value;
      renderCatalog();
    });
  }

  // Currency Selector
  const currencySelect = document.getElementById("currencySelector");
  if (currencySelect) {
    currencySelect.addEventListener("change", (e) => {
      APP_STATE.currency = e.target.value;
      renderCatalog();
      if (APP_STATE.currentModalItem) recalculateModalPricing();
      showToast(`Currency updated to ${APP_STATE.currency}`);
    });
  }

  // Modal Dates Change
  const modalIn = document.getElementById("modalCheckIn");
  const modalOut = document.getElementById("modalCheckOut");
  if (modalIn) modalIn.addEventListener("change", recalculateModalPricing);
  if (modalOut) modalOut.addEventListener("change", recalculateModalPricing);

  // Bespoke form submission
  const bespokeForm = document.getElementById("bespokeForm");
  if (bespokeForm) {
    bespokeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Bespoke request received! A private concierge will contact you within 2 hours.");
      bespokeForm.reset();
    });
  }

  // Newsletter form submission
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast("Welcome to Aura Privé! Check your inbox for your 15% VIP invitation code.");
      newsletterForm.reset();
    });
  }

  // Navbar scroll background
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });
}

// ==========================================
// 8. INTERACTIVE 24/7 AI LUXURY CONCIERGE CHAT
// ==========================================
function setupConciergeChat() {
  const toggle = document.getElementById("chatToggleBtn");
  const box = document.getElementById("chatBoxWidget");
  const close = document.getElementById("chatCloseBtn");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const msgContainer = document.getElementById("chatMessages");

  if (!toggle || !box) return;

  toggle.addEventListener("click", () => {
    box.classList.toggle("active");
  });

  if (close) {
    close.addEventListener("click", () => {
      box.classList.remove("active");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;

      // Add user message
      appendChatMessage(text, "user");
      input.value = "";

      // Simulate AI concierge thinking & replying
      setTimeout(() => {
        const reply = generateConciergeReply(text);
        appendChatMessage(reply, "bot");
      }, 700);
    });
  }
}

function appendChatMessage(text, sender = "bot") {
  const msgContainer = document.getElementById("chatMessages");
  if (!msgContainer) return;

  const bubble = document.createElement("div");
  bubble.className = `chat-bubble ${sender}`;
  bubble.innerHTML = text;
  msgContainer.appendChild(bubble);
  msgContainer.scrollTop = msgContainer.scrollHeight;
}

function generateConciergeReply(query) {
  const q = query.toLowerCase();

  if (q.includes("romantic") || q.includes("honeymoon") || q.includes("couple")) {
    return `For an unforgettable romantic escape, I wholeheartedly recommend the <strong>Santorini Caldera Cliffside Suite</strong> or our <strong>Overwater Azure Sanctuary</strong> in Bora Bora. Both feature private sunset plunge pools and dedicated champagne service. <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; margin-top:6px;" onclick="openDetailModal('stay-santorini-cave')">Inspect Santorini Suite</button>`;
  }

  if (q.includes("jet") || q.includes("aviation") || q.includes("fly") || q.includes("flight")) {
    return `We offer non-stop transcontinental routing on our <strong>Gulfstream G650</strong> private aircraft, complete with custom staterooms and Michelin dining onboard. <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; margin-top:6px;" onclick="openDetailModal('service-gulfstream-jet')">View Private Jet Details</button>`;
  }

  if (q.includes("ski") || q.includes("snow") || q.includes("chalet") || q.includes("alps") || q.includes("mountain")) {
    return `The <strong>Matterhorn Royal Alpine Chalet</strong> in Zermatt offers ski-in/ski-out access, a private cedar sauna, and roaring stone fireplaces facing the Matterhorn. <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; margin-top:6px;" onclick="openDetailModal('stay-zermatt-chalet')">Explore Alpine Chalet</button>`;
  }

  if (q.includes("yacht") || q.includes("boat") || q.includes("monaco") || q.includes("riviera")) {
    return `Our 115-foot <strong>Aurelia Superyacht Charter</strong> accommodates up to 12 guests with a crew of 6, deck jacuzzi, and private chef throughout Monaco and Saint-Tropez. <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; margin-top:6px;" onclick="openDetailModal('service-aurelia-yacht')">Charter Aurelia</button>`;
  }

  if (q.includes("chef") || q.includes("food") || q.includes("dining") || q.includes("wine")) {
    return `You can reserve an intimate 7-course private tasting prepared by an award-winning <strong>3-Star Michelin Chef & Sommelier</strong> right inside any of our villas. <button class="btn btn-secondary" style="padding:4px 10px; font-size:0.75rem; margin-top:6px;" onclick="openDetailModal('service-michelin-chef')">Reserve Michelin Chef</button>`;
  }

  if (q.includes("promo") || q.includes("discount") || q.includes("code")) {
    return `You may apply promotional voucher code <strong>LUXE2026</strong> at checkout for 15% VIP privileges, or <strong>HORIZON</strong> for 20% off your stay!`;
  }

  return `Certainly! At Aura Luxe, our concierge team can curate custom private villas, executive aviation, yacht charters, and bespoke culinary itineraries worldwide. How may we craft your next journey today?`;
}

// ==========================================
// 9. TOAST NOTIFICATIONS
// ==========================================
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">✦</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-30px)";
    toast.style.transition = "all 0.35s ease";
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// FAQ Accordion Toggle
function toggleFaq(btn) {
  const item = btn.parentElement;
  item.classList.toggle("active");
}

// ==========================================================================
// 10. OWNER STUDIO, PRICE MANAGEMENT & PAYMENT GATEWAYS
// ==========================================================================

function checkOwnerAuthentication() {
  const isAuth = sessionStorage.getItem("aura_owner_auth") === "true";
  const params = new URLSearchParams(window.location.search);
  const correctPin = PAYMENT_CONFIG.ownerPin || "admin123";

  // Check secret URL param: ?admin=admin123 or ?owner=admin123
  const urlPin = params.get("admin") || params.get("owner");
  if (urlPin === correctPin) {
    sessionStorage.setItem("aura_owner_auth", "true");
    setOwnerAuthenticated(true);
    // Clean URL without reloading page
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    showToast("Welcome Owner! Management Studio Unlocked via Private URL.");
    return;
  } else if (params.has("admin") || params.has("owner")) {
    promptOwnerLogin();
    return;
  }

  if (isAuth) {
    setOwnerAuthenticated(true);
  } else {
    setOwnerAuthenticated(false);
  }
}

function setOwnerAuthenticated(isAuth) {
  APP_STATE.isOwnerAuthenticated = isAuth;
  if (isAuth) {
    document.body.classList.add("owner-authenticated");
    initOwnerMode();
  } else {
    document.body.classList.remove("owner-authenticated");
    document.body.classList.remove("owner-mode-active");
    const toggle1 = document.getElementById("ownerModeToggleCheckbox");
    const toggle2 = document.getElementById("ownerModeStudioCheckbox");
    if (toggle1) toggle1.checked = false;
    if (toggle2) toggle2.checked = false;
  }
}

function promptOwnerLogin() {
  const modal = document.getElementById("ownerLoginModal");
  if (modal) {
    modal.classList.add("active");
    const input = document.getElementById("ownerPinInput");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 150);
    }
  }
}

function submitOwnerLogin(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("ownerPinInput");
  const enteredPin = input ? input.value.trim() : "";
  const masterPin = PAYMENT_CONFIG.ownerPin || "admin123";

  if (enteredPin === masterPin) {
    sessionStorage.setItem("aura_owner_auth", "true");
    setOwnerAuthenticated(true);
    closeModal("ownerLoginModal");
    openOwnerStudio();
    showToast("Owner Studio Unlocked! Full Management Active.");
  } else {
    showToast("Access Denied: Incorrect Master Security PIN.");
    if (input) {
      input.style.borderColor = "var(--accent-rose)";
      input.select();
      setTimeout(() => input.style.borderColor = "", 1500);
    }
  }
}

function logoutOwner() {
  sessionStorage.removeItem("aura_owner_auth");
  setOwnerAuthenticated(false);
  closeOwnerStudio();
  showToast("🔒 Owner Studio Locked. Returned to Pure Guest View.");
}

function initOwnerMode() {
  if (APP_STATE.ownerMode && APP_STATE.isOwnerAuthenticated) {
    document.body.classList.add("owner-mode-active");
  } else {
    document.body.classList.remove("owner-mode-active");
  }

  const toggle1 = document.getElementById("ownerModeToggleCheckbox");
  const toggle2 = document.getElementById("ownerModeStudioCheckbox");
  if (toggle1) toggle1.checked = APP_STATE.ownerMode;
  if (toggle2) toggle2.checked = APP_STATE.ownerMode;
}

function toggleOwnerMode(isActive) {
  if (!APP_STATE.isOwnerAuthenticated) {
    promptOwnerLogin();
    return;
  }
  APP_STATE.ownerMode = !!isActive;
  localStorage.setItem("aura_owner_mode", APP_STATE.ownerMode);
  initOwnerMode();
  showToast(APP_STATE.ownerMode 
    ? "Owner Live Edit Mode ENABLED &mdash; Click pencil badges on cards to edit prices" 
    : "Owner Live Edit Mode DISABLED");
}

function updateAdminBadges() {
  const catalogCount = document.getElementById("adminCatalogCount");
  if (catalogCount) catalogCount.innerText = CATALOG_DATA.length;

  const bookingsCount = document.getElementById("adminBookingsCount");
  if (bookingsCount) bookingsCount.innerText = APP_STATE.bookings.length;
}

function openOwnerStudio() {
  if (!APP_STATE.isOwnerAuthenticated) {
    promptOwnerLogin();
    return;
  }
  const modal = document.getElementById("ownerStudioModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  updateAdminBadges();
  switchAdminTab(APP_STATE.adminTab || "catalog");
}

function closeOwnerStudio() {
  const modal = document.getElementById("ownerStudioModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

function switchAdminTab(tabName) {
  APP_STATE.adminTab = tabName;

  // Toggle tab buttons
  document.querySelectorAll(".admin-tab-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`tabBtn${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Toggle tab contents
  const tabs = ["Catalog", "Payments", "Ledger"];
  tabs.forEach(t => {
    const el = document.getElementById(`tabContent${t}`);
    if (el) el.style.display = t.toLowerCase() === tabName ? "block" : "none";
  });

  if (tabName === "catalog") renderAdminCatalog();
  if (tabName === "payments") renderAdminPaymentSettings();
  if (tabName === "ledger") renderAdminLedger();
}

// --------------------------------------------------------------------------
// TAB 1: PRICE & INVENTORY MANAGER
// --------------------------------------------------------------------------
function renderAdminCatalog() {
  const container = document.getElementById("tabContentCatalog");
  if (!container) return;

  const totalCurations = CATALOG_DATA.length;
  const staysCount = CATALOG_DATA.filter(i => i.type === "stay").length;
  const servicesCount = CATALOG_DATA.filter(i => i.type === "service").length;
  const avgPrice = Math.round(CATALOG_DATA.reduce((sum, i) => sum + i.priceUSD, 0) / (totalCurations || 1));

  container.innerHTML = `
    <!-- Stats Ribbon -->
    <div class="admin-stats-ribbon">
      <div class="admin-stat-card">
        <span class="stat-label">Total Curated Listings</span>
        <span class="stat-val">${totalCurations}</span>
        <span class="stat-sub">${staysCount} Stays &bull; ${servicesCount} VIP Services</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Average Investment Rate</span>
        <span class="stat-val">$${avgPrice.toLocaleString()}</span>
        <span class="stat-sub">Across All Categories</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Active Discount Promos</span>
        <span class="stat-val">3</span>
        <span class="stat-sub">LUXE2026 (15%) &bull; HORIZON (20%)</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Luxury Tourism Tax</span>
        <span class="stat-val">${Math.round((PAYMENT_CONFIG.taxRate || 0.12) * 100)}%</span>
        <span class="stat-sub">Auto-applied at checkout</span>
      </div>
    </div>

    <!-- Toolbar: Search, Filters, Mass Adjust & Actions -->
    <div class="admin-toolbar">
      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <input type="text" id="adminCatalogSearch" placeholder="Filter listings by name/destination..." 
               oninput="filterAdminCatalogTable(this.value)"
               style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 8px 12px; color: var(--text-primary); font-size: 0.85rem; width: 240px; outline: none;" />
        
        <div style="display: flex; gap: 6px; align-items: center; font-size: 0.8rem; color: var(--text-secondary);">
          <span>Mass Adjust:</span>
          <button class="btn-mini-adjust" onclick="adjustAllPrices(0.05)" title="Increase all rates by 5%">+5%</button>
          <button class="btn-mini-adjust" onclick="adjustAllPrices(0.10)" title="Increase all rates by 10%">+10%</button>
          <button class="btn-mini-adjust" onclick="adjustAllPrices(-0.05)" title="Decrease all rates by 5%">-5%</button>
          <button class="btn-mini-adjust" onclick="adjustAllPrices(-0.10)" title="Decrease all rates by 10%">-10%</button>
        </div>
      </div>

      <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
        <button class="btn btn-primary" onclick="openAddPropertyModal()" style="padding: 8px 16px; font-size: 0.82rem;">
          ➕ Add New Listing
        </button>
        <button class="btn btn-secondary" onclick="exportCatalogJSON()" style="padding: 8px 14px; font-size: 0.82rem;" title="Download Catalog as JSON">
          📥 Export JSON
        </button>
        <button class="btn btn-secondary" onclick="resetCatalogToDefaults()" style="padding: 8px 14px; font-size: 0.82rem; color: var(--accent-rose);" title="Restore original factory catalog">
          ↺ Reset Defaults
        </button>
      </div>
    </div>

    <!-- Inventory Pricing Table -->
    <div style="overflow-x: auto;">
      <table class="admin-table" id="adminCatalogTable">
        <thead>
          <tr>
            <th style="width: 60px;">Image</th>
            <th>Property / Service</th>
            <th>Category</th>
            <th>Base Price ($ USD)</th>
            <th>Unit</th>
            <th>VIP Add-ons</th>
            <th style="text-align: right;">Actions</th>
          </tr>
        </thead>
        <tbody>
          ${CATALOG_DATA.map(item => `
            <tr class="admin-table-row" data-id="${item.id}" data-search="${item.title.toLowerCase()} ${item.location.toLowerCase()}">
              <td>
                <img src="${item.image}" alt="${item.title}" class="table-thumb" />
              </td>
              <td>
                <div style="font-weight: 700; color: var(--text-primary);">${item.title}</div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${item.location} &bull; ★ ${item.rating}</div>
              </td>
              <td>
                <span class="amenity-tag" style="text-transform: capitalize;">${item.category}</span>
              </td>
              <td>
                <div class="price-input-group">
                  <span>$</span>
                  <input type="number" class="price-input-field" 
                         value="${item.priceUSD}" 
                         min="1" step="50"
                         onchange="updateItemPrice('${item.id}', this.value)" />
                </div>
                <div style="display: inline-flex; margin-left: 4px;">
                  <button class="btn-mini-adjust" onclick="quickAdjustItemPrice('${item.id}', -100)">-100</button>
                  <button class="btn-mini-adjust" onclick="quickAdjustItemPrice('${item.id}', 100)">+100</button>
                </div>
              </td>
              <td>
                <span style="font-size: 0.8rem; color: var(--text-secondary); text-transform: lowercase;">per ${item.priceUnit}</span>
              </td>
              <td>
                <span style="font-size: 0.78rem; color: var(--accent-gold-light);">${item.addons ? item.addons.length : 0} Add-on(s)</span>
              </td>
              <td style="text-align: right;">
                <div style="display: flex; gap: 6px; justify-content: flex-end;">
                  <button class="btn btn-secondary" style="padding: 4px 10px; font-size: 0.75rem;" onclick="openDetailModal('${item.id}'); closeOwnerStudio();">
                    Preview
                  </button>
                  <button class="btn btn-secondary" style="padding: 4px 8px; font-size: 0.75rem; color: var(--accent-rose);" onclick="deleteCatalogItem('${item.id}')" title="Delete listing">
                    ✕
                  </button>
                </div>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function filterAdminCatalogTable(query) {
  const q = query.toLowerCase().trim();
  const rows = document.querySelectorAll("#adminCatalogTable tbody tr");
  rows.forEach(row => {
    const text = row.getAttribute("data-search") || "";
    row.style.display = text.includes(q) ? "" : "none";
  });
}

function updateItemPrice(id, newPrice) {
  const val = Number(newPrice);
  if (isNaN(val) || val <= 0) {
    showToast("Please enter a valid price greater than $0.");
    return;
  }
  const item = CATALOG_DATA.find(i => i.id === id);
  if (!item) return;

  item.priceUSD = val;
  saveCatalog();
  showToast(`Updated price for "${item.title}" to $${val.toLocaleString()}`);
}

function quickAdjustItemPrice(id, delta) {
  const item = CATALOG_DATA.find(i => i.id === id);
  if (!item) return;
  const newPrice = Math.max(50, item.priceUSD + delta);
  item.priceUSD = newPrice;
  saveCatalog();
  showToast(`Price for "${item.title}" adjusted to $${newPrice.toLocaleString()}`);
}

function adjustAllPrices(percentage) {
  CATALOG_DATA.forEach(item => {
    item.priceUSD = Math.round((item.priceUSD * (1 + percentage)) / 10) * 10;
  });
  saveCatalog();
  const sign = percentage > 0 ? `+${Math.round(percentage * 100)}%` : `${Math.round(percentage * 100)}%`;
  showToast(`Adjusted all catalog rates by ${sign}`);
}

function resetCatalogToDefaults() {
  if (confirm("Are you sure you want to reset all prices and inventory back to factory defaults? Any custom properties or price changes will be restored.")) {
    CATALOG_DATA = JSON.parse(JSON.stringify(DEFAULT_CATALOG_DATA));
    saveCatalog();
    showToast("Catalog successfully reset to factory defaults.");
  }
}

function exportCatalogJSON() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(CATALOG_DATA, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `aura_luxe_catalog_${new Date().toISOString().split("T")[0]}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Catalog exported as JSON.");
}

function deleteCatalogItem(id) {
  const item = CATALOG_DATA.find(i => i.id === id);
  if (!item) return;
  if (confirm(`Are you sure you want to delete "${item.title}" from the catalog?`)) {
    CATALOG_DATA = CATALOG_DATA.filter(i => i.id !== id);
    saveCatalog();
    showToast(`Deleted "${item.title}" from catalog.`);
  }
}

// --------------------------------------------------------------------------
// TAB 2: PAYMENT GATEWAYS & METHODS SETUP
// --------------------------------------------------------------------------
function renderAdminPaymentSettings() {
  const container = document.getElementById("tabContentPayments");
  if (!container) return;

  const m = PAYMENT_CONFIG.methods;

  container.innerHTML = `
    <!-- Top Platform Financial Controls -->
    <div class="admin-toolbar" style="margin-bottom: 24px;">
      <div>
        <h4 style="margin: 0 0 4px; font-size: 0.95rem; color: var(--accent-gold);">Global Platform Financial Rules</h4>
        <span style="font-size: 0.78rem; color: var(--text-secondary);">Configure taxes, currency, and sandbox test mode</span>
      </div>
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <label style="font-size: 0.8rem; color: var(--text-secondary);">Hospitality Tourism Tax Rate:</label>
          <div style="display: inline-flex; align-items: center; background: rgba(0,0,0,0.4); border: 1px solid var(--border-subtle); border-radius: 4px; padding: 4px 8px;">
            <input type="number" id="cfgTaxRate" value="${Math.round((PAYMENT_CONFIG.taxRate || 0.12) * 100)}" min="0" max="40" step="1" style="background:none; border:none; color:#fff; width:45px; font-weight:700; outline:none;" />
            <span style="color:var(--text-muted); font-size:0.8rem;">%</span>
          </div>
        </div>

        <label class="switch-label" title="Enable Test Mode for simulated transactions" style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; background: rgba(234,179,8,0.1); border: 1px solid rgba(234,179,8,0.3); padding: 6px 12px; border-radius: var(--radius-full);">
          <input type="checkbox" id="cfgTestMode" class="switch-input" ${PAYMENT_CONFIG.testMode ? 'checked' : ''}>
          <span class="switch-slider" style="width: 32px; height: 18px;"></span>
          <span style="color: #facc15; font-weight: 700;">Sandbox Test Mode</span>
        </label>
      </div>
    </div>

    <!-- Payment Gateways Cards -->
    <div class="payment-methods-grid">
      <!-- 1. Stripe / Credit Card -->
      <div class="gateway-card ${m.card.enabled ? 'active' : ''}">
        <div class="gateway-head">
          <div class="gateway-title-box">
            <div class="gateway-icon">💳</div>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">Credit / Debit Card (Stripe Gateway)</h4>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Accept Visa, Mastercard, American Express, and Discover</span>
            </div>
          </div>
          <label class="switch-label">
            <input type="checkbox" id="gateway_card_enabled" class="switch-input" ${m.card.enabled ? 'checked' : ''} onchange="togglePaymentGateway('card', this.checked)">
            <span class="switch-slider"></span>
          </label>
        </div>
        <div class="gateway-fields-grid">
          <div class="gateway-field">
            <label>Stripe Publishable Key</label>
            <input type="text" id="cfg_card_pubKey" value="${m.card.publishableKey || ''}" placeholder="pk_test_... or pk_live_..." />
          </div>
          <div class="gateway-field">
            <label>Stripe Secret / Restricted Key</label>
            <input type="password" id="cfg_card_secKey" value="${m.card.secretKey || ''}" placeholder="sk_test_..." />
          </div>
          <div class="gateway-field">
            <label>Environment Mode</label>
            <select id="cfg_card_mode">
              <option value="test" ${m.card.mode === 'test' ? 'selected' : ''}>Test Mode (Simulated / Sandboxed)</option>
              <option value="live" ${m.card.mode === 'live' ? 'selected' : ''}>Live Production</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 2. PayPal -->
      <div class="gateway-card ${m.paypal.enabled ? 'active' : ''}">
        <div class="gateway-head">
          <div class="gateway-title-box">
            <div class="gateway-icon">🅿️</div>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">PayPal &bull; Digital Wallet</h4>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Direct PayPal checkout and instant business payments</span>
            </div>
          </div>
          <label class="switch-label">
            <input type="checkbox" id="gateway_paypal_enabled" class="switch-input" ${m.paypal.enabled ? 'checked' : ''} onchange="togglePaymentGateway('paypal', this.checked)">
            <span class="switch-slider"></span>
          </label>
        </div>
        <div class="gateway-fields-grid">
          <div class="gateway-field">
            <label>PayPal Business Email / Receiver Account</label>
            <input type="email" id="cfg_paypal_email" value="${m.paypal.businessEmail || ''}" placeholder="billing@luxury-hospitality.com" />
          </div>
          <div class="gateway-field">
            <label>PayPal Client ID</label>
            <input type="text" id="cfg_paypal_clientId" value="${m.paypal.clientId || ''}" placeholder="sb-client-..." />
          </div>
          <div class="gateway-field">
            <label>PayPal Environment</label>
            <select id="cfg_paypal_mode">
              <option value="sandbox" ${m.paypal.mode === 'sandbox' ? 'selected' : ''}>Sandbox Test</option>
              <option value="live" ${m.paypal.mode === 'live' ? 'selected' : ''}>Live Production</option>
            </select>
          </div>
        </div>
      </div>

      <!-- 3. Apple Pay & Google Pay -->
      <div class="gateway-card ${m.applepay.enabled ? 'active' : ''}">
        <div class="gateway-head">
          <div class="gateway-title-box">
            <div class="gateway-icon"></div>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">Apple Pay &amp; Google Pay</h4>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">1-Click Biometric Mobile &amp; Desktop checkout</span>
            </div>
          </div>
          <label class="switch-label">
            <input type="checkbox" id="gateway_applepay_enabled" class="switch-input" ${m.applepay.enabled ? 'checked' : ''} onchange="togglePaymentGateway('applepay', this.checked)">
            <span class="switch-slider"></span>
          </label>
        </div>
        <div class="gateway-fields-grid">
          <div class="gateway-field">
            <label>Merchant Identifier</label>
            <input type="text" id="cfg_applepay_merchantId" value="${m.applepay.merchantId || ''}" placeholder="merchant.com.auraluxe" />
          </div>
          <div class="gateway-field">
            <label>Domain Verification Status</label>
            <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); padding: 10px; border-radius: var(--radius-sm); color: var(--accent-emerald); font-size: 0.82rem; display: flex; align-items: center; gap: 8px;">
              <span>✓ Verified for localhost &amp; production HTTPS</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Direct VIP Bank Wire / Escrow -->
      <div class="gateway-card ${m.wire.enabled ? 'active' : ''}">
        <div class="gateway-head">
          <div class="gateway-title-box">
            <div class="gateway-icon">🏛️</div>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">VIP Direct Bank Wire &bull; Escrow Transfer</h4>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Direct wire coordinates for multi-million luxury bookings &amp; private aviation</span>
            </div>
          </div>
          <label class="switch-label">
            <input type="checkbox" id="gateway_wire_enabled" class="switch-input" ${m.wire.enabled ? 'checked' : ''} onchange="togglePaymentGateway('wire', this.checked)">
            <span class="switch-slider"></span>
          </label>
        </div>
        <div class="gateway-fields-grid">
          <div class="gateway-field">
            <label>Bank Name</label>
            <input type="text" id="cfg_wire_bankName" value="${m.wire.bankName || ''}" placeholder="e.g. Banque Privée Edmond de Rothschild" />
          </div>
          <div class="gateway-field">
            <label>Beneficiary Account Name</label>
            <input type="text" id="cfg_wire_accountName" value="${m.wire.accountName || ''}" placeholder="Aura Luxe Escrow SA" />
          </div>
          <div class="gateway-field">
            <label>IBAN / Account Number</label>
            <input type="text" id="cfg_wire_iban" value="${m.wire.iban || ''}" placeholder="CH93 0876 5432 1098 7654 3" />
          </div>
          <div class="gateway-field">
            <label>SWIFT / BIC Code</label>
            <input type="text" id="cfg_wire_swift" value="${m.wire.swift || ''}" placeholder="EDROCHGGXXX" />
          </div>
          <div class="gateway-field" style="grid-column: span 2;">
            <label>Wire Instructions / Terms</label>
            <input type="text" id="cfg_wire_instructions" value="${m.wire.instructions || ''}" />
          </div>
        </div>
      </div>

      <!-- 5. Cryptocurrency (USDT / BTC / ETH) -->
      <div class="gateway-card ${m.crypto.enabled ? 'active' : ''}">
        <div class="gateway-head">
          <div class="gateway-title-box">
            <div class="gateway-icon">💎</div>
            <div>
              <h4 style="margin: 0; font-size: 1rem;">Cryptocurrency &bull; USDT, BTC &amp; ETH</h4>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">Web3 payments with digital asset addresses</span>
            </div>
          </div>
          <label class="switch-label">
            <input type="checkbox" id="gateway_crypto_enabled" class="switch-input" ${m.crypto.enabled ? 'checked' : ''} onchange="togglePaymentGateway('crypto', this.checked)">
            <span class="switch-slider"></span>
          </label>
        </div>
        <div class="gateway-fields-grid">
          <div class="gateway-field">
            <label>Tether (USDT) Address (ERC-20 / TRC-20)</label>
            <input type="text" id="cfg_crypto_usdt" value="${m.crypto.usdtAddress || ''}" placeholder="0x..." />
          </div>
          <div class="gateway-field">
            <label>Bitcoin (BTC) Address</label>
            <input type="text" id="cfg_crypto_btc" value="${m.crypto.btcAddress || ''}" placeholder="bc1q..." />
          </div>
          <div class="gateway-field">
            <label>Ethereum (ETH) Address</label>
            <input type="text" id="cfg_crypto_eth" value="${m.crypto.ethAddress || ''}" placeholder="0x..." />
          </div>
        </div>
      </div>
    </div>

    <!-- Save Button Dock -->
    <div style="margin-top: 24px; display: flex; justify-content: flex-end; gap: 12px;">
      <button class="btn btn-primary" onclick="savePaymentSettings()" style="padding: 12px 28px; font-size: 0.95rem;">
        💾 Save All Payment Configuration
      </button>
    </div>
  `;
}

function togglePaymentGateway(methodId, isEnabled) {
  if (PAYMENT_CONFIG.methods[methodId]) {
    PAYMENT_CONFIG.methods[methodId].enabled = isEnabled;
    savePaymentConfig();
    showToast(`${PAYMENT_CONFIG.methods[methodId].name} ${isEnabled ? 'ENABLED' : 'DISABLED'}`);
    renderAdminPaymentSettings();
  }
}

function savePaymentSettings() {
  const taxInput = document.getElementById("cfgTaxRate");
  if (taxInput) {
    const val = Number(taxInput.value);
    if (!isNaN(val) && val >= 0) PAYMENT_CONFIG.taxRate = val / 100;
  }

  const testModeInput = document.getElementById("cfgTestMode");
  if (testModeInput) PAYMENT_CONFIG.testMode = testModeInput.checked;

  const m = PAYMENT_CONFIG.methods;

  // Card
  if (document.getElementById("cfg_card_pubKey")) m.card.publishableKey = document.getElementById("cfg_card_pubKey").value;
  if (document.getElementById("cfg_card_secKey")) m.card.secretKey = document.getElementById("cfg_card_secKey").value;
  if (document.getElementById("cfg_card_mode")) m.card.mode = document.getElementById("cfg_card_mode").value;

  // PayPal
  if (document.getElementById("cfg_paypal_email")) m.paypal.businessEmail = document.getElementById("cfg_paypal_email").value;
  if (document.getElementById("cfg_paypal_clientId")) m.paypal.clientId = document.getElementById("cfg_paypal_clientId").value;
  if (document.getElementById("cfg_paypal_mode")) m.paypal.mode = document.getElementById("cfg_paypal_mode").value;

  // Apple Pay
  if (document.getElementById("cfg_applepay_merchantId")) m.applepay.merchantId = document.getElementById("cfg_applepay_merchantId").value;

  // Wire
  if (document.getElementById("cfg_wire_bankName")) m.wire.bankName = document.getElementById("cfg_wire_bankName").value;
  if (document.getElementById("cfg_wire_accountName")) m.wire.accountName = document.getElementById("cfg_wire_accountName").value;
  if (document.getElementById("cfg_wire_iban")) m.wire.iban = document.getElementById("cfg_wire_iban").value;
  if (document.getElementById("cfg_wire_swift")) m.wire.swift = document.getElementById("cfg_wire_swift").value;
  if (document.getElementById("cfg_wire_instructions")) m.wire.instructions = document.getElementById("cfg_wire_instructions").value;

  // Crypto
  if (document.getElementById("cfg_crypto_usdt")) m.crypto.usdtAddress = document.getElementById("cfg_crypto_usdt").value;
  if (document.getElementById("cfg_crypto_btc")) m.crypto.btcAddress = document.getElementById("cfg_crypto_btc").value;
  if (document.getElementById("cfg_crypto_eth")) m.crypto.ethAddress = document.getElementById("cfg_crypto_eth").value;

  savePaymentConfig();
  showToast("All payment methods and gateway configurations saved successfully!");
}

// --------------------------------------------------------------------------
// TAB 3: SALES & BOOKINGS LEDGER
// --------------------------------------------------------------------------
function renderAdminLedger() {
  const container = document.getElementById("tabContentLedger");
  if (!container) return;

  const bookings = APP_STATE.bookings;
  const totalVolume = bookings.reduce((sum, b) => {
    const num = parseInt((b.total || "0").replace(/[^0-9]/g, ""), 10) || 0;
    return sum + num;
  }, 0);

  const confirmedCount = bookings.filter(b => (b.status || "").toLowerCase().includes("paid") || (b.status || "").toLowerCase().includes("confirmed")).length;
  const escrowPending = bookings.filter(b => (b.status || "").toLowerCase().includes("wire") || (b.status || "").toLowerCase().includes("crypto")).length;

  container.innerHTML = `
    <!-- Financial Metrics Ribbon -->
    <div class="admin-stats-ribbon">
      <div class="admin-stat-card">
        <span class="stat-label">Total Booking Volume</span>
        <span class="stat-val">$${totalVolume.toLocaleString()}</span>
        <span class="stat-sub">Across All Client Reservations</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Confirmed &amp; Settled</span>
        <span class="stat-val">${confirmedCount}</span>
        <span class="stat-sub">Processed via Gateways</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Escrow &amp; Wire Pending</span>
        <span class="stat-val">${escrowPending}</span>
        <span class="stat-sub">Awaiting Concierge Clearance</span>
      </div>
      <div class="admin-stat-card">
        <span class="stat-label">Total Transactions</span>
        <span class="stat-val">${bookings.length}</span>
        <span class="stat-sub">Live System Records</span>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="admin-toolbar">
      <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">
        Client Reservation &amp; Payment Ledger
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn btn-secondary" onclick="exportLedgerCSV()" style="padding: 6px 14px; font-size: 0.8rem;">
          📥 Export CSV
        </button>
      </div>
    </div>

    ${bookings.length === 0 ? `
      <div class="empty-state">
        <div class="empty-state-icon">✦</div>
        <h4>No Transactions Recorded Yet</h4>
        <p style="font-size: 0.88rem; margin: 8px 0 16px;">When guests book stays or VIP services, full payment records and transaction IDs will appear here.</p>
      </div>
    ` : `
      <div style="overflow-x: auto;">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Res. Code</th>
              <th>Guest Name</th>
              <th>Curated Experience</th>
              <th>Itinerary</th>
              <th>Total Paid</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th style="text-align: right;">Action</th>
            </tr>
          </thead>
          <tbody>
            ${bookings.map(b => `
              <tr class="admin-table-row">
                <td>
                  <strong style="color: var(--accent-gold); font-size: 0.82rem; letter-spacing: 0.05em;">${b.id}</strong>
                  ${b.txnId ? `<div style="font-size: 0.7rem; color: var(--text-muted); font-family: monospace;">${b.txnId}</div>` : ''}
                </td>
                <td>
                  <div style="font-weight: 600;">${b.guestName}</div>
                  <div style="font-size: 0.75rem; color: var(--text-muted);">${b.guestEmail}</div>
                </td>
                <td>
                  <div style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600;">${b.title}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${b.location}</div>
                </td>
                <td>
                  <span style="font-size: 0.78rem;">${b.checkIn} &rarr; ${b.checkOut}</span>
                </td>
                <td>
                  <strong style="color: var(--accent-gold-light); font-size: 0.9rem;">${b.total}</strong>
                </td>
                <td>
                  <span style="font-size: 0.78rem; background: rgba(255,255,255,0.06); padding: 3px 8px; border-radius: 4px;">
                    ${b.paymentMethod || "Direct Card"}
                  </span>
                </td>
                <td>
                  <span style="font-size: 0.75rem; color: ${b.status && b.status.includes('Paid') ? 'var(--accent-emerald)' : 'var(--accent-gold)'}; font-weight: 700;">
                    ${b.status}
                  </span>
                </td>
                <td style="text-align: right;">
                  <div style="display: flex; gap: 4px; justify-content: flex-end;">
                    <button class="btn-mini-adjust" onclick="updateBookingStatus('${b.id}', 'Paid & Settled (Manual Clearance)')" title="Mark Paid">
                      ✓ Paid
                    </button>
                    <button class="btn-mini-adjust" onclick="updateBookingStatus('${b.id}', 'Refunded')" title="Refund">
                      Refund
                    </button>
                  </div>
                </td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `}
  `;
}

function updateBookingStatus(bookingId, newStatus) {
  const b = APP_STATE.bookings.find(x => x.id === bookingId);
  if (!b) return;
  b.status = newStatus;
  localStorage.setItem("aura_bookings", JSON.stringify(APP_STATE.bookings));
  renderAdminLedger();
  renderBookingsDrawer();
  showToast(`Reservation ${bookingId} status updated to: ${newStatus}`);
}

function exportLedgerCSV() {
  if (APP_STATE.bookings.length === 0) {
    showToast("No bookings to export.");
    return;
  }
  const headers = ["Reservation Code", "Transaction ID", "Guest Name", "Guest Email", "Experience", "Location", "Check In", "Check Out", "Total", "Payment Method", "Status"];
  const rows = APP_STATE.bookings.map(b => [
    b.id,
    b.txnId || "",
    `"${b.guestName}"`,
    `"${b.guestEmail}"`,
    `"${b.title}"`,
    `"${b.location}"`,
    b.checkIn,
    b.checkOut,
    `"${b.total}"`,
    `"${b.paymentMethod || ''}"`,
    `"${b.status}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `aura_luxe_sales_ledger_${new Date().toISOString().split("T")[0]}.csv`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  showToast("Ledger CSV downloaded.");
}

// --------------------------------------------------------------------------
// QUICK INLINE PRICE EDIT & ADD PROPERTY
// --------------------------------------------------------------------------
function openQuickPriceEdit(id, event) {
  if (event) event.stopPropagation();
  const item = CATALOG_DATA.find(i => i.id === id);
  if (!item) return;

  APP_STATE.editingItemId = id;
  const title = document.getElementById("quickPriceTitle");
  const sub = document.getElementById("quickPriceSub");
  const input = document.getElementById("quickPriceInput");

  if (title) title.innerText = item.title;
  if (sub) sub.innerText = `${item.location} &bull; currently $${item.priceUSD} / ${item.priceUnit}`;
  if (input) input.value = item.priceUSD;

  const modal = document.getElementById("quickPriceModal");
  if (modal) modal.classList.add("active");
}

function saveQuickPrice() {
  const input = document.getElementById("quickPriceInput");
  if (!input || !APP_STATE.editingItemId) return;
  const newPrice = Number(input.value);
  if (isNaN(newPrice) || newPrice <= 0) {
    showToast("Please enter a valid price greater than $0.");
    return;
  }
  updateItemPrice(APP_STATE.editingItemId, newPrice);
  closeModal("quickPriceModal");
}

function quickPriceDelta(delta) {
  const input = document.getElementById("quickPriceInput");
  if (!input) return;
  const current = Number(input.value) || 0;
  input.value = Math.max(50, current + delta);
}

function quickPricePercent(percent) {
  const input = document.getElementById("quickPriceInput");
  if (!input) return;
  const current = Number(input.value) || 0;
  input.value = Math.max(50, Math.round((current * (1 + percent)) / 10) * 10);
}

function openAddPropertyModal() {
  const modal = document.getElementById("addPropertyModal");
  if (modal) modal.classList.add("active");
}

function saveNewProperty(event) {
  event.preventDefault();
  const title = document.getElementById("newPropTitle")?.value.trim();
  const location = document.getElementById("newPropLocation")?.value.trim();
  const type = document.getElementById("newPropType")?.value;
  const category = document.getElementById("newPropCategory")?.value;
  const price = Number(document.getElementById("newPropPrice")?.value) || 2000;
  const unit = document.getElementById("newPropUnit")?.value || "night";
  const badge = document.getElementById("newPropBadge")?.value.trim() || "Exclusive";
  const image = document.getElementById("newPropImage")?.value.trim() || "assets/images/hero.jpg";
  const guests = Number(document.getElementById("newPropGuests")?.value) || 4;
  const beds = Number(document.getElementById("newPropBeds")?.value) || 2;
  const baths = Number(document.getElementById("newPropBaths")?.value) || 2;
  const size = document.getElementById("newPropSize")?.value.trim() || "3,500 sq.ft";
  const desc = document.getElementById("newPropDesc")?.value.trim() || "Ultra-luxury bespoke residence.";

  const newItem = {
    id: `custom-${Date.now()}`,
    type: type,
    category: category,
    title: title,
    location: location,
    destinationKey: location.toLowerCase().split(",")[0].trim(),
    priceUSD: price,
    priceUnit: unit,
    rating: 5.0,
    reviewsCount: 1,
    image: image,
    badge: badge,
    tagline: badge + " &bull; Newly added luxury experience",
    description: desc,
    specs: { guests, beds, baths, size },
    amenities: ["Private Pool", "Private Butler", "Spa"],
    gallery: [image],
    addons: [
      { id: `addon-${Date.now()}-1`, name: "VIP Airport Chauffeur Transfer", price: 250 },
      { id: `addon-${Date.now()}-2`, name: "Welcome Dom Pérignon & Caviar Curation", price: 380 }
    ]
  };

  CATALOG_DATA.unshift(newItem);
  saveCatalog();
  closeModal("addPropertyModal");
  showToast(`Added "${title}" to your live catalog!`);
}

// --------------------------------------------------------------------------
// 11. CHECKOUT PAYMENT SELECTOR (CUSTOMER MODAL)
// --------------------------------------------------------------------------
function renderCheckoutPaymentMethods() {
  const container = document.getElementById("checkoutPaymentSection");
  if (!container) return;

  const m = PAYMENT_CONFIG.methods;
  const availableMethods = Object.values(m).filter(x => x.enabled);

  if (availableMethods.length === 0) {
    container.innerHTML = `
      <div style="background: rgba(234,179,8,0.1); border: 1px solid rgba(234,179,8,0.3); padding: 10px; border-radius: var(--radius-sm); font-size: 0.8rem; color: #facc15;">
        ⚠️ No payment methods are currently enabled in the Owner Studio. Please enable at least one payment method.
      </div>
    `;
    return;
  }

  // Ensure active payment method is one of the available
  if (!availableMethods.find(x => x.id === APP_STATE.checkoutPaymentMethod)) {
    APP_STATE.checkoutPaymentMethod = availableMethods[0].id;
  }

  const active = APP_STATE.checkoutPaymentMethod;

  container.innerHTML = `
    <div class="payment-section-header">
      <h4>Payment Method</h4>
      <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 600;">🔒 256-Bit SSL Encrypted</span>
    </div>

    <!-- Payment Nav Pills -->
    <div class="payment-nav-pills">
      ${availableMethods.map(method => `
        <button type="button" class="payment-pill ${active === method.id ? 'active' : ''}" 
                onclick="selectCheckoutPaymentMethod('${method.id}')">
          <span style="font-size: 1.1rem;">${method.icon}</span>
          <span>${method.name.split(" ")[0]}</span>
        </button>
      `).join("")}
    </div>

    <!-- Active Payment Method Content -->
    <div class="payment-method-details" id="paymentMethodDetails">
      ${renderActivePaymentMethodBody(active)}
    </div>
  `;

  // Attach card formatting listeners if card is active
  if (active === "card") setupCardInputs();
}

function selectCheckoutPaymentMethod(methodId) {
  APP_STATE.checkoutPaymentMethod = methodId;
  renderCheckoutPaymentMethods();
  recalculateModalPricing();
}

function renderActivePaymentMethodBody(methodId) {
  const m = PAYMENT_CONFIG.methods[methodId];
  if (!m) return "";

  if (methodId === "card") {
    return `
      ${PAYMENT_CONFIG.testMode ? `
        <div class="test-mode-banner">
          <span>⚡ Stripe Test Mode Active</span>
          <button type="button" class="btn-test-autofill" onclick="autofillTestCard()">Autofill Test Card</button>
        </div>
      ` : ''}

      <!-- Realistic Credit Card Graphic Preview -->
      <div class="credit-card-preview">
        <div class="card-preview-top">
          <div class="card-chip"></div>
          <span class="card-brand-logo" id="previewCardBrand">VISA</span>
        </div>
        <div class="card-preview-number" id="previewCardNumber">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242</div>
        <div class="card-preview-bottom">
          <div>
            <span>Cardholder</span>
            <strong id="previewCardName">Distinguished Guest</strong>
          </div>
          <div>
            <span>Expires</span>
            <strong id="previewCardExp">12/28</strong>
          </div>
        </div>
      </div>

      <!-- Card Input Fields -->
      <div class="card-inputs-grid">
        <div class="card-input-full">
          <input type="text" id="checkoutCardNumber" class="checkout-input" placeholder="4242 4242 4242 4242" maxlength="19" required />
        </div>
        <div>
          <input type="text" id="checkoutCardExp" class="checkout-input" placeholder="MM/YY" maxlength="5" required />
        </div>
        <div>
          <input type="password" id="checkoutCardCvc" class="checkout-input" placeholder="CVC" maxlength="4" required />
        </div>
        <div>
          <input type="text" id="checkoutCardZip" class="checkout-input" placeholder="Postal Code" maxlength="10" />
        </div>
      </div>
    `;
  }

  if (methodId === "paypal") {
    return `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px; text-align: center; margin-bottom: 12px;">
        <div style="font-size: 1.8rem; margin-bottom: 4px;">🅿️</div>
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary);">PayPal Express Checkout</div>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 4px 0 12px;">
          Seamlessly connect to your PayPal or Venmo account. Merchant: <strong style="color:var(--accent-gold);">${m.businessEmail || 'concierge-billing@auraluxe.com'}</strong>
        </p>
        <button type="button" class="btn-paypal-checkout" onclick="confirmReservation(event)">
          <span style="font-size: 1.1rem;">🅿️</span> Pay with PayPal
        </button>
      </div>
    `;
  }

  if (methodId === "applepay") {
    return `
      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 14px; text-align: center; margin-bottom: 12px;">
        <div style="font-size: 1.8rem; margin-bottom: 4px;"></div>
        <div style="font-size: 0.9rem; font-weight: 700; color: var(--text-primary);">Apple Pay &bull; 1-Click Biometric</div>
        <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 4px 0 12px;">
          Complete reservation instantly using Touch ID, Face ID, or your Apple Watch.
        </p>
        <button type="button" class="btn-applepay-checkout" onclick="confirmReservation(event)">
           Pay
        </button>
      </div>
    `;
  }

  if (methodId === "wire") {
    return `
      <div class="wire-details-box">
        <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
          <span style="font-size: 1.2rem;">🏛️</span>
          <strong style="color: var(--accent-gold); font-size: 0.88rem;">VIP Direct Bank Wire &bull; Escrow Account</strong>
        </div>
        <div class="wire-row">
          <span>Bank Name:</span>
          <span>${m.bankName}</span>
        </div>
        <div class="wire-row">
          <span>Beneficiary:</span>
          <span>${m.accountName}</span>
        </div>
        <div class="wire-row">
          <span>IBAN:</span>
          <span>${m.iban}</span>
        </div>
        <div class="wire-row">
          <span>SWIFT / BIC:</span>
          <span>${m.swift}</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 6px; line-height: 1.4;">
          ${m.instructions}
        </div>
      </div>
    `;
  }

  if (methodId === "crypto") {
    return `
      <div class="crypto-details-box">
        <div style="display: flex; gap: 8px; align-items: center; justify-content: center; margin-bottom: 6px;">
          <span style="font-size: 1.2rem;">💎</span>
          <strong style="color: var(--accent-gold); font-size: 0.88rem;">Web3 Crypto Transfer (USDT / BTC / ETH)</strong>
        </div>
        <p style="font-size: 0.75rem; color: var(--text-secondary); margin: 0 0 8px;">
          Supported networks: ${m.network}
        </p>

        <div style="font-size: 0.72rem; color: var(--text-muted); text-align: left; margin-bottom: 2px;">Tether (USDT) Deposit Address:</div>
        <div class="crypto-address-pill">
          <span>${m.usdtAddress}</span>
          <button type="button" class="btn-mini-adjust" onclick="navigator.clipboard.writeText('${m.usdtAddress}'); showToast('USDT Address copied to clipboard!');">Copy</button>
        </div>

        <div style="font-size: 0.72rem; color: var(--text-muted); text-align: left; margin-bottom: 2px;">Bitcoin (BTC) Deposit Address:</div>
        <div class="crypto-address-pill">
          <span>${m.btcAddress}</span>
          <button type="button" class="btn-mini-adjust" onclick="navigator.clipboard.writeText('${m.btcAddress}'); showToast('BTC Address copied to clipboard!');">Copy</button>
        </div>
      </div>
    `;
  }

  return "";
}

function setupCardInputs() {
  const numInput = document.getElementById("checkoutCardNumber");
  const expInput = document.getElementById("checkoutCardExp");
  const previewNum = document.getElementById("previewCardNumber");
  const previewExp = document.getElementById("previewCardExp");
  const previewName = document.getElementById("previewCardName");
  const previewBrand = document.getElementById("previewCardBrand");
  const guestName = document.getElementById("guestName");

  if (guestName && previewName) {
    guestName.addEventListener("input", (e) => {
      previewName.innerText = e.target.value.trim() || "Distinguished Guest";
    });
  }

  if (numInput && previewNum) {
    numInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 16);
      let formatted = val.match(/.{1,4}/g)?.join(' ') || val;
      e.target.value = formatted;
      previewNum.innerText = formatted || "•••• •••• •••• 4242";

      // Detect Brand
      if (val.startsWith("4")) {
        if (previewBrand) previewBrand.innerText = "VISA";
      } else if (val.startsWith("51") || val.startsWith("52") || val.startsWith("53") || val.startsWith("54") || val.startsWith("55")) {
        if (previewBrand) previewBrand.innerText = "MASTERCARD";
      } else if (val.startsWith("34") || val.startsWith("37")) {
        if (previewBrand) previewBrand.innerText = "AMEX";
      } else {
        if (previewBrand) previewBrand.innerText = "CARD";
      }
    });
  }

  if (expInput && previewExp) {
    expInput.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, '').substring(0, 4);
      if (val.length >= 2) {
        val = val.substring(0, 2) + '/' + val.substring(2);
      }
      e.target.value = val;
      previewExp.innerText = val || "12/28";
    });
  }
}

function autofillTestCard() {
  const numInput = document.getElementById("checkoutCardNumber");
  const expInput = document.getElementById("checkoutCardExp");
  const cvcInput = document.getElementById("checkoutCardCvc");
  const zipInput = document.getElementById("checkoutCardZip");
  const previewNum = document.getElementById("previewCardNumber");
  const previewExp = document.getElementById("previewCardExp");
  const previewBrand = document.getElementById("previewCardBrand");

  if (numInput) numInput.value = "4242 4242 4242 4242";
  if (expInput) expInput.value = "12/28";
  if (cvcInput) cvcInput.value = "888";
  if (zipInput) zipInput.value = "90210";

  if (previewNum) previewNum.innerText = "4242 4242 4242 4242";
  if (previewExp) previewExp.innerText = "12/28";
  if (previewBrand) previewBrand.innerText = "VISA";

  showToast("Stripe Test Card (4242...) autofilled!");
}

function setupAdminShortcuts() {
  window.addEventListener("keydown", (e) => {
    // Alt + A toggles Owner Studio
    if (e.altKey && (e.key === "a" || e.key === "A")) {
      e.preventDefault();
      const modal = document.getElementById("ownerStudioModal");
      if (modal && modal.classList.contains("active")) {
        closeOwnerStudio();
      } else {
        openOwnerStudio();
      }
    }
    // Escape closes modals
    if (e.key === "Escape") {
      closeOwnerStudio();
      closeModal("quickPriceModal");
      closeModal("addPropertyModal");
      closeModal("detailModal");
      closeDrawer();
    }
  });
}

