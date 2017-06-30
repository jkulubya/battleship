export default {
    methods: {
        getPanelIndex (x, y) {
            return ((y - 1) * 10 + x) - 1
        }
    }
}
