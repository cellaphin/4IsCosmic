// import * from "./vendors/number-to-words.min.js";

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