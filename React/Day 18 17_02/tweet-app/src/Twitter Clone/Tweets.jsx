import React, {useState} from 'react'
import Tweet from './Tweet';

const Tweets = () => {

    const [tweets, setTweets] = useState(
        [
            {
                id:1,
                name:"Elon Musk",
                twitterhandle:"@elonmusk",
                tweet:"Buy Doge now",
                likes:0
            },
            {
                id:2,
                name:"Jeff Bezos",
                twitterhandle:"@jeffbezos",
                tweet:"I am selling Amazon!!",
                likes:0
            },
            {
                id:3,
                name:"Mukesh Ambani",
                twitterhandle:"@mukambani",
                tweet:"IPL is fixed. Why is the auction even happening?",
                likes:0
            },
            {
                id:4,
                name:"Gautam Adani",
                twitterhandle:"gautamadani",
                tweet:"Hahaha @mukambani",
                likes:0
            }

        ]
    );
    const like=(id)=>{
        const latestState = [...tweets];
        const index = tweets.findIndex(item => item.id===id);
        tweets[index].likes += 1;
        setTweets(latestState);
    }
    const dislike = (id) => {
        const latestState = [...tweets];
        const index = tweets.findIndex(item => item.id === id);
        if(latestState[index].likes>0){
            latestState[index].likes -= 1;
        }        
        setTweets(latestState);
    }

    const renderTweets=() => {
        return tweets.map(item => {
            return <Tweet obj={item} l={like} d={dislike}/>
        })
    }
  return (
    <>
    {renderTweets()}
    </>
  )
}

export default Tweets