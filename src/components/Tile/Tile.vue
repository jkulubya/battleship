<template>
    <div></div>
</template>

<script>
    export default {
        name: 'tile',
        data () {
            return { }
        },
        props: {
            occupationType: {
                type: Number,
                required: true
            },
            coordinates: {
                type: Object,
                required: true
            }
        }
    }
</script>
