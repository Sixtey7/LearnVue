new Vue({
    el: '#animated-number-demo',
    data: {
        number: 0.,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function(newValue) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue})
        }
    }
});

var Color = net.brehaut.Color;

new Vue({
    el: '#example-7',
    data: {
        colorQuery: '',
        color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        tweenedColor: {}
    },
    created: function() {
        this.tweenedColor = Object.assign({}, this.color);
    },
    watch: {
        color: function() { 
            function animate () {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate);
                }
            }

            new TWEEN.Tween(this.tweenedColor)
                .to(this.color, 750)
                .start();

            animate();
        }
    },
    computed: {
        tweenedCSSColor: function() {
            return new Color({
                red: this.tweenedColor.red,
                green: this.tweenedColor.green,
                blue: this.tweenedColor.blue,
                alpha: this.tweenedColor.alpha
            }).toCSS();
        }
    },
    methods: {
        updateColor: function() {
            this.color = new Color(this.colorQuery).toRGB();
            this.colorQuery = '';
        }
    }
});

/**
 * This complex tweening logic can now be reused between
 * any integers we may wish to animate in our application.
 * 
 * Components also offer a clean interface for configuring
 * more dynamic transitions and complex transition
 * strategies
 */
Vue.component('animated-integer', {
    template: '<span>{{ tweeningValue }}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            tweeningValue: 0
        }
    },
    watch: {
        value: function (newValue, oldValue) {
            this.tween(oldValue, newValue);
        }
    },
    mounted: function() {
        this.tween(0, this.value);
    },
    methods: {
        tween: function(startValue, endValue) {
            console.log('tween called with ' + startValue + ' and ' + endValue);
            var vm = this;
            function animate() {
                if (TWEEN.update()) {
                    requestAnimationFrame(animate);
                }
            }

            new TWEEN.Tween( { tweeningValue: startValue })
                .to({ tweeningValue: endValue }, 500)
                .onUpdate(function(object) {
                    vm.tweeningValue = object.tweeningValue.toFixed(0);
                })
                .start();
        

            animate();
        }
    }
});

//All complexity has now been removed from the main Vue instance!
new Vue({
    el: '#example-8',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function() {
            return this.firstNumber + this.secondNumber;
        }
    }
})