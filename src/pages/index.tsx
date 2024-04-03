import type { NextPage } from 'next'
import Head from 'next/head'

import { useEffect, useState }    from 'react';

import ThemeSelector    from '@components/themeSelector';
import DeveloperText    from '@components/developerText';
import Button           from '@components/button';
import Highlight        from '@components/highlight';
import ProjectList      from '@components/projectList';
import VisitCounter     from '@components/visitCounter';

import { loadTheme }    from '@controllers/theme';
import { scrollTo }     from '@controllers/page';

import { IconContext } from "react-icons";
import { BsYoutube, BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';


const Home: NextPage = () => {
    const [skillsExpanded, setSkillsExpanded] = useState(false);
    const [wasSkillsExpanded, setWasSkillsExpanded] = useState(false);
    
    useEffect(() => {
        loadTheme();

        if (skillsExpanded != wasSkillsExpanded) {
            setWasSkillsExpanded(skillsExpanded);
            console.log(skillsExpanded, wasSkillsExpanded)
            if (skillsExpanded)
                scrollTo("buttonToProjects", "nearest");
            else
                scrollTo("aboutMe")
        }
    })


    return (
        <div>
            <Head>
                <title>Aphrim.Dev</title>
                <meta name="description" content="Aphrim.Dev" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-background">

                {/* Landing screen */}
                <div className="m-auto w-[80vw] grid content-center justify-center justify-items-center text-center h-screen">
                    <h1 className="text-foreground text-6xl"> Gregory Perrett </h1> 
                    <DeveloperText />
                    <h1 className="text-secondary text-xl mt-8 mb-2"> Choose a color scheme. </h1> 
                    <ThemeSelector />
                    <Button extraStyle="mt-36 w-36" clickCallback={() => {scrollTo("aboutMe")}}> Continue. </Button>
                </div>

    
                {/* About me screen */}
                <div className="w-screen min-h-[100vh] m-[100vh] ml-auto mr-auto text-center" id="aboutMe">
                    {/* <img className="w-1/4 md:w-96 m-auto" /> */}
                    <p className="m-auto w-[80%] text-foreground text-2xl sm:text-3xl lg:text-5xl">
                        I am <Highlight> Gregory Perrett</Highlight>, and I am interested in coding, computers, and mathematics. <br/>
                        I am <Highlight> 17 years old</Highlight>, and have been coding for <Highlight> 3 years</Highlight>. <br/>
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-6xl mt-8"> <Highlight> Skills: </Highlight> <br/> </h2>
                    <div className="grid grid-cols-2 gap-10 text-2xl sm:text-3xl lg:text-5xl text-foreground">
                        <div className="text-right">
                            <p> Js/Ts : </p>
                            <p> Lua : </p>
                            <p> Python : </p>
                            {skillsExpanded ? <>
                            <p> C++ : </p>
                            <p> Webdev : </p>
                            <p> Linux : </p>
                            <p> Golang : </p>
                            <p> x86 Asm : </p>
                            <p> CyberSec : </p>
                            </> : <div/>}
                        </div>
                        <div className="text-left">
                            <p> Advanced </p>
                            <p> Advanced </p>
                            <p> Advanced </p>
                            {skillsExpanded ? <>
                            <p> Intermediate </p>
                            <p> Intermediate </p>
                            <p> Intermediate </p>
                            <p> Intermediate </p>
                            <p> Novice </p>
                            <p> Novice </p>
                            </> : <div/>}
                        </div>
                    </div>
                    <div className="m-auto justify-self-center w-min align-center">
                        <Button extraStyle="mt-4 lg:mt-8" clickCallback={() => {setSkillsExpanded(!skillsExpanded)}}> {skillsExpanded ? "Compact" : "Expand"} </Button>

                        <Button extraStyle="mt-4 lg:mt-12 w-36" id="buttonToProjects" clickCallback={() => {scrollTo("projects")}}> View Projects. </Button>
                    </div>

                    {/* Projects Screen */}

                    <div className="w-screen min-h-[100vh] m-[100vh] ml-auto mr-auto text-center" id="projects">
                        <h1 className="text-foreground text-6xl"> My Projects: </h1> 
                        <ProjectList />
                    <Button extraStyle="mt-8 lg:mt-24 w-36" clickCallback={() => {scrollTo("contact")}}> Reach Out! </Button>
                    </div>

                    {/* Reach out! */}
                    <div className="w-screen min-h-[100vh] mt-[100vh] ml-auto mr-auto text-center" id="contact">
                        <h1 className="text-foreground text-6xl mb-8"> Reach out to me! </h1> 

                        <IconContext.Provider value={{size: "3em", color: "var(--fg)", className: "ml-2 mr-2"}}>
                            <button onClick={() => {window.open("https://www.github.com/aphrim", "_blank")}}> <BsGithub/> </button>
                            <button onClick={() => {window.open("https://www.linkedin.com/in/gregoryperrett/", "_blank")}}> <BsLinkedin/> </button>
                            <button onClick={() => {window.open("https://www.codeforces.com/profile/Aphrim", "_blank")}}> <SiCodeforces/> </button>
                        </IconContext.Provider>

                        <h1 className="text-foreground text-xl md:text-3xl mt-4"> Email: gregperrett5@gmail.com </h1> 

                        <VisitCounter />
                    </div>


                </div>

            </main>
        </div>
    );
}

export default Home;
