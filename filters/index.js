var transform = new Vue({
    el: '#play-with-filters',
    data: {
        value: ''
    },
    filters: {
        capitalize: function(value) {
            if (!value) return;
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
});