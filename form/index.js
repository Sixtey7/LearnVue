var transForm = new Vue({
    el: '#transactionForm', 
    data: {
        name: '',
        amount: '',
        type: '',
        date: new Date().toISOString().slice(0,10),
        notes: ''
    },
    methods: {
        handleSubmit: function() {
            console.log('User entered\nname: ' + this.name + '\namount: $' + this.amount + '\ntype: ' + this.type + '\ndate: ' + this.date + '\nnotes: ' + this.notes);
        }
    }
});