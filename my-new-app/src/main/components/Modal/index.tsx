import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faThumbsUp, faThumbsDown} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Modal = ({text, type}: {text: string; type: 'danger' | 'success'}) => {
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
};

export default Modal;
