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
const list = document.getElementById('myList');
const texts = []

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
  validateByDate();
}

function validateByDate() {
  if (new Date(values.start) > new Date(values.end)) {
    calculateTime.setAttribute('disabled', true);
  } else {
    calculateTime.removeAttribute('disabled');
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
  if (selectedOption === 'default' || selectedOption === 'all') {
    const date = new Date(values.start)
    const dateEnd = new Date(values.end)
    let dateCount = 0
    while(date < dateEnd) {
          ++dateCount
       date.setDate(date.getDate() + 1);
    } 
    return dateCount
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
    return dateCount
  } 
  else if( selectedOption === 'weekend') {
    const date = new Date(values.start)
    const dateEnd = new Date(values.end)
    let dateCount = 0
    while(date <= dateEnd) {
     const dayOfWeek = date.getDay()
       if(dayOfWeek > 5 || dayOfWeek < 1) {
          dateCount++
       }
       date.setDate(date.getDate() + 1);
    } 
    return dateCount
  } 


}


function selectMeasure() {
  const selectedMeasure = measureDays.value
  if (selectedMeasure === 'default') { 
    return  measureDays.value
  } else if ( selectedMeasure === 'days' ) {
    const getDaysNumber = new Date (values.end) - new Date (values.start)
    const daysMeasure = getDaysNumber / 1000 / 60 / 60 / 24
    return daysMeasure
  } else if ( selectedMeasure === 'hours' ) {
    const getHoursNumber = new Date (values.end) - new Date (values.start)
    const hoursMeasure = getHoursNumber / 1000 / 60 / 60 
    return hoursMeasure
  } else if ( selectedMeasure === 'minutes' ) {
    const getMinutesNumber = new Date (values.end) - new Date (values.start)
    const minutesMeasure = getMinutesNumber / 1000 / 60
    return minutesMeasure
  } else if (  selectedMeasure === 'seconds' ) {
    const getSecondsNumber = new Date (values.end) - new Date (values.start)
    const secondsMeasure = getSecondsNumber / 1000
    return secondsMeasure
  }

}

function calculateResultShowing() {
  if (new Date(values.start) > new Date(values.end) || isNaN(new Date(values.start)) || isNaN(new Date(values.end))) {
    return calculateTime.setAttribute('disabled', true);
  }

  const selectedOption = daysTypeSelect.value;
  const selectedMeasure = measureDays.value;

  let resultText = '';

  if (selectedOption === 'work') {
    resultText = `In ${selectType()} days we have ${selectMeasure()} ${selectedMeasure}.`;
  } else if (selectedOption === 'weekend') {
    resultText = `In ${selectType()} days we have ${selectMeasure()} ${selectedMeasure}.`;
  } else {
    resultText = `In ${selectType()} days we have ${selectMeasure()} ${selectedMeasure}.`;
  }

    let listItem = document.createElement('li');
    listItem.textContent = resultText;
    list.appendChild(listItem);

    texts.push(resultText);

    const lastTenTimeMeasure = texts.slice(-10);
    localStorage.setItem('recentTexts', JSON.stringify(lastTenTimeMeasure));
}






