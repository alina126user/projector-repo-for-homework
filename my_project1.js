window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
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
const list = document.getElementById('recentValues');
const texts = []

weekPreset.addEventListener('click', clickPresetWeek);
monthPreset.addEventListener('click', clickPresetMonth)

startInput.addEventListener('change', changeInput);
endInput.addEventListener('change', changeInput);

daysTypeSelect.addEventListener('change', selectType);

measureDays.addEventListener('change', selectMeasure)


const values = {
  start: '',
  end: '',
}

const ONE_DAY = 24 * 60 * 60 * 1000;


function changeInput(e) {
  const value = e.target.value;
  const name = e.target.name;

  values[name] = value
  validateByDate();

  if (name === 'start') {
    if (value === '') {
      endInput.disabled = true;
    } else {
      endInput.disabled = false;
    }
  }
}

window.addEventListener('load', function() {
  if (startInput.value === '') {
    endInput.disabled = true;
  }
});

function validateByDate() {
  if (new Date(values.start) > new Date(values.end)) {
    calculateTime.setAttribute('disabled', true);
  } else {
    calculateTime.removeAttribute('disabled');
  }
}


function clickPresetWeek() {
    const startDate = new Date(values.start)
    const endDate = new Date(startDate.getTime() + (7 * ONE_DAY));  
    values.end = endDate.toISOString().substring(0, 10);
    endInput.value = values.end; 
}

function clickPresetMonth() {
  const startDate = new Date(values.start);
  const startMonth = startDate.getMonth();
  const year = startDate.getFullYear();
  const daysInMonth = new Date(year, startMonth + 1, 0).getDate();
  const endDate = new Date(startDate.getTime() + (daysInMonth * ONE_DAY));
  values.end = endDate.toISOString().substring(0, 10);
  endInput.value = values.end;
}


function selectType() {
const selectedOption = daysTypeSelect.value
const date = new Date(values.start)
const dateEnd = new Date(values.end)
let dateCount = 0
  if (selectedOption === 'default' || selectedOption === 'all') {
    while(date < dateEnd) {
          ++dateCount
       date.setDate(date.getDate() + 1);
    } 
    return dateCount
  }

  if (selectedOption === 'work') {
    while(date <= dateEnd) {
     const dayOfWeek = date.getDay()
       if(0 < dayOfWeek && dayOfWeek < 6) {
          dateCount++
       }
       date.setDate(date.getDate() + 1);
    } 
    return dateCount
  } 

 if( selectedOption === 'weekend') {
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

const timeMeasure = {
  days: 1000 * 60 * 60 * 24,
  hours: 1000 * 60 * 60,
  minutes: 1000 * 60,
  seconds: 1000,
}

function selectMeasure() {
  const selectedMeasure = measureDays.value
  if (selectedMeasure === 'default') { 
    return  measureDays.value
  }

  const difference = new Date (values.end) - new Date (values.start)

  return difference / timeMeasure[selectedMeasure]

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

  displayRecentValues();
}

function displayRecentValues() {
  const recentValues = JSON.parse(localStorage.getItem('recentTexts'));

  const list = document.getElementById('recentValues');
  list.innerHTML = '';

  recentValues.forEach(value => {
    const listItem = document.createElement('li');
    listItem.textContent = value;
    list.appendChild(listItem);
  });
}

calculateTime.addEventListener('click', calculateResultShowing);
displayRecentValues();



