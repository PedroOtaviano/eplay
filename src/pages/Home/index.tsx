import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
//     title: 'Resident Evil 4',
//     system: 'PC',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
//     title: 'Resident Evil 4',
//     system: 'PS5',
//     infos: ['5%', 'R$ 290,00'],
//     image: resident
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
//     title: 'Resident Evil 4',
//     system: 'PC',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   },
//   {
//     id: 4,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
//     title: 'Resident Evil 4',
//     system: 'PC',
//     infos: ['10%', 'R$ 250,00'],
//     image: resident
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'RPG',
//     description:
//       'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertaiment.',
//     title: 'Diablo IV',
//     system: 'PC',
//     infos: ['17/05'],
//     image: diablo
//   },
//   {
//     id: 6,
//     category: 'RPG',
//     description:
//       'Zeldinha é o melhor jogo de todos os tempos, desenvolvido pela Nintendo.',
//     title: 'The Legend of Zelda: Breath of the wild',
//     system: 'Switch',
//     infos: ['20/05'],
//     image: zelda
//   },
//   {
//     id: 7,
//     category: 'Ação',
//     description: 'Star Wars é um jogo muito louco',
//     title: 'Star Wars',
//     system: 'PS5',
//     infos: ['17/05'],
//     image: starWars
//   },
//   {
//     id: 8,
//     category: 'RPG',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
//     title: 'Resident Evil 4',
//     system: 'Switch',
//     infos: ['17/05'],
//     image: resident
//   }
// ]

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  return (
    <>
      <Banner />
      <ProductsList
        games={onSaleGames}
        title="Promoções"
        background="gray"
        id="on-sale"
        isLoading={isLoadingSale}
      />
      <ProductsList
        games={soonGames}
        title="Em breve"
        background="black"
        id="coming-soon"
        isLoading={isLoadingSoon}
      />
    </>
  )
}

export default Home
