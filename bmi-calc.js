$( document ).ready(function() {
    $('#weight').keyup(function() {
        updateResult();
    });

    $('#height').keyup(function() {
        updateResult();
    });
});

function updateResult() {
    var weight=$('#weight').val();
    var height=$('#height').val();
    $('#result').hide();
    $('#result').removeClass();
    $("#res-comment").children().hide();
    if($.isNumeric(weight) && weight>0 && $.isNumeric(height) && height>0) {
        var res = roundNum(weight / Math.pow(height, 2) * 10000, 1);
        $('#score').html(res);
        if(res<15) {
            $('#result').addClass("very-bad");
            $('#level1').show();
        } else if(res>=15 && res<16) {
            $('#result').addClass("bad");
            $('#level2').show();
        } else if(res>=16 && res<18.5) {
            $('#result').addClass("medium");
            $('#level3').show();
        } else if(res>=18.5 && res<=25) {
            $('#result').addClass("good");
            $('#level4').show();
        } else if(res>25 && res<=30) {
            $('#result').addClass("medium");
            $('#level5').show();
        } else if(res>30 && res<=35) {
            $('#result').addClass("bad");
            $('#level6').show();
        } else if(res>35 && res<=40) {
            $('#result').addClass("very-bad");
            $('#level7').show();
        } else if(res>40) {
            $('#result').addClass("very-bad");
            $('#level8').show();
        }
        $('#result').show();
    }
}

function roundNum(number, precision) {
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}
