const body = document.querySelector('body')

const oneBtnFirst = document.getElementById('one__btn-1')
const oneBtnSecond = document.getElementById('one__btn-2')

const secondBtnFirst = document.getElementById('two__btn-1')
const secondBtnSecond = document.getElementById('two__btn-2')
const secondBtnThree = document.getElementById('two__btn-3')
const secondBtnFourth = document.getElementById('two__btn-4')

const threeBtn = document.getElementById('three__btn')
let day = document.getElementById('day')
let month= document.getElementById('month')
let year = document.getElementById('year')

const fourBtnFirst = document.getElementById('four__btn-1')
const fourBtnSecond = document.getElementById('four__btn-2')
const fourBtnThree = document.getElementById('four__btn-3')

const fiveTextFirst = document.getElementById('fiveText-1')
const fiveTextSecond = document.getElementById('fiveText-2')
const fiveTextThree = document.getElementById('fiveText-3')


const fiveBtnFirst = document.getElementById('five__btn-1')
const fiveBtnSecond = document.getElementById('five__btn-2')


const sectionFirst = document.getElementById('first')
const oneBlock = document.getElementById('one')
const twoBlock = document.getElementById('two')
const threeBlock = document.getElementById('three')
const fourBlock =  document.getElementById('four')
const fiveBlock =  document.getElementById('five')
const sixBlock =  document.getElementById('six')



oneBtnFirst.addEventListener('click', ()=>{
    oneBlock.style.display = 'none'
    twoBlock.style.display = 'block'
})
oneBtnSecond.addEventListener('click', ()=>{
    oneBlock.style.display = 'none'
    twoBlock.style.display = 'block'
})







secondBtnFirst.addEventListener('click', ()=>{

    twoBlock.style.display = 'none'
    threeBlock.style.display = 'block'

})
secondBtnSecond.addEventListener('click', ()=>{

    twoBlock.style.display = 'none'
    threeBlock.style.display = 'block'

})
secondBtnThree.addEventListener('click', ()=>{

    twoBlock.style.display = 'none'
    threeBlock.style.display = 'block'

})
secondBtnFourth.addEventListener('click', ()=>{
    twoBlock.style.display = 'none'
    threeBlock.style.display = 'block'
}
)


    threeBtn.addEventListener('click', ()=>{
        dayVal = day.value
        monthVal = month.value;
        yearVal = year.value

        const currentYear = new Date().getFullYear();
        let age = currentYear - year.value
        
        console.log(dayVal)
        if(dayVal == 0 || monthVal ==0 || yearVal== 0){
            oneBlock.style.display = 'none'
            twoBlock.style.display = 'none'
            threeBlock.style.display= 'block' 
            fourBlock.style.display= 'none'
        
            if( dayVal ==0){
                day.style.borderColor="red"
            }else{
                day.style.borderColor="black"
            }
    
            if( monthVal ==0){
                month.style.borderColor="red"
            }else{
                month.style.borderColor="black"
            }
    
            if( yearVal ==0){
                year.style.borderColor="red"
            }else{
                year.style.borderColor="black"
            }

        }else{
            const spinner = document.getElementById('spinner')
            spinner.style.display= "block"

            let start = Date.now();
            let timer = setInterval(function(){
            let timePassed = Date.now()- start;

            if(timePassed >= 2000){
            spinner.style.display= 'none'
            fourBlock.style.display = 'block'
            clearInterval(timer);
            return;
            }
            threeBlock.style.display = 'none'
    })

    
            fourBtnFirst.addEventListener('click', ()=>{
                fourBlock.style.display = 'none'
                fiveBlock.style.display = 'block'
                if(age > 8 && age<35 ){
                    fiveTextFirst.style.display = 'block'}
     
                if(age > 36  && age<45 ){
                    fiveTextSecond.style.display ='block'
                }
                if(age > 46){
                    fiveTextThree.style.display = 'block'
                }
            })
            fourBtnSecond.addEventListener('click', ()=>{
                fourBlock.style.display = 'none'
                fiveBlock.style.display = 'block'

                if(age > 8 && age<35 ){
                    fiveTextFirst.style.display = 'block'}
     
                if(age > 36  && age<45 ){
                    fiveTextSecond.style.display ='block'
                }
                if(age > 46){
                    fiveTextThree.style.display = 'block'
                }
            })
            fourBtnThree.addEventListener('click', ()=>{
                fourBlock.style.display = 'none'
                fiveBlock.style.display = 'block'

                if(age > 8 && age<35 ){
                    fiveTextFirst.style.display = 'block'}
     
                if(age > 36  && age<45 ){
                    fiveTextSecond.style.display ='block'
                }
                if(age > 46){
                    fiveTextThree.style.display = 'block'
                }
            })
    }
})
    







fiveBtnFirst.addEventListener('click', ()=>{
    fiveBlock.style.display = 'none'
    sixBlock.style.display = 'block'
})
fiveBtnSecond.addEventListener('click', ()=>{
    fiveBlock.style.display = 'none'
    sixBlock.style.display = 'block'
})
