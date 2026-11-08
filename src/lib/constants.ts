import { Experience, Education, Project, SkillCategory, Course } from "@/types";

export const PERSONAL_INFO = {
  name: "Mahadeer Mohamed",
  title: "Software Tester | Front-End Developer",
  targetRole: "QA Automation Engineer",
  email: "mahadheer777@gmail.com",
  phone: "7339426461",
  phoneFormatted: "+91 73394 26461",
  linkedin: "https://linkedin.com/in/mahadeer7",
  linkedinHandle: "linkedin.com/in/mahadeer7",
  github: "https://github.com/mahadeer7",
  githubHandle: "github.com/mahadeer7",
  currentlyLearning: "Selenium with Java (Automation Testing)",
  summary:
    "Detail-driven Software Tester and Front-End Developer with comprehensive expertise in Quality Assurance (SDLC, STLC, Functional, Regression, System, E2E, Test Case Design, and Jira/Zephyr defect management) combined with full-stack engineering proficiency in Java OOP, JavaScript (ES6+), React.js, Next.js, TypeScript, Node.js, and SQL. Grounded in core Computer Networking principles (OSI 7-layer architecture, TCP/IP suite, HTTP/HTTPS, and DNS resolution), providing a distinct advantage in API contract validation, network protocol analysis, and defect isolation. Proven experience co-engineering and systematically stress-testing production web applications like GroFit and GROZET, and actively leveling up in Selenium with Java for robust test automation.",
  heroPitch:
    "Bridging the gap between creative front-end architecture and bulletproof QA precision — turning defect chaos into green passes.",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "testing",
    title: "Testing & Quality Assurance",
    description: "End-to-end quality validation, defect lifecycle & test planning",
    color: "#34D399", // Soft Green
    skills: [
      "Manual Testing",
      "SDLC",
      "STLC",
      "Functional Testing",
      "Regression Testing",
      "Smoke Testing",
      "Sanity Testing",
      "System Testing",
      "End-to-End Testing",
      "GUI Testing",
      "Test Case Design & Execution",
      "Bug Reporting & Defect Tracking",
      "Jira",
      "Zephyr",
      "Agile Scrum",
    ],
  },
  {
    id: "networking",
    title: "Computer Networking",
    description: "OSI 7-layer architecture, TCP/IP suite, protocol analysis & network infrastructure",
    color: "#38BDF8", // Sky Blue
    skills: [
      "OSI 7-Layer Model",
      "TCP/IP Model",
      "TCP 3-Way Handshake",
      "UDP Protocol",
      "HTTP & HTTPS (SSL/TLS)",
      "DNS Resolution Flow",
      "IP Addressing (IPv4 / IPv6)",
      "Subnetting & CIDR",
      "Routing & Switching",
      "NAT & Port Forwarding",
      "Client-Server Architecture",
      "Network Topologies",
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Core algorithms, data structures & object-oriented architecture",
    color: "#6366F1", // Indigo
    skills: [
      "Java",
      "JavaScript",
      "Java OOP",
      "Node.js",
      "Asynchronous Programming",
    ],
  },
  {
    id: "web",
    title: "Web Technologies",
    description: "Modern, responsive, component-driven client architecture",
    color: "#22D3EE", // Cyan
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "RESTful APIs",
      "React State & Hooks",
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data modeling, schema integrity & queries",
    color: "#A78BFA", // Soft Purple
    skills: ["MySQL", "SQL Fundamentals", "CRUD Operations", "Database Design"],
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    description: "Version control, deployment pipelines & developer utilities",
    color: "#F59E0B", // Amber
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Command Line (CLI)",
      "ChatGPT",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "grofit",
    title: "GroFit",
    subtitle: "Evidence-Based Fitness, Nutrition & 3D Equipment Lab",
    description:
      "Full-stack evidence-based workout & nutrition platform featuring EMG/biomechanics-ranked exercises, Indian food database (IFCT 2017), drag-and-drop routine builder, Mifflin-St Jeor macro tracker, and an interactive 3D WebGL equipment lab.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js / WebGL"],
    liveUrl: "https://grofit.vercel.app/app",
    featured: true,
    is3dShowcase: true,
    image: "/grofit_showcase.png",
    systemArchitecture: {
      overview:
        "Full-stack evidence-based fitness application designed to bridge scientific biomechanics and daily gym execution with interactive 3D WebGL visualizations and regional nutritional intelligence.",
      marketNeed:
        "Mainstream fitness apps lack culturally accurate Indian nutrition data (IFCT 2017) and provide static 2D exercise diagrams without muscular activation clarity.",
      operatingModel: {
        title: "Scientific Biomechanics & Metabolic Engines",
        details: [
          "Interactive 3D Lab: Real-time Three.js rendering of equipment kinematics, joint stress vectors, and targeted muscular firing sequences.",
          "Metabolic Calculation: Mifflin-St Jeor BMR/TDEE equation engine dynamically calculating macronutrient splits based on activity levels.",
          "Indian Nutrition Database: Search index built on official ICMR-NIN IFCT 2017 food composition metrics.",
        ],
      },
      modules: [
        {
          name: "3D WebGL Equipment Lab",
          description: "Interactive 3D viewport for inspecting equipment mechanics, grip variants, and muscle engagement.",
        },
        {
          name: "Routine Drag-and-Drop Builder",
          description: "Fluid HTML5 touch-enabled routine sequencer with automated volume and weekly frequency tracking.",
        },
        {
          name: "Macro & Calorie Tracker",
          description: "Dynamic nutritional ledger powered by verified IFCT 2017 food data and custom macro targets.",
        },
      ],
      techSpecs: [
        { layer: "Frontend Framework", details: "Next.js App Router with TypeScript and Tailwind CSS." },
        { layer: "3D Visualization", details: "Three.js & React Three Fiber with custom GLSL shaders and instanced geometry." },
        { layer: "State & Persistence", details: "Client-side cached state with local hydration and offline persistence." },
      ],
    },
    howITestedIt: {
      summary:
        "Executed rigorous boundary value analysis on caloric calculation engines, stress-tested WebGL context loss scenarios, and performed responsive touch-event regression suites.",
      scenarios: [
        "Caloric Boundary Validation: Tested Mifflin-St Jeor equation limits with extreme bodyweight, height, and age edge cases to ensure zero NaN/infinite macro splits.",
        "3D WebGL Resilience: Stress-tested Three.js render loop recovery under simulated WebGL context loss and low memory constraints on mobile GPUs.",
        "Touch Gesture Matrix: Executed cross-browser manual test cases verifying that HTML5 drag-and-drop routine reordering performs smoothly across both mouse and multi-touch touchscreens.",
        "Nutritional Query Sanitization: Validated the Indian Food Composition (IFCT 2017) search index against special characters, rapid debounce typing, and zero-match state renders.",
      ],
    },
  },
  {
    id: "jyothi-tiles",
    title: "Jyothi Tiles",
    subtitle: "Luxury Digital Showroom — Architectural Surfaces & Slabs",
    description:
      "A high-end architectural digital showroom for premier surfaces, large-format porcelain slabs, and exotic natural Brazilian granites. Features an interactive Space Explorer, multi-spec Product Compare Matrix, Wishlist, and VIP Showroom Concierge booking.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Firebase"],
    liveUrl: "https://jyothitiles.vercel.app",
    featured: true,
    image: "/jyothi_tiles_showcase.png",
    systemArchitecture: {
      overview:
        "A premium digital showroom designed for luxury architectural surfaces, extra-large porcelain slabs, and exotic natural granites, streamlining product evaluation for architects, builders, and designers.",
      marketNeed:
        "Heavy architectural surface materials cannot be easily sampled physically; a high-fidelity digital platform provides multi-attribute comparison, space previewing, and accurate square-footage pricing estimates.",
      operatingModel: {
        title: "Digital Surface Showroom & Dimension Calculation",
        details: [
          "Space Explorer: Digital ambient visualization of slabs across luxury living rooms, commercial lobbies, and gourmet kitchens.",
          "Spec Verification: Multi-parameter technical matrix comparing PEI wear ratings, Mohs hardness, and water absorption rates.",
          "Dynamic Slab Calculator: Instant conversion between slab dimensions (mm/inches) to square feet with real-time budget forecasting.",
        ],
      },
      modules: [
        {
          name: "Space Explorer & Surface Visualizer",
          description: "High-resolution full-screen exploration of polished, matte, and bookmatched slab installations.",
        },
        {
          name: "Product Compare Matrix",
          description: "Side-by-side technical specification comparisons across porcelain, quartz, and natural granite.",
        },
        {
          name: "VIP Concierge Booking",
          description: "Integrated appointment scheduling for physical showroom visits and personalized consultation.",
        },
      ],
      techSpecs: [
        { layer: "Frontend & Animation", details: "Next.js, TypeScript, Tailwind CSS, and Framer Motion." },
        { layer: "Backend & Database", details: "Firebase Cloud Firestore for real-time catalog sync and concierge bookings." },
        { layer: "Asset Delivery", details: "Optimized multi-resolution image delivery with Next/Image." },
      ],
    },
    howITestedIt: {
      summary:
        "Executed precision testing on slab dimension and sq.ft conversion calculators, verified side-by-side product compare matrices, and tested quote request state persistence.",
      scenarios: [
        "Slab Dimension & Pricing Math: Designed boundary test cases for custom slab dimensions (width × height to sq.ft conversion) and dynamic price estimation logic.",
        "Compare Matrix Spec Alignment: Verified multi-attribute comparison states (PEI ratings, water absorption < 0.05%, Mohs hardness, and frost resistance) across responsive breakpoints.",
        "Wishlist & Quote State Persistence: Tested client-side state hydration across page navigations, tab switches, and reload cycles to prevent line-item state loss.",
        "Concierge Booking Form Validation: Validated VIP showroom visit scheduler inputs, phone number sanitization, and date-picker edge cases.",
      ],
    },
  },
  {
    id: "grozet",
    title: "Grozet",
    subtitle: "Tamil Nadu's Own Regional Instant Delivery & Q-Commerce Platform",
    description:
      "Regional quick-commerce platform operating across Tamil Nadu via a localized 2–4 km dark hub micro-fulfillment network. Co-developed with my friend, delivering groceries, fresh essentials, and packaged goods in minutes. Powered by real-time SKU inventory tracking, automated two-wheeler fleet dispatch, live GPS tracking, and multi-gateway UPI billing.",
    stack: [
      "Next.js / Web",
      "Android App",
      "REST & WebSockets",
      "Redis & High-Concurrency DB",
      "Firebase OTP",
      "Tailwind CSS",
    ],
    liveUrl: "https://www.grozet.in/",
    featured: true,
    image: "/grozet_showcase.png",
    coDeveloped: true,
    systemArchitecture: {
      overview:
        "Headquartered and operating primarily in Tamil Nadu, India, GROZET ('Tamil Nadu’s own instant delivery app') delivers groceries, daily household essentials, packaged foods, and fresh goods to consumers within minutes via mobile applications (in.grozet.app) and web portal (grozet.in).",
      marketNeed:
        "While metro-centric quick-commerce giants (such as Zepto, Blinkit, and Swiggy Instamart) focus heavily on Tier-1 urban clusters, regional platforms like GROZET serve local communities and emerging towns in Tamil Nadu with tailored cataloging, local language familiarity, and targeted micro-fulfillment.",
      operatingModel: {
        title: "Micro-Fulfillment (Dark Hub Model) & Fleet Dispatch",
        details: [
          "Dark Hub Radiuses: Micro-warehouses and delivery hubs placed within high-density residential and suburban radiuses (2–4 km), ensuring orders can be packed and dispatched in minutes.",
          "Product Catalog: Curated categories covering Staples & Cooking Essentials (rice, flour, lentils, oils, spices), Dairy & Bakery (fresh milk, curd, paneer, bread), Snacks & Beverages, and Home & Hygiene essentials.",
          "Fleet & Logistics Dispatch: Localized two-wheeler delivery network with automated real-time routing connecting customer addresses to the nearest active fulfillment center.",
        ],
      },
      modules: [
        {
          name: "Customer App / Web Portal",
          description:
            "OTP-based phone login, catalog browsing, intelligent search, real-time inventory count, and in-app checkout.",
        },
        {
          name: "Live Order Tracking",
          description:
            "Real-time map-based GPS tracking, dispatch stage status (Packed -> Dispatched -> Rider En Route -> Delivered), and push notifications.",
        },
        {
          name: "Hub / Inventory Engine",
          description:
            "Real-time SKU tracking, shelf-level batch scanning, stock replenishment alerts, and expiry management.",
        },
        {
          name: "Rider Interface",
          description:
            "Order allocation algorithms, route optimization, pick-up confirmation, and customer drop-off verification.",
        },
        {
          name: "Payment & Billing",
          description:
            "Integrated digital payments (UPI via GPay/PhonePe/Paytm, cards, net banking) alongside cash on delivery options.",
        },
      ],
      techSpecs: [
        {
          layer: "Mobile Client",
          details: "Android application (in.grozet.app) built for low-latency mobile quick ordering and live updates.",
        },
        {
          layer: "Web Portal",
          details: "Next.js web interface (grozet.in) with responsive layout, instant serviceability lookup, and cart bill breakdown.",
        },
        {
          layer: "Backend & API",
          details: "RESTful / WebSocket architecture for low-latency live dispatching and real-time status updates.",
        },
        {
          layer: "Database & Cache",
          details: "High-concurrency database layer with Redis-based caching for quick cart and catalog lookups.",
        },
        {
          layer: "Security & Infrastructure",
          details: "TLS/SSL transit data encryption, role-based access control (RBAC) for hub managers, and cloud-hosted microservices.",
        },
      ],
    },
    howITestedIt: {
      summary:
        "Designed and executed end-to-end QA automation test plans covering dark hub geofencing boundaries, high-concurrency SKU race conditions, live WebSocket GPS tracking, and multi-gateway UPI payment idempotency.",
      scenarios: [
        "Dark Hub Geofencing & Serviceability (2–4 km): Tested address geocoding against dark hub polygon boundaries to verify that delivery requests beyond service radiuses are cleanly intercepted with helpful serviceability alerts.",
        "High-Concurrency SKU Race Conditions: Stress-tested simultaneous multi-user cart checkouts for last-in-stock items, asserting Redis cache locks and database transactions prevent overselling.",
        "Live WebSocket Tracking & Reconnects: Validated GPS map streaming across connection drops, app backgrounding, and network switches (4G to Wi-Fi) with automated state reconciliation.",
        "Multi-Gateway UPI & Webhook Idempotency: Tested payment callback handling (GPay/PhonePe/Paytm/COD), ensuring duplicate webhooks or network drops never trigger double billing or orphaned packing slips.",
        "Firebase OTP & Rate-Limit Security: Validated phone authentication resilience against brute-force attempts, SMS gateway latency, expired tokens, and invalid verification codes.",
      ],
    },
  },
  {
    id: "project-mgmt",
    title: "Staff-Admin Project Management System",
    subtitle: "Role-Based Approvals & Scoring System",
    description:
      "Role-based project management system enabling staff project submissions, multi-tiered admin review and approval/rejection workflows, real-time status tracking, and an admin-controlled scoring system.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    featured: false,
    howITestedIt: {
      summary:
        "Performed role-based access control (RBAC) validation, state machine transition checks, and admin scoring rules enforcement.",
      scenarios: [
        "RBAC Route Guards: Conducted negative security testing ensuring unauthenticated or staff-tier users cannot access admin approval URLs or trigger evaluation APIs.",
        "Approval State Machine: Designed test cases covering the full lifecycle (Pending -> Under Review -> Approved/Rejected), confirming real-time status reflection.",
        "Scoring Logic Integrity: Validated that submission scores are strictly calculated and persisted ONLY when an admin formally marks a submission as approved.",
      ],
    },
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "GroFit (Evidence-Based Fitness Platform)",
    role: "Front-End Developer & QA Tester",
    period: "2024 - Present",
    location: "Remote / Self-Directed",
    project: "Interactive 3D WebGL Equipment & Nutrition Lab",
    badge: "Production Platform",
    stack: "Next.js, React, TypeScript, Tailwind CSS, Three.js, WebGL",
    liveUrl: "https://grofit.vercel.app/app",
    bullets: [
      "Architected and engineered a full-stack evidence-based fitness application integrating official Indian Food Composition (IFCT 2017) datasets and Mifflin-St Jeor metabolic calculation algorithms.",
      "Developed an interactive 3D WebGL biomechanics lab utilizing Three.js and custom GLSL shaders to visualize joint stress vectors, kinematic angles, and targeted muscular activation sequences.",
      "Designed and executed systematic boundary value analysis on caloric and macronutrient formulas, preventing NaN, infinite splits, and division-by-zero defects under edge body metrics.",
      "Stress-tested WebGL context loss scenarios and GPU memory limits across mobile viewports, implementing automatic render loop re-initialization and fluid touch drag-and-drop routine reordering.",
    ],
  },
  {
    company: "GROZET (Hyperlocal Instant Delivery)",
    role: "Co-Developer & QA Test Lead",
    period: "2024 - Present",
    location: "Tamil Nadu, India",
    project: "Regional Quick-Commerce Platform (Dark Hub Model)",
    badge: "Co-Developed with Friend",
    stack: "Next.js, TypeScript, Tailwind CSS, Android Client, REST & WebSockets, Firebase OTP",
    liveUrl: "https://www.grozet.in/",
    bullets: [
      "Co-developed Tamil Nadu's dedicated regional instant delivery platform, engineering web portal and mobile client architectures for 2–4 km dark hub micro-fulfillment with minute-level dispatch.",
      "Implemented responsive product cataloging, intelligent bilingual search indexing, dynamic cart billing calculation, and secure Firebase phone OTP authentication workflows.",
      "Conducted rigorous geofencing boundary testing against dark hub polygon radiuses, ensuring out-of-coverage delivery orders are intercepted with helpful serviceability alerts.",
      "Executed high-concurrency race condition testing for last-in-stock SKUs, validating Redis caching and database transaction locks to eliminate inventory overselling.",
      "Validated real-time WebSocket connection recovery for live GPS map tracking across network drops, app backgrounding, and network handovers (4G to Wi-Fi).",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    institution: "Crescent University",
    degree: "B.Tech in Information Technology",
    period: "2021 - 2025",
    highlights:
      "Rigorous coursework in Software Engineering, Object-Oriented Programming (Java), Database Management Systems (MySQL), and Computer Networks.",
  },
  {
    institution: "A.R.R.M.H.S.S",
    degree: "Higher Secondary (Computer Science)",
    period: "2020 - 2021",
    highlights: "Foundations of Computer Science, Programming Logic, and Mathematics.",
  },
];

export const SPECIALIZED_COURSES: Course[] = [
  {
    title: "Become a Fullstack Developer from Scratch — Full Beginner's Tutorial",
    instructor: "freeCodeCamp.org & Scrimba",
    platform: "freeCodeCamp / YouTube",
    url: "https://youtu.be/LzMnsfqjzkA",
    period: "45+ Hour Comprehensive Mastery",
    description:
      "Complete end-to-end full-stack software development curriculum covering responsive HTML/CSS design, modern ES6+ & Async JavaScript, Node.js REST APIs, SQL databases, React state & side effects, TypeScript in React, and Next.js full-stack architectures.",
    topics: [
      "Responsive HTML5 & CSS3 Design",
      "Modern JavaScript ES6+ & DOM Events",
      "Asynchronous JavaScript (Promises, Async/Await, Fetch)",
      "Node.js Backend & REST API Engineering",
      "SQL Querying & Relational Database Design",
      "React.js Component Architecture & State Management",
      "TypeScript Fundamentals & React Integration",
      "Next.js App Router & Rendering Strategies (SSR/SSG)",
      "Version Control with Git, GitHub & CLI Workflows",
    ],
  },
  {
    title: "Computer Networking Full Course — OSI Model Deep Dive with Real Life Examples",
    instructor: "Kunal Kushwaha",
    platform: "YouTube",
    url: "https://youtu.be/IPvYjXCsTg8",
    period: "Comprehensive Coursework",
    description:
      "Comprehensive deep dive into modern computer networking foundations, packet lifecycle, 7-layer OSI model, TCP/IP stack, transport protocols, IP subnetting, and client-server network architectures.",
    topics: [
      "OSI 7-Layer Model (Physical to Application)",
      "TCP/IP 5-Layer Model",
      "TCP 3-Way Handshake (SYN, SYN-ACK, ACK)",
      "UDP Datagrams & Connectionless Communication",
      "HTTP/HTTPS Protocols & Status Code Semantics",
      "DNS Resolution Hierarchy & Domain Lookups",
      "IPv4 vs. IPv6 Addressing & Subnet Masks",
      "NAT (Network Address Translation) & Ports",
      "Routing, Switching & Network Topologies",
    ],
  },
];

