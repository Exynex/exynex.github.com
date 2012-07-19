$("a.ko").click(function () {
if ($("div.dhw:first").is(":hidden")) {
$("div.logins").fadeIn("slow");
$("div.main").fadeOut("slow");
} else {

}
});



function check(form)/*function to check userid & password*/
{
/*the following code checkes whether the entered userid and password are matching*/
if(form.userid.value == "mrko" && form.pswrd.value == "awesomekevin")
{
/*opens the target page while Id & password matches*/
$("div.logins").fadeOut("slow");
$("div.main").fadeOut("slow");
$("div.dhw").fadeIn("slow");
}
else
{
alert("Wrong Password or Username, please try again or email me for help")/*displays error message*/
}
}
