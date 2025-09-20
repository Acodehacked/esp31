'use client'

import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Patients from './components/Patients'
import Doctors from './components/Doctor'
import Security from './components/Security'
import Footer from './components/Footer'
// import Cards from './components/Cards'

// import { useState } from "react";
// import Preloader from "./_components/Preloader";




const Page = () => {
  // const [loading, setLoading] = useState(true);
  return (
    <>
      {/* {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <div>
          <div><Header /></div>
          <div><Cards /></div>
        </div>
      )}
      */}
      <Header />
      <Hero />
    </>
  )
}

export default Page



