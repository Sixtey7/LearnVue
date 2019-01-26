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