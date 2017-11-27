import React from 'react';

export default class Page extends React.Component{

    constructor(props) {
        super(props);
        this.ScrollToResolver = this.ScrollToResolver.bind(this);        
    }

    ScrollToResolver(elem) {
        const jump = parseInt(elem.getBoundingClientRect().top * .2, 10);
        document.body.scrollTop += jump;
        document.documentElement.scrollTop += jump;
        if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
            elem.lastjump = Math.abs(jump);
            setTimeout(() => { 
                this.ScrollToResolver(elem);
            }, 50);
        } else {
            elem.lastjump = null;
        }
    }

    pageScroll(e) {
        console.log('PageScroll', e);
        this.ScrollToResolver(document.getElementById(e));
    }

    render() {
        return (
            <div className="page">
                <aside className="left-column">
                    <div className="sidebar">
                        <ul className="sidebar__listing ul-listing">
                            <li className="ul-listing__item">
                                <a className="ul-listing__link"
                                    onClick={(e) => this.pageScroll('component-block01')}>Items1</a>
                            </li>
                            <li className="ul-listing__item">
                                <a className="ul-listing__link"
                                    onClick={(e) => this.pageScroll('component-block02')}>Items2</a>
                            </li>
                            <li className="ul-listing__item">
                                <a className="ul-listing__link"
                                    onClick={(e) => this.pageScroll('component-block03')}>Items3</a>
                            </li>
                            <li className="ul-listing__item">
                                <a className="ul-listing__link"
                                    onClick={(e) => this.pageScroll('component-block04')}>Items4</a>
                            </li>
                        </ul>
                    </div>
                </aside>
                <section className="right-column">
                    <div className="main">
                        <section id="component-block01">
                            Component Block 1
                        </section>
                        <section id="component-block02">
                            Component Block 2
                        </section>
                        <section id="component-block03">
                            Component Block 3
                        </section>
                        <section id="component-block04">
                            Component Block 4
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}
