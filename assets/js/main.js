
//icon toggle
const iconToggle = (icon1, icon2) => {
    icon1.classList.toggle('d-none');
    icon2.classList.toggle('d-none');
};
//


const closeBtn = document.querySelector('.closeBtn');
const notifyPart = document.querySelector('.notification');

closeBtn.addEventListener('click', ()=>{
    notifyPart.classList.add('hidden');
});