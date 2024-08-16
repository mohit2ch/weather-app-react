export function changeClockHour(a){
    let hr = Number(a.substr(0, 2));
    let mn = Number(a.substr(3, 2));
    let ap = a[6];
    if(ap === 'P') hr += 12;
    if(ap === 'A' && hr===12) hr = "00";
    if(hr<10) hr = "0"+hr;
    if(mn<10) mn = "0"+mn;
    return `${hr}:${mn}`;
}
export function TimeDifference(a, b){
    
    let hr1 = Number(a.substr(0, 2));
    let hr2 = Number(b.substr(0, 2));
    let mn1 = Number(a.substr(3));
    let mn2 = Number(b.substr(3));
    console.log(mn2, b.substr(3));
    if(mn2 < mn1) {
        mn2 = mn2 + 60;
        hr2 -= 1;
    }
    if(hr2 < hr1) hr2 += 24;
    console.log(hr2, hr1, mn2, mn1);
    return((hr2-hr1)*60 + (mn2-mn1));
}

export function calcRatio(sunrise, sunset, curtime){
    try{
        console.log(changeClockHour(sunrise), changeClockHour(sunrise), changeClockHour(curtime));
        let a = TimeDifference(changeClockHour(sunrise), changeClockHour(sunset));
    let b = TimeDifference(changeClockHour(sunrise), changeClockHour(curtime));
    
    return b/a;
    }
    catch(err){
        console.log(err);
        return 0;
    }

    
}

export function isDay(sunrise, sunset, curTime){
    let a = changeClockHour(sunrise);
    let b = changeClockHour(sunset);
    let c = changeClockHour(curTime);

    let hr1 = Number(a.substring(0, 2));
    let hr2 = Number(b.substring(0, 2));
    let hr3 = Number(c.substring(0, 2));
    let mn1 = Number(a.substring(3));
    let mn2 = Number(b.substring(3));
    let mn3 = Number(c.substring(3));

    let time1 = hr1*60+mn1;
    let time2 = hr2*60+mn2;
    let time3 = hr3*60+mn3;
    console.log(time1, time2, time3);
    

    return (time1<=time3 && time3<=time2);
}