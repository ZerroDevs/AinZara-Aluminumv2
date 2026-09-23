# AinZara-Aluminum

Official modern responsive web presentation for **AinZara Aluminum & Glass**, specializing in architectural facades, curtain walls, high-performance European-standard aluminum windows & doors, and structural glass fabrication based in Tripoli, Libya.

---

## 🌟 Features

- **🌐 Bilingual & Bi-directional (RTL / LTR)**:
  - Full native support for Arabic (RTL) and English (LTR).
  - Dynamic font swapping: *Alexandria* for clean Arabic typography, *Outfit* and *Plus Jakarta Sans* for modern English presentation.
  - Direction-aware mobile drawer, menus, and contact layouts.

- **🌓 Dark & Light Mode**:
  - Seamless theme toggle with local storage persistence.
  - Zero-flash early script initialization to prevent theme flickers.
  - Contrast-tested palettes compliant with accessibility standards.

- **📱 Fully Responsive Design**:
  - Mobile-first architecture optimized for all screen sizes from small phones (iPhone, Android) up to 4K ultra-wide displays.
  - Touch-friendly drawer navigation with animated hamburger trigger.
  - Responsive 2-column product galleries and auto-wrapping contact channels on mobile devices.

- **🏢 Interactive Product Showcase**:
  - Categorized gallery for Hinged Windows, Sliding Doors, Architectural Facades, and Glass Works.
  - Instant client-side category filtering with smooth fade-in animations.

- **📞 Structured Contact & Direct Channels**:
  - Priority-ordered direct communication channels (WhatsApp and Phone).
  - Interactive quote request form.
  - Direct email and Tripoli facility location information.

- **⚡ Performance & SEO**:
  - Vanilla JavaScript architecture with no heavy framework dependencies.
  - Modular scripts for rapid loading and effortless maintenance.
  - Semantic HTML5 structure, Open Graph metadata, `sitemap.xml`, and `robots.txt` configuration.

---

## 📁 Project Structure

```text
AinZara-Aluminumv2/
├── assets/
│   ├── css/
│   │   ├── style.css           # Core styling, layout, typography, base theme variables
│   │   └── features.css        # Responsive overrides, gallery tabs, mobile drawer, RTL rules
│   ├── js/
│   │   ├── header.js           # Sticky header & mobile drawer controller
│   │   ├── i18n.js             # Bilingual dictionary & dynamic language switcher
│   │   ├── main.js             # Core interactions, tab switching & back-to-top logic
│   │   └── theme.js            # Dark/light mode switcher & localStorage persistence
│   └── images/                 # Optimized product photos, facility imagery & icons
├── index.html                  # Main bilingual single-page website
├── robots.txt                  # Search engine crawler instructions
├── sitemap.xml                 # Canonical XML sitemap
├── LICENSE                     # Restricted / Proprietary License
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### Local Development

This project uses standard modern web technologies without requiring a build step or package manager.

To run locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ZerroDevs/AinZara-Aluminumv2.git
   cd AinZara-Aluminumv2
   ```

2. **Serve with any HTTP server**:
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
   - Using Node (`http-server` or `live-server`):
     ```bash
     npx serve .
     ```
   - Using VS Code:
     Open the folder and click **"Go Live"** with the Live Server extension.

3. **Open in browser**:
   Navigate to `http://localhost:8000`.

---

## 🛠️ Built With

- **HTML5 & Vanilla CSS3**: Semantic layouts, CSS custom properties (variables), Flexbox, and CSS Grid.
- **Vanilla JavaScript (ES6+)**: Zero framework overhead, high FPS scrolling, and minimal memory footprint.
- **FontAwesome 6**: Scalable vector icons.
- **Google Fonts**: *Alexandria*, *Outfit*, and *Plus Jakarta Sans*.

---

## 👤 Owner & Maintainer

This project is owned and maintained by:

- **Profile**: [ZerroDevs on GitHub](https://github.com/ZerroDevs)
- **Repository**: [AinZara-Aluminumv2](https://github.com/ZerroDevs/AinZara-Aluminumv2)

---

## 📄 License

This project is licensed under a **Restricted Proprietary License**. All rights are reserved by the copyright holder. See the [LICENSE](LICENSE) file for full details.
