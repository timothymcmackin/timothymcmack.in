let enabledTags = [];

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
  const portfolioElements = document.getElementsByClassName("portfolioEntry");
  for (let i = 0; i < portfolioElements.length; i++) {
    const oneElement = portfolioElements[i];
    if (oneElement.getAttribute("default") === "true") {
      oneElement.classList.remove("portfolioHide");
    } else {
      oneElement.classList.add("portfolioHide");
    }
  }
}

const showEverything = () => {
  const showAllButton = document.getElementById("showAllButton");
  const currentStatus = showAllButton.getAttribute("status");

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
    showAllButton.setAttribute("status", "off");
    showAllButton.classList.remove("tagButtonSelected");
    resetToDefaults();
  } else {
    // If off, turn all entries on
    const portfolioElements = document.getElementsByClassName("portfolioEntry");
    for (let i = 0; i < portfolioElements.length; i++) {
      const oneElement = portfolioElements[i];
      oneElement.classList.remove("portfolioHide");
    }
    showAllButton.setAttribute("status", "on");
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
      const tags = oneElement.getAttribute("tags").split(',');
      const shouldBeEnabled = tags.reduce((isMatched, oneTag) =>
        isMatched || enabledTags.includes(oneTag)
        , false);
      if (shouldBeEnabled) {
        oneElement.classList.remove("portfolioHide");
      } else {
        oneElement.classList.add("portfolioHide");
      }
    }
  }

  // Set classes on tag buttons to show that they are activated
  const tagButtons = document.getElementsByClassName("tagButton");
  for (let i = 0; i < tagButtons.length; i++) {
    const oneTagButton = tagButtons[i];
    const tagName = oneTagButton.getAttribute("tagName");
    if (enabledTags.includes(tagName)) {
      oneTagButton.classList.add("tagButtonSelected");
    } else {
      oneTagButton.classList.remove("tagButtonSelected");
    }
  }
}