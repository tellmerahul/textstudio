
<!DOCTYPE html> 
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
    <head> 
        <title>Background to TextStudio</title> 
        <link rel="icon" type="image/svg+xml" href="https://cdn.textstudio.com/asset/favicon.svg"> 
        <link rel="icon" type="image/png" href="https://cdn.textstudio.com/asset/favicon.png"> 
        <link rel="preconnect" href="https://fonts.gstatic.com"> 
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"> 
        <link rel="canonical" href="/login"> 
        <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap">
        </noscript> 
        <link rel="stylesheet" type="text/css" href="https://cdn.textstudio.com/asset/base.min.css?1738736671" /> 
        <meta name="robots" content="index,follow,all" /> 
        <meta name="viewport" content="width=device-width"> 
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
        <meta name="description" content="Create text effects and 3D logos with our online text generator." /> 
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
        <script src="https://cdn.textstudio.com/asset/base.min.js?1735494574"></script> 
        <script src="https://accounts.google.com/gsi/client" async defer></script> 
        <script>
            const LINKY = '/LINKY';
            const LINKY_CDN = 'https://cdn.textstudio.com/LINKY';
            const CDN_EXTENSIONS = ["jpg","png","gif","svg","webp","mp4","webm","css","js","map","otf","ttf","woff2","json","FONT_EXT"];
            const ONLINE = true;
            </script> <script async src="https://www.googletagmanager.com/gtag/js?id=G-8RG2FQF6VS"></script> <script>
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
        <style>
            #vendors-buttons
            {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            row-gap: 10px;
            }
            #vendors-buttons > *
            {
            border: none;
            appearance: none;
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: 6px;
            height: 34px;
            cursor: pointer;
            border-radius: 6px;
            box-shadow: none;
            display: inline-flex;
            width: 100%;
            color: white;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            transition: background-color .218s,border-color .218s;
            }
            #gg-login-button
            {
            background-image:url('https://cdn.textstudio.com/asset/google-login-icon.svg');
            background-color:#f4f4f4;
            border:1px #cccccc solid;
            }
            #fb-login-button
            {
            background-image:url('https://cdn.textstudio.com/asset/facebook-login-icon.svg');
            background-color:#4267b2;
            }
            #apple-login-button
            {
            background-image:url('https://cdn.textstudio.com/asset/apple-login-icon.svg');
            background-color:#000;
            }
            @media(hover: hover)
            { 
            #fb-login-button:hover
            {
            background-color:#3c7dff;
            }
            #apple-login-button:hover
            {
            background-color:#333;
            }
            }

            #fb-login-help
            {
            background: #f1f1f1;
            }
            #fb-login-help a
            {
            display:inline-flex;
            background:url('https://cdn.textstudio.com/asset/facebook-icon.svg') left center no-repeat;
            background-size: 20px;
            padding:4px 10px 4px 26px;
            color:#3a589b;
            }
        </style>
    </head> 
    <body> 
        <header>
            <div class="wrapper"> 
                <a class="logo christmas" href="/" title="Back to the list of text effects"> 
                    <img class="textstudio" src="../textstudio.jpeg" width="160" height="42" alt="3D text - MyTextStudio" />
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
                <!-- <div id="login-header"> 
                    <a class="login-large" href="/textstudiodev/register.php">Register</a> 
                    <a class="login-small" href="/textstudiodev/register.php" title="Register"></a> 
                </div> -->
            </div>
        </header>
        <div id="content" class="background-login"> 
            <div class="wrapper"> 
                <div class="box-content"> 
                    <form id="loginForm" action="upload.php" method="post" class="form" style="width:460px;" enctype="multipart/form-data"> 
                        <div class="container"> 
                            <h2 class="title" style="text-align: center">Background</h2> 
                            <div class="row"> 
                                <div class="control" id="vendors-buttons"> 
                                    <div id="gg-login-container"></div> 
                                </div> 
                            </div> 
                            <div class="row"> 
                                <div class="label"> 
                                    <label for="login-input">Choose Background File</label> 
                                </div> 
                                <div class="control"> 
                                    <input type="file" name="font_file" id="font_file"  required> 
                                </div> 
                                <div class="message"> </div> 
                            </div> 
                            <div class="row"> 
                                <div class="control"> 
                                    <button type="submit" class="button" name="post">Submit</button> 
                                </div> 
                            </div> 
                        </div> 
                    </form> 
                </div> 
            </div> 
        </div> 
        <?php include 'footer.php'?>
        
    </body> 
</html>