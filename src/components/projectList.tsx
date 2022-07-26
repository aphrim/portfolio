import * as React from 'react';

import ProjectPanel from '@components/projectPanel';
import Button from './button';

export default class ProjectList extends React.Component {
    //ToDo: Tags
    state = {
        projects: undefined,
        allProjects: undefined,
        tags: [],
    }

    genProjects = async () => {
        let fetched = await(await fetch('/api/projects')).json();
        let gend = [] as React.ReactNode[];
        fetched.forEach((p: any) => {
            gend.push(<ProjectPanel name={p.name} id={p.id} />);
        });
        this.setState({projects: gend, allProjects: gend});
    }

    componentDidMount = () => {
        this.genProjects();
    }


    render = () => {
        return (
            <div className="grid grid-cols-1">
                { this.state.projects ? this.state.projects : <div/> }
            </div>
        )
    }

}
