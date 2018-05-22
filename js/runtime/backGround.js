import { sprite } from "../base/sprite.js";

//背景类
export class backGround extends sprite{
    constructor(){
       const image=sprite.getImage('backGround');
        super(image,0,0,image.width,image.height,0,0,window.innerWidth,window.innerHeight);
    }
}