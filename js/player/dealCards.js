import { sprite } from "../base/sprite.js";
const CARDS_WIDTH   = 50
const CARDS_HEIGHT  = 70
const screenWidth=window.innerWidth;
const screenHeight=window.innerHeight;
//发牌类
export class dealCards extends sprite{
 constructor(){
    const image=sprite.getImage('cards');
    const cardWidth=CARDS_WIDTH;
    const cardHeight=CARDS_HEIGHT;
     // 玩家默认处于屏幕底部居中位置
    super(image,8,1,image.width/12-10,image.height/4-10,0, 0,cardWidth,cardHeight);

 }
}