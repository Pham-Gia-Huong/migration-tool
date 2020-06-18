import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Modal = ({isOpen,text, type}: {isOpen:boolean,text?: string; type: 'danger' | 'success'}) => {
  if(isOpen){
    return (
      <div className="modal-wrap">
        <div className="modal-popup">
          <div className={`modal-icon ${type === 'success' ? 'success' : 'danger'}`}>
            {type === 'success' ? <FontAwesomeIcon icon={faThumbsUp} /> : <FontAwesomeIcon icon={faThumbsDown} />}
          </div>
          <div className="modal-text">{text}</div>
        </div>
      </div>
    );
  }
  return <div></div>
};

export default Modal;
