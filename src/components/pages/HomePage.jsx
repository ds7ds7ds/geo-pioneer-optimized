import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, DollarSign, Home, Leaf, Zap, Phone, ArrowRight, Calculator, FileText, Battery, Sun } from 'lucide-react'

const HomePage = () => {
  const [showAssessment, setShowAssessment] = useState(false)

  const keyBenefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "400-600% Efficiency",
      description: "4-6x more efficient than fossil fuel systems"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "$200-$275/Month Savings",
      description: "Compared to oil/propane + AC systems"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "50-70% Energy Reduction",
      description: "Eco-friendly heating and cooling"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "25-50 Year Lifespan",
      description: "2-3x longer than conventional systems"
    }
  ]

  const customerSegments = [
    {
      title: "Existing Homes",
      description: "Perfect for homes with 2000+ sq ft, central AC, and expensive heating fuels",
      features: ["Retrofit existing ductwork", "Minimal property disruption", "3-4 week installation"],
      cta: "Learn More",
      link: "/existing-homes",
      icon: <Home className="h-8 w-8" />
    },
    {
      title: "New Construction",
      description: "Maximize incentives and minimize operating costs from day one",
      features: ["Up to $34K in rebates", "30% Federal ITC for builders", "Optimal system integration"],
      cta: "Learn More",
      link: "/new-construction",
      icon: <Zap className="h-8 w-8" />
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/geo-aerial-boston.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-400/30 text-sm px-4 py-1">
                Massachusetts Geothermal Pioneers
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
                Set the temperature.
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mt-2">Forget the bills.</span>
              </h1>
              <p className="text-xl text-cyan-200 mb-4 font-medium">
                Net-zero homes designed for full comfort and predictable costs.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                In many parts of the world, comfort is assumed. In the U.S., comfort often comes with anxiety.
                <span className="text-gray-300 block mt-2">Net-zero homes change that. Set the temperature once — stop worrying about energy prices forever.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold"
                  asChild
                >
                  <Link to="/calculator">
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate Savings
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg"
                  onClick={() => setShowAssessment(true)}
                >
                  <FileText className="h-5 w-5 mr-2" />
                  Free Assessment
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/geothermal-netzero-diagram.jpg" 
                alt="GeoPioneer Net Zero Home" 
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Energy Freedom Program */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-400/30 px-4 py-1">
              Energy Freedom Program
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Your Path to <span className="text-green-400">Energy Freedom</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Three options to fit your goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Tier 1 */}
            <Card className="bg-green-600/20 border-2 border-green-500 text-white">
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-green-500 text-white">Tier 1</Badge>
                <Battery className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">Free Battery</h3>
                <p className="text-green-200 text-sm mb-4">Backup power + savings</p>
                <div className="text-3xl font-bold text-green-400">FREE</div>
                <p className="text-green-200/70 text-xs mt-1">Zero upfront cost</p>
              </CardContent>
            </Card>

            {/* EaaS */}
            <Card className="bg-purple-600/20 border-2 border-purple-400 text-white relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-yellow-400 text-gray-900 font-bold">⭐ POPULAR</Badge>
              </div>
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-purple-500 text-white">EaaS</Badge>
                <div className="flex justify-center gap-1 mb-3">
                  <Battery className="h-8 w-8 text-green-400" />
                  <Sun className="h-8 w-8 text-yellow-400" />
                  <Zap className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Energy Service</h3>
                <p className="text-purple-200 text-sm mb-4">$0 down, full system</p>
                <div className="text-3xl font-bold text-purple-400">5-10%</div>
                <p className="text-purple-200/70 text-xs mt-1">instant savings</p>
              </CardContent>
            </Card>

            {/* Tier 2 */}
            <Card className="bg-blue-600/20 border-2 border-blue-400 text-white">
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-blue-500 text-white">Tier 2</Badge>
                <div className="flex justify-center gap-1 mb-3">
                  <Battery className="h-8 w-8 text-green-400" />
                  <Sun className="h-8 w-8 text-yellow-400" />
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Buy & Own</h3>
                <p className="text-blue-200 text-sm mb-4">Own outright, max incentives</p>
                <div className="text-3xl font-bold text-cyan-400">40-50%</div>
                <p className="text-blue-200/70 text-xs mt-1">incentive offset</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Link to="/offers">
              <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold">
                Compare All Options
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Geothermal?
            </h2>
            <p className="text-gray-600">Based on IGSHPA data</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyBenefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Path
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerSegments.map((segment, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {segment.icon}
                    </div>
                    <CardTitle className="text-xl">{segment.title}</CardTitle>
                  </div>
                  <CardDescription>{segment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                    <Link to={segment.link}>
                      {segment.cta}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">How It Works</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is Geothermal?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Stable Ground Temperature</h4>
                    <p className="text-gray-600 text-sm">Uses earth's constant 50-55°F for year-round comfort</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 flex-shrink-0">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Summer Cooling</h4>
                    <p className="text-gray-600 text-sm">Pulls heat from home, deposits into cooler ground</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-600 flex-shrink-0">
                    <Home className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Winter Heating</h4>
                    <p className="text-gray-600 text-sm">Extracts heat from warmer ground into your home</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/geo-drilling-closeup.jpg" 
                alt="Geothermal Drilling" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Incentives */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Incentives</h2>
            <p className="text-green-100">Reduce your cost by 40-50%</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">$13,500</div>
              <div className="font-semibold">MassSave Rebate</div>
              <p className="text-green-200 text-sm mt-1">Up to $25K income-eligible</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">30%</div>
              <div className="font-semibold">Federal ITC</div>
              <p className="text-green-200 text-sm mt-1">Via EaaS/TPO model</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="font-semibold">HEAT Loan</div>
              <p className="text-green-200 text-sm mt-1">Up to $25K financing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free assessment and discover your savings potential
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 font-bold"
              onClick={() => setShowAssessment(true)}
            >
              Get Free Assessment
            </Button>
            <a href="tel:+17816545879">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold"
              >
                <Phone className="h-5 w-5 mr-2" />
                (781) 654-5879
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Assessment Modal */}
      {showAssessment && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 lg:p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Get Your Free Assessment</h2>
                  <p className="text-gray-600">We'll contact you within 24 hours</p>
                </div>
                <button 
                  onClick={() => setShowAssessment(false)}
                  className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                      <option value="">Select type</option>
                      <option value="existing">Existing Home</option>
                      <option value="new">New Construction</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Questions or Comments</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    rows="3"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white py-3 font-semibold"
                    onClick={() => {
                      alert('Thank you! We\'ll contact you within 24 hours.')
                      setShowAssessment(false)
                    }}
                  >
                    Submit Request
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 py-3"
                    onClick={() => setShowAssessment(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage
