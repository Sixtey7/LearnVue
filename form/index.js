var transForm = new Vue({
    el: '#transactionForm', 
    data: {
        name: '',
        amount: '',
        type: '',
        date: new Date().toISOString().slice(0,10),
        notes: ''
    }
});