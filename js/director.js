import { dataStore } from "./base/dataStore.js";

//导演类 控制游戏的逻辑
export class director{
 static getInstance(){
     if(!director.instance){
        director.instance=new director();
     }
     return director.instance;
 }
 constructor(){
    this.Datastore=dataStore.getInstance();
}
run(){
    const backgroundSprite=this.Datastore.get('backGround')
    const cardsSprite=this.Datastore.get('dealCards');
    backgroundSprite.draw();
    cardsSprite.draw();
}
}