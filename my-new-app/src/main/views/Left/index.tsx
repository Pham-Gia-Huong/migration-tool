import React from 'react';
import './index.css';
import Sidebar from '../../components/Sidebar';
import {withRouter} from 'react-router';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import {navigationToPage} from '../../features/left';
const LeftSide = ({history}: {history: any}) => {
  return (
    <div className="left-side">
      <Sidebar
        onClick={(key: number, item: any) => navigationToPage(key, item, history)}
        listItem={[
          {name: 'Home', icon: faThumbsUp},
          {name: 'Setting', icon: faThumbsDown},
        ]}
      />
    </div>
  );
};

export default (LeftSide);
