Vue.component('anchored-heading', {
    render: function (createElement) {
        return createElement(
            'h' + this.level, //tag name
            this.$slots.default //array of children
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

new Vue({
    el: '#test-anchored-heading'
});