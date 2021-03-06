import React from 'react';
import { PaletteCard } from './PaletteCard';
import { render, fireEvent } from '@testing-library/react';

describe('PaletteCard', () => {
  let mockProps, setup;

  test('should match the snapshot when locked is true', () => {
    mockProps = {
      locked: true,
      hexCode: '#11111',
      rightColor: '#6D6D6D',
      leftColor: '#C2C2C2',
      updatePaletteLocked: jest.fn()
    }

    setup = () => {
      const utils = render(<PaletteCard
        locked={mockProps.locked}
        hexCode={mockProps.hexCode}
        rightColor={mockProps.rightColor}
        leftColor={mockProps.leftColor}
        updatePaletteLocked={mockProps.updatePaletteLocked}
      />)
      return { utils };
    }

    const { utils } = setup();
    expect(utils).toMatchSnapshot();
  });

  test('should match the snapshot when locked is false', () => {
    mockProps = {
      locked: false,
      hexCode: '#11111',
      rightColor: '#6D6D6D',
      leftColor: '#C2C2C2',
      updatePaletteLocked: jest.fn()
    }

    setup = () => {
      const utils = render(<PaletteCard
        locked={mockProps.locked}
        hexCode={mockProps.hexCode}
        rightColor={mockProps.rightColor}
        leftColor={mockProps.leftColor}
        updatePaletteLocked={mockProps.updatePaletteLocked}
      />)
      return { utils };
    }

    const { utils } = setup();
    expect(utils).toMatchSnapshot();
  });

  test('should invoke updatePaletteLocked when button is clicked', () => {
    mockProps = {
      locked: false,
      hexCode: '#11111',
      rightColor: '#6D6D6D',
      leftColor: '#C2C2C2',
      updatePaletteLocked: jest.fn()
    }

    setup = () => {
      const utils = render(<PaletteCard
        locked={mockProps.locked}
        hexCode={mockProps.hexCode}
        rightColor={mockProps.rightColor}
        leftColor={mockProps.leftColor}
        updatePaletteLocked={mockProps.updatePaletteLocked}
      />);
      const btn = utils.getByRole('update-palette=locked')
      return {
        btn,
        ...utils
      };
    }

    const { btn } = setup();
    fireEvent.click(btn);
    expect(mockProps.updatePaletteLocked).toHaveBeenCalledWith(mockProps.hexCode);
  });

  test('should invoke updatePaletteLocked when Enter is clicked', () => {
    mockProps = {
      locked: false,
      hexCode: '#11111',
      rightColor: '#6D6D6D',
      leftColor: '#C2C2C2',
      updatePaletteLocked: jest.fn()
    }

    setup = () => {
      const utils = render(<PaletteCard
        locked={mockProps.locked}
        hexCode={mockProps.hexCode}
        rightColor={mockProps.rightColor}
        leftColor={mockProps.leftColor}
        updatePaletteLocked={mockProps.updatePaletteLocked}
      />);
      const btn = utils.getByRole('update-palette=locked')
      return {
        btn,
        ...utils
      };
    }

    const { btn } = setup();
    fireEvent.keyDown(btn, { key: 'Enter', code: 13 });
    expect(mockProps.updatePaletteLocked).toHaveBeenCalledWith(mockProps.hexCode);
  });
});
