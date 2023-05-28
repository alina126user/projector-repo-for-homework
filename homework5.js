const turnOffButton = document.getElementById('switchOff')
const turnOnButton = document.getElementById('switchOn')
const lastDate = document.getElementById('date');
const backgroundColorLight = document.querySelector('backgroundLight')
const backgroundColorDark = document.querySelector('backgroundDark')
const texts = []

turnOffButton.addEventListener('click', darkState)
turnOffButton.addEventListener('click', setDateValue)
turnOnButton.addEventListener('click', lightState)
turnOnButton.addEventListener('click', setDateValue)

function darkState() {
    turnOffButton.hidden = true;
    turnOnButton.hidden = false;
}

function lightState() {
    turnOnButton.hidden = true
    turnOffButton.hidden = false
}

function colorFunction() {

}

function setDateValue() {
    const date = new Date().toISOString().substring(0, 19);

    let dateTitle = document.createElement('p');
    dateTitle.textContent = date;
    lastDate.appendChild(dateTitle);

    const dateSet = texts.slice(-1);
    localStorage.setItem('lastDate', JSON.stringify(dateSet));
  
    displayDate();

    if (turnOffButton.hidden){
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
  
