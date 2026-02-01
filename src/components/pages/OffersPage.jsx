import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  CheckCircle, 
  Battery, 
  Sun, 
  Zap, 
  ArrowRight, 
  Phone, 
  Shield, 
  Home,
  DollarSign,
  Leaf,
  Clock,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const OffersPage = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const tier1Features = [
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Premium Battery System",
      description: "State-of-the-art lithium battery storage installed outside your home"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Backup Power Protection",
      description: "Keep your lights on, refrigerator running, and essentials powered during outages"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Zero Upfront Cost",
      description: "No money down, no installation fees—we cover everything"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Peak Shaving Savings",
      description: "Reduce electricity costs by using stored power during expensive peak hours"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Grid Support Credits",
      description: "Earn credits by allowing your battery to support the grid during high-demand periods"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Priority Upgrade Path",
      description: "Tier 1 customers get priority scheduling and exclusive discounts for Tier 2 upgrades"
    }
  ]

  const tier2Features = [
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Everything in Tier 1",
      description: "Premium battery storage with all backup and savings benefits"
    },
    {
      icon: <Sun className="h-6 w-6" />,
      title: "Solar Panel System",
      description: "Custom-designed rooftop solar array to power your home with clean energy"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Geothermal Heat Pump",
      description: "Ultra-efficient ground-source heating and cooling—400-600% efficiency"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "True NetZero Living",
      description: "Produce as much energy as you consume over the year—near-zero utility bills"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Maximum Incentives",
      description: "Stack federal tax credits (30%), MassSave rebates, and SMART solar payments"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Complete Energy Independence",
      description: "Eliminate oil, propane, and gas—run your entire home on clean electricity"
    }
  ]

  const comparisonData = [
    { feature: "Battery Storage", tier1: true, tier2: true },
    { feature: "Backup Power", tier1: true, tier2: true },
    { feature: "Peak Shaving Savings", tier1: true, tier2: true },
    { feature: "Grid Support Credits", tier1: true, tier2: true },
    { feature: "Solar Panels", tier1: false, tier2: true },
    { feature: "Geothermal Heating & Cooling", tier1: false, tier2: true },
    { feature: "Hot Water Generation", tier1: false, tier2: true },
    { feature: "NetZero Energy Status", tier1: false, tier2: true },
    { feature: "Eliminate Heating Fuel Costs", tier1: false, tier2: true },
    { feature: "30% Federal Tax Credit", tier1: false, tier2: true },
    { feature: "Priority Tier 2 Upgrade", tier1: true, tier2: "—" },
    { feature: "Upfront Cost", tier1: "$0", tier2: "Varies*" }
  ]

  const faqs = [
    {
      question: "How can Tier 1 really be free?",
      answer: "We partner with energy programs and grid operators who value distributed battery storage. Your battery helps stabilize the grid during peak demand, and we receive compensation that covers the equipment and installation costs. You get free backup power and savings, the grid gets stability—everyone wins."
    },
    {
      question: "What happens during a power outage with Tier 1?",
      answer: "Your battery automatically kicks in within milliseconds, keeping your essential circuits powered. Depending on your usage and battery size, you can typically run lights, refrigerator, WiFi, phone chargers, and selected outlets for 8-12 hours or more. The transition is seamless—you might not even notice the grid went down."
    },
    {
      question: "Can I upgrade from Tier 1 to Tier 2 later?",
      answer: "Absolutely! That's exactly how we designed it. Tier 1 customers get priority scheduling for Tier 2 installations and exclusive discounts. When you're ready, we'll add solar and geothermal to your existing battery system, creating a fully integrated NetZero home."
    },
    {
      question: "What are the requirements for Tier 1?",
      answer: "Your home should be 2,000+ square feet, built before 2005, have central air conditioning, and currently heat with oil, propane, electric, or baseboard systems. You should also own your home and have a suitable outdoor location for the battery unit. We'll verify eligibility during your free assessment."
    },
    {
      question: "How much can I really save with Tier 2?",
      answer: "Most Massachusetts homeowners save $3,000-$5,000+ annually with the complete Tier 2 package. You'll eliminate heating fuel costs entirely (often $2,000-$3,500/year for oil/propane), dramatically reduce electricity bills through solar generation, and potentially earn credits from excess energy sent to the grid. After incentives, most systems pay for themselves in 5-8 years."
    },
    {
      question: "What incentives are available for Tier 2?",
      answer: "Tier 2 qualifies for substantial incentives: 30% Federal Tax Credit on both geothermal and solar (no cap), up to $15,000 MassSave rebate for geothermal, SMART solar incentive payments over 10 years, and 0% HEAT Loan financing. Combined, these can offset 40-50% of your total investment."
    },
    {
      question: "How long does installation take?",
      answer: "Tier 1 battery installation typically takes just 1-2 days. Tier 2 is more comprehensive: geothermal drilling takes 1-2 weeks, interior work another 1-2 weeks, and solar installation 2-3 days. Total Tier 2 timeline is usually 4-8 weeks, though most of that time your home remains fully functional."
    },
    {
      question: "What's the warranty coverage?",
      answer: "Tier 1 batteries come with 10-year manufacturer warranties. Tier 2 systems include 25-year solar panel warranties, 10-year inverter warranties, 10-year heat pump warranties, and 50-year ground loop warranties (it's underground with no moving parts). We also provide a 10-year workmanship warranty on all our installations."
    }
  ]

  const testimonials = [
    {
      quote: "Started with the free battery and loved having backup power. Six months later, we upgraded to the full package. Our oil bill is gone, and our electric bill is almost nothing. Best decision we've made for our home.",
      author: "Sarah M.",
      location: "Lexington, MA",
      savings: "$4,200/year"
    },
    {
      quote: "The Tier 1 program was a no-brainer—free battery, free installation, and we've already saved money on peak electricity. Now we're planning our Tier 2 upgrade for next spring.",
      author: "James & Linda T.",
      location: "Newton, MA",
      savings: "$800/year (Tier 1)"
    },
    {
      quote: "We went straight to Tier 2. The incentives made it affordable, and now we produce more energy than we use. Last month, the utility paid us. It's incredible.",
      author: "Michael R.",
      location: "Brookline, MA",
      savings: "$5,100/year"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-400/30 text-sm px-4 py-1">
              Limited Time Offer
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Path to
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"> Energy Freedom</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Start with free battery storage. Upgrade to complete NetZero when you're ready.
              Two tiers, one mission: eliminate your energy bills forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('tier1').scrollIntoView({ behavior: 'smooth' })}
              >
                <Battery className="h-5 w-5 mr-2" />
                Start Free with Tier 1
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg"
                onClick={() => document.getElementById('tier2').scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-5 w-5 mr-2" />
                Go NetZero with Tier 2
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tier 1 Section */}
      <section id="tier1" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-300 text-lg px-6 py-2">
              Tier 1
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Free Battery Storage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get premium backup power and energy savings with zero upfront cost.
              The perfect entry point to your clean energy journey.
            </p>
          </div>

          {/* Price Card */}
          <div className="max-w-md mx-auto mb-16">
            <Card className="border-4 border-green-500 shadow-2xl">
              <CardHeader className="text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="text-3xl">Your Cost</CardTitle>
                <div className="text-6xl font-bold mt-2">$0</div>
                <CardDescription className="text-green-100 text-lg">
                  No money down. No installation fees. Ever.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Includes professional installation of:</p>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900">Premium Outdoor Battery System</p>
                    <p className="text-sm text-gray-600">10-15 kWh capacity • 10-year warranty</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tier1Features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full text-green-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 text-lg">
                Get Free Battery Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <p className="text-gray-500 mt-4">No obligation • Takes 5 minutes • Start saving immediately</p>
          </div>
        </div>
      </section>

      {/* Upgrade Arrow */}
      <div className="bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-4">
            <div className="hidden sm:block h-px bg-white/30 flex-1"></div>
            <div className="flex items-center gap-3">
              <Battery className="h-8 w-8" />
              <ArrowRight className="h-6 w-6" />
              <Sun className="h-8 w-8" />
              <ArrowRight className="h-6 w-6" />
              <Zap className="h-8 w-8" />
            </div>
            <div className="hidden sm:block h-px bg-white/30 flex-1"></div>
          </div>
          <p className="mt-4 text-lg font-medium">
            Ready for more? Upgrade to Tier 2 anytime for complete energy independence.
          </p>
        </div>
      </div>

      {/* Tier 2 Section */}
      <section id="tier2" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-300 text-lg px-6 py-2">
              Tier 2
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete NetZero Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Battery + Solar + Geothermal = Total energy independence.
              Eliminate your utility bills and heating fuel costs forever.
            </p>
          </div>

          {/* Savings Highlight */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-4 border-blue-500 shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 text-center">
                  <div className="text-5xl font-bold mb-2">$3-5K+</div>
                  <div className="text-blue-100">Annual Savings</div>
                </div>
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white p-8 text-center">
                  <div className="text-5xl font-bold mb-2">40-50%</div>
                  <div className="text-cyan-100">Incentive Offset</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 text-center">
                  <div className="text-5xl font-bold mb-2">5-8 yr</div>
                  <div className="text-green-100">Typical Payback</div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Battery className="h-12 w-12 mx-auto text-green-600 mb-2" />
                    <h4 className="font-semibold">Battery Storage</h4>
                    <p className="text-sm text-gray-600">Backup power + peak savings</p>
                  </div>
                  <div>
                    <Sun className="h-12 w-12 mx-auto text-yellow-500 mb-2" />
                    <h4 className="font-semibold">Solar Panels</h4>
                    <p className="text-sm text-gray-600">Generate your own electricity</p>
                  </div>
                  <div>
                    <Zap className="h-12 w-12 mx-auto text-blue-600 mb-2" />
                    <h4 className="font-semibold">Geothermal</h4>
                    <p className="text-sm text-gray-600">400%+ efficient heating/cooling</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tier2Features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/calculator">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg">
                Calculate Your NetZero Savings
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <p className="text-gray-500 mt-4">See exactly how much you'll save with our detailed calculator</p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare Your Options
            </h2>
            <p className="text-xl text-gray-600">
              Start with Tier 1 for free, upgrade to Tier 2 when you're ready
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-green-100 text-green-800 rounded-lg py-2 px-4 font-bold">
                      Tier 1
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-4 font-bold">
                      Tier 2
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.tier1 === true ? (
                        <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      ) : row.tier1 === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-semibold text-green-600">{row.tier1}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.tier2 === true ? (
                        <CheckCircle className="h-6 w-6 text-blue-500 mx-auto" />
                      ) : row.tier2 === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-semibold text-blue-600">{row.tier2}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Tier 2 costs vary based on home size, system configuration, and available incentives. 
            After incentives, typical net cost is $25,000-$45,000 with $3,000-$5,000+ annual savings.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-slate-100 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      Saves {testimonial.savings}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index} 
                className={`cursor-pointer transition-shadow ${openFaq === index ? 'shadow-lg' : 'hover:shadow-md'}`}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-medium pr-8">{faq.question}</CardTitle>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </CardHeader>
                {openFaq === index && (
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Energy Freedom Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Begin with free Tier 1 battery storage, or jump straight to NetZero with Tier 2.
            Either way, your path to energy independence starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg">
                <Battery className="h-5 w-5 mr-2" />
                Get Free Tier 1 Assessment
              </Button>
            </Link>
            <a href="tel:+17816545879">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (781) 654-5879
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OffersPage
