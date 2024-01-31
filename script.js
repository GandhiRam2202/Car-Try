const container = document.createElement('div')
container.setAttribute('class','container-fluid text-center')
document.body.append(container)

const h1 = document.createElement('h1')
h1.innerText = 'CAR SIMULATOR'
container.append(h1)

const conta = document.createElement('div')
conta.classList.add('container')
document.body.append(conta)

const row1 = document.createElement('div')
row1.classList.add('row')
conta.append(row1)


const col1 = document.createElement('div')
col1.setAttribute('class','col-sm-12 col-md-12 col-lg-6')
row1.append(col1)

const col2 = document.createElement('div')
col2.setAttribute('class','col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center')
row1.append(col2)

const img = document.createElement('img')
img.setAttribute('src','./1.png')
col2.append(img)

const row2 = document.createElement('div')
row2.classList.add('row')
col1.append(row2)

const display = document.createElement('div')
display.id = 'display'
display.setAttribute('class','text-center')
row2.append(display)

const carName = document.createElement('div')
display.appendChild(carName)



const row3 = document.createElement('div')
row3.setAttribute('class','row')
row2.append(row3)

const form = document.createElement('form')
form.setAttribute('class','d-flex justify-content-evenly')
row3.append(form)

// const startDiv = document.createElement('div')
// startDiv.setAttribute('class','col-6')
// form.append(startDiv)



const startLabel = document.createElement('label')
startLabel.setAttribute('for','startRadio')
form.append(startLabel)
startLabel.innerText = 'START'

const startRadio = document.createElement('input')
startRadio.setAttribute('type','radio')
startRadio.setAttribute('id','startRadio')
startRadio.setAttribute('value','Started')
startRadio.setAttribute('name','car')
form.append(startRadio)

startRadio.addEventListener('click',function(){
    carName.innerText = car.getComp();
})


// const stopDiv = document.createElement('div')
// stopDiv.setAttribute('class','col-6')
// form.append(stopDiv)

const stopLabel = document.createElement('label')
stopLabel.setAttribute('for','stopRadio')
form.append(stopLabel)
stopLabel.innerText = 'STOP'

const stopRadio = document.createElement('input')
stopRadio.setAttribute('type','radio')
stopRadio.setAttribute('id','stopRadio')
stopRadio.setAttribute('value','Stoped')
stopRadio.setAttribute('name','car')
form.append(stopRadio)

const startBtn = document.createElement('button')
startBtn.setAttribute('type','button')
startBtn.setAttribute('class','button')
startBtn.setAttribute('onclick','getValue()')
startBtn.innerText = 'START'
form.append(startBtn)
startBtn.setAttribute('style','display:none')


// const value = document.getElementById('startRadio').value
// const value1 = document.getElementById('stopRadio').value
// console.log(value,value1)

const gearUpDiv = document.createElement('div')
gearUpDiv.setAttribute('class','row m-0 p-0')
row2.append(gearUpDiv)


const gearUpBtn = document.createElement('button')
gearUpBtn.innerText = 'GEAR UP'
gearUpDiv.append(gearUpBtn)

const gearDownDiv = document.createElement('div')
gearDownDiv.setAttribute('class','row m-0 p-0')
row2.append(gearDownDiv)


const gearDownBtn = document.createElement('button')
gearDownBtn.innerText = 'GEAR DOWN'
gearDownDiv.append(gearDownBtn)

const turn = document.createElement('div')
turn.setAttribute('class','row m-0 p-0')
row2.append(turn)

const turnCol1 = document.createElement('div')
turnCol1.setAttribute('class','col-6')
turn.append(turnCol1)

const col1Row = document.createElement('div')
col1Row.setAttribute('class','row m-0 p-0')
turnCol1.append(col1Row)

const leftBtn = document.createElement('button')
leftBtn.innerText = 'LEFT'
col1Row.append(leftBtn)

const turnCol2 = document.createElement('div')
turnCol2.setAttribute('class','col-6')
turn.append(turnCol2)

const col2Row = document.createElement('div')
col2Row.setAttribute('class','row m-0 p-o')
turnCol2.append(col2Row)

const rightBtn = document.createElement('button')
rightBtn.innerText = 'RIGHT'
col2Row.append(rightBtn)

const row4 = document.createElement('div')
row4.setAttribute('class','row m-0 p-0')
row2.append(row4)

const getCarDet =  document.createElement('button')
getCarDet.innerText = 'GET CAR DETAILS'
row4.append(getCarDet)


const carColor = document.createElement('p')
carColor.setAttribute('class','text-center')
row2.append(carColor)
const carComp = document.createElement('p')
carComp.setAttribute('class','text-center')
row2.append(carComp)
const carMaxGear = document.createElement('p')
carMaxGear.setAttribute('class','text-center')
row2.append(carMaxGear)
const carEngine = document.createElement('p')
carEngine.setAttribute('class','text-center')
row2.append(carEngine)

getCarDet.addEventListener('click',function(){
    carColor.innerText =`Color : ${car.getcolor()}`;
    carComp.innerText = `Company : ${car.getComp()}`;
    carMaxGear.innerText = `MaxGear : ${car.getMaxGear()}`;
    carEngine.innerText = `Engine : ${car.getEngine()}`;
})



class Car{
    constructor(color='white',company='BMW',maxGear = 5,engine = 'V8')
    {
        this.engine = engine,
        this.color = color,
        this.company = company,
        this.maxGear = maxGear,
        this.gearPosition = 0
    }
    start()
    {
        return `Strating.........`
    }
    stop()
    {
        this.gearPosition = 0;

        
    }
    gearUp()
    {
        if(this.gearPosition !== this.maxGear)
        {
        this.gearPosition += 1;
        return this.gearPosition; 
        }
        else
        {
            return `Already Max Gear`
        }
    }
    gearDown()
    {
        if(this.gearPosition !== 0)
        {
            this.gearPosition -= 1;
            return this.gearPosition;
        }
        else
        {
            return `Already Gear Nuteral`
        }
    }

    getcolor()
    {
        return this.color;
    }
    getComp(){
        return this.company
    }
    getMaxGear(){
        return this.maxGear;
    }
    getEngine(){
        return this.engine;
    }

    

}

const car = new Car('Black','AUID')



startRadio.addEventListener('click',function(){
    const startValue = document.getElementById('startRadio').value
    display.innerText = startValue
})

stopRadio.addEventListener('click',function(){
    const stopValue = document.getElementById('stopRadio').value
    car.stop();
    display.innerText = stopValue
})


function getValue(){
let radioValue = document.getElementsByName('car')
    for(let ind = 0 ; ind < radioValue.length ; ind++)
    {
        if(radioValue[ind].checked){
            return value = radioValue[ind].value
 
        }
    }
}




gearUpBtn.addEventListener('click',function(){
    
    

    if(getValue() === 'Started')
    {
        display.innerText = car.gearUp();
    }
    else
    {
        display.innerText = `First Start The Car`;
    }
})

gearDownBtn.addEventListener('click',function(){

    if(getValue() === 'Started')
    {
    display.innerText = car.gearDown();
    }
    else
    {
        display.innerText = 'First Start The Car'
    }
})

let rotate=0;
rightBtn.addEventListener('click',function(){

    if(getValue() === 'Started')
    {
        rotate += 10;
        if(rotate <= 40)
        {
        img.setAttribute('style',`transform:rotate(${rotate+'deg'})`)
    
        }
    }
    else
    {
        display.innerText = `First Start The Car`;
    }



   
})

leftBtn.addEventListener('click',function(){

    if(getValue() === 'Started')
    {
        rotate -= 10;
    if(rotate >= -40)
    {
    img.setAttribute('style',`transform:rotate(${rotate+'deg'})`)

    }
    }
    else
    {
        display.innerText = `First Start The Car`;
    }





    
})