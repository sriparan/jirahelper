console.log("content script")

// Proposing 2 actions in the helper
// 1. To add a link to get to the linked items
// 2. To make it easy there a blocker is called.
if($("#linkingmodule")!=0){
    $("#linkingmodule").prepend("<a id='dd-linkingmodule'></a>")
    $("#opsbar-opsbar-transitions").append("<button id='dd-nav' class='aui-button'>linked</a>").click(function(){
        $("#linkingmodule")[0].scrollIntoView({
            behavior: 'smooth',
          });
    })

    $("#linkingmodule").prepend("<a id='dd-linkingmodule'></a>")
}else {
    console.log("No linked modules")
}

if ($("[title='Flagged']")!=0 && $("[title='Flagged']").text()!='') {
    $("[title='Flagged']").parent().children().css("color", "BLUE").css("box-shadow", "10px 5px 5px red")

    $("#opsbar-opsbar-transitions a").each(function (i, e) {
        txt = $(e).text()
        if (txt == "Report Impediment") {
            $(e).css("border", "1px solid green").css("box-shadow", "1px 1px 1px red")
            console.log("This is " + $(e).text())
        }
    })

} else {
    console.log("No impediments called")
}



