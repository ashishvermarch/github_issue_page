import React from 'react'
import './Css/footer.css'

const Footer = () => {
    return (
        <>
            <div className="footerContainer">
                <div className='fp1'>
                    <div className="text-center">
                        <span className="material-symbols-outlined">
                            lightbulb
                        </span>
                        <span><b>ProTip!</b></span>
                        <span>What's not been updated in a month:</span>
                        <span><a href="/">updated:2021-08-17.</a></span>
                    </div>

                </div>
                <hr />
                <div className='fp2'>
                    <ul>
                        <li className = "flii"><a href="/">Terms</a></li>
                        <li className = "flii"><a href="/">Privacy</a></li>
                        <li className = "flii"><a href="/">Security</a></li>
                        <li className = "flii"><a href="/">Status</a></li>
                        <li className = "flii"><a href="/">Docs</a></li>
                        <li className = "flii" id = "giticon"><a href="/"><span className="material-symbols-outlined">
                            apps
                        </span></a></li>
                        <li className = "flii"><a href="/">Contact Github</a></li>
                        <li className = "flii"><a href="/">Pricing</a></li>
                        <li className = "flii"><a href="/">API</a></li>
                        <li className = "flii"><a href="/">Training</a></li>
                        <li className = "flii"><a href="/">Blog</a></li>
                        <li className = "flii"><a href="/">About</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer