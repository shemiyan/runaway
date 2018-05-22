//变量缓存器，方便我们在不同的类中访问和修改变量 全局只有一个
export class dataStore{ 
      //单例
 static getInstance(){
     if(!dataStore.instance){
        dataStore.instance=new dataStore();
     }
     return dataStore.instance;
 }
 constructor(){
     //存储变量的容器map
    this.map=new Map();
 }
 put(key,value){

     if(typeof value==='function' ){
        value=new value();
     }
     this.map.set(key,value);
     return this;
 }
 get(key){
    return this.map.get(key);
 }
 destroy(){
     for(let value of this.map.values){
         value=null;
     }
 }

}