import React from 'react';
import "./Tweet.css";

const Tweet = (props) => {
    return (
        <>
         <div className='container'>
          <div className="section-one">
              <div className="mainName"><h4>{props.obj.name}</h4></div>
              <div className="twitterHandle"><h6>{props.obj.twitterhandle}</h6></div>
          </div>
          <div className="content">{props.obj.tweet}</div>
          <div className="action">
              <button onClick={()=> props.l(props.obj.id)}><i className="fa-solid fa-thumbs-up"></i> Like</button>
              <button onClick={()=> props.d(props.obj.id)}><i className="fa-solid fa-thumbs-down"></i>DisLike</button>
              <h5><span className="badge bg-secondary">{props.obj.likes}</span></h5>
          </div>
      </div>
        </>
     
    )
  }
  

export default Tweet