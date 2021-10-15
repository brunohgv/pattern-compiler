import GlobalState from "./globalState"

describe('GlobalState', () => {
    describe('initial state', () => {
        it('Should create a global state with tile size x with default value', () => {
            const global = new GlobalState()
            expect(global.tileSizeX).toBe(12)
        })
    
        it('Should create a global state with tile size y with default value', () => {
            const global = new GlobalState()
            expect(global.tileSizeY).toBe(12)
        })
    
        it('Should create a global state with an empty char map', () => {
            const global = new GlobalState()
            expect(global.getCharMap()).toStrictEqual(new Map())
        })
    })

    describe('charMap', () => {
        let global: GlobalState

        beforeEach(() => {
            global = new GlobalState()
        })

        it('should add a new value in the char map', () => {
            global.charAssign('a', 'myTilePath')
            expect(global.getCharMap().size).toBe(1)
        })

        it('should have the correct key', () => {
            global.charAssign('a', 'myTilePath')
            const charMapKeys = [...global.getCharMap().keys()]
            expect(charMapKeys).toStrictEqual(['a'])
        })

        it('should have the correct tilePath', () => {
            global.charAssign('a', 'myTilePath')
            const charMapValues = [...global.getCharMap().values()]
            expect(charMapValues).toStrictEqual(['myTilePath'])
        })

        it('should get the respective key', () => {
            global.charAssign('a', 'myTilePath')
            expect(global.getAssignedTile('a')).toBe('myTilePath')
        })

        it('should return undefined if the key is not set', () => {
            expect(global.getAssignedTile('a')).toBeUndefined()
        })
    })
})