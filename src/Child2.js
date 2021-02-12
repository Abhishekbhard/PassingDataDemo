import React,{useState} from 'react';
import { motion } from "framer-motion"



export default function Home({selectedMessage}) {

console.log("SelectMode Home",selectedMessage)

    return (<div className='home'>
        <p>{selectedMessage}</p>
    </div>)
}