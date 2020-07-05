var sportsTwo = ["Golf", "Cricket", "Tennis", "Swiming"];
sportsTwo.push("baseball");
sportsTwo.push("football");
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var tempSport = sportsTwo_1[_i];
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite !!");
    }
    else {
        console.log(tempSport);
    }
}
