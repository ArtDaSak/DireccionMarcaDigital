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
});

const PricingConfig = {
  plans: {
    basic: { name: "Básico", basePrice: 597000 },
    standard: { name: "Estándar", basePrice: 1297000 },
    premium: { name: "Premium", basePrice: 1897000 },
  },
  continuity: {
    none: { name: "No continuar por ahora", monthlyPrice: 0 },
    advisory1: { name: "Solo asesoría — 1 sesión", monthlyPrice: 157000 },
    advisory2: { name: "Solo asesoría — 2 sesiones", monthlyPrice: 287000 },
    editingBasic: { name: "Solo edición — Básico", monthlyPrice: 747000 },
    editingStandard: { name: "Solo edición — Estándar", monthlyPrice: 1797000 },
    editingGrowth: { name: "Solo edición — Growth", monthlyPrice: 3097000 },
    strategyEditingBasic: { name: "Estrategia + edición — Básico", monthlyPrice: 997000 },
    strategyEditingStandard: { name: "Estrategia + edición — Estándar", monthlyPrice: 2047000 },
    strategyEditingGrowth: { name: "Estrategia + edición — Growth", monthlyPrice: 3347000 },
  },
  extras: {
    extraSession: 97000,
    extraRevision: 57000,
    extraNetworkMultiplier: 0.3,
    rushPercent: 0.2,
  },
};

function FormatCop(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(value);
}

function CalculateRoutePrice({ planKey, continuityKey, extraSessions, extraNetworks, extraRevisions, rushMode }) {
  const plan = PricingConfig.plans[planKey];
  const continuity = PricingConfig.continuity[continuityKey];

  const sessions = Math.max(0, Math.floor(extraSessions || 0));
  const networks = Math.max(0, Math.floor(extraNetworks || 0));
  const revisions = Math.max(0, Math.floor(extraRevisions || 0));

  const sessionsCost = sessions * PricingConfig.extras.extraSession;
  const networksCost = Math.round(plan.basePrice * PricingConfig.extras.extraNetworkMultiplier * networks);
  const revisionsCost = revisions * PricingConfig.extras.extraRevision;

  const subtotalBeforeRush = plan.basePrice + sessionsCost + networksCost + revisionsCost;
  const rushCost = rushMode ? Math.round(subtotalBeforeRush * PricingConfig.extras.rushPercent) : 0;
  const totalStart = subtotalBeforeRush + rushCost;

  return {
    plan,
    continuity,
    items: {
      sessions,
      sessionsCost,
      networks,
      networksCost,
      revisions,
      revisionsCost,
      rushCost,
    },
    totalStart,
  };
}

function GetSuggestion({ planKey, continuityKey, totalStart }) {
  if (planKey === "basic" && totalStart >= 1000000) {
    return "Con este nivel de inversión inicial, podrías evaluar Estándar para delegar mejor la implementación desde el mes 1.";
  }

  if (continuityKey === "none") {
    return "Si luego quieres mantener la claridad sin cargar con todo el peso operativo, la asesoría mensual suele ser la ruta de continuidad más ligera.";
  }

  if (continuityKey.startsWith("editing") || continuityKey.startsWith("strategyEditing")) {
    return "Esta ruta funciona mejor cuando el cliente puede grabar con constancia y necesita velocidad para publicar.";
  }

  return "Tu ruta combina construcción inicial y continuidad de forma coherente con una escalera clara de valor.";
}

function UpdateWhatsappLink(state, result) {
  const btnHire = document.getElementById("btn-hire-custom");
  if (!btnHire) return;

  const message = [
    "Hola, quiero cotizar esta ruta de Sistema de Marca Digital:",
    `- Plan mes 1: ${result.plan.name} (${FormatCop(result.plan.basePrice)})`,
    `- Sesiones extra: ${result.items.sessions}`,
    `- Redes adicionales: ${result.items.networks}`,
    `- Ajustes extra: ${result.items.revisions}`,
    `- Modo prioritario: ${state.rushMode ? "Sí" : "No"}`,
    `- Total mes 1: ${FormatCop(result.totalStart)}`,
    `- Continuidad desde mes 2: ${result.continuity.name}${result.continuity.monthlyPrice ? ` (${FormatCop(result.continuity.monthlyPrice)})` : ""}`,
  ].join("\n");

  btnHire.href = `https://wa.me/573160627549?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const planSelect = document.getElementById("plan-select");
  if (!planSelect) return;

  const continuitySelect = document.getElementById("continuity-select");
  const extraSessionsInput = document.getElementById("extra-sessions");
  const extraNetworksInput = document.getElementById("extra-networks");
  const extraRevisionsInput = document.getElementById("extra-revisions");
  const rushModeSelect = document.getElementById("rush-mode");

  const btnSessionsMinus = document.getElementById("btn-sessions-minus");
  const btnSessionsPlus = document.getElementById("btn-sessions-plus");
  const btnNetworksMinus = document.getElementById("btn-networks-minus");
  const btnNetworksPlus = document.getElementById("btn-networks-plus");
  const btnRevisionsMinus = document.getElementById("btn-revisions-minus");
  const btnRevisionsPlus = document.getElementById("btn-revisions-plus");

  const elBase = document.getElementById("summary-base");
  const rowExtraSessions = document.getElementById("row-extra-sessions");
  const countExtraSessions = document.getElementById("count-extra-sessions");
  const elExtraSessions = document.getElementById("summary-extra-sessions");

  const rowExtraNetworks = document.getElementById("row-extra-networks");
  const countExtraNetworks = document.getElementById("count-extra-networks");
  const elExtraNetworks = document.getElementById("summary-extra-networks");

  const rowExtraRevisions = document.getElementById("row-extra-revisions");
  const countExtraRevisions = document.getElementById("count-extra-revisions");
  const elExtraRevisions = document.getElementById("summary-extra-revisions");

  const rowRush = document.getElementById("row-rush");
  const elRush = document.getElementById("summary-rush");
  const elTotalStart = document.getElementById("summary-total-start");
  const elContinuity = document.getElementById("summary-continuity");
  const suggestionBox = document.getElementById("upgrade-suggestion");
  const suggestionMessage = document.getElementById("suggestion-message");

  const state = {
    planKey: "standard",
    continuityKey: "none",
    extraSessions: 0,
    extraNetworks: 0,
    extraRevisions: 0,
    rushMode: false,
  };

  function clamp(value) {
    return Math.max(0, Math.floor(Number(value) || 0));
  }

  function render() {
    const result = CalculateRoutePrice(state);

    extraSessionsInput.value = state.extraSessions;
    extraNetworksInput.value = state.extraNetworks;
    extraRevisionsInput.value = state.extraRevisions;

    elBase.textContent = FormatCop(result.plan.basePrice);

    if (result.items.sessions > 0) {
      rowExtraSessions.style.display = "flex";
      countExtraSessions.textContent = result.items.sessions;
      elExtraSessions.textContent = FormatCop(result.items.sessionsCost);
    } else {
      rowExtraSessions.style.display = "none";
    }

    if (result.items.networks > 0) {
      rowExtraNetworks.style.display = "flex";
      countExtraNetworks.textContent = result.items.networks;
      elExtraNetworks.textContent = FormatCop(result.items.networksCost);
    } else {
      rowExtraNetworks.style.display = "none";
    }

    if (result.items.revisions > 0) {
      rowExtraRevisions.style.display = "flex";
      countExtraRevisions.textContent = result.items.revisions;
      elExtraRevisions.textContent = FormatCop(result.items.revisionsCost);
    } else {
      rowExtraRevisions.style.display = "none";
    }

    if (result.items.rushCost > 0) {
      rowRush.style.display = "flex";
      elRush.textContent = FormatCop(result.items.rushCost);
    } else {
      rowRush.style.display = "none";
    }

    elTotalStart.textContent = FormatCop(result.totalStart);
    elContinuity.textContent = result.continuity.monthlyPrice ? FormatCop(result.continuity.monthlyPrice) : "A elección";

    suggestionBox.style.display = "flex";
    suggestionMessage.textContent = GetSuggestion({
      planKey: state.planKey,
      continuityKey: state.continuityKey,
      totalStart: result.totalStart,
    });

    UpdateWhatsappLink(state, result);
  }

  btnSessionsMinus?.addEventListener("click", () => {
    state.extraSessions = Math.max(0, state.extraSessions - 1);
    render();
  });
  btnSessionsPlus?.addEventListener("click", () => {
    state.extraSessions += 1;
    render();
  });

  btnNetworksMinus?.addEventListener("click", () => {
    state.extraNetworks = Math.max(0, state.extraNetworks - 1);
    render();
  });
  btnNetworksPlus?.addEventListener("click", () => {
    state.extraNetworks += 1;
    render();
  });

  btnRevisionsMinus?.addEventListener("click", () => {
    state.extraRevisions = Math.max(0, state.extraRevisions - 1);
    render();
  });
  btnRevisionsPlus?.addEventListener("click", () => {
    state.extraRevisions += 1;
    render();
  });

  planSelect.addEventListener("change", (event) => {
    state.planKey = event.target.value;
    render();
  });

  continuitySelect.addEventListener("change", (event) => {
    state.continuityKey = event.target.value;
    render();
  });

  rushModeSelect.addEventListener("change", (event) => {
    state.rushMode = event.target.value === "true";
    render();
  });

  render();
});
