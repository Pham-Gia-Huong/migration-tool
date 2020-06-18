import React from 'react';
import './index.css'
import Sidebar from '../../components/Sidebar';
import {useRedirect} from 'hookrouter';

import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';

const LeftSide = () => {
  return (
    <div className="left-side">
      <Sidebar
        onClick={(name)=>{
          console.log("name",name)
          // useRedirect("/migrateConfig");
        }}
        listItem={[
          {name: 'hehe', icon: faThumbsUp},
          {name: 'haha', icon: faThumbsDown},
        ]}
      />
    </div>
  );
};

export default LeftSide;
