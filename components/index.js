Vue.component('button-counter', {
    data: function() {
        return {
            counter: 0
        }
    },
    template: '<button v-on:click="counter++">You clicked me {{ counter }} times.</button>'
});

Vue.component('blog-post', {
    props: ['post'],
    template: `
        <div class="blog-post">
            <h3>{{ post.title }}</h3>
            <button v-on:click="$emit('enlarge-text', 0.1)">
                Enlarge text
            </button>
            <div v-html="post.content"></div>
        </div>
        `
});

Vue.component('trans-entry', {
    props: {
        name: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            validator: function (value) {
                return['Planned', 'Estimate', 'Pending', 'Confirmed', 'Future'].indexOf(value) !== -1;
            }
        },
        date: Date,
        notes: String
    },
    template: `
        <div class="trans-item">
            <h3>{{ name }}</h3>
            <p>Amount: \${{ amount }}</p>
            <input :value="amount" type="number" @input="$emit('update:amount', parseInt($event.target.value))">
            <p>Type: {{ type }}</p>
            <div v-if="date"><p>Date: {{ date }}</p></div>
            <div v-if="notes"><p>Notes: {{ notes }}</p></div>
        </div>
    `
});

new Vue({
    el: '#components-demo'
});

new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: 'It all started on a plane...'},
            { id: 2, title: 'Blogging with Vue', content: 'Is done by copying tutorials'},
            { id: 3, title: 'Why Vue is so fun', content: 'Because the guide told me so'}
        ],
        postFontSize: 1
    }
});

new Vue({
    el: '#trans-row-demo',
    data: {
        transactions: [
            { id: 1, name: 'Tx One', amount: 500, type: 'Planned', date: new Date('01/23/2018'), notes: 'I\'m a note'},
            { id: 2, name: 'Tx Two', amount: 250, type: 'Future', notes: 'I\'m also a note'}
        ]
    }
})