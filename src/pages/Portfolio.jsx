// SIX APPLICATIONS
//{title, image, link to deployed app, GitHub repo}

// <Project project={project}/>
// <Project project={project}/>
// <Project project={project}/>
// <Project project={project}/>
// <Project project={project}/>
// <Project project={project}/>


import Row from 'react-bootstrap/Row';
import Project from '../components/Project';
import projectsList from '../projects';

function Portfolio() {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            <Project project={projectsList.id('tutorhub').details} />
            <Project project={projectsList.id('weather').details} />
            <Project project={projectsList.id('roster').details} />
            <Project project={projectsList.id('social').details} />
            <Project project={projectsList.id('ntsg').details} />
            <Project project={projectsList.id('jenna').details} />

        </Row>
    );
}


export default Portfolio;