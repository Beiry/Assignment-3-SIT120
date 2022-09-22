function chooseFont(fontc) {
    let chosenFont = fontc;
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--fontcc', chosenFont);
    localStorage.setItem('fontcc', chosenFont);
}

function colourBackgroundChange() {
    let colour = document.getElementById('backgroundcolorchoice').value;
    document.body.style.backgroundColor = colour;
    localStorage.setItem('backgroundcc', colour);
}

function colourBackgroundFix(colour) {
    document.body.style.backgroundColor = colour;
    localStorage.setItem('backgroundcc', colour);
}

function colourAccentChange() {
    let colour = document.getElementById('accentcolorchoice').value;
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour', colour);
    localStorage.setItem('accentcc', colour);
}

function colourAccentFix(colour) {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour', colour);
    localStorage.setItem('accentcc', colour);
}

function colourAccentChange2() {
    let colour = document.getElementById('accentcolorchoice2').value;
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour2', colour);
    localStorage.setItem('accentcc2', colour);
}

function colourAccentFix2(colour) {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour2', colour);
    localStorage.setItem('accentcc2', colour);
}

function colourAccentChange3() {
    let colour = document.getElementById('accentcolorchoice3').value;
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour3', colour);
    localStorage.setItem('accentcc3', colour);
}

function colourAccentFix3(colour) {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--accentColour3', colour);
    localStorage.setItem('accentcc3', colour);
}

function setCustomsOnPageReload() {
    let chosenFont = localStorage.getItem('fontcc'); // Retrieve saved item from local storage
    chooseFont(chosenFont);
    let chosenBackgroundColour = localStorage.getItem('backgroundcc'); // Retrieve saved item from local storage
    colourBackgroundFix(chosenBackgroundColour);
    let chosenAccentColour = localStorage.getItem('accentcc');
    colourAccentFix(chosenAccentColour);
    let chosenAccentColour2 = localStorage.getItem('accentcc2');
    colourAccentFix2(chosenAccentColour2);
    let chosenAccentColour3 = localStorage.getItem('accentcc3');
    colourAccentFix3(chosenAccentColour3);
    console.log("Customs Set")
}

function resetAllToDefault() {
    colourBackgroundFix("#FFFFFF");
    colourAccentFix("#1c4769");
    colourAccentFix2("#225881");
    colourAccentFix3("#ebefff");
    chooseFont("Arial");

}

var leftnav = true;
var rightnav = true;
var navfix = false;

function openLeftSideBar() {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--leftsidestatus', "200px");
    localStorage.setItem('leftsidestatus', "200px")
    document.getElementById("leftsidenav").style.width = localStorage.getItem('leftsidestatus');
    document.getElementById("main").style.marginLeft = localStorage.getItem('leftsidestatus');
    document.getElementById("openleft").style.marginLeft = "200px";
    leftnav = true;
    if (navfix == true) {
        document.getElementById("main").style.opacity = 0.5;
        closeRightSideBar()
        localStorage.setItem('leftsidestatus', "0px")
        document.getElementById("main").style.marginLeft = localStorage.getItem('leftsidestatus');
    }

}

function closeLeftSideBar() {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--leftsidestatus', "0px");
    localStorage.setItem('leftsidestatus', "0px")
    document.getElementById("leftsidenav").style.width = localStorage.getItem('leftsidestatus');
    document.getElementById("main").style.marginLeft = localStorage.getItem('leftsidestatus');
    document.getElementById("openleft").style.marginLeft = "0px";
    leftnav = false;
    if (navfix == true && rightnav != true) {
        document.getElementById("main").style.opacity = 1;
    }
}

function toggleLeftNav() {
    leftnav ? closeLeftSideBar() : openLeftSideBar();
}

// Right Nav

function openRightSideBar() {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--rightsidestatus', rightnavmax);
    localStorage.setItem('rightsidestatus', rightnavmax)
    document.getElementById("rightsidenav").style.width = localStorage.getItem('rightsidestatus');
    document.getElementById("main").style.marginRight = localStorage.getItem('rightsidestatus');
    document.getElementById("openright").style.marginRight = rightnavmax;
    rightnav = true;
    if (navfix == true) {
        document.getElementById("main").style.opacity = 0.5;
        closeLeftSideBar()
        localStorage.setItem('rightsidestatus', "0px")
        document.getElementById("main").style.marginRight = localStorage.getItem('rightsidestatus');
    }
}

function closeRightSideBar() {
    var cssvariables = document.querySelector(':root');
    cssvariables.style.setProperty('--rightsidestatus', "0px");
    localStorage.setItem('rightsidestatus', "0px")
    document.getElementById("rightsidenav").style.width = localStorage.getItem('rightsidestatus');
    document.getElementById("main").style.marginRight = localStorage.getItem('rightsidestatus');
    document.getElementById("openright").style.marginRight = "0px";
    rightnav = false;
    if (navfix == true && leftnav != true) {
        document.getElementById("main").style.opacity = 1;
    }
}

function toggleRightNav() {
    rightnav ? closeRightSideBar() : openRightSideBar();
}

window.addEventListener('load', () => {
    startQueries()
})

const startQueries = () => {
    const mediaQuery1035 = window.matchMedia('(max-width: 1035px)')
    const mediaQuery500 = window.matchMedia('(max-width: 790px)')
    const mediaQuery501 = window.matchMedia('(min-width: 791px)')
    if (mediaQuery1035.matches && mediaQuery501.matches) {
        closeLeftSideBar();
        closeRightSideBar();
        rightnavmax = 400;
    }
    else if (mediaQuery500.matches) {
        closeLeftSideBar();
        closeRightSideBar();
        rightnavmax = 200;
        navfix = true;
    }
    else {
        openLeftSideBar();
        openRightSideBar();
        rightnavmax = 400;
    }
}

var rightnavmax = 400;

function displayPriorities() {
    var tptitle = localStorage.getItem('topPriority');
    document.getElementById("tptitle").innerHTML = tptitle;

    var tpnotes = localStorage.getItem('topNotes');
    document.getElementById("tpnotes").innerHTML = tpnotes;

    var sctitle = localStorage.getItem('secondPriority');
    document.getElementById("sctitle").innerHTML = sctitle;

    var scnotes = localStorage.getItem('secondNotes');
    document.getElementById("scnotes").innerHTML = scnotes;

    var thtitle = localStorage.getItem('thirdPriority');
    document.getElementById("thtitle").innerHTML = thtitle;

    var thnotes = localStorage.getItem('thirdNotes');
    document.getElementById("thnotes").innerHTML = thnotes;
}

var toppri;
var topnot;
var secpri;
var secnot;
var thipri;
var thinot;

function setTopPriority() {
    toppri = document.getElementById("topPriorityEntry").value;
    localStorage.setItem('topPriority', toppri);
    displayPriorities();
}

function setTopNotes() {
    topnot = document.getElementById("topNotesEntry").value;
    localStorage.setItem('topNotes', topnot);
    displayPriorities();
}

function setSecondPriority() {
    secpri = document.getElementById("secondPriorityEntry").value;
    localStorage.setItem('secondPriority', secpri);
    displayPriorities();
}

function setSecondNotes() {
    secnot = document.getElementById("secondNotesEntry").value;
    localStorage.setItem('secondNotes', secnot);
    displayPriorities();
}

function setThirdPriority() {
    thipri = document.getElementById("thirdPriorityEntry").value;
    localStorage.setItem('thirdPriority', thipri);
    displayPriorities();
}

function setThirdNotes() {
    thinot = document.getElementById("thirdNotesEntry").value;
    localStorage.setItem('thirdNotes', thinot);
    displayPriorities();
}

function calenderDay() {
    const d = new Date();
    let day = d.getDate();
    if (day == '1') {
        document.getElementById("day1").className = "active";
    }
    else if (day == '2') {
        document.getElementById("day2").className = "active";
    }
    else if (day == '3') {
        document.getElementById("day3").className = "active";
    }
    else if (day == '4') {
        document.getElementById("day4").className = "active";
    }
    else if (day == '5') {
        document.getElementById("day5").className = "active";
    }
    else if (day == '6') {
        document.getElementById("day6").className = "active";
    }
    else if (day == '7') {
        document.getElementById("day7").className = "active";
    }
    else if (day == '8') {
        document.getElementById("day8").className = "active";
    }
    else if (day == '9') {
        document.getElementById("day9").className = "active";
    }
    else if (day == '10') {
        document.getElementById("day10").className = "active";
    }
    else if (day == '11') {
        document.getElementById("day11").className = "active";
    }
    else if (day == '12') {
        document.getElementById("day12").className = "active";
    }
    else if (day == '13') {
        document.getElementById("day13").className = "active";
    }
    else if (day == '14') {
        document.getElementById("day14").className = "active";
    }
    else if (day == '15') {
        document.getElementById("day15").className = "active";
    }
    else if (day == '16') {
        document.getElementById("day16").className = "active";
    }
    else if (day == '17') {
        document.getElementById("day17").className = "active";
    }
    else if (day == '18') {
        document.getElementById("day18").className = "active";
    }
    else if (day == '19') {
        document.getElementById("day19").className = "active";
    }
    else if (day == '20') {
        document.getElementById("day20").className = "active";
    }
    else if (day == '21') {
        document.getElementById("day21").className = "active";
    }
    else if (day == '22') {
        document.getElementById("day22").className = "active";
    }
    else if (day == '23') {
        document.getElementById("day23").className = "active";
    }
    else if (day == '24') {
        document.getElementById("day24").className = "active";
    }
    else if (day == '25') {
        document.getElementById("day25").className = "active";
    }
    else if (day == '26') {
        document.getElementById("day26").className = "active";
    }
    else if (day == '27') {
        document.getElementById("day27").className = "active";
    }
    else if (day == '28') {
        document.getElementById("day28").className = "active";
    }
    else if (day == '29') {
        document.getElementById("day29").className = "active";
    }
    else if (day == '30') {
        document.getElementById("day30").className = "active";
    }
    else if (day == '31') {
        document.getElementById("day31").className = "active";
    }
}

function loadCustomData() {
    setCustomsOnPageReload();
    displayPriorities();
    calenderDay();
}