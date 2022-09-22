const diaryform = document.querySelector(`#diary-form`);
const diaryResultRow = document.querySelector(`.diaryResultRow`);
const getDiaryTitle = document.getElementsByClassName(`diary-text-title`);
const getDiaryText = document.getElementsByClassName(`diary-text-box`);

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
        diaryDiv.className = 'single-diary';
        diaryResultRow.appendChild(diaryDiv);

        const dairyHeading = document.createElement('h3');
        dairyHeading.className = 'single-diary-heading';
        dairyHeading.textContent = getDiaryTitle[0].value;
        diaryDiv.appendChild(dairyHeading);

        const diaryDate = document.createElement('p');
        diaryDate.className = 'single-diary-date';
        if ((getDiaryTitle[0].value = getDiaryTitle[0].value)) {
                diaryDate.textContent = `Date Added: ${day} ${mon} ${year}`;
                diaryDiv.appendChild(diaryDate);
        }

        const diaryParagraph = document.createElement('div');
        diaryParagraph.className = 'single-diary-text';
        diaryParagraph.textContent = getDiaryText[0].value;
        diaryDiv.appendChild(diaryParagraph);
        getDiaryText[0].value = ``;
}

diaryform.addEventListener(`submit`, addSingleDiaryEntry);