
var getChildrenTextContent = function (children) {
    return children.map(function (node) {
        return node.children ? getChildrenTextContent(node.children) : node.text
    }).join('');
};

Vue.component('anchored-heading', {
    render: function (createElement) {
        //create kabab-case id
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '');

        return createElement(
            'h' + this.level,
            [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        );
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
});

Vue.component('basic-anchored-heading', {
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
    el: '#basic-test-anchored-heading'
});

new Vue({
    el: '#test-anchored-heading'
});


