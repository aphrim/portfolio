import * as React from 'react';

export default class Highlight extends React.Component {

    render = () => {
        return (
            <span className="text-highlight">
                {this.props.children}
            </span>
        )
    }
}
