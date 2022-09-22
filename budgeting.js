const diaryform = document.querySelector(`#diary-form`);
const diaryResultRow = document.querySelector(`.diaryResultRow`);
const getDiaryTitle = document.getElementsByClassName(`diary-text-title`);
const getDiaryText = document.getElementsByClassName(`saving-text-box`);
var totalcost = 0;
function addSingleDiaryEntry(event) {
    event.preventDefault();
    const d = new Date();
    const month = new Array();
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';
    const mon = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    const diaryDiv = document.createElement('div');
    diaryDiv.className = 'single-saving';
    diaryResultRow.appendChild(diaryDiv);

    const dairyHeading = document.createElement('h3');
    dairyHeading.className = 'single-saving-heading';
    dairyHeading.textContent = getDiaryTitle[0].value;
    diaryDiv.appendChild(dairyHeading);

    const diaryParagraph = document.createElement('div');
    diaryParagraph.className = 'single-saving-text';
    diaryParagraph.textContent = "$" + getDiaryText[0].value;
    diaryDiv.appendChild(diaryParagraph);
    var itemcost = getDiaryText[0].value;
    totalcost = totalcost + parseInt(itemcost);
    console.log(totalcost);
    document.getElementById("totalcost").innerHTML = "Total: $" + totalcost;
    getDiaryText[0].value = ``;
}

diaryform.addEventListener(`submit`, addSingleDiaryEntry);

Vue.component('component1', {
    data:
        function () {
            return {
                count: 10,
            }
        },
    template: '<button class="importancemeter" v-on:click="count++">{{ count }}</button>"',
});

var component2 = {
    data: function () {
        return {
            countminus: 0
        }
    },
    template: '<button onclick="updateImportanceMeter()" v-on:click="countminus--">Im counting backwards! {{ countminus }}</button>'
};

var app = new Vue({
    el: '#app',
    data: {
        text: 'hello vue',
    },
    components: {
        component2,
    }
});

/*methods:
        function () {
            return {
                'document.getElementById("importancemeter").style.width = count + 10;'
            }
        },

        data() {
        return {
            myWidth: '200'
        }
    },
        
        
        */