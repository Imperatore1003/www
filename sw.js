// Install service worker
self.addEventListener("install", evt => {
    console.log("Service worker has been installed")
});

// Activate service worker event
self.addEventListener("activate", evt => {
    console.log("Service worker has been activated")
});

// Fetch to service worker event
self.addEventListener("fetch", evt => {
    console.log("Fetch event", evt);
});