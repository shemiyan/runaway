import {
  card
} from './runtime/card.js';
import {
  backGround
} from './runtime/backGround.js';
import {
  resourseLoad
} from './base/resourseLoad.js';
import {
  dataStore
} from './base/dataStore.js';
import {
  director
} from './director.js';


/**
 * 游戏主函数，初始化整个游戏的精灵，作为游戏开始的入口
 */
export default class Main {
  constructor() {
    new resourseLoad();
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.Director = director.getInstance();
    this.DataStore = dataStore.getInstance();
    const loader = resourseLoad.create();
    loader.onloaded(map => this.onResourceFirstLoaded(map));
  }
  onResourceFirstLoaded(map) {
    this.DataStore.ctx = this.ctx;
    this.DataStore.res = map;
    this.init();
  }
  init() {
    this.DataStore.put('cards', [])
                  .put('backGround', backGround);
                 this.Director.creatCards();
                  this.Director.run();           
  }
}