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

        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        background-color: #2891aa;
        width: 525px;
    }
    .x-label {
        background-color: #489271;
        padding: 0 0 0 25px;
        display: flex;
        height: 25px;
        width: 100%;
    }
    .x-label div {
        width: 50px;
    }
    .x-label div p {
        text-align: center;
        font-size: 18px;
        height: 25px;
        line-height: 25px;
    }
    .y-label {
        background-color: #292ae1;
        width: 25px;
    }
    .y-label div {
        height: 50px;
    }
    .y-label div p {
        text-align: center;
        font-size: 18px;
        height: 50px;
        line-height: 50px;
    }
    .panel {
        background-color: #000000;
        height: 50px;
        width: 500px;
        display: flex;
        flex-wrap: wrap;
    }
    .panel div {
        height: 50px;
        width: 50px;
        background-color: red;
    }
</style>
<script>
    import tile from './Tile.vue'
    export default {
        name: 'tile-container',
        data () {
            return { }
        },
        components: {
            'tile': tile
        }
    }
</script>
