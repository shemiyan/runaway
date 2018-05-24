import {
    sprite
} from "../base/sprite.js";
import {
    cardsPosition
} from "./cardsPosition.js";

const CARDS_WIDTH = 50; //图片显示宽度
const CARDS_HEIGHT = 70; //图片显示高度
const CARDS_NUM = 16; //三家打每个人16张牌
const screenWidth = window.innerWidth; //画布宽
const screenHeight = window.innerHeight; //画布高
//绘制牌类
export class card extends sprite {
    constructor(
        srcX = 8,
        srcY = 1,
        xn = 1
    ) {
        let tem=(screenWidth - ((CARDS_WIDTH / 2) * (CARDS_NUM+1)))/2;
        let x = tem+(CARDS_WIDTH / 2)*xn;
        let y = screenHeight - CARDS_HEIGHT - 15;

        let CardsPosition = cardsPosition.getInstance();
        super(CardsPosition.image,
            srcX,
            srcY,
            CardsPosition.CARDS_CUT_WIDTH,
            CardsPosition.CARDS_CUT_HEIGHT,
            x,
            y,
            CARDS_WIDTH,
            CARDS_HEIGHT);
    }
}