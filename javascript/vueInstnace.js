
var data = { a : 1 }


var vm = new Vue({
    data : data
})

// 인스턴스에 있는 속성은
// 원본 데이터에 있는 값을 반환한다.
vm.a === data.a // => true

// 인스턴스에 있는 속성값을 변경하면
// 원본 데이터도 바뀐다.
vm.a =2
data.a // => 2

//반대도 마찬가지다
data.a = 3
vm.a // => 3


/*
데이터가 변경되면 화면은 다시 렌더링 된다.
        유념할 점은, data에 있는 속성들은 인스턴스가 생성될 때 존재하는 것들만 반응형이라는 것!
*/
vm.b ='hi';
//b가 변경되어도 화면이 갱신되지 않는다.
//필요한 게 있으면 꼭 초기값을 지정해줘야한다.
/*
data : {
    newTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
}

유일한 예외는 Object.fressze()를 사용하는 경우다.
이는 기존 속성이 바뀌는 걸 막아 반응성 시스템이 추적할 수 없다는 걸 의미
*/

/*
var obj = {
    foo: 'bar'
}
Object.freeze(obj);
new Vue({
    el: #app,
    data: obj
})

<div id="app">
  <p>{{ foo }}</p>
  <!-- obj.foo는 더이상 변하지 않습니다! -->
  <button v-on:click="foo = 'baz'">Change it</button>
</div>
*/

/*
Vue 인스턴스는 데이터 속성 이외에도 유용한 인스턴스 속성 및 메소드를 제공

예:

var data = { a: 1 }

var vm = new Vue({
  el: '#example',
  data: data
})


vm.data === data // => true
vm.el === document.getElementById('example') // => true

// watch 는 인스턴스 메소드 입니다.
vm.watch('a', function (newVal, oldVal) {
  //`vm.a`가 변경되면 호출 됩니다.
})

*/
