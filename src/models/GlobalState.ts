import Char from "./Char"

export default class GlobalState {
    public tileSizeX: number
    public tileSizeY: number
    private characterMap: Map<Char, string>

    constructor() {
        this.tileSizeX = 12
        this.tileSizeY = 12
        this.characterMap = new Map()
    }

    charAssign(character: Char, tilePath: string) {
        this.characterMap.set(character, tilePath)
    }

    getAssignedTile(character: Char) {
        return this.characterMap.get(character)
    }
}