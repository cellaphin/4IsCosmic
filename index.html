<!DOCTYPE html>
<html>
    <head>
        <title>Cosmic Seer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        <script
            src="https://code.jquery.com/jquery-3.5.1.min.js"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossorigin="anonymous"></script>
        
        <script type="text/javascript">
        class CosmicSeer 
{
    constructor() { }
        getNextNumber(numberAsString) {
            var newNumber = "";
            var place = numberAsString;
            var onesDicitionary = this.GetOnesPlaceDictionary();
            var teensDictionary = this.GetTeensDictionary();
            var tensDictionary = this.GetTensPlaceDictionary();
            
            var number = parseInt(numberAsString);
            if (numberAsString.includes("-") && number != 0) {
                newNumber += "negative";
                place = place.substring(1);
            }
            if (number == 0) {
                newNumber += onesDicitionary[number];
                place = "";
            };
            while (place.length > 0) {
                var grouping = Math.floor(place.length / 3);
                var modulo = place.length % 3;
                var substringStartIndex = 1;
                
                if(this.isOnesPlace(modulo) && place[0] != 0) {
                    newNumber += onesDicitionary[place[0]];
                }
                else if (this.isTensPlace(modulo) && !this.isTeen(place)) {
                    newNumber += tensDictionary[place[0]];
                    substringStartIndex = 1;
                } else if (this.isTensPlace(modulo) && this.isTeen(place)) {
                    var teen = place.substring(0,2);
                    newNumber += teensDictionary[teen];
                    substringStartIndex = 2; 
                } 
                
                if (this.isHundredsPlace(grouping, modulo)) {
                    newNumber += onesDicitionary[place[0]];
                    newNumber += "hundred";
                }

                if (grouping > 0 && modulo == 1) {
                    newNumber += this.GetGroupingName(place, grouping, modulo);
                }

                place = place.substring(substringStartIndex);
                
            }
            
            console.log("newNumber: ", newNumber);
            return newNumber.length;
        }

        isOnesPlace(modulo) {
            return modulo == 1;
        }
        isTeen(numberAsString) {
            if (numberAsString.length < 2) 
                return false;
            var numberSubstring = numberAsString.substring(0,2);
            var frontOfNumber = parseInt(numberSubstring);

            return frontOfNumber > 10 && frontOfNumber < 20;
        }

        isTensPlace(mod) {
            return mod == 2;
        }

        isHundredsPlace(grouping, mod) {
            return grouping >= 1 && mod == 0;
        }

        isGroupingPlace(grouping, mod) {
            return grouping >= 1 && mod == 1;
        }

        GetGroupingName(numberAsString, grouping, groupingModulo) {
            if (grouping == 1 && groupingModulo == 1)
                return "Thousand";
            else if (grouping == 2 && groupingModulo == 1)
                return "Million";
            else if (grouping == 3 && groupingModulo == 1)
                return "Billion";
            else if (grouping == 4 && groupingModulo == 1)
                return "Trillion";
            else if (grouping == 5 && groupingModulo == 1)
                return "Quadrillion";
            else if (grouping == 6 && groupingModulo == 1)
                return "Quintillion";
            else if (grouping == 7 && groupingModulo == 1)
                return "Sextillion";
            else if (grouping == 8 && groupingModulo == 1)
                return "Septillion";
            else if (grouping == 9 && groupingModulo == 1)
                return "Octillion";
            else if (grouping == 10 && groupingModulo == 1)
                return "Nonillion";
            else if (grouping == 11 && groupingModulo == 1)
                return "Decillion";
            else if (grouping == 12 && groupingModulo == 1)
                return "Undecillion";
            else if (grouping == 13 && groupingModulo == 1)
                return "Duodecillion";
            else if (grouping == 14 && groupingModulo == 1)
                return "Tredecillion";
            else if (grouping == 15 && groupingModulo == 1) //10^45
                return "Quattuordecillion";
            else if (grouping >= 16 && groupingModulo == 1)
                alert("You entered a really big number. If you're a Concordia student, you can figure out my email address (look at the URL) and send me an email, because I think I'm just impressed that you entered so many numbers.");
            else
                alert("The number: '" + numberAsString + "'  with grouping: '" + grouping + "'  and mod: '" + groupingModulo + "' is not valid.");
        }       

        getGrouping(number) {
            return Math.floor(number / 3);
        }
        getModulos(number) {
            return number % 3;
        }

        GetOnesPlaceDictionary() {
            return {
                0:"zero",
                1:"one",
                2:"two",
                3:"three",
                4:"four",
                5:"five",
                6:"six",
                7:"seven",
                8:"eight",
                9:"nine"
            };
        }
        
        GetTensPlaceDictionary() {
            return {
                1:"ten",
                2:"twenty",
                3:"thrity",
                4:"fourty",
                5:"fifty",
                6:"sixty",
                7:"seventy",
                8:"eighty",
                9:"ninety"
            };
        }
        
        GetTeensDictionary() {
            return {
                11:"eleven",
                12:"twelve",
                13:"thirteen",
                14:"fourteen",
                15:"fifteen",
                16:"sixteen",
                17:"seventeen",
                18:"eighteen",
                19:"nineteen"
            }
        }
 
}
        </script>
        <style>
            html {
    padding:0px;
}
body {
    font-family: 'Roboto', sans-serif;
    margin:0px;
}

.text-purple {
    color: #6A33FF;
}

.box-shadow {
    box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
}

.container {
    margin-top:25px;
    max-width: 360px;
    min-width: 300px;
    min-height:300px;
}

.card {
    padding:45px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
}

.card-sm {
    margin: 7px;
    padding:5px;
    border-radius: 6px;
}

.card-primary {
    background-color:white;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.1);
}

.card-secondary {
    background-color: white;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
}
.flex {
    display: flex;
}

.flex-wrap {
    flex-wrap: wrap;
}

.flex-column {
    flex-direction: column;
}

.flex-justify-content-center {
    justify-content: center;
}

.flex-justify-content-flex-end {
    justify-content: flex-end;
}

.flex-justify-content-spacebetween {
    justify-content: space-evenly;
}

.flex-align-content-center {
    align-content: center;
}

.flex-align-items-center {
    align-items: center;
}

.flex > div.card {
    margin-top: 25px;
    margin-left: 25px;
}

.border-primary {
    border: 4px solid rgb(35, 89, 236);
}
.border-secondary {
    border: 2px solid rgb(35, 89, 236);
}

.position-absolute {
    position: absolute;
}
.position-relative {
    position: relative;
}


.top-shift-down {
    top: 45px;
}

.right {
    right: 15px;
}
.left {
    left: -75px;
}
.input-box-medium {
    width: 75px;
    height: 75px;
    border-radius: 4px;
    padding:10px;
    box-shadow: 0 0 2px 2px rgba(0,0,0,.1);
}

.hidden {
    display: none;
}
.input-primary {
    border: 2px solid rgb(138, 160, 223);
    border-radius: 6px;
    padding:8px;
    font-size:1.3em;
    box-sizing: border-box;
    width: 100%;
}
.input-primary:focus {
    border: 3px solid rgb(35, 89, 236);
    outline: none;
}
.transition-medium {
    transition-timing-function: ease-out;
    transition-duration: .4s;
}

.mobile-container { }
.mobile-container:active{    
    background-color: rgb(126, 157, 241);
    color:white;
    box-shadow: 0 0 2px 2px  rgba(126, 157, 241, .2);
}

.mobile-square {
    width: 50px;
    height: 50px;
}
.mobile-rectangle {
    width: 134px;
    height: 50px;
}

.flex-align-self-center {
    align-self: center;
}
.flex-justify-self-center {
    justify-self: center;
}
.button {
    cursor:pointer;
    padding:8px;
    border-radius: 6px;
    transition-duration: .15s;
    transition-timing-function: ease-out;
}

.button-sm {
    cursor:pointer;
    border-radius: 6px;
    transition-duration: .15s;
    transition-timing-function: ease-out;
}
.button-primary {
    background-color: #6A33FF;
    color:white;
}
.button-primary:hover {
    background-color: #8a60fd;
    color:white;
}
.button-primary:active {
    background-color: #4721af;
}

.button-secondary {
    background-color: white;
    border:4px solid #6A33FF;
    color: #6A33FF;
}
.button-secondary:hover {
    border-color: #8860f5;
}

.button-secondary.sm {
    border:2px solid  #6A33FF;
}
.button-secondary.sm:hover {
    border-color: #8a60fd;
    color:#8860f5;
}

.button-secondary:active{
    background-color:#6A33FF;
    color: white;
}

.button-orange {
    color:rgb(255, 156, 64);
    border:2px solid rgb(255, 156, 64);
    background-color: white;
}
.button-orange:active {
    color: white;
    background-color:rgb(255, 156, 64) !important;
}

nav > div {
    cursor:pointer;
    padding:8px;
    color: white;
    background-color: #6A33FF;
    transition-duration: .25s;
}
nav > div[data-nav=selected] {
    background-color: #875dfc;
}

nav > div:hover {
    padding:8px;
    color: white;
    background-color: #7543fc;
    transition-duration: .25s;
}

nav > div:active {
    color: white;
    background-color: #5c2ddd;
}

nav > div > div {
    padding-left:5px;
}

.text-right {
    text-align: right;
}
.text-center {
    text-align: center;
}
.h1 {
    font-size:2.3em;
    font-weight: 700;
}
.h2 {
    font-size:1.4em;
}
.h3 {
    font-size: 1.3em;
}
.h4 {
    font-size: 1.2em;
}
.h5 {
    font-size: 1.1em;
}

.mb-1{
    margin-bottom:10px;
}
.mb-2{
    margin-bottom:20px;
}
.mb-3{
    margin-bottom:30px;
}
.muted {
    opacity:.3;
}
.table {
    display:block;
    border-spacing:0px;
    width:100%;
}
.table > tbody > tr > td {
    border-bottom:2px solid #FF9C40;
    padding-left:5px;
    padding-right:5px;
}
.fade-in {
    animation: fade-in .3s ease-out 0s 1;
    animation-fill-mode: forwards;
}
.fade-out {
    animation: fade-out .3s ease-in 0s 1 ;
    animation-fill-mode: forwards;
}

.in-motion{
    animation: in-motion 2s linear infinite;
}

.inactive {
    opacity:.3;
}

@keyframes fade-in {
    from {
        opacity:0;
        transform: translateX(25px);
    }
    to {
        opacity:1;
        transform: translateX(0px);
    }
}

@keyframes in-motion {
    0%{
        transform:translateX(0px) rotateX(0deg);
    }
    25%{
        transform:translateX(3px) rotateX(-91deg);
    }
    75%{
        transform: translateX(-3px) rotateX(91deg);
    }
    100%{
        transform:translateX(0px) rotateX(0deg);
    }
}

@keyframes fade-out {
    0% {
        opacity:1;
        transform: translateX(0);
    }
    100% {
        opacity:0;
        transform: translateX(-25px);
    }
}
.background {
    position: fixed;
}

.circle {
    position: absolute;
    border-radius: 50%;
    background-color:#ff9c4057;
}

.circle-small {
    width:25px;
    height:25px;
}

.circle-medium {
    width:50px;
    height:50px;
}

.circle-large {
    width:100px;
    height:100px;
}

.travel{
    animation: travel  ease-in-out infinite;
}

@keyframes travel {
    0% {
        
        opacity:0;
        transform: translateX(-200px) ;
    }
    10% {
        opacity:1;
        transform: translateX(-100px);
    }
    80% {
        opacity:1;
    }
    100% {
        opacity:0;
        transform: translateX(800px);
    }
}
        </style>
    </head>
    <body>
        <nav class="flex flex-column flex-justify-content-center flex-align-content-center">
            <div class="text-center h4" id="story" data-nav='selected'>Story <div data-icon style="display: inline-block;" class="in-motion"><-</div></div>
            <div class="text-center h4" id="instructions" data-nav=''>Instructions <div data-icon style="display: inline-block;" class="in-motion"></div></div>
            <div class="text-center h4" id="game" data-nav=''>Game <div data-icon style="display: inline-block;" class="in-motion"></div></div>
        </nav>
        <div  class="background"><div id="background" style="overflow:hidden;"></div></div>
        <div class="flex flex-justify-content-center">
            <div class="container position-relative">
                <div data-content='selected' data-story class="card-sm fade-in ">
                    <span class="h1 text-purple">4 is Cosmic</span>
                    <p class="h4">It is said that there is a cosmic number to which all other numbers relate. From stories told, the cosmics chose the number 4 as it's number, but it was never known why this number was chosen. Can you discern the cosmics' secret?</p>
                </div>
                <div data-content='' data-instructions class="card-sm fade-in hidden">
                    <span class="h1 text-purple">Instructions</span>
                    <p class="h4">Enter a number into the textbox and push the button labeled "Show Results". Use information provided by the cosmics to figure out how the number 4 was chosen to be the cosmic number.</p>
                </div>
                <div data-content='' data-game class="card-sm fade-in hidden">
                    <form id="form">
                        <input type="text" id="submit" class="input-primary text-right" placeholder="Enter a number"></input>
                    </form>
                    <div class="mb-2"></div>
                    <div id="show-result" class="button button-primary flex flex-justify-content-center mb-1">
                        <div class="flex-align-self-center flex-justify-self-center">
                            <span class="h3">Show Result</span>
                        </div>
                    </div>
                    <div id="btn-try-again" class="button button-secondary flex flex-justify-content-center text-center mb-2 hidden">
                        <span class="h3">Try Another Number</span>
                    </div>
                    <div id="result-set" class="text-purple text-right"></div>
                    <div id="number-template" class="hidden">
                        <div class="card-sm button-sm button-secondary sm  mobile-container mobile-square flex flex-justify-content-center hidden" data-number="{#}">
                            <div class="flex-align-self-center flex-justify-self-center">
                                <h2>{#}</h2>
                            </div>
                        </div>
                    </div>
                    <div id="backspace-container" class="hidden">
                        <div class="card-sm button-sm button-primary mobile-container mobile-rectangle flex flex-justify-content-center" data-backspace>
                            <div class="flex-align-self-center flex-justify-self-center">
                                <h2>DELETE</h2>
                            </div>
                        </div>
                    </div>
                    <div id="numberpad" class="flex flex-wrap flex-justify-content-spacebetween"></div>
                </div>
            </div>
        </div>
        
        <script type="text/javascript">
            var seer =  new CosmicSeer();
            var resultSetId = "result-set";
            var MAX_CIRCLE_COUNT = 10;
            var CURRENT_CIRCLE_COUNT = 0;
            CreateNumberPad();
            setInput("");
            $(document).ready(function() {
                $("#number").focus(function() {
                    var container = $(this).closest(".input-box-medium")
                    $(container).removeClass("border-primary-inactive");
                    $(container).addClass("border-primary");
                });

                $("#number").blur(function() {
                    var container = $(this).closest(".input-box-medium")
                    $(container).removeClass("border-primary");
                    $(container).addClass("border-primary-inactive");
                });
                $("[data-number]").click(function() {
                    var val = $(this).attr("data-number");
                    var newValue = $("#submit").val() + val;
                    setInput(newValue);
                });
                $("[data-backspace]").click(function(){
                    var currentValue = $("#submit").val();
                    var newValue = currentValue.substring(0,currentValue.length-1);
                    setInput(newValue);
                });

                $("#btn-try-again").click(function() {
                    clear();
                });

                $("#show-result").click(function(){
                    $("#form").submit();
                });

                $("#story").click(function() {
                    setIcon($(this).find("[data-icon]"));
                    showSection("data-story");
                });
                $("#instructions").click(function() {
                    setIcon($(this).find("[data-icon]"));
                    showSection("data-instructions");
                });
                $("#game").click(function() {
                    setIcon($(this).find("[data-icon]"));
                    showSection("data-game");
                });

                $("[data-nav]").click(function() {
                    $("[data-nav='selected'").attr("data-nav", "");
                    $(this).attr("data-nav","selected");
                });

                $("#form").submit(function(e) {
                    e.preventDefault();
                    clear();

                    var currentNumber = $("#submit").val().trim();
                    var numberArray = [];
                    if (currentNumber != "") {
                        var attemptCount = 0;
                        while(currentNumber != 4 && attemptCount < 20) 
                        {
                            var nextNumber = seer.getNextNumber(currentNumber.toString());
                            numberArray.push([currentNumber, nextNumber])
                            currentNumber = nextNumber;
                            attemptCount++;
                        }
                        $("#btn-try-again").addClass('inactive');
                        delayItemDisplay(numberArray, 0);

                        setInput(""); 
                        $("#numberpad").addClass("hidden");
                        $("#show-result").addClass("hidden");
                        $("#form").addClass('hidden');
                        $("#btn-try-again").removeClass("hidden");
                    }
                });

                createCircle(getRandomNumber(15,40));
                setInterval(function() {
                    var animationDuration = Math.floor(getRandomNumber(15,40));
                    createCircle(animationDuration);
                }, 3000);
            });
            
            function createCircle(animationDuration) {
                if(CURRENT_CIRCLE_COUNT >= MAX_CIRCLE_COUNT)
                    return;
                CURRENT_CIRCLE_COUNT += 1;
                var circleSize= "";
                if (animationDuration < 20)
                    circleSize = "circle-small";
                else if (animationDuration < 30)
                    circleSize = "circle-medium";
                else if (animationDuration < 40)
                    circleSize = "circle-large";

                var id = getRandomNumber(1000000, 9999999, 1000000).toString().replace(".", "");
                var duration = (animationDuration * 1000) + "ms";
                
                $("#background").append("<div id='" + id + "' class='hidden travel circle " + circleSize + "' style='" + getRandomTopPosition() + "'></div>");
                $("#"+ id).css("animation-duration", duration);
                $("#" + id).removeClass("hidden");
                
                setTimeout(function() {
                    $("#"+id).remove();
                    CURRENT_CIRCLE_COUNT--;
                }, animationDuration * 1000);
            }

            function setInput(value) {
                $("#submit").val(value);
            }
            function clear() {
                $("#btn-try-again").addClass("hidden");
                $("#show-result").removeClass("hidden");
                $("#numberpad").removeClass("hidden");
                $("#form").removeClass('hidden');
                $("#" + resultSetId).empty();

            }
            function setIcon($item) {
                $("[data-icon]").each(function(index, element){
                    $(element).empty();
                });
                $($item).html("<-");
            }
            function showSection(attr) {
                $("[data-content='selected']").removeClass("fade-in").addClass("fade-out");
                setTimeout(function() {
                    $("[data-content='selected']").addClass("hidden").attr("data-content", "");
                    $("[" + attr + "]").attr("data-content", "selected").removeClass("fade-out").addClass("fade-in").removeClass("hidden");
                },350);
            }
            function appendNumber (currentNumber, nextNumber = null) {
                if(currentNumber != 4)
                    $("#" + resultSetId).append("<div class='h5 mb-1 fade-in'>" + currentNumber + " is " + nextNumber + "</div>");
                else
                    $("#" + resultSetId).append("<div class='h5 mb-1 fade-in'>" + currentNumber + " is cosmic</div>");
            }

            function CreateNumberPad() {
                var numberpadTemplate = $("#number-template").html();
                for (var i = 0; i <= 9; i++) {
                    $("#numberpad").append(numberpadTemplate.replaceAll("{#}",i).replace("hidden", ""));
                }
                $("#numberpad").append($("#backspace-container").html());
            }

            function delayItemDisplay(numberArray, index) {
                var timeoutLength = 300;
                setTimeout(function() {
                    if(numberArray.length > index) {
                        appendNumber(numberArray[index][0],numberArray[index][1]);
                        delayItemDisplay(numberArray, ++index);
                    } else {
                        appendNumber(4);
                        setTimeout(function() {
                            $("#btn-try-again").removeClass('inactive');
                        }, timeoutLength);
                    }
                }, timeoutLength);
            }

            function getRandomNumber(min, max, multiplier = 100) {
                var number = -1;
                var count = 0;
                while(true) {
                    if ((number >= min && number <= max) || count > 10)
                        return number;                        
                    count++;
                    number =  (Math.random() * multiplier) + 1;
                }
            }

            function getRandomTopPosition() {
                var fromTop = Math.floor(getRandomNumber(5,window.innerHeight, 1000));
                return "top: " + fromTop + "px;";
            }
        </script>
    </body>
</html>
