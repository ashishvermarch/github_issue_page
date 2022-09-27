import React from 'react'
import './Css/header.css'
const Header = () => {
    return (
        <>
            <div className="headContainer">
                <div className="headp1">
                    <div className="hp1-1">
                        <span className="material-symbols-outlined">
                            save
                        </span>
                        <a href="/">facebook/react</a>
                        <span>Public</span>
                    </div>
                    <div className="hp1-2">
                        <div>
                            <div className="c">
                                <span className="material-symbols-outlined">
                                    notifications
                                </span> <span>Notifications</span>
                            </div>
                        </div>

                        <div className="cc">
                            <div className="ccc">
                                <span className="material-symbols-outlined">
                                    star
                                </span><span>Star</span>
                            </div>
                            <span className='ex-span'>175k</span>
                        </div>
                        <div className="cc">
                            <div className='ccc'>
                                <span className="material-symbols-outlined">
                                    usb
                                </span><span>Fork</span>
                            </div>
                            <span className='ex-span'>35.3k</span>
                        </div>
                    </div>
                </div>
                <div className="haedp2">
                    <div className="list">
                        <ul className='list-menu'>
                            <li className = "lii"><a href="/"><span className="material-symbols-outlined">
                                code
                            </span><span>Code</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                adjust
                            </span><span>Issues</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                usb
                            </span><span>Pull request</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                play_circle
                            </span><span>Actions</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                monitoring
                            </span><span>Projects</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                menu_book
                            </span><span>Wiki</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                security
                            </span><span>Security</span></a></li>
                            <li className = "lii"> <a href="/"><span className="material-symbols-outlined">
                                insights
                            </span><span>Insights</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header