import GlobalState from "./models/GlobalState"


const app = document.querySelector<HTMLDivElement>('#app')!

const global = new GlobalState()
global.charAssign('f', './assets/block.png')
global.charAssign('c', './assets/coin.png')
global.charAssign('b', './assets/box.png')


console.log(global.getAssignedTile('f'))

app.innerHTML = `${global.getAssignedTile('f')}`
