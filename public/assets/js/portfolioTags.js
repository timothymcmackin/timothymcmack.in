let enabledTags = [];

const FADE_MS = 300;

const hideEntry = (el) => {
  if (el.classList.contains("portfolioHide")) return;
  el.classList.add("portfolioFading");
  window.setTimeout(() => {
    if (el.classList.contains("portfolioFading")) {
      el.classList.add("portfolioHide");
    }
  }, FADE_MS);
}

const showEntry = (el) => {
  if (!el.classList.contains("portfolioHide") && !el.classList.contains("portfolioFading")) return;
  el.classList.remove("portfolioHide");
  el.classList.add("portfolioFading");
  // Force a reflow so the opacity:0 state is applied before we transition away from it
  void el.offsetWidth;
  el.classList.remove("portfolioFading");
}

const setEntryVisibility = (el, shouldShow) => {
  if (shouldShow) {
    showEntry(el);
  } else {
    hideEntry(el);
  }
}

const toggleTag = (tagName) => {
  if (enabledTags.includes(tagName)) {
    enabledTags.splice(enabledTags.indexOf(tagName), 1);
  } else {
    enabledTags.push(tagName);
  }
  updateTags();
}

const enableTag = (tagName) => {
  if (!enabledTags.includes(tagName)) {
    enabledTags.push(tagName);
  }
  updateTags();
}

const resetToDefaults = () => {
  // Reset portfolio items to defaults
  const portfolioElements = document.getElementsByClassName("portfolioEntry");
  for (let i = 0; i < portfolioElements.length; i++) {
    const oneElement = portfolioElements[i];
    setEntryVisibility(oneElement, oneElement.getAttribute("data-default") === "true");
  }
  // Reset tags
  enabledTags = [];
  const tagButtons = document.getElementsByClassName("tagButton");
  for (let i = 0; i < tagButtons.length; i++) {
    const oneTagButton = tagButtons[i];
    if (oneTagButton.id === "showDefaultButton") {
      oneTagButton.setAttribute("data-status", "on");
      oneTagButton.classList.add("tagButtonSelected");
    } else {
      oneTagButton.setAttribute("data-status", "off");
      oneTagButton.classList.remove("tagButtonSelected");
    }
  }
}

const showEverything = () => {
  const showAllButton = document.getElementById("showAllButton");
  const currentStatus = showAllButton.getAttribute("data-status");

  // Deselect all other tag buttons
  enabledTags = [];
  const tagButtons = document.getElementsByClassName("tagButton");
  for (let i = 0; i < tagButtons.length; i++) {
    const oneTagButton = tagButtons[i];
    if (oneTagButton.id !== "showAllButton") {
      oneTagButton.classList.remove("tagButtonSelected");
    }
  }

  if (currentStatus === "on") {
    // If on, reset to defaults
    showAllButton.setAttribute("data-status", "off");
    showAllButton.classList.remove("tagButtonSelected");
    resetToDefaults();
  } else {
    // If off, turn all entries on
    const portfolioElements = document.getElementsByClassName("portfolioEntry");
    for (let i = 0; i < portfolioElements.length; i++) {
      setEntryVisibility(portfolioElements[i], true);
    }
    showAllButton.setAttribute("data-status", "on");
    showAllButton.classList.add("tagButtonSelected");
  }
}

const updateTags = () => {

  // Set classes on portfolio items
  const portfolioElements = document.getElementsByClassName("portfolioEntry");

  // If no tags are selected, show defaults
  if (enabledTags.length === 0) {
    resetToDefaults();
  } else {
    // Else, show items for the selected tags
    for (let i = 0; i < portfolioElements.length; i++) {
      const oneElement = portfolioElements[i];
      const tags = oneElement.getAttribute("data-tags").split(',');
      const shouldBeEnabled = tags.reduce((isMatched, oneTag) =>
        isMatched || enabledTags.includes(oneTag)
        , false);
      setEntryVisibility(oneElement, shouldBeEnabled);
    }
  }

  // Set classes on tag buttons to show that they are activated
  const tagButtons = document.getElementsByClassName("tagButton");
  for (let i = 0; i < tagButtons.length; i++) {
    const oneTagButton = tagButtons[i];
    const tagName = oneTagButton.getAttribute("data-tag-name");
    if (enabledTags.includes(tagName)) {
      oneTagButton.classList.add("tagButtonSelected");
    } else {
      oneTagButton.classList.remove("tagButtonSelected");
    }
  }
}
