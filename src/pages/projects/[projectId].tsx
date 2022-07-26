import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Head from 'next/head'

import { useRouter } from 'next/router'

import { loadTheme } from '@controllers/theme';

import ImageCarousel from '@components/imageCarousel';

const Project: NextPage = (props: any) => {
    const router = useRouter();
    const [projectData, setProjectData] = useState(null);
    const [features, setFeatures] = useState(null);
    const [tags, setTags] = useState(null);


    useEffect(() => {
        const getProjectData = async() => {
            let data = await (await fetch(`/api/projects`)).json();
            let pData: any;
            data.forEach((p: any) => {if (p.id == window.location.href.split('/').pop()) { setProjectData(p); pData = p}});
            return pData;
        }
        loadTheme();
        getProjectData().then((pData) => {
            if (!pData) return;
            let features_ = []; //Don't want to name "features" to avoid confusion. Hopefully adding a underscore is sufficient.
            let tags_ = [];
            pData.features.forEach((des: string) => {features_.push(
                <p className="text-xl md:text-3xl text-center mt-2 text-foreground whitespace-pre-wrap"> {des} </p>
            )});
            pData.tags.forEach((tag: string) => {tags_.push(
                <p className="text-lg md:text-xl text-center m-2 text-background p-2 rounded-lg bg-highlight"> {tag} </p>
            )});
            setFeatures(features_);
            setTags(tags_);

        });

    }, [router.isReady]);

    return (
        <div>
            <Head>
                <title>Aphrim.dev</title>
                <meta name="description" content="Aphrim.dev" />
            </Head>
            <main className="bg-background">
                <div className="w-screen min-h-screen p-12">
                    {projectData ? 
                        <>
                            <h1 className="m-auto text-6xl text-center mt-12 text-foreground">{projectData.name}</h1>
                            {projectData.imageCount ?
                            <ImageCarousel type="project" path={projectData.id} count={projectData.imageCount} />
                            :
                            <div />}

                            <p className="m-auto text-l md:text-2xl
                                text-center mt-12 text-foreground whitespace-pre-wrap">Created: {projectData.date} </p>


                            <p className="m-auto text-xl md:text-3xl
                                text-center mt-12 text-foreground whitespace-pre-wrap"> Tags: </p>
                            
                            <div className="flex justify-center flex-wrap">
                                {tags}
                            </div>


                            <p className="m-auto text-xl md:text-3xl
                                text-center mt-12 text-foreground whitespace-pre-wrap">{projectData.description} <br/> <br/> Features: </p>

                            {features}

                            {projectData.link ?
                            <div className="m-auto flex justify-center mt-12">
                                <a className="text-l md:text-2xl text-highlight" href={projectData.link} target="_blank" rel="noreferrer"> View Project. </a>
                            </div>
                            : <div />}
                        </>
                    :
                        <div/>}
                </div>
            </main>
        </div>
    );
}

export default Project
