import { recipe } from '@vanilla-extract/recipes';

export const TrainFormStyle = recipe({
  base: {
    width: 322,

    display: 'flex',
    gap: 10,
  },
});

export const TrainFormInputStyle = recipe({
  base: {
    width: '100%',

    boxSizing: 'border-box',
  },
});
