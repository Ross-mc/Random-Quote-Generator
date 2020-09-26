$(function(){
    let colors = ["#E27D60", "#85DCB", "#E8A87C", "#C38D9E", "#41B3A3", "#05386B", "#379683", "#5CDB95", "#8EE4AF", "#0C0032", "#190061", "#240090", "#950740", "#C3073F", "#AFD275", "#66FCF1", "#45A29E", "#D79922", "#FF652F", "#FFE400", "#8860D0", "#5AB9EA", "#A64AC9", "#86C232"];
    let randomNumber;
    let newColor;
    let quoteAPI = "https://quote-garden.herokuapp.com/api/v2/quotes/random";

    $.getJSON(quoteAPI).done(function(data){
        $.each(data, function(){
            $("#quote-text").text('"'+data.quote.quoteText+'"');
            $("#quote-name").text(data.quote.quoteAuthor);
        });
    });

    randomNumber = Math.floor((Math.random() * colors.length));
    newColor = colors[randomNumber];
    $("html, #generate, h1").css("background-color", newColor);
    $("#quote-box").css("color", newColor);

    $("#generate").click(function(){
        randomNumber = Math.floor((Math.random() * colors.length));
        newColor = colors[randomNumber];
        $("html, #generate, h1").css("background-color", newColor);
        $("#quote-box").css("color", newColor);
        $("#quote-text").fadeOut();
        $("#quote-name").fadeOut();
        $.getJSON(quoteAPI).done(function(data){
            $.each(data, function(){
                $("#quote-text").text('"'+data.quote.quoteText+'"');
                $("#quote-name").text(data.quote.quoteAuthor);
            });          
        });
        $("#quote-text").fadeIn();
        $("#quote-name").fadeIn();
    });
});