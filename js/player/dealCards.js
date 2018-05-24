import {
    dataStore
} from "../base/dataStore.js";
import {
    card
} from "../runtime/card.js";
import {
    cardsPosition
} from "../runtime/cardsPosition.js";
//发牌类
export class dealCards {
    static getInstance() {
        if (!dealCards.instance) {
            dealCards.instance = new dealCards();
        }
        return dealCards.instance;
    }
    constructor() {
        let data = [{
            blackFlower: [1, 4, 6, 7],
            blackPeach: [2, 9, 13, 12],
            redBox: [1, 4, 6, 7],
            redHeart: [1, 4, 6, 7]
        }];
        this.sortCards(data);
    }
    sortCards(data) {
        let dataArrName = new Map([
            ['blackFlower', data[0].blackFlower],
            ['blackPeach', data[0].blackPeach],
            ['redBox', data[0].redBox],
            ['redHeart',data[0].redHeart]
        ]);
        let CardsPositionArr = cardsPosition.getInstance().cardsPositionArr;
        this.newCardsPositionArr = [];
        for (let [key, value] of dataArrName.entries()) {
            this.pushCards(key, this.newCardsPositionArr, CardsPositionArr,value);
        }
    }
    pushCards(name, newArr, arr,value) {  
        for (let val of value) {
            newArr.push(arr[0][name][val]);
        }
    }
}