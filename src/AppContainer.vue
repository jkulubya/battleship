<template>
    <div class="app-container">
        <firing-board></firing-board>
        <my-board></my-board>
    </div>
</template>

<script>
    import FiringBoard from './components/Tile/TileContainer'
    import MyBoard from './components/MyBoard/Index'

    export default {
        name: 'app',
        components: {
            'firing-board': FiringBoard,
            'my-board': MyBoard
        }
    }
</script>

<style lang='less' scoped>
    .app-container{
        align-items: flex-start;
        display: flex;
    }
</style>
