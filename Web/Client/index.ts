import Vue from 'vue';
import { defineComponent } from '@vue/composition-api';

const value: number = 5;
const message: string = `Hello from typescript, value is ${value}`

const appNode: HTMLElement = document.getElementById('app') as HTMLElement;
//appNode.textContent = message;

new Vue({
    el: '#app',

    data() {
        return {
            message: 'Hello from Vue'
        }
    },

    render(createElement) {
        return createElement('div', this.message);
    }
});