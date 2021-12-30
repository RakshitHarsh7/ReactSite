import React, { useState } from 'react'


export default function TextForm(props) {

    const handleUpCLick = () => {
        console.log('Upper case was clicked')
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleLoCLick = () => {
        console.log('Upper case was clicked')
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleClearCLick = () => {
        console.log('Upper case was clicked')
        let newText = ''
        setText(newText)
        props.showAlert("Text has been cleared", "success")
    }
    const handleCopy = () =>{
        var text = document.getElementById("mybox")
        text.select()
        text.setSelectionRange(0,9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "success")

    }

    const handleOnChange = (event) => {
        console.log('On change')
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    // text = "new text" - Wrong way to cahnge the state
    // setText("new text") - Correct way to cahnge the state


    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpCLick}>Change to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoCLick}>Change to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearCLick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            </div>

            <div className="container my-3"  style={{color:props.mode === 'dark'?'white':'black'}} >
                <h2>You text summary</h2>
                <p>{text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
