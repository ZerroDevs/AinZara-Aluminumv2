/**
 * AinZara-Aluminum - Internationalization (i18n) Module
 * Supports English (default) and Arabic with LocalStorage persistence.
 * Uses icon font classes (no SVGs, no emojis).
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'az_lang';
  var LANG_EN = 'en';
  var LANG_AR = 'ar';

  var translations = {
    en: {
      // Document
      "page_title": "AinZara-Aluminum",
      "skip_content": "Skip to main content",

      // Navigation
      "nav_about": "About us",
      "nav_services": "Services",
      "nav_products": "Products",
      "nav_contact": "Contact",

      // Hero
      "hero_title": "We are at the forefront of our field in glass and aluminum manufacturing.",
      "hero_desc": "In our aluminum and glass manufacturing, we adhere to European specifications and ensure thermal and acoustic insulation and leak resistance.",
      "hero_btn": "Get Started",

      // About Section
      "about_badge": "Professional manufacturing with the finest materials",
      "about_p1": "AinZara-Aluminum specializes in aluminum and glass manufacturing and building facades.",
      "about_p2": "We own specialized aluminum and glass factories and provide complete facade solutions with high quality and precision.",
      "about_p3": "We specialize in building facades, curtain walls, aluminum doors and windows, and all aluminum and glass works for commercial and residential projects.",
      "about_highlight": "AinZara-Aluminum – Your partner for modern facades and high-quality aluminum and glass solutions.",

      // Services Section
      "services_badge": "Our Services",
      "service_1_title": "Glass Manufacturing",
      "service_1_desc": "Production lines for heat-strengthened glass and high-security double glazing",

      "service_2_title": "Building Facades",
      "service_2_desc": "Design, manufacturing, and installation of building facades using structural and curtain wall systems.",

      "service_3_title": "Windows and doors",
      "service_3_desc": "Manufacturing windows and doors with high-quality European-standard aluminum profiles",

      "service_4_title": "Commercial painting",
      "service_4_desc": "We specialize in manufacturing curved glass and all types of glass for balconies, stairs, and glass fences.",

      "btn_book_now": "Book Now",

      // Products Section
      "products_title": "Products",
      "tab_hinged": "Hinged window",
      "tab_sliding": "Sliding Door",
      "tab_facades": "Facades",
      "tab_glass": "Glass works",

      // Contact Section
      "contact_badge": "Contact Us",
      "contact_title": "Feel Free To Reach Out",
      "ph_fullname": "Full Name",
      "ph_email": "Email",
      "ph_phone": "Phone Number",
      "ph_message": "Your Message",
      "contact_privacy": "I have read and understand the privacy policy.",
      "contact_submit": "Submit",

      // Footer
      "footer_quick_links": "Quick Links",
      "footer_link_about": "About",
      "footer_link_services": "Services",
      "footer_link_products": "Products",
      "footer_details": "Details",
      "footer_legal": "Legal Notice",
      "footer_privacy": "Privacy Policy",
      "footer_address": "AinZara - Tripoli / Libya",
      "footer_contact": "Contact",
      "footer_back_top": "Back to top",
      "footer_rights": "All Rights Reserved",
      "footer_made_by": "Made by Osama Abdallatif",
      "brand_name": "AinZara-Aluminum",

      // Switcher Button Label
      "lang_switch_label": "العربية"
    },
    ar: {
      // Document
      "page_title": "عين زارة للألمنيوم",
      "skip_content": "الانتقال إلى المحتوى الرئيسي",

      // Navigation
      "nav_about": "من نحن",
      "nav_services": "خدماتنا",
      "nav_products": "منتجاتنا",
      "nav_contact": "اتصل بنا",

      // Hero
      "hero_title": "نحن في طليعة مجالنا في تصنيع الزجاج والألمنيوم.",
      "hero_desc": "في تصنيع الألمنيوم والزجاج، نلتزم بالمواصفات الأوروبية ونضمن العزل الحراري والصوتي ومقاومة التسريب.",
      "hero_btn": "ابدأ الآن",

      // About Section
      "about_badge": "تصنيع احترافي بأجود المواد",
      "about_p1": "تتخصص عين زارة للألمنيوم في تصنيع الألمنيوم والزجاج وواجهات المباني.",
      "about_p2": "نمتلك مصانع متخصصة في الألمنيوم والزجاج ونقدم حلولاً متكاملة للواجهات بجودة ودقة عالية.",
      "about_p3": "نحن متخصصون في واجهات المباني، والواجهات الزجاجية المستمرة (الكيرتن وول)، وأبواب ونوافذ الألمنيوم، وكافة أعمال الألمنيوم والزجاج للمشاريع التجارية والسكنية.",
      "about_highlight": "عين زارة للألمنيوم – شريككم للواجهات الحديثة وحلول الألمنيوم والزجاج عالية الجودة.",

      // Services Section
      "services_badge": "خدماتنا",
      "service_1_title": "تصنيع الزجاج",
      "service_1_desc": "خطوط إنتاج للزجاج المقسى حرارياً والزجاج المزدوج عالي الأمان",

      "service_2_title": "واجهات المباني",
      "service_2_desc": "تصميم وتصنيع وتركيب واجهات المباني باستخدام أنظمة الواجهات الإنشائية والمستمرة.",

      "service_3_title": "النوافذ والأبواب",
      "service_3_desc": "تصنيع النوافذ والأبواب بقطاعات ألمنيوم عالية الجودة مطابقة للمواصفات الأوروبية",

      "service_4_title": "أعمال الزجاج والديكور",
      "service_4_desc": "نختص بتصنيع الزجاج المنحني وجميع أنواع الزجاج للشرفات والسلالم والحواجز الزجاجية.",

      "btn_book_now": "احجز الآن",

      // Products Section
      "products_title": "منتجاتنا",
      "tab_hinged": "نافذة مفصلية",
      "tab_sliding": "باب سحاب",
      "tab_facades": "واجهات",
      "tab_glass": "أعمال الزجاج",

      // Contact Section
      "contact_badge": "تواصل معنا",
      "contact_title": "لا تتردد في التواصل معنا",
      "ph_fullname": "الاسم الكامل",
      "ph_email": "البريد الإلكتروني",
      "ph_phone": "رقم الهاتف",
      "ph_message": "رسالتك",
      "contact_privacy": "لقد قرأت وفهمت سياسة الخصوصية.",
      "contact_submit": "إرسال",

      // Footer
      "footer_quick_links": "روابط سريعة",
      "footer_link_about": "من نحن",
      "footer_link_services": "خدماتنا",
      "footer_link_products": "منتجاتنا",
      "footer_details": "التفاصيل",
      "footer_legal": "إشعار قانوني",
      "footer_privacy": "سياسة الخصوصية",
      "footer_address": "عين زارة - طرابلس / ليبيا",
      "footer_contact": "للتواصل معنا",
      "footer_back_top": "العودة للأعلى",
      "footer_rights": "جميع الحقوق محفوظة",
      "footer_made_by": "صُنع بواسطة أسامة عبد اللطيف",
      "brand_name": "عين زارة للألمنيوم",

      // Switcher Button Label
      "lang_switch_label": "English"
    }
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || LANG_EN;
    } catch (e) {
      return LANG_EN;
    }
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // LocalStorage might be disabled or full
    }
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = LANG_EN;

    var isRtl = lang === LANG_AR;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    if (isRtl) {
      document.body.classList.add('rtl-layout');
    } else {
      document.body.classList.remove('rtl-layout');
    }

    var dict = translations[lang];

    // Document title
    if (dict.page_title) {
      document.title = dict.page_title;
    }

    // Translate standard text elements
    var translatables = document.querySelectorAll('[data-i18n]');
    translatables.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        var strong = el.querySelector('strong');
        var icon = el.querySelector('i');
        if (strong) {
          strong.textContent = dict[key];
        } else if (icon) {
          var iconHtml = icon.outerHTML;
          el.innerHTML = dict[key] + ' ' + iconHtml;
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // Translate input placeholders
    var inputsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    inputsWithPlaceholder.forEach(function (input) {
      var key = input.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        input.setAttribute('placeholder', dict[key]);
      }
    });

    // Update language toggle buttons
    var langButtons = document.querySelectorAll('.lang-toggle');
    langButtons.forEach(function (btn) {
      var textSpan = btn.querySelector('.lang-label');
      if (textSpan) {
        textSpan.textContent = dict.lang_switch_label;
      }
      btn.setAttribute('aria-label', lang === LANG_EN ? 'Switch to Arabic' : 'Switch to English');
      btn.setAttribute('title', lang === LANG_EN ? 'Switch to Arabic' : 'Switch to English');
    });

    setStoredLang(lang);
    window.dispatchEvent(new CustomEvent('az:langChange', { detail: { lang: lang } }));
  }

  function toggleLanguage() {
    var current = document.documentElement.getAttribute('lang') || LANG_EN;
    var next = current === LANG_AR ? LANG_EN : LANG_AR;
    applyLanguage(next);
  }

  // Initial immediate application
  var initialLang = getStoredLang();
  document.documentElement.setAttribute('lang', initialLang);
  document.documentElement.setAttribute('dir', initialLang === LANG_AR ? 'rtl' : 'ltr');

  function init() {
    applyLanguage(initialLang);

    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.lang-toggle');
      if (btn) {
        e.preventDefault();
        toggleLanguage();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.AZI18n = {
    getLang: function () {
      return document.documentElement.getAttribute('lang') || LANG_EN;
    },
    setLang: applyLanguage,
    toggle: toggleLanguage,
    t: function (key) {
      var l = getStoredLang();
      return (translations[l] && translations[l][key]) || key;
    }
  };
})();
