import React, { useEffect } from 'react'
import styled from "styled-components";

const Modal = styled.div`
  padding: 16px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  background-color: #ff6d00;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  transform: ${props => props.open ? "translateY(0)" : "translateY(200%)"};
  transition: transform 0.5s ease-in-out;
`

const AddModal = ({ open, onClose }) => {
  useEffect(() => {
    let intervalId;
    if (open) {
      intervalId = setInterval(() => {
        onClose();
        clearInterval(intervalId);
      }, 3500);
    }
    return () => clearInterval(intervalId);
  }, [open, onClose]);

  return <Modal open={open}>Se añadió el producto a tu carrito</Modal>;
};

export default AddModal