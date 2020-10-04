import React from 'react';
import DescriptionBox from './DescriptionBoxes/DescriptionBox'
import './DescriptionBoxes.css';

function DescriptionBoxes() {
    const contentBoxes = [
        {
            title: "OSA.",
            description: "Our premier summer internship for underclassmen. mentorship, impactful projects, and more can be found in the open source accelerator: the first program of its kind in the united states."
        },
        {
            title: "Launchpad.",
            description: "Our premier fall program for new web developers. launchpad is where impact begins and learning ends: the first program of its kind in the united states."
        },
        {
           title: "Social Good.",
           description: "This is the heart of riceapps. if there is no impact, there is no project. we’re always looking for new opportunities to create good through our digital solutions, so please reach out if your organization needs dedicated problem-solvers to tackle an issue!" 
        }
    ];
  return (
    <div className="DescriptionBoxes">
        {contentBoxes.map(contentBox => {
            let { title, description } = contentBox;
            return (<DescriptionBox title={title} description={description} />);
        })}
    </div>
  );
}

export default DescriptionBoxes;