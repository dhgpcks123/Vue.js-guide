/**
 * 관리자 시스템 Form 요소  Vue 컴포넌트
 */

// css요소가 포함된 input 컴포넌트
// 컴포넌트 만들기 참고 https://blog.martinwork.co.kr/vuejs/2017/10/26/vue-component-template.html
Vue.component("admin-text", {
    // 전역으로 사용할 컴포넌트를 만들 때는 Vue.component(컴포넌트이름,{})로 만든다
    // *컴포넌트이름 ?
    // Vue는 사용자 지정 태그 이름에 대해 [W3C 규칙]을 적용하지 않습니다
    // (모두 소문자이어야 하고 하이픈을 포함해야합니다). 그러나 이 규칙을 따르는 것이 좋습니다.
    template: `
            <div class="field item form-group">
				<label class="col-form-label col-md-3 col-sm-3  label-align">
				{{label}}
					<span v-if="required==='required'" class="required">*</span>
				</label>
                <div class="col-md-3 col-sm-3">
                <input class="form-control" style="font-size: 12px"
                    :type="type" :data-validate-length-range="validaterange" 
                    :data-validate-linked="validatelinked"
                    :name="name" :placeholder="placeholder" :required="required" 
                    :value="value" v-bind:readonly="isReadOnly"
                    @input=update($event.target.value) />
                </div>
            </div>
    `,
    // 컴포넌트로 사용될 템플릿
    props: {
        type: String, label: String, placeholder: String, validaterange: String,
        validatelinked: String, name: String, required: String, disabled: String,
        value: String
    },
    // 부모 컴포넌트로 부터 data를 받을 때 props를 사용한다.
    // props: ['message']
    // 어 근데 이거 부모 컴포넌트로 부터 받는 게 맞나? 그냥 html에서 넘겨주는 것 처럼 보이는데...
    computed: {
        isReadOnly() {
            if (this.disabled == "true") {
                return true;
            }

            return false;
        }
    },
    //computed vs watch
    //위의 경우 this.disabled가 변하면 isReadOnly가 호출된다.
    //데이터 만지는 경우 해당 함수 실행 됨
    //method랑 비슷하다는데?
    //computed - template내부에 선언된 computed중에서 해당 함수와 연결된 값이 바뀔 때만 해당 함수만을 실행한다.
    //methods - 그런거 모르겠고  template내부에 선언된 methods중에서 update라이프사이클이 동작한(=아무 변수나 바뀐)다면 함수를 모두 실행한다
    //사실 template구문에 methods가 많을 수록 아주 큰 성능 하락
    //computed - 특정 값을 계산해서 보여준다.
    //watch - 특정 값의 변동해서 다른 작업을 한다.
    methods: {
        update: function (value) {
            console.log(this.disabled);
            this.$emit('input', value)
        }
    }
})

Vue.component("admin-radio", {
    template: `
        <div class="field item form-group">
			<label class="col-form-label col-md-3 col-sm-3  label-align">
                {{label}}
                <span v-if="required==='required'" class="required">*</span>
			</label>
            <div class="col-md-6 col-sm-6" style="margin-top: 10px;">
			<label v-for="radio in options" class="radio radio-inline">
                    <input type="radio" style="font-size: 12px" :value="radio.value" :checked="radio.value==value" :name="name" 
                        @input=update($event.target.value) :id="id" v-bind:disabled="isReadOnly" >
                    {{radio.label}} 
                </label>
			</div>
        </div>
    `,
    props: {
        label: String, value: String, id: String,
        options: Array, name: String, required: String, disabled: String,
    },
    computed: {
        isReadOnly() {
            if (this.disabled == "true") {
                return true;
            }

            return false;
        }
    },
    methods: {
        update: function (value) {
            //console.log(value);
            this.$emit('input', value)
        }
    }
})

Vue.component("admin-select", {
    template: `
        <div class="field item form-group">
            <label class="col-form-label col-md-3 col-sm-3  label-align">
                {{label}}
                <span v-if="required==='required'" class="required">*</span>
            </label>
            <div class="col-md-3 col-sm-3">
                <select style="font-size: 12px" v-model="this.value" class="form-control" v-bind:id="id" 
                    v-on:input="updateValue($event.target.value)" v-bind:disabled="isReadOnly" >
                        <option v-for="option in options" :value="option.value">{{option.label}}</option>    
                </select>
            </div>
        </div>
    `,
    props: { label: String, value: String, id: String, options: Array, required: String, disabled: String },
    computed: {
        isReadOnly() {
            if (this.disabled == "true") {
                return true;
            }

            return false;
        }
    },
    methods: {
        updateValue: function (value) {
            //console.log(value);
            this.$emit('input', value);
        }
    }
})
