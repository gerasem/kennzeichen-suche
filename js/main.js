const app = new Vue({
    el: '#app',
    data: {
        input: '',
        regions: regions,
    },

    computed: {
        getRegionName() {
            return this.regions.filter(item => item.abr === this.input.toUpperCase());
        },
    },

    created() {
        let uri = window.location.href.split('?');
        if (uri.length === 2) {
            let vars = uri[1].split('&');
            let getVars = {};
            let tmp = "";
            vars.forEach(v => {
                tmp = v.split('=');
                if (tmp.length === 2) {
                    getVars[tmp[0]] = tmp[1];
                }
            });
            this.input = tmp[1];
        }
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
        }
    }
})