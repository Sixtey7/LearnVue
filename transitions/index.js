new Vue({
    el: '#demo',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-1',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-2',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-3',
    data: {
        show: true
    }
});

new Vue({
    el: '#example-4',
    data: {
        show: false
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em'}, { duration: 300});
            Velocity(el, { fontSize: '1em'}, { complete: done});
        },
        leave: function(el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg'}, { duration: 600});
            Velocity(el, { rotateZ: '100deg'}, { loop: 2});;
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    }
});

new Vue({
    el: '#if-transition-test',
    data: {
        show: false
    }
});

new Vue({
    el: '#try-component-transition',
    data: {
        view: 'v-a'
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
})


new Vue({
    el: '#list-demo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length);
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++);
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function() {
            this.items = _.shuffle(this.items);
        }
    }
});

new Vue({
    el: '#flip-list-demo',

    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    methods: {
        shuffle: function() {
            this.items = _.shuffle(this.items);
        }
    }
});

new Vue({
    el: '#staggered-list-demo',
    data: {
        query: '',
        list: [
            { msg: 'Bruce Lee' },
            { msg: 'Jackie Chan' },
            { msg: 'Chuck Norris' },
            { msg: 'Jet Li' },
            { msg: 'Kung Fury' }
        ]
    },
    computed: {
        computedList: function() {
            var vm = this;
            return this.list.filter(function(item) {
                return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1;
            });
        }
    },
    methods: {
        beforeEnter: function (el) {
            el.style.opacity = 0;
            el.style.height = 0;
        },
        enter: function (el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                Velocity(
                    el,
                    { opacity: 1, height: '1.6em' },
                    { complete: done}
                )
            }, delay);
        },
        leave: function (el, done) {
            var delay = el.dataset.index * 150;
            setTimeout(function() {
                Velocity(
                    el,
                    { opacity: 0, height: 0 },
                    { complete: done }
                )
            }, delay);
        }
    }
});

Vue.component('my-special-transition', {
    template: `
        <transition
            name = "very-special-transition"
            mode = "out-in"
            v-on:before-enter = "beforeEnter"
            v-on:after-enter = "afterEnter"
        >
            <slot></slot>
        </transition>
    `,
    methods: {
        beforeEnter: function (el) {
            //TODO
        },
        afterEnter: function (el) {
            //TODO
        }
    }
});

new Vue({
    el: '#dynamic-fade-demo',
    data: {
        show: true,
        fadeInDuration: 1000,
        fadeOutDuration: 1000,
        maxFadeDuration: 1500,
        stop: true
    },
    mounted: function() {
        this.show = false;
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function (el, done) {
            var vm = this;
            Velocity(
                el,
                { opacity: 1 },
                {
                    duration: this.fadeInDuration,
                    complete: function() {
                        done();
                        if (!vm.stop) {
                            vm.show = false;
                        }
                    }
                }
            )
        },
        leave: function(el, done) {
            var vm = this;
            Velocity(
                el,
                { opacity: 0 },
                {
                    duration: this.fadeOutDuration,
                    complete: function() {
                        done();
                        vm.show = true;
                    }
                }
            )
        }
    }
});