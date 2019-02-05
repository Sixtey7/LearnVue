//define a mixin object
var myMixin = {
    created: function() {
        this.hello();
    },
    methods: {
        hello: function() {
            console.log('Hello from the mixin!');
        }
    }
}

var buttonMixin = {
    data: function() {
        return {
            counter: 0
        }
    },
    template: '<button v-on:click="counter++">You clicked me {{ counter }} times.</button>'
}

// define a component that uses this mixin
var Component = Vue.extend({
    mixins: [myMixin]
});

Vue.component('button-counter', {
    mixins: [buttonMixin],
});

new Vue({
    el: '#components-demo'
});

var component = new Component();