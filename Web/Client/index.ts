import Vue from 'vue';
import VueCompositionApi, { ref } from '@vue/composition-api';

Vue.use(VueCompositionApi);

const MyComponent = {
    setup(props) {
        const message = ref('Hello');
    
        return {
          message
        }
    },

    template: '<div>{{ message }}</div>'
}

new Vue({
    render: createElement => createElement(MyComponent),
}).$mount('#app');