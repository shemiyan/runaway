import {sprite} from "../base/sprite.js";
//牌所对应的裁剪的位置
export class cardsPosition{
    static getInstance(){
        if(!cardsPosition.instance){
            cardsPosition.instance=new cardsPosition();
        }
        return cardsPosition.instance;
    }
    constructor(){
        this.image = sprite.getImage('cards');
        this.CARDS_CUT_WIDTH = this.image.width / 12 - 10; //被剪裁的图片的宽度
        this.CARDS_CUT_HEIGHT = this.image.height / 4 - 10; //被剪裁的图片的高度
        //牌剪裁位置规则
        let blackPeachY=this.rule(1,this.CARDS_CUT_HEIGHT);//黑桃y
        let redHeartY=this.rule(2,this.CARDS_CUT_HEIGHT);//红心y
        let blackFlowerY=this.rule(3,this.CARDS_CUT_HEIGHT);//梅花y
        let redBoxY=this.rule(4,this.CARDS_CUT_HEIGHT);//方块y
        //x坐标
        let X_1=this.rule(1);
        let X_2=this.rule(2,this.CARDS_CUT_WIDTH);
        let X_3=this.rule(3,this.CARDS_CUT_WIDTH);
        let X_4=this.rule(4,this.CARDS_CUT_WIDTH);
        let X_5=this.rule(5,this.CARDS_CUT_WIDTH);
        let X_6=this.rule(6,this.CARDS_CUT_WIDTH);
        let X_7=this.rule(7,this.CARDS_CUT_WIDTH);
        let X_8=this.rule(8,this.CARDS_CUT_WIDTH);
        let X_9=this.rule(9,this.CARDS_CUT_WIDTH);
        let X_10=this.rule(10,this.CARDS_CUT_WIDTH);
        let X_11=this.rule(11,this.CARDS_CUT_WIDTH);
        let X_12=this.rule(12,this.CARDS_CUT_WIDTH);
        this.cardsPositionArr=[
            {
                blackPeach:{
                    '2':[ X_1,blackPeachY],
                    '3':[X_2,blackPeachY],
                    '4':[X_3,blackPeachY],
                    '5':[X_4,blackPeachY],
                    '6':[X_5,blackPeachY],
                    '7':[X_6,blackPeachY],
                    '8':[X_7,blackPeachY],
                    '9':[X_8,blackPeachY],
                    '10':[X_9,blackPeachY],
                    '11':[X_10,blackPeachY],
                    '12':[X_11,blackPeachY],
                    '13':[X_12,redHeartY]
                },
                redHeart:{
                    '1':[ X_1,redHeartY],
                    '3':[X_2,redHeartY],
                    '4':[X_3,redHeartY],
                    '5':[X_4,redHeartY],
                    '6':[X_5,redHeartY],
                    '7':[X_6,redHeartY],
                    '8':[X_7,redHeartY],
                    '9':[X_8,redHeartY],
                    '10':[X_9,redHeartY],
                    '11':[X_10,redHeartY],
                    '12':[X_11,redHeartY],
                    '13':[X_12,redHeartY]
                },
                blackFlower:{
                    '1':[ X_1,blackFlowerY],
                    '3':[X_2,blackFlowerY],
                    '4':[X_3,blackFlowerY],
                    '5':[X_4,blackFlowerY],
                    '6':[X_5,blackFlowerY],
                    '7':[X_6,blackFlowerY],
                    '8':[X_7,blackFlowerY],
                    '9':[X_8,blackFlowerY],
                    '10':[X_9,blackFlowerY],
                    '11':[X_10,blackFlowerY],
                    '12':[X_11,blackFlowerY],
                    '13':[X_12,blackFlowerY]
                },
                redBox:{
                    '1':[ X_1,redBoxY],
                    '3':[X_2,redBoxY],
                    '4':[X_3,redBoxY],
                    '5':[X_4,redBoxY],
                    '6':[X_5,redBoxY],
                    '7':[X_6,redBoxY],
                    '8':[X_7,redBoxY],
                    '9':[X_8,redBoxY],
                    '10':[X_9,redBoxY],
                    '11':[X_10,redBoxY],
                    '12':[X_11,redBoxY],
                    '13':[X_12,redBoxY]
                }
            }
        ]
    }
    rule(n=1,dis=0){
        let rules=(8+dis)*n-dis
        return rules.toFixed(2);
      }
}