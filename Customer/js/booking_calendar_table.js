const tableCalendar = document.querySelector("#booking_table_calendar");

const remainTableWithCat = document.querySelector("#remain_table_with_cat");
const remainTableWithDog = document.querySelector("#remain_table_with_dog");

const todayDate = new Date();

let todayYear = todayDate.getFullYear();
let todayMonth = todayDate.getMonth();

const currentMonth = document.querySelector("#current_month");
const nextMonthButton = document.querySelector("#next_month");

nextMonthButton.addEventListener("click", function(e) {

    e.preventDefault();

    currentMonth++;

    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createTableCalendar(todayYear, todayMonth);

});

async function getRemainTableWithCat(year, month) {
    
    try {

        const response = await fetch("../Customer/php/booking_calendar_month.php", {

        })

    } catch(error) {
        console.error(error);
    }
}


function createTableCalendar(year, month) {

}

function monthName(month) {
    return ["January","February","March","April","May","June", "July","August","September","October","November","December"][month];
}

async function getRemainTableWithCat(selectedDate) {

    try {
        const response = await fetch("../Customer/php/booking_calendar_table.php", {
            method: "GET",
            credentials: "include"
        })

        const data = await repsponse.json();
    } catch(error) {
        console.error(error);
    }
    
}

createTableCalendar(todayYear, todayMonth);