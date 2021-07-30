const inputTask = document.querySelector('#inputTask')

//when press Enter in input box
const pressEnter = (event) => {
    const x = event.key
    if(x === 'Enter') clickCallback() //1.2) if Enter was pressed, call clickCallback
}

//when add task button clicked
const clickCallback = () => {
    
}