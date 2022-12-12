import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'

// Stylesheet
import './style.css';

export default function Header() {

  // Call a fnction to 'append' menu if that's the right word..
  function openMenu() {
    alert('Open menu')
  }

  return (
    <header>
      <button id="menuButton" type="button" onClick={openMenu}>
        <AiOutlineMenu id="burger"/>
      </button>
      <img id="header-img" src="../../../nomi.png"/>
    </header>
  )
}
