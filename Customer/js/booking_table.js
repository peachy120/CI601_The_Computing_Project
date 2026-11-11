const bookingTableForm = document.querySelector("#booking_table_form");

const bookingDate = bookingTableForm.querySelector("#booking_table_date");
const bookingStartTime = bookingTableForm.querySelector("#booking_table_startTime");
const bookingWith = bookingTableForm.querySelector("input[name='booking_table_with']:checked");
const bookingMinorNo = bookingTableForm.querySelector("#booking_table_minor_no");
const bookingAdultNo = bookingTableForm.querySelector("#booking_table_adult_no");
const bookingElderlyNo = bookingTableForm.querySelector("#booking_table_elderly_no");
const bookingWheelchair = bookingTableForm.querySelector("#booking_table_wheelchair");
const bookingDescription = bookingTableForm.querySelector("#booking_table_description");
const bookingAgreeRules = bookingTableForm.querySelector("input[name='booking_table_agree_rules']:checked");

const hint_bookingDate_empty = bookingTableForm.querySelector("#hint_booking_table_date_empty");
const hint_bookingDate_invalid = bookingTableForm.querySelector("#hint_booking_table_date_invalid");
const hint_bookingDate_far = bookingTableForm.querySelector("#hint_booking_table_date_far");
const hint_bookingStartTime_empty = bookingTableForm.querySelector("#hint_booking_table_startTime_empty");
const hint_bookingStartTime_invalid = bookingTableForm.querySelector("#hint_booking_table_startTime_invalid");
const hint_bookingWith_empty = bookingTableForm.querySelector("#hint_booking_table_with_empty");
const hint_bookingMinorNo_empty = bookingTableForm.querySelector("#hint_booking_table_minor_no_empty");
const hint_bookingMinorNo_invalid = bookingTableForm.querySelector("#hint_booking_table_minor_no_invalid");
const hint_bookingAdultNo_empty = bookingTableForm.querySelector("#hint_booking_table_adult_no_empty");
const hint_bookingAdultNo_invalid = bookingTableForm.querySelector("#hint_booking_table_adult_no_invalid");
const hint_bookingElderlyNo_empty = bookingTableForm.querySelector("#hint_booking_table_elderly_no_empty");
const hint_bookingElderlyNo_invalid = bookingTableForm.querySelector("#hint_booking_table_elderly_no_invalid");
const hint_bookingNoAdultNoElderly = bookingTableForm.querySelector("#hint_booking_table_no_adult_elderly");
const hint_bookingWheelchair_empty = bookingTableForm.querySelector("#hint_booking_table_wheelchair_empty");
const hint_bookingAgreeRules_empty = bookingTableForm.querySelector("#hint_booking_table_agree_rules_empty");

const bookingTableFormButton = bookingTableForm.querySelector("#booking_table_form_button");

bookingTableFormButton.addEventListener("click", function(e) {

    e.preventDefault();   

    date = bookingDate.value.trim();
    startTime = bookingStartTime.value.trim();
    withSelected = bookingWith ? bookingWith : null;
    minorNo = bookingMinorNo.value;
    adultNo = bookingAdultNo.value;
    elderlyNo = bookingElderlyNo.value;
    wheelchair = bookingWheelchair.value.trim();
    description = bookingDescription.value.trim();
    agreeRules = bookingAgreeRules ? bookingAgreeRules : null;

    let dataOK = true;

    const dateStr = new Date(date);

    const todayDate = new Date();

    const after2MonthDate = new Date();
    after2MonthDate.setMonth(todayDate.getMonth() + 2);

    if (date === "") {
        hint_bookingDate_empty.classList.add("display");
        hint_bookingDate_invalid.classList.remove("display");
        hint_bookingDate_far.classList.remove("display");
        dataOK = false;
    } else if (dateStr < todayDate) {
        hint_bookingTableDate_empty.classList.remove("display");
        hint_bookingDate_invalid.classList.add("display");
        hint_bookingDate_far.classList.remove("display");
        dataOK = false;
    } else if (dateStr > after2MonthDate) {
        hint_bookingTableDate_empty.classList.remove("display");
        hint_bookingDate_invalid.classList.remove("display");
        hint_bookingDate_far.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingTableDate_empty.classList.remove("display");
        hint_bookingDate_invalid.classList.remove("display");
        hint_bookingDate_far.classList.remove("display");
    }

    const timeSelected = timeToMinutes(startTime);

    const openingTime = 10 * 60;
    const lastOrderTime = 19 * 60;

    if (startTime === "") {
        hint_bookingStartTime_empty.classList.add("display");
        hint_bookingStartTime_invalid.classList.remove("display");
        dataOK = false;
    } else if (timeSelected < openingTime || timeSelected > lastOrderTime) {
        hint_bookingStartTime_empty.classList.remove("display");
        hint_bookingStartTime_invalid.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingStartTime_empty.classList.remove("display");
        hint_bookingStartTime_invalid.classList.remove("display");
    }

    if (withSelected === null) {
        hint_bookingWith_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingWith_empty.classList.remove("display");
    }

    if (minorNo === "") {
        hint_bookingMinorNo_empty.classList.add("display");
        hint_bookingMinorNo_invalid.classList.remove("display");
        dataOK = false;
    } else if (minorNo < 0) {
        hint_bookingMinorNo_empty.classList.remove("display");
        hint_bookingMinorNo_invalid.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingMinorNo_empty.classList.remove("display");
        hint_bookingMinorNo_invalid.classList.remove("display");
    }

    if (adultNo === "") {
        hint_bookingAdultNo_empty.classList.add("display");
        hint_bookingAdultNo_invalid.classList.remove("display");
        dataOK = false;
    } else if (adultNo < 0) {
        hint_bookingAdultNo_empty.classList.remove("display");
        hint_bookingAdultNo_invalid.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingAdultNo_empty.classList.remove("display");
        hint_bookingAdultNo_invalid.classList.remove("display");
    }

    if (elderlyNo === "") {
        hint_bookingElderlyNo_empty.classList.add("display");
        hint_bookingElderlyNo_invalid.classList.remove("display");
        dataOK = false;
    } else if (elderlyNo < 0) {
        hint_bookingElderlyNo_empty.classList.remove("display");
        hint_bookingElderlyNo_invalid.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingElderlyNo_empty.classList.remove("display");
        hint_bookingElderlyNo_invalid.classList.remove("display");
    }

    if (elderlyNo === 0 && adultNo === 0 && minorNo !== 0) {
        hint_bookingNoAdultNoElderly.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingNoAdultNoElderly.classList.remove("display");
    }

    if (wheelchair === "") {
        hint_bookingWheelchair_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingWheelchair_empty.classList.remove("display");
    }

    if (agreeRules === null) {
        hint_bookingAgreeRules_empty.classList.add("display");
        dataOK = false;
    } else {
        hint_bookingAgreeRules_empty.classList.remove("display");
    }

    if (dataOK) {
        //bookingTableForm.submit();

        console.log("Date: " + date);
        console.log("Start Time:" + startTime);
        console.log("With: " + withSelected);
        console.log("Number of Minor Guest: " + minorNo);
        console.log("Number of Adult Guest: " + adultNo);
        console.log("Number of Elderly Guest: " + elderlyNo);
        console.log("Description: " + description);
        console.log("Agree Rule? " + agreeRules);
    }

})

function timeToMinutes(time) {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
}