const count = document.querySelector('.count');
const minusBtn = document.querySelector('.minus-btn');
const plusBtn = document.querySelector('.plus-btn');
const changeby = document.querySelector('.changeby');
const resetBtn = document.querySelector('.reset-btn');



plusBtn.addEventListener('click', () => {
const countValue = parseInt(count.innerText)
const changebyValue = parseInt(changeby.value)
count.innerText = countValue + changebyValue

})


minusBtn.addEventListener('click', () => {
    const countValue = parseInt(count.innerText)
    const changebyValue = parseInt(changeby.value)
count.innerText = countValue - changebyValue

    
    })


resetBtn.addEventListener('click', () => {
count.innerText = 0
})

