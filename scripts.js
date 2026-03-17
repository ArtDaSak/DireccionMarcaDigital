
const ExternalLinks = {
  editingPlans: "https://artdasak.github.io/PlanesDeEdicion/",
  editingAdvanced: "https://artdasak.github.io/PlanesDeEdicion/#advanced",
};

const StorageKey = "digitalGrowthSystemStateV3";

const PricingConfig = {
  plans: {
    basic: { name: "Básico", basePrice: 597000 },
    standard: { name: "Estándar", basePrice: 1297000 },
    premium: { name: "Premium", basePrice: 1997000 },
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
  const plan = PricingConfig.plans[state.planKey];
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

  const totalStart = plan.basePrice + sessionsCost + networksCost;
  const totalRoute = totalStart + continuity.monthlyPrice;

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

function BuildWhatsappMessage(result) {
  const networkLabels = GetSelectedNetworkLabels(result.items.selectedNetworks);
  const discountLine = result.items.sessionDiscountAmount > 0
    ? `> - Descuento por bloque de sesiones: ${FormatCop(result.items.sessionDiscountAmount)}`
    : null;

  const lines = [
    "Hola, ArtDäSak, quiero adquirir esta ruta de Dirección de Marca Digital:",
    `> - Plan del primer mes: ${result.plan.name} (${FormatCop(result.plan.basePrice)})`,
    `> - Sesiones extra en el primer mes: ${result.items.extraSessions}`,
  ];

  if (discountLine) {
    lines.push(discountLine);
  }

  lines.push(
    `> - Redes activadas (incluye 1ª): ${networkLabels.length ? networkLabels.join(", ") : "Ninguna"}`,
    `> - Redes adicionales con costo: ${result.items.extraNetworksCount}`,
    `- Total del primer mes: ${FormatCop(result.totalStart)}`,
    `> - Continuidad desde el segundo mes: ${result.continuity.name}${result.continuity.monthlyPrice > 0 ? ` (${FormatCop(result.continuity.monthlyPrice)})` : ""}`,
    `- Total estimado de la ruta: ${FormatCop(result.totalRoute)}`,
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

  const bubbleTriggers = document.querySelectorAll(".info-bubble-trigger");
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

  document.addEventListener("click", () => {
    document.querySelectorAll(".info-bubble-content").forEach((item) => item.classList.remove("is-visible"));
    document.querySelectorAll(".info-bubble-trigger").forEach((item) => item.classList.remove("is-active"));
  });

  const taglineToggles = document.querySelectorAll(".btn-tagline-toggle");

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

  taglineToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const actions = btn.closest(".tagline-actions");
      const tagline = actions.previousElementSibling;
      const isExpanded = tagline.classList.toggle("is-expanded");
      btn.textContent = isExpanded ? "Ver menos" : "... Ver más";
    });
  });

  checkAllTaglineOverflow();

  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      resetAllTaglines();
      const parentGroup = trigger.closest(".accordion-group");
      const category = parentGroup.dataset.accordion;
      const isAlreadyActive = parentGroup.classList.contains("is-active");

      document.querySelectorAll(".accordion-group").forEach((group) => group.classList.remove("is-active"));
      if (!isAlreadyActive) {
        document.querySelectorAll(`.accordion-group[data-accordion="${category}"]`).forEach((group) => group.classList.add("is-active"));
      }
    });
  });

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

  document.querySelectorAll(".js-route-plan").forEach((button) => {
    button.addEventListener("click", () => {
      state.planKey = button.dataset.plan;
      render();
      ScrollToCustomizer();
    });
  });

  document.querySelectorAll(".js-route-continuity").forEach((button) => {
    button.addEventListener("click", () => {
      state.continuityKey = button.dataset.continuity;
      render();
      ScrollToCustomizer();
    });
  });

  render();
});
