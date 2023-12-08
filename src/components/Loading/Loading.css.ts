import { recipe } from '@vanilla-extract/recipes';

export const LoadingDivStyle = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export const LoadingParagraphStyle = recipe({
  base: {
    color: 'white',
    fontFamily: 'Arial',
  },
});
