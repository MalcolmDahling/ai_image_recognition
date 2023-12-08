import { recipe } from '@vanilla-extract/recipes';

export const MainStyle = recipe({
  base: [
    {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 10,
    },
  ],
});
