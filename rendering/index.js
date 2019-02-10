
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


var EmptyList = { 
    render(h) {
        return h('p', 'No Items Found :(');
    }   
};
var TableList = { 
    render(h, context) {
        return h('button', 'click me');
    }   
};
var OrderedList = { 
    render(h, context) {
        return h('button', 'click me');
    }   
};
var UnorderedList = {
    functional: true,
    props: ['items'],
    render(h, context) {
        return h('ul', context.parent.arrayOfStrings.map(function (item) {
            return h('li', item);
        }));
    } 
    //render(h, context) {
    //    return h('ul', [h('li', 'item 1'), context.slots.default]);
    //}  
};

Vue.component('smart-list', {
    functional: true,
    props: {
        items: {
            type: Array,
            required: true
        },
        isOrdered: Boolean
    },
    render: function(createElement, context) {
        function appropriateListComponent () {
            var items = context.props.items;

            if (items.length === 0) {
                console.log('building empty list');
                return EmptyList;
            }

            if (typeof items[0] === 'object') {
                console.log('Building table list');
                return TableList;
            }

            if (context.props.isOrdered) {
                console.log('Building ordered list');
                return OrderedList
            }

            console.log('Building unordered list');
            return createElement(UnorderedList, context.data, context.children);
        }
    
        return createElement(
            appropriateListComponent(),
            context.data,
            context.children
        );
    }
});

new Vue({
    el: '#play-with-smart-list',
    data: {
        arrayOfStrings: ["hello", "world"]
    }
});