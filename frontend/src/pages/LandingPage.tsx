import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import SignupForm from "../components/Signupform";
import Hero from "../components/Hero";

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const [campaign, setCampaign] = useState<{ title: string; description: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await fetch(`/api/campaign/specific?slug=${slug}`);
        const data = await response.json();
        
        if (data.success && data.data) {
          setCampaign(data.data);
        } else {
          // Campaign not found, redirect to 404
          navigate('/not-found', { replace: true });
        }
      } catch (error) {
        console.error("Error fetching campaign:", error);
        navigate('/not-found', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchCampaign();
    }
  }, [slug, navigate]);

  if (loading) {
    return <div className="bg-[#0b0d1a] min-h-screen flex items-center justify-center text-white text-xl">Loading...</div>;
  }

  if (!campaign) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="bg-[#0b0d1a] min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-10">
        
        {/* Mobile: Hero first */}
        <div className="w-full md:w-1/2 order-1 md:order-1">
          <Hero title={campaign.title} description={campaign.description} />
        </div>

        {/* Mobile: Form below, Desktop right side */}
        <div className="w-full md:w-1/2 order-2 md:order-2 flex justify-center">
          <SignupForm slug={slug || ''} />
        </div>

      </div>
    </div>
  )
}

export default LandingPage;