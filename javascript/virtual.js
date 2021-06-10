'use strict'

Vue.component('app-sidebar',{
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

new Vue({
    el:'#app',
    data: {
        todoList:[
            {id:1, text:'국어'},
            {id:2, text:'수학'},
            {id:3, text:'영어'},
        ]
    },
})