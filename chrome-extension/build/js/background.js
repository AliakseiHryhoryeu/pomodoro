chrome.tabs.onUpdated.addListener((e,a)=>{a.url&&a.url.includes("youtube.com/watch")&&(a=a.url.split("?")[1],a=new URLSearchParams(a),chrome.tabs.sendMessage(e,{type:"NEW",videoId:a.get("v")}))});