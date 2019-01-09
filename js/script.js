/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
    });
    
    function firstQuestion(q1Result){
        if (q1Result==="English"){
            return 3;
        }else if (q1Result==="Math"){
            return 6;
        }else if (q1Result==="History"){
            return 2;
        }else if (q1Result==="Science"){
            return 6;
        }else{
            return 4
        }
    }

    
});
