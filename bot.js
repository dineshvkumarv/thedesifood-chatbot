// 1. Knowledge base: intents (keywords + answer text)
const INTENTS = [
  // ----- Customer Service -----
  {
    id: "returns",
    keywords: ["return", "refund", "returns allowed"],
    answer:
      "Yes, TheDesiFood allows returns for most non-food items if they are unused, in original packaging, and you start the return within 7 days of delivery. Food items are generally non-returnable, but complaints are reviewed case-by-case."
  },
  {
    id: "defective",
    keywords: ["defective", "damaged", "broken", "leak", "leaking"],
    answer:
      "If your product is damaged or defective, email support@thedesifood.com with photos/videos within 3 days of delivery. They review the case and can issue a full refund."
  },
  {
    id: "order_tracking",
    keywords: ["track", "tracking", "where is my order", "order status"],
    answer:
      "You can track your order using the 'Track Order' option on the website and the tracking link sent in your order confirmation email."
  },
  {
    id: "cancellation",
    keywords: ["cancel", "cancellation"],
    answer:
      "You may cancel your order before it has been shipped for a full refund. If it is already shipped or delivered, you need to follow the return/refund process."
  },

  // ----- Shipping & Delivery -----
  {
    id: "custom_duty",
    keywords: ["custom duty", "customs", "tax", "duty"],
    answer:
      "According to their shipping policy, international orders are shipped with no extra duties in the supported countries, so usually you don’t need to pay additional customs duty on delivery."
  },
  {
    id: "shipping_time",
    keywords: ["shipping time", "how long", "delivery time", "how many days"],
    answer:
      "TheDesiFood usually dispatches orders in 1–4 business days from India. Final delivery time and cost depend on your country and are shown at checkout/product page."
  },
  {
    id: "shipping_countries",
    keywords: ["countries", "which countries", "ship to", "deliver to"],
    answer:
      "TheDesiFood ships to 60+ countries including USA, UK, Canada, Germany, France, Italy, Spain, Australia, Singapore, UAE, and many others across Europe, the Middle East, Africa and Asia."
  },
  {
    id: "min_order",
    keywords: ["minimum order", "min order", "free shipping"],
    answer:
      "There is no strict minimum order. Shipping charges and free-shipping thresholds depend on your destination and cart value; details are listed in the Shipping Policy for each country."
  },
  {
    id: "packaging",
    keywords: ["packaging", "packed", "packing"],
    answer:
      "Customer reviews highlight very good packing and products arriving in good condition, often with extra protection for glass and delicate items."
  },

  // ----- Product Info (generic) -----
  {
    id: "product_info",
    keywords: ["expiry", "expire", "availability", "stock"],
    answer:
      "Product availability, details and expiry information are shown on each product page. TheDesiFood sells branded, sealed products sourced from well-known Indian brands."
  },

  // ----- Product category recommendations -----
  {
    id: "ghee_brand",
    keywords: ["ghee", "best ghee", "ghee brand"],
    answer:
      "Ghee: Popular ghee brands on TheDesiFood include Patanjali, Amul, Aashirvaad, Organic India and Gowardhan. You can browse these under the Staples → Ghee section."
  },
  {
    id: "rice_brand",
    keywords: ["rice", "basmati", "best rice"],
    answer:
      "Rice: You can find top rice brands like Daawat, India Gate, Kohinoor, Royal Basmati and other premium basmati rice options under Staples → Rice."
  },
  {
    id: "atta_brand",
    keywords: ["atta", "flour", "wheat flour"],
    answer:
      "Atta: Popular atta brands include Aashirvaad, Pillsbury, Patanjali and Organic India. Check the Staples → Atta & Flour section for more options."
  },
  {
    id: "dal_brand",
    keywords: ["dal", "lentils", "toor dal", "moong dal"],
    answer:
      "Dal: Common dal brands include Tata Sampann, MTR, 24 Mantra Organic and Organic India. Browse these in Staples → Dal & Pulses."
  },
  {
    id: "oil_brand",
    keywords: ["oil", "cooking oil", "sunflower oil", "groundnut oil", "mustard oil"],
    answer:
      "Oils: TheDesiFood offers oils from brands like Fortune, Dhara, Patanjali, Organic India and 24 Mantra Organic, including cold-pressed options. Explore them under Staples → Oils."
  },
  {
    id: "spices_brand",
    keywords: ["spices", "masala", "garam masala", "red chilli", "turmeric"],
    answer:
      "Spices: Popular spice brands include MDH, Everest, Catch, Tata Sampann, MTR and Organic India. You can find them under Staples → Masala & Spices."
  },
  {
    id: "snacks_brand",
    keywords: ["snacks", "namkeen", "chips", "biscuits"],
    answer:
      "Snacks: TheDesiFood lists snacks and namkeens from brands like Haldiram's, Bikaji, Lays, Parle, Britannia and other regional favourites. Check the Snacks & Sweets category."
  },
  {
    id: "pickles_brand",
    keywords: ["pickle", "pickles", "achar"],
    answer:
      "Pickles: You’ll find a variety of Indian pickles (achar) from brands like Mother's Recipe, Priya, Nilon's and regional home-style brands in the Pickles section."
  },
  {
    id: "tea_brand",
    keywords: ["tea brand", "best tea", "chai", "tea"],
    answer:
      "Tea: Popular choices on TheDesiFood include brands like Organic India and Teacurry, plus other Indian tea brands under Beverages → Tea. Choose based on flavour and health preference."
  },

  // ----- Special-diet / organic -----
  {
    id: "vegan",
    keywords: ["vegan", "halal", "gluten free", "gluten-free", "organic"],
    answer:
      "Yes, they list many organic and special-diet products. Look for the Organic category and brands like Organic India or Himalayan Organics, and check product labels for vegan/halal/gluten-free tags."
  },

  // ----- Business / Payments -----
  {
    id: "payment_methods",
    keywords: ["payment", "pay", "cards", "card"],
    answer:
      "TheDesiFood accepts major international cards and supports country-specific pricing. Exact payment options are visible at checkout for your selected country."
  },
  {
    id: "bulk",
    keywords: ["bulk", "wholesale"],
    answer:
      "Yes, they support bulk orders. You can use the “Buy in Bulk” option on the site or contact the bulk/business number listed in the footer for custom enquiries."
  },
  {
    id: "account",
    keywords: ["account", "register", "sign up", "signup", "login", "log in"],
    answer:
      "You can create an account using the Log In / Register option on the website header to save addresses and track orders easily."
  },
  {
    id: "discounts",
    keywords: ["discount", "coupon", "promo code", "offer", "offers"],
    answer:
      "TheDesiFood runs offers and coupon codes from time to time. Check the “Offers and Discounts” page or homepage banners for any active deals."
  },
  {
    id: "support",
    keywords: ["support", "contact", "help", "customer care"],
    answer:
      "You can reach support via email at support@thedesifood.com, the 24/7 hotline +91 91567 56788, or the WhatsApp/bulk number +91 88619 12304."
  }
];

// 2. Helper: get bot response
function getBotResponse(userMessage) {
  const text = userMessage.toLowerCase().trim();

  // --- Greeting detection with word boundaries (no 'hi' in 'shipping') ---
  const greetingPatterns = [
    /^hi\b/,
    /^hello\b/,
    /^hey\b/,
    /^good (morning|evening|afternoon|night)\b/
  ];

  const isGreeting = greetingPatterns.some((regex) => regex.test(text));

  if (isGreeting) {
    return "Hello! 👋 How can I assist you today?";
  }

  // --- Normal intent matching (can match multiple categories) ---
  const matchedAnswers = [];
  const seenIds = new Set();

  for (const intent of INTENTS) {
    for (const keyword of intent.keywords) {
      if (text.includes(keyword.toLowerCase())) {
        if (!seenIds.has(intent.id)) {
          matchedAnswers.push(intent.answer);
          seenIds.add(intent.id);
        }
        break; // stop checking other keywords for this intent
      }
    }
  }

  // If we matched one or more intents, return all their answers combined
  if (matchedAnswers.length > 0) {
    return matchedAnswers.join("\n\n");
  }

  // Fallback: generic categories (if nothing else matched)
  if (text.includes("return") || text.includes("refund")) {
    return INTENTS.find((i) => i.id === "returns").answer;
  }
  if (text.includes("ship") || text.includes("delivery")) {
    return INTENTS.find((i) => i.id === "shipping_time").answer;
  }

  // Final fallback
  return "I’m not fully sure about that. Please check the FAQ/Policy pages on thedesifood.com or contact support at support@thedesifood.com.";
}

// 3. UI wiring
function addMessage(text, sender) {
  const messages = document.getElementById("chatbot-messages");
  const wrapper = document.createElement("div");
  wrapper.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  wrapper.appendChild(bubble);
  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight;
}

function handleUserMessage() {
  const input = document.getElementById("chatbot-input");
  const text = input.value.trim();
  if (!text) return;

  // show user message
  addMessage(text, "user");

  // get bot reply
  const reply = getBotResponse(text);
  addMessage(reply, "bot");

  input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  // Friendly welcome greeting
  addMessage(
    "Welcome! 👋 I'm here to assist you with returns, refunds, shipping, delivery, custom duties, discounts, product availability, and product recommendations like ghee, rice, atta, dal, oil, spices, tea, snacks and pickles. How can I help you today?",
    "bot"
  );

  const sendBtn = document.getElementById("chatbot-send");
  const input = document.getElementById("chatbot-input");

  sendBtn.addEventListener("click", handleUserMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  });
});
