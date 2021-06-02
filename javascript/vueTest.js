'use strict'

new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data:{
        message: `이 페이지는 ${new Date()}에 로드되었습니다.`
    }
})

var app3 = new Vue({
    el: '#app-3',
    data:{
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data:{
        todos:[
            {text: 'Javascript배우기'},
            {text: 'Vue 배우기'},
            {text: '무언가 멋진 거 만들기'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data:{
        message: '안녕하세요 케케',
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data:{
        message: '안녕하세요',
    },
})