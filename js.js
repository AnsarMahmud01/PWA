
const language = navigator.language; // Returns the language preference of the user (e.g. "ru-KZ")
const vendor = navigator.vendor; // Returns the vendor of the browser (e.g. "Google Inc.")
const platform = navigator.platform; // Returns the platform on which the browser is running (e.g. "Win32")
const cores = navigator.hardwareConcurrency; // Returns the number of processor cores available on the user's device (e.g. 8)
const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");
var x = document.getElementById("demo");


// To determine if the device is mobile or not, you can use the user agent string
const isMobile = /Mobi/i.test(navigator.userAgent);
if (isMobile === false) {
  isMobile.textContent = "mobile"
}
const deviceType = isMobile ? "mobile" : "not mobile";

function showInfo() {
  console.log(language, vendor, platform, cores);
  x.innerHTML = "Your language: " + language + "<br> Your vendor: " + vendor + "<br> Your platform: " + platform + "<br>Amount of your processor cores: " + cores + "<br>Your device is " + deviceType
}
showInfo()

function sendNotification() {
  // Check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notifications");
    return;
  }

  // Request permission to send notifications (if not already granted)
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        console.log("Notification permission granted");
      }
    });
  }

  // Create a new notification
  var notification = new Notification("Hello, world! Have a great day ❤️", {
    body: "This is a notification from the button"
  });
}

function share() {
  if (navigator.share) {
    navigator
      .share({
        title: "Example",
        text: "Check out this page!",
        url: "https://example.com",
      })
      .then(() => {
        console.log("Successful share");
      })
      .catch((error) => {
        console.log("Error sharing:", error);
      });
  } else {
    console.log("Web Share API not supported");
  }
}

// console.log("Notification" in window);