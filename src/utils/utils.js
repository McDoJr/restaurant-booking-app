
export const setPageTitle = (page) => {
    document.title = `TRIOS - ${page}`;
}

export const scrollTo = (ref) => {
    ref.current?.scrollIntoView({behavior: "smooth"});
}