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
  Percent
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
      title: "State & Utility Incentives",
      description: "Up to $13,500 MassSave geothermal rebate, SMART solar payments, 0% HEAT Loan financing"
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Complete Energy Independence",
      description: "Eliminate oil, propane, and gas—run your entire home on clean electricity"
    }
  ]

  const eaasFeatures = [
    {
      icon: <Percent className="h-6 w-6" />,
      title: "Federal ITC Through TPO",
      description: "We capture 30% commercial tax credits and pass savings to you—unavailable for direct residential purchase since 2026"
    },
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Immediate 5-10% Savings",
      description: "Pay less than your current energy bills from day one—guaranteed savings"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Zero Upfront Cost",
      description: "Complete NetZero installation with no money down—we cover everything"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "20-Year Agreement",
      description: "Long-term price stability with predictable payments for two decades"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "10 Years Free Maintenance",
      description: "Full warranty and maintenance coverage included for the first 10 years"
    },
    {
      icon: <Percent className="h-6 w-6" />,
      title: "2.5% Annual Adjustment",
      description: "Modest inflation adjustment vs. unpredictable 10-30% fuel price swings"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "6-Year Buyout Option",
      description: "Purchase the system at fair market value after 6 years and own it outright"
    }
  ]

  const comparisonData = [
    { feature: "Battery Storage", tier1: true, tier2: true, eaas: true },
    { feature: "Backup Power", tier1: true, tier2: true, eaas: true },
    { feature: "Peak Shaving Savings", tier1: true, tier2: true, eaas: true },
    { feature: "Solar Panels", tier1: false, tier2: true, eaas: true },
    { feature: "Geothermal Heating & Cooling", tier1: false, tier2: true, eaas: true },
    { feature: "Hot Water Generation", tier1: false, tier2: true, eaas: true },
    { feature: "NetZero Energy Status", tier1: false, tier2: true, eaas: true },
    { feature: "Free Maintenance (10 yrs)", tier1: false, tier2: false, eaas: true },
    { feature: "Contract Length", tier1: "—", tier2: "—", eaas: "20 years" },
    { feature: "Price Protection", tier1: false, tier2: false, eaas: true },
    { feature: "Upfront Cost", tier1: "$0", tier2: "Varies*", eaas: "$0" },
    { feature: "Own the System", tier1: "—", tier2: "Yes", eaas: "After 6 yrs" }
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
      question: "How does Energy-as-a-Service (EaaS) work exactly?",
      answer: "We calculate your current annual energy costs (electricity + heating fuel like oil or propane). Then we discount that by 5-10% and offer you a fixed monthly payment at that lower rate. We install the complete NetZero system at no cost to you. It's a 20-year agreement where you pay the discounted rate monthly, saving money immediately. The first 10 years include full maintenance and warranty coverage at no extra cost. After 6 years, you have the option to purchase the system at fair market value and own it outright."
    },
    {
      question: "Why would GeoPioneer offer EaaS at a discount?",
      answer: "The economics work because geothermal and solar are dramatically cheaper to operate than fossil fuels. Your old $5,000/year energy bill might cost us only $500-1,000/year to deliver with NetZero technology. We make money on the spread while you save money compared to your old bills. After 6 years, you can buy the system and keep all the savings yourself."
    },
    {
      question: "What's the 2.5% annual adjustment in EaaS?",
      answer: "Your monthly payment increases by 2.5% each year to account for inflation. This is far more predictable than traditional energy costs—oil and propane can swing 10-30% year over year based on global markets. With EaaS, you know exactly what you'll pay for the next 6 years, with only modest, predictable increases."
    },
    {
      question: "Can I upgrade from Tier 1 to EaaS or Tier 2 later?",
      answer: "Absolutely! That's exactly how we designed it. Tier 1 customers get priority scheduling for upgrades and exclusive discounts. Your existing battery integrates seamlessly with the full NetZero system. Many customers start with Tier 1 to experience the benefits before committing to the complete package."
    },
    {
      question: "What are the requirements for these programs?",
      answer: "Your home should be 2,000+ square feet, built before 2005, have central air conditioning, and currently heat with oil, propane, electric, or baseboard systems. You should also own your home and have a suitable outdoor location for equipment. We'll verify eligibility during your free assessment."
    },
    {
      question: "What incentives are available if I buy Tier 2 outright?",
      answer: "As of 2026, residential federal tax credits (Section 25D) have expired. However, Tier 2 purchase still qualifies for: up to $13,500 MassSave rebate for whole-home geothermal ($25,000 if income-eligible), SMART solar incentive payments over 10 years, and 0% HEAT Loan financing up to $25,000. For the full benefit of federal incentives, consider our EaaS program where we capture commercial tax credits through TPO and pass the savings to you."
    },
    {
      question: "What's the warranty and maintenance coverage?",
      answer: "Tier 1 batteries come with 10-year manufacturer warranties. Tier 2 purchase includes 25-year solar panel warranties, 10-year inverter warranties, 10-year heat pump warranties, and 50-year ground loop warranties. For EaaS, the first 10 years include complete maintenance and warranty coverage at no additional cost—we handle everything. Years 11-20 of the EaaS agreement may include optional maintenance packages. We also provide a 10-year workmanship warranty on all installations."
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
      quote: "The EaaS program was perfect for us. We're paying $300/month less than our old oil + electric bills, and we didn't pay a dime upfront. In 6 years, we'll own the whole system.",
      author: "James & Linda T.",
      location: "Newton, MA",
      savings: "$3,600/year"
    },
    {
      quote: "We went straight to Tier 2. The incentives made it affordable, and now we produce more energy than we use. Last month, the utility paid us. It's incredible.",
      author: "Michael R.",
      location: "Brookline, MA",
      savings: "$5,100/year"
    }
  ]

  // Example calculation for EaaS
  const exampleCalc = {
    currentElectric: 2400,
    currentHeating: 3600,
    totalCurrent: 6000,
    discount: 10,
    newAnnual: 5400,
    newMonthly: 450,
    yearlyIncrease: 2.5,
    systemValue: 65000,
    systemLifespan: "25-50"
  }

  // Calculate 20-year projections
  const calculate20YearSavings = () => {
    let traditionalTotal = 0
    let eaasTotal = 0
    let eaasPayment = exampleCalc.newAnnual
    const fuelInflation = 0.05 // 5% average fuel cost increase
    let currentEnergyCost = exampleCalc.totalCurrent

    for (let year = 1; year <= 20; year++) {
      traditionalTotal += currentEnergyCost
      eaasTotal += eaasPayment
      
      // Apply inflation for next year
      currentEnergyCost *= (1 + fuelInflation)
      eaasPayment *= (1 + exampleCalc.yearlyIncrease / 100)
    }

    return {
      traditionalTotal: Math.round(traditionalTotal),
      eaasTotal: Math.round(eaasTotal),
      totalSavings: Math.round(traditionalTotal - eaasTotal)
    }
  }

  const twentyYearCalc = calculate20YearSavings()

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
              Or let us handle everything with Energy-as-a-Service.
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
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg"
                onClick={() => document.getElementById('eaas').scrollIntoView({ behavior: 'smooth' })}
              >
                <Zap className="h-5 w-5 mr-2" />
                Energy-as-a-Service
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

      {/* EaaS Section - Energy as a Service */}
      <section id="eaas" className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-400/90 text-gray-900 border-yellow-400/30 text-lg px-6 py-2 font-bold">
              🔥 NOW THE BEST DEAL — Federal Credits Still Apply!
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Energy-as-a-Service
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Complete NetZero upgrade with <span className="text-white font-bold">zero upfront cost</span>. 
              Pay less than your current energy bills. Own the system after 6 years.
            </p>
            <div className="mt-6 p-4 bg-yellow-400/20 border border-yellow-400/50 rounded-xl max-w-2xl mx-auto">
              <p className="text-yellow-200 text-sm">
                <strong className="text-yellow-100">⚡ Important 2026 Update:</strong> Residential federal tax credits (30%) expired Dec 31, 2025. 
                But through our <strong>TPO (Third-Party Ownership)</strong> model, GeoPioneer can still claim commercial ITC and pass the savings to you!
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-white/10 border-purple-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">1</div>
                    <h4 className="font-semibold text-white">We Calculate</h4>
                    <p className="text-purple-200 text-sm">Your current annual energy costs (electric + oil/propane)</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">2</div>
                    <h4 className="font-semibold text-white">We Discount</h4>
                    <p className="text-purple-200 text-sm">5-10% off your current costs becomes your new payment</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">3</div>
                    <h4 className="font-semibold text-white">We Install</h4>
                    <p className="text-purple-200 text-sm">Complete NetZero system (battery + solar + geothermal) for FREE</p>
                  </div>
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold">4</div>
                    <h4 className="font-semibold text-white">You Choose</h4>
                    <p className="text-purple-200 text-sm">20-year agreement with buyout option after 6 years</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Example Calculation */}
          <div className="max-w-5xl mx-auto mb-16">
            <Card className="bg-white text-gray-900 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center">Example: Your 20-Year Savings</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                {/* System Value Banner */}
                <div className="mb-8 p-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl border-2 border-purple-300">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <div className="text-sm text-purple-700 font-medium">Complete NetZero System Value</div>
                      <div className="text-3xl font-bold text-purple-800">${exampleCalc.systemValue.toLocaleString()}</div>
                      <div className="text-sm text-purple-600">Battery + Solar + Geothermal</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600">$0</div>
                      <div className="text-sm text-gray-600">Your Upfront Cost</div>
                    </div>
                    <div className="text-center md:text-right">
                      <div className="text-sm text-purple-700 font-medium">System Lifespan</div>
                      <div className="text-2xl font-bold text-purple-800">{exampleCalc.systemLifespan} years</div>
                      <div className="text-sm text-purple-600">Long after contract ends!</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Current Costs */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-gray-900 border-b pb-2">Your Current Annual Costs</h4>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Electricity</span>
                      <span className="font-semibold">${exampleCalc.currentElectric.toLocaleString()}/yr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Heating (Oil/Propane)</span>
                      <span className="font-semibold">${exampleCalc.currentHeating.toLocaleString()}/yr</span>
                    </div>
                    <div className="flex justify-between text-lg border-t pt-2">
                      <span className="font-bold text-red-600">Total Year-1 Cost</span>
                      <span className="font-bold text-red-600">${exampleCalc.totalCurrent.toLocaleString()}/yr</span>
                    </div>
                    <div className="text-sm text-red-500 italic">
                      * Fuel costs typically increase 5-10% per year
                    </div>
                  </div>

                  {/* EaaS Costs */}
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-gray-900 border-b pb-2">With Energy-as-a-Service</h4>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Your Discount</span>
                      <span className="font-semibold text-green-600">{exampleCalc.discount}% OFF current costs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year-1 Payment</span>
                      <span className="font-semibold">${exampleCalc.newAnnual.toLocaleString()}/yr</span>
                    </div>
                    <div className="flex justify-between text-lg border-t pt-2">
                      <span className="font-bold text-green-600">Monthly Payment</span>
                      <span className="font-bold text-green-600">${exampleCalc.newMonthly}/mo</span>
                    </div>
                    <div className="text-sm text-green-600 italic">
                      * Only 2.5% annual increase (predictable!)
                    </div>
                  </div>
                </div>

                {/* 20-Year Comparison */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-lg text-gray-900 mb-4 text-center">20-Year Cost Comparison</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-red-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">Traditional Energy</div>
                      <div className="text-sm text-gray-500">(5% annual increase)</div>
                      <div className="text-3xl font-bold text-red-600 mt-2">${twentyYearCalc.traditionalTotal.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600 mb-1">EaaS Payments</div>
                      <div className="text-sm text-gray-500">(2.5% annual increase)</div>
                      <div className="text-3xl font-bold text-green-600 mt-2">${twentyYearCalc.eaasTotal.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-4 bg-purple-100 rounded-lg border-2 border-purple-400">
                      <div className="text-sm text-purple-700 mb-1 font-medium">Your 20-Year Savings</div>
                      <div className="text-sm text-purple-600">(+ free $65K system!)</div>
                      <div className="text-4xl font-bold text-purple-700 mt-2">${twentyYearCalc.totalSavings.toLocaleString()}</div>
                    </div>
                  </div>
                </div>

                {/* Final Value Prop */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-6 text-white text-center">
                  <div className="text-lg mb-2">After 20 Years, You Get:</div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-3xl font-bold">${twentyYearCalc.totalSavings.toLocaleString()}</div>
                      <div className="text-green-100 text-sm">Total Savings</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">+</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">${exampleCalc.systemValue.toLocaleString()}</div>
                      <div className="text-green-100 text-sm">System You Own</div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/30">
                    <div className="text-sm text-green-100">System still has 5-30 years of life remaining = FREE energy for decades!</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* EaaS Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {eaasFeatures.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-purple-400/30 hover:bg-white/20 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/30 p-3 rounded-full text-purple-200">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-200">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-12 py-4 text-lg font-bold">
                Get Your EaaS Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <p className="text-purple-300 mt-4">We'll calculate your exact savings based on your current energy bills</p>
          </div>
        </div>
      </section>

      {/* Tier 2 Section */}
      <section id="tier2" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-300 text-lg px-6 py-2">
              Tier 2 Purchase
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Buy Your NetZero System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to own outright? Purchase the complete NetZero package and maximize 
              federal tax credits and state incentives.
            </p>
          </div>

          {/* Notice about Federal Credits */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-4 text-center">
              <p className="text-amber-800">
                <strong>📢 2026 Update:</strong> Residential federal tax credits expired Dec 31, 2025. 
                Direct purchase now relies on <strong>MassSave rebates</strong> and <strong>0% HEAT Loans</strong>. 
                For federal incentive benefits, consider <a href="#eaas" className="underline font-bold">Energy-as-a-Service</a> where we capture commercial ITC through TPO.
              </p>
            </div>
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
                  <div className="text-5xl font-bold mb-2">$13.5K+</div>
                  <div className="text-cyan-100">MassSave Rebates</div>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 text-center">
                  <div className="text-5xl font-bold mb-2">0%</div>
                  <div className="text-green-100">HEAT Loan Rate</div>
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
                    <div className="bg-purple-100 text-purple-800 rounded-lg py-2 px-4 font-bold">
                      EaaS<br/><span className="font-normal text-sm">Energy Service</span>
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-blue-100 text-blue-800 rounded-lg py-2 px-4 font-bold">
                      Tier 2<br/><span className="font-normal text-sm">Purchase</span>
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
                      {row.eaas === true ? (
                        <CheckCircle className="h-6 w-6 text-purple-500 mx-auto" />
                      ) : row.eaas === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        <span className="font-semibold text-purple-600">{row.eaas}</span>
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
            *Tier 2 purchase costs vary based on home size, system configuration, and available incentives. 
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
      <section className="py-20 bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Energy Freedom Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Free battery with Tier 1. Zero upfront with EaaS. Maximum incentives with Tier 2.
            Whatever path you choose, your energy independence starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                <Battery className="h-5 w-5 mr-2" />
                Get Free Assessment
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
