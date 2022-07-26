import * as React from 'react';
import Button from './button';

export interface ProjectPanelProps {
    name: string;
    id: string;
}

export default class ProjectPanel extends React.Component<ProjectPanelProps> {
    

    render = () => {
        return (
            <div className="m-auto mt-8 w-10/12 md:w-8/12 lg:w-1/3 p-8 flex bg-secondary place-content-between items-center rounded">
                <h1 className="text-2xl sm:text-3xl lg:text-5xl text-primary"> {this.props.name} </h1>
                <Button clickCallback={() => {window.open(`/projects/${this.props.id}`)}}> View </Button>
            </div>
        );
    }
}
