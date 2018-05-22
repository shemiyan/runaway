//资源文件加载器，确保canvas图片资源文件在加载完成后进行渲染
import {resources} from './resources.js';
export class resourseLoad{
   constructor(){
       this.map=new Map(resources);
        for(let [key,value] of this.map){
            const image=new Image();
            image.src=value;
            this.map.set(key,image);
        }
   }
   onloaded(callback){
       let loadedCount=0;
       for(let value of this.map.values()){
           value.onload=()=>{
               loadedCount++;
               if(loadedCount>=this.map.size){
                   callback(this.map);
               }
           }
       }
   }
   static create(){
       return new resourseLoad();
   }
}
