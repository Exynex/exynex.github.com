
$("a.bphoto").click(function () {
if ($("div.photo:first").is(":hidden")) {
$("div.photo").slideDown("slow");
$("div.home").slideUp();
$("div.proj").slideUp();
$("div.about").slideUp();
$("div.contme").slideUp();
} else {
$("div.home").slideUp();
$("div.proj").slideUp();
$("div.about").slideUp();
$("div.contme").slideUp();
$("div.photo").slideUp();
}
});
