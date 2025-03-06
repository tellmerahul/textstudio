
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
    <head> 
        <title>Register with TextStudio</title> 
        <link rel="icon" type="image/svg+xml" href="https://cdn.textstudio.com/asset/favicon.svg"> <link rel="icon" type="image/png" href="https://cdn.textstudio.com/asset/favicon.png"> 
        <link rel="preconnect" href="https://fonts.gstatic.com"> <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"> 
        <link rel="canonical" href="/register"> 
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap">
        </noscript> 
        <link rel="stylesheet" type="text/css" href="https://cdn.textstudio.com/asset/base.min.css?1738736671" /> 
        <meta name="robots" content="index,follow,all" /> 
        <meta name="viewport" content="width=device-width"> 
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <meta name="description" content="Register with TextStudio to take advantage of our membership benefits." /> 
        <meta property="og:image" content="https://cdn.textstudio.com/asset/meta-default.png?1700714654"/> 
        <meta name="google-signin-client_id" content="762594322484-kde7t7m4mpvnug9dhndt33ehf85gajfo.apps.googleusercontent.com"> 
        <link rel="apple-touch-icon" href="https://cdn.textstudio.com/asset/apple-touch-icon.png"> 
        <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.textstudio.com/asset/apple-touch-icon-57x57.png"> 
        <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.textstudio.com/asset/apple-touch-icon-72x72.png"> 
        <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.textstudio.com/asset/apple-touch-icon-76x76.png"> 
        <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.textstudio.com/asset/apple-touch-icon-114x114.png"> 
        <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.textstudio.com/asset/apple-touch-icon-120x120.png"> 
        <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.textstudio.com/asset/apple-touch-icon-144x144.png"> 
        <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.textstudio.com/asset/apple-touch-icon-152x152.png"> 
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.textstudio.com/asset/apple-touch-icon-180x180.png"> 
        <script src="https://www.google.com/recaptcha/api.js"></script>
        <script src="https://cdn.textstudio.com/asset/base.min.js?1735494574"></script> 
        <script src="https://accounts.google.com/gsi/client" async defer></script> 
        <script>
            const LINKY = '/LINKY';
            const LINKY_CDN = 'https://cdn.textstudio.com/LINKY';
            const CDN_EXTENSIONS = ["jpg","png","gif","svg","webp","mp4","webm","css","js","map","otf","ttf","woff2","json","FONT_EXT"];
            const ONLINE = true;
        </script> 
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8RG2FQF6VS"></script> 
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8RG2FQF6VS');
            document.addEventListener('click', e => {
            clearTimeout(window.analyticsClickEventTimer);
            window.analyticsClickEventTimer = setTimeout(_ => {
            gtag('event', 'page_click');
            }, 1000);
            });
        </script>
    </head> 
    <body> 
        <header>
            <div class="wrapper"> <a class="logo christmas" href="/" title="Back to the list of text effects"> <img
                        class="textstudio" src="textstudio.jpeg" width="160" height="42" alt="3D text - MyTextStudio" />
                </a>
                <form class="search" id="search-form" action="search"> <input type="search" name="q" placeholder="Search..."
                        value="" spellcheck="true" /> <button>OK</button>
                    <script>
                        document.querySelector('#search-form').addEventListener('submit', (e) => {
                            e.preventDefault();
                            let q = e.target.querySelector('input[name="q"]').value,
                                u = e.target.getAttribute('action');
                            if (q !== '') {
                                q = q.trim().replace(/ /g, '-');
                                u += u !== '' ? '/' : '';
                                u += encodeURIComponent(q.trim());
                            }
                            window.location = url(u);
                        });
                    </script>
                </form>
                <div id="login-header"> 
                    <a class="login-large" href="/textstudiodev/login.php">Login</a> 
                    <a class="login-small" href="/textstudiodev/login.php" title="login"></a> 
                </div>
            </div>
        </header>
        <div id="content" class="background-login"> 
            <div class="box-content"> 
                <form id="register-form" action="/textstudiodev/insert.php" method="post" class="form" style="width:460px;"> 
                    <div class="container"> 
                        <h2 class="title">Register</h2> 
                        <div class="row"> 
                            <div class="label center">
                                <label>Already a member? 
                                    <a href="/login">Log in</a>
                                </label> 
                            </div> 
                        </div> 
                        <div class="row"> 
                            <div class="label"> 
                                <label for="email-input">Your email</label> 
                            </div> 
                            <div class="control"> 
                                <input name="email" id="email-input" type="text" class="input" value="" /> 
                            </div> 
                            <div class="message"> </div> 
                        </div> 
                        <div class="row"> 
                            <div class="label"> 
                                <label for="pwd-input">Password</label> 
                            </div> 
                            <div class="control"> 
                                <input type="password" name="password" class="input" id="pwd-input" autocomplete="off" value="" /> 
                            </div> 
                            <div class="message"> </div> 
                        </div> 
                        <div class="row"> 
                            <div class="label"> 
                                <label for="confirm-pwd-input">Confirm password</label> 
                            </div> 
                            <div class="control"> 
                                <input type="password" name="confirm_password" class="input" id="confirm-pwd-input" value="" /> 
                            </div> 
                            <div class="message"> </div> 
                        </div> 
                        <!-- <div class="row"> 
                            <div class="control"> 
                                <div class="g-recaptcha" data-sitekey="6LcqmtMqAAAAAM72314i0ReunTi-Kik__0I2ApYX"></div> 
                            </div> 
                            <div class="message"> </div> 
                        </div>  -->
                        <div class="row"> 
                            <div class="control center"> 
                                <button type="submit" class="button" name="post">Save</button> 
                            </div> 
                        </div>
                    </div> 
                </form> 
            </div> 
        </div> 
        <footer> 
            <div class="wrapper"> 
                <div class="columns"> 
                    <div class="column"> 
                        <h2>Languages</h2> 
                        <ul class="links langs flex-row"> 
                            <li><a href="//de.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/de.svg" alt="Deutsch" width="16" height="16" />Deutsch</a></li>
                            <li><a href="//www.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/en.svg" alt="English" width="16" height="16" />English</a></li>
                            <li><a href="//es.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/es.svg" alt="Español" width="16" height="16" />Español</a></li>
                            <li><a href="//fr.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/fr.svg" alt="Français" width="16" height="16" />Français</a></li>
                            <li><a href="//it.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/it.svg" alt="Italiano" width="16" height="16" />Italiano</a></li>
                            <li><a href="//nl.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/nl.svg" alt="Nederlands" width="16" height="16" />Nederlands</a></li>
                            <li><a href="//pl.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/pl.svg" alt="Polski" width="16" height="16" />Polski</a></li>
                            <li><a href="//pt.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/pt.svg" alt="Português" width="16" height="16" />Português</a></li>
                            <li><a href="//tr.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/tr.svg" alt="Türkçe" width="16" height="16" />Türkçe</a></li>
                            <li><a href="//ru.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/ru.svg" alt="Русский" width="16" height="16" />Русский</a></li>
                            <li><a href="//ja.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/ja.svg" alt="日本語" width="16" height="16" />日本語</a></li> 
                        </ul> 
                    </div> 
                    <div class="column"> 
                        <h2>About us</h2> 
                        <ul class="links"> 
                            <li><a href="/contact" rel="nofollow">Contact Us</a></li> 
                            <li><a href="/license" rel="nofollow">Commercial License</a></li> 
                            <li><a href="/faq" rel="nofollow">Frequently Asked Questions</a></li> 
                            <li><a href="/terms" rel="nofollow">Terms and Conditions of Use</a></li> 
                            <li><a href="/privacy" rel="nofollow">Privacy Policy</a></li> 
                            <li><a href="/dmca" rel="nofollow">DMCA Policy</a></li> 
                            <li><a href="/affiliate" rel="nofollow">Affiliate Program</a></li> 
                            <li><a href="/blog">Design Blog</a></li> 
                        </ul> 
                    </div> 
                    <div class="column"> 
                        <p><a href="/" class="logo"><img src="https://cdn.textstudio.com/asset/logo-black.svg" width="140" height="36" alt="Logo TextStudio" /></a></p> 
                        <p>TextStudio is an online application for creating custom text effects and logos.</p>
                        <p>Our 3D text style effects generator can also be used to animate your fonts.</p>
                        <p>Expand your business with our cool and unique <a href="/">font generator</a>!</p> 
                        <ul class="social"> 
                            <li> <a href="https://www.facebook.com/textstudio.co" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/facebook-footer-icon.svg" alt="Facebook" width="22" height="22" /> </a> </li> 
                            <li> <a href="https://www.instagram.com/textstudio.co/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/instagram-footer-icon.svg" alt="Instagram" width="22" height="22" /> </a> </li> 
                            <li> <a href="https://www.pinterest.com/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/pinterest-footer-icon.svg" alt="Pinterest" width="22" height="22" /> </a> </li> 
                            <li> <a href="https://www.twitter.com/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/twitter-footer-icon.svg" alt="Twitter" width="22" height="22" /> </a> </li> 
                            <li> <a href="https://t.me/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/telegram-footer-icon.svg" alt="Telegram" width="22" height="22" /> </a> </li> 
                        </ul> 
                    </div> 
                </div> 
                <div class="copyright"> 
                    <p>© 2020 - 2025 TextStudio. All rights reserved.</p> 
                </div> 
            </div> 
            <div class="bottom-links"> 
                <div class="wrapper"> 
                    <ul> 
                        <li><a href="/">3D Text Generator</a></li> 
                        <li><a href="https://www.textstudio.com/logo/graffiti-tag-text-102">Graffiti Generator</a></li> 
                        <li><a href="https://www.textstudio.com/logo/fire-text-effect-619">Fire Text Effect</a></li> 
                        <li><a href="https://www.textstudio.com/logo/golden-3d-text-261">Gold Text Effect</a></li> 
                        <li><a href="https://www.textstudio.com/logo/text-with-glitch-effect-267">Glitch Text Generator</a></li> 
                        <li><a href="https://www.textstudio.com/logo/cool-text-generator-616">Cool Text Generator</a></li> 
                        <li><a href="https://www.textstudio.com/free-vector-psd">PSD Text Effects</a></li> 
                        <li><a href="https://www.textstudio.com/logo/word-art-text-graphic-generator-928">Word Art Generator</a></li> 
                        <li><a href="https://www.textstudio.com/">Font Generator</a></li> <li><a href="/popular-keywords">Keywords</a></li> 
                        <li><a href="/discover-keywords">Discover Keywords</a></li> <li><a href="/logos/">Text Effects Gallery</a></li> 
                        <li><a href="/fancy-text-generator">Fancy Text Generator</a></li> <li><a href="/s/font-style">Font Style</a></li> 
                        <li><a href="/s/tattoo">Tattoo Font Generator</a></li> 
                    </ul> 
                </div> 
            </div> 
        </footer>
        
        <!-- <script>

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
                console.log(param);
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/login');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function() {
            console.log(this.responseText);
            if (this.readyState == 4 && this.status == 200) {
            const r = JSON.parse(this.responseText);
            if (r.redirect) {
            window.location.href = '/register';
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
        </script> 
        <script>
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
        </script> -->
        
    </body> 
</html>