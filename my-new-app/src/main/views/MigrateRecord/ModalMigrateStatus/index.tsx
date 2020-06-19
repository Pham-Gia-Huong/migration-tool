import React from 'react'
import { useEffect, useState } from "react";
import Spinner from "../../../components/Spinner";
import Modal from "../../../components/Modal";

const ModalMigrateStatus = ({error, isLoading, status}: ModalMirateStatus) => {
  const [isShow, setIsShow] = useState(!isLoading);
  useEffect(() => {
    setIsShow(!isLoading);
  }, [isLoading]);

  if (isLoading) {
    return <Spinner />;
  }

  if (status === 'fail') {
    setTimeout(() => {
      setIsShow(false);
    }, 3500);
    return <Modal isOpen={isShow} type={'danger'} text={error} />;
  }
  if (status === 'success') {
    setTimeout(() => {
      setIsShow(false);
    }, 1500);
    return <Modal isOpen={isShow} type={'success'} text={''} />;
  }
  return <div></div>;
};

export default ModalMigrateStatus;