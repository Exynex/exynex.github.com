         document.addEventListener( "DOMContentLoaded", function() {
           var popcorn = Popcorn( "#video" );
 
           popcorn.footnote({
             start: 2,
             end: 3.5,
             target: "popcont",
             text: "<h1>ANDROID ftw!!!</h1>"
           });
            popcorn.footnote({
             start: 4,
             end: 7,
             target: "popcont2",
             text: "<img src=\"googleplay.png\"/>"
           });
            popcorn.footnote({
             start: 7,
             end: 10,
             target: "popcont",
             text: "<img src=\"bitchplease.png\" style=\"width:300px;\"/>"
           });
         }, false )
