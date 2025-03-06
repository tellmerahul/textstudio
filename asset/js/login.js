
const fbLoginButton = getById('fb-login-button');
if (fbLoginButton) {
 window.fbAsyncInit = function() {
 FB.init({
 appId : '458837548550240',
 cookie : true,
 xfbml : true,
 version : 'v10.0'
 });
 };
 fbLoginButton.addEventListener('click', function (evt) {
 FB.login(function(response) {
 console.log('FB.login', response);
 if (
 response.status === 'connected' && 
 response.authResponse && 
 response.authResponse.accessToken
 ) {
 let token = response.authResponse.accessToken;
 onSignIn('loginFromFacebookToken', token);
 }
 }, {scope: 'public_profile,email'});
 });
}

function setGoogleButtonLogin() { 
 if (!google) return;
 const ctr = document.getElementById('gg-login-container');
 google.accounts.id.renderButton(
 ctr,
 {
 theme: 'filled_blue',
 size: 'medium',
 width: ctr.offsetWidth,
 } 
 );
}


window.onload = function() {
    google.accounts.id.initialize({
    client_id: '762594322484-kde7t7m4mpvnug9dhndt33ehf85gajfo.apps.googleusercontent.com',
    use_fedcm_for_prompt: true,
    callback: function(response) {
    onSignIn('loginFromGoogleToken', response.credential);
    }
    });
    google.accounts.id.prompt();
    if (typeof setGoogleButtonLogin === 'function') {
    setGoogleButtonLogin();
    }
   }
   
   function onSignIn(param, token) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/login');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
    console.log(this.responseText);
    if (this.readyState == 4 && this.status == 200) {
    const r = JSON.parse(this.responseText);
    if (r.redirect) {
    window.location.href = '/account/';
    }
    else if (r.error) {
    alert(r.error);
    }
    else {
    alert('An error occurred while verifying your account.');
    }
    }
    };
    xhr.send(param+'='+token);
   }

   const FIREBASE_SCRIPT_LOADED = {},
 firebaseScriptURLs = [
 'https://www.gstatic.com/firebasejs/7.13.1/firebase-app.js',
 'https://www.gstatic.com/firebasejs/7.13.1/firebase-messaging.js'
];
for (const u of firebaseScriptURLs) {
 let script = document.createElement('script');
 script.type = 'text/javascript';
 script.src = u;
 script.onload = function() {
 FIREBASE_SCRIPT_LOADED[this.src] = true; 
 for (const u of firebaseScriptURLs) {
 if (!FIREBASE_SCRIPT_LOADED[u]) return;
 }
 firebaseLoaded();
 }
 document.getElementsByTagName('head')[0].appendChild(script);
}
var PUSH_TOKEN = '';
function firebaseLoaded() {
 if ('serviceWorker' in navigator && 'Notification' in window && Notification.permission != 'denied') {
 var firebaseConfig = {
 apiKey: "AIzaSyD0cqpPjFeDw47xTljCnvuMHlzwQn8eiWE",
 authDomain: "textstudio-dc126.firebaseapp.com",
 databaseURL: "https://textstudio-dc126.firebaseio.com",
 projectId: "textstudio-dc126",
 storageBucket: "textstudio-dc126.appspot.com",
 messagingSenderId: "949759598678",
 appId: "1:949759598678:web:a791718ce98379bea49bf7"
 };
 firebase.initializeApp(firebaseConfig);
 const messaging = firebase.messaging();
 navigator.serviceWorker.register(url('sw.js', false)).then((registration) => {
 messaging.useServiceWorker(registration);
 messaging.requestPermission().then(function () {
 //console.log('Notification permission granted.');
 return messaging.getToken();
 })
 .then(function(token) {
 PUSH_TOKEN = token;
 //console.log('Push tooken is : ' + token);
 fetch(url('ajax/push?rid='+token+'&t='+Date.now())).then(function (response) {
 response.json().then(function (response) { 
 //console.log('Push Subscription', response);
 });
 });
 })
 .catch(function (err) {
 console.log('Unable to get permission to notify.', err);
 });
 messaging.onMessage(function(payload) {
 console.log('onPushMessage', payload);
 var hash = JSON.stringify(payload.data).length;
 if (getCookie('last_push_hash') != hash) {
 setCookie('last_push_hash', hash, 1);
 setTimeout(function() {
 setCookie('last_push_hash', '', 0);
 }, 1000);
 var notification = payload.data;
 notification.data = {};
 notification.data.click_action = notification.click_action;
 notification.requireInteraction = true;
 registration.showNotification(notification.title, notification);
 }
 });
 self.addEventListener('notificationclick', function(e) {
 e.notification.close();
 e.waitUntil(self.clients.openWindow(e.notification.data.click_action));
 });
 });
 }
}