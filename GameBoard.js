import {GRIDE_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST} from './setup'

class gameBoard {
    constructor(DOMGrid) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }
    showGameStatus(gameWin) {
        const div = document.createElement('div');
        div.classList.add('game-status');
        div.innerHTML = `${gameWin ? 'WIN!' : 'GAME OVER'}`;
        this.DOMGrid.appendChild(div);

    }

    createGrid(level) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid.innerHTML = '';
        this.DOMGrid.style.cssText = 'grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);';

      level.array.forEach((square, i) => {
          const div = document.createElement('div');
          div.classList.add('sqaure', CLASS_LIST[sqaure]);
          div.style.cssText = `width : ${CELL_SIZE}px; height: ${CELL_SIZE}px`;
          this.DOMGrid.appendChild(div);
          this.grid.push(div);


          if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
      })
            
    }
addObject(pos, classes) {
    this.grid[pos].classList.add(...classes);

}
removeoObject(pos, classes) {
    this.grid[pos].classList.remove(...classes);

}
objectExist(pos, object) {
    return this.grid[pos].classList.contains(object);

}
rotateDiv(pos, deg) {
    this.grid[pos].style.transform = `rotate(${deg}deg)`;
}

}