Vue.component('component1', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">Youve clicked me {{ count }} times!</button>',
});

var component2 = {
    data: function () {
        return {
            countminus: 0
        }
    },
    template: '<button v-on:click="countminus--">Im counting backwards! {{ countminus }}</button>'
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'hello vue',
    },
    components:{
        component2,
    }
});

