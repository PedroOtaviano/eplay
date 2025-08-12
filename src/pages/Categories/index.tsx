import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../../pages/Home'

import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightingGames } = useGetFightingGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (
    actionGames &&
    sportGames &&
    simulationGames &&
    fightingGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="black"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sport"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="black"
          id="simulation"
        />
        <ProductsList
          games={fightingGames}
          title="Luta"
          background="gray"
          id="fighting"
        />
        <ProductsList
          games={rpgGames}
          title="RPG"
          background="black"
          id="rpg"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
