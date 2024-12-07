
import About from "./section/about/About"
import Experience from "./section/experience/Experience"
import Hero from "./section/hero/Hero"
import Work from "./section/work/Work"



const Home = () => {
  return (
    <div>
     
        <Hero/>
        <About/>
        <Experience/>
        <div className="work text-white">
          <p className="px-5 py-3 capitalize text-[20px]">my work </p>
          <Work/>
        </div>
        
      
    </div>
  )
}

export default Home
