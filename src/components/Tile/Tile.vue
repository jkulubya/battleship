<template>
    <div @click='clicked' v-bind:class="{ tile: true, hit : hit, miss : miss }"></div>
</template>

<script>
    import OccupationType from '../../models/OccupationType.js'

    export default {
        name: 'tile-component',
        data () {
            return { }
        },
        props: {
            occupationType: {
                type: Number,
                default: OccupationType.EMPTY
            },
            panel: {
                type: Object,
                required: true
            }
        },
        methods: {
            clicked () {
                this.$store.dispatch('SHOOT_SHOT', this.panel)
            }
        },
        computed: {
            hit () {
                let index = this.getPanelIndex(this.panel.Coordinates.x, this.panel.Coordinates.y)
                console.log(index)
                return this.$store.state.firingBoard.Panels[index].OccupationType === OccupationType.HIT
            },

            miss () {
                let index = this.getPanelIndex(this.panel.Coordinates.x, this.panel.Coordinates.y)
                return this.$store.state.firingBoard.Panels[index].OccupationType === OccupationType.MISS
            }
        }
    }
</script>

<style lang='less' scoped>
    .tile {
        height: 50px;
        width: 50px;

        &:hover{
            background: #e0e0e0;
        }

        &.hit {
            background: greenyellow;
        }

        &.miss {
            background: red;
        }
    }
</style>
