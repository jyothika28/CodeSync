import React, { useState } from 'react';
import Hero from './hero/Hero';
import DemoSection from './demosection/Demosection';
import Header from './header/Header';

function CodeSync() {
    const [userName, setUserName] = useState("");
    
    return (
        <>
            <Header userName={userName} /> 
            <Hero setUserName={setUserName} /> 
            <DemoSection />
        </>
    )
}

export default CodeSync;