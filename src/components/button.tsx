import * as React from 'react';

export interface ButtonProps {
    clickCallback?: React.MouseEventHandler<HTMLButtonElement>;
    extraStyle?: string;
    id?: string;
}

export default class Button extends React.Component<ButtonProps> {
    constructor(props: any) {
        super(props);
    }

    render = () => {
        return (
            <button
                onClick = {this.props.clickCallback}
                id = {this.props.id}
                className={`
                    px-4 py-4
                    rounded
                    text-base
                    font-normal
                    bg-highlight
                    text-lg
                    text
                    w-max
                    ${this.props.extraStyle}`}>
                {this.props.children}
            </button>
        )
    }
}
