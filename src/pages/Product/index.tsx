import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Hero from '../../components/Hero'
import Section from '../../components/Section'

import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: game } = useGetGameQuery(id!)

  if (!game) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <b>Plataforma:</b> {game.details.system}
          <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte ao(s) idoma(s):{' '}
          {game.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        items={game.media.gallery}
        name={game.name}
        defaultCover={game.media.cover}
      />
    </>
  )
}

export default Product
