import * as React from 'react';

export default class VisitCounter extends React.Component {
    state = {
        count: 0, 
    }
    fetched = false

    componentDidMount = async () => {
        if (!this.fetched) {
            this.fetched = true;
            let count = await (await fetch("https://visit-counter.vercel.app/counter?page=https://aphrim.dev")).text();
            this.setState({count: count});
        }
    }

    render = () => {
        return (
            <h1 className="text-foreground text-6xl mt-12"> {this.state.count} Total Site Visitors (Starting Apr 2023) </h1> 
        );
    }
}
