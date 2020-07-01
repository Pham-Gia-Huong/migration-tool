import React from 'react';
import './index.css';

const ModalContainerTitle = (props: ModalContainerButton) => {
  return (
    <div className="modal-container-content-title">
      <div className="modal-content-text">header</div>
      <div className="modal-content-icon" onClick={props.onClose}>
        x
      </div>
    </div>
  );
};

const ModalContainerContent: React.StatelessComponent<ModalContainerButton> = (props) => {
  return <div className="modal-container-content-center">{props.children}</div>;
};

const ModalContainerFooter = (props: ModalContainerButton) => {
  return (
    <div className="modal-container-content-footer">
      <a className="modal-content-btn save" onClick={() => props.onSave()}>
        Save
      </a>
      <a className="modal-content-btn close" onClick={() => props.onClose}>
        Close
      </a>
    </div>
  );
};

const BorderLine = () => {
  return <div className="border-container-border"></div>;
};
const ModalContainer: React.StatelessComponent<ModalContainerProps> = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-container-content">
        <ModalContainerTitle onClose={props.onClose} />
        <BorderLine />
        <ModalContainerContent {...props} />
        <BorderLine />
        <ModalContainerFooter onClose={props.onClose} onSave={props.onSave} />
      </div>
    </div>
  );
};

export default ModalContainer;
