import Hero from "../components/Hero"
import Cards from "../components/Cards"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cards isHome={true}/>
    </>
  )
}

export default HomePage