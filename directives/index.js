Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
});

new Vue({
    el: '#test-focus'
});

Vue.directive('demo', {
    bind: function(el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML = 
            'name: '            + s(binding.name) + '<br>' + 
            'value: '           + s(binding.value) + '<br>' + 
            'expression: '      + s(binding.expression) + '<br>' + 
            'argument: '        + s(binding.arg) + '<br>' + 
            'modifiers: '       + s(binding.modifiers) + '<br>' + 
            'vnode keys: '      + Object.keys(vnode).join('. ');
    }
});

new Vue({
    el: '#hook-arguments-example',
    data: {
        message: 'hello!'
    }
});

Vue.directive('color-text-demo', function (el, binding) {
    console.log(binding.value.color);
    console.log(binding.value.text);
});

new Vue({
    el: '#color-text-example'
});