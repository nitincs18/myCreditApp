import axios from "axios";

function getFormattedDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    if (month < 10) {
        month = "0" + month
    } else if (day < 10) {
        day = "0" + day
    }
    var year = today.getFullYear();
    return year + "-" + month + "-" + day;
}

export function validateField(value, error, value1) {
    for (let i = 0; i < error.length; i++) {
        if (error[i].type === "empty") {
            if (value === "" || value === null) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "length") {
            if (value.length > error[i].length) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "minLength") {
            if (value.length < error[i].length) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "maxLength") {
            if (value.length > error[i].length) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "email") {

            let atpos = value.indexOf("@");
            let dotpos = value.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= value.length) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "password") {
            let psw = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})");
            if (!psw.test(value)) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "passwordMatch") {
            if (value !== value1 && (value !== undefined && value1 !== undefined)) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "mobileNumber") {
            let phoneno = /^\d{10}$/;
            if (!value.match(phoneno)) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "panNumber") {
            let panNo = /(^([a-zA-Z]{5})([0-9]{4})([a-zA-Z]{1})$)/;
            if (!value.match(panNo)) {
                return error[i].message;
                break;
            }

        } else if (error[i].type === "aadhaarNumber") {
            let aadharNo = /^[0-9]{12}/;
            if (!value.match(aadharNo)) {
                return error[i].message;
                break;
            }

        } else if (error[i].type === "ifscNo") {
            let aadharNo = /^[0-9A-Z]{11}/;
            if (!value.match(aadharNo)) {
                return error[i].message;
                break;
            }

        } else if (error[i].type === "grade") {
            let aadharNo = /^([0-9]{2})([%]{1})/;
            if (!value.match(aadharNo)) {
                return error[i].message;
                break;
            }

        } else if (error[i].type === "number") {
            let aadharNo = /^[0-9]/;
            if (!value.match(aadharNo)) {
                return error[i].message;
                break;
            }

        } else if (error[i].type === "validEmpId") {
            // let validStartEmpID = /^\d{4}/;
            let validStartEmpID = /^[0-9]{4,6}$/;
            // let schemaName = JSON.parse(localStorage.getItem('userProfile')) !== null ? JSON.parse(localStorage.getItem('userProfile')).empIdPrefix : "";
            // let validStartEmpID = `^${schemaName}`;
            if (!value.match(validStartEmpID)) {
                //if(!value.match("ex")) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "currentYear") {
            let date = new Date();
            let currentYear = date.getFullYear();
            if (value > currentYear) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "DateOfBirth") {
            let valuess = Number(value.slice(0, 4))
            let date = new Date();
            let intYear = date.getFullYear() - 18;
            if (Number(valuess) > Number(intYear)) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "minDateFromCurrent") {
            // let currentDate = new Date(new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate())
            // if (value.getTime() > currentDate.getTime) {
            //     return error[i].message;
            //     break;
            // }
        } else if (error[i].type === "maxDateThanCurrent") {
            let selectedDate = new Date(value).getTime();
            let currentDate = new Date(getFormattedDate()).getTime();
            if (currentDate - selectedDate < 0) {
                return error[i].message;
                break;
            }
        } else if (error[i].type === "fromToDate") {

        } else if (error[i].type === "server") {
            return "Checking availabilty..."
            break;
        }
    }
}

export function makeSubmitBtnAsEnableDisable(formError) {
    let isErrorAvailable = false;
    Object.keys(formError).forEach(function (key) {
        if (formError[key] !== undefined && formError[key] !== "Checking availabilty...") {
            isErrorAvailable = true;
        }
    });
    return isErrorAvailable;
}

