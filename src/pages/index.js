import { useEffect, useState } from 'react'
import api from '../api'
import get from 'lodash/get'
import { listShips } from '../graphql/queries'

const HomePage = () => {
  const [ships, setShips] = useState([])

  useEffect(async () => {
    const shipData = await api(listShips)
    setShips(get(shipData, 'data.listShips.items', []))
  }, [])

  return (
    <>
      <h1>Ships</h1>
      {ships.map(ship => (
        <div key={ship.id}>{ship.name}</div>
      ))}
    </>
  )
}

export default HomePage
