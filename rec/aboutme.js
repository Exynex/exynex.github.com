
$("a.aboutme").click(function () {
if ($("div.about:first").is(":hidden")) {
$("div.about").slideDown("fast");
$("div.about").slideUp("fast");
} else {
$("div.about").slideUp("fast");
}
});