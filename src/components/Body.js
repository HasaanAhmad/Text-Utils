import React from 'react'
import { useState } from 'react'
function Body() {
    const [text, setText] = useState("Start Right here")
    const handleCap = () => {
        // console.log(text);
        setText(text.toUpperCase())
    }
    const handlelow = () => {
        // console.log(text);
        setText(text.toLowerCase())
    }
    const handleCop = () => {
        // console.log(text);
        navigator.clipboard.writeText(text)
    }
    const handleClear = () => {
        // console.log(text);
        setText("")
    }
    const handleOnChange = (event) => {
        // console.log("onchange happend");
        setText(event.target.value)
    }

    return (
        <div className='container my-4'>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">You Text Utility</label>
                <textarea value={text} onChange={handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                    <button onClick={handleCap} className="btn btn-primary mt-2" >
                        Capitalize
                    </button>
                    <button onClick={handleCop} className="btn btn-danger mt-2 mx-2" >
                        Copy Text
                    </button>   
                    <button onClick={handleClear} className="btn btn-success mt-2" >
                        Clear Text
                    </button>   
                    <button onClick={handlelow} className="btn btn-success mt-2 mx-2" >
                        Lower Text
                    </button>   
                    <h3>Text Summary</h3>
                    
                    <p>{text.split(" ").length} Words and {text.length} Characters are there.</p>
                    <h3>Priview Text</h3>
                    <p> {text} </p>
                </div>
            </div>
    )
}

export default Body