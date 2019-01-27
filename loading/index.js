const loadingComponent = Vue.component('loading', {
    template: `
        <h3>Loading...</h3>
    `
});

const errorComponent = Vue.component('error', {
    template: `
        <h2>ERROR!</h2>
    `
});

Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        // Pass the component definition to the resolve callback
        resolve({
            template: '<div>I am async!</div>'
        })
    }, 2500);
});

const asyncComponent = () => ({
    component: new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({
                template: '<div>I am super async!</div>'
            })
        }, 5000);
    }),
    loading: loadingComponent,
    error: errorComponent,
    // delay before showing the loading component. 
    delay: 500,
    // the error component will be displayed if a timeout
    // is provided and exceeded.
    timeout: 3000
});

Vue.component('async-component', asyncComponent);


new Vue({
    el: '#play-with-async'
});

