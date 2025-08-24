import React, { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ videos: 0, engagement: 0, clients: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Animation for stats counting up
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setStats(prev => {
          const newVideos = prev.videos < 1000 ? prev.videos + 20 : 1000;
          const newEngagement = prev.engagement < 95 ? prev.engagement + 2 : 95;
          const newClients = prev.clients < 500 ? prev.clients + 10 : 500;
          
          if (newVideos >= 1000 && newEngagement >= 95 && newClients >= 500) {
            clearInterval(interval);
            return { videos: 1000, engagement: 95, clients: 500 };
          }
          return { videos: newVideos, engagement: newEngagement, clients: newClients };
        });
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const videoLinks = [
    "https://youtube.com/shorts/oGo1MST6cEI?si=eC6JIo_u_5063rF7",
    "https://youtube.com/shorts/hDKowxq57VA?si=YbMyBrh4FBDBTbdv",
    "https://youtube.com/shorts/R-gsm92fmFo?si=VnrXCg_O9cGJa8Qh",
    "https://youtube.com/shorts/1Nus3xVgoOs?si=3dTR1X0_Do5Q-3zZ",
    "https://youtube.com/shorts/Db8fda-QoY4?si=fg5YQ80U8u4Hq0yu",
    "https://youtube.com/shorts/ZEzv3qylbYw?si=4DOV7O62pTDEPsG3"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "EcoBeauty Cosmetics",
      text: "Vasu's UGC strategy increased our conversion rate by 230% in just 3 months. The authentic content resonated perfectly with our audience.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "FitLife App",
      text: "The video campaigns created by Vasu Koshle drove unprecedented engagement. Our user acquisition costs dropped by 60%.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      company: "UrbanFashion",
      text: "Professional, creative, and results-driven. Vasu understands the psychology behind viral content better than anyone I've worked with.",
      rating: 5
    }
  ];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-pulse opacity-80 blur-lg"></div>
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 animate-spin"></div>
            <div className="absolute inset-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">VK</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 animate-pulse">
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
              Vasu
            </span>{" "}
            <span className="text-emerald-100">Koshle</span>
          </h1>
          <p className="text-emerald-200 text-lg animate-bounce">Creating Digital Magic</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-800 overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-30 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm border border-yellow-300/30 animate-pulse">
                <span className="text-2xl font-bold text-white">VK</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                  Vasu
                </span>{" "}
                <span className="text-emerald-100">Koshle</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Services", "Portfolio", "About", "Testimonials", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-emerald-100 hover:text-white text-lg font-medium relative group transition-all duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
            <button className="md:hidden text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight relative">
                  <span className="block">UGC Video</span>
                  <span 
                    className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)',
                      animation: 'shine 2s linear infinite'
                    }}
                  >
                    Revolution
                  </span>
                  <style jsx>{`
                    @keyframes shine {
                      0% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3); }
                      50% { text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.5); }
                      100% { text-shadow: 0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3); }
                    }
                  `}</style>
                </h2>
                <p className="text-xl text-emerald-100 leading-relaxed">
                  Transforming brands through authentic, high-impact user-generated content that drives engagement and sales.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-yellow-300/30 transform hover:-translate-y-1 animate-pulse"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2)',
                    animation: 'borderShine 2s ease-in-out infinite alternate'
                  }}
                >
                  Get Started
                </button>
                <button 
                  className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-200 font-semibold rounded-2xl hover:bg-emerald-800/50 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  View Portfolio
                </button>
                <style jsx>{`
                  @keyframes borderShine {
                    0% { box-shadow: 0 0 15px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2); }
                    100% { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), inset 0 0 25px rgba(255, 215, 0, 0.4); }
                  }
                  @keyframes borderShineGreen {
                    0% { box-shadow: 0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2); }
                    100% { box-shadow: 0 0 25px rgba(0, 255, 170, 0.7), inset 0 0 25px rgba(0, 255, 170, 0.4); }
                  }
                `}</style>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div 
                  className="text-center p-6 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
                    }}
                  >
                    {stats.videos}+
                  </div>
                  <div className="text-emerald-200 text-sm">
                    Videos Created
                  </div>
                </div>
                <div 
                  className="text-center p-6 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
                    }}
                  >
                    {stats.engagement}%
                  </div>
                  <div className="text-emerald-200 text-sm">
                    Engagement Rate
                  </div>
                </div>
                <div 
                  className="text-center p-6 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div 
                    className="text-3xl md:text-4xl font-bold text-white mb-2"
                    style={{
                      textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
                    }}
                  >
                    {stats.clients}+
                  </div>
                  <div className="text-emerald-200 text-sm">
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-0 pb-[56.25%] bg-gradient-to-br from-emerald-800/50 to-teal-800/50 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50 relative overflow-hidden"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-emerald-200">
                      <div className="text-6xl mb-4">🎥</div>
                      <p className="text-lg font-semibold">यहाँ वीडियो जोड़ने के लिए URL डालें</p>
                      <p className="text-sm mt-2 opacity-70">Add video URL here (16:9 aspect ratio)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-0 pb-[56.25%] bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-2xl backdrop-blur-sm border border-yellow-400/30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                Services
              </span>
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Cutting-edge UGC video solutions tailored to your brand's unique needs and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "UGC Campaign Strategy", icon: "🎯", delay: "0s" },
              { name: "Influencer Network", icon: "👥", delay: "0.2s" },
              { name: "Video Production", icon: "🎥", delay: "0.4s" },
              { name: "Content Optimization", icon: "📊", delay: "0.6s" },
              { name: "Performance Analytics", icon: "📈", delay: "0.8s" },
              { name: "Brand Storytelling", icon: "📖", delay: "1s" }
            ].map((service, index) => (
              <div
                key={service.name}
                className="group relative p-8 rounded-3xl backdrop-blur-sm border-2 border-emerald-400/50 hover:border-emerald-400/70 transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
                style={{
                  background: 'rgba(0, 50, 40, 0.3)',
                  boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                  animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg animate-bounce"
                    style={{ animationDelay: service.delay, animationDuration: '2s' }}
                  >
                    <div className="text-3xl">{service.icon}</div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{service.name}</h4>
                  <p className="text-emerald-200 leading-relaxed">
                    Expert {service.name.toLowerCase()} services that deliver measurable results and authentic engagement.
                  </p>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: service.delay }}></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-emerald-400 rounded-full animate-ping opacity-75" style={{ animationDelay: `${parseFloat(service.delay) + 0.5}s` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Videos</span>
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Discover our most impactful UGC video campaigns that drove exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoLinks.map((link, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl backdrop-blur-sm border-2 border-emerald-400/50 hover:border-emerald-400/70 transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
                style={{
                  background: 'rgba(0, 50, 40, 0.3)',
                  boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                  animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-full h-0 pb-[56.25%] relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-emerald-700/50 to-teal-700/50 rounded-t-2xl backdrop-blur-sm border-b-2 border-emerald-400/50 flex items-center justify-center"
                      style={{
                        boxShadow: 'inset 0 0 15px rgba(0, 255, 170, 0.2)'
                      }}
                    >
                      <div className="text-center text-emerald-200">
                        <div className="text-4xl mb-2">🎬</div>
                        <p className="text-sm">Video {index + 1}</p>
                        <p className="text-xs mt-1 opacity-70">Click to view</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-2">UGC Campaign #{index + 1}</h4>
                    <p className="text-emerald-200 text-sm">Engagement: 95% | Views: 1M+</p>
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-full blur-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                About <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Vasu Koshle</span>
              </h3>
              <p className="text-xl text-emerald-100 leading-relaxed">
                With over 8 years of experience in digital content creation, Vasu Koshle has pioneered innovative UGC strategies that have transformed brands across industries.
              </p>
              <p className="text-lg text-emerald-200 leading-relaxed">
                Our approach combines data-driven insights with creative storytelling to produce authentic content that resonates with audiences and drives measurable business results. We believe that real people create the most powerful marketing messages.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div 
                  className="p-6 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div className="text-2xl font-bold text-white mb-2">8+</div>
                  <div className="text-emerald-200">Years Experience</div>
                </div>
                <div 
                  className="p-6 rounded-2xl backdrop-blur-sm border-2 border-emerald-400/50"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div className="text-2xl font-bold text-white mb-2">50+</div>
                  <div className="text-emerald-200">Industries Served</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <div 
                  className="w-full h-96 rounded-3xl backdrop-blur-sm border-2 border-emerald-400/50 flex items-center justify-center"
                  style={{
                    background: 'rgba(0, 50, 40, 0.3)',
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  <div className="text-center text-emerald-200">
                    <div className="text-6xl mb-4">👤</div>
                    <p className="text-lg">यहाँ वीडियो जोड़ने के लिए URL डालें</p>
                    <p className="text-sm mt-2 opacity-70">Add team video here</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-96 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-3xl backdrop-blur-sm border border-yellow-400/30 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Testimonials</span>
            </h3>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Don't just take our word for it. Hear what our clients have to say about their experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl backdrop-blur-sm border-2 border-emerald-400/50 hover:border-emerald-400/70 transition-all duration-500 hover:scale-105 transform hover:-translate-y-2"
                style={{
                  background: 'rgba(0, 50, 40, 0.3)',
                  boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                  animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-emerald-100 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-emerald-300 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: `${index * 0.2}s` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-30 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div 
            className="rounded-3xl p-12 backdrop-blur-sm border-2 border-emerald-400/50"
            style={{
              background: 'rgba(0, 50, 40, 0.3)',
              boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
              animation: 'borderShineGreen 2s ease-in-out infinite alternate'
            }}
          >
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-yellow-600/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Transform</span> Your Brand?
              </h3>
              <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
                Join hundreds of successful brands that have leveraged our UGC video expertise to achieve unprecedented growth and engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-yellow-300/30 transform hover:-translate-y-1 animate-pulse"
                  style={{
                    boxShadow: '0 0 15px rgba(255, 215, 0, 0.4), inset 0 0 15px rgba(255, 215, 0, 0.2)',
                    animation: 'borderShine 2s ease-in-out infinite alternate'
                  }}
                >
                  Start Your Campaign
                </button>
                <button 
                  className="px-10 py-5 bg-transparent border-2 border-emerald-400 text-emerald-200 font-semibold rounded-2xl hover:bg-emerald-800/50 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1"
                  style={{
                    boxShadow: '0 0 15px rgba(0, 255, 170, 0.4), inset 0 0 15px rgba(0, 255, 170, 0.2)',
                    animation: 'borderShineGreen 2s ease-in-out infinite alternate'
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-30 px-6 py-12 border-t border-emerald-700/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-yellow-300/30">
                  <span className="text-xl font-bold text-white">VK</span>
                </div>
                <h4 className="text-2xl font-bold text-white">
                  <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">Vasu</span>{" "}
                  <span className="text-emerald-100">Koshle</span>
                </h4>
              </div>
              <p className="text-emerald-200">
                Creating authentic UGC video content that drives real results.
              </p>
            </div>
            
            {["Services", "Company", "Legal", "Connect"].map((category) => (
              <div key={category}>
                <h5 className="text-lg font-semibold text-white mb-4">{category}</h5>
                <ul className="space-y-2">
                  {["Home", "About", "Portfolio", "Contact", "Privacy"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-emerald-200 hover:text-white transition-colors duration-300">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-emerald-700/30 mt-12 pt-8 text-center">
            <p className="text-emerald-300">
              © 2024 Vasu Koshle. All rights reserved. Creating digital magic with UGC videos.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;