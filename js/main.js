const app = new Vue({
    el: '#app',
    data: {
        input: '',
        regions: regions,
    },

    maxInputLength: 3,

    computed: {
        getRegionName() {
            return this.regions.filter(item => item.abr === this.input.toUpperCase());
        },
    },

    created() {
        this.getInputFromUrlGetParameter();
    },

    mounted() {
        this.$refs.input.focus();
    },

    methods: {
        handleClearInput() {
            this.input = "";
            this.$refs.input.focus();
        },

        checkException(kreis) {
            return kreis.includes('*');
        },

        getBundeslandIcon(bundesland) {
            return "img/" + bundesland + ".png";
        },

        getInputFromUrlGetParameter() {
            const windowData = Object.fromEntries(new URL(window.location).searchParams.entries());
            if (!windowData) return;
            if (!windowData.s) return;
            if (windowData.s.length > this.$options.maxInputLength) return;
            this.input = windowData.s;
        }
    }
})