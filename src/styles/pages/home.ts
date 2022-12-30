import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  // gap: '3rem',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 520,

  marginLeft: 'auto',
})

export const Product = styled('a', {
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 8,
  cursor: 'pointer',

  position: 'relative',

  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  overflow: 'hidden',

  footer: {
    background: 'rgba(0, 0, 0, 0.6)',

    padding: '1.5rem',
    position: 'absolute',
    bottom: '0.5rem',
    left: '0.5rem',
    right: '0.5rem',

    borderRadius: 6,

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    strong: {
      fontSize: '$lg',
    },

    span: {
      fontSize: '$xl',
      color: '$gray300',
      fontWeight: 'bold',
    },

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
