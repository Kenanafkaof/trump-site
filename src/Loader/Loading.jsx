import React from 'react'
import './loading.scss'
import CircularProgress from '@mui/material/CircularProgress';
import {useEffect, useState} from 'react'
const Loading = (props) => {
    const [text, setText] = useState("")
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() =>
    {
        setText("Fetching data...")
        setIsMounted(true)
        makeTimer()
    }, [])
    function makeTimer(){
        var array_text = ["Doing analysis...", "Putting data in model...", "Loading...", "Checking the data..."];
        var counter = 0;
        var elem = document.getElementById("text-loader");
        setInterval(function(){
            setText(array_text[counter])
            counter++;
            if (counter >= array_text.length) {
              counter = 0;
            }
        }, 1500);
    }


  return (
    <div className="loader-main">
        <div className="loading-image">
            <img src="" alt="" className="src" />
            <div className="loader">
                <CircularProgress color='inherit' className='loader-spin'/>
                {isMounted === true &&
                    <span className="loading-text" id='text-loader'>{text}</span>
                }
            </div>
        </div>
    </div>

  )
}

export default Loading