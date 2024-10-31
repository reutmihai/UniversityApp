import React from 'react';
import robot from '../../../assets/robot.png';
import cat from '../../../assets/cat.png';
import pin from '../../../assets/pin.png';
import pencil from '../../../assets/pencil.png';
import hand from '../../../assets/hand.png';

export const Icon = ({ variant, label, size = 24 }) => {
  function getVariant(variant) {
    switch (variant) {
      case 'robot':
        return robot;
      case 'cat':
        return cat;
      case 'pin':
        return pin;
      case 'pencil':
        return pencil;
      case 'hand':
        return hand;
    }
  }
  return <img src={getVariant(variant)} alt={label} height={size} />;
};
