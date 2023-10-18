"use client";
import React from "react";
import Typewriter from 'typewriter-effect';

type Props = {};

const TypewriterTitle = (props: Props) => {
    return(
        <Typewriter 
        options={{
            loop: true,
        }}
        onInit={(typewriter) =>{
            typewriter.typeString("Supercharged Productivity")
            .pause(100).deleteAll()
            .typeString("AI powered Insights")
            .start();
        }}
    />
    );
};

export default TypewriterTitle;