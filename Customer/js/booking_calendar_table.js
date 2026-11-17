const tableCalendar = document.querySelector("#booking_table_calendar");

const todayDate = new Date();

let currentYear = todayDate.getFullYear();
let currentMonth = todayDate.getMonth();

const lastMonthButton = document.querySelector("#last_month");
const currentMonthLabel = document.querySelector(".current_month");
const nextMonthButton = document.querySelector("#next_month");

const maxDate = new Date(todayDate.getFullYear(), todayDate.getMonth() + 2, todayDate.getDate());

lastMonthButton.addEventListener("click", function(e) {

    e.preventDefault();

    const lastMonth = new Date(currentYear, currentMonth - 1, 1);
    const minMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);

    if (lastMonth >= minMonth) {

        currentMonth--;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }

        createTableCalendar(currentYear, currentMonth);
    }
    
});

console.log("after last month button");


const maxMonth = new Date(todayDate.getFullYear(), todayDate.getMonth() + 2, 1);

nextMonthButton.addEventListener("click", function(e) {

    e.preventDefault();

    const nextMonth = new Date(currentYear, currentMonth, 1);

    if (nextMonth <= maxMonth) {

        currentMonth++;

        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createTableCalendar(currentYear, currentMonth);

    }
    
});

console.log("after next month button");

function updateNavigationButtons() {
    const thisMonth = new Date(currentYear, currentMonth, 1);

    const minimumMonth = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);

    const maximumMonth = new Date(maxMonth.getFullYear(), maxMonth.getMonth(), 1);

    lastMonthButton.disabled = thisMonth.getTime() === minimumMonth.getTime();
    nextMonthButton.disabled = thisMonth.getTime() === maximumMonth.getTime();
}

console.log("after function update navigation buttons");


createTableCalendar(currentYear, currentMonth);
console.log("after create create table calendar");

function createTableCalendar(year, month, day) {

    console.log("Inside funcyion create table calendar");

    tableCalendar.textContent = "";

    const monthName = ["January","February","March","April","May","June", "July","August","September","October","November","December"];
    currentMonthLabel.textContent = `${monthName[month]} ${year}`;

    const tableCalendarTable = document.createElement("table");
    tableCalendarTable.classList = "tableCalendarTable";

    const weekdayList = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const weekdayListtr = document.createElement("tr");
    weekdayList.forEach(weekday => {
        const tableCalendarth = document.createElement("th");
        tableCalendarth.textContent = weekday;
        weekdayListtr.append(tableCalendarth);
    });

    tableCalendarTable.append(weekdayListtr);

    const firstDayDate = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month +1, 0).getDate();

    let datetr = document.createElement("tr");
    for (let i = 0; i < firstDayDate; i++) {
        const tableCalendartd = document.createElement("td");
        datetr.append(tableCalendartd);
    }

    for (let calendarDay = 1; calendarDay <= daysInMonth; calendarDay++) {
        const datetd = document.createElement("td");

        const datebutton = document.createElement("button");
        datebutton.classList = "calendar_date";
        datebutton.textContent = calendarDay;

        const selectedDate = new Date(year, month, calendarDay);
        selectedDate.setHours(0,0,0,0);

        todayDate.setHours(0,0,0,0);

        const maxDate = new Date(todayDate.getFullYear, todayDate.getMonth() + 2, todayDate.getDate());
        
        if (selectedDate < todayDate) {
            datebutton.disabled = true;
        } else if (selectedDate > maxDate) {
            datebutton.disabled = true;
        } else {
            datebutton.addEventListener("click", function() {
                loadAvabililty(selectedDate);
            });
        }

        datetd.append(datebutton);
        datetr.append(datetd);

        if ((firstDayDate + calendarDay) % 7 === 0) {
            tableCalendarTable.append(datetr);
            datetr = document.createElement("tr");
        }

    }

    tableCalendarTable.append(datetr);
    tableCalendar.append(tableCalendarTable);

    updateNavigationButtons();

}
console.log("after function create table calendar")


let maxCapacityForCat = 52;
let maxCapacityForDog = 41;

const remainTableWithCat = document.querySelector("#remain_table_with_cat");
const remainTableWithDog = document.querySelector("#remain_table_with_dog");

async function loadAvabililty(selecedDate) {

    let tableBookedWithCat = 0;
    let tableBookedWithDog = 0;

    let remainingAvabilityWithCat = maxCapacityForCat;
    let remainingAvabilityWithDog = maxCapacityForDog;

    try {

        const response = await fetch(`../Customer/php/booking_calendar_table.php?date=${selecedDate}`, {
            credentials: "include"
        })

        const data = await response.json();

        if (data) {

            remainingAvabilityWithCat = maxCapacityForCat - tableBookedWithCat;
            remainingAvabilityWithDog = maxCapacityForDog - tableBookedWithDog;

            remainTableWithCat.textContent = remainingAvabilityWithCat;
            remainTableWithDog.textContent = remainingAvabilityWithDog;

        } else {
            remainTableWithCat.textContent = "Unknown";
            remainTableWithDog.textContent = "unknown";
        }

    } catch(error) {
        console.error(error);
    } 

}

console.log("after async function locad avability");