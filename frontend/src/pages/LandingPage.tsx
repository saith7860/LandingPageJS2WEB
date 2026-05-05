import Navbar from "../components/Navbar"
import SignupForm from "../components/Signupform"
import Hero from "../components/Hero"

const LandingPage = () => {
  return (
 <div className="bg-[#0b0d1a] min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10">
        
        {/* Mobile: Hero first */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <Hero />
        </div>

        {/* Mobile: Form below, Desktop right side */}
        <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center">
          <SignupForm />
        </div>

      </div>
    </div>
  )
}

export default LandingPage;