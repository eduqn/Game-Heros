/*
Project: Game Hero
Author: Eduardo Nascimento
Date: 11/24/2023 
*/

const readline = require('readline-sync')
let option
let optionContinue

class hero{
	constructor(name, age, type, attack){ 
	this._name = name
	this._age = age
	this._type = type
	this._attack = attack
	}
    
	strike(){
		console.log(`The ${this._type} attacked using ${this._attack}`)
	}
}

let mage = new hero ("Vike", "28", "Mage", "magic")
let warrior = new hero ("Bime", "42", "Warrior", "sword")
let monk = new hero ("Laeha", "35", "Monk", "martial arts") 
let ninja = new hero ("Hihukete", "22", "Ninja", "shuriken")

menuBar()
function menuBar(){
    console.log ("\n********** HERO OPTIONS **********")
    console.log ("**********************************")
    console.log("1.Mage\n2.Warrior\n3.Monk\n4.Ninja")
    option = readline.questionInt("Choose your hero number: ")
        if (option != 1 && option != 2 && option != 3 && option != 4){
            console.warn("Input valid option, please!")
            menuBar()
        }              
           
    switch(option){ 
      case 1:
        mage.strike()
        terminate()
      case 2:
        warrior.strike()    
        terminate()
      case 3: 
        monk.strike()    
        terminate()
      case 4: 
        ninja.strike()    
        terminate()
    }

    function terminate(){
         
        while(optionContinue != "Y" || optionContinue != "y" || optionContinue != "N" || optionContinue != "n" ){
            console.warn("Input valid option, please!")
            optionContinue = readline.question("Do you want continue (Y or N)? ") 
            if (optionContinue === "N" || optionContinue === "n"){
                exit()
            } else if (optionContinue === "Y" || optionContinue === "y"){
                menuBar()
              }      
        }    
        
    }        
}