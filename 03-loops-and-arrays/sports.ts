let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swiming"];
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i])
}

console.log("\n");
//Let's simplified for loop

for(let tempSport of sportsOne){
    if(tempSport == "Cricket"){
        console.log(tempSport + " << My Favorite !!");
    }
    else{
        console.log(tempSport);
    }
    
}