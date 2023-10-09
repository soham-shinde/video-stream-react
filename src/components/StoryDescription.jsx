import React, { useState } from 'react'

export default function StoryDescription({description}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="story-board">
        <div className="story">
          <h3>Movie Description</h3>
          <div className={`story-text`}>
            <div className={`story-text-p  ${isExpanded ? 'expanded' : ''}`}>
              <p>
                {description}
              </p>
            </div>
          </div>
          <div className="show-more" onClick={toggleDescription}>
            <div className="show-more-icon">
              <img
                src={`/img/line-angle-${isExpanded ? 'up' : 'down'}-icon.svg`}
                alt="icon"
              />
            </div>
            <div className="show-more-text">
              <p>{isExpanded ? 'Show Less' : 'Show More'}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
