import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        isOpen={props.selectedRemove}
        contentLabel="Confirm Expense Removal"
        ariaHideApp={false}  
        onRequestClose= {props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Remove Expense?</h3>
        <button className="button modal__button" onClick={props.handleRemoveExpense}>OK</button>
        <button className="button button--secondary modal__button" onClick={props.handleCloseModal}>Cancel</button>
    </Modal>
);

export default RemoveModal;