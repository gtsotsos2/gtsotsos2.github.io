import reactLogo from '../public/react.svg'
import tailwindLogo from '../public/tailwind.svg'
import './App.css'
import {Header} from "./components/Header/Header";
import {Hello} from "./components/Hello/Hello";
import {Connect} from "./components/Connect/Connect";
import {Experience} from "./components/Experience/Experience";
import {Skills} from "./components/Skills/Skills";
import {Education} from "./components/Education/Education";
import {Languages} from "./components/Languages/Languages";
import {Interests} from "./components/Interests/Interests";
import {useMediaQuery} from "react-responsive";

function App() {

    const isMobile = useMediaQuery({maxWidth: 767})

    return (
        <>
            <Header/>
            <div className="grid maingrid mb-10">
                <div className="text-left lg:text-right">
                    <Hello/>
                    {isMobile ? <Connect/> : <Experience/>}
                </div>
                <div className="text-left">
                    {isMobile ? <><Skills/><Experience/></> : <Connect/>}
                    {!isMobile && <Skills/>}
                    <Education/>
                    <Languages/>
                    <Interests/>
                </div>
            </div>
            <div className="footer">
                <p>
                    Made with ❤️ using
                </p>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo inline-block" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react inline-block" alt="React logo"/>
                </a>
                <a href="https://tailwindcss.com" target="_blank">
                    <img src={tailwindLogo} className="logo react inline-block" alt="Tailwind logo"/>
                </a>
                <p>
                    Click on logos to learn more
                </p>
            </div>
        </>
    )
}

export default App
