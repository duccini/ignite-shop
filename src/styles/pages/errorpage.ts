import { styled } from '..'

export const ErrorPageContainer = styled('main', {
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  padding: '3rem 0',

  h1: {
    textAlign: 'center',
  },

  a: {
    display: 'block',
    textDecoration: 'none',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',

    marginTop: '2rem',
    textAlign: 'center',

    '&:hover': {
      color: '$green300',
    },
  },
})
