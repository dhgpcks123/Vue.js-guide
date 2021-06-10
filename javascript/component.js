'use strict'

//todo-item 이름을 가진 컴포넌트를 정의
Vue.component('todo-item', {
    //이제 todo-item 컴포넌트는 prop 라고하는
    // 사용자 정의 속성 같은 것을 입력받을 수 있다.
    //이 prop은 todo라는 이름으로 정했습니다.
    props:['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data:{
        groceryList:[
            {id:0,text:'Vegetable'},
            {id:1,text:'Chess'},
            {id:2,text:'Whatever else humans are supposed to eat'}
        ]
    }
})