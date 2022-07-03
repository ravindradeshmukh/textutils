import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        // console.log("Lowercase ");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () =>{
        setText('');
    }
    const handleOnChange = (event) =>{
        // console.log("change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
    <div className="container" style={props.mode}>
        {/* <div className="mb-3">
             <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <div className="mb-3">
            <h2 htmlFor="exampleFormControlTextarea1" className="form-label">Enter your text here</h2>
            <textarea className="form-control" style={props.mode} value = {text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="mb-3">
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
        </div>
        <div className="mb-3">
            <h1>Text summary</h1>
            <p>{text.split(" ").length} words and {text.length} chaaracters</p>
            <p>{text.length * 0.008} minutes to read</p>
            <h2>Preview</h2>
            <p>{text ? text : "Enter something for preview"}</p>
        </div>
    </div>
  )
}
