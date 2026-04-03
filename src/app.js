export function setupApp(element) {
  element.innerHTML = `
    <!-- NAVIGATION -->
    <nav class="nav" id="nav">
      <div class="nav__inner">
        <a href="#" class="nav__logo">
          <img src="/easybim_logo-w.png" alt="EasyBIM" class="nav__logo-img" />
        </a>
        <ul class="nav__links">
          <li><a href="#services">שירותים</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="#projects">פרויקטים</a></li>
          <li><a href="#contact" class="nav__cta">צור קשר</a></li>
        </ul>
        <button class="nav__burger" id="navBurger" aria-label="תפריט">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav__mobile" id="navMobile">
        <ul>
          <li><a href="#services">שירותים</a></li>
          <li><a href="#about">אודות</a></li>
          <li><a href="#projects">פרויקטים</a></li>
          <li><a href="#contact">צור קשר</a></li>
        </ul>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero">
      <div class="hero__bg">
        <div class="hero__grid-lines"></div>
        <div class="hero__orb hero__orb--1"></div>
        <div class="hero__orb hero__orb--2"></div>
      </div>
      <div class="hero__content">
        <p class="hero__eyebrow reveal">מידול מידע בנייה — BIM</p>
        <h1 class="hero__title reveal reveal--delay-1">
          מהנדסים את<br />
          <span class="hero__title-gradient">עתיד ה-BIM</span>
        </h1>
        <p class="hero__subtitle reveal reveal--delay-2">
          EasyBIM הופכת פרויקטי בנייה מורכבים למודלים דיגיטליים מדויקים ומתואמים —<br class="br-desktop" />
          המספקים דיוק, יעילות ובהירות לאורך כל שלבי הפרויקט.
        </p>
        <div class="hero__actions reveal reveal--delay-3">
          <a href="#services" class="btn btn--primary">גלו את השירותים שלנו</a>
          <a href="#projects" class="btn btn--ghost">צפו בפרויקטים</a>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <span></span>
      </div>
    </section>

    <!-- STATS -->
    <section class="stats">
      <div class="stats__inner">
        <div class="stat reveal">
          <span class="stat__num">10<span class="stat__plus">+</span></span>
          <span class="stat__label">שנות ניסיון</span>
        </div>
        <div class="stat reveal reveal--delay-1">
          <span class="stat__num">500<span class="stat__plus">+</span></span>
          <span class="stat__label">פרויקטים שהושלמו</span>
        </div>
        <div class="stat reveal reveal--delay-2">
          <span class="stat__num">50<span class="stat__plus">+</span></span>
          <span class="stat__label">מהנדסים מומחים</span>
        </div>
        <div class="stat reveal reveal--delay-3">
          <span class="stat__num">100<span class="stat__pct">%</span></span>
          <span class="stat__label">שביעות רצון לקוחות</span>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="services" id="services">
      <div class="services__inner">
        <div class="section-header reveal">
          <p class="section-eyebrow">מה אנחנו עושים</p>
          <h2 class="section-title">פתרונות BIM מקיפים</h2>
          <p class="section-subtitle">
            מהקונספט הראשוני ועד לניהול המתקן — אנו מספקים שירותי BIM מקצה לקצה
            המייעלים כל שלב בפרויקט שלכם.
          </p>
        </div>
        <div class="services__grid">
          <div class="service-card reveal">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
                <path d="M16 24L22 30L32 18" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="service-card__title">מידול BIM תלת-ממדי</h3>
            <p class="service-card__desc">
              מודלים תלת-ממדיים מדויקים בכל הדיסציפלינות — אדריכלות, קונסטרוקציה ומערכות — בהתאם לתקני LOD 300–500.
            </p>
          </div>
          <div class="service-card reveal reveal--delay-1">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/>
                <path d="M12 24H36M24 12V36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="24" cy="24" r="4" fill="currentColor"/>
              </svg>
            </div>
            <h3 class="service-card__title">זיהוי התנגשויות ותיאום</h3>
            <p class="service-card__desc">
              זיהוי וטיפול בקונפליקטים לפני שמגיעים לשטח. אנו משתמשים ב-Navisworks וב-Revit לאיתור כל התנגשות מראש.
            </p>
          </div>
          <div class="service-card reveal reveal--delay-2">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 40L24 8L40 40H8Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M16 32H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="service-card__title">הנדסה קונסטרוקטיבית</h3>
            <p class="service-card__desc">
              ניתוח קונסטרוקטיבי מפורט ותיעוד המבטיח שהמבנה עומד בתקני הבטיחות והתאימות הגבוהים ביותר.
            </p>
          </div>
          <div class="service-card reveal">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="14" width="36" height="26" rx="3" stroke="currentColor" stroke-width="2"/>
                <path d="M6 22H42M16 14V8M32 14V8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="service-card__title">תיעוד בנייה</h3>
            <p class="service-card__desc">
              סטים מלאים של תוכניות, לוחות זמנים ומפרטים המופקים ישירות מהמודל — מדויקים, עקביים ומתואמים.
            </p>
          </div>
          <div class="service-card reveal reveal--delay-1">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6L42 16V32L24 42L6 32V16L24 6Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
                <path d="M24 6V42M6 16L42 16M6 32L42 32" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-dasharray="3 3"/>
              </svg>
            </div>
            <h3 class="service-card__title">כמויות ואומדן עלויות</h3>
            <p class="service-card__desc">
              חילוץ כמויות אוטומטי ממודל ה-BIM, המצמצם שגיאות ידניות ומאיץ משמעותית את תהליך האומדן.
            </p>
          </div>
          <div class="service-card reveal reveal--delay-2">
            <div class="service-card__icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="28" height="28" rx="14" stroke="currentColor" stroke-width="2"/>
                <path d="M18 24L22 28L30 20" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3 class="service-card__title">ניהול מתקנים BIM</h3>
            <p class="service-card__desc">
              מודלי as-built עשירים בנתוני נכסים להעברה חלקה, המאפשרים ניהול מתקן חכם לאורך מחזור חיי הבניין.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="about" id="about">
      <div class="about__inner">
        <div class="about__visual reveal">
          <div class="about__blueprint">
            <div class="blueprint__circle blueprint__circle--1"></div>
            <div class="blueprint__circle blueprint__circle--2"></div>
            <div class="blueprint__circle blueprint__circle--3"></div>
            <div class="blueprint__lines">
              <span></span><span></span><span></span><span></span>
            </div>
            <div class="blueprint__icon">
              <img src="/easybim_icon-b.png" alt="EasyBIM Icon" />
            </div>
          </div>
        </div>
        <div class="about__content">
          <p class="section-eyebrow reveal">אודות EasyBIM</p>
          <h2 class="section-title reveal reveal--delay-1">הנדסה חדשנית,<br/>בנויה על דיוק</h2>
          <p class="about__text reveal reveal--delay-2">
            EasyBIM הנדסה חדשנית בע"מ היא חברת ייעוץ BIM מובילה, המחויבת לשנות את האופן שבו פרויקטי בנייה מתוכננים, מתואמים ומבוצעים.
            אנו משלבים מומחיות טכנית עמוקה עם טכנולוגיית BIM מתקדמת כדי לספק ללקוחותינו דיוק ויעילות ללא תחרות.
          </p>
          <p class="about__text reveal reveal--delay-2">
            צוות הרב-תחומי שלנו של אדריכלים, מהנדסים ומומחי BIM עובד בשיתוף פעולה כדי להבטיח שכל פרויקט —
            ממגדלי מגורים ועד תשתיות מורכבות — מבוצע בדיוק ומסופק בזמן.
          </p>
          <div class="about__tags reveal reveal--delay-3">
            <span class="tag">Revit</span>
            <span class="tag">Navisworks</span>
            <span class="tag">AutoCAD</span>
            <span class="tag">Civil 3D</span>
            <span class="tag">Dynamo</span>
            <span class="tag">LOD 500</span>
            <span class="tag">ISO 19650</span>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY EASYBIM -->
    <section class="why">
      <div class="why__inner">
        <div class="section-header reveal">
          <p class="section-eyebrow">למה EasyBIM</p>
          <h2 class="section-title">היתרון של EasyBIM</h2>
        </div>
        <div class="why__grid">
          <div class="why-item reveal">
            <div class="why-item__num">01</div>
            <h3 class="why-item__title">תהליך עבודה משולב</h3>
            <p class="why-item__desc">שיתוף פעולה חלק בין כל הדיסציפלינות מהיום הראשון, המבטל פערי תקשורת ועבודה חוזרת.</p>
          </div>
          <div class="why-item reveal reveal--delay-1">
            <div class="why-item__num">02</div>
            <h3 class="why-item__title">טכנולוגיה מוכחת</h3>
            <p class="why-item__desc">אנו משתמשים בפלטפורמות המובילות בתעשייה — Autodesk Revit, Navisworks, BIM 360 — לאמינות מקסימלית.</p>
          </div>
          <div class="why-item reveal reveal--delay-2">
            <div class="why-item__num">03</div>
            <h3 class="why-item__title">עמידה בלוחות זמנים</h3>
            <p class="why-item__desc">ניהול פרויקטים ממושמע ומעקב אחר אבני דרך מבטיחים שתוצרי ה-BIM שלכם תמיד בזמן.</p>
          </div>
          <div class="why-item reveal reveal--delay-3">
            <div class="why-item__num">04</div>
            <h3 class="why-item__title">ליווי לאורך מחזור החיים</h3>
            <p class="why-item__desc">מתכנון קונספטואלי דרך ביצוע ועד ניהול מתקן — אנחנו לצדכם בכל שלב.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section class="projects" id="projects">
      <div class="projects__inner">
        <div class="section-header reveal">
          <p class="section-eyebrow">העבודות שלנו</p>
          <h2 class="section-title">פרויקטים נבחרים</h2>
          <p class="section-subtitle">מבחר פרויקטים מורכבים בעלי השפעה גבוהה שביצענו במגזרים שונים.</p>
        </div>
        <div class="projects__grid">
          <div class="project-card project-card--large reveal">
            <div class="project-card__bg project-card__bg--1"></div>
            <div class="project-card__content">
              <span class="project-card__type">מגורים</span>
              <h3 class="project-card__title">מגדל יוקרה</h3>
              <p class="project-card__desc">תיאום BIM מלא על פני 42 קומות — אדריכלות, קונסטרוקציה ומערכות. תסופק ב-LOD 400.</p>
              <div class="project-card__meta">
                <span>תל אביב</span>
                <span>2024</span>
                <span>LOD 400</span>
              </div>
            </div>
          </div>
          <div class="project-card reveal reveal--delay-1">
            <div class="project-card__bg project-card__bg--2"></div>
            <div class="project-card__content">
              <span class="project-card__type">מסחרי</span>
              <h3 class="project-card__title">קמפוס עסקים</h3>
              <p class="project-card__desc">קומפלקס משרדים רב-בנייני עם זיהוי התנגשויות מלא ואינטגרציית עלויות 5D.</p>
              <div class="project-card__meta">
                <span>הרצליה</span>
                <span>2023</span>
              </div>
            </div>
          </div>
          <div class="project-card reveal reveal--delay-2">
            <div class="project-card__bg project-card__bg--3"></div>
            <div class="project-card__content">
              <span class="project-card__type">תשתיות</span>
              <h3 class="project-card__title">מרכז תחבורה</h3>
              <p class="project-card__desc">תשתית תת-קרקעית מורכבת שמודלה לפי תקן ISO 19650 עבור רשות התחבורה הציבורית.</p>
              <div class="project-card__meta">
                <span>ירושלים</span>
                <span>2024</span>
              </div>
            </div>
          </div>
          <div class="project-card reveal">
            <div class="project-card__bg project-card__bg--4"></div>
            <div class="project-card__content">
              <span class="project-card__type">בריאות</span>
              <h3 class="project-card__title">מרכז רפואי</h3>
              <p class="project-card__desc">BIM לבית חולים עם תיאום מערכות מפורט וחבילת העברה לניהול מתקנים.</p>
              <div class="project-card__meta">
                <span>חיפה</span>
                <span>2023</span>
              </div>
            </div>
          </div>
          <div class="project-card reveal reveal--delay-1">
            <div class="project-card__bg project-card__bg--5"></div>
            <div class="project-card__content">
              <span class="project-card__type">תעשייה</span>
              <h3 class="project-card__title">מתקן תעשייתי</h3>
              <p class="project-card__desc">מפעל ייצור בקנה מידה גדול עם מערכות פלדה קונסטרוקטיבית ומערכות מכניות מורכבות.</p>
              <div class="project-card__meta">
                <span>באר שבע</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA BANNER -->
    <section class="cta-banner">
      <div class="cta-banner__inner reveal">
        <h2 class="cta-banner__title">מוכנים להפוך את<br/>הפרויקט הבא שלכם?</h2>
        <p class="cta-banner__sub">בואו נדבר על האופן שבו EasyBIM יכולה להביא דיוק ויעילות לפרויקט הבנייה שלכם.</p>
        <a href="#contact" class="btn btn--white">התחילו שיחה</a>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="contact" id="contact">
      <div class="contact__inner">
        <div class="contact__info reveal">
          <p class="section-eyebrow">צור קשר</p>
          <h2 class="section-title">בואו נבנה<br/>משהו גדול</h2>
          <p class="contact__text">
            בין אם אתם מתחילים פרויקט חדש או מחפשים להביא תיאום BIM לפרויקט קיים — נשמח לשמוע מכם.
          </p>
          <div class="contact__details">
            <a href="mailto:office@easybim.co.il" class="contact__link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M2 7L12 13L22 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              office@easybim.co.il
            </a>
            <a href="https://www.easybim.co.il" target="_blank" rel="noopener noreferrer" class="contact__link">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M2 12H22M12 2C9.33 6 8 9 8 12C8 15 9.33 18 12 22M12 2C14.67 6 16 9 16 12C16 15 14.67 18 12 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              www.easybim.co.il
            </a>
          </div>
        </div>
        <form class="contact__form reveal reveal--delay-1" id="contactForm">
          <div class="form-row">
            <div class="form-group">
              <label for="fname">שם פרטי</label>
              <input type="text" id="fname" name="fname" placeholder="ישראל" required />
            </div>
            <div class="form-group">
              <label for="lname">שם משפחה</label>
              <input type="text" id="lname" name="lname" placeholder="ישראלי" required />
            </div>
          </div>
          <div class="form-group">
            <label for="email">כתובת אימייל</label>
            <input type="email" id="email" name="email" placeholder="israel@company.co.il" required />
          </div>
          <div class="form-group">
            <label for="project">סוג הפרויקט</label>
            <select id="project" name="project">
              <option value="" disabled selected>בחרו שירות...</option>
              <option value="bim">מידול BIM תלת-ממדי</option>
              <option value="clash">זיהוי התנגשויות</option>
              <option value="structural">הנדסה קונסטרוקטיבית</option>
              <option value="docs">תיעוד בנייה</option>
              <option value="quantity">כמויות ואומדן</option>
              <option value="fm">ניהול מתקנים</option>
              <option value="other">אחר</option>
            </select>
          </div>
          <div class="form-group">
            <label for="message">הודעה</label>
            <textarea id="message" name="message" rows="4" placeholder="ספרו לנו על הפרויקט שלכם..."></textarea>
          </div>
          <button type="submit" class="btn btn--primary btn--full">שלח הודעה</button>
          <p class="form-success" id="formSuccess">תודה! ניצור אתכם קשר בקרוב.</p>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <img src="/easybim_logo-w.png" alt="EasyBIM" class="footer__logo" />
          <p class="footer__tagline">הנדסה חדשנית</p>
        </div>
        <div class="footer__links">
          <div class="footer__col">
            <h4>שירותים</h4>
            <ul>
              <li><a href="#services">מידול BIM תלת-ממדי</a></li>
              <li><a href="#services">זיהוי התנגשויות</a></li>
              <li><a href="#services">הנדסה קונסטרוקטיבית</a></li>
              <li><a href="#services">תיעוד בנייה</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>החברה</h4>
            <ul>
              <li><a href="#about">אודות</a></li>
              <li><a href="#projects">פרויקטים</a></li>
              <li><a href="#contact">צור קשר</a></li>
            </ul>
          </div>
          <div class="footer__col">
            <h4>יצירת קשר</h4>
            <ul>
              <li><a href="mailto:office@easybim.co.il">office@easybim.co.il</a></li>
              <li><a href="https://www.easybim.co.il" target="_blank" rel="noopener noreferrer">www.easybim.co.il</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p>&copy; 2025 EasyBIM הנדסה חדשנית בע"מ. כל הזכויות שמורות.</p>
      </div>
    </footer>
  `

  initScrollEffects()
  initNav()
  initForm()
  initSmoothScroll()
}

function initScrollEffects() {
  const reveals = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  )
  reveals.forEach((el) => observer.observe(el))
}

function initNav() {
  const nav = document.getElementById('nav')
  const burger = document.getElementById('navBurger')
  const mobile = document.getElementById('navMobile')

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('nav--scrolled')
    } else {
      nav.classList.remove('nav--scrolled')
    }
  })

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open')
    mobile.classList.toggle('is-open')
  })

  document.querySelectorAll('.nav__mobile a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('is-open')
      mobile.classList.remove('is-open')
    })
  })
}

function initForm() {
  const form = document.getElementById('contactForm')
  const success = document.getElementById('formSuccess')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    success.classList.add('is-visible')
    form.reset()
    setTimeout(() => success.classList.remove('is-visible'), 5000)
  })
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (target) {
        e.preventDefault()
        const navHeight = document.getElementById('nav').offsetHeight
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top, behavior: 'smooth' })
      }
    })
  })
}
