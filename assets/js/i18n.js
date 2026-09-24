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

      "service_4_title": "Custom Glass",
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
      "lang_switch_label": "العربية",

      // Services & Facades Page Dedicated Keys
      "nav_home": "Home",
      "nav_facades": "Facade Systems",
      "services_page_title": "Services & Architectural Facade Systems | AinZara-Aluminum",
      "services_hero_tag": "Advanced Engineering & Fabrication",
      "services_hero_title": "Complete Aluminum & Glass Facade Systems for Modern Architecture",
      "services_hero_desc": "From high-rise curtain walls to structural glazing, thermal break joinery, and architectural cladding, AinZara-Aluminum delivers turnkey facade engineering built to European standards.",
      "services_cta_quote": "Request Quotation",
      "services_cta_view_gallery": "View Facades Gallery",
      "services_breadcrumb_home": "Home",
      "services_breadcrumb_services": "Services & Facades",

      "svc_curtain_wall_title": "Curtain Wall Systems",
      "svc_curtain_wall_desc": "High-performance unitized and stick curtain wall systems providing panoramic exterior views, unmatched wind load resistance, and premium thermal and acoustic insulation.",
      "svc_curtain_wall_feat1": "Stick & Unitized prefabricated systems",
      "svc_curtain_wall_feat2": "Double & triple glazed thermal insulation",
      "svc_curtain_wall_feat3": "European certified alloy (AW 6063 T6)",

      "svc_structural_glazing_title": "Structural Silicone Glazing",
      "svc_structural_glazing_desc": "Sleek frameless glass exterior facades bonded with high-grade structural silicone for a flush, seamless architectural look.",
      "svc_structural_glazing_feat1": "Four-sided and two-sided structural silicone glazing",
      "svc_structural_glazing_feat2": "High UV and extreme weather resistance",
      "svc_structural_glazing_feat3": "Integrated concealed openable sashes",

      "svc_cladding_title": "Aluminum Composite Cladding (Alucobond)",
      "svc_cladding_desc": "Fire-rated composite panels and ventilated facades for exterior building cladding with contemporary finishes, long-lasting durability, and thermal barrier backing.",
      "svc_cladding_feat1": "Fire-retardant core panels (Class A2 / B1)",
      "svc_cladding_feat2": "Ventilated facade substructure systems",
      "svc_cladding_feat3": "Wide variety of PVDF & metallic colors",

      "svc_spider_title": "Spider Glass Systems",
      "svc_spider_desc": "Point-fixed architectural glass facade systems utilizing 316 stainless steel spider fittings and glass fins, ideal for monumental entrance halls, atrium lobbies, and show facades.",
      "svc_spider_feat1": "Marine-grade AISI 316 stainless steel spiders",
      "svc_spider_feat2": "Laminated & tempered safety glass",
      "svc_spider_feat3": "Maximum light transmission & transparency",

      "svc_louvers_title": "Architectural Sun Louvers & Shading",
      "svc_louvers_desc": "Aerodynamic aluminum sun blades and louvers designed to reduce solar heat gain, optimize natural daylighting, and create dynamic building envelope aesthetics.",
      "svc_louvers_feat1": "Aerofoil, box, and continuous louver profiles",
      "svc_louvers_feat2": "Significant reduction in building cooling costs",
      "svc_louvers_feat3": "Custom powder-coated architectural finishes",

      "svc_thermal_doors_title": "Thermal Break Windows & Large Sliding Doors",
      "svc_thermal_doors_desc": "Heavy-duty European profile systems with polyamide thermal insulation strips, tilt-and-turn mechanisms, and heavy lift-and-slide panoramic patio doors.",
      "svc_thermal_doors_feat1": "Polyamide thermal barrier preventing heat transfer",
      "svc_thermal_doors_feat2": "Multi-point perimeter locking hardware",
      "svc_thermal_doors_feat3": "Smooth sliding for oversized heavy glass panes",

      "svc_custom_glass_title": "Architectural Glass Processing & Balustrades",
      "svc_custom_glass_desc": "State-of-the-art tempering, laminating, double-glazing, curved glass production, and frameless glass balustrades for balconies and stairs.",
      "svc_custom_glass_feat1": "CNC glass cutting, edgework & polishing",
      "svc_custom_glass_feat2": "Acoustic & security laminated glass",
      "svc_custom_glass_feat3": "Frameless glass balustrades & railings",

      "svc_engineering_title": "Engineering Studies, Fabrication & Installation",
      "svc_engineering_desc": "Complete engineering cycle from 3D architectural shop drawings, static wind load calculations, CNC automated fabrication to expert certified installation.",
      "svc_engineering_feat1": "Structural & thermal simulation calculations",
      "svc_engineering_feat2": "High-precision CNC profile machining",
      "svc_engineering_feat3": "Strict quality control & on-site warranty",

      "gallery_section_badge": "Project Showcase",
      "gallery_section_title": "Facade Systems & Architectural Implementations",
      "gallery_section_subtitle": "Explore our architectural facade systems installed with European specifications and superior finishing.",
      "gallery_filter_all": "All Facades",
      "gallery_filter_curtain": "Curtain Walls",
      "gallery_filter_structural": "Structural Glazing",
      "gallery_filter_cladding": "Cladding & Louvers",
      "gallery_filter_residential": "Residential & Towers",

      "spec_1_title": "Thermal Insulation",
      "spec_1_desc": "Uw down to 1.1 W/m²K with European thermal break",
      "spec_2_title": "Acoustic Attenuation",
      "spec_2_desc": "Sound reduction Rw up to 45 dB for tranquil interiors",
      "spec_3_title": "Wind & Weather Proof",
      "spec_3_desc": "Engineered to withstand extreme wind loads & harsh weather",
      "spec_4_title": "European Certification",
      "spec_4_desc": "EN ISO 12567, EN 13830 & CE certified quality",

      "cta_ready_title": "Ready to elevate your building facade?",
      "cta_ready_desc": "Contact our engineering team today for technical consultation, system selection, and tailored quotations.",
      "cta_call_us": "Call Engineering Team",
      "cta_whatsapp": "WhatsApp Consultation",

      // 404 Page
      "page_not_found_title": "404 - Page Not Found",
      "page_not_found_desc": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
      "back_to_home": "Back to Home",

      
      // Meta
      "meta_desc": "Aluminum & glass manufacturing in Tripoli, Libya - curtain walls, facades, thermal-break windows and doors built to European specifications. Request a free quote.",
      
      // Badges
      "badge_en13830": "EN 13830",
      "badge_frameless": "Frameless",
      "badge_fire_rated": "Fire Rated",
      "badge_inox316": "Inox 316",
      "badge_solar_control": "Solar Control",
      "badge_lift_slide": "Lift & Slide",
      "badge_turnkey": "Turnkey",
      "badge_commercial": "Commercial",

      // Gallery Items
      "gallery_item_curtain_wall_title": "Curtain Wall",
      "gallery_item_curtain_wall_desc": "High-Rise Commercial Glass Tower",
      "gallery_item_structural_glazing_title": "Structural Glazing",
      "gallery_item_structural_glazing_desc": "Seamless Glass Skin Architecture",
      "gallery_item_cladding_title": "Cladding / Alucobond",
      "gallery_item_cladding_desc": "Contemporary Composite Facade",
      "gallery_item_residential_title": "Residential Building",
      "gallery_item_residential_desc": "Modern Apartment Complex Facade",
      "gallery_item_spider_title": "Spider Glass",
      "gallery_item_spider_desc": "Grand Entrance Point-Fixed Wall",
      "gallery_item_louvers_title": "Sun Louvers",
      "gallery_item_louvers_desc": "Aerofoil Solar Shading Blades",
      "gallery_item_showroom_title": "Commercial Showroom",
      "gallery_item_showroom_desc": "Expansive Panoramic Storefront",
      "gallery_item_office_title": "Office Complex",
      "gallery_item_office_desc": "Geometric Glass & Aluminum Envelope",
      "gallery_item_engineering_title": "Engineering Detail",
      "gallery_item_engineering_desc": "Thermal Break Polyamide Joinery",

      // Index Teaser
      "services_teaser_badge": "Facade Engineering & Implementation",
      "services_teaser_title": "Discover Our Extensive Architecture Works",
      "services_teaser_desc": "From cutting-edge curtain walls and thermal break windows to monumental spider glass systems, we adhere to top-tier European standards in all our facade engineering projects.",
      "services_teaser_btn_1": "View All Services",
      "services_teaser_btn_2": "Speak with our Team"
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

      "service_4_title": "زجاج مخصص",
      "service_4_desc": "نحن متخصصون في تصنيع الزجاج المنحني وجميع أنواع الزجاج للشرفات والسلالم والأسوار الزجاجية.",

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
      "lang_switch_label": "English",

      // Services & Facades Page Dedicated Keys (Arabic)
      "nav_home": "الرئيسية",
      "nav_facades": "أنظمة الواجهات",
      "services_page_title": "خدماتنا وأنظمة الواجهات المعمارية | عين زارة للألمنيوم",
      "services_hero_tag": "هندسة متقدمة وتصنيع احترافي",
      "services_hero_title": "حلول وأنظمة الواجهات الزجاجية والألمنيوم المتكاملة للمباني الحديثة",
      "services_hero_desc": "من الواجهات الزجاجية المستمرة (الكيرتن وول) للأبراج والمباني إلى الزجاج الإنشائي، والكسوات المعمارية (الكلادينج)، والأبواب والنوافذ العازلة حرارياً، تقدم عين زارة للألمنيوم حلولاً متكاملة وفق أعلى المواصفات الأوروبية.",
      "services_cta_quote": "طلب عرض سعر",
      "services_cta_view_gallery": "مشاهدة معرض الواجهات",
      "services_breadcrumb_home": "الرئيسية",
      "services_breadcrumb_services": "خدماتنا والواجهات",

      "svc_curtain_wall_title": "الواجهات الزجاجية المستمرة (الكيرتن وول)",
      "svc_curtain_wall_desc": "أنظمة الواجهات الزجاجية المستمرة (Unitized & Stick Systems) التي تمنح المباني إطلالات بانورامية فخمة مع مقاومة فائقة لضغط الرياح وعزل حراري وصوتي عالي الكفاءة.",
      "svc_curtain_wall_feat1": "أنظمة كيرتن وول مجزأة ومجمعة مسبقاً",
      "svc_curtain_wall_feat2": "زجاج مزدوج وثلاثي عازل للحرارة والصوت",
      "svc_curtain_wall_feat3": "سبائك ألمنيوم معتمدة وفق المعايير الأوروبية (AW 6063 T6)",

      "svc_structural_glazing_title": "واجهات الزجاج الإنشائي (Structural Glazing)",
      "svc_structural_glazing_desc": "واجهات زجاجية ملساء ومستوية بدون فواصل ألمنيوم بارزة من الخارج، مثبتة بالسليكون الإنشائي عالي المتانة لمظهر هندسي عصري وأنيق.",
      "svc_structural_glazing_feat1": "تثبيت هيكلي ثنائي ورباعي الأطراف",
      "svc_structural_glazing_feat2": "مقاومة فائقة للأشعة فوق البنفسجية والعوامل الجوية",
      "svc_structural_glazing_feat3": "إمكانية دمج فتحات تهوية مخفية تماماً",

      "svc_cladding_title": "كسوات الألمنيوم والكلادينج المعماري",
      "svc_cladding_desc": "ألواح الألمنيوم المركبة المقاومة للحريق والواجهات المهواة لتغطية واجهات المباني بأحدث التشطيبات العصرية مع حماية هيكل المبنى والعزل الحراري.",
      "svc_cladding_feat1": "ألواح مقاومة لانتشار الحريق بمواصفات عالمية (Class A2 / B1)",
      "svc_cladding_feat2": "أنظمة تثبيت خلفية مهواة تمنع الرطوبة",
      "svc_cladding_feat3": "تنوع كبير في ألوان الـ PVDF والتشطيبات المعدنية",

      "svc_spider_title": "واجهات الزجاج العنكبوتي (Spider Glass)",
      "svc_spider_desc": "أنظمة تثبيت الزجاج النقطي بإكسسوارات إستانلس ستيل (Spider Fittings) مع زعانف زجاجية، مثالية للمداخل الفاخرة والمجمعات والمباني الراقية.",
      "svc_spider_feat1": "إكسسوارات سبايدر من الستانلس ستيل المقاوم للصدأ 316",
      "svc_spider_feat2": "زجاج أمان مقسى ومصفح عالي القوة",
      "svc_spider_feat3": "أقصى درجات الشفافية ونفاذ الإضاءة الطبيعية",

      "svc_louvers_title": "كاسرات الشمس ولوفرات الألمنيوم المعمارية",
      "svc_louvers_desc": "شفرات ولوفرات ألمنيوم هوائية وثابتة ومتحركة لتقليل الحمل الحراري الشمسي وتوفير الطاقة مع إضفاء لمسة جمالية ديناميكية للمبنى.",
      "svc_louvers_feat1": "قطاعات إيروفويل ومستطيلة ومتصلة",
      "svc_louvers_feat2": "تخفيض استهلاك الطاقة والتكييف بشكل ملحوظ",
      "svc_louvers_feat3": "دهانات إلكتروستاتيكية معمارية مقاومة للتقلبات المناخية",

      "svc_thermal_doors_title": "الأبواب والنوافذ العازلة حرارياً والأنظمة السحابة الكبيرة",
      "svc_thermal_doors_desc": "قطاعات ألمنيوم أوروبية معزولة بجسور البولي أميد الحرارية، وآليات رفع وسحب (Lift & Slide) للأبواب العملاقة ونوافذ قلاب ومفصلي محكمة الإغلاق.",
      "svc_thermal_doors_feat1": "جسر بولي أميد عازل يمنع انتقال الحرارة والبرودة",
      "svc_thermal_doors_feat2": "إكسسوارات إغلاق محكمة متعددة النقاط",
      "svc_thermal_doors_feat3": "حركة انسيابية فائقة للألواح الزجاجية الكبيرة",

      "svc_custom_glass_title": "تصنيع وتشكيل الزجاج المعماري والدرابزينات",
      "svc_custom_glass_desc": "خطوط إنتاج متطورة لمعالجة وتقسية وتصفيح الزجاج، والزجاج المزدوج المنحني، والدرابزينات الزجاجية ذاتية التثبيت للشرفات والسلالم.",
      "svc_custom_glass_feat1": "قص وشطف الزجاج بدقة CNC عالية",
      "svc_custom_glass_feat2": "زجاج مصفح عازل للصوت وضد الكسر",
      "svc_custom_glass_feat3": "درابزينات زجاجية بدون إطارات للشرفات والدرج",

      "svc_engineering_title": "الدراسات الهندسية والتصنيع والتركيب الميداني",
      "svc_engineering_desc": "دورة عمل هندسية متكاملة تشمل المخططات التنفيذية، وحسابات أحمال الرياح، والتصنيع الآلي الدقيق، والتركيب الميداني بإشراف مهندسين مختصين.",
      "svc_engineering_feat1": "حسابات إنشائية ومحاكاة للعزل الحراري",
      "svc_engineering_feat2": "تشغيل وتجهيز القطاعات بماكينات CNC الدقيقة",
      "svc_engineering_feat3": "رقابة جودة صارمة وضمان معتمد على الأعمال",

      "gallery_section_badge": "معرض الأعمال",
      "gallery_section_title": "معرض صور واجهات المباني والأنظمة المعمارية",
      "gallery_section_subtitle": "استكشف أحدث مشاريعنا وواجهات المباني المنفذة بأنظمة الألمنيوم والزجاج وفق أرقى المعايير الهندسية.",
      "gallery_filter_all": "جميع الواجهات",
      "gallery_filter_curtain": "واجهات كيرتن وول",
      "gallery_filter_structural": "زجاج استركشر",
      "gallery_filter_cladding": "كلادينج ولوفرات",
      "gallery_filter_residential": "عمارات وأبراج",

      "spec_1_title": "عزل حراري فائق",
      "spec_1_desc": "معامل عزل حراري يصل إلى 1.1 W/m²K بجسور حرارية أوروبية",
      "spec_2_title": "عزل صوتي متقدم",
      "spec_2_desc": "تخفيض الضوضاء حتى 45 ديسيبل لبيئة هادئة ومريحة",
      "spec_3_title": "مقاومة الرياح والأمطار",
      "spec_3_desc": "مصممة لتحمل ضغوط الرياح الشديدة ومقاومة التسريب",
      "spec_4_title": "مطابقة للمعايير الأوروبية",
      "spec_4_desc": "مطابقة للمواصفات القياسية EN 13830 وشهادات الجودة",

      "cta_ready_title": "هل ترغب في تنفيذ واجهة عصرية ومميزة لمشروعك؟",
      "cta_ready_desc": "تواصل مع فريقنا الهندسي اليوم للحصول على الاستشارة الفنية، واختيار أفضل أنظمة الواجهات، وتحديد عروض الأسعار.",
      "cta_call_us": "اتصل بالفريق الهندسي",
      "cta_whatsapp": "استشارة عبر واتساب",

      // 404 Page
      "page_not_found_title": "404 - الصفحة غير موجودة",
      "page_not_found_desc": "قد تكون الصفحة التي تبحث عنها قد أزيلت، أو تغير اسمها، أو غير متاحة مؤقتاً.",
      "back_to_home": "العودة للرئيسية",

      // Meta
      "meta_desc": "تصنيع الألمنيوم والزجاج في طرابلس، ليبيا - واجهات الكيرتن وول، النوافذ والأبواب العازلة حرارياً وفق المواصفات الأوروبية. اطلب عرض سعر مجاناً.",

      // Badges
      "badge_en13830": "EN 13830",
      "badge_frameless": "بدون إطار",
      "badge_fire_rated": "مقاوم للحريق",
      "badge_inox316": "Inox 316",
      "badge_solar_control": "تحكم حراري",
      "badge_lift_slide": "رفع وسحب",
      "badge_turnkey": "تسليم مفتاح",
      "badge_commercial": "تجاري",

      // Gallery Items
      "gallery_item_curtain_wall_title": "كيرتن وول",
      "gallery_item_curtain_wall_desc": "برج زجاجي تجاري شاهق",
      "gallery_item_structural_glazing_title": "زجاج استركشر",
      "gallery_item_structural_glazing_desc": "واجهة زجاجية معمارية ملساء",
      "gallery_item_cladding_title": "كلادينج / ألوكوبوند",
      "gallery_item_cladding_desc": "واجهة عصرية من الألمنيوم المركب",
      "gallery_item_residential_title": "مبنى سكني",
      "gallery_item_residential_desc": "واجهة مجمع سكني حديث",
      "gallery_item_spider_title": "زجاج سبايدر",
      "gallery_item_spider_desc": "واجهة مدخل رئيسي بتثبيت نقطي",
      "gallery_item_louvers_title": "كاسرات الشمس",
      "gallery_item_louvers_desc": "شفرات تظليل هوائية",
      "gallery_item_showroom_title": "معرض تجاري",
      "gallery_item_showroom_desc": "واجهة عرض بانورامية واسعة",
      "gallery_item_office_title": "مجمع مكاتب",
      "gallery_item_office_desc": "غلاف هندسي من الزجاج والألمنيوم",
      "gallery_item_engineering_title": "تفاصيل هندسية",
      "gallery_item_engineering_desc": "قطاعات معزولة بجسور البولي أميد",

      // Index Teaser
      "services_teaser_badge": "هندسة وتنفيذ الواجهات",
      "services_teaser_title": "اكتشف أعمالنا المعمارية الشاملة",
      "services_teaser_desc": "من الواجهات الزجاجية المستمرة (الكيرتن وول) المتطورة والنوافذ العازلة حرارياً إلى أنظمة الزجاج النقطي (السبايدر) الضخمة، نلتزم بأعلى المعايير الأوروبية في كافة مشاريع هندسة الواجهات لدينا.",
      "services_teaser_btn_1": "عرض كافة الخدمات",
      "services_teaser_btn_2": "تحدث مع فريقنا"
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
    
    // Meta tags
    if (dict.meta_desc) {
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict.meta_desc);
      
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', dict.meta_desc);
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
