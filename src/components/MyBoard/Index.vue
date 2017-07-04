<template>
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
            <tile-component v-for="panel in panels" :panel="panel" :key="getPanelIndex(panel.Coordinates.x, panel.Coordinates.y)"></tile-component>
        </div>
    </div>
</template>

<script>
    import tile from './Tile'
    export default {
        name: 'my-board-component',
        data () {
            return { }
        },
        components: {
            'tile-component': tile
        },
        computed: {
            panels () {
                return this.$store.state.firingBoard.Panels
            }
        }
    }
</script>

<style lang='less' scoped>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        background-color: #f0f0f0;
        border: 1px solid #aaa;
        width: 325px;
    }
    .x-label {
        background-color: #292ae1;
        padding: 0 0 0 25px;
        display: flex;
        height: 25px;
        width: 100%;

        div {
            width: 30px;

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
            height: 30px;

            p {
                text-align: center;
                font-size: 18px;
                height: 30px;
                line-height: 30px;
            }
        }
    }
    
    .panel {
        width: 300px;
        display: flex;
        flex-wrap: wrap;
    }
</style>
