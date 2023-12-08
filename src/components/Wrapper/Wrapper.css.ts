import { colors } from '@/styles/sprinkles.css';
import { recipe } from '@vanilla-extract/recipes';

export const WrapperStyle = recipe({
  base: [
    {
      position: 'absolute',
      inset: 0,

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 10,

      backgroundColor: colors.background,
    },
  ],
});
