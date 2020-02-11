import React from 'react';

const Add = (props) => {
    return(
      <div>
        <img src="https://media.comicbook.com/2018/05/avatar-the-last-airbender-blu-ray-set-1111431.jpeg" alt=""/>
        <div>
          {props.name}
        </div>
        <div>
          {props.headline}
        </div>
        <div>
          {props.content}
        </div>
      </div>
    )
}

export default Add;