const PageScroller = (element) => {
    const elem = element;
    const jump = parseInt(elem.getBoundingClientRect().top * 0.4, 10);
    document.body.scrollTop += jump;
    document.documentElement.scrollTop += jump;
    if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
        elem.lastjump = Math.abs(jump);
        setTimeout(() => {
            PageScroller(elem);
        }, 50);
    } else {
        elem.lastjump = null;
    }
};

export default PageScroller;
