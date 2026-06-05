'use strict';
const translations = {
  en: {
    'nav.features': 'Features',
    'nav.roles': "Who It's For",
    'nav.about': 'About',
    'nav.getStarted': 'Get Started',
    'hero.badge': 'Intelligent Healthcare Platform 2025',
    'hero.title1': 'Healthcare, Reimagined',
    'hero.title2': 'For Everyone.',
    'hero.subtitle': 'A unified platform connecting doctors, patients, and pharmacies — with built-in accessibility for all users. Intelligent prescriptions, real-time pharmacy availability, and seamless communication in one place.',
    'hero.cta': 'Start Your Journey',
    'hero.demo': 'Watch Demo',
    'hero.trust.patients': 'Patients',
    'hero.trust.doctors': 'Doctors',
    'hero.trust.pharmacies': 'Pharmacies',
    'hero.trust.uptime': 'Uptime',
    'features.label': 'Platform Capabilities',
    'features.title': 'Everything healthcare needs, unified.',
    'features.subtitle': 'From intelligent prescriptions to accessibility-first design — built for the real world of modern healthcare.',
    'features.rx.title': 'Smart Prescriptions',
    'features.rx.desc': 'Doctors create digital prescriptions with real-time conflict detection and instant pharmacy routing.',
    'features.rx.tag': 'AI-Powered',
    'features.pharmacy.title': 'Pharmacy Network',
    'features.pharmacy.desc': 'Live medication availability across hundreds of pharmacies with distance-based sorting and alternatives.',
    'features.pharmacy.tag': 'Real-time',
    'features.timeline.title': 'Medical Timeline',
    'features.timeline.desc': 'Complete patient history — prescriptions, visits, labs, radiology — in a unified chronological view.',
    'features.timeline.tag': 'Unified Records',
    'features.a11y.title': 'Accessibility First',
    'features.a11y.desc': 'Voice navigation, screen reader support, high contrast, large text — built-in, not bolted on.',
    'features.a11y.tag': 'WCAG 2.1 AAA',
    'features.comms.title': 'Direct Communication',
    'features.comms.desc': 'Secure doctor-patient messaging, appointment scheduling, and clinic contact — all in one platform.',
    'features.comms.tag': 'Secure Messaging',
    'features.analytics.title': 'Health Analytics',
    'features.analytics.desc': 'Visual charts for blood pressure, blood sugar, and heart rate with trend analysis and alerts.',
    'features.analytics.tag': 'Live Charts',
    'stats.label': 'Proven Impact',
    'stats.title': 'Trusted by thousands of healthcare professionals',
    'stats.subtitle': 'From solo practitioners to hospital networks — Smart Medical System scales with your needs.',
    'stats.cta': 'Join the Platform',
    'stats.patients': 'Active Patients',
    'stats.doctors': 'Registered Doctors',
    'stats.pharmacies': 'Partner Pharmacies',
    'stats.prescriptions': 'Prescriptions',
    'roles.label': 'Choose Your Path',
    'roles.title': 'Who are you today?',
    'roles.subtitle': 'Select your role to enter your personalized experience. Every user gets a tailored dashboard designed for their needs.',
    'roles.featured': 'Most Used',
    'roles.doctor.title': 'Doctor',
    'roles.doctor.desc': 'Create prescriptions, manage patients, check pharmacy availability, and detect medication conflicts in real-time.',
    'roles.doctor.f1': 'Smart Prescription Builder',
    'roles.doctor.f2': 'Conflict Detection',
    'roles.doctor.f3': 'Pharmacy Integration',
    'roles.doctor.f4': 'Patient Analytics',
    'roles.doctor.cta': 'Enter as Doctor',
    'roles.patient.title': 'Patient',
    'roles.patient.desc': 'Access your complete medical history, view prescriptions, track health metrics, and communicate directly with your doctor.',
    'roles.patient.f1': 'Medical Timeline',
    'roles.patient.f2': 'Health Analytics',
    'roles.patient.f3': 'Doctor Communication',
    'roles.patient.f4': 'Emergency Alerts',
    'roles.patient.cta': 'Enter as Patient',
    'roles.a11y.title': 'Accessibility Mode',
    'roles.a11y.desc': 'Designed for users with disabilities. Full voice navigation, screen reader support, large text, and high contrast built-in.',
    'roles.a11y.f1': 'Voice Navigation',
    'roles.a11y.f2': 'Screen Reader',
    'roles.a11y.f3': 'High Contrast',
    'roles.a11y.f4': 'Large Text Mode',
    'roles.a11y.cta': 'Accessibility Mode',
    'a11y.panel.title': 'Accessibility Controls',
    'a11y.read': 'Read Page',
    'a11y.pause': 'Pause',
    'a11y.stop': 'Stop',
    'a11y.largeText': 'Large Text',
    'a11y.contrast': 'High Contrast',
    'footer.tagline': 'Intelligent healthcare for everyone.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contact': 'Contact',
    'footer.accessibility': 'Accessibility',
    'footer.copy': '© 2025 Smart Medical System. Built for healthcare innovation.',
    'voice.welcome': 'Welcome to Smart Medical System. We are happy to assist you.',
  },
  ar: {
    'nav.features': 'المميزات',
    'nav.roles': 'لمن هذا النظام',
    'nav.about': 'عن النظام',
    'nav.getStarted': 'ابدأ الآن',
    'hero.badge': 'منصة الرعاية الصحية الذكية 2025',
    'hero.title1': 'الرعاية الصحية، أُعيد تصورها',
    'hero.title2': 'للجميع.',
    'hero.subtitle': 'منصة موحدة تربط الأطباء والمرضى والصيدليات — مع إمكانية وصول مدمجة لجميع المستخدمين. وصفات طبية ذكية، وتوفر الدواء في الوقت الحقيقي، وتواصل سلس في مكان واحد.',
    'hero.cta': 'ابدأ رحلتك',
    'hero.demo': 'شاهد العرض',
    'hero.trust.patients': 'مريض',
    'hero.trust.doctors': 'طبيب',
    'hero.trust.pharmacies': 'صيدلية',
    'hero.trust.uptime': 'وقت التشغيل',
    'features.label': 'إمكانيات المنصة',
    'features.title': 'كل ما تحتاجه الرعاية الصحية، موحد في مكان واحد.',
    'features.subtitle': 'من الوصفات الطبية الذكية إلى التصميم الأول بالإمكانية — مبني لعالم الرعاية الصحية الحديثة الحقيقي.',
    'features.rx.title': 'وصفات طبية ذكية',
    'features.rx.desc': 'يقوم الأطباء بإنشاء وصفات طبية رقمية مع اكتشاف التعارض في الوقت الفعلي وتوجيه الصيدلية الفوري.',
    'features.rx.tag': 'مدعوم بالذكاء الاصطناعي',
    'features.pharmacy.title': 'شبكة الصيدليات',
    'features.pharmacy.desc': 'توفر الأدوية المباشر عبر مئات الصيدليات مع الترتيب حسب المسافة والبدائل.',
    'features.pharmacy.tag': 'في الوقت الحقيقي',
    'features.timeline.title': 'الجدول الزمني الطبي',
    'features.timeline.desc': 'التاريخ الطبي الكامل للمريض — الوصفات والزيارات والمختبرات والأشعة — في عرض زمني موحد.',
    'features.timeline.tag': 'سجلات موحدة',
    'features.a11y.title': 'إمكانية الوصول أولاً',
    'features.a11y.desc': 'التنقل الصوتي، ودعم قارئ الشاشة، والتباين العالي، والنص الكبير — مدمج وليس ملحقاً.',
    'features.a11y.tag': 'معيار WCAG 2.1',
    'features.comms.title': 'تواصل مباشر',
    'features.comms.desc': 'رسائل آمنة بين الطبيب والمريض، وجدولة المواعيد، والتواصل مع العيادة — كل شيء في منصة واحدة.',
    'features.comms.tag': 'رسائل آمنة',
    'features.analytics.title': 'تحليلات الصحة',
    'features.analytics.desc': 'مخططات بصرية لضغط الدم وسكر الدم ومعدل ضربات القلب مع تحليل الاتجاهات والتنبيهات.',
    'features.analytics.tag': 'مخططات مباشرة',
    'stats.label': 'تأثير مثبت',
    'stats.title': 'موثوق من قِبل آلاف المتخصصين في الرعاية الصحية',
    'stats.subtitle': 'من الممارسين المنفردين إلى شبكات المستشفيات — يتوسع النظام الطبي الذكي وفق احتياجاتك.',
    'stats.cta': 'انضم إلى المنصة',
    'stats.patients': 'مريض نشط',
    'stats.doctors': 'طبيب مسجل',
    'stats.pharmacies': 'صيدلية شريكة',
    'stats.prescriptions': 'وصفة طبية',
    'roles.label': 'اختر مسارك',
    'roles.title': 'من أنت اليوم؟',
    'roles.subtitle': 'حدد دورك للدخول إلى تجربتك المخصصة. كل مستخدم يحصل على لوحة تحكم مصممة خصيصاً لاحتياجاته.',
    'roles.featured': 'الأكثر استخداماً',
    'roles.doctor.title': 'طبيب',
    'roles.doctor.desc': 'إنشاء الوصفات الطبية وإدارة المرضى والتحقق من توفر الصيدلية واكتشاف تعارض الأدوية في الوقت الفعلي.',
    'roles.doctor.f1': 'منشئ الوصفات الذكي',
    'roles.doctor.f2': 'اكتشاف التعارضات',
    'roles.doctor.f3': 'تكامل الصيدليات',
    'roles.doctor.f4': 'تحليلات المرضى',
    'roles.doctor.cta': 'الدخول كطبيب',
    'roles.patient.title': 'مريض',
    'roles.patient.desc': 'الوصول إلى تاريخك الطبي الكامل ومشاهدة الوصفات الطبية وتتبع مقاييس الصحة والتواصل مباشرة مع طبيبك.',
    'roles.patient.f1': 'الجدول الزمني الطبي',
    'roles.patient.f2': 'تحليلات الصحة',
    'roles.patient.f3': 'التواصل مع الطبيب',
    'roles.patient.f4': 'تنبيهات الطوارئ',
    'roles.patient.cta': 'الدخول كمريض',
    'roles.a11y.title': 'وضع إمكانية الوصول',
    'roles.a11y.desc': 'مصمم للمستخدمين ذوي الإعاقة. التنقل الصوتي الكامل ودعم قارئ الشاشة والنص الكبير والتباين العالي مدمج.',
    'roles.a11y.f1': 'التنقل الصوتي',
    'roles.a11y.f2': 'قارئ الشاشة',
    'roles.a11y.f3': 'تباين عالٍ',
    'roles.a11y.f4': 'وضع النص الكبير',
    'roles.a11y.cta': 'وضع إمكانية الوصول',
    'a11y.panel.title': 'إعدادات إمكانية الوصول',
    'a11y.read': 'قراءة الصفحة',
    'a11y.pause': 'إيقاف مؤقت',
    'a11y.stop': 'إيقاف',
    'a11y.largeText': 'نص كبير',
    'a11y.contrast': 'تباين عالٍ',
    'footer.tagline': 'رعاية صحية ذكية للجميع.',
    'footer.privacy': 'الخصوصية',
    'footer.terms': 'الشروط',
    'footer.contact': 'اتصل بنا',
    'footer.accessibility': 'إمكانية الوصول',
    'footer.copy': '© 2025 النظام الطبي الذكي. مبني للابتكار في مجال الرعاية الصحية.',
    'voice.welcome': 'مرحباً بك في النظام الطبي الذكي. يسعدنا مساعدتك.',
  }
};
const state = {
  lang: localStorage.getItem('sms-lang') || 'en',
  theme: localStorage.getItem('sms-theme') || 'light',
  largeText: localStorage.getItem('sms-largetext') === 'true',
  highContrast: localStorage.getItem('sms-highcontrast') === 'true',
  a11yPanelOpen: false,
  ttsActive: false,
  ttsPaused: false,
  ttsUtterance: null,
  statsAnimated: false,
  mobileMenuOpen: false,
};
function t(key) {
  return translations[state.lang][key] || translations.en[key] || key;
}
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation) el.textContent = translation;
  });
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === 'ar' ? 'rtl' : 'ltr';
  const langLabel = document.getElementById('langLabel');
  if (langLabel) langLabel.textContent = state.lang === 'ar' ? 'AR' : 'EN';
  document.title = state.lang === 'ar'
    ? 'النظام الطبي الذكي — منصة الرعاية الصحية'
    : 'Smart Medical System — Intelligent Healthcare Platform';
}

function applyTheme(theme) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('sms-theme', theme);
}

function toggleTheme() {
  applyTheme(state.theme === 'light' ? 'dark' : 'light');
}

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const themeBtn = document.getElementById('themeToggle');
  const langBtn = document.getElementById('langToggle');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');


  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  themeBtn?.addEventListener('click', () => {
    toggleTheme();
    showTopToast(
      state.theme === 'dark' ? '🌙' : '☀️',
      state.theme === 'dark' ? 'Dark Mode' : 'Light Mode',
      state.theme === 'dark' ? 'Dark mode enabled' : 'Light mode enabled',
      'info',
      2000
    );
  });

  langBtn?.addEventListener('click', () => {
toggleLanguage()
  });


  hamburger?.addEventListener('click', () => {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    hamburger.classList.toggle('open', state.mobileMenuOpen);
    hamburger.setAttribute('aria-expanded', state.mobileMenuOpen);
    mobileMenu?.classList.toggle('open', state.mobileMenuOpen);
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      state.mobileMenuOpen = false;
      hamburger?.classList.remove('open');
      hamburger?.setAttribute('aria-expanded', 'false');
      mobileMenu?.classList.remove('open');
    });
  });
}

function initRoleSelection() {
  const roles = document.querySelectorAll('.role-card');
  roles.forEach(card => {
    card.addEventListener('click', () => {
      console.log('testat');
      handleRoleSelect(card.dataset.role);
    });
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleRoleSelect(card.dataset.role);
      }
    });
    const btn = card.querySelector('.role-btn');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });
}

function handleRoleSelect(role) {
  showRoleTransition(role);
}

function showRoleTransition(role) {
  const roleNames = {
    doctor: { en: 'Doctor Dashboard', ar: 'لوحة الطبيب' },
    patient: { en: 'Patient Dashboard', ar: 'لوحة المريض' },
    accessibility: { en: 'Accessibility Mode', ar: 'وضع إمكانية الوصول' }
  };

  const roleIcons = { doctor: '👨‍⚕️', patient: '🏥', accessibility: '♿' };
  const roleColors = { doctor: 'info', patient: 'success', accessibility: 'info' };

  const name = roleNames[role]?.[state.lang] || role;

  showTopToast(
    roleIcons[role],
    name,
    state.lang === 'ar' ? 'جارٍ تحميل لوحة التحكم...' : 'Loading your dashboard...',
    roleColors[role],
    3000
  );
  if (role === 'accessibility') {
    setTimeout(() => {
      enableAccessibilityMode();
    }, 400);
    return;
  }
  setTimeout(() => {
    showTopToast(
      '🚀',
      state.lang === 'ar' ? 'قريباً' : 'Dashboard Ready',
      state.lang === 'ar'
        ? 'سيتم إضافة لوحة التحكم في التحديث القادم'
        : 'Doctor & Patient dashboards coming in the next phase!',
      'info',
      4000
    );
  }, 1200);
}
function initAccessibilityControls() {
  const fab = document.getElementById('a11yFab');
  const panel = document.getElementById('a11yPanel');
  const closeBtn = document.getElementById('a11yClose');
  const readBtn = document.getElementById('readPageBtn');
  const pauseBtn = document.getElementById('pauseReadBtn');
  const stopBtn = document.getElementById('stopReadBtn');
  const largeBtn = document.getElementById('largeTextBtn');
  const contrastBtn = document.getElementById('highContrastBtn');

  fab?.addEventListener('click', () => {
    state.a11yPanelOpen = !state.a11yPanelOpen;
    panel?.classList.toggle('open', state.a11yPanelOpen);
    panel?.setAttribute('aria-hidden', !state.a11yPanelOpen);
    fab.setAttribute('aria-expanded', state.a11yPanelOpen);
  });
  closeBtn?.addEventListener('click', () => {
    state.a11yPanelOpen = false;
    panel?.classList.remove('open');
    panel?.setAttribute('aria-hidden', 'true');
    fab?.setAttribute('aria-expanded', 'false');
  });
  readBtn?.addEventListener('click', () => readPage());
  pauseBtn?.addEventListener('click', () => {
    if (window.speechSynthesis) {
      if (state.ttsPaused) {
        window.speechSynthesis.resume();
        state.ttsPaused = false;
      } else {
        window.speechSynthesis.pause();
        state.ttsPaused = true;
      }
    }
  });
  stopBtn?.addEventListener('click', () => stopReading());
  largeBtn?.addEventListener('click', () => {
    state.largeText = !state.largeText;
    document.documentElement.classList.toggle('large-text', state.largeText);
    largeBtn.setAttribute('aria-pressed', state.largeText);
    localStorage.setItem('sms-largetext', state.largeText);
    showTopToast(
      '🔡',
      state.lang === 'ar' ? 'حجم النص' : 'Text Size',
      state.largeText
        ? (state.lang === 'ar' ? 'تم تفعيل النص الكبير' : 'Large text enabled')
        : (state.lang === 'ar' ? 'تم تعطيل النص الكبير' : 'Large text disabled'),
      'info', 2000
    );
  });
  contrastBtn?.addEventListener('click', () => {
    state.highContrast = !state.highContrast;
    document.documentElement.classList.toggle('high-contrast', state.highContrast);
    contrastBtn.setAttribute('aria-pressed', state.highContrast);
    localStorage.setItem('sms-highcontrast', state.highContrast);
    showTopToast(
      '◑',
      state.lang === 'ar' ? 'التباين' : 'Contrast',
      state.highContrast
        ? (state.lang === 'ar' ? 'تم تفعيل التباين العالي' : 'High contrast enabled')
        : (state.lang === 'ar' ? 'تم تعطيل التباين العالي' : 'High contrast disabled'),
      'info', 2000
    );
  });
  if (state.largeText) {
    document.documentElement.classList.add('large-text');
    largeBtn?.setAttribute('aria-pressed', 'true');
  }
  if (state.highContrast) {
    document.documentElement.classList.add('high-contrast');
    contrastBtn?.setAttribute('aria-pressed', 'true');
  }
}

function enableAccessibilityMode() {
 
  state.a11yPanelOpen = true;
  const panel = document.getElementById('a11yPanel');
  panel?.classList.add('open');
  panel?.setAttribute('aria-hidden', 'false');
  state.largeText = true;
  document.documentElement.classList.add('large-text');
  document.getElementById('largeTextBtn')?.setAttribute('aria-pressed', 'true');
  setTimeout(() => playWelcomeMessage(), 600);
}

function playWelcomeMessage() {
  const msg = t('voice.welcome');
  speakText(msg, true);
}
function speakText(text, isWelcome = false) {
  if (!window.speechSynthesis) {
    showTopToast('⚠️', 'Not Supported', 'Speech synthesis is not supported in your browser.', 'warning', 3000);
    return;
  }
  window.speechSynthesis.cancel();
  state.ttsActive = false;
  state.ttsPaused = false;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = state.lang === 'ar' ? 'ar-EG' : 'en-US';
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    const preferred = voices.find(v =>
      state.lang === 'ar'
        ? v.lang.startsWith('ar')
        : v.lang.startsWith('en') && !v.lang.includes('IN')
    );
    if (preferred) utterance.voice = preferred;
  }

  utterance.onstart = () => { state.ttsActive = true; };
  utterance.onend = () => {
    state.ttsActive = false;
    state.ttsPaused = false;
    removeHighlight();
  };
  utterance.onerror = () => { state.ttsActive = false; };

  state.ttsUtterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function readPage() {
  const sections = document.querySelectorAll(
    '.hero-content, .features-strip, .stats-section, .role-section'
  );
  let fullText = '';
  const textNodes = [];

  sections.forEach(section => {
    const paragraphs = section.querySelectorAll('h1, h2, h3, h4, p, li, .trust-num, .stat-val');
    paragraphs.forEach(p => {
      const txt = p.innerText?.trim();
      if (txt) {
        fullText += txt + '. ';
        textNodes.push(p);
      }
    });
  });

  if (!fullText) return;
  highlightSequentially(textNodes);

  speakText(fullText);
}

function highlightSequentially(nodes) {
  let index = 0;
  removeHighlight();

  function highlightNext() {
    if (!state.ttsActive || index >= nodes.length) return;
    removeHighlight();
    nodes[index]?.classList.add('tts-highlight');
    nodes[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    index++;
    setTimeout(highlightNext, 2800);
  }

  setTimeout(highlightNext, 300);
}

function removeHighlight() {
  document.querySelectorAll('.tts-highlight').forEach(el => {
    el.classList.remove('tts-highlight');
  });
}

function stopReading() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  state.ttsActive = false;
  state.ttsPaused = false;
  removeHighlight();
}
if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices(); 
  };
}
function showTopToast(icon, title, body, type = 'info', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', 'status');
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div>
      <div class="toast-title">${title}</div>
      <div class="toast-body">${body}</div>
    </div>
  `;

  container.appendChild(toast);

  const remove = () => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 300);
  };
  const timer = setTimeout(remove, duration);
  toast.addEventListener('click', () => {
    clearTimeout(timer);
    remove();
  });
}
function animateCounters() {
  if (state.statsAnimated) return;
  state.statsAnimated = true;
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value >= 1000 ? (value / 1000).toFixed(value % 1000 === 0 ? 0 : 1) + 'K' : value;
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K' : target;
    };
    requestAnimationFrame(tick);
  });
}
function initScrollReveal() {
  const revealTargets = [
    { selector: '.feature-card', delays: true },
    { selector: '.stat-card', delays: true },
    { selector: '.role-card', delays: true },
    { selector: '.stats-text', delays: false },
    { selector: '.section-label', delays: false },
  ];
  revealTargets.forEach(({ selector, delays }) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.classList.add('reveal');
      if (delays) el.classList.add(`reveal-delay-${(i % 6) + 1}`);
    });
  });
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target.closest('.stats-section')) {
            animateCounters();
          }
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);
}
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (state.a11yPanelOpen) {
        state.a11yPanelOpen = false;
        document.getElementById('a11yPanel')?.classList.remove('open');
        document.getElementById('a11yPanel')?.setAttribute('aria-hidden', 'true');
        document.getElementById('a11yFab')?.focus();
      }
      if (state.mobileMenuOpen) {
        state.mobileMenuOpen = false;
        document.getElementById('hamburger')?.classList.remove('open');
        document.getElementById('mobileMenu')?.classList.remove('open');
        document.getElementById('hamburger')?.focus();
      }
      if (state.ttsActive) stopReading();
    }
  });
}
function initWatchDemo() {
  document.getElementById('watchDemoBtn')?.addEventListener('click', () => {
    showTopToast(
      '🎬',
      state.lang === 'ar' ? 'العرض التجريبي' : 'Demo',
      state.lang === 'ar'
        ? 'سيتوفر العرض التجريبي الكامل قريباً!'
        : 'Full interactive demo coming soon!',
      'info',
      3000
    );
  });
}
function initParallax() {
  const stack = document.querySelector('.hero-card-stack');
  if (!stack) return;

  let rafId = null;
  document.addEventListener('mousemove', (e) => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      stack.style.transform = `perspective(800px) rotateY(${dx * 4}deg) rotateX(${-dy * 3}deg)`;
    });
  });

  // Reset on leave
  document.addEventListener('mouseleave', () => {
    stack.style.transform = 'perspective(800px) rotateY(0) rotateX(0)';
  });
}
function init() {
  applyTheme(state.theme);
  applyTranslations();
  initNavbar();
  initRoleSelection();
  initAccessibilityControls();
  initScrollReveal();
  initSmoothScroll();
  initKeyboardNav();
  initWatchDemo();
  if (!('ontouchstart' in window)) {
    initParallax();
  }
  setTimeout(() => {
    showTopToast(
      '👋',
      state.lang === 'ar' ? 'مرحباً بك' : 'Welcome',
      state.lang === 'ar'
        ? 'مرحباً في النظام الطبي الذكي!'
        : 'Welcome to Smart Medical System!',
      'success',
      4000
    );
  }, 1200);

  console.log('%c Smart Medical System %c v1.0 ', 
    'background:#2563eb;color:#fff;padding:4px 8px;border-radius:4px 0 0 4px;font-weight:700',
    'background:#7c3aed;color:#fff;padding:4px 8px;border-radius:0 4px 4px 0'
  );
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}




roleDoctor.onclick=()=>{
  //ostsaf1
  enterApp('doctor');
  console.log("Doctor");
}
//ostaf2
rolePatient.onclick=()=>{
  enterApp('patient')
  console.log("patient")
}























































let currentLang = "en";
let currentRole = null;
let currentPage = null;
let prescriptions = [];
let isSpeaking = false;
let speechUtterance = null;

const mockPatients = [
  { id:1, name:'Ahmed Hassan',   age:45, condition:'Hypertension',    status:'active',   lastVisit:'2025-05-28', doctor:'Dr. Sarah Ahmed'  },
  { id:2, name:'Layla Khalid',   age:32, condition:'Type 2 Diabetes', status:'active',   lastVisit:'2025-05-25', doctor:'Dr. Omar Nasser'  },
  { id:3, name:'Mostafa Sayed',  age:61, condition:'Coronary Artery', status:'critical', lastVisit:'2025-05-30', doctor:'Dr. Sarah Ahmed'  },
  { id:4, name:'Nour Ibrahim',   age:28, condition:'Asthma',          status:'active',   lastVisit:'2025-05-20', doctor:'Dr. Hana Farid'   },
  { id:5, name:'Youssef Tarek',  age:55, condition:'Arthritis',       status:'inactive', lastVisit:'2025-04-15', doctor:'Dr. Omar Nasser'  },
];

const mockPrescriptions = [
  {
    id:1, patient:'Ahmed Hassan', doctor:'Dr. Sarah Ahmed',
    date:'2025-05-28',
    meds:['Amlodipine 5mg','Lisinopril 10mg','Aspirin 81mg'],
    notes:'Take with food. Monitor blood pressure daily.'
  },
  {
    id:2, patient:'Layla Khalid', doctor:'Dr. Sarah Ahmed',
    date:'2025-05-25',
    meds:['Metformin 500mg','Glipizide 5mg'],
    notes:'Avoid sugary beverages. Check glucose twice daily.'
  },
  {
    id:3, patient:'Mostafa Sayed', doctor:'Dr. Sarah Ahmed',
    date:'2025-05-30',
    meds:['Atorvastatin 40mg','Clopidogrel 75mg','Nitroglycerin PRN'],
    notes:'Strict rest. Follow up in 3 days.'
  }
];

const pharmacyDB = {
  'Amlodipine':    { status:'available', pharmacies:['Nile Pharmacy','MedCare Plus'] },
  'Lisinopril':    { status:'available', pharmacies:['City Health Pharmacy'] },
  'Metformin':     { status:'available', pharmacies:['Nile Pharmacy','Al-Shifa Pharmacy'] },
  'Aspirin':       { status:'available', pharmacies:['MedCare Plus','Al-Shifa Pharmacy'] },
  'Atorvastatin':  { status:'low',       pharmacies:['Nile Pharmacy'] },
  'Glipizide':     { status:'unavailable', pharmacies:[] },
  'Nitroglycerin': { status:'available', pharmacies:['City Health Pharmacy','MedCare Plus'] },
  'Clopidogrel':   { status:'low',       pharmacies:['Al-Shifa Pharmacy'] },
};

const patientHistory = {
  'Ahmed Hassan': {
    timeline:[
      { date:'May 28, 2025', event:'Routine Follow-up',     desc:'BP: 130/85. Medication adjusted. Continue Amlodipine.' },
      { date:'Apr 10, 2025', event:'Cardiology Referral',   desc:'EKG normal. Echo pending.' },
      { date:'Feb 3, 2025',  event:'Blood Work Results',    desc:'Cholesterol: LDL 142. Started statin therapy.' },
      { date:'Jan 15, 2025', event:'Initial Diagnosis',     desc:'Hypertension Stage 1 diagnosed. Started Lisinopril.' },
    ],
    prescriptions:[
      { title:'Hypertension Management', date:'May 28, 2025', meds:['Amlodipine 5mg','Lisinopril 10mg','Aspirin 81mg'], status:'active' },
      { title:'Statin Therapy',          date:'Feb 3, 2025',  meds:['Atorvastatin 20mg'], status:'completed' },
    ]
  }
};
function toggleLanguage() {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";


    state.lang = state.lang === 'en' ? 'ar' : 'en';
    localStorage.setItem('sms-lang', state.lang);
    applyTranslations();
    showTopToast(
      '🌐',
      state.lang === 'ar' ? 'تم التغيير' : 'Language Changed',
      state.lang === 'ar' ? 'تم التحويل إلى العربية' : 'Switched to English',
      'info',
      2500
    );

  if (currentPage) showPage(currentPage);
}
function enterApp(role) {
  window.scrollTo(0, 0);
  toBeHidden.style.display="none";
  currentRole = role;
  document.getElementById('role-screen').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  setupRole(role);
}

function exitApp() {
  toBeHidden.style.display='block';
  document.getElementById('select-role').scrollIntoView({});
  currentRole = null;
  stopSpeech();
  document.body.className = '';
  document.getElementById('role-screen').classList.remove('hidden');
  document.getElementById('app-shell').classList.add('hidden');
}

function setupRole(role) {
  const nav  = document.getElementById('sidebar-nav');
  const name = document.getElementById('u-name');
  const ava  = document.getElementById('u-avatar');
  const r    = document.getElementById('u-role');

  if (role === 'doctor') {
    name.textContent = 'Dr. Sarah Ahmed';
    ava.textContent  = 'DS';
    r.textContent    = 'Physician';
    nav.innerHTML = navItems([
      { id:'doctor-dashboard',      icon:'📊', label:'Dashboard'          },
      { id:'doctor-prescription',   icon:'💊', label:'Create Prescription' },
      { id:'doctor-patients',       icon:'👥', label:'Patients List', badge:mockPatients.length },
    ]);
    showPage('doctor-dashboard');

  } else if (role === 'patient') {
    name.textContent = 'Ahmed Hassan';
    ava.textContent  = 'AH';
    r.textContent    = 'Patient';
    nav.innerHTML = navItems([
      { id:'patient-dashboard', icon:'🏥', label:'My Dashboard' },
      { id:'patient-records',   icon:'📋', label:'Medical Records' },
      { id:'patient-rx',        icon:'💊', label:'Prescriptions', badge:2 },
    ]);
    showPage('patient-dashboard');

  } else if (role === 'access') {
    name.textContent = 'Guest User';
    ava.textContent  = '♿';
    r.textContent    = 'Accessibility Mode';
    nav.innerHTML = navItems([
      { id:'access-home',     icon:'🏠', label:'Home'            },
      { id:'access-controls', icon:'⚙️', label:'Accessibility'   },
    ]);
    showPage('access-home');
    setTimeout(autoGreet, 800);
  }
}

function navItems(items) {
  return items.map(item => `
    <div class="nav-item" id="nav-${item.id}" onclick="showPage('${item.id}')" tabindex="0"
         onkeydown="if(event.key==='Enter')showPage('${item.id}')" role="menuitem">
      <span class="nav-icon">${item.icon}</span>
      ${item.label}
      ${item.badge ? `<span class="nav-badge">${item.badge}</span>` : ''}
    </div>
  `).join('');
}

function showPage(pageId) {
  currentPage = pageId;
 
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const active = document.getElementById('nav-' + pageId);
  if (active) active.classList.add('active');

  const titleMap = {
    'doctor-dashboard': 'Dashboard', 'doctor-prescription': 'Create Prescription',
    'doctor-patients': 'Patients List', 'patient-dashboard': 'My Dashboard',
    'patient-records': 'Medical Records', 'patient-rx': 'My Prescriptions',
    'access-home': 'Accessibility Mode', 'access-controls': 'Accessibility Settings',
  };
const titleMapEn = {
  'doctor-dashboard': 'Dashboard',
  'doctor-prescription': 'Create Prescription',
  'doctor-patients': 'Patients List',
};

const titleMapAr = {
  'doctor-dashboard': 'لوحة التحكم',
  'doctor-prescription': 'إنشاء روشتة',
  'doctor-patients': 'قائمة المرضى',
};

document.getElementById('navbar-title').textContent =
  currentLang === "ar"
    ? (titleMapAr[pageId] || pageId)
    : (titleMapEn[pageId] || pageId);

  const pages = {
    'doctor-dashboard':    renderDoctorDashboard,
    'doctor-prescription': renderPrescriptionBuilder,
    'doctor-patients':     renderPatientsList,
    'patient-dashboard':   renderPatientDashboard,
    'patient-records':     renderPatientRecords,
    'patient-rx':          renderPatientRx,
    'access-home':         renderAccessHome,
    'access-controls':     renderAccessControls,
  };
  if (pages[pageId]) {
    document.getElementById('main-pages').innerHTML = `<div class="page">${pages[pageId]()}</div>`;
    afterRender(pageId);
  }
  closeSidebar();
}

function afterRender(pageId) {
  if (pageId === 'doctor-prescription') {
    addMedicineRow(); // start with one row
    updatePharmacyPanel();
  }
}

function renderDoctorDashboard() {
  const total = mockPrescriptions.length + prescriptions.length;
  return `
  <div class="stats-grid">
    <div class="stat-card stat-blue">
      <div class="stat-label">Total Patients</div>
      <div class="stat-value">${mockPatients.length}</div>
      <div class="stat-sub">↑ 2 new this week</div>
      <div class="stat-icon">👥</div>
    </div>
    <div class="stat-card stat-green">
      <div class="stat-label">Prescriptions</div>
      <div class="stat-value">${total}</div>
      <div class="stat-sub">This month</div>
      <div class="stat-icon">💊</div>
    </div>
    <div class="stat-card stat-warn">
      <div class="stat-label">Pending Reviews</div>
      <div class="stat-value">3</div>
      <div class="stat-sub">Awaiting follow-up</div>
      <div class="stat-icon">⏳</div>
    </div>
    <div class="stat-card stat-purple">
      <div class="stat-label">Critical Cases</div>
      <div class="stat-value">1</div>
      <div class="stat-sub">Immediate attention</div>
      <div class="stat-icon">🚨</div>
    </div>
  </div>

  <div class="two-col">
    <div class="card">
      <div class="card-header">
        <div class="card-title"><div class="ct-icon">📋</div> Recent Prescriptions</div>
        <button class="btn btn-ghost btn-sm" onclick="showPage('doctor-prescription')">+ New</button>
      </div>
      ${[...mockPrescriptions, ...prescriptions].slice(0,4).map(rx => `
        <div class="rx-card">
          <div class="rx-header">
            <span class="rx-patient">👤 ${rx.patient}</span>
            <span class="rx-date">${rx.date}</span>
          </div>
          <div class="rx-meds">
            ${rx.meds.map(m => `<span class="med-chip">${m}</span>`).join('')}
          </div>
          ${rx.notes ? `<div class="rx-notes">📝 ${rx.notes}</div>` : ''}
        </div>
      `).join('') || '<div class="empty-state"><div class="empty-icon">💊</div><div class="empty-title">No prescriptions yet</div></div>'}
    </div>

    <div class="card">
      <div class="card-header">
        <div class="card-title"><div class="ct-icon">⚠️</div> Critical Patients</div>
      </div>
      ${mockPatients.filter(p=>p.status==='critical').map(p => `
        <div class="rx-card" style="border-left:3px solid var(--danger);">
          <div class="rx-header">
            <span class="rx-patient" style="color:var(--danger)">🚨 ${p.name}</span>
            <span class="status-chip chip-critical">Critical</span>
          </div>
          <div style="font-size:.82rem;color:var(--text-secondary);margin-top:.3rem">${p.condition} · Age ${p.age}</div>
          <div style="font-size:.78rem;color:var(--text-muted);margin-top:.3rem">Last visit: ${p.lastVisit}</div>
        </div>
      `).join('')}

      <div class="divider"></div>
      <div class="card-title" style="margin-bottom:.75rem"><div class="ct-icon">📅</div> Today's Schedule</div>
      ${[
        { time:'09:00', name:'Ahmed Hassan',   type:'Follow-up' },
        { time:'10:30', name:'Layla Khalid',   type:'Consultation' },
        { time:'14:00', name:'Nour Ibrahim',   type:'Check-up' },
      ].map(ap => `
        <div class="flex-row spaced" style="padding:.6rem 0;border-bottom:1px solid var(--border)">
          <div>
            <div style="font-size:.8rem;font-weight:700;color:var(--primary)">${ap.time}</div>
            <div style="font-size:.88rem;font-weight:600">${ap.name}</div>
          </div>
          <span class="status-chip chip-active" style="font-size:.7rem">${ap.type}</span>
        </div>
      `).join('')}
    </div>
  </div>`;
}

let medCount = 0;
function renderPrescriptionBuilder() {
  medCount = 0;
  return `
  <div class="two-col">
    <div>
      <div class="card" style="margin-bottom:1.25rem">
        <div class="card-header">
          <div class="card-title"><div class="ct-icon">📝</div> Patient & Prescription Details</div>
        </div>
        <div class="form-group">
          <label class="form-label" for="rx-patient">Patient Name *</label>
          <input class="form-input" id="rx-patient" type="text" placeholder="Search or enter patient name" autocomplete="off">
        </div>
        <div class="form-group">
          <label class="form-label" for="rx-diagnosis">Diagnosis</label>
          <input class="form-input" id="rx-diagnosis" type="text" placeholder="e.g. Hypertension Stage 1">
        </div>
        <div class="form-group">
          <label class="form-label" for="rx-notes">Clinical Notes</label>
          <textarea class="form-textarea" id="rx-notes" placeholder="Special instructions, diet advice, follow-up notes..."></textarea>
        </div>
        <div class="flex-row" style="margin-top:.5rem">
          <button class="btn btn-primary btn-lg" onclick="submitPrescription()">💾 Submit Prescription</button>
          <button class="btn btn-ghost" onclick="clearPrescription()">Clear</button>
        </div>
      </div>
    </div>

    <div>
      <div class="card" style="margin-bottom:1.25rem">
        <div class="card-header">
          <div class="card-title"><div class="ct-icon">💊</div> Medicine List</div>
          <button class="btn btn-ghost btn-sm" onclick="addMedicineRow()">+ Add</button>
        </div>
        <div id="medicine-list"></div>
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-title"><div class="ct-icon">🏪</div> Pharmacy Availability</div>
          <span id="pharm-update" style="font-size:.72rem;color:var(--text-muted)">Live check</span>
        </div>
        <div class="pharmacy-panel" id="pharmacy-panel">
          <div class="pharm-title">🔍 Add medicines to check availability</div>
        </div>
      </div>
    </div>
  </div>`;
}

function addMedicineRow() {
  medCount++;
  const list = document.getElementById('medicine-list');
  if (!list) return;
  const row = document.createElement('div');
  row.className = 'medicine-row';
  row.id = `med-row-${medCount}`;
  row.innerHTML = `
    <span style="font-size:.85rem;color:var(--text-muted);width:20px;text-align:center;flex-shrink:0">${medCount}</span>
    <input type="text" placeholder="Medicine name, dosage, frequency..." oninput="updatePharmacyPanel()" id="med-input-${medCount}">
    <button class="med-remove-btn" onclick="removeMed(${medCount})" title="Remove">✕</button>
  `;
  list.appendChild(row);
}

function removeMed(id) {
  const row = document.getElementById(`med-row-${id}`);
  if (row) row.remove();
  updatePharmacyPanel();
}

function updatePharmacyPanel() {
  const panel = document.getElementById('pharmacy-panel');
  if (!panel) return;
  const inputs = document.querySelectorAll('[id^="med-input-"]');
  const meds = [...inputs].map(i => i.value.trim()).filter(Boolean);

  if (!meds.length) {
    panel.innerHTML = `<div class="pharm-title">🔍 Add medicines to check availability</div>`;
    return;
  }

  let html = `<div class="pharm-title">📍 Nearby Pharmacy Availability</div>`;
  meds.forEach(med => {
    const key = Object.keys(pharmacyDB).find(k => med.toLowerCase().includes(k.toLowerCase()));
    const data = key ? pharmacyDB[key] : null;
    if (data) {
      const badge = data.status === 'available' ? `<span class="avail-badge avail-yes">✓ Available</span>`
                  : data.status === 'low'       ? `<span class="avail-badge avail-low">⚠ Low Stock</span>`
                  :                               `<span class="avail-badge avail-no">✕ Not Available</span>`;
      const pharmacies = data.pharmacies.length ? data.pharmacies.join(', ') : 'No nearby pharmacies';
      html += `
        <div class="pharm-item">
          <div>
            <div style="font-weight:600;font-size:.83rem">${med}</div>
            <div style="font-size:.72rem;color:var(--text-muted)">${pharmacies}</div>
          </div>
          ${badge}
        </div>`;
    } else {
      html += `
        <div class="pharm-item">
          <div>
            <div style="font-weight:600;font-size:.83rem">${med}</div>
            <div style="font-size:.72rem;color:var(--text-muted)">Checking availability...</div>
          </div>
          <span class="avail-badge avail-low">⟳ Checking</span>
        </div>`;
    }
  });
  panel.innerHTML = html;
}

function submitPrescription() {
  const patient = document.getElementById('rx-patient').value.trim();
  const notes   = document.getElementById('rx-notes').value.trim();
  const inputs  = document.querySelectorAll('[id^="med-input-"]');
  const meds    = [...inputs].map(i => i.value.trim()).filter(Boolean);

  if (!patient) { showToast('Patient name is required','error','⚠️'); return; }
  if (!meds.length) { showToast('Add at least one medicine','error','⚠️'); return; }

  const rx = {
    id: Date.now(),
    patient,
    doctor: 'Dr. Sarah Ahmed',
    date: new Date().toISOString().split('T')[0],
    meds,
    notes
  };
  prescriptions.unshift(rx);
  showToast(`Prescription for ${patient} submitted!`, 'success', '✅');
  setTimeout(() => showPage('doctor-dashboard'), 1200);
}

function clearPrescription() {
  document.getElementById('rx-patient').value = '';
  document.getElementById('rx-notes').value = '';
  document.getElementById('medicine-list').innerHTML = '';
  medCount = 0;
  addMedicineRow();
  updatePharmacyPanel();
}

function renderPatientsList() {
  return `
  <div class="card">
    <div class="card-header">
      <div class="card-title"><div class="ct-icon">👥</div> All Patients</div>
      <div class="flex-row">
        <input class="form-input" style="width:200px" placeholder="🔍 Search patients..." oninput="filterPatientsTable(this.value)">
        <button class="btn btn-primary btn-sm" onclick="showToast('Add patient coming soon','info','👤')">+ New Patient</button>
      </div>
    </div>
    <div class="patients-table-wrap">
      <table class="patients-table" id="patients-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Age</th>
            <th>Condition</th>
            <th>Doctor</th>
            <th>Last Visit</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="patients-tbody">
          ${mockPatients.map(p => patientRow(p)).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

function patientRow(p) {
  const chipClass = p.status === 'active' ? 'chip-active' : p.status === 'critical' ? 'chip-critical' : 'chip-inactive';
  const initials = p.name.split(' ').map(n=>n[0]).join('');
  return `
    <tr>
      <td><span class="pt-avatar">${initials}</span><span class="pt-name">${p.name}</span></td>
      <td>${p.age}</td>
      <td>${p.condition}</td>
      <td>${p.doctor}</td>
      <td>${p.lastVisit}</td>
      <td><span class="status-chip ${chipClass}">${p.status}</span></td>
      <td>
        <button class="btn btn-ghost btn-sm" onclick="showToast('Viewing ${p.name}','info','👤')">View</button>
        <button class="btn btn-primary btn-sm" style="margin-left:.3rem" onclick="showPage('doctor-prescription')">Prescribe</button>
      </td>
    </tr>`;
}

function filterPatientsTable(q) {
  const tbody = document.getElementById('patients-tbody');
  if (!tbody) return;
  const filtered = mockPatients.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.condition.toLowerCase().includes(q.toLowerCase())
  );
  tbody.innerHTML = filtered.length ? filtered.map(p => patientRow(p)).join('') :
    '<tr><td colspan="7" style="text-align:center;padding:2rem;color:var(--text-muted)">No patients found</td></tr>';
}

function renderPatientDashboard() {
  return `
  <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
    <div class="stat-card stat-blue">
      <div class="stat-label">Active Prescriptions</div>
      <div class="stat-value">2</div>
      <div class="stat-sub">Current medications</div>
      <div class="stat-icon">💊</div>
    </div>
    <div class="stat-card stat-green">
      <div class="stat-label">Total Visits</div>
      <div class="stat-value">4</div>
      <div class="stat-sub">Since Jan 2025</div>
      <div class="stat-icon">🏥</div>
    </div>
    <div class="stat-card stat-warn">
      <div class="stat-label">Next Appointment</div>
      <div class="stat-value" style="font-size:1.3rem">Jun 10</div>
      <div class="stat-sub">Dr. Sarah Ahmed</div>
      <div class="stat-icon">📅</div>
    </div>
  </div>

  <div class="two-col">
    <div class="card">
      <div class="card-header">
        <div class="card-title"><div class="ct-icon">💊</div> Active Prescriptions</div>
      </div>
      ${patientHistory['Ahmed Hassan'].prescriptions.filter(p=>p.status==='active').map(rx => `
        <div class="patient-rx-card">
          <div class="prx-header">
            <div class="prx-title">${rx.title}</div>
            <span class="prx-date-badge">${rx.date}</span>
          </div>
          <div class="prx-meds">${rx.meds.map(m=>`<span class="med-chip">${m}</span>`).join('')}</div>
          <span class="prx-status status-active">● Active</span>
        </div>
      `).join('')}
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title"><div class="ct-icon">📊</div> Health Summary</div>
      </div>
      ${[
        { label:'Blood Pressure', val:'130/85 mmHg', trend:'↑ Slightly elevated', color:'var(--warning)' },
        { label:'Cholesterol LDL', val:'142 mg/dL',  trend:'↓ Improving',         color:'var(--success)' },
        { label:'Blood Glucose',   val:'98 mg/dL',   trend:'✓ Normal range',       color:'var(--success)' },
        { label:'Heart Rate',      val:'72 bpm',      trend:'✓ Normal',             color:'var(--success)' },
      ].map(v => `
        <div class="flex-row spaced" style="padding:.65rem 0;border-bottom:1px solid var(--border)">
          <div>
            <div style="font-size:.75rem;font-weight:700;color:var(--text-muted)">${v.label}</div>
            <div style="font-weight:700;font-size:.95rem">${v.val}</div>
          </div>
          <div style="font-size:.75rem;font-weight:600;color:${v.color}">${v.trend}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function renderPatientRecords() {
  const data = patientHistory['Ahmed Hassan'];
  return `
  <div class="card" style="margin-bottom:1.25rem">
    <div class="card-header">
      <div class="card-title"><div class="ct-icon">🕐</div> Medical History Timeline</div>
    </div>
    <div class="timeline">
      ${data.timeline.map((item, i) => `
        <div class="timeline-item" style="animation-delay:${i*.08}s">
          <div class="timeline-dot" style="${i===0?'background:var(--danger);box-shadow:0 0 0 2px var(--danger)':''}"></div>
          <div class="tl-date">${item.date}</div>
          <div class="tl-event">${item.event}</div>
          <div class="tl-desc">${item.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function renderPatientRx() {
  const rxs = patientHistory['Ahmed Hassan'].prescriptions;
  return `
  <div class="section-title">💊 All Prescriptions</div>
  ${rxs.map(rx => `
    <div class="patient-rx-card">
      <div class="prx-header">
        <div>
          <div class="prx-title">${rx.title}</div>
          <div style="font-size:.78rem;color:var(--text-muted);margin-top:.2rem">Dr. Sarah Ahmed</div>
        </div>
        <span class="prx-date-badge">${rx.date}</span>
      </div>
      <div class="prx-meds">${rx.meds.map(m=>`<span class="med-chip">${m}</span>`).join('')}</div>
      <div class="flex-row" style="margin-top:.6rem">
        <span class="prx-status ${rx.status==='active'?'status-active':'status-completed'}">
          ${rx.status==='active'?'● Active':'✓ Completed'}
        </span>
        <button class="btn btn-ghost btn-sm" onclick="showToast('Download feature coming soon','info','📄')">⬇ Download PDF</button>
      </div>
    </div>
  `).join('')}`;
}


function renderAccessHome() {
  return `
  <div class="access-controls" id="access-ctrl-bar" role="region" aria-label="Accessibility controls">
    <h3>♿ Accessibility Controls</h3>
    <div class="access-btns">
      <button class="access-btn" id="btn-speak" onclick="startSpeech()" aria-label="Read page aloud">
        🔊 Read Aloud
      </button>
      <button class="access-btn" id="btn-pause" onclick="pauseSpeech()" aria-label="Pause speech">
        ⏸ Pause
      </button>
      <button class="access-btn access-btn-danger" id="btn-stop" onclick="stopSpeech()" aria-label="Stop speech">
        ⏹ Stop
      </button>
      <button class="access-btn" id="btn-large" onclick="toggleLargeFont()" aria-label="Toggle large text">
        🔠 Large Text
      </button>
      <button class="access-btn" id="btn-contrast" onclick="toggleHighContrast()" aria-label="Toggle high contrast">
        🌑 High Contrast
      </button>
      <button class="access-btn" id="btn-simple" onclick="toggleSimplified()" aria-label="Toggle simplified mode">
        📋 Simplified
      </button>
    </div>
    <div style="margin-top:.75rem" id="speech-status"></div>
  </div>

  <div class="access-info-panel" id="access-readable-content">
    <div class="big-icon">🏥</div>
    <h2>Welcome to MedCore</h2>
    <p>This is the accessibility-first portal of the Smart Medical System. You can use voice guidance, large text, high contrast mode, and simplified views to navigate comfortably.</p>
    <div class="flex-row" style="justify-content:center;gap:.75rem;flex-wrap:wrap">
      <button class="btn btn-primary btn-lg" onclick="showToast('Opening records…','info','📋')">📋 View My Records</button>
      <button class="btn btn-success btn-lg" onclick="showToast('Booking appointment…','info','📅')">📅 Book Appointment</button>
    </div>

    <div class="access-feature-grid">
      ${[
        { icon:'🔊', title:'Voice Guidance', desc:'Every section can be read aloud using your device\'s speech system.' },
        { icon:'🔠', title:'Large Text', desc:'Increase all text sizes for easier reading.' },
        { icon:'🌑', title:'High Contrast', desc:'Dark background with high-contrast text for better visibility.' },
        { icon:'📋', title:'Simplified View', desc:'Remove clutter and focus only on what matters.' },
      ].map(f => `
        <div class="access-feature">
          <div class="af-icon">${f.icon}</div>
          <div class="af-title">${f.title}</div>
          <div class="af-desc">${f.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>`;
}

function renderAccessControls() {
  return `
  <div class="card">
    <div class="card-title" style="margin-bottom:1rem"><div class="ct-icon">⚙️</div> Accessibility Settings</div>
    <div class="form-group">
      <label class="form-label">Font Size</label>
      <div class="flex-row">
        <button class="btn btn-ghost" onclick="document.body.classList.remove('large-font');showToast('Normal font size','info','🔤')">Normal</button>
        <button class="btn btn-primary" onclick="document.body.classList.add('large-font');showToast('Large font enabled','success','🔠')">Large</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Display Mode</label>
      <div class="flex-row">
        <button class="btn btn-ghost" onclick="document.body.classList.remove('high-contrast');showToast('Normal contrast','info','☀️')">Normal Contrast</button>
        <button class="btn btn-primary" onclick="toggleHighContrast()">High Contrast</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Interface Complexity</label>
      <div class="flex-row">
        <button class="btn btn-ghost" onclick="document.body.classList.remove('simplified');showToast('Standard mode','info','🖥️')">Standard</button>
        <button class="btn btn-primary" onclick="toggleSimplified()">Simplified</button>
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Voice Speed</label>
      <input type="range" min="0.5" max="2" step="0.1" value="1" id="speech-rate"
        style="width:100%;margin-top:.4rem" oninput="speechRate=this.value" aria-label="Speech rate">
    </div>
  </div>`;
}


let speechRate = 1;

function autoGreet() {
  speak("Welcome to MedCore, your smart medical system. You are now in accessibility mode. Press Read Aloud to hear the page content.");
}

function startSpeech() {
  const content = document.getElementById('access-readable-content');
  if (!content) { showToast('No readable content on this page','info','ℹ️'); return; }
  speak(content.innerText);
}

function speak(text) {
  if (!window.speechSynthesis) { showToast('Speech not supported in this browser','error','🔇'); return; }
  stopSpeech();
  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.rate = parseFloat(speechRate) || 1;
  speechUtterance.pitch = 1;
  speechUtterance.lang = currentLang === "ar" ? "ar-EG" : "en-US";
  speechUtterance.onstart  = () => { isSpeaking = true;  updateSpeechStatus(); };
  speechUtterance.onend    = () => { isSpeaking = false; updateSpeechStatus(); };
  speechUtterance.onpause  = () => { isSpeaking = false; updateSpeechStatus(); };
  speechUtterance.onresume = () => { isSpeaking = true;  updateSpeechStatus(); };
  window.speechSynthesis.speak(speechUtterance);
}

function pauseSpeech() {
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.paused ? window.speechSynthesis.resume() : window.speechSynthesis.pause();
    updateSpeechStatus();
  }
}

function stopSpeech() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  isSpeaking = false;
  updateSpeechStatus();
}
function showSkeleton() {
  document.getElementById('main-pages').innerHTML = `
    <div class="card">
      <div class="skeleton skeleton-box" style="width:60%"></div>
      <div class="skeleton skeleton-box"></div>
      <div class="skeleton skeleton-box" style="width:80%"></div>
    </div>
  `;
}
function updateSpeechStatus() {
  const el = document.getElementById('speech-status');
  if (!el) return;
  const paused = window.speechSynthesis && window.speechSynthesis.paused;
  el.innerHTML = isSpeaking && !paused
    ? `<span class="speaking-indicator"><span class="speaking-dot"></span>Reading aloud…</span>`
    : '';
}

function toggleLargeFont() {
  document.body.classList.toggle('large-font');
  const on = document.body.classList.contains('large-font');
  const btn = document.getElementById('btn-large');
  if (btn) btn.classList.toggle('active', on);
  showToast(on ? 'Large font enabled' : 'Normal font restored', 'success', '🔠');
}

function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  const on = document.body.classList.contains('high-contrast');
  const btn = document.getElementById('btn-contrast');
  if (btn) btn.classList.toggle('active', on);
  showToast(on ? 'High contrast mode on' : 'High contrast mode off', 'success', '🌑');
}

function toggleSimplified() {
  document.body.classList.toggle('simplified');
  const on = document.body.classList.contains('simplified');
  const btn = document.getElementById('btn-simple');
  if (btn) btn.classList.toggle('active', on);
  showToast(on ? 'Simplified mode on' : 'Standard mode restored', 'success', '📋');
}

function showToast(msg, type='success', icon='✅') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  const titles = { success:'Success', error:'Error', info:'Info' };
  toast.innerHTML = `
    <div class="toast-icon">${icon}</div>
    <div class="toast-body">
      <div class="toast-title">${titles[type]||'Notice'}</div>
      <div class="toast-msg">${msg}</div>
    </div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('removing');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('visible');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('visible');
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSidebar(); stopSpeech(); }
});