
$("a.info").click(function () {
if ($("div.me:first").is(":hidden")) {
$("div.me").slideDown("fast");
$("div.about").slideUp("fast");
} else {
$("div.me").slideUp("fast");
}
});
