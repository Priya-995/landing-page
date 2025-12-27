import React, { useState } from 'react';
import { Menu, X, ChevronRight, TrendingUp, Users, Zap } from 'lucide-react';

const NFTLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const stats = [
    { value: '32k+', label: 'Artwork' },
    { value: '20k+', label: 'Auctions' },
    { value: '10k+', label: 'Artists' }
  ];

  const featuredArtworks = [
    {
      name: 'Milad Fakurian',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop'
    },
    {
      name: 'Erick Butler',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop'
    }
  ];

  const trendingWorks = [
    {
      name: 'Sebastian',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&h=800&fit=crop'
    },
    {
      name: 'Ferhat Deniz',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&h=800&fit=crop'
    },
    {
      name: 'Javier Miranda',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=800&fit=crop'
    },
    {
      name: 'Polina Kondrashova',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1620503374956-c942862f0372?w=800&h=800&fit=crop'
    },
    {
      name: 'Erick Butler',
      title: 'Golden Flower',
      price: '2.3 ETH',
      image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop'
    }
  ];

  const artists = [
    { name: 'Ferhat Deniz', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop' },
    { name: 'Sebastian', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
    { name: 'Javier Miranda', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop' },
    { name: 'Erick Butler', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fast Transactions',
      description: 'Experience lightning-fast NFT transactions powered by cutting-edge blockchain technology.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Active Community',
      description: 'Join thousands of artists and collectors in our vibrant NFT marketplace community.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Market Insights',
      description: 'Get real-time analytics and trends to make informed decisions about your NFT investments.'
    }
  ];

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-600/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Discover Rare Collections Of Art & NFT's
            </h1>
            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-xl">
              Create, Explore, & Collect Digital Art NFTs
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50">
              EXPLORE
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured NFT Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-purple-900/40 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-purple-500/20 transform hover:scale-105 transition-transform">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=600&fit=crop" 
                  alt="Featured NFT" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl"
                />
                <div className="bg-gradient-to-r from-blue-600/80 to-purple-600/80 backdrop-blur-sm rounded-2xl p-4 -mt-20 relative z-10 mx-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="Artist" className="w-10 h-10 rounded-full border-2 border-white" />
                    <div>
                      <div className="text-white font-semibold">Laura</div>
                      <div className="text-purple-200 text-sm">Remaining Time</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-white">
                    <div className="text-lg font-bold">18h : 27m : 14s</div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-purple-200 text-xs">Current Bid</div>
                        <div className="text-white font-bold text-lg">2.8 ETH</div>
                      </div>
                      <button className="bg-white text-purple-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        PLACE A BID
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bitcoin Art Work Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-pink-600/20 blur-3xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=800&fit=crop" 
                alt="Bitcoin Art" 
                className="relative rounded-3xl w-full h-96 lg:h-[600px] object-cover shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Bitcoin<br />Art Work
              </h2>
              <p className="text-purple-300">Created by <span className="text-purple-400 font-semibold">Jonathan Borba</span></p>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-gray-400 mb-2">Current Bid</div>
                  <div className="text-3xl font-bold text-white">1.09 ETH</div>
                  <div className="text-gray-400">$1,835</div>
                </div>
                <div>
                  <div className="text-gray-400 mb-2">Auction Ends In</div>
                  <div className="flex items-center gap-2 text-white">
                    <div className="text-center">
                      <div className="text-3xl font-bold">18</div>
                      <div className="text-xs text-gray-400">Hours</div>
                    </div>
                    <div className="text-2xl">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">57</div>
                      <div className="text-xs text-gray-400">Minutes</div>
                    </div>
                    <div className="text-2xl">:</div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">14</div>
                      <div className="text-xs text-gray-400">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full sm:w-auto bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
                View Art Work
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArtworks.map((artwork, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-purple-900/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20">
                  <img src={artwork.image} alt={artwork.title} className="w-full h-80 object-cover rounded-xl mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{artwork.name}</div>
                      <div className="text-gray-400 text-sm">{artwork.title}</div>
                    </div>
                    <div className="text-purple-400 font-bold">{artwork.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending This Week */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Trending This Week</h2>
              <p className="text-gray-400 max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labora et dolore magna aliqua
              </p>
            </div>
            <button className="mt-6 sm:mt-0 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
              Explore More
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {trendingWorks.map((work, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-purple-900/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <img src={work.image} alt={work.title} className="w-full h-64 sm:h-72 object-cover rounded-xl mb-4" />
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-semibold">{work.name}</div>
                      <div className="text-gray-400 text-sm">{work.title}</div>
                    </div>
                    <div className="text-purple-400 font-bold">{work.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Artists */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Popular Artists</h2>
            <button className="mt-6 sm:mt-0 bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 group">
              View all Artists
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {artists.map((artist, idx) => (
              <div key={idx} className="text-center group cursor-pointer">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-purple-500/30 group-hover:border-purple-500 transition-all mx-auto"
                  />
                </div>
                <div className="text-white font-semibold text-lg">{artist.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=600&h=600&fit=crop" 
                  alt="Community NFT" 
                  className="relative rounded-2xl w-full h-80 lg:h-96 object-cover shadow-2xl"
                />
              </div>
              
              <div className="space-y-6 text-white">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  Join The Community And Get The Best NFT Collection
                </h2>
                <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
                  JOIN COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderAboutPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">About NFTme</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're revolutionizing the digital art world by connecting creators and collectors through innovative NFT technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              NFTme was founded with a simple yet powerful vision: to democratize access to digital art and empower creators worldwide. We believe that every artist deserves a platform to showcase their work and connect with collectors who appreciate their unique vision.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our marketplace combines cutting-edge blockchain technology with an intuitive user experience, making it easy for anyone to buy, sell, and trade NFTs securely.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop" 
              alt="About" 
              className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: '500K+', label: 'Active Users' },
            { number: '$50M+', label: 'Trading Volume' },
            { number: '150+', label: 'Countries' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Innovation', desc: 'We constantly push boundaries to bring you the latest in NFT technology.' },
              { title: 'Security', desc: 'Your assets are protected by industry-leading blockchain security.' },
              { title: 'Community', desc: 'We foster a vibrant ecosystem of artists, collectors, and enthusiasts.' },
              { title: 'Transparency', desc: 'Every transaction is visible and verifiable on the blockchain.' }
            ].map((value, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderFeaturesPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Platform Features</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the powerful tools and features that make NFTme the premier destination for digital art.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all h-full">
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Create & Mint NFTs</h2>
            <p className="text-gray-300 text-lg">
              Our intuitive minting platform makes it easy to turn your digital art into NFTs. Upload your work, set your terms, and launch your collection in minutes.
            </p>
            <ul className="space-y-4">
              {[
                'Drag-and-drop file upload',
                'Customizable royalty settings',
                'Multiple blockchain support',
                'Batch minting capabilities'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop" 
              alt="Create NFTs" 
              className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-purple-600/30 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop" 
              alt="Marketplace" 
              className="relative rounded-2xl w-full h-96 object-cover shadow-2xl"
            />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Advanced Marketplace</h2>
            <p className="text-gray-300 text-lg">
              Buy and sell NFTs with confidence using our sophisticated marketplace tools. Advanced filtering, real-time bidding, and secure transactions.
            </p>
            <ul className="space-y-4">
              {[
                'Live auction system',
                'Fixed price listings',
                'Offer and counter-offer system',
                'Portfolio tracking'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const renderArtistsPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Featured Artists</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover talented creators from around the world who are shaping the future of digital art.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All Artists', 'Top Sellers', 'New Creators', 'Verified'].map((tab, idx) => (
            <button 
              key={idx}
              className="px-6 py-3 bg-purple-900/20 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/40 text-white hover:bg-purple-800/30 transition-all"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Featured Artist Spotlight */}
        <div className="mb-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600"></div>
          <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
            <div className="space-y-6 text-white">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                ⭐ Artist of the Month
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold">Ferhat Deniz</h2>
              <p className="text-lg text-white/90">
                Digital artist specializing in abstract 3D art and generative designs. With over 500 artworks sold and a community of 50K+ followers.
              </p>
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-3xl font-bold">247</div>
                  <div className="text-white/70">Artworks</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">52K</div>
                  <div className="text-white/70">Followers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">156 ETH</div>
                  <div className="text-white/70">Total Sales</div>
                </div>
              </div>
              <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Profile
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=600&fit=crop" 
                alt="Featured Artist" 
                className="rounded-2xl w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* All Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { 
              name: 'Ferhat Deniz', 
              image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop',
              artworks: 247,
              followers: '52.3K',
              verified: true
            },
            { 
              name: 'Sebastian', 
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
              artworks: 189,
              followers: '43.1K',
              verified: true
            },
            { 
              name: 'Javier Miranda', 
              image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
              artworks: 156,
              followers: '38.7K',
              verified: true
            },
            { 
              name: 'Erick Butler', 
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
              artworks: 203,
              followers: '45.2K',
              verified: true
            },
            { 
              name: 'Laura Mitchell', 
              image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop',
              artworks: 134,
              followers: '29.8K',
              verified: false
            },
            { 
              name: 'Marcus Chen', 
              image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
              artworks: 98,
              followers: '24.5K',
              verified: false
            },
            { 
              name: 'Sofia Rodriguez', 
              image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop',
              artworks: 176,
              followers: '35.9K',
              verified: true
            },
            { 
              name: 'David Kim', 
              image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop',
              artworks: 142,
              followers: '31.2K',
              verified: false
            },
          ].map((artist, idx) => (
            <div key={idx} className="group relative cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-purple-900/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <div className="relative inline-block mb-4">
                  <img 
                    src={artist.image} 
                    alt={artist.name} 
                    className="w-full aspect-square rounded-xl object-cover"
                  />
                  {artist.verified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{artist.name}</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Artworks</span>
                    <span className="text-white font-semibold">{artist.artworks}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Followers</span>
                    <span className="text-white font-semibold">{artist.followers}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Become an Artist CTA */}
        <div className="mt-16 bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/20 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Are You an Artist?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our community of creators and start selling your digital art as NFTs. It's free to get started!
          </p>
          <button className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105">
            Apply as Artist
          </button>
        </div>
      </div>
    </section>
  );

 const renderContactPage = () => (
    <section className="py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-purple-900/20 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-semibold">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John"
                    className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 text-sm font-semibold">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe"
                    className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-semibold">Email</label>
                <input 
                  type="email" 
                  placeholder="john.doe@example.com"
                  className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-semibold">Subject</label>
                <input 
                  type="text" 
                  placeholder="How can we help?"
                  className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2 text-sm font-semibold">Message</label>
                <textarea 
                  rows="5" 
                  placeholder="Your message..."
                  className="w-full bg-purple-900/30 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Email Us</h3>
                  <p className="text-gray-400">support@nftme.com</p>
                  <p className="text-gray-400">business@nftme.com</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Visit Us</h3>
                  <p className="text-gray-400">123 NFT Street</p>
                  <p className="text-gray-400">San Francisco, CA 94102</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-600/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">Call Us</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-gray-400 text-sm mt-1">Mon-Fri 9am-6pm PST</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <button className="w-12 h-12 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="w-12 h-12 bg-purple-600/30 hover:bg-purple-600/50 rounded-lg flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-purple-900/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: 'How do I create an NFT?',
                answer: 'Simply sign up, connect your wallet, and use our minting tool to upload your artwork and create your NFT.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept cryptocurrency payments including ETH, BTC, and other major cryptocurrencies via connected wallets.'
              },
              {
                question: 'How do I sell my NFT?',
                answer: 'List your NFT on our marketplace with either a fixed price or auction. You can set your own terms and royalties.'
              },
              {
                question: 'Is my NFT secure?',
                answer: 'Yes! All NFTs are secured on the blockchain with industry-leading encryption and security protocols.'
              },
              {
                question: 'What are gas fees?',
                answer: 'Gas fees are transaction costs on the blockchain. They vary based on network congestion and transaction complexity.'
              },
              {
                question: 'Can I cancel a listing?',
                answer: 'Yes, you can cancel your listing at any time before a sale is completed, though gas fees may apply.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-purple-900/30 rounded-xl p-6 border border-purple-500/10">
                <h3 className="text-white font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold text-xl">
                N
              </div>
              <span className="text-xl font-bold">NFTme</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => setCurrentPage('home')} className={`hover:text-purple-400 transition-colors ${currentPage === 'home' ? 'text-purple-400' : ''}`}>
                Explore
              </button>
              <button onClick={() => setCurrentPage('about')} className={`hover:text-purple-400 transition-colors ${currentPage === 'about' ? 'text-purple-400' : ''}`}>
                About
              </button>
              <button onClick={() => setCurrentPage('features')} className={`hover:text-purple-400 transition-colors ${currentPage === 'features' ? 'text-purple-400' : ''}`}>
                Features
              </button>
              <button onClick={() => setCurrentPage('artists')} className="hover:text-purple-400 transition-colors">
                Artists
              </button>
              <button onClick={() => setCurrentPage('contact')} className="hover:text-purple-400 transition-colors">
                Contact
              </button>
            </div>

            <div className="hidden md:block">
              <button className="bg-white text-purple-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-purple-400 transition-colors">
                Explore
              </button>
              <button onClick={() => { setCurrentPage('about'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-purple-400 transition-colors">
                About
              </button>
              <button onClick={() => { setCurrentPage('features'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-purple-400 transition-colors">
                Features
              </button>
              <button onClick={() => { setCurrentPage('artists'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-purple-400 transition-colors">
                Artists
              </button>
              <button onClick={() => { setCurrentPage('contact'); setMobileMenuOpen(false); }} className="block w-full text-left hover:text-purple-400 transition-colors">
                Contact
              </button>
              <button className="w-full bg-white text-purple-900 px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'home' && renderHomePage()}
        {currentPage === 'about' && renderAboutPage()}
        {currentPage === 'features' && renderFeaturesPage()}
         {currentPage === 'artists' && renderArtistsPage()}
         {currentPage === 'contact' && renderContactPage()}
         
      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center font-bold">
                  N
                </div>
                <span className="text-lg font-bold">NFTme</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-purple-400 transition-colors">Marketplace</button></li>
                <li><button className="hover:text-purple-400 transition-colors">Collections</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-purple-400 transition-colors">About</button></li>
                <li><button onClick={() => setCurrentPage('artists')} className="hover:text-purple-400 transition-colors">Artists</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-purple-400 transition-colors">Contact</button></li>
                <li><button className="hover:text-purple-400 transition-colors">Terms of service</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              Privacy policy | Copyright @ Kartik Bansal 2022. All Rights Reserved. | Terms of service
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-purple-900/40 rounded-full flex items-center justify-center hover:bg-purple-800/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </button>
              <button className="w-10 h-10 bg-purple-900/40 rounded-full flex items-center justify-center hover:bg-purple-800/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </button>
              <button className="w-10 h-10 bg-purple-900/40 rounded-full flex items-center justify-center hover:bg-purple-800/60 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </button>
            </div>
          </div>
        </div>
     </footer>
    </div>
  );
};


      
export default NFTLandingPage;