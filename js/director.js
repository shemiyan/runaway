import { dataStore } from "./base/dataStore.js";
import { dealCards } from './player/dealCards.js';
import { card } from "./runtime/card.js";
//导演类 控制游戏的逻辑
export class director{
 static getInstance(){
     if(!director.instance){
        director.instance=new director();
     }
     return director.instance;
 }
 constructor(){
    this.DataStore=dataStore.getInstance(); 
}

run(){
    this.DataStore.get('backGround').draw();
    this.DataStore.get('cards').forEach(element => {
        element.draw();
    }); 
}
update(){
    let carsPositionArr=dealCards.getInstance();
   
    for(let [key, value] of carsPositionArr.newCardsPositionArr.entries()){
        this.DataStore.get('cards').push(new card(value[0],value[1],key+1));
    }
    this.DataStore.get('cards').forEach(element => {
        element.clearRect(0,0,1024,728);
        element.draw();
    }); 
}
creatCards(){
        let carsPositionArr=dealCards.getInstance();
        for(let [key, value] of carsPositionArr.newCardsPositionArr.entries()){
            this.DataStore.get('cards').push(new card(value[0],value[1],key+1));
        }
        
     }
}