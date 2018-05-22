import {
    dataStore
} from "./dataStore.js";

//精灵基类，负责初始化精灵加载的资源和大小以及位置
export class sprite {
    constructor(
        img = null,
        srcX = 0,
        srcY = 0,
        srcW = 0,
        srcH = 0,
        x = 0,
        y = 0,
        width = 0,
        height = 0
    ) {
        this.DataStore = dataStore.getInstance();
        this.ctx = this.DataStore.ctx;
        this.img = img;
            this.srcX = srcX;
            this.srcY = srcY;
            this.srcW = srcW;
            this.srcH = srcH;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height
    }
    static getImage(key) {
        return dataStore.getInstance().res.get(key);
    }
    //绘制图像
    draw(img = this.img,
        srcX = this.srcX,
        srcY = this.srcY,
        srcW = this.srcW,
        srcH = this.srcH,
        x = this.x,
        y = this.y,
        width = this.width,
        height = this.height) {
        this.ctx.drawImage(
            img,
            srcX,
            srcY,
            srcW,
            srcH,
            x,
            y,
            width,
            height
        );
    }
}