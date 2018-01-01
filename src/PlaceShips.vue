<template>
    <div class="container">
        <div class="wrapper">
            <div class="x-label">
                <div>
                    <p>A</p>
                </div>
                <div>
                    <p>B</p>
                </div>
                <div>
                    <p>C</p>
                </div>
                <div>
                    <p>D</p>
                </div>
                <div>
                    <p>E</p>
                </div>
                <div>
                    <p>F</p>
                </div>
                <div>
                    <p>G</p>
                </div>
                <div>
                    <p>H</p>
                </div>
                <div>
                    <p>I</p>
                </div>
                <div>
                    <p>J</p>
                </div>
            </div>
            <div class="y-label">
                <div>
                    <p>1</p>
                </div>
                <div>
                    <p>2</p>
                </div>
                <div>
                    <p>3</p>
                </div>
                <div>
                    <p>4</p>
                </div>
                <div>
                    <p>5</p>
                </div>
                <div>
                    <p>6</p>
                </div>
                <div>
                    <p>7</p>
                </div>
                <div>
                    <p>8</p>
                </div>
                <div>
                    <p>9</p>
                </div>
                <div>
                    <p>10</p>
                </div>
            </div>
            <div class="panel">
                <div class="tile"
                    @click="tileClicked(getPanelIndex(panel.Coordinates.x, panel.Coordinates.y))"
                    v-for="panel in panels"
                    :key="getPanelIndex(panel.Coordinates.x, panel.Coordinates.y)">
                    {{getPanelIndex(panel.Coordinates.x, panel.Coordinates.y)}}
                </div>
            </div>
        </div>
        <div>
            <form>
                <input type="radio" name="occupationType" v-model="selectedShip" id="1" value="1"><label for="1"> Battleship</label><br>
                <input type="radio" name="occupationType" v-model="selectedShip" id="2" value="2"><label for="2"> Cruiser</label><br>
                <input type="radio" name="occupationType" v-model="selectedShip" id="3" value="3"><label for="3"> Destroyer</label><br>
                <input type="radio" name="occupationType" v-model="selectedShip" id="4" value="4"><label for="4"> Submarine</label><br>
                <input type="radio" name="occupationType" v-model="selectedShip" id="5" value="5"><label for="5"> Carrier</label> 
            </form>
        </div>
    </div>    
</template>

<script>
import Vue from 'vue'

export default {
    name: 'place-ships',
    data () {
        return {
            isCurrentlyPlacingShip: false,
            shipStartPosition: Number(),
            moveEndNodes: {
                yminus: 0,
                yplus: 0,
                xminus: 0,
                xplus: 0
            },
            selectedShip: 0,
            shipPlacements: [[], [], [], [], []]
        }
    },
    computed: {
        panels () {
            return this.$store.state.gameBoard.Panels
        }
    },
    methods: {
        tileClicked (index) {
            let selectedShip = Number(this.selectedShip)
            if (selectedShip === 0) return

            if (!this.isCurrentlyPlacingShip) {
                this.startShipPlacement(index, selectedShip)
                this.isCurrentlyPlacingShip = true
            } else {
                this.finishShipPlacement(index, selectedShip)
                this.isCurrentlyPlacingShip = false
            }
        },

        startShipPlacement (index, shipType) {
            let validMoves = this.getValidMoves(index, shipType)
            this.shipStartPosition = index
            this.getMoveEndNodes(index, shipType, validMoves)
            // visual feedback for user
        },

        finishShipPlacement (index, shipType) {
            if (
                index !== this.moveEndNodes.yminus &&
                index !== this.moveEndNodes.yplus &&
                index !== this.moveEndNodes.xminus &&
                index !== this.moveEndNodes.xplus) return

            let shipSize = this.getShipSize(shipType)
            let shipSquares = []

            if (index === this.moveEndNodes.yminus) {
                for (let i = 0; i < shipSize; i++) {
                    let item = index + (10 * i)
                    shipSquares.push(item)
                }
            }

            if (index === this.moveEndNodes.yplus) {
                for (let i = 0; i < shipSize; i++) {
                    let item = index - (10 * i)
                    shipSquares.push(item)
                }
            }

            if (index === this.moveEndNodes.xminus) {
                for (let i = 0; i < shipSize; i++) {
                    let item = index + i
                    shipSquares.push(item)
                }
            }

            if (index === this.moveEndNodes.xplus) {
                for (let i = 0; i < shipSize; i++) {
                    let item = index - i
                    shipSquares.push(item)
                }
            }

            // shipType-1 because ships start at 1 but arrays start at 0
            Vue.set(this.shipPlacements, shipType - 1, shipSquares) // eslint-disable-line
            // draw ships
        },

        getValidMoves (index, shipType) {
            let shipSize = this.getShipSize(shipType)
            let result = this.moveIsClearOfShips(index, shipSize, this.moveIsWithinBounds(index, shipSize))
            return result
        },

        getMoveEndNodes (index, shipType, { yminus, yplus, xminus, xplus }) {
            let shipSize = this.getShipSize(shipType)
            let extraLength = shipSize - 1

            if (yminus) {
                let endNode = index - (10 * extraLength)
                this.moveEndNodes.yminus = endNode
            } else {
                this.moveEndNodes.yminus = null
            }

            if (yplus) {
                let endNode = index + (10 * extraLength)
                this.moveEndNodes.yplus = endNode
            } else {
                this.moveEndNodes.yplus = null
            }

            if (xminus) {
                let endNode = index - extraLength
                this.moveEndNodes.xminus = endNode
            } else {
                this.moveEndNodes.xminus = null
            }

            if (xplus) {
                let endNode = index + extraLength
                this.moveEndNodes.xplus = endNode
            } else {
                this.moveEndNodes.xplus = null
            }
        },

        getShipSize (shipType) {
            let shipSize = 0
            switch (shipType) {
            case 1:
                shipSize = 4
                break
            case 2:
                shipSize = 3
                break
            case 3:
                shipSize = 2
                break
            case 4:
                shipSize = 3
                break
            case 5:
                shipSize = 5
                break
            default:
                break
            }
            return shipSize
        },

        moveIsClearOfShips (index, shipSize, { yminus, yplus, xminus, xplus }) {
            // check if ship being placed is ship currently occupying space
            if (yminus) {
                for (let i = 0; i < shipSize; i++) {
                    let p = this.panels[index - (10 * i)].IsOccupied
                    if (p) yminus = false
                }
            }

            if (yplus) {
                for (let i = 0; i < shipSize; i++) {
                    if (this.panels[index + (10 * i)].IsOccupied) yplus = false
                }
            }

            if (xminus) {
                for (let i = 0; i < shipSize; i++) {
                    if (this.panels[index - i].IsOccupied) xminus = false
                }
            }

            if (xplus) {
                for (let i = 0; i < shipSize; i++) {
                    if (this.panels[index + i].IsOccupied) xplus = false
                }
            }

            return {
                yminus,
                yplus,
                xminus,
                xplus
            }
        },

        moveIsWithinBounds (index, shipSize = 2) {
            let extraLength = shipSize - 1
            let result = {
                yminus: false,
                yplus: false,
                xminus: false,
                xplus: false
            }
            if ((index + (extraLength * 10) <= 99)) result.yplus = true
            if ((index - (extraLength * 10) >= 0)) result.yminus = true
            if ((Math.floor((index) / 10)) === (Math.floor((index + extraLength) / 10))) result.xplus = true
            if ((Math.floor((index) / 10)) === (Math.floor((index - extraLength) / 10))) result.xminus = true

            return result
        }

        // visual feedback
        // draw placed ships
    },
    watch: {
        shipPlacements () {
            for (var i = 0; i < this.shipPlacements.length; i++) {
                for (var j = 0; j < this.shipPlacements[i].length; j++) {
                    this.panels[j].OccupationType = i + 1 // array indices are one behind the occupation types
                }
            }
        }
    }
}
</script>

<style lang="less">
    .container{
        align-items: flex-start;
        display: flex;
    }
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        background-color: #f0f0f0;
        border: 1px solid #aaa;
        width: 525px;
    }
    .x-label {
        background-color: #292ae1;
        padding: 0 0 0 25px;
        display: flex;
        height: 25px;
        width: 100%;

        div {
            width: 50px;

            p {
                text-align: center;
                font-size: 18px;
                height: 25px;
                line-height: 25px;
            }
        }
    }

    .y-label {
        background-color: #292ae1;
        width: 25px;

        div {
            height: 50px;

            p {
                text-align: center;
                font-size: 18px;
                height: 50px;
                line-height: 50px;
            }
        }
    }
    
    .panel {
        width: 500px;
        display: flex;
        flex-wrap: wrap;
    }

    .tile {
        background: #4952FF;
        height: 50px;
        width: 50px;

        &:hover{
            background: #121540;
        }

        &.hit {
            background: red;
        }

        &.miss {
            background: forestgreen;
        }
    }
</style>
