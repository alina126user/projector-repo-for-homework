// const turnOffButton = document.getElementById('switchOff')
const button = document.getElementById('switchOn')
const lastDate = document.getElementById('date');
const backgroundColorLight = document.querySelector('light')
const backgroundColorDark = document.querySelector('dark')
const container = document.querySelector('container')
const texts = []
let mode = 'DARK'

// turnOffButton.addEventListener('click', darkState)
// turnOffButton.addEventListener('click', setDateValue)
button.addEventListener('click', handleButtonClick)
// turnOnButton.addEventListener('click', setDateValue)

// function darkState() {
//     turnOffButton.hidden = true;
//     turnOnButton.hidden = false;
// }

// function lightState() {
//     turnOnButton.hidden = true
//     turnOffButton.hidden = false
// }

function handleButtonClick(e) {
    if (mode === 'DARK') {
       mode = 'LIGHT';
       container.classList.add('light')
       container.classList.remove('dark')
       button.innerHTML = 'Turn off';
    } else {
       mode = 'DARK';
       container.classList.add('dark')
       container.classList.remove('light')
       button.innerHTML = 'Turn on';
    }
  }

function setDateValue() {
    const date = new Date().toISOString().substring(0, 19);

    let dateTitle = document.createElement('p');
    dateTitle.textContent = date;
    lastDate.appendChild(dateTitle);

    const dateSet = texts.slice(-1);
    localStorage.setItem('lastDate', JSON.stringify(dateSet));
  
    displayDate();

    if (mode === 'DARK'){
        return texts.push(`Last turn on: ${date}`);
     } 
     else {
         return texts.push(`Last turn off: ${date}`);
     }
}


function  displayDate() {
    const getDate = JSON.parse(localStorage.getItem('lastDate'));
  
    const dateSet = document.getElementById('date');
    dateSet.innerHTML = '';
  
    getDate.forEach(value => {
      const dateTitle = document.createElement('p');
      dateTitle.textContent = value;
      dateSet.appendChild(dateTitle);
    });
  }
   
  displayDate();
  
