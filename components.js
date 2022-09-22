Vue.component('weather1', {
    data: function () {
        return {
            displayinfo: "block",
            none: "none",
            fix: "block",
        }
    },
    template: '<div class="weatherinfo"><button class="weatherbutton" style=float:left v-on:click="displayinfo = none, none = fix, fix = displayinfo"><img class="weathericon2" src="sunny_foggy.png" ></button><div style=float:right><p class="weathertemp" :style="{ display: displayinfo }">18C</p><p class="weatherday" :style="{ display: displayinfo }">Today</p></div></div>',
});

var weather2 = {
    data: function () {
        return {
            displayinfo2: "block",
            none2: "none",
            fix2: "block",
        }
    },
    template: '<div class="weatherinfo"><button class="weatherbutton" style=float:left v-on:click="displayinfo2 = none2, none2 = fix2, fix2 = displayinfo2"><img class="weathericon2" src="sunny_rainy.png"></button><div style=float:right><p class="weathertemp" :style="{ display: displayinfo2 }">14C</p><p class="weatherday" :style="{ display: displayinfo2 }">Tom</p></div></div>'
};

var priority1 = {
    data: function () {
        return {
            displayinfo3: "block",
            none3: "none",
            fix3: "block",
        }
    },
    template: '<div><p class="topprioritytitle" id="tptitle" v-on:click="displayinfo3 = none3, none3 = fix3, fix3 = displayinfo3"></p><p class="topprioritytext" id="tpnotes" :style="{ display: displayinfo3 }"></p></div>'
};

var priority2 = {
    data: function () {
        return {
            displayinfo4: "block",
            none4: "none",
            fix4: "block",
        }
    },
    template: '<div><p class="secondprioritytitle" id="sctitle" v-on:click="displayinfo4 = none4, none4 = fix4, fix4 = displayinfo4"></p><p class="secondprioritytext" id="scnotes" :style="{ display: displayinfo4 }"></p></div>'
};

var priority3 = {
    data: function () {
        return {
            displayinfo5: "block",
            none5: "none",
            fix5: "block",
        }
    },
    template: '<div><p class="thirdprioritytitle" id="thtitle" v-on:click="displayinfo5 = none5, none5 = fix5, fix5 = displayinfo5"></p><p class="thirdprioritytext" id="thnotes" :style="{ display: displayinfo5 }"></p></div>'
};

var app = new Vue({
    el: '#comp',
    data: {
        text: 'hello vue',
    },
    components:{
        weather2,
        priority1,
        priority2,
        priority3
    }
});

