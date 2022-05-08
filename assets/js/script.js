$( document ).ready(function() {

    //on load set notepad text from session

    //get current session data
    var session_note = $.session.get('session_notepad');;
    if(session_note !== ""){
        $("#notepad").val(session_note);
    }

    //sav text on button click
    $("#save-btn").click(function() {
       //get current text
       var note = $("#notepad").val();

       //set session data
       $.session.set('session_notepad', note);

       //show success message for 1 second
       $(".success-message").show();
       setTimeout(
        function() 
        {
            $(".success-message").hide();
        }, 1000);
    });

    //clear session data on button click
    $(".clear-btn").click(function() {
        $.session.remove('session_notepad');
        $("#notepad").val("");
    });
});