import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  DollarSign, 
  Home, 
  Leaf, 
  Zap, 
  Clock, 
  Shield, 
  TrendingUp, 
  Wrench,
  Phone,
  ArrowRight,
  Thermometer,
  Droplets,
  Wind
} from 'lucide-react'

const ExistingHomesPage = () => {
  const [showAssessment, setShowAssessment] = useState(false)

  const idealCandidates = [
    {
      icon: <Home className="h-8 w-8" />,
      title: "2,000+ sq ft Living Space",
      description: "Perfect for medium to large homes with higher energy demands"
    },
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Central AC & Ductwork",
      description: "Leverages existing ductwork for efficient distribution"
    },
    {
      icon: <Thermometer className="h-8 w-8" />,
      title: "Oil, Propane, or Electric Heat",
      description: "Greatest savings when replacing expensive heating fuels"
    }
  ]

  const keyAdvantages = [
    {
      percentage: "50-70%",
      title: "Energy Reduction",
      description: "Compared to conventional heating and cooling",
      color: "green"
    },
    {
      percentage: "400-600%",
      title: "Efficiency Rating",
      description: "vs 80-95% for fossil fuel systems",
      color: "blue"
    },
    {
      percentage: "5-8%",
      title: "Home Value Increase",
      description: "Premium for homes with geothermal",
      color: "purple"
    }
  ]

  const benefits = [
    {
      title: "Lower Monthly Costs",
      description: "Save $200-$300/month compared to oil/propane + AC",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Complete Home Solution",
      description: "Heating, cooling & hot water in one system",
      icon: <Home className="h-6 w-6" />
    },
    {
      title: "No Outside Unit",
      description: "More yard space, no noise, better aesthetics",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "2x Longer Lifespan",
      description: "25-50 years vs 10-15 years conventional",
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const installationSteps = [
    {
      step: 1,
      title: "Site Assessment",
      description: "Property evaluation and permitting",
      duration: "2 weeks"
    },
    {
      step: 2,
      title: "Vertical Drilling",
      description: "Compact equipment, minimal disruption",
      duration: "2 days"
    },
    {
      step: 3,
      title: "HVAC Installation",
      description: "Connect to existing ductwork",
      duration: "2 days"
    },
    {
      step: 4,
      title: "Commissioning",
      description: "System testing & training",
      duration: "1-2 days"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark gradient like Offers */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/geo-cedar-house.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-400/30 text-sm px-4 py-1">
                Retrofit Solutions
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Geothermal for
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Existing Homes</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your home's heating and cooling with Massachusetts' most efficient solution. 
                Perfect for homes with existing ductwork and expensive heating fuels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
                  onClick={() => setShowAssessment(true)}
                >
                  Get Free Site Review
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Link to="/calculator">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold shadow-lg"
                  >
                    See Estimated Savings
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/geo-cedar-house.jpg" 
                alt="Geothermal installation at existing home" 
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidates */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ideal for Existing Homes With
            </h2>
            <p className="text-xl text-gray-600">
              Check if your home is a great fit for geothermal retrofit
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {idealCandidates.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all border-2 hover:border-blue-500">
                <CardHeader>
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages - Stats Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Key Advantages
            </h2>
            <p className="text-gray-400">
              Based on IGSHPA (International Ground Source Heat Pump Association) data
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyAdvantages.map((item, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className={`text-5xl lg:text-6xl font-bold mb-4 ${
                  item.color === 'green' ? 'text-green-400' :
                  item.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                }`}>
                  {item.percentage}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works with Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">How It Works</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What is Geothermal?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 flex-shrink-0">
                    <Thermometer className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Stable Ground Temperature</h4>
                    <p className="text-gray-600">Uses the earth's constant 50-55°F temperature year-round for heating & cooling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                    <Wind className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Summer Cooling</h4>
                    <p className="text-gray-600">Pulls heat from your home and deposits it into the cooler ground</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full text-orange-600 flex-shrink-0">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Winter Heating</h4>
                    <p className="text-gray-600">Extracts heat from the warmer ground and delivers it to your home</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 p-3 rounded-full text-cyan-600 flex-shrink-0">
                    <Droplets className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Free Hot Water</h4>
                    <p className="text-gray-600">Desuperheater captures waste heat for domestic hot water—up to 70% free</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="/geothermal-netzero-diagram.jpg" 
                alt="GeoPioneer Net Zero Solution - House with solar panels and underground geothermal loops" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Drilling Technology */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/geo-drilling-backyard.jpg" 
                alt="Compact geothermal drilling in residential backyard" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-100 text-green-800">Minimal Disruption</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Vertical Bore Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Perfect for New England's rocky terrain and limited yard space. Our European-style compact drilling equipment minimizes property disruption.
              </p>
              <div className="space-y-4">
                {[
                  "Vertical bores (400-1000 ft deep) ideal for Massachusetts",
                  "Only 10x10 ft drilling area required",
                  "Minimal yard damage with compact equipment",
                  "More stable performance than horizontal systems",
                  "GeoPioneer specializes in precision vertical drilling"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Geothermal
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-600">
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

      {/* 2026 Incentives */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              2026 Massachusetts Incentives
            </h2>
            <p className="text-green-100">
              Maximize your savings with available rebates and financing
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold mb-2">$13,500</div>
              <div className="text-lg font-semibold mb-1">MassSave Rebate</div>
              <div className="text-green-200 text-sm">Whole-home geothermal</div>
              <div className="text-green-200 text-xs mt-2">(up to $25,000 income-eligible)</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold mb-2">0%</div>
              <div className="text-lg font-semibold mb-1">HEAT Loan</div>
              <div className="text-green-200 text-sm">Up to $25,000 financing</div>
              <div className="text-green-200 text-xs mt-2">7-year term available</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
              <div className="text-4xl lg:text-5xl font-bold mb-2">30%</div>
              <div className="text-lg font-semibold mb-1">Federal ITC</div>
              <div className="text-green-200 text-sm">Via EaaS (TPO model)</div>
              <div className="text-green-200 text-xs mt-2">Residential credits expired 2025</div>
            </div>
          </div>
          
          <p className="text-center text-green-200 text-sm mt-8 max-w-2xl mx-auto">
            Note: Residential federal tax credits expired Dec 2025. EaaS captures commercial ITC through third-party ownership and passes savings to you.
          </p>
        </div>
      </section>

      {/* Installation Timeline */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Installation Process
            </h2>
            <p className="text-xl text-gray-600">
              Total timeline: 3-4 weeks from start to finish
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {installationSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-blue-200" />
                )}
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <Badge variant="secondary" className="mb-2">{step.duration}</Badge>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Key Requirements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Wrench className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Drilling Area</h4>
                <p className="text-gray-600 text-sm">10×10 ft area, 10 ft from property line</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Electrical Panel</h4>
                <p className="text-gray-600 text-sm">100-200A panel preferred</p>
              </div>
              <div className="text-center">
                <Home className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-1">Best For</h4>
                <p className="text-gray-600 text-sm">Homes with oil/propane + central AC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600">Recent geothermal installations in Massachusetts</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <img src="/geo-drilling-backyard.jpg" alt="Project 1 - Residential drilling" className="rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full h-64 object-cover" />
              <p className="text-center text-sm text-gray-600 font-medium">Colonial Home Retrofit</p>
            </div>
            <div className="space-y-2">
              <img src="/geo-drilling-closeup.jpg" alt="Project 2 - Drilling operation" className="rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full h-64 object-cover" />
              <p className="text-center text-sm text-gray-600 font-medium">Suburban Installation</p>
            </div>
            <div className="space-y-2">
              <img src="/geo-cedar-house.jpg" alt="Project 3 - Cedar house with solar" className="rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full h-64 object-cover" />
              <p className="text-center text-sm text-gray-600 font-medium">NetZero Home Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Home's Energy?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a Free Site Review and discover how much you can save with geothermal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
              onClick={() => setShowAssessment(true)}
            >
              Get Free Site Review
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <a href="tel:+17816545879">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-bold"
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
                  <h2 className="text-2xl font-bold text-gray-900">Get Your Free Site Review</h2>
                  <p className="text-gray-600">Existing home retrofit evaluation</p>
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
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Heating</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
                      <option value="">Select heating type</option>
                      <option value="oil">Oil</option>
                      <option value="propane">Propane</option>
                      <option value="electric">Electric</option>
                      <option value="gas">Natural Gas</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Size (sq ft)</label>
                    <input 
                      type="number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="2500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Town/City</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Lexington"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                    rows="3"
                    placeholder="Tell us about your home, current issues, or questions..."
                  />
                </div>
                
                <div className="bg-blue-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Assessment Includes:</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>✓ Site survey and soil analysis</li>
                    <li>✓ Existing system evaluation</li>
                    <li>✓ Retrofit feasibility study</li>
                    <li>✓ Detailed cost estimate with incentives</li>
                    <li>✓ No obligation consultation</li>
                  </ul>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                    onClick={() => {
                      alert('Thank you! We\'ll contact you within 24 hours to schedule your Free Site Review.')
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

export default ExistingHomesPage
