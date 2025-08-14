import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTitle>Categorias</SectionTitle>
          <Links>
            <li>
              <Link to="/categories#rpg">RPG</Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de RPG"
                to="/categories#action"
              >
                Ação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de esportes"
                to="/categories#sport"
              >
                Esportes
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de simulação"
                to="/categories#simulation"
              >
                Simulação
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar jogos de luta"
                to="/categories#fighting"
              >
                Luta
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Acesso Rápido</SectionTitle>
          <Links>
            <li>
              <Link
                title="Clique aqui para acessar a seção de promoções"
                to="/#on-sale"
              >
                Promoções
              </Link>
            </li>
            <li>
              <Link
                title="Clique aqui para acessar a seçao de em breve"
                to="/#coming-soon"
              >
                Em breve
              </Link>
            </li>
          </Links>
        </FooterSection>
        <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
      </div>
    </Container>
  )
}
export default Footer
