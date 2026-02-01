import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, DollarSign, Home, Leaf, Zap, Building, Calculator, Phone, ArrowRight } from 'lucide-react'

const NewConstructionPage = () => {
  const [showAssessment, setShowAssessment] = useState(false)

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Maximum Incentives",
      description: "Up to $34,000 in MassSave rebates + 30% Federal ITC for builders"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lower Operating Costs",
      description: "400-600% efficiency means minimal monthly energy bills from day one"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "5-8% Home Value Bonus",
      description: "High-tech energy systems increase property value and marketability"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Net Zero Ready",
      description: "Pair with solar for a complete net-zero energy home"
    }
  ]

  const incentiveTiers = [
    {
      tier: "Base",
      massSave: "$7,500",
      gshp: "$9,000",
      total: "$16,500",
      description: "All-electric, ≥15% above code"
    },
    {
      tier: "ENERGY STAR",
      massSave: "$15,000",
      gshp: "$9,000",
      total: "$24,000",
      description: "HERS ≤45 or ≥30% savings",
      popular: true
    },
    {
      tier: "Passive House",
      massSave: "$25,000",
      gshp: "$9,000",
      total: "$34,000",
      description: "Phius or PHI certified"
    }
  ]

  const processSteps = [
    { step: "1", title: "Design Review", description: "We review plans and coordinate with your builder" },
    { step: "2", title: "System Design", description: "Custom geothermal sizing for your home" },
    { step: "3", title: "Loop Installation", description: "Drilling during construction phase" },
    { step: "4", title: "HVAC Connection", description: "Heat pump install and commissioning" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/geo-drilling-closeup.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-400/30 text-sm px-4 py-1">
                New Construction
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Build Smart with
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent block mt-2">Geothermal from Day One</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Integrate geothermal into your new construction project and maximize incentives. 
              </p>
              <p className="text-green-300 mb-8">
                💡 MassSave + 30% Federal ITC + 5-8% building value bonus
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => setShowAssessment(true)}
                >
                  <Building className="h-5 w-5 mr-2" />
                  Get Builder Quote
                </Button>
                <Link to="/calculator">
                  <Button 
                    size="lg" 
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg"
                  >
                    <Calculator className="h-5 w-5 mr-2" />
                    Calculate ROI
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/geo-drilling-closeup.jpg" 
                alt="Geothermal drilling for new construction" 
                className="rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Build with Geothermal?</h2>
            <p className="text-lg text-gray-600">Advantages for builders and homeowners</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
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

      {/* Incentives */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">MassSave New Construction Incentives</h2>
            <p className="text-gray-300">Plus 30% Federal ITC for commercial builders</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {incentiveTiers.map((tier, index) => (
              <Card key={index} className={`bg-white/10 border-white/20 ${tier.popular ? 'ring-2 ring-green-400' : ''}`}>
                {tier.popular && (
                  <div className="bg-green-500 text-white text-center text-sm font-semibold py-1">
                    MOST POPULAR
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-xl">{tier.tier}</CardTitle>
                  <CardDescription className="text-gray-300">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">MassSave:</span>
                      <span className="text-green-400">{tier.massSave}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">GSHP Bonus:</span>
                      <span className="text-green-400">{tier.gshp}</span>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="text-3xl font-bold text-cyan-400">{tier.total}</div>
                    <div className="text-gray-400 text-sm">Total Rebates</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Simple Process</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
              <p className="text-gray-600 mb-8">
                We coordinate directly with your builder to integrate geothermal seamlessly into the construction timeline.
              </p>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="/geothermal-netzero-diagram.jpg" 
                alt="Net Zero Home with Geothermal" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Geothermal for New Construction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/1_PERFORATRICE-COMACCHIO-GEO-601-1-1024x771.jpg" 
                alt="Comacchio Drilling Rig" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-100 text-green-800">Minimal Disruption</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Perfect Timing</h2>
              <p className="text-gray-600 mb-6">
                Installing geothermal during new construction is the most cost-effective approach. The ground loop goes in before landscaping, and the system integrates directly with new ductwork.
              </p>
              <div className="space-y-3">
                {[
                  "Drilling during construction minimizes site impact",
                  "Lower installation costs vs. retrofit",
                  "System designed for your exact home specs",
                  "No existing equipment to remove",
                  "Qualify for maximum incentives"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build with Geothermal?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a custom quote for your new construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold"
              onClick={() => setShowAssessment(true)}
            >
              <Building className="h-5 w-5 mr-2" />
              Get Builder Quote
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
                  <h2 className="text-2xl font-bold text-gray-900">Builder Quote Request</h2>
                  <p className="text-gray-600">New construction project</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name *</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company/Builder</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Builder company name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                    <input 
                      type="tel" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Home Size (sq ft)</label>
                    <input 
                      type="number" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="2500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Timeline</label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none">
                      <option value="">Select timeline</option>
                      <option value="0-3">0-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12+">12+ months</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Location</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    rows="3"
                    placeholder="Number of units, building type, energy goals..."
                  />
                </div>
                
                <div className="bg-green-50 p-4 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">What You'll Receive:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✓ Custom system design and sizing</li>
                    <li>✓ Detailed cost estimate with incentives</li>
                    <li>✓ Construction timeline coordination</li>
                    <li>✓ ROI analysis vs. conventional systems</li>
                  </ul>
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

export default NewConstructionPage
