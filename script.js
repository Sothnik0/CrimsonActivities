const Adding = document.getElementById("addTaskBtn")
const ActivityValue = document.getElementById("taskInput")
const Mother = document.getElementById("taskList")
const Card = document.getElementById("card")
const error = document.getElementById("error")

let CardDivisory = 250

let AmountActivities = []
let Elements = []

Adding.addEventListener('click', (event) => {
    event.preventDefault()
    AmountActivities.push(ActivityValue.value)
    

    if (AmountActivities.length <= 15 && ActivityValue.value != ''){
        error.innerHTML = ''
        error.style.marginTop = '0px'

        const container = document.createElement("div")
        const newActivity = document.createElement("p")
        const Eraser = document.createElement("button")
    
        Mother.appendChild(container)
        container.appendChild(newActivity)
        container.appendChild(Eraser)

        container.style.display = 'flex'
        container.style.justifyContent = 'space-between'

        Eraser.innerHTML = "X"
        Eraser.style.cursor = "pointer";
        Eraser.style.color = 'red';
        Eraser.style.backgroundColor = "#0d0c0d00"
        Eraser.style.border = 'solid #0d0c0d00 1px'

        newActivity.innerHTML = ActivityValue.value
    
        Elements.push(container)

        ActivityValue.value = ''

        if (AmountActivities.length > 7){
            CardDivisory += 32
            Card.style.height = `${CardDivisory}px`;
        }

        Eraser.addEventListener('click', (event) => {
            event.preventDefault()

            const DestructItem = AmountActivities.findIndex(p => p === `${newActivity.innerHTML}`)
            if (DestructItem !== -1) {
                AmountActivities.splice(DestructItem, 1);
            }

            Elements[DestructItem].remove();
            Elements.splice(DestructItem, 1);

            console.log(AmountActivities)
        })
        
    } else {
        CardDivisory -= 30
        error.innerHTML = "Bem... parece que temos um problema aqui..."
        error.style.color = 'white'
        error.style.marginTop = '10px'
    }
})