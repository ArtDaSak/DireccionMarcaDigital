
const ExternalLinks = {
  editingPlans: "https://artdasak.github.io/PlanesDeEdicion/",
  editingAdvanced: "https://artdasak.github.io/PlanesDeEdicion/#advanced",
};

const StorageKey = "digitalGrowthSystemStateV3";

const PricingConfig = {
  personal: {
    plans: {
      basic: {
        id: "basic",
        name: "Básico",
        basePrice: 597000,
        isPopular: false,
        badgeText: "",
        idealFor: "<strong>Ideal para:</strong> marcas nuevas, marcas en pausa o personas que sí pueden ejecutar, pero necesitan dirección profesional para hacerlo bien desde el inicio.",
        tagline: "<strong>Dirección estratégica:</strong> Definimos la dirección de tu marca y te damos una ruta clara. Tú ejecutas los cambios con criterio y sin improvisar.",
        priceAmount: "$597.000",
        priceCycle: "COP / 1 pago",
        ctaText: "Elegir Básico y continuar",
        ctaClass: "plan-cta-secondary",
        deliverablesTitle: "Qué te entregamos",
        deliverables: [
          "<strong>Diagnóstico inicial</strong> de tu marca o de tu punto de partida",
          "<strong>Definición de enfoque, objetivos y dirección</strong> del mes",
          "<strong>Claridad de posicionamiento, mensaje y comunicación</strong>",
          "<strong>Pilares de contenido</strong> para organizar lo que vas a publicar",
          "<strong>Recomendaciones para tu perfil y presencia digital</strong>",
          "<strong>2 sesiones de revisión</strong> para resolver dudas y ajustar decisiones"
        ],
        actionsTitle: "Qué haces tú",
        actions: [
          "<strong>Ejecutas los cambios</strong> en tu perfil, contenido y presencia digital",
          "<strong>Aplicas la ruta de acción</strong> con nuestra dirección estratégica",
          "<strong>Traes tus dudas y avances</strong> a las sesiones para corregir rumbo"
        ],
        resultsTitle: "Qué tendrás el primer mes",
        results: [
          "<strong>La dirección de tu marca definida</strong> para que sepas qué comunicar, cómo comunicarlo y hacia dónde avanzar",
          "<strong>Tu posicionamiento, mensaje y enfoque más claros</strong> para dejar de improvisar decisiones",
          "<strong>Una ruta de acción priorizada</strong> para ejecutar los siguientes 30 días con orden y criterio",
          "<strong>Los pilares de contenido definidos</strong> para saber qué tipos de temas y mensajes trabajar"
        ]
      },
      standard: {
        id: "standard",
        name: "Estándar",
        basePrice: 1297000,
        isPopular: true,
        badgeText: "Más popular",
        idealFor: "<strong>Ideal para:</strong> quienes quieren avanzar más rápido, delegar el arranque y no quedarse solo con teoría o recomendaciones.",
        tagline: "<strong>Implementación guiada:</strong> No solo te decimos qué hacer, también te ayudamos a implementar la base inicial de tu marca para que no empieces desde cero y aprendas a utilizar el sistema.",
        priceAmount: "$1.297.000",
        priceCycle: "COP / 1 pago",
        ctaText: "Elegir Estándar y continuar",
        ctaClass: "plan-cta-primary",
        deliverablesTitle: "Qué te entregamos",
        deliverables: [
          "<strong>La base estratégica definida</strong> con la que va a empezar o a renovarse tu marca",
          "<strong>El perfil principal optimizado</strong> y la presencia digital inicial ordenada",
          "<strong>Lineamientos base de identidad visual, verbal y de comunidad</strong>",
          "<strong>El sistema de contenido organizado</strong> para empezar a publicar con dirección",
          "<strong>La estructura inicial del mes implementada</strong> para que la marca quede encaminada",
          "<strong>Piezas o plantillas base listas</strong> según el alcance del proyecto",
          "<strong>2 sesiones de revisión personalizada</strong> para mejorar e implementar la base de la marca"
        ],
        actionsTitle: "Qué haces tú",
        actions: [
          "<strong>Participas validando decisiones</strong> clave de la marca",
          "<strong>Aportas información y material</strong> necesario para construir la base correctamente",
          "<strong>Implementas en conjunto</strong> parte de los cambios necesarios para construir la base de la marca",
          "<strong>Aprendes cómo quedó armado el sistema</strong> para usarlo mejor después"
        ],
        resultsTitle: "Qué tendrás el primer mes",
        results: [
          "<strong>La base estratégica de tu marca definida y aterrizada</strong> para empezar o renovarte con mayor coherencia",
          "<strong>Tu perfil principal mejor organizado</strong> y tu presencia digital inicial más clara",
          "<strong>Lineamientos base de identidad visual, verbal y de comunidad</strong> para comunicar de forma más consistente",
          "<strong>Un sistema inicial de contenido preparado</strong> para empezar a publicar con dirección",
          "<strong>Una estructura base ya implementada</strong> para no arrancar desde cero después del primer mes"
        ]
      },
      premium: {
        id: "premium",
        name: "Premium",
        basePrice: 1997000,
        isPopular: false,
        badgeText: "",
        idealFor: "<strong>Ideal para:</strong> marcas que quieren implementación, acompañamiento más profundo y una transición más sólida hacia la autonomía.",
        tagline: "<strong>Implementación y transferencia:</strong> Además de dejar implementada la base de tu marca, revisamos el proceso con más profundidad y te transferimos el criterio para que puedas sostenerla con mayor autonomía.",
        priceAmount: "$1.997.000",
        priceCycle: "COP / 1 pago",
        ctaText: "Elegir Premium y continuar",
        ctaClass: "plan-cta-secondary",
        deliverablesTitle: "Qué te entregamos",
        deliverables: [
          "<strong>Todo lo que incluye el plan Estándar</strong>",
          "<strong>Formación estratégica personalizada</strong> sobre cómo sostener tu marca",
          "<strong>Explicación operativa</strong> del sistema que se deja implementado",
          "<strong>Revisión más profunda</strong> de decisiones, enfoque y ejecución",
          "<strong>Mayor espacio de ajuste</strong> durante el proceso",
          "<strong>Guía base de continuidad</strong> para que no pierdas coherencia después del primer mes"
        ],
        actionsTitle: "Qué haces tú",
        actions: [
          "<strong>Todo lo que haces en el plan Estándar</strong>",
          "<strong>Participas activamente</strong> en la comprensión, creación e implementación del sistema",
          "<strong>Aprendes el criterio detrás de las decisiones</strong> que se toman en la marca",
          "<strong>Te preparas para sostener el crecimiento</strong> con mayor autonomía"
        ],
        resultsTitle: "Qué tendrás el primer mes",
        results: [
          "<strong>La base de tu marca implementada con mayor profundidad</strong>, lista para sostenerse con más solidez",
          "<strong>Un sistema de marca y contenido más claro para ti</strong>, no solo implementado, sino mejor comprendido",
          "<strong>Una guía de continuidad más útil</strong> para seguir creciendo sin perder coherencia",
          "<strong>Mayor criterio para tomar decisiones</strong> sobre contenido, comunicación y evolución de la marca",
          "<strong>Más autonomía para sostener el proceso</strong> sin depender tanto de acompañamiento constante"
        ]
      }
    }
  },
  teams: {
    plans: {
      basic: {
        id: "basic",
        name: "Básico",
        basePrice: 797000,
        isPopular: false,
        badgeText: "",
        idealFor: "<strong>Ideal para:</strong> equipos pequeños, sedes locales o proyectos con varias personas que necesitan orden, dirección y claridad para empezar bien.",
        tagline: "<strong>Dirección estratégica para equipos:</strong> definimos el rumbo del proyecto, ordenamos el mensaje y les damos una ruta clara para que el equipo pueda ejecutar sin improvisar.",
        priceAmount: "$797.000",
        priceCycle: "COP / desde",
        ctaText: "Elegir Básico y continuar",
        ctaClass: "plan-cta-secondary",
        deliverablesTitle: "Qué les entregamos",
        deliverables: [
          "<strong>Diagnóstico inicial</strong> del proyecto, equipo o sede",
          "<strong>Definición del enfoque, objetivo principal y dirección</strong> del mes",
          "<strong>Claridad de posicionamiento, mensaje y comunicación</strong> del equipo",
          "<strong>Pilares de contenido</strong> para organizar lo que van a publicar",
          "<strong>Recomendaciones</strong> para sus canales y presencia digital",
          "<strong>2 sesiones de revisión</strong> para alinear decisiones y resolver dudas"
        ],
        actionsTitle: "Qué hacen ustedes",
        actions: [
          "<strong>Ejecutan los cambios</strong> en perfiles, contenido y presencia digital con nuestra dirección",
          "<strong>Aportan la información base</strong> del proyecto, oferta y público",
          "<strong>Validan decisiones clave</strong> para que el sistema tenga coherencia",
          "<strong>Llevan dudas y avances</strong> a las sesiones para corregir rumbo"
        ],
        resultsTitle: "Qué tendrán el primer mes",
        results: [
          "<strong>La dirección del proyecto definida</strong> para saber qué comunicar, cómo comunicarlo y hacia dónde avanzar",
          "<strong>Un posicionamiento y mensaje más claros</strong> para dejar de improvisar entre varias personas",
          "<strong>Una ruta de acción priorizada</strong> para ejecutar los siguientes 30 días con más orden",
          "<strong>Los pilares de contenido definidos</strong> para organizar mejor lo que el equipo va a publicar"
        ]
      },
      standard: {
        id: "standard",
        name: "Estándar",
        basePrice: 1497000,
        isPopular: true,
        badgeText: "Sugerido",
        idealFor: "<strong>Ideal para:</strong> equipos que quieren avanzar más rápido, dejar mejor organizada la operación inicial y no quedarse solo con lineamientos.",
        tagline: "<strong>Implementación guiada para equipos:</strong> no solo definimos la dirección, también ayudamos a aterrizar la base inicial del sistema para que varias personas puedan empezar con mayor coherencia.",
        priceAmount: "$1.497.000",
        priceCycle: "COP / desde",
        ctaText: "Elegir Estándar y continuar",
        ctaClass: "plan-cta-primary",
        deliverablesTitle: "Qué les entregamos",
        deliverables: [
          "<strong>La base estratégica del proyecto definida</strong> y aterrizada",
          "<strong>Los canales principales optimizados</strong> y mejor organizedos",
          "<strong>Lineamientos base</strong> de identidad visual, verbal y de comunidad",
          "<strong>El sistema de contenido estructurado</strong> para empezar a publicar con dirección",
          "<strong>La estructura inicial del mes parcialmente implementada</strong>",
          "<strong>Piezas o plantillas base listas</strong> según el alcance del proyecto",
          "<strong>2 sesiones de revisión personalizada</strong> para mejorar y ajustar la implementación"
        ],
        actionsTitle: "Qué hacen ustedes",
        actions: [
          "<strong>Participan validando decisiones clave</strong> del proyecto",
          "<strong>Aportan material, contexto e insumos necesarios</strong> para construir la base correctamente",
          "<strong>Implementan en conjunto</strong> parte de los cambios para que el sistema quede encaminado",
          "<strong>Aprenden cómo quedó armado el sistema</strong> para poder usarlo mejor después"
        ],
        resultsTitle: "Qué tendrán el primer mes",
        results: [
          "<strong>La base estratégica del proyecto definida</strong> para empezar con mayor coherencia",
          "<strong>Sus canales principales mejor organizados</strong> y su presencia digital más clara",
          "<strong>Lineamientos base</strong> para comunicar de forma más consistente entre varias personas",
          "<strong>Un sistema inicial de contenido preparado</strong> para empezar a publicar con dirección",
          "<strong>Una estructura base ya encaminada</strong> para no arrancar desde cero después del primer mes"
        ]
      },
      premium: {
        id: "premium",
        name: "Ruta personalizada",
        basePrice: 0,
        isCustomQuote: true,
        isPopular: false,
        badgeText: "",
        idealFor: "<strong>Ideal para:</strong> franquicias, equipos más grandes, estructuras territoriales o proyectos donde el alcance debe definirse antes de cotizar.",
        tagline: "<strong>Ruta a medida</strong> para estructuras con mayor complejidad, varias sedes, múltiples responsables o necesidades específicas de implementación y captación.",
        priceAmount: "Cotizamos",
        priceCycle: "según el caso",
        ctaText: "Elegir Personalizada y continuar",
        ctaClass: "plan-cta-secondary",
        deliverablesTitle: "Qué les entregamos",
        deliverables: [
          "<strong>Una propuesta ajustada</strong> a la complejidad real del proyecto",
          "<strong>Revisión estratégica</strong> del modelo de comunicación, captación y operación digital",
          "<strong>Definición del alcance</strong> según equipo, canales, sedes y objetivos",
          "<strong>Ruta de trabajo por fases</strong> según necesidades reales",
          "<strong>Recomendación de estructura, acompañamiento e implementación</strong> según el caso"
        ],
        actionsTitle: "Qué hacen ustedes",
        actions: [
          "<strong>Nos comparten el contexto completo</strong> del proyecto, equipo y metas",
          "<strong>Definen con nosotros prioridades</strong>, recursos y nivel de acompañamiento",
          "<strong>Participan en la validación del alcance</strong> para construir una propuesta coherente",
          "<strong>Deciden qué parte quieren ejecutar internamente</strong> y qué parte quieren delegar"
        ],
        resultsTitle: "Qué tendrán el primer mes",
        results: [
          "<strong>Claridad sobre la estructura digital</strong> que más sentido tiene para su caso",
          "<strong>Una ruta de trabajo adaptada</strong> a la complejidad real del proyecto",
          "<strong>Un alcance mejor definido</strong> para evitar improvisación, sobrecarga o expectativas confusas",
          "<strong>Una propuesta alineada</strong> con sus objetivos, recursos y nivel de operación"
        ]
      }
    }
  },
  continuity: {
    none: { name: "No continuar por ahora", monthlyPrice: 0 },
    advisory1: { name: "Asesoría mensual — 1 sesión", monthlyPrice: 157000 },
    advisory2: { name: "Asesoría mensual — 2 sesiones", monthlyPrice: 287000 },
    editingBasic: { name: "Solo edición — Básico", monthlyPrice: 747000 },
    editingStandard: { name: "Solo edición — Estándar", monthlyPrice: 1797000 },
    editingAdvanced: { name: "Edición con dirección — Plan Avanzado", monthlyPrice: 3097000 },
  },
  extras: {
    extraSession: 117000,
    extraNetworkMultiplier: 0.37,
    maxExtraSessions: 5,
  },
  networkLabels: {
    instagram: "Instagram",
    facebook: "Facebook",
    tiktok: "TikTok",
    youtube: "YouTube",
    other: "Otra red social por definir",
  },
};

function FormatCop(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function Clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function GetSessionDiscount(extraSessions) {
  if (extraSessions >= 5) {
    return 0.15;
  }
  if (extraSessions >= 4) {
    return 0.10;
  }
  return 0;
}

function GetDefaultState() {
  return {
    clientType: "personal",
    planKey: "standard",
    continuityKey: "none",
    extraSessions: 0,
    selectedNetworks: [],
  };
}

function LoadState() {
  try {
    const raw = localStorage.getItem(StorageKey);
    if (!raw) return GetDefaultState();
    const parsed = JSON.parse(raw);
    return {
      ...GetDefaultState(),
      ...parsed,
      extraSessions: Clamp(Number(parsed.extraSessions || 0), 0, PricingConfig.extras.maxExtraSessions),
      selectedNetworks: Array.isArray(parsed.selectedNetworks) ? parsed.selectedNetworks : [],
    };
  } catch {
    return GetDefaultState();
  }
}

function SaveState(state) {
  localStorage.setItem(StorageKey, JSON.stringify(state));
}

function GetSelectedNetworkLabels(selectedNetworks) {
  return selectedNetworks.map((key) => PricingConfig.networkLabels[key] || key);
}

function CalculateRoutePrice(state) {
  const plans = PricingConfig[state.clientType].plans;
  const plan = plans[state.planKey] || plans["standard"];
  const continuity = PricingConfig.continuity[state.continuityKey];
  const extraSessions = Clamp(Number(state.extraSessions || 0), 0, PricingConfig.extras.maxExtraSessions);
  const selectedNetworks = Array.isArray(state.selectedNetworks) ? state.selectedNetworks : [];

  const sessionsSubtotal = extraSessions * PricingConfig.extras.extraSession;
  const sessionDiscountPercent = GetSessionDiscount(extraSessions);
  const sessionDiscountAmount = Math.round(sessionsSubtotal * sessionDiscountPercent);
  const sessionsCost = sessionsSubtotal - sessionDiscountAmount;

  const networksCount = selectedNetworks.length;
  const extraNetworksCount = Math.max(0, networksCount - 1);
  const networksCost = Math.round(plan.basePrice * PricingConfig.extras.extraNetworkMultiplier * extraNetworksCount);

  const totalStart = plan.isCustomQuote ? 0 : (plan.basePrice + sessionsCost + networksCost);
  const totalRoute = plan.isCustomQuote ? 0 : (totalStart + continuity.monthlyPrice);

  return {
    plan,
    continuity,
    items: {
      extraSessions,
      sessionsSubtotal,
      sessionDiscountPercent,
      sessionDiscountAmount,
      sessionsCost,
      selectedNetworks,
      networksCount,
      extraNetworksCount,
      networksCost,
    },
    totalStart,
    totalRoute,
  };
}

function GetSuggestion(state, result) {
  if (state.planKey === "premium" || state.continuityKey === "editingAdvanced") {
    return {
      tone: "success",
      text: "Esta es tu ruta más completa: combina una base más sólida desde el primer mes con una continuidad pensada para sostener la calidad, el criterio y la evolución de tu marca.",
    };
  }

  if (state.planKey === "basic" && (result.items.extraSessions >= 4 || result.items.networksCount >= 2)) {
    return {
      tone: "warning",
      text: "Por el nivel de apoyo que estás sumando, puede convenirte revisar el plan Estándar: muchas veces te permite arrancar con una base mejor implementada desde el principio y avanzar con menos fricción.",
    };
  }

  if (state.planKey === "standard") {
    return {
      tone: "info",
      text: "Esta suele ser la ruta más equilibrada cuando quieres delegar una parte importante del arranque sin irte todavía al nivel de transferencia más profundo del Premium.",
    };
  }

  if (state.continuityKey === "none") {
    return {
      tone: "info",
      text: "Puedes dejar abierta la continuidad por ahora y definirla más adelante. Aun así, ya estás organizando con claridad el primer mes de trabajo y el tipo de apoyo que necesitará tu marca después.",
    };
  }

  return {
    tone: "info",
    text: "Tu ruta está bien alineada: ya tienes un punto de partida claro para el primer mes y una continuidad coherente con el nivel de apoyo que quieres sostener después.",
  };
}

function BuildWhatsappMessage(result, state) {
  const networkLabels = GetSelectedNetworkLabels(result.items.selectedNetworks);
  const discountLine = result.items.sessionDiscountAmount > 0
    ? `> - Descuento por bloque de sesiones: ${FormatCop(result.items.sessionDiscountAmount)}`
    : null;

  const subject = state.clientType === "personal" ? "mi marca personal" : "mi equipo / empresa";
  const lines = [
    `Hola, ArtDäSak, quiero adquirir esta ruta de Dirección de Marca Digital para ${subject}:`,
    `> - Plan del primer mes: ${result.plan.name} (${result.plan.isCustomQuote ? "Cotizamos" : FormatCop(result.plan.basePrice)})`,
    `> - Sesiones extra en el primer mes: ${result.items.extraSessions}`,
  ];

  if (discountLine) {
    lines.push(discountLine);
  }

  lines.push(
    `> - Redes activadas (incluye 1ª): ${networkLabels.length ? networkLabels.join(", ") : "Ninguna"}`,
    `> - Redes adicionales con costo: ${result.items.extraNetworksCount}`,
    `- Total del primer mes: ${result.plan.isCustomQuote ? "Cotizamos" : FormatCop(result.totalStart)}`,
    `> - Continuidad desde el segundo mes: ${result.continuity.name}${result.continuity.monthlyPrice > 0 ? (result.plan.isCustomQuote ? "" : ` (${FormatCop(result.continuity.monthlyPrice)})`) : ""}`,
    `- Total estimado de la ruta: ${result.plan.isCustomQuote ? "Cotizamos" : FormatCop(result.totalRoute)}`
  );

  return lines.join("\n");
}

function ScrollToCustomizer() {
  const section = document.getElementById("customizer-section");
  section?.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }

  themeToggleBtn?.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  document.querySelectorAll("[data-editing-link='true']").forEach((link) => {
    link.href = ExternalLinks.editingPlans;
  });

  document.querySelectorAll("[data-editing-advanced-link='true']").forEach((link) => {
    link.href = ExternalLinks.editingAdvanced;
  });

  function checkAllTaglineOverflow() {
    document.querySelectorAll(".tagline-actions").forEach((actions) => {
      const tagline = actions.previousElementSibling;
      const isExpanded = tagline.classList.contains("is-expanded");

      if (!isExpanded) {
        const style = window.getComputedStyle(tagline);
        const lineHeight = parseFloat(style.lineHeight);
        const maxHeight = lineHeight * 2.8;

        if (tagline.scrollHeight <= maxHeight) {
          actions.style.display = "none";
        } else {
          actions.style.display = "flex";
          const btn = actions.querySelector(".btn-tagline-toggle");
          if (btn) btn.textContent = "... Ver más";
        }
      }
    });
  }

  function resetAllTaglines() {
    document.querySelectorAll(".plan-tagline").forEach((tagline) => {
      tagline.classList.remove("is-expanded");
      const actions = tagline.nextElementSibling;
      if (actions?.classList.contains("tagline-actions")) {
        const btn = actions.querySelector(".btn-tagline-toggle");
        if (btn) btn.textContent = "... Ver más";
        actions.style.display = "flex";
      }
    });
    checkAllTaglineOverflow();
  }

  function bindCardEvents(container) {
    const taglineToggles = container.querySelectorAll(".btn-tagline-toggle");
    taglineToggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const actions = btn.closest(".tagline-actions");
        const tagline = actions.previousElementSibling;
        const isExpanded = tagline.classList.toggle("is-expanded");
        btn.textContent = isExpanded ? "Ver menos" : "... Ver más";
      });
    });

    const accordionTriggers = container.querySelectorAll(".accordion-trigger");
    accordionTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        resetAllTaglines();
        const parentGroup = trigger.closest(".accordion-group");
        const category = parentGroup.dataset.accordion;
        const isAlreadyActive = parentGroup.classList.contains("is-active");

        container.querySelectorAll(".accordion-group").forEach((group) => group.classList.remove("is-active"));
        if (!isAlreadyActive) {
          container.querySelectorAll(`.accordion-group[data-accordion="${category}"]`).forEach((group) => group.classList.add("is-active"));
        }
      });
    });

    const routeBtns = container.querySelectorAll(".js-route-plan");
    routeBtns.forEach((button) => {
      button.addEventListener("click", () => {
        state.planKey = button.dataset.plan;
        updatePlanSelectOptions();
        render();
        ScrollToCustomizer();
      });
    });

    const bubbleTriggers = container.querySelectorAll(".info-bubble-trigger");
    bubbleTriggers.forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.stopPropagation();
        const content = trigger.nextElementSibling;
        const isVisible = content.classList.contains("is-visible");

        document.querySelectorAll(".info-bubble-content").forEach((item) => item.classList.remove("is-visible"));
        document.querySelectorAll(".info-bubble-trigger").forEach((item) => item.classList.remove("is-active"));

        if (!isVisible) {
          content.classList.add("is-visible");
          trigger.classList.add("is-active");
        }
      });
    });
  }

  function renderPricingGrid() {
    const gridContainer = document.getElementById("main-pricing-grid");
    if (!gridContainer) return;

    const currentPlans = PricingConfig[state.clientType].plans;

    gridContainer.innerHTML = Object.values(currentPlans).map(plan => `
      <article class="plan-card ${plan.isPopular ? 'plan-highlight' : ''}">
        ${plan.isPopular ? `<div class="plan-badge">${plan.badgeText}</div>` : ''}
        <div class="plan-header">
          <div class="plan-title-row">
            <h3 class="plan-name">${plan.name}</h3>
            ${plan.idealFor ? `
            <div class="info-bubble-container">
              <button class="info-bubble-trigger" aria-label="Ideal para">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              </button>
              <div class="info-bubble-content">
                ${plan.idealFor}
              </div>
            </div>
            ` : ''}
          </div>
          <div class="tagline-wrapper">
            <p class="plan-tagline">
              ${plan.tagline}
            </p>
            <div class="tagline-actions">
              <button class="btn-tagline-toggle">... Ver más</button>
            </div>
          </div>
        </div>

        <div class="plan-price">
          <span class="price-amount" ${plan.isCustomQuote ? 'style="font-size: 2rem;"' : ''}>${plan.priceAmount}</span>
          <span class="price-cycle" ${plan.isCustomQuote ? 'style="margin-left: -5px;"' : ''}>${plan.priceCycle}</span>
        </div>

        <button class="plan-cta ${plan.ctaClass} js-route-plan" type="button" data-plan="${plan.id}">
          ${plan.ctaText}
        </button>

        <div class="plan-features-wrapper accordion-group" data-accordion="deliverables">
          <h4 class="features-title accordion-trigger">${plan.deliverablesTitle} <span class="accordion-icon"></span></h4>
          <div class="accordion-content">
            <ul class="plan-features">
              ${plan.deliverables.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="plan-features-wrapper accordion-group" data-accordion="actions">
          <h4 class="features-title accordion-trigger">${plan.actionsTitle} <span class="accordion-icon"></span></h4>
          <div class="accordion-content">
            <ul class="plan-features">
              ${plan.actions.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="plan-features-wrapper accordion-group" data-accordion="results">
          <h4 class="features-title accordion-trigger">${plan.resultsTitle} <span class="accordion-icon"></span></h4>
          <div class="accordion-content">
            <ul class="plan-features">
              ${plan.results.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>

        <p class="plan-footnote-spacer"></p>
      </article>
    `).join('');

    bindCardEvents(gridContainer);
    checkAllTaglineOverflow();
  }

  function updatePlanSelectOptions() {
    planSelect.innerHTML = "";
    const plans = PricingConfig[state.clientType].plans;
    Object.values(plans).forEach(plan => {
      const opt = document.createElement("option");
      opt.value = plan.id;
      opt.textContent = `${plan.name} — ${plan.isCustomQuote ? 'Cotizamos' : FormatCop(plan.basePrice)}`;
      planSelect.appendChild(opt);
    });
    if (!plans[state.planKey]) {
      state.planKey = Object.keys(plans)[0];
    }
  }

  const state = LoadState();

  const planSelect = document.getElementById("plan-select");
  const continuitySelect = document.getElementById("continuity-select");
  const extraSessionsInput = document.getElementById("extra-sessions");
  const btnSessionsMinus = document.getElementById("btn-sessions-minus");
  const btnSessionsPlus = document.getElementById("btn-sessions-plus");
  const networkChips = document.querySelectorAll(".network-chip");

  const elBase = document.getElementById("summary-base");
  const rowExtraSessions = document.getElementById("row-extra-sessions");
  const countExtraSessions = document.getElementById("count-extra-sessions");
  const elExtraSessions = document.getElementById("summary-extra-sessions");
  const rowExtraSessionsDiscount = document.getElementById("row-extra-sessions-discount");
  const elExtraSessionsDiscount = document.getElementById("summary-extra-sessions-discount");
  const rowExtraNetworks = document.getElementById("row-extra-networks");
  const countExtraNetworks = document.getElementById("count-extra-networks");
  const elExtraNetworks = document.getElementById("summary-extra-networks");
  const rowNetworkNote = document.getElementById("row-network-note");
  const elNetworkNote = document.getElementById("summary-network-note");
  const elTotalStart = document.getElementById("summary-total-start");
  const elContinuity = document.getElementById("summary-continuity");
  const elTotalRoute = document.getElementById("summary-total-route");
  const suggestionBox = document.getElementById("upgrade-suggestion");
  const suggestionMessage = document.getElementById("suggestion-message");
  const btnHire = document.getElementById("btn-hire-custom");

  function syncControls() {
    planSelect.value = state.planKey;
    continuitySelect.value = state.continuityKey;
    extraSessionsInput.value = state.extraSessions;

    networkChips.forEach((chip) => {
      const isSelected = state.selectedNetworks.includes(chip.dataset.network);
      chip.classList.toggle("is-selected", isSelected);
      chip.setAttribute("aria-pressed", String(isSelected));
    });

    btnSessionsMinus.disabled = state.extraSessions <= 0;
    btnSessionsPlus.disabled = state.extraSessions >= PricingConfig.extras.maxExtraSessions;
  }

  function render() {
    const result = CalculateRoutePrice(state);
    syncControls();

    elBase.textContent = FormatCop(result.plan.basePrice);

    if (result.items.extraSessions > 0) {
      rowExtraSessions.style.display = "flex";
      countExtraSessions.textContent = result.items.extraSessions;
      elExtraSessions.textContent = FormatCop(result.items.sessionsCost);
    } else {
      rowExtraSessions.style.display = "none";
    }

    if (result.items.sessionDiscountAmount > 0) {
      rowExtraSessionsDiscount.style.display = "flex";
      elExtraSessionsDiscount.textContent = `-${FormatCop(result.items.sessionDiscountAmount)}`;
    } else {
      rowExtraSessionsDiscount.style.display = "none";
    }

    if (result.items.extraNetworksCount > 0) {
      rowExtraNetworks.style.display = "flex";
      countExtraNetworks.textContent = result.items.extraNetworksCount;
      elExtraNetworks.textContent = FormatCop(result.items.networksCost);
    } else {
      rowExtraNetworks.style.display = "none";
    }

    if (result.items.selectedNetworks.length > 0) {
      rowNetworkNote.style.display = "flex";
      elNetworkNote.textContent = GetSelectedNetworkLabels(result.items.selectedNetworks).join(", ");
    } else {
      rowNetworkNote.style.display = "none";
    }

    elTotalStart.textContent = FormatCop(result.totalStart);
    elContinuity.textContent = result.continuity.monthlyPrice ? FormatCop(result.continuity.monthlyPrice) : "A elección";
    elTotalRoute.textContent = FormatCop(result.totalRoute);

    const suggestion = GetSuggestion(state, result);
    suggestionBox.style.display = "flex";
    suggestionBox.classList.remove("is-info", "is-warning", "is-success");
    suggestionBox.classList.add(`is-${suggestion.tone}`);
    suggestionMessage.textContent = suggestion.text;

    const message = BuildWhatsappMessage(result);
    btnHire.href = `https://wa.me/573160627549?text=${encodeURIComponent(message)}`;

    SaveState(state);
  }

  planSelect.addEventListener("change", (event) => {
    state.planKey = event.target.value;
    render();
  });

  continuitySelect.addEventListener("change", (event) => {
    state.continuityKey = event.target.value;
    render();
  });

  btnSessionsMinus.addEventListener("click", () => {
    state.extraSessions = Clamp(state.extraSessions - 1, 0, PricingConfig.extras.maxExtraSessions);
    render();
  });

  btnSessionsPlus.addEventListener("click", () => {
    state.extraSessions = Clamp(state.extraSessions + 1, 0, PricingConfig.extras.maxExtraSessions);
    render();
  });

  networkChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const key = chip.dataset.network;
      if (state.selectedNetworks.includes(key)) {
        state.selectedNetworks = state.selectedNetworks.filter((item) => item !== key);
      } else {
        state.selectedNetworks = [...state.selectedNetworks, key];
      }
      render();
    });
  });



  document.querySelectorAll(".js-route-continuity").forEach((button) => {
    button.addEventListener("click", () => {
      state.continuityKey = button.dataset.continuity;
      render();
      ScrollToCustomizer();
    });
  });

  // --- Switch Logic & Initialization ---
  const pathBtns = document.querySelectorAll(".path-btn");
  const pathHighlight = document.querySelector(".path-switch-highlight");

  function updatePathSwitch(activeBtn) {
    if (!activeBtn) return;
    
    pathBtns.forEach(btn => btn.classList.remove("active"));
    activeBtn.classList.add("active");

    const btnRect = activeBtn.getBoundingClientRect();
    const switchRect = activeBtn.parentElement.getBoundingClientRect();
    if (pathHighlight) {
      pathHighlight.style.width = `${btnRect.width}px`;
      pathHighlight.style.transform = `translateX(${btnRect.left - switchRect.left}px)`;
    }

    const targetClientType = activeBtn.dataset.target;
    if (state.clientType !== targetClientType) {
      state.clientType = targetClientType;
      renderPricingGrid();
      updatePlanSelectOptions();
      render();
    }
  }

  if (pathBtns.length > 0) {
    const initialActive = document.querySelector(`.path-btn[data-target="${state.clientType}"]`) || pathBtns[0];
    
    // Defer slightly to allow font rendering
    setTimeout(() => {
      updatePathSwitch(initialActive);
      // Force an initial render if clientType didn't change but we need the grid
      if (state.clientType === initialActive.dataset.target) {
        renderPricingGrid();
        updatePlanSelectOptions();
        render();
      }
    }, 50);

    pathBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (!btn.classList.contains("active")) {
          updatePathSwitch(btn);
        }
      });
    });

    window.addEventListener("resize", () => {
      const activeBtn = document.querySelector(".path-btn.active");
      if (activeBtn) {
        const btnRect = activeBtn.getBoundingClientRect();
        const switchRect = activeBtn.parentElement.getBoundingClientRect();
        if (pathHighlight) {
          pathHighlight.style.transform = `translateX(${btnRect.left - switchRect.left}px)`;
          pathHighlight.style.width = `${btnRect.width}px`;
        }
      }
    });
  } else {
    renderPricingGrid();
    updatePlanSelectOptions();
    render();
  }
});
