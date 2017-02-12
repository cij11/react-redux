import React from 'react';

//Video list uses bootstrap classnames inside its jsx.
const VideoList = (props) =>{
  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  );
};

export default VideoList;
