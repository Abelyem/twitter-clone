import React, { useState } from 'react';
import './Tweetbox.css';
import { Avatar, Button } from "@material-ui/core";
import db from './firebase';

function Tweetbox(){

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Abel',
            username: 'abelsething',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://images.unsplash.com/photo-1611615567981-94e6e4b60d82?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",

        });

        setTweetMessage("");
        setTweetImage("");
    
    };

    return (
        <div className="tweetBox"> 
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://images.unsplash.com/photo-1611615567981-94e6e4b60d82?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
                    <input 
                    onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage} placeholder="What's happening?" type="text" />
                </div>
                <input value={tweetImage}
                onChange={(e) => setTweetImage(e.target.value)} 
                className="tweetBox__imageInput" placeholder="Optional: Enter image URL?" type="text" />
                <Button onClick={sendTweet} type="submit" className="tweetbox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox