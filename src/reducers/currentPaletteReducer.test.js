import { currentPalette } from '../reducers/currentPaletteReducer';

describe('currentPaletteReducer', () => {
  it('Should have a default state', () => {
    const expected = [];
    const result = currentPalette(undefined, {});
    expect(result).toEqual(expected);
  });

  it('Should update state when type is ADD_PALETTE', () => {
    const mockCurrentPalette = [
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'}];
    const mockAction = {
      type: 'ADD_PALETTE',
      currentPalette: mockCurrentPalette
    };

    const expected = mockCurrentPalette;
    const result = currentPalette([], mockAction);
    expect(result).toEqual(expected);
  });

  it('Should update state when type is UPDATE_PALETTE_LOCKED', () => {
    const mockHexCode = '#83745';
    const mockState = [
      {locked: false, color: '#83745'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'}];

    const mockAction = {
      type: 'UPDATE_PALETTE_LOCKED',
      hexCode: mockHexCode
    };

    const expected = [
      {locked: true, color: '#83745'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'},
      {locked: false, color: '#11111'}];
      
    const result = currentPalette(mockState, mockAction);
    expect(result).toEqual(expected);
  });
});
