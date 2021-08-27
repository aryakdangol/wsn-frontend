import React, {useState} from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data'
import Login from '../components/Login'
import Background from '../components/Login/background'
import Navbar from '../components/navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => { 
        setIsOpen(!isOpen)
    }
    const[Clicked, setOpen] = useState(false)

    const Open = () => {
        setOpen(!Clicked)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Login Clicked = {Clicked} Open={Open}/>
            <Background Clicked = {Clicked} Open={Open}/>
            <Navbar toggle={toggle}  Open={Open}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            
        </>
    )
}

export default Home
