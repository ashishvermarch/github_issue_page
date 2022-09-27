import './Css/indexItem.css'
import React, { useEffect, useState } from 'react'

const IssuesItem = (props) => {

    const { title, imgUrl, hours, status, unumber, comments, getUrl } = props;

    const currTime = new Date();

    const [defaultName, setdefaultName] = useState("Unknown")

    const fetchName = async () => {
        let data = await fetch(getUrl);
        let parsedData = await data.json();
        setdefaultName(parsedData.name);
        // console.log(parsedData.name)
    }

    useEffect(() => {
        fetchName();
    })

    let time = hours.substring(11, 13) - currTime.getHours();
    if (time < 0) {
        time -= time;
    }

    return (
        <>
            <div className="container d-flex">

                <div className="one d-flex">
                    <div className="one1">
                        <div className="icon"><span className="material-symbols-outlined">
                            adjust
                        </span></div>
                    </div>
                    <div className="one2">
                        <div className="one2-1">
                            <h4>{title}</h4>
                            {status && <div>{status.includes("Status") || status.includes("Component") ? <p className={`${status.includes("Status") ? "status" : "component"}`}>{status}</p> : ""}</div>}
                        </div>
                        <div className="one2-2">
                            <span>{unumber}</span>
                            <span className='mx-2'>opened {time} hours ago by {defaultName}</span>
                        </div>
                    </div>
                </div>
                <div className="two">
                    <div><img className="avatar" src={imgUrl} alt="N/A" /></div>
                    <div className="comments">
                        <span className="material-symbols-outlined">
                            chat_bubble
                        </span>
                        <span><p>{comments}</p></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IssuesItem