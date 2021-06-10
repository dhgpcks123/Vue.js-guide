
var app = new Vue({
    el: '#app',
    data:{
            msg: 'hello'
    },
    beforeCreate: function(){
        //Vue인스턴스 초기화 된 직후 만들어지기 전 발생 - this.$el, data, methods 접근 x
    },
    created: function(){
        //data, computed, methods, watch등 활성화 // DOM 적용 x
    },
    beforeMount: function(){
        //DOM 부착 직전, 가상DOM 생성되어있음
    },
    mounted: function(){
        //가상 DOM -> 실제 DOM 부착. this.$el, data, computed, methods, watch 등 모든 요소 접근 가능
    },
    beforeUpdate: function() {
        //data값 변했다? 변화 직전 호출
    },
    updated: function(){
        //변경 data -> DOM 적용
    },
    beforeDestroy: function(){
        //해당 인스턴스 해체되기 직전, 아직 모든 속성 접근 가능
    },
    destroyed: function(){
        //파괴! 접근x
    }
}),
