import api from '../api'
import get from 'lodash/get'
import PropTypes from 'prop-types'
import { listShips, listCharacters } from '../graphql/queries'

const HomePage = ({ ships, characters }) => {
  return (
    <>
      <h1>Ships</h1>
      {ships.map(ship => (
        <div key={ship.id}>{ship.name}</div>
      ))}
      <h1>Characters</h1>
      {characters.map(character => (
        <div key={character.id}>{character.name}</div>
      ))}
    </>
  )
}

HomePage.getInitialProps = async () => {
  const ships = await api(listShips)
  const characters = await api(listCharacters)

  return {
    ships: get(ships, 'data.listShips.items'),
    characters: get(characters, 'data.listCharacters.items')
  }
}

HomePage.propTypes = {
  ships: PropTypes.array,
  characters: PropTypes.array
}

HomePage.defaultProps = {
  ships: [],
  characters: []
}

export default HomePage
