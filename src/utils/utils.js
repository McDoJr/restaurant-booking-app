
export const months = () => {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
}

export const setPageTitle = (page) => {
    document.title = `TRIOS - ${page}`;
}

export const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
}

export const currentYear = () => {
    return new Date().getFullYear();
}

export const currentMonth = () => {
    return months()[new Date().getMonth()];
}

export const days = () => {
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();
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