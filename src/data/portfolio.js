export const PROFILE = {
  name: "Zafar Iqbal",
  firstName: "Zafar",
  roleLead: "Senior",
  roleHighlight: "SEO",
  roleRest: "Exper",
  experience: "5+",
  location: "Lahore, Pakistan",
  tagline:
    "With expertise in SEO, Local SEO, Jetpack Compose, and modern mobile backends… I deliver apps that are polished, scalable, and ready for the store.",
  about:
    "I’m a senior mobile engineer with 8+ years of experience designing, building, and shipping production apps for startups and established brands. My work spans cross-platform Flutter products, native Android (Kotlin / Jetpack Compose), Android TV streaming, maps & realtime systems, payments, and App Store / Play Store releases. I own features from architecture to release — clean code, scalable state management, reliable backends, and UI that feels intentional on every device.",
  avatar: "/avatar.png",
  email: "srndrddev@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/usama-saeed-61205b207/",
  },
  highlights: [
    { value: "8+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Apps Shipped" },
    { value: "iOS/Android", label: "Store Releases" },
  ],
};

export const SERVICES = [
  {
    title: "Mobile App Development",
    desc: "Native-feeling Android & iOS apps with Flutter, Kotlin, and Jetpack Compose — from MVP to App Store release.",
  },
  {
    title: "UI / UX Implementation",
    desc: "Pixel-accurate interfaces, smooth motion, and adaptive layouts that feel premium on every screen size.",
  },
  {
    title: "API & Cloud Integration",
    desc: "Firebase, Supabase, REST, and secure auth flows wired cleanly into scalable mobile architectures.",
  },
  {
    title: "Maps & Realtime Features",
    desc: "Geolocation, live tracking, ride-sharing flows, and push notification pipelines built for production.",
  },
  {
    title: "E-commerce & Ops Apps",
    desc: "Warehouse packing, barcode scanning, bookings, and payment-ready commerce experiences.",
  },
  {
    title: "Performance & Release",
    desc: "Crash monitoring, offline-first caching, store listing prep, and reliable CI-friendly codebases.",
  },
];

export const SKILLS = [
  {
    group: "Mobile",
    desc: "Native feel across phones, tablets, and lean-back TV.",
    items: [
      "Flutter (Dart)",
      "Kotlin & Jetpack Compose",
      "Android TV",
      "SwiftUI",
      "Material 3",
      "Animations & Lottie",
    ],
  },
  {
    group: "Architecture",
    desc: "Patterns that stay maintainable as products grow.",
    items: [
      "Clean Architecture",
      "MVVM / MVI",
      "Riverpod / GetX / BLoC",
      "Coroutines & Flows",
      "Offline-first",
      "Modular codebases",
    ],
  },
  {
    group: "Backend & Cloud",
    desc: "Secure integrations that keep apps fast and reliable.",
    items: [
      "Firebase",
      "Supabase",
      "REST / Dio",
      "FCM",
      "Secure Storage",
      "WooCommerce APIs",
    ],
  },
  {
    group: "Product",
    desc: "Business-critical flows I’ve shipped end to end.",
    items: [
      "Maps & Tracking",
      "Payments & Bookings",
      "Role-based Auth",
      "AI / Camera / HealthKit",
      "Barcode Scanning",
      "ASO & Releases",
    ],
  },
];

export const PROJECTS = [
  {
    id: "fruchtbars",
    name: "FruchtBars",
    logo: "/logos/fruchtbars.png",
    platform: "Android & iOS",
    category: "E-Commerce Ops",
    tagline: "Warehouse packing app for FruchtBars.com — scan, pack, ship",
    description:
      "Custom order-fulfillment app for FruchtBars (fruchtbars.com). Staff track incoming orders, open packing flows, scan product barcodes line-by-line, and sync packing progress back to WooCommerce.",
    stack: ["Flutter", "Riverpod", "WooCommerce", "Barcode Scanner", "Hive"],
    links: {
      live: "https://fruchtbars.com/",
    },
    screenshots: [
      "/screenshots/fruchtbars/01-screen.png",
      "/screenshots/fruchtbars/02-screen.png",
      "/screenshots/fruchtbars/03-screen.png",
    ],
    featured: true,
    accent: "#6D28D9",
  },
  {
    id: "ambiently",
    name: "Ambiently",
    logo: "/logos/ambiently.png",
    platform: "Android & iOS",
    category: "Social / Venues",
    tagline: "Know the vibe before you go — live venue clips & requests",
    description:
      "Multi-role venue app — Requestors ask for real-time clips, Verifiers capture the vibe on-site, and Venue Owners manage their spots. Credits wallet, task dashboard, and Flutter + GetX + Supabase + Maps.",
    stack: ["Flutter", "GetX", "Supabase", "Google Maps", "Camera"],
    links: {
      live: "https://www.ambiently.app/",
    },
    screenshots: [
      "/screenshots/ambiently/02-screen.png",
      "/screenshots/ambiently/01-screen.png",
      "/screenshots/ambiently/03-screen.png",
    ],
    featured: true,
    accent: "#E07A5F",
  },
  {
    id: "calri",
    name: "CALRI",
    logo: "/logos/calri.png",
    platform: "iOS",
    category: "Health & Nutrition",
    tagline: "AI calorie counter — snap a meal, get macros instantly",
    description:
      "Snap a photo and AI detects food and portion size with calories, protein, carbs, and fats — plus HealthKit integration.",
    stack: ["SwiftUI", "Core ML", "Vision", "HealthKit"],
    links: {
      live: "https://calri.app/",
      appStore: "https://apps.apple.com/pk/app/calri-ai-calorie-counter/id6752805774",
    },
    screenshots: [
      "/screenshots/calri/01-screen.jpg",
      "/screenshots/calri/02-screen.jpg",
      "/screenshots/calri/03-screen.jpg",
    ],
    featured: true,
    accent: "#16A34A",
  },
  {
    id: "wakanda-rides",
    name: "Wakanda App",
    logo: "/logos/wakanda-rides.png",
    platform: "Android & iOS",
    category: "Mobility",
    tagline: "Ride-sharing for the Canadian market — EN & FR",
    description:
      "WakandaRides is a modern ride-sharing app for Canadian cities — book and post rides, track active bookings, chat/call drivers, and browse popular routes. Built with Flutter, Riverpod, Maps, and Firebase.",
    stack: ["Flutter", "Riverpod", "Google Maps", "Firebase"],
    links: {},
    screenshots: [
      "/screenshots/wakanda/02-screen.png",
      "/screenshots/wakanda/01-screen.png",
      "/screenshots/wakanda/03-screen.png",
    ],
    featured: true,
    accent: "#7C3AED",
  },
  {
    id: "daftarkhwan",
    name: "Daftarkhwan",
    logo: "/logos/daftarkhwan.png",
    platform: "iOS & Android",
    category: "Coworking",
    tagline: "Membership, meeting rooms, and workspace bookings",
    description:
      "Coworking companion for room booking, reservations, and membership — live on App Store and Google Play.",
    stack: ["Flutter", "Firebase", "REST API"],
    links: {
      appStore: "https://apps.apple.com/app/daftarkhwan/id6752734292",
      playStore: "https://play.google.com/store/apps/details?id=com.daftarkhwan&hl=en",
    },
    screenshots: [
      "/screenshots/daftarkhwan/02-screen.png",
      "/screenshots/daftarkhwan/03-screen.png",
      "/screenshots/daftarkhwan/04-screen.png",
    ],
    featured: true,
    accent: "#1D4ED8",
  },
  {
    id: "go-jetter",
    name: "Go Jetter",
    logo: "/logos/go-jetter.png",
    platform: "iOS & Android",
    category: "Travel",
    tagline: "Dubai tours, desert safaris, yacht cruises & packages",
    description:
      "Travel booking app with maps, Stripe payments, Firebase, and instant package booking for Dubai experiences.",
    stack: ["Flutter", "GetX", "Firebase", "Stripe", "Maps"],
    links: {
      appStore: "https://apps.apple.com/pk/app/go-jetter/id6749515142",
      playStore: "https://play.google.com/store/apps/details?id=com.gojetter.travel",
    },
    screenshots: [
      "/screenshots/go-jetter/02-screen.png",
      "/screenshots/go-jetter/03-screen.png",
      "/screenshots/go-jetter/04-screen.png",
    ],
    featured: true,
    accent: "#B45309",
  },
  {
    id: "apex-victoryq",
    name: "APEX",
    logo: "/logos/victoryq.png",
    platform: "Android TV",
    category: "Streaming",
    tagline: "IPTV streaming client rebuilt in Jetpack Compose",
    description:
      "Android TV streaming app — live TV, movies, shows, D-pad navigation, multi-account profiles, PIN lock, and system info. Built with Kotlin, Jetpack Compose, and WorkManager.",
    stack: ["Kotlin", "Jetpack Compose", "Android TV", "WorkManager"],
    links: {},
    screenshots: [
      "/screenshots/apex/01-screen.png",
      "/screenshots/apex/02-screen.png",
      "/screenshots/apex/03-screen.png",
    ],
    featured: true,
    device: "tv",
    accent: "#1B4D89",
  },
];
