"use client";
import { ModalProps } from '@/types';
import React, { FC, useEffect } from 'react';

const Modal: FC<ModalProps> = (props) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const modalMain = document.querySelector('.modal-main');

      if (props.open && modalMain && !modalMain.contains(event.target as Node)) {
        props.onClose();
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (props.open && event.key === 'Escape') {
        props.onClose();
      }
    };

    document.body.addEventListener('click', handleOutsideClick);
    document.body.addEventListener('keydown', handleKeyPress);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
      document.body.removeEventListener('keydown', handleKeyPress);
    };
  }, [props.open, props.onClose]);

  return (
    <div className={`${props.open ? 'modal display-block' : 'modal display-none'}`}>
      <div className="modal-main">
        <div className="modal-body">
          {props.children}
        </div>
      </div>
    </div>
  );
};


export default Modal;
