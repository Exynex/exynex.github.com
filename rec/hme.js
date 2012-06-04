	
$("a.info").click(function () {
if ($("div.me:first").is(":hidden")) {
$("div.me").slideDown("fast");
} else {
$("div.me").slideUp("fast");
}
});