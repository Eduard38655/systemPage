"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Bot, Boxes, ChevronDown, Code2, Cpu, Database, Menu, MessageCircle, Network, Palette, Play, ShieldCheck, Sparkles, X, Zap } from "lucide-react";

const themes = [
  ["Ocean", "#16d5f3", "#1688ff"],
  ["Royal", "#286cff", "#8c5cff"],
  ["Sunset", "#ff6b35", "#ec4899"],
  ["Emerald", "#10b981", "#22d3ee"],
  ["Violet", "#8b5cf6", "#d946ef"],
  ["Dark", "#8b919d", "#3f464f"],
  ["Light", "#64748b", "#94a3b8"],
];

const copy = {
  ES: {
    nav: ["Inicio", "Servicios", "Inteligencia artificial", "Tecnologias", "Proyectos", "Nosotros"],
    eyebrow: "Ingenieria tecnologica a tu medida",
    titleStart: "Construimos el futuro",
    titleAccent: "digital",
    titleEnd: "de tu empresa.",
    hero: "Desarrollamos soluciones inteligentes que ayudan a las empresas a evolucionar. Aplicaciones web, sistemas empresariales e inteligencia artificial para transformar procesos y potenciar negocios.",
    heroPrimary: "Conoce nuestros servicios",
    heroSecondary: "Solicita una cotizacion",
    visual: ["Desarrollo", "ERP", "IA", "Integracion"],
    servicesKicker: "NUESTROS SERVICIOS",
    servicesTitle: "Soluciones creadas para impulsar tu negocio",
    servicesIntro: "Arquitecturas robustas, experiencias modernas y tecnologia que crece contigo.",
    services: [
      ["Desarrollo de software", "Aplicaciones web, plataformas empresariales y sistemas administrativos personalizados."],
      ["Sistemas ERP", "Controla inventarios, finanzas, compras, ventas, nomina y operaciones desde un solo lugar."],
      ["APIs e integraciones", "Conecta plataformas, automatiza procesos y construye arquitecturas backend escalables."],
      ["Inteligencia artificial", "Chatbots, asistentes virtuales, agentes y automatizaciones inteligentes para tu empresa."],
    ],
    explore: "Explorar servicio",
    aiKicker: "INTELIGENCIA ARTIFICIAL",
    aiTitle: "IA para llevar tu negocio mucho mas lejos.",
    aiText: "Integramos inteligencia artificial en plataformas y procesos empresariales para mejorar la productividad y facilitar decisiones basadas en informacion.",
    aiItems: ["Automatizacion inteligente", "Asistentes y agentes IA", "Integracion con ERP y CRM"],
    techKicker: "TECNOLOGIAS",
    techTitle: "Un ecosistema moderno y flexible",
    techCategories: [
      ["Lenguajes", "JavaScript, TypeScript, C#, Python, Java, PHP, Go, SQL"],
      ["Frontend", "React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS"],
      ["Backend", "Node.js, ASP.NET Core, Express.js, APIs REST"],
      ["Bases de datos", "SQL Server, PostgreSQL, MySQL, MongoDB, Redis"],
      ["Inteligencia artificial", "OpenAI, modelos LLM, procesamiento de lenguaje natural, agentes IA"],
      ["Nube y DevOps", "Microsoft Azure, AWS, Docker, GitHub, IIS"],
    ],
    portfolioKicker: "PORTAFOLIO",
    portfolioTitle: "Proyectos que resuelven necesidades reales",
    portfolioIntro: "Una muestra de soluciones digitales diseñadas para optimizar operaciones empresariales.",
    projectCategory: "Sistema administrativo",
    projectTitle: "Olivos Lavandería",
    projectText: "Plataforma empresarial creada para centralizar la operación de una lavandería, facilitar el acceso a cada área de trabajo y mantener cada detalle del servicio organizado.",
    projectItems: ["Interfaz moderna y segura", "Administración de operaciones", "Experiencia clara para el equipo de trabajo"],
    projectButton: "Solicitar una solución similar",
    liveVideoButton: "Ver proyecto en vivo",
    whyKicker: "POR QUE NEXORA",
    whyTitle: "Ingenieria confiable, desde la idea hasta la produccion.",
    trust: [
      ["Seguridad", "Buenas practicas y proteccion desde el diseño."],
      ["Escalabilidad", "Arquitecturas preparadas para crecer."],
      ["Automatizacion", "Procesos mas eficientes y menos trabajo manual."],
    ],
    footerText: "Soluciones digitales, sistemas empresariales e inteligencia artificial para impulsar tu negocio.",
    footerServices: "Servicios",
    footerCompany: "Empresa",
    footerContact: "Contacto",
  },
  EN: {
    nav: ["Home", "Services", "Artificial intelligence", "Technologies", "Projects", "About"],
    eyebrow: "Technology engineering tailored to you",
    titleStart: "We build the future",
    titleAccent: "digital",
    titleEnd: "of your company.",
    hero: "We develop intelligent solutions that help businesses evolve. Web applications, enterprise systems and artificial intelligence to transform processes and empower companies.",
    heroPrimary: "Explore our services",
    heroSecondary: "Request a quote",
    visual: ["Development", "ERP", "AI", "Integration"],
    servicesKicker: "OUR SERVICES",
    servicesTitle: "Solutions created to grow your business",
    servicesIntro: "Robust architectures, modern experiences and technology that grows with you.",
    services: [
      ["Software development", "Web applications, enterprise platforms and custom administrative systems."],
      ["ERP systems", "Control inventory, finance, purchasing, sales, payroll and operations from one place."],
      ["APIs and integrations", "Connect platforms, automate processes and build scalable backend architectures."],
      ["Artificial intelligence", "Chatbots, virtual assistants, agents and intelligent automation for your company."],
    ],
    explore: "Explore service",
    aiKicker: "ARTIFICIAL INTELLIGENCE",
    aiTitle: "AI to take your business much further.",
    aiText: "We integrate artificial intelligence into business platforms and processes to improve productivity and support data-driven decisions.",
    aiItems: ["Intelligent automation", "AI assistants and agents", "ERP and CRM integration"],
    techKicker: "TECHNOLOGIES",
    techTitle: "A modern and flexible ecosystem",
    techCategories: [
      ["Languages", "JavaScript, TypeScript, C#, Python, Java, PHP, Go, SQL"],
      ["Frontend", "React, Next.js, Vue.js, HTML5, CSS3, Tailwind CSS"],
      ["Backend", "Node.js, ASP.NET Core, Express.js, REST APIs"],
      ["Databases", "SQL Server, PostgreSQL, MySQL, MongoDB, Redis"],
      ["Artificial intelligence", "OpenAI, LLM models, natural language processing, AI agents"],
      ["Cloud and DevOps", "Microsoft Azure, AWS, Docker, GitHub, IIS"],
    ],
    portfolioKicker: "PORTFOLIO",
    portfolioTitle: "Projects that solve real business needs",
    portfolioIntro: "A selection of digital solutions designed to optimize business operations.",
    projectCategory: "Administrative system",
    projectTitle: "Olivos Laundry",
    projectText: "Enterprise platform created to centralize laundry operations, simplify access to each work area and keep every service detail organized.",
    projectItems: ["Modern and secure interface", "Operations management", "Clear experience for the work team"],
    projectButton: "Request a similar solution",
    liveVideoButton: "View live project",
    whyKicker: "WHY NEXORA",
    whyTitle: "Reliable engineering, from idea to production.",
    trust: [
      ["Security", "Best practices and protection from the design stage."],
      ["Scalability", "Architectures prepared to grow."],
      ["Automation", "More efficient processes and less manual work."],
    ],
    footerText: "Digital solutions, enterprise systems and artificial intelligence to grow your business.",
    footerServices: "Services",
    footerCompany: "Company",
    footerContact: "Contact",
  },
} as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [language, setLanguage] = useState<"ES" | "EN">("ES");
  const t = copy[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem("nexora-theme");
    if (savedTheme) {
      const index = themes.findIndex(([name]) => name === savedTheme);
      if (index >= 0) applyTheme(index);
    }
    const savedLanguage = localStorage.getItem("nexora-language");
    if (savedLanguage === "EN" || savedLanguage === "ES") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage === "ES" ? "es" : "en";
    }

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll"),
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.08, rootMargin: "-6% 0px -8% 0px" },
    );

    revealElements.forEach((element) => {
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > window.innerHeight * 0.08) {
        element.classList.add("is-visible");
      }
      observer.observe(element);
    });
    document.documentElement.classList.add("reveal-enabled");

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-enabled");
    };
  }, []);

  function changeLanguage() {
    const nextLanguage = language === "ES" ? "EN" : "ES";
    setLanguage(nextLanguage);
    localStorage.setItem("nexora-language", nextLanguage);
    document.documentElement.lang = nextLanguage === "ES" ? "es" : "en";
  }

  function applyTheme(index: number) {
    const [name, primary, secondary] = themes[index];
    document.documentElement.dataset.theme = name.toLowerCase();
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--secondary", secondary);
  }

  function setTheme(index: number) {
    applyTheme(index);
    localStorage.setItem("nexora-theme", themes[index][0]);
    setThemeOpen(false);
  }

  const whatsappMessage = language === "ES"
    ? "Hola, estoy interesado en conocer los servicios de Nexora Technologies. Me gustaria recibir informacion sobre sus soluciones tecnologicas."
    : "Hello, I am interested in learning about Nexora Technologies services. I would like information about your technology solutions.";
  const whatsappUrl = `https://wa.me/18299160676?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Nexora Technologies">
          <img src="/nexora-logo.png" alt="Logotipo de Nexora Technologies" />
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label={language === "ES" ? "Navegacion principal" : "Main navigation"}>
          <a href="#inicio">{t.nav[0]}</a><a href="#servicios">{t.nav[1]}</a><a href="#ia">{t.nav[2]}</a>
          <a href="#tecnologias">{t.nav[3]}</a><a href="#proyectos">{t.nav[4]}</a><a href="#nosotros">{t.nav[5]}</a>
        </nav>
        <div className="nav-actions">
          <button className="language-button" onClick={changeLanguage} aria-label={language === "ES" ? "Cambiar a ingles" : "Switch to Spanish"}>{language}</button>
          <div className="theme-wrap">
            <button className="theme-button" onClick={() => setThemeOpen(!themeOpen)} aria-label="Cambiar tema"><Palette size={18} /><ChevronDown size={14} /></button>
            {themeOpen && <div className="theme-menu">{themes.map(([name, primary, secondary], index) => (
              <button key={name} onClick={() => setTheme(index)}><span className="theme-preview" style={{ background: `linear-gradient(135deg, ${primary}, ${secondary})` }} />{name}</button>
            ))}</div>}
          </div>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="orb orb-one" /><div className="orb orb-two" />
          <div className="hero-copy reveal-on-scroll" data-reveal="up">
            <div className="eyebrow"><Sparkles size={15} /> {t.eyebrow}</div>
            <h1>{t.titleStart} <span>{t.titleAccent}</span> {t.titleEnd}</h1>
            <p>{t.hero}</p>
            <div className="hero-actions"><a className="primary-button" href="#servicios">{t.heroPrimary} <ArrowRight size={18} /></a><a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.heroSecondary}</a></div>
          </div>
          <div className="hero-visual reveal-on-scroll" data-reveal="zoom" aria-label="Arquitectura tecnologica Nexora">
            <div className="visual-grid" /><div className="core-logo"><img src="/nexora-logo.png" alt="Logo Nexora Technologies" /></div>
            <div className="float-card card-one"><Code2 /><span>{t.visual[0]}</span></div><div className="float-card card-two"><Database /><span>{t.visual[1]}</span></div>
            <div className="float-card card-three"><Bot /><span>{t.visual[2]}</span></div><div className="float-card card-four"><Network /><span>{t.visual[3]}</span></div>
          </div>
        </section>

        <section className="section" id="servicios">
          <div className="section-heading reveal-on-scroll" data-reveal="up"><div><span className="kicker">{t.servicesKicker}</span><h2>{t.servicesTitle}</h2></div><p>{t.servicesIntro}</p></div>
          <div className="services-grid">
            {[
              { Icon: Code2, title: t.services[0][0], copy: t.services[0][1] },
              { Icon: Boxes, title: t.services[1][0], copy: t.services[1][1] },
              { Icon: Cpu, title: t.services[2][0], copy: t.services[2][1] },
              { Icon: Bot, title: t.services[3][0], copy: t.services[3][1] },
            ].map(({ Icon, title, copy }) => (
              <article className="service-card reveal-on-scroll" data-reveal="up" key={title}><div className="service-icon"><Icon size={26} /></div><h3>{title}</h3><p>{copy}</p><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.explore} <ArrowRight size={15} /></a></article>
            ))}
          </div>
        </section>

        <section className="section ai-section" id="ia">
          <div className="ai-copy reveal-on-scroll" data-reveal="left"><span className="kicker">{t.aiKicker}</span><h2>{t.aiTitle}</h2><p>{t.aiText}</p><div className="ai-list"><span><Zap size={16} /> {t.aiItems[0]}</span><span><Bot size={16} /> {t.aiItems[1]}</span><span><Database size={16} /> {t.aiItems[2]}</span></div></div>
          <div className="neural-panel reveal-on-scroll" data-reveal="right"><div className="neural-core"><Cpu size={56} /></div>{[0,1,2,3,4,5].map((item) => <span className={`node node-${item}`} key={item} />)}</div>
        </section>

        <section className="section" id="tecnologias">
          <div className="section-heading compact reveal-on-scroll" data-reveal="up"><div><span className="kicker">{t.techKicker}</span><h2>{t.techTitle}</h2></div></div>
          <div className="stack-grid">
            {[
              { Icon: Code2, title: t.techCategories[0][0], items: t.techCategories[0][1] },
              { Icon: Boxes, title: t.techCategories[1][0], items: t.techCategories[1][1] },
              { Icon: Cpu, title: t.techCategories[2][0], items: t.techCategories[2][1] },
              { Icon: Database, title: t.techCategories[3][0], items: t.techCategories[3][1] },
              { Icon: Bot, title: t.techCategories[4][0], items: t.techCategories[4][1] },
              { Icon: Network, title: t.techCategories[5][0], items: t.techCategories[5][1] },
            ].map(({ Icon, title, items }) => (
              <article className="stack-card reveal-on-scroll" data-reveal="up" key={title}>
                <div className="stack-icon"><Icon size={24} /></div>
                <h3>{title}</h3>
                <p>{items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="proyectos">
          <div className="section-heading reveal-on-scroll" data-reveal="up">
            <div><span className="kicker">{t.portfolioKicker}</span><h2>{t.portfolioTitle}</h2></div>
            <p>{t.portfolioIntro}</p>
          </div>
          <article className="project-card reveal-on-scroll" data-reveal="zoom">
            <div className="project-image">
              <img src="/proyecto-lavanderia.png" alt={language === "ES" ? "Sistema Olivos Lavandería para inicio de sesión y gestión empresarial" : "Olivos Laundry system for login and business management"} />
            </div>
            <div className="project-copy">
              <span className="project-category">{t.projectCategory}</span>
              <h3>{t.projectTitle}</h3>
              <p>{t.projectText}</p>
              <ul>
                <li>{t.projectItems[0]}</li>
                <li>{t.projectItems[1]}</li>
                <li>{t.projectItems[2]}</li>
              </ul>
              <div className="project-actions">
                <a className="primary-button" href="https://www.youtube.com/watch?v=4Aq2ZnmdBy0" target="_blank" rel="noopener noreferrer"><Play size={16} /> {t.liveVideoButton}</a>
                <a className="secondary-button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.projectButton} <ArrowRight size={16} /></a>
              </div>
            </div>
          </article>
        </section>

        <section className="section trust-section" id="nosotros">
          <div className="trust-copy reveal-on-scroll" data-reveal="left"><span className="kicker">{t.whyKicker}</span><h2>{t.whyTitle}</h2></div>
          <div className="trust-grid">
            {[
              { Icon: ShieldCheck, title: t.trust[0][0], copy: t.trust[0][1] },
              { Icon: Network, title: t.trust[1][0], copy: t.trust[1][1] },
              { Icon: Zap, title: t.trust[2][0], copy: t.trust[2][1] },
            ].map(({ Icon, title, copy }) => (
              <article className="reveal-on-scroll" data-reveal="up" key={title}><Icon size={24} /><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

      </main>
      <footer className="footer">
        <div className="footer-brand reveal-on-scroll" data-reveal="up"><img src="/nexora-logo.png" alt="Nexora Technologies" /><p>{t.footerText}</p></div>
        <div className="reveal-on-scroll" data-reveal="up"><strong>{t.footerServices}</strong><a href="#servicios">{t.services[0][0]}</a><a href="#servicios">{t.services[1][0]}</a><a href="#ia">{t.services[3][0]}</a></div>
        <div className="reveal-on-scroll" data-reveal="up"><strong>{t.footerCompany}</strong><a href="#proyectos">{t.nav[4]}</a><a href="#nosotros">{t.nav[5]}</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">{t.footerContact}</a></div>
        <div className="reveal-on-scroll" data-reveal="up"><strong>{t.footerContact}</strong><a href={whatsappUrl} target="_blank" rel="noopener noreferrer">+1 829 916 0676</a><span>Technology that transforms businesses.</span></div>
      </footer>
      <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={language === "ES" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}><MessageCircle size={26} /><span>WhatsApp</span></a>
    </div>
  );
}
