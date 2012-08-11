//original code for login
$("a.ko").click(function () {
if ($("div.logins:first").is(":hidden")) {
$("div.logins").fadeIn("slow");
$("div.main").hide("fast");
} else {

}
});
//teacher confirm
$("a.teaconfirm").click(function () {
if ($("div.main:first").is(":hidden")) {
$("div.main").hide("slow");
$("div.youreq").hide("fast");
$("div.logins").show("slow");
} else {

}
});

//student confirm
$("a.stuconfirm").click(function () {
if ($("div.main:first").is(":hidden")) {
$("div.logins").hide("slow");
$("div.main").show("fast");
$("div.youreq").hide("fast");
} else {

}
});

$("a.bcolor").click(function () {
if ($("div.dcolor:first").is(":hidden")) {
$("div.dcolor").fadeIn("slow");
} else {
$("div.dcolor").fadeOut("slow");
}
});



function check(form)/*function to check userid & password*/
{
/*the following code checkes whether the entered userid and password are matching*/
if(form.userid.value == "mrko" && form.pswrd.value == "imateacher")
{
/*opens the target page while Id & password matches*/
$("div.logins").hide("slow");
$("div.main").hide("slow");
$("div.thanks").show("fast");
window.open("lshdglrbglohasbelrhbglohasdbrglhibalisdfgvbiluabfv.html");
}
else
{
alert("Wrong Password or Username\nplease try again or email me for help\n\nkeven.gs@gmail.com")/*displays error message*/
}
}
        