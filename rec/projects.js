
$("button.bfrog").click(function () {
if ($("div.frog:first").is(":hidden")) {
$("div.frog").slideDown("slow");
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});


$("button.bdraw").click(function () {
if ($("div.draw:first").is(":hidden")) {
$("div.draw").slideDown("slow");
$("div.frog").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});


$("button.bsolar").click(function () {
if ($("div.solar:first").is(":hidden")) {
$("div.solar").slideDown("slow");
$("div.frog").slideUp();
$("div.mirror").slideUp();
$("div.draw").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});


$("button.bnyan").click(function () {
if ($("div.nyan:first").is(":hidden")) {
$("div.nyan").slideDown("slow");
$("div.frog").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.draw").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});

$("button.bcircles").click(function () {
if ($("div.circles:first").is(":hidden")) {
$("div.circles").slideDown("slow");
$("div.frog").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.draw").slideUp();
$("div.nyan").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});


$("button.bmirror").click(function () {
if ($("div.mirror:first").is(":hidden")) {
$("div.mirror").slideDown("slow");
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
} else {
$("div.frog").slideUp();
$("div.draw").slideUp();
$("div.mirror").slideUp();
$("div.solar").slideUp();
$("div.circles").slideUp();
$("div.nyan").slideUp();
}
});
