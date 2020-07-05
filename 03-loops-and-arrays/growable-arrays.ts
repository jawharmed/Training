let sportsTwo: string[] = ["Golf", "Cricket", "Tennis", "Swiming"];

sportsTwo.push("baseball");
sportsTwo.push("football");

for(let tempSport of sportsTwo){
    if(tempSport == "Cricket"){
        console.log(tempSport + " << My Favorite !!");
    }
    else{
        console.log(tempSport);
    }
}