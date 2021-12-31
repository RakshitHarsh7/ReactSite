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
    const handleSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    const [text, setText] = useState("")
    // text = "new text" - Wrong way to cahnge the state
    // setText("new text") - Correct way to cahnge the state


    return (
        <>
            <div className="container" style={{color:props.mode === 'dark'?'white':'black'}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'rgb(3 21 88)':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="10"></textarea>
                </div>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpCLick}>Change to Uppercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoCLick}>Change to Lowercase</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearCLick}>Clear Text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
                <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Remove extra spaces</button>
            </div>

            <div className="container my-3"  style={{color:props.mode === 'dark'?'white':'black'}} >
                <h2>You text summary</h2>
                <p>{text.split(' ').filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} minutes to read</p>
                <h2>Preview</h2>
                {/* <p>{text}</p> */}
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}
