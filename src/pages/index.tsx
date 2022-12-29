import { NextPage } from 'next'
import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$green300',
  borderRadius: '4px',
  border: 0,
  padding: '1rem 2rem',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

const Home: NextPage = () => {
  return (
    <Button>
      <span>Teste</span>
      Enviar
    </Button>
  )
}

export default Home
