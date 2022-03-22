import React from 'react';
import { useState, useEffect } from 'react';
import PopupWithOutForm from './PopupWithOutForm';
import checkedIcon from '../images/checked.svg';

function InfoTooltip(props) {

    function handleSubmit(evt) {
        evt.preventDefault(evt);
        // props.onUpdateAvatar(inputRef.current.value);
      };



    return (

        <PopupWithOutForm
            name="info-tooltip"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
          <div className="form__field">
            <img className="popup__img popup__img_icon"
                    src={checkedIcon}
                    alt='checked' />
            <h2 className="page-title popup__page-title  text-overflow">Вы успешно зарегистрировались!</h2>
          </div>
      </PopupWithOutForm>

    );
}

export default InfoTooltip;