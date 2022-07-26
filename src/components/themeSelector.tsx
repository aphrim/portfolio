import *  as React from 'react';
import { themes, setTheme, getTheme } from '@controllers/theme';

export default class ThemeSelector extends React.Component {
    state = {
        dropdown: [],
        enabled: false,
        theme: "Gruvbox"
    }
    
    genDropdown = () => {
        const ret: React.ReactNode[] = [];
        Object.keys(themes).forEach((themeName) => {
            ret.push(
                <button 
                    name={themeName}
                    className="
                        bg-secondary
                        hover:bg-highlight
                        active:bg-highlight
                        focus:bg-highlight
                        p-2
                    "
                    onClick={() => {
                        setTheme(themeName);
                        this.setState({theme: themeName});
                    }}>
                    <h3 key={themeName}> {themeName} </h3>
                </button>
            )
        });
        return ret;
    }

    componentDidMount = () => {
        this.setState({dropdown: this.genDropdown(), theme: getTheme()});
    }

    render = () => {
        return (
            <div
                className="
                    px-4 py-2
                    rounded
                    text-base
                    font-normal
                    bg-secondary
                    w-full
                    inline-block
                    relative
                    cursor-pointer
                    select-none"
                onClick={() => {
                    this.setState({enabled: !this.state.enabled})
                }}>
                <div>
                    <h2>{this.state.theme}</h2>
                </div>
                <div className="
                    absolute
                    block
                    grid
                    grid-cols-1
                    shadow-lg
                    m-auto
                    mt-5
                    left-0
                    right-0
                ">
                    {this.state.enabled ?
                    this.state.dropdown
                    :
                    <div/>}
                </div>
            </div>
        );
    }
}
