import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'
import './style.css';



export default function Header() {

  function openMenu() {
    alert('Open menu')
  }

  return (
    <header>
      <button id="menuButton" type="button" onClick={openMenu}>
        <AiOutlineMenu id="burger"/>
      </button>
      <span id="header-title">NOMI</span>
    </header>
  )
}
