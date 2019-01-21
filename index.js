var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Goodbye World!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn Javascript '},
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    },
    created: function() {
        console.log('reverse was create');
    },
    mounted: function() {
        console.log('reverse was mounted');
    },
    updated: function() {
        console.log('reverse was updated!');
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    },
    created: function() {
        console.log('big todo created!');
    },
    mounted: function() {
        console.log('big todo was mounted!');
    }
});

var rawHTML = new Vue({
    el: '#rawHTML',
    data: {
        rawHTML: '<span style="color: red">This should be red. </span>'
    }
})

var betterReversed = new Vue({
    el: '#betterReverse',
    data: {
        message: 'Add Message Here'
    },
    computed: {
        reversedMessage: function() {
            return this.message.split('').reverse().join('');
        }      
    }
});

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
        // whenever question changes, this function will run
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debounceGetAnswer()
        }
    },
    created: function() {
        this.debounceGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }
            this.answer = 'Thinking...';
            var vm = this;
            axios.get('https://yesno.wtf/api')
                .then(function (response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function(error) {
                    vm.answer = 'Error! Could not reach the API. '  + error;
                });
        }
    }
});

var tryClassStyle = new Vue({
    el: '#classStyle',
    data: {
        isActive: true,
        hasError: false
    },
    methods: {
        toggleActive: function() {
            this.isActive = !this.isActive;
        },
        toggleError: function() {
            this.hasError = !this.hasError;
        }
    }
});

var tryClassStyleComputed = new Vue({
    el: '#classStyleComputed',
    data: {
        isActive: true,
        hasError: false
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive,
                'text-danger': this.hasError
            }
        }
    },
    methods: {
        toggleActive: function() {
            this.isActive = !this.isActive;
        },
        toggleError: function() {
            this.hasError = !this.hasError;
        }
    }
});


var indexInFor = new Vue({
    el: '#indexInFor',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
});

var attrAndValue = new Vue({
    el: '#attrAndValue',
    data: {
        object: {
            firstName: 'John',
            lastName: 'Doe',
            age: 30
        }
    }
});

var showEvenNumbers = new Vue({
    el: '#showEvenNumbers',
    data: {
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    computed: {
        evenNumbers: function() {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
});

Vue.component('todo-item', {
    template: '\
        <li>\
            {{ title }}\
            <button v-on:click="$emit(\'remove\')">Remove</button>\
        </li>\
    ',
    props: ['title']
});

var superTodoList = new Vue({
    el: '#super-todo-list',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes'
            },
            {
                id: 2,
                title: 'Take out the trash'
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            });
            this.newTodoText = '';
        }
    }
});

var clickListener = new Vue({
    el: '#click-listener',
    data: {
        counter: 0
    }
});

var keyListener = new Vue({
    el: '#key-listener',
    methods: {
        logKeyPress(value) {
            console.log(value + ' was pressed!');
        }
    }
})