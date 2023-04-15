//The text on landing screen that changes between Developer, Coder, etc
import * as React from 'react';
import Typewriter from 'typewriter-effect';

const possibleTexts = [
    "Developer", "Designer", "Competitive Programmer",
]

export default class DeveloperText extends React.Component {
    state = {
        text: possibleTexts[0]
    }

    render = () => {
        return (
            <h1 className="text-highlight text-4xl mt-8">
                <Typewriter
                    options={{
                        strings: possibleTexts,
                        autoStart: true,
                        loop: true,
                        cursor: "_",
                        //@ts-ignore
                        pauseFor: 5000,
                        deleteSpeed: 100,
                        delay: 100,
                    }}
                />
            </h1> 
        );
    }
}
