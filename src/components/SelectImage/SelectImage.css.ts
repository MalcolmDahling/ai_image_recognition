import { colors } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const SelectImageFormStyle = recipe({
  base: {
    width: 322,
    display: 'flex',
    border: '1px solid black',
  },
});

export const SelectImageInputStyle = recipe({
  base: {
    flexBasis: '100%',
    padding: 10,

    border: 'none',
    borderRight: '1px solid black',
    backgroundColor: colors.gray,
    boxSizing: 'border-box',
    boxShadow: '5px 5px 5px rgba(0,0,0,0.25)',
  },
});

export const SelectImageButtonStyle = recipe({
  base: {
    cursor: 'pointer',
    boxShadow: '5px 5px 5px rgba(0,0,0,0.25)',
    backgroundColor: colors.gray,
    border: 'none',

    selectors: {
      '&:hover': {
        backgroundColor: 'rgb(200, 200, 200)',
      },
    },
  },
});
