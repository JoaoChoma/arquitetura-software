// Definição da ViewModel
var app = new Vue({
    el: '#app',
    data: {
        tasks: [
            { id: 1, title: 'Comprar leite', completed: false },
            { id: 2, title: 'Estudar para o teste', completed: true },
            { id: 3, title: 'Fazer exercícios', completed: false }
        ]
    }
});
