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
  ChevronUp,
  TrendingDown,
  Calendar,
  Lock,
  Percent,
  CreditCard,
  Wallet
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

  const tier2SystemFeatures = [
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Storage",
      description: "Premium backup power + peak savings"
    },
    {
      icon: <Sun className="h-8 w-8" />,
      title: "Solar Panels",
      description: "Custom rooftop array for clean electricity"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Geothermal",
      description: "400-600% efficient heating & cooling"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "True NetZero",
      description: "Near-zero utility bills year-round"
    }
  ]

  const purchaseFeatures = [
    "Own the system outright from day one",
    "Up to $13,500 MassSave geothermal rebate",
    "$25,000+ rebate if income-eligible",
    "0% HEAT Loan financing up to $25,000",
    "SMART solar incentive payments (10 yrs)",
    "40-50% effective incentive offset",
    "$3-5K+ annual energy savings",
    "5-8 year typical payback period"
  ]

  const eaasFeatures = [
    "Zero upfront cost — we install everything",
    "30% federal ITC via TPO (still available!)",
    "5-10% instant savings vs current bills",
    "Fixed monthly payment — predictable costs",
    "10 years FREE maintenance included",
    "2.5% annual adjustment (vs 10-30% fuel swings)",
    "6-year buyout option to own outright",
    "20-year agreement with price protection"
  ]

  const comparisonData = [
    { feature: "Battery Storage", tier1: true, purchase: true, eaas: true },
    { feature: "Backup Power", tier1: true, purchase: true, eaas: true },
    { feature: "Peak Shaving Savings", tier1: true, purchase: true, eaas: true },
    { feature: "Solar Panels", tier1: false, purchase: true, eaas: true },
    { feature: "Geothermal Heat Pump", tier1: false, purchase: true, eaas: true },
    { feature: "Hot Water Generation", tier1: false, purchase: true, eaas: true },
    { feature: "NetZero Energy Status", tier1: false, purchase: true, eaas: true },
    { feature: "Upfront Cost", tier1: "$0", purchase: "Varies*", eaas: "$0" },
    { feature: "Own System Immediately", tier1: "—", purchase: "Yes", eaas: "After 6 yrs" },
    { feature: "Federal Tax Credits", tier1: "—", purchase: "Expired**", eaas: "30% via TPO" },
    { feature: "MassSave Rebates", tier1: "—", purchase: "Up to $25K", eaas: "Included" },
    { feature: "Free Maintenance", tier1: "—", purchase: "Warranty only", eaas: "10 years" },
    { feature: "Price Protection", tier1: "—", purchase: "No", eaas: "20 years" }
  ]

  const faqs = [
    {
      question: "How can Tier 1 really be free?",
      answer: "We partner with energy programs and grid operators who value distributed battery storage. Your battery helps stabilize the grid during peak demand, and we receive compensation that covers the equipment and installation costs. You get free backup power and savings, the grid gets stability—everyone wins."
    },
    {
      question: "What's the difference between Tier 2 Purchase and EaaS?",
      answer: "Both get you the same complete NetZero system (battery + solar + geothermal). The difference is how you pay. Purchase: you pay upfront (with financing options) and own the system immediately, maximizing state rebates. EaaS: we install everything for $0 down, you pay a monthly service fee that's 5-10% less than your current bills, and you can buy the system after 6 years."
    },
    {
      question: "Why would I choose EaaS over Purchase?",
      answer: "EaaS is ideal if you: want zero upfront cost, prefer predictable monthly payments, value 10 years of included maintenance, or want access to federal tax credits (30% ITC through our TPO model—unavailable for direct residential purchase since 2026). Purchase is better if you have capital available and want to maximize long-term savings by owning immediately."
    },
    {
      question: "How does EaaS still get federal tax credits?",
      answer: "Through Third-Party Ownership (TPO). GeoPioneer owns the system and claims the 30% commercial ITC. We pass those savings to you through lower service rates. This structure isn't available for direct residential purchases—it requires commercial ownership, which is what we provide."
    },
    {
      question: "What happens after the 6-year buyout option in EaaS?",
      answer: "After 6 years, you can purchase the system at fair market value and own it outright. At that point, the system still has 19-44 years of useful life remaining (solar 25+ years, geothermal 50+ years, battery 10-15 years). You then get all energy savings with no more payments."
    },
    {
      question: "What are the requirements for these programs?",
      answer: "Your home should be 2,000+ square feet, built before 2005, have central air conditioning, and currently heat with oil, propane, electric, or baseboard systems. You should also own your home and have a suitable outdoor location for equipment. We'll verify eligibility during your Free Site Review."
    },
    {
      question: "Can I upgrade from Tier 1 to Tier 2 later?",
      answer: "Absolutely! That's exactly how we designed it. Tier 1 customers get priority scheduling for Tier 2 upgrades and exclusive discounts. Your existing battery integrates seamlessly with the full NetZero system. Many customers start with Tier 1 to experience the benefits before committing to the complete package."
    },
    {
      question: "What's the warranty and maintenance coverage?",
      answer: "Tier 1: 10-year battery warranty. Tier 2 Purchase: 25-year solar panels, 10-year inverter, 10-year heat pump, 50-year ground loop, plus our 10-year workmanship warranty. Tier 2 EaaS: All the same warranties PLUS 10 years of complete maintenance coverage included at no extra cost—we handle everything."
    }
  ]

  const testimonials = [
    {
      quote: "Started with the free battery and loved having backup power. Six months later, we upgraded to the full EaaS package. Our oil bill is gone, and we're paying less than before. Best decision we've made.",
      author: "Sarah M.",
      location: "Lexington, MA",
      tier: "Tier 1 → EaaS"
    },
    {
      quote: "The EaaS program was perfect for us. Zero upfront, and we're saving $300/month compared to our old oil + electric bills. In 6 years, we'll own the whole system.",
      author: "James & Linda T.",
      location: "Newton, MA",
      tier: "Tier 2 EaaS"
    },
    {
      quote: "We had the capital, so we bought outright. The MassSave rebates covered a huge chunk. Now we produce more energy than we use—last month the utility paid us.",
      author: "Michael R.",
      location: "Brookline, MA",
      tier: "Tier 2 Purchase"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-400/30 text-sm px-4 py-1">
              New: Energy Freedom Program
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Your Path to
              <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"> Energy Freedom</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Three options to fit your goals: Free battery, Energy-as-a-Service, or buy and own
            </p>
          </div>

          {/* Quick Option Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            {/* Tier 1 Card - GREEN */}
            <Card 
              className="bg-green-600/20 border-2 border-green-400 backdrop-blur-sm cursor-pointer hover:bg-green-500/30 transition-all"
              onClick={() => document.getElementById('tier1').scrollIntoView({ behavior: 'smooth' })}
            >
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-green-500 text-white font-bold">Tier 1</Badge>
                <h3 className="text-xl font-bold text-white mb-2">Free Battery</h3>
                <p className="text-green-200 text-sm mb-4">Backup power + savings</p>
                <div className="text-4xl font-bold text-green-400">FREE</div>
                <p className="text-green-200/70 text-xs mt-1">Zero upfront cost</p>
              </CardContent>
            </Card>

            {/* Tier 2 Own Card - BLUE */}
            <Card 
              className="bg-blue-600/20 border-2 border-blue-400 backdrop-blur-sm cursor-pointer hover:bg-blue-500/30 transition-all"
              onClick={() => document.getElementById('tier2').scrollIntoView({ behavior: 'smooth' })}
            >
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-blue-500 text-white font-bold">Tier 2 (Own)</Badge>
                <h3 className="text-xl font-bold text-white mb-2">Purchase & Own</h3>
                <p className="text-blue-200 text-sm mb-4">Own outright, max state incentives</p>
                <div className="text-4xl font-bold text-blue-400">40-50%</div>
                <p className="text-blue-200/70 text-xs mt-1">incentive offset</p>
              </CardContent>
            </Card>

            {/* Tier 2 EaaS Card - PURPLE */}
            <Card 
              className="bg-purple-600/20 border-2 border-purple-400 backdrop-blur-sm cursor-pointer hover:bg-purple-500/30 transition-all relative"
              onClick={() => document.getElementById('tier2').scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-yellow-400 text-gray-900 font-bold px-3">⭐ POPULAR</Badge>
              </div>
              <CardContent className="pt-6 text-center">
                <Badge className="mb-3 bg-purple-500 text-white font-bold">Tier 2 (EaaS)</Badge>
                <h3 className="text-xl font-bold text-white mb-2">Energy Service</h3>
                <p className="text-purple-200 text-sm mb-4">$0 down + buyback option</p>
                <div className="text-4xl font-bold text-purple-400">$0 Down</div>
                <p className="text-purple-200/70 text-xs mt-1">5-10% instant savings</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <button 
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold text-lg rounded-lg shadow-lg transition-all"
              onClick={() => document.getElementById('compare').scrollIntoView({ behavior: 'smooth' })}
            >
              Compare All Options
              <ArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Tier 1 Section */}
      <section id="tier1" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-300 text-lg px-6 py-2">
              Tier 1 — Entry Point
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Free Battery Storage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get premium backup power and energy savings with zero upfront cost.
              The perfect way to start your clean energy journey.
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

      {/* Tier 2 Section - The Full System */}
      <section id="tier2" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-400/30 text-lg px-6 py-2">
              Tier 2 — Complete NetZero System
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Battery + Solar + Geothermal
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The complete package for true energy independence. 
              Choose how you want to pay: Purchase or Energy-as-a-Service.
            </p>
          </div>

          {/* System Components */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {tier2SystemFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <div className="text-blue-400 mb-3 flex justify-center">{feature.icon}</div>
                <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Two Payment Options */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Purchase Option */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <Wallet className="h-10 w-10 text-blue-200" />
                </div>
                <Badge className="mb-2 bg-blue-400/30 text-blue-100 border-blue-300/30">
                  Option A
                </Badge>
                <CardTitle className="text-2xl text-white">Purchase</CardTitle>
                <CardDescription className="text-blue-200">
                  Own outright • Max state incentives
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <div className="bg-white/10 rounded-lg p-4 mb-6 text-center">
                  <div className="text-sm text-blue-200 mb-1">Effective Cost After Incentives</div>
                  <div className="text-3xl font-bold">$25K - $45K</div>
                  <div className="text-sm text-blue-200">0% HEAT Loan available</div>
                </div>
                
                <ul className="space-y-3">
                  {purchaseFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-300 flex-shrink-0 mt-0.5" />
                      <span className="text-blue-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-3 bg-amber-500/20 border border-amber-400/30 rounded-lg">
                  <p className="text-amber-200 text-xs">
                    ⚠️ Note: Federal residential tax credits (30%) expired Dec 31, 2025. 
                    Purchase now relies on state incentives.
                  </p>
                </div>

                <Link to="/calculator" className="block mt-6">
                  <Button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold">
                    See Estimated Savings
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* EaaS Option */}
            <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 shadow-2xl relative">
              <div className="absolute -top-3 right-4">
                <Badge className="bg-yellow-400 text-gray-900 font-bold px-3 py-1">
                  ⭐ RECOMMENDED
                </Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-3">
                  <CreditCard className="h-10 w-10 text-purple-200" />
                </div>
                <Badge className="mb-2 bg-purple-400/30 text-purple-100 border-purple-300/30">
                  Option B
                </Badge>
                <CardTitle className="text-2xl text-white">Energy-as-a-Service</CardTitle>
                <CardDescription className="text-purple-200">
                  $0 down • 30% federal ITC via TPO
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <div className="bg-white/10 rounded-lg p-4 mb-6 text-center">
                  <div className="text-sm text-purple-200 mb-1">Your Upfront Cost</div>
                  <div className="text-3xl font-bold">$0</div>
                  <div className="text-sm text-purple-200">5-10% less than current bills</div>
                </div>
                
                <ul className="space-y-3">
                  {eaasFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-300 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-3 bg-green-500/20 border border-green-400/30 rounded-lg">
                  <p className="text-green-200 text-xs">
                    ✓ Federal 30% ITC still available through our TPO model — 
                    we claim commercial credits and pass savings to you!
                  </p>
                </div>

                <Link to="/contact" className="block mt-6">
                  <Button className="w-full bg-white text-purple-700 hover:bg-purple-50 font-bold">
                    Get EaaS Quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Savings Example for EaaS */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-white/5 border-white/10">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">EaaS Example: 20-Year Projection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Current Energy Costs</div>
                    <div className="text-2xl font-bold text-red-400">$6,000/yr</div>
                    <div className="text-xs text-gray-500">Electric + Oil/Propane</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">EaaS Year-1 Payment</div>
                    <div className="text-2xl font-bold text-green-400">$5,400/yr</div>
                    <div className="text-xs text-gray-500">10% instant savings</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">20-Year Total Savings</div>
                    <div className="text-2xl font-bold text-purple-400">$45,000+</div>
                    <div className="text-xs text-gray-500">vs traditional energy</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">System You'll Own</div>
                    <div className="text-2xl font-bold text-blue-400">$65,000</div>
                    <div className="text-xs text-gray-500">After 6-yr buyout</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Compare Your Options
            </h2>
            <p className="text-xl text-gray-600">
              Three paths to energy freedom—choose what works for you
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-green-100 text-green-800 rounded-lg py-2 px-4 font-bold">
                      Tier 1<br/><span className="font-normal text-sm">Free Battery</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-4 font-bold">
                      Tier 2 (Own)<br/><span className="font-normal text-sm">Purchase</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-purple-100 text-purple-800 rounded-lg py-2 px-4 font-bold">
                      Tier 2 (EaaS)<br/><span className="font-normal text-sm">Service + Buyback</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 text-gray-900 font-medium">{row.feature}</td>
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
                      {row.purchase === true ? (
                        <CheckCircle className="h-6 w-6 text-blue-500 mx-auto" />
                      ) : row.purchase === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-semibold text-blue-600">{row.purchase}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.eaas === true ? (
                        <CheckCircle className="h-6 w-6 text-purple-500 mx-auto" />
                      ) : row.eaas === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-semibold text-purple-600">{row.eaas}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            *Tier 2 purchase costs vary based on home size and configuration. **Residential federal tax credits expired Dec 31, 2025.
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
                    <Badge className="bg-blue-100 text-blue-800">
                      {testimonial.tier}
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
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Energy Freedom Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free battery with Tier 1. Zero upfront with EaaS. Own outright with Purchase.
            Whatever path you choose, your energy independence starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                <Battery className="h-5 w-5 mr-2" />
                Get Free Site Review
              </Button>
            </Link>
            <a href="tel:+17816545879">
              <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 text-lg font-bold">
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
