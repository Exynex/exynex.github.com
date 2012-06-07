
$("a.aboutme").click(function () {
if ($("div.about:first").is(":hidden")) {
$("div.about").slideDown("fast");
} else {
$("div.about").slideUp("fast");
}
});