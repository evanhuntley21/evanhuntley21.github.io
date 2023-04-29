$(function() {
    const pathname = String(location.pathname.split("/").splice(-1));

    const links = {
        "1":{
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2":{
            "url": "introduction.html",
            "text": "Introduction",
            "alt": "Introduction Link"
        },
        "3":{
            "url": "contract.html",
            "text": "Contract",
            "alt": "Contract Link"
        },
        "4":{
            "url": "firstscripts.html",
            "text": "First JS",
            "alt": "First JS Link"
        },
        "5":{
            "url": "forms.html",
            "text": "HTML Forms",
            "alt": "Form Demonstration"
        },
        "6":{
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Simple and Complex Table Demonstration"
        },
        "7":{
            "url": "website_evaluations.html",
            "text": "Website Evaluations",
            "alt": "Evaluation Link"
        },
        "8":{
            "url": "polygons.html",
            "text": "Polygon Guesser",
            "alt": "Polygon Guesser Link"
        },
        "9":{
            "url": "calculator.html",
            "text": "Calculator",
            "alt": "Calculator Link"
        },
        "10":{
            "url": "arrays.html",
            "text": "Array Activity",
            "alt": "Array Activity Link"
        }
    };
    const links2 = {
        "1":{
            "url": "./Accessibility/Activity_Accessibility.html",
            "text": "Accessibility Exercise",
            "alt": "Accessibility Exercise"
        },   
        "2":{
            "url": "./stuff/t3rRibLew3bSiTe.htm",
            "text": "Terrible Website",
            "alt": "Terrible Website"
        }
    }; 
const linkSeparator = " | ";
let htmlString = "";

for(var id in links){
    if(pathname === links[id]['url']){
        htmlString += links[id]['text'];
    } else{
        htmlString += '<a href="' + links[id]['url']+'">' + links[id]['text'] + '</a>';
    }
    if(Number(id) < Object.keys(links).length){
        htmlString += linkSeparator;
    }
}


let htmlString2 = "";

for(var id in links2){
    if(pathname === links2[id]['url']){
        htmlString2 += links2[id]['text'];
    } else{
        htmlString2 += '<a href="' + links2[id]['url']+'">' + links2[id]['text'] + '</a>';
    }
    if(Number(id) < Object.keys(links2).length){
        htmlString2 += linkSeparator;
    }
}
let footerString = `<p>Site designed by <a href="huntleywebservice.com/">Huntley Web Services ©</a>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap" rel="stylesheet">
        <a href="https://validator.w3.org/check?uri=referer">
            <img src="images/button_validation_html5.png" width="88" height="31" alt="Validate webpage HTML.">
        </a>

        <a href="https://jigsaw.w3.org/css-validator/check/referer">
            <img src="images/button_validation_css.png" width="88" height="31" alt="Validate webpage CSS.">
        </a>`
$('#secondaryLinks').html(htmlString2);



$('#siteLinks').html(htmlString);

$('#footerLinks').html(footerString)
});
