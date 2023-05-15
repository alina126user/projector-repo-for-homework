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
const measureDays = document.getElementById('measure')
const calculateTime = document.getElementById('calculate')

weekPreset.addEventListener('click', clickPresetWeek);
monthPreset.addEventListener('click', clickPresetMonth)

startInput.addEventListener('change', changeInput);
endInput.addEventListener('change', changeInput);

daysTypeSelect.addEventListener('change', selectType);

measureDays.addEventListener('change', selectMeasure)

calculateTime.addEventListener('click', calculateResultShowing)


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
    const date = new Date(values.start)
    const dateEnd = new Date(values.end)
    let dateCount = 0
    while(date <= dateEnd) {
     const dayOfWeek = date.getDay()
       if(0 < dayOfWeek && dayOfWeek < 6) {
          dateCount++
       }
       date.setDate(date.getDate() + 1);
    }
    console.log(dateCount)
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

function calculateResultShowing() {
  if ((new Date(values.start) > new Date(values.end)) || new Date(values.start) == NaN
  || new Date(values.end) == NaN) {
    document.getElementById("calculate").setAttribute('disabled', true)
  }


}






