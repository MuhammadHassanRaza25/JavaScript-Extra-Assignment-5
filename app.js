// JavaScript Extra Assignment 5 //

// 1st January will be a Sunday between 2024 and 2050

for (let i = 2024; i <= 2050; i++) {
    let date = new Date(`1 Jan ${i}`)
    let day = date.getDay()
    if(day == '0'){
        document.write(`<h2>${date}</h2>`);
    }
}

// 0 means sunday
// other days 1 2 3 4 5 6



