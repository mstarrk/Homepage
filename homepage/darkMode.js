const body = document.querySelector('body')

const getCurrentTheme = () => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    return darkMode
}

// When toggle button is clicked
const toggleDarkMode = (el) => {
    const isDark = getCurrentTheme()
    setTheme(!isDark)
    setIcon(getCurrentTheme(), el.firstElementChild)
}

const setTheme = (darkMode) => {
    body.classList.toggle('dark-theme', darkMode)
    localStorage.setItem("darkMode", darkMode)
}

// Sets dark mode as default
const setDefaultTheme = () => {
    let isDark = getCurrentTheme()

    isDark = isDark === null ? true : isDark

    setTheme(isDark)
}

// Overwrite class name for <i> element (navbar button)
const setIcon = (isDark, icon) => {
    const iconClass = isDark ? 'bi-sun-fill' : 'bi-moon-fill'
    icon.className = iconClass
}

// On load, sets a MutationObserver to check for navbar generation then update <i> class with the icon.
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
const observeNavbar = () => {
    // Select the node that will be observed for mutations
    const targetNode = document.querySelector('.navbar_component');

    // Options for the observer (which mutations to observe)
    const config = { childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type === 'childList') {
                const nodes = mutation.addedNodes
                let icon = nodes[0].querySelectorAll("i")[2]
                setIcon(getCurrentTheme(), icon)
                observer.disconnect()
            }
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
}

observeNavbar()