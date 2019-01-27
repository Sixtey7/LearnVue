Vue.component('base-layout', {
    template: `
        <div class = "container">
            <header>
                <slot name="header"></slot>
            </header>
            <main>
                <slot></slot>
            </main>
            <footer>
                <slot name="footer"></slot>
            </footer>
        </div>
    `
});

Vue.component('todo-list', {
    props: [ 'todos' ],
    template: `
        <ul>
            <li
                v-for="todo in todos"
                v-bind:key="todo.id"
            >
                <!-- We have a slot for each todo, passing it the -->
                <!-- 'todo' object as a slot prop. -->
                <slot v-bind:todo="todo">
                    <!-- Fallback content -->
                    {{ todo.text }} 
                </slot>
            </li>
        </ul>
        `

});

new Vue({
    el: '#play-with-slots'
});

new Vue({
    el: '#play-with-todos',
    data: {
        todos: [
            { id: 1, text: "Do Thing 1", isComplete: false },
            { id: 2, text: "Do Thing 2", isComplete: true }
        ]
    }
});

