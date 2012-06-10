$("a.aboutme").click(function () {
if ($("div.about:first").is(":hidden")) {
$("div.about").slideDown("fast");
$("div.me").slideUp("fast");
} else {
$("div.about").slideUp("fast");
}
});

$("a.info").click(function () {
if ($("div.me:first").is(":hidden")) {
$("div.me").slideDown("fast");
$("div.about").slideUp("fast");
} else {
$("div.me").slideUp("fast");
}
});


$("a.aphotography").click(function () {
if ($("div.photography:first").is(":hidden")) {
$("div.photography").slideDown("slow");
$("div.projects").fadeOut("slow");
$("div.casa").fadeOut("fast");
$("div.about").slideUp();
$("div.me").slideUp();
} else {
$("div.photography").slideDown("slow");
$("div.projects").fadeOut("slow");
$("div.casa").fadeOut("fast");
$("div.about").slideUp();
$("div.me").slideUp();
}
});

$("a.aprojects").click(function () {
if ($("div.projects:first").is(":hidden")) {
$("div.projects").slideDown("slow");
$("div.casa").fadeOut("fast");
$("div.about").slideUp();
$("div.me").slideUp();
$("div.photography").fadeOut();
} else {
$("div.projects").slideDown("slow");
$("div.casa").fadeOut("fast");
$("div.about").slideUp();
$("div.me").slideUp();
$("div.photography").fadeOut();
}
});


$("a.acasa").click(function () {
if ($("div.casa:first").is(":hidden")) {
$("div.casa").slideDown("slow");
$("div.photography").fadeOut("fast");
$("div.projects").fadeOut("slow");
$("div.about").slideUp("fast");
$("div.me").slideUp("fast");
} else {
$("div.casa").slideDown("slow");
$("div.photography").fadeOut("fast");
$("div.projects").fadeOut("slow");
$("div.about").slideUp("fast");
$("div.me").slideUp("fast");
}
});


 $("a.si").click(function () {
    if ($("div.todo:first").is(":hidden")) {
      $("div.todo").fadeIn("fast");
	  $("div.webz").slideUp();
    } else {
      $("div.todo").slideUp("fast");
    }
  });
  
  $("a.no").click(function () {
  $("div.webz").fadeOut("slow");
  });