import Vue from 'vue'

// 注册全局节流指令
Vue.directive('throttle', {
    bind(el, binding) {
        let executeFunction
        if(binding.value instanceof Array) {
            const [func, timer] = binding.value;
            executeFunction = throttle(func, timer);
        } else {
            console.error('throttle指令绑定的参数必须是数组，且需执行的事件类型或函数或时间间隔不能为空')
            return
        }
        el.addEventListener('click', executeFunction);
    }
})

// 注册全局防抖指令
Vue.directive('debounce', {
    bind(el, binding) {
        let executeFunction
        if(binding.value instanceof Array) {
            const [func, timer] = binding.value;
            executeFunction = debounce(func, timer);
        } else {
            console.error('debounce指令绑定的参数必须是数组，且需执行的事件类型或函数或时间间隔不能为空')
            return
        }
        el.addEventListener('click', executeFunction);
    }
})