function format(dt, format) {
    let year = dt.getFullYear();
    let month = dt.getMonth() + 1;
    let day = dt.getDate();
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let dayOfWeek = dt.getDay();
    let second = dt.getSeconds();
    let milliSeconds = dt.getMilliseconds();
    let hourFormatted = hour % 12 || 12;
    let minuteFormatted = minute < 10 ? "0" + minute : minute;
    let morning = hour < 12 ? "AM" : "PM";

    let tempDate = format;

    //#region Replace AM/PM
    if(format.search('tt')) {
        if(format.search('HH') || format.search('H')) {
            tempDate = tempDate.replace('tt' , morning);
        }
        else {
            tempDate = tempDate.replace('tt' , '');
        }
    }
    //#endregion
  
    //#region Replace Date
    if(format.search('d') > -1 || format.search('dd') > -1) {
        tempDate = tempDate.replace('dd' , getDateFormatedValue(day, 'dd'));
        tempDate = tempDate.replace('d' , getDateFormatedValue(day, 'd'));
    }
    //#endregion

    //#region Replace Month
    if(format.search('MMMM') > -1) {
        tempDate = tempDate.replace('MMMM' , getMonthFormatedValue(month, 'MMMM'));
    }
    else if(format.search('MMM') > -1) {
        tempDate = tempDate.replace('MMM' , getMonthFormatedValue(month, 'MMM'));
    }
    else if(format.search('MM') > -1) {
        tempDate = tempDate.replace('MM' , getMonthFormatedValue(month, 'MM'));
    }
    else if(format.search('M') > -1) {
        tempDate = tempDate.replace('M' , getMonthFormatedValue(month, 'M'));
    }
    //#endregion

    //#region Replace Year
    if(format.search('yyyy') > -1) {
        tempDate = tempDate.replace('yyyy' , getYearFormatedValue(year, 'yyyy'));
    }
    else if(format.search('yy') > -1) {
        tempDate = tempDate.replace('yy' , getYearFormatedValue(year, 'yy'));
    }
    else if(format.search('y') > -1) {
        tempDate = tempDate.replace('y' , getYearFormatedValue(year, 'y'));
    }
    //#endregion

    //#region Replace Hour
    if(format.search('hh') > -1 || format.search('h') > -1) {
        tempDate = tempDate.replace('hh' , hourFormatted < 10 ? "0" + hourFormatted : hourFormatted);
        tempDate = tempDate.replace('h' , hourFormatted);
    }
    else if(format.search('HH') > -1 || format.search('H') > -1) {
        tempDate = tempDate.replace('HH' , hour < 10 ? "0" + hour : hour);
        tempDate = tempDate.replace('H' , hour);
    }
    //#endregion

    //#region Replace Minute
    if(format.search('mm') > -1 || format.search('m') > -1) {
        tempDate = tempDate.replace('mm' , minuteFormatted);
        tempDate = tempDate.replace('m' , minute);
    }
    //#endregion
    
    //#region Replace Seconds
    if(format.search('ss') > -1 || format.search('s') > -1) {
        tempDate = tempDate.replace('ss' , second < 10 ? "0" + second : second);
        tempDate = tempDate.replace('s' , second);
    }
    //#endregion

    //#region Replace Seconds
    if(format.search('SSS') > -1) {
        if(milliSeconds < 100) {
            tempDate = tempDate.replace('SSS' , milliSeconds < 100 ? "0" + milliSeconds : milliSeconds);
        }
        else {
            tempDate = tempDate.replace('SSS' , milliSeconds < 10 ? "0" + milliSeconds : milliSeconds);
        }
    }
    else if(format.search('SS') > -1) {
        tempDate = tempDate.replace('SS' , milliSeconds < 10 ? "0" + milliSeconds : milliSeconds);
    }
    else if(format.search('S') > -1) {
        tempDate = tempDate.replace('S' , milliSeconds);
    }
    //#endregion
    
    //#region Replace Days
    if(format.search('EEEE') > -1) { 
        tempDate = tempDate.replace('EEEE' , getDaysFormatedValue(dayOfWeek, 'EEEE'));
    }
    if(format.search('EEE') > -1) {
        tempDate = tempDate.replace('EEE' , getDaysFormatedValue(dayOfWeek, 'EEE'));
    }
    //#endregion

    return tempDate;
}

function getMonthName (month) {
    let strMonth = "";
    switch(month) {
        case 1:
            strMonth = "January";
            break;
        case 2:
            strMonth = "Feburary";
            break;
        case 3:
            strMonth = "March";
            break;
        case 4: 
            strMonth = "April";
            break;
        case 5: 
            strMonth = "May";
            break;
        case 6: 
            strMonth = "June";
            break;
        case 7:
            strMonth = "July";
            break;
        case 8: 
            strMonth = "August";
            break;
        case 9: 
            strMonth = "September";
            break;
        case 10: 
            strMonth = "October";
            break;
        case 11: 
            strMonth = "November";
            break;
        case 12: 
            strMonth = "December";
            break;
        default:
            break;
    }
    return strMonth;
}

function getDaysName (days) {
    let strMonth = "";
    switch(days) {
        case 0:
            strMonth = "Sunday";
            break;
        case 1:
            strMonth = "Monday";
            break;
        case 2:
            strMonth = "Tuesday";
            break;
        case 3:
            strMonth = "Wednesday";
            break;
        case 4: 
            strMonth = "Thrusday";
            break;
        case 5: 
            strMonth = "Friday";
            break;
        case 6: 
            strMonth = "Saturday";
            break;
        default:
            break;
    }
    return strMonth;
}

function getDateFormatedValue(date, format) {
    let strDate = "";
    strDate = (date < 10 && format === "dd") ? "0"+ date : date; 
    return strDate;
}

function getYearFormatedValue(year, format) {
    let strDate = "";
    strDate = (format === "yy") ? year.toString().substring(2,4) : year; 
    return strDate;
}

function getMonthFormatedValue(month, format) {
    let strMonth = "";
    switch(format) {
        case "M":
        case "MM":
            strMonth = (month < 10 && format === "MM") ? "0"+ month : month; 
            break;
        case "MMM":
        case "MMMM":
            let monthName =  getMonthName(month);
            strMonth = (month < 10 && format === "MMM") ? monthName.substring(0,3) : monthName; 
            break;
        default:
            break;
    }
    return strMonth;
}

function getDaysFormatedValue(days, format) {
    let strDays = "";
    let dayName =  getDaysName(days);
    strDays = (format === "WWW") ? dayName.substring(0,3) : dayName; 
    return strDays;
}

const FormatDateTime = {
    formatDate: (date, dateFormat) => {
        try {
            return format(date, dateFormat);
        } 
        catch (e) {
            return null;
        }
    }
};

module.exports = FormatDateTime;
