// Soldier
class Soldier {
    constructor( health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength 
    }

    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        
    }
        

}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength );
        this.name = name;
    }
    

    
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if(this.health > 0 ){
            return `${this.name} has received ${theDamage} points of damage`            
        }
        else if(this.health <= 0){
            return `${this.name} has died in act of combat`
        }

        }
        battleCry(){
        return "Odin Owns You All!"
        }
       
    
      
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health,strength);
    }
    receiveDamage(theDamage){
        this.health = this.health - theDamage;
        if( this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`}
            else{
                return `A Saxon has died in combat`

            }

        }
    
    }
    
    
}

// War
class War { constructor(){
    this.saxonArmy = [];
    this.vikingArmy = [];
}

addViking(theViking){
    this.vikingArmy.push(theViking);        
}
​
addSaxon(theSaxon){
    this.saxonArmy.push(theSaxon);
}

vikingAttack(){\
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex];


        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
        console.log("TEST", this.vikingArmy[randomSaxonIndex]);
​
        let message = randomSaxon.receiveDamage(randomViking.attack());
​
        if(randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1)
        }
​
        return message;
​
​
    }
    saxonAttack(){
        // Random Viking Generator
        let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length)
        let randomViking = this.vikingArmy[randomVikingIndex];
​
        // Random Saxon Generator
        let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length)
        let randomSaxon = this.saxonArmy[randomSaxonIndex];
​
        let message = randomViking.receiveDamage(randomSaxon.attack());
​
        if(randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1)
        }
​
        return message;
    }
    showStatus(){
        if(this.saxonArmy.length <= 0){
            return `Vikings have won the war of the century!`
        }
        else 
        if(this.vikingArmy.length <= 0){
            return `Saxons have fought for their lives and survive another day...`;
        }
        else{
            return `Vikings and Saxons are still in the thick of battle.`
        }
    }
}
Collapse





