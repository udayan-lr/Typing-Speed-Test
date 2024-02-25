//let speed= (words/timetaken)*60;
const textarea = document.querySelector('#textarea');
const check = document.querySelector('#check');
const stats = document.querySelector('#stats');
const accuracy = document.querySelector('#accuracy');
const para = document.querySelector('#para');
let st,et,tt;
const calcSpeedAndAccuracy = () => {
    let total = textarea.value.trim();
    let typedWords = total.split(/\s+/).filter(word => word !== '').length;
    let actualWords = para.innerText.trim().split(/\s+/).length;
    let speed = Math.round((typedWords / tt) * 60);
    let acc = Math.round((typedWords / actualWords) * 100);
    tt = Math.round(tt);
    stats.innerHTML = `Speed:   ${speed} wpm`;
    accuracy.innerHTML = `Accuracy: ${acc} %`;
    time_taken.innerHTML = `Time taken: ${tt} seconds`;
}
const start = () => {
    let random = Math.floor(Math.random() * paragraphs.length);
    para.innerHTML=paragraphs[random];
    let date = new Date();
    st = date.getTime();
    textarea.value=""
    stats.innerHTML = `&nbsp`;
    accuracy.innerHTML = `&nbsp`;
    time_taken.innerHTML = `&nbsp`;
    check.innerText = "end";
    textarea.placeholder = "Start typing...";
}
const end = () => {
    check.innerText = "start";
    let date = new Date();
    et = date.getTime();
    tt = (et - st)/1000;
    calcSpeedAndAccuracy();
    para.innerHTML = "Paragraph will appear in this box once you start";
    textarea.value=""
    textarea.placeholder = "Press Enter to start again";
}
textarea.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        switch(check.innerText) {
            case "start":
                start();
                break;
            case "end":
                end();
                break;
        }
    }
});