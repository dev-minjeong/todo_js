const todaysDate = document.querySelector("main #date");

function getDate() {
    const today = new Date();
    const year = String(today.getFullYear()).padStart(4, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    
    todaysDate.innerText = `${year}년 ${month}월 ${day}일`;
}
getDate();
setInterval(getDate, 1000);
