import React from 'react';
import ModalContainer from '../../components/ModalContainer';
import './index.css';
import TextFilter from './Text';
const ModalFilter = () => {
  return (
    <ModalContainer isOpen={true} onClose={() => {}} onSave={() => {}}>
      <div className="modal-filter">
        <TextFilter />
      </div>
    </ModalContainer>
  );
};

export default ModalFilter;
