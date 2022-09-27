import React, { useEffect, useState } from 'react'
import IssueItem from './IssuesItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import './Css/issue.css'

const Issues = () => {

    const [articles, setArticles] = useState([]);
    const [displayLength, setDisplayLength] = useState(6);


    const updateIssue = async () => {
        let url = 'https://api.github.com/repos/facebook/react/issues';
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.slice(0, displayLength));
        setDisplayLength(displayLength + 6);
    }


    useEffect(() => {
        updateIssue();
        //eselint-disable-next-line
    }, [])

    return (
        <>
            <div className="container issueHead">
                <div className="part1 d-flex">
                    <div className="icon"><span className="material-symbols-outlined">
                        adjust
                    </span></div>
                    <p className='mx-2 my-1'><b>625 open</b><span className="material-symbols-outlined">
                        check
                    </span> 10,100 Closed</p>
                </div>
                <div className="part2">
                    <ul className='menu'>
                        <li className='mx-2 my-1 hlii'><a href="/">Author</a><span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>
                        <li className='mx-2 my-1 hlii'><a href="/">Label</a> <span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>
                        <li className='mx-2 my-1 hlii'><a href="/">Projects</a> <span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>
                        <li className='mx-2 my-1 hlii'><a href="/">Milestones</a> <span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>
                        <li className='mx-2 my-1 hlii'><a href="/">Assignee</a> <span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>
                        <li className='mx-2 my-1 hlii'><a href="/">Sort</a> <span className="arrow material-symbols-outlined">
                            arrow_drop_down
                        </span></li>

                    </ul>
                </div>

            </div>

            <InfiniteScroll
                dataLength={articles.length}
                next={updateIssue}
                hasMore={true}
            >

                {articles.map((element) => {
                    return (
                        <div key={element.id}>
                            <IssueItem title={element.title} unumber={element.number} comments={element.comments} status={element.labels[0]?.name} hours={element.updated_at} imgUrl={element.user.avatar_url} getUrl={element.user.url} />
                        </div>)
                })}
            </InfiniteScroll>

        </>
    )
}

export default Issues