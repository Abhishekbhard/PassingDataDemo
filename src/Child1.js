import React from 'react';

export default function Sidebar({setMessage}) {

    const onButtonClick=(changeValue)=>{
        setMessage(changeValue)
    }

    return (<div>
        <button onClick={()=>onButtonClick('Message from child 1')}>Child1</button>
       
    </div>)
}


