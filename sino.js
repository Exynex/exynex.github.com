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

  