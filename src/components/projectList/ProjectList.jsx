import './projectList.scss'

import React from 'react'
import Project from '../project/Project'
import { projects,projectsPageTitle,projectsPageSubtitle} from "../../data";


const ProjectList = () => {
    return (
        <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">{projectsPageTitle}</h1>
        <p className="pl-desc">{projectsPageSubtitle}</p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
    )
}

export default ProjectList
