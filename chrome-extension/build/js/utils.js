async function getActiveTabURL(){return(await chrome.tabs.query({currentWindow:!0,active:!0}))[0]}export{getActiveTabURL};