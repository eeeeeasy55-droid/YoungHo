// const Button=document.querySelector('button');
// const Section=document.querySelectorAll('section');

// Section.forEach((index)=>{
//     Button.addEventListener('click', ()=>{
//         if(Section.classList.contains('active')){
//             Section.classList.remove('active');
//         }else{
//             Section.classList.add('active');
//         }
//     })
// })
const buttons = document.querySelectorAll('.btn');
const sections = document.querySelectorAll('section');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const target = button.getAttribute('data-target');

        // 모든 섹션 숨기기
        sections.forEach(sec => sec.classList.remove('active'));

        // 타겟 섹션 보여주기
        // 클래스명으로 찾거나 ID로 찾아서 처리
        const targetSection = document.querySelector('.' + target) || document.getElementById(target);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});