// function chooseDaysType() {
//     document.getElementById("days").classList.toggle("show");
// }

// function chooseMeasureType() {
//     document.getElementById("measure").classList.toggle("show");


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const weekPreset = document.getElementById('week');
const monthPreset = document.getElementById('month');

const startInput = document.getElementById('start');
const endInput = document.getElementById('end');

const daysTypeSelect = document.getElementById('days-type') 
// const allDaysChoose = document.getElementById('all')
// const workDaysChoose = document.getElementById('work')
// const weekendDaysChoose = document.getElementById('weekend')

const measureDays = document.getElementById('measure')
// const measureDays = document.getElementById('days')
// const measureHours = document.getElementById('hours')
// const measureMinutes = document.getElementById('minutes')
// const measureSeconds = document.getElementById('seconds')


weekPreset.addEventListener('click', clickPresetWeek);
monthPreset.addEventListener('click', clickPresetMonth)

startInput.addEventListener('change', changeInput);
endInput.addEventListener('change', changeInput);

daysTypeSelect.addEventListener('change', selectType);

// allDaysChoose.addEventListener('click', selectAllDays);
// workDaysChoose.addEventListener('click', selectWorkDays);
// weekendDaysChoose.addEventListener('click', selectWeekends);
measureDays.addEventListener('change', selectMeasure)
// measureDays.addEventListener('click', countDays)
// measureHours.addEventListener('click', countHours)
// measureMinutes.addEventListener('click', countMinutes)
// measureSeconds.addEventListener('click', countSeconds)

const values = {
  start: '',
  end: '',
}

function changeInput(e) {
  const value = e.target.value;
  const name = e.target.name;

  values[name] = value
}

function validateByDate () {
  if ( new Date(values.start) > new Date(values.end)) {
    document.getElementById("calculate").setAttribute('disabled', true)
  }
}

function clickPresetWeek() {
    const startDate = new Date(values.start)
    const endDate = new Date(startDate.getTime() + (7 * 24 * 60 * 60 * 1000));  
    values.end = endDate.toISOString().substring(0, 10);
    endInput.value = values.end; 
}

function clickPresetMonth() {
  const startDate = new Date(values.start);
  const startMonth = startDate.getMonth();
  const year = startDate.getFullYear();
  const daysInMonth = new Date(year, startMonth + 1, 0).getDate();
  const endDate = new Date(startDate.getTime() + (daysInMonth * 24 * 60 * 60 * 1000));
  values.end = endDate.toISOString().substring(0, 10);
  endInput.value = values.end;
}


function selectType() {
const selectedOption = daysTypeSelect.value
  if (selectedOption === 'default') {
    console.log('test')
  } else if (selectedOption === 'all') {
    console.log('by default')
  }
  else if (selectedOption === 'work') {
    //get range between start and end date -> select days by getDay() -> 1-5
  } 
  else if( selectedOption === 'weekend') {
     //get range between start and end date -> select days by getDay() -> 6,0
  } 
}

function selectMeasure() {
  const selectedMeasure = measureDays.value
  if (selectedMeasure === 'default') {  
  } else if ( selectedMeasure === 'days' ) {
    const getDaysNumber = new Date (values.end) - new Date (values.start)
    const daysMeasure = getDaysNumber / 1000 / 60 / 60 / 24
  } else if ( selectedMeasure === 'hours' ) {
    const getHoursNumber = new Date (values.end) - new Date (values.start)
    const hoursMeasure = getHoursNumber / 1000 / 60 / 60 
  } else if ( selectedMeasure === 'minutes' ) {
    const getMinutesNumber = new Date (values.end) - new Date (values.start)
    const minutesMeasure = getMinutesNumber / 1000 / 60
  } else if (  selectedMeasure === 'seconds' ) {
    const getSecondsNumber = new Date (values.end) - new Date (values.start)
    const secondsMeasure = getSecondsNumber / 1000
    console.log(secondsMeasure) 
  }

}

// function countDays() {
//   const getDaysNumber = new Date (values.end) - new Date (values.start)
//   const daysMeasure = getDaysNumber / 1000 / 60 / 60 / 24

//   console.log(daysMeasure)
// }

// function countHours() {
//   const getHoursNumber = new Date (values.end) - new Date (values.start)
//   const hoursMeasure = getHoursNumber / 1000 / 60 / 60
// }

// function countMinutes() {
//   const getMinutesNumber = new Date (values.end) - new Date (values.start)
//   const minutesMeasure = getMinutesNumber / 1000 / 60
// }

// function countSeconds() {
//   const getSecondsNumber = new Date (values.end) - new Date (values.start)
//   const secondsMeasure = getSecondsNumber / 1000 
// }

