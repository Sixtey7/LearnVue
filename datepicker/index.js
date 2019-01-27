new Vue({
    el: '#app',
    data: {
        startDate: null,
        endDate: null
    },
    mounted: function() {
        this.attachDatePicker('startDate');
        this.attachDatePicker('endDate');
    },
    methods: {
        attachDatePicker : function(refName) {
            var picker = new Pikaday({
                field: this.$refs[refName],
                format: 'YYYY-MM-DD'
            });

            this.$once('hook:beforeDestroy', function() {
                picker.destroy();
            });
        }
    }
});