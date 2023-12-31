
export const months = () => {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

export const weeks = () => {
    // return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return ["S", "M", "T", "W", "T", "F", "S"];
}

export const setPageTitle = (page) => {
    document.title = `TRIOS - ${page}`;
}

export const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
}

export const getMonth = (month) => {
    return months()[month];
}

export const getDays = (date, currYear, currMonth) => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    const list = [];

    for(let i = firstDayofMonth; i > 0; i--){
        list.push({day: (lastDateofLastMonth - i + 1), name: "inactive"});
    }
    for(let i = 1; i <= lastDateofMonth; i++){
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
        && currYear === new Date().getFullYear() ? "active" : "normal";
        list.push({day: i, name: isToday});
    }
    for(let i = lastDayofMonth; i < 6; i++){
        list.push({day: (i - lastDayofMonth + 1), name: "inactive"});
    }
    return list;
}

export const getDate = (date) => {
    return {month: date.getMonth(), year: date.getFullYear()}
}

export const scrollToTop = () => {
    window.scroll({top: 0});
}

export const isValidEmail = (email) => {
    return email.trim() && /\S+@\S\.\S+/.test(email);
}

export const validate = (obj, name) => {
    if(obj) {
        return {status: true, message: `success!`};
    }
    return {status: false, message: `${name} is required!`};
}

export const profile = (firstname, lastname, email, phone, password) => {
    return {uuid: 0, firstname, lastname, email, phone, password, reservations: []};
}

export const reservation = (id, persons, tables, note, date, time) => {
    return {id, persons, tables, note, date, time};
}