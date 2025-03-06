
<!DOCTYPE html> <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"> 
    <head> 
        <title></title> 
        <link rel="icon" type="image/svg+xml" href="https://cdn.textstudio.com/asset/favicon.svg"> <link rel="icon" type="image/png" href="https://cdn.textstudio.com/asset/favicon.png"> <link rel="preconnect" href="https://fonts.gstatic.com"> <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"> <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"></noscript> <link rel="stylesheet" type="text/css" href="https://cdn.textstudio.com/asset/font.min.css?1731077217" /><link rel="stylesheet" type="text/css" href="https://cdn.textstudio.com/asset/base.min.css?1739527673" /> <meta name="robots" content="index,follow,all" /> <meta name="viewport" content="width=device-width"> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="description" content="Download exclusive fonts from TextStudio. ✓ Approved for commercial use ✓ High-quality fonts" /> <meta property="og:image" content="https://cdn.textstudio.com/output/font/illustration/large/0/9/5/2/12590.webp"/> <meta name="google-signin-client_id" content="762594322484-kde7t7m4mpvnug9dhndt33ehf85gajfo.apps.googleusercontent.com"> <link rel="apple-touch-icon" href="https://cdn.textstudio.com/asset/apple-touch-icon.png"> <link rel="apple-touch-icon" sizes="57x57" href="https://cdn.textstudio.com/asset/apple-touch-icon-57x57.png"> <link rel="apple-touch-icon" sizes="72x72" href="https://cdn.textstudio.com/asset/apple-touch-icon-72x72.png"> <link rel="apple-touch-icon" sizes="76x76" href="https://cdn.textstudio.com/asset/apple-touch-icon-76x76.png"> <link rel="apple-touch-icon" sizes="114x114" href="https://cdn.textstudio.com/asset/apple-touch-icon-114x114.png"> <link rel="apple-touch-icon" sizes="120x120" href="https://cdn.textstudio.com/asset/apple-touch-icon-120x120.png"> <link rel="apple-touch-icon" sizes="144x144" href="https://cdn.textstudio.com/asset/apple-touch-icon-144x144.png"> <link rel="apple-touch-icon" sizes="152x152" href="https://cdn.textstudio.com/asset/apple-touch-icon-152x152.png"> <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.textstudio.com/asset/apple-touch-icon-180x180.png"> <script src="https://cdn.textstudio.com/asset/base.min.js?1735494574"></script> <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9312284468429437" crossorigin="anonymous"></script> <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script> <script>
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
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">

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
                <a class="btn btn-primary" href="font_edit.php">Import</a>
                
                
            </div>
            
        </header> 
        
        <div id="content" class="background-content" > 
        
            <div class="box-content"><div>
            <div id="font-list" class="font-list">
            <?php
                include 'connection.php';
                // Assuming $conn is your database connection
                $query = "SELECT file_path, font_name, font_format FROM fonts"; // Retrieve all file paths from the database
               
                $result = $conn->query($query);
             
                if ($result->num_rows > 0) {
                    // Output data for each row
                    while ($row = $result->fetch_assoc()) {
                        echo "<div class='item'>
                                <div class='name'>" . $row['font_name'] . " <span class='commercial-use'>Commercial use</span> <span class='format'>" . $row['font_format'] . "</span></div>
                                <a href='/font/borsok-16837' class='preview' style='background-image:url(\"https://cdn.textstudio.com/output/font/preview/7/3/8/6/16837.webp\");'></a>
                                <a class='download-button' title='Download' href='/font/download?fontId=16837&amp;key=460caee491ef28ba708697249458299f&amp;referer=fonts'></a>
                              </div>";
                    }
                    
                } else {
                    echo "No results found.";
                }
               
                ?>
            <div class="item">
                <div class="name">Bisney
                    <span class="commercial-use">Commercial use</span>
                    <span class="format">OTF</span>
                </div>
                <a href="/font/bisney-12590" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/0/9/5/2/12590.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a>
                <span class="premium-icon" title="PREMIUM"></span>
            </div>
            <div class="item">
                <div class="name">Skinny Barbie
                    <span class="commercial-use">Commercial use</span>
                    <span class="format">OTF</span>
                </div>
                <a href="/font/skinny-barbie-14186" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/8/1/4/14186.webp');"></a>
                <a class="download-button premium" title="Download" href="/premium"></a>
                <span class="premium-icon" title="PREMIUM"></span>
            </div>
            <div class="item"><div class="name">Muscle Cars<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/muscle-cars-bold-16645" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/5/4/6/6/16645.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Baby Barbie<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/baby-barbie-12414" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/4/1/4/2/12414.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Active<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/active-14797" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/7/9/7/4/14797.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Borsok<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/borsok-16837" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/7/3/8/6/16837.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=16837&key=460caee491ef28ba708697249458299f&referer=fonts"></a></div><div class="item"><div class="name">Race To Space Full<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/race-to-space-full-16092" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/2/9/0/6/16092.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Dark Spartan<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/dark-spartan-15849" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/4/8/5/15849.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Fredoka<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/fredoka-bold-17690" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/0/9/6/7/17690.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=17690&key=bb88cc865ba6e715e9b22b56e5e347ac&referer=fonts"></a></div><div class="item"><div class="name">Godzilla<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/godzilla-16698" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/8/9/6/6/16698.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=16698&key=58e68de2f13b4d80cc8137adbd26b598&referer=fonts"></a></div><div class="item"><div class="name">Rainy<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/rainy-13948" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/8/4/9/3/13948.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Dirty Lizard<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/dirty-lizard-11729" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/2/7/1/11729.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Furious Night<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/furious-night-12268" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/8/6/2/2/12268.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Boss Balloon<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/boss-balloon-12183" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/3/8/1/2/12183.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Metal Slug Latino<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/metal-slug-latino-32409" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/0/4/2/32409.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=32409&key=ea913dfcfecd0e5d16efc3d70cf38e7e&referer=fonts"></a></div><div class="item"><div class="name">SUN<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/sun-15870" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/0/7/8/5/15870.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">One Heart<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/one-heart-13808" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/8/0/8/3/13808.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Jamstreet Graffiti<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/jamstreet-graffiti-11716" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/1/7/1/11716.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Glacial Indifference<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/glacial-indifference-bold-32643" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/3/4/6/2/32643.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=32643&key=a9981273c9d2845428896146ee31d2dd&referer=fonts"></a></div><div class="item"><div class="name">Alove<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/alove-12306" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/0/3/2/12306.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Cairo Black<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/cairo-black-17666" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/6/6/7/17666.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=17666&key=bb8f2caddf50f2f7ca67f1549aaad548&referer=fonts"></a></div><div class="item"><div class="name">Doctor Signature<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/doctor-signature-13011" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/1/1/0/3/13011.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Barbie<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/barbie-12473" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/3/7/4/2/12473.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Libre Franklin Black<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/libre-franklin-black-italic-15892" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/2/9/8/5/15892.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=15892&key=a146e729e8f53aa161d5263ceb2063fa&referer=fonts"></a></div><div class="item"><div class="name">The Queen<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/the-queen-14482" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/2/8/4/4/14482.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">DC Fandom<span class="format">TTF</span></div><a href="/font/dc-fandom-17667" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/7/6/6/7/17667.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=17667&key=b82d7e3e81fc87f9adc3bf4f1e01145f&referer=fonts"></a></div><div class="item"><div class="name">Tropical Harmony<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/tropical-harmony-15036" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/3/0/5/15036.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Bold<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/bold-bold-16840" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/0/4/8/6/16840.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=16840&key=a22cd20de66fb2959a95e73de877258b&referer=fonts"></a></div><div class="item"><div class="name">Street Eagle Graffiti<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/street-eagle-graffiti-11605" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/5/0/6/1/11605.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Activity Saturday<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/activity-saturday-14798" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/8/9/7/4/14798.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Vandalust Graffiti<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/vandalust-graffiti-11710" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/0/1/7/1/11710.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Winter Candle<span class="commercial-use">Commercial use</span><span class="format">TTF</span></div><a href="/font/winter-candle-15145" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/5/4/1/5/15145.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Abrilove Mandala<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/abrilove-mandala-14789" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/8/7/4/14789.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Winter Is Coming<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/winter-is-coming-14699" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/9/6/4/14699.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Digital Signature<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/digital-signature-12999" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/9/9/9/2/12999.webp');"></a><a class="download-button premium" title="Download" href="/premium"></a><span class="premium-icon" title="PREMIUM"></span></div><div class="item"><div class="name">Metal Lord<span class="commercial-use">Commercial use</span><span class="format">OTF</span></div><a href="/font/metal-lord-32416" class="preview" style="background-image:url('https://cdn.textstudio.com/output/font/preview/6/1/4/2/32416.webp');"></a><a class="download-button" title="Download" href="/font/download?fontId=32416&key=b0b7d502760f421fe825a284bc6f9f0e&referer=fonts"></a></div></div><div class="light-ppp"><div class="light-ppp-container"><div class="light-ppp-buttons"><a href="/fonts/2" class="light-ppp-next">Next page</a></div><label class="light-ppp-label">Page <span>1</span>/<span>279</span></label></div></div></div></div></div> <footer> <div class="wrapper"> <div class="columns"> <div class="column"> <h2>Languages</h2> <ul class="links langs flex-row"> <li><a href="//de.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/de.svg" alt="Deutsch" width="16" height="16" />Deutsch</a></li><li><a href="//www.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/en.svg" alt="English" width="16" height="16" />English</a></li><li><a href="//es.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/es.svg" alt="Español" width="16" height="16" />Español</a></li><li><a href="//fr.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/fr.svg" alt="Français" width="16" height="16" />Français</a></li><li><a href="//it.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/it.svg" alt="Italiano" width="16" height="16" />Italiano</a></li><li><a href="//nl.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/nl.svg" alt="Nederlands" width="16" height="16" />Nederlands</a></li><li><a href="//pl.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/pl.svg" alt="Polski" width="16" height="16" />Polski</a></li><li><a href="//pt.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/pt.svg" alt="Português" width="16" height="16" />Português</a></li><li><a href="//tr.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/tr.svg" alt="Türkçe" width="16" height="16" />Türkçe</a></li><li><a href="//ru.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/ru.svg" alt="Русский" width="16" height="16" />Русский</a></li><li><a href="//ja.textstudio.com" onclick="this.href+='?chooseLang=1';"><img src="https://cdn.textstudio.com/asset/flag/ja.svg" alt="日本語" width="16" height="16" />日本語</a></li> </ul> </div> <div class="column"> <h2>About us</h2> <ul class="links"> <li><a href="/contact" rel="nofollow">Contact Us</a></li> <li><a href="/license" rel="nofollow">Commercial License</a></li> <li><a href="/faq" rel="nofollow">Frequently Asked Questions</a></li> <li><a href="/terms" rel="nofollow">Terms and Conditions of Use</a></li> <li><a href="/privacy" rel="nofollow">Privacy Policy</a></li> <li><a href="/dmca" rel="nofollow">DMCA Policy</a></li> <li><a href="/affiliate" rel="nofollow">Affiliate Program</a></li> <li><a href="/blog">Design Blog</a></li> </ul> </div> <div class="column"> <p><a href="/" class="logo"><img src="https://cdn.textstudio.com/asset/logo-black.svg" width="140" height="36" alt="Logo TextStudio" /></a></p> <p>Download free legally licensed fonts, perfect for your design projects.</p><p>Discover and install our selection of free fonts, integrate them into your projects and create incredible designs!</p><p>Book covers, merchandise, posters, magazines. Start creating now!</p> <ul class="social"> <li> <a href="https://www.facebook.com/textstudio.co" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/facebook-footer-icon.svg" alt="Facebook" width="22" height="22" /> </a> </li> <li> <a href="https://www.instagram.com/textstudio.co/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/instagram-footer-icon.svg" alt="Instagram" width="22" height="22" /> </a> </li> <li> <a href="https://www.pinterest.com/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/pinterest-footer-icon.svg" alt="Pinterest" width="22" height="22" /> </a> </li> <li> <a href="https://www.twitter.com/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/twitter-footer-icon.svg" alt="Twitter" width="22" height="22" /> </a> </li> <li> <a href="https://t.me/textstudio/" rel="noopener" target="_blank"> <img src="https://cdn.textstudio.com/asset/telegram-footer-icon.svg" alt="Telegram" width="22" height="22" /> </a> </li> </ul> </div> </div> <div class="copyright"> <p>© 2020 - 2025 TextStudio. All rights reserved.</p> </div> </div> <div class="bottom-links"> <div class="wrapper"> <ul> <li><a href="/">3D Text Generator</a></li> <li><a href="https://www.textstudio.com/logo/graffiti-tag-text-102">Graffiti Generator</a></li> <li><a href="https://www.textstudio.com/logo/fire-text-effect-619">Fire Text Effect</a></li> <li><a href="https://www.textstudio.com/logo/golden-3d-text-261">Gold Text Effect</a></li> <li><a href="https://www.textstudio.com/logo/text-with-glitch-effect-267">Glitch Text Generator</a></li> <li><a href="https://www.textstudio.com/logo/cool-text-generator-616">Cool Text Generator</a></li> <li><a href="https://www.textstudio.com/free-vector-psd">PSD Text Effects</a></li> <li><a href="https://www.textstudio.com/logo/word-art-text-graphic-generator-928">Word Art Generator</a></li> <li><a href="https://www.textstudio.com/">Font Generator</a></li> <li><a href="/popular-keywords">Keywords</a></li> <li><a href="/discover-keywords">Discover Keywords</a></li> <li><a href="/logos/">Text Effects Gallery</a></li> <li><a href="/fancy-text-generator">Fancy Text Generator</a></li> <li><a href="/s/font-style">Font Style</a></li> <li><a href="/s/tattoo">Tattoo Font Generator</a></li> </ul> </div> </div> </footer> <div class="premium-banner"> <div class="overlay"></div> <div class="border-top"></div> <a href="/premium"> <div class="col"><img src="https://cdn.textstudio.com/asset/premium-crown-icon.svg" width="16" height="16" alt="PREMIUM" class="premium-icon" /></div> <div class="col"> <h3>SPECIAL OFFER <span id="premium-banner-countdown"></span></h3> <p>Enjoy an exceptional discount of over 50% on the PREMIUM offer!</p> </div> <div class="col"> <button>GET IT NOW</button> </div> </a> <img src="https://cdn.textstudio.com/asset/close-premium-banner-icon.svg" width="16" height="16" alt="Close the popup window" class="close-icon" onClick="setCookie('premiumBannerClosed','1',31);document.querySelector('.premium-banner').style.display='none';" /></div> <script>
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
</script>

<?php include 'footer.php'?>
</body> </html>