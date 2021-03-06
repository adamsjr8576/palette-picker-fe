import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';

export const Header = ({ currentPalette }) => {
  let borderColor = '#F2F2F2';
  if (currentPalette.length) {
    borderColor = currentPalette[0].color;
  }
  return (
    <header className="main-header" style={{borderBottom: `12px solid ${borderColor}`}}>
      <h1 className="header-title">Palette Picker</h1>
    </header>
  )
}

export const mapStateToProps = state => ({
  currentPalette: state.currentPalette
});

export default connect(mapStateToProps)(Header);
