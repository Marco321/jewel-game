$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var target;
    var score;
    var jewelOne;
    var jewelTwo;
    var jewelThree;
    var jewelFour;
    var jewelNumbers;
    var randomNumber;

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };

    function initGame() {
    
        target = getRandomArbitrary(40, 120)

        jewelNumbers = []
        while(jewelNumbers.length < 4){
            randomNumber = Math.floor(Math.random()*20) + 1;
            if(jewelNumbers.indexOf(randomNumber) > -1) continue;
            jewelNumbers[jewelNumbers.length] = randomNumber;
        }

        jewelOne = jewelNumbers[0];
        jewelTwo = jewelNumbers[1];
        jewelThree = jewelNumbers[2];
        jewelFour = jewelNumbers [3];

        $("#score").text(score)
        $("#target").text(target);
        $("#jewel1").attr("val",jewelOne);
        $("#jewel2").attr("val",jewelTwo);
        $("#jewel3").attr("val",jewelThree);
        $("#jewel4").attr("val",jewelFour);

        // jewelOne = getRandomArbitrary(1, 20)
        // jewelTwo = getRandomArbitrary(1, 20)
        // jewelThree = getRandomArbitrary(1, 20)
        // jewelFour = getRandomArbitrary(1, 20)

        // if ((jewelOne === jewelTwo) || (jewelOne === jewelThree) || (jewelOne === jewelFour) || (jewelTwo === jewelThree) || (jewelTwo === jewelFour) || (jewelThree === jewelFour)) {
        //     initGame()
        // };
        
        console.log(jewelNumbers)
        console.log(target)
        console.log(jewelOne)
        console.log(jewelTwo)
        console.log(jewelThree)
        console.log(jewelFour)

    };

    initGame()

    console.log(score)

    $("button").click(function (event) {
        score = score + $("button").val();
        $("#score").text(score);
        console.log(score);
        console.log($("button").val());
    });

    if (score === target) {
        wins++;
        $("#wins").text(wins);
    } else (score > target) {
        losses++;
        $("#losses").text(losses);
    }


});