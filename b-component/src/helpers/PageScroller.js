export const ScrollToResolver = (elem) => {
    const jump = parseInt(elem.getBoundingClientRect().top * .2, 10);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(() => { 
            ScrollToResolver(elem);
        }, 50);
    } else {
        elem.lastjump = null;
    }
}
