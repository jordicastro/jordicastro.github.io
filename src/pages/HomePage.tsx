import Hero from "../components/Hero"
import Cards from "../components/ProjectCards"

const HomePage = () => {
  return (
    <>
      <Hero />
      <Cards isHome={true}/>
    </>
  )
}

export default HomePage