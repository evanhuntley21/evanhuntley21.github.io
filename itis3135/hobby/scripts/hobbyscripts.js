var whatLink = document.getElementById("whatLink");
var whoLink = document.getElementById("whoLink");
var whenLink = document.getElementById("whenLink");
var whereLink = document.getElementById("whereLink");
var whyLink = document.getElementById("whyLink");
var howLink = document.getElementById("howLink");


whatLink.addEventListener("click", () => hideAllSections("what"))

whoLink.addEventListener("click", () => hideAllSections("who"))

whenLink.addEventListener("click", () => hideAllSections("when"))

whereLink.addEventListener("click", () => hideAllSections("where"))

whyLink.addEventListener("click", () => hideAllSections("why"))

howLink.addEventListener("click", () => hideAllSections("how"))

window.addEventListener('load', () => hideAllSections("what") )

function hideAllSections(sectionID) {
    var sections = document.getElementsByTagName("section");
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id == sectionID) {
            sections[i].style.display = "block";
        } else {
            sections[i].style.display = "none";
        }
    }
}