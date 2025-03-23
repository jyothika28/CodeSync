import React from 'react';

import Hero from './hero/Hero';
import DemoSection from './demosection/Demosection';
import Header from './header/Header';
import { useState } from 'react';
function CodeSync() {
    const [userName, setUserName] = useState("");
    return (
        <>
         <Header userName={userName} /> {/* Pass userName to Header */}
         <Hero setUserName={setUserName} /> {/* Pass setUserName to Hero */}
        <DemoSection />
        </>
    )
}
export default CodeSync;