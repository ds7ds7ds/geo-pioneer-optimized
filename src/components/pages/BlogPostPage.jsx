import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from 'lucide-react'

const blogPosts = {
  "from-skeptic-to-believer": {
    id: 1,
    title: "From Skeptic to Believer: Addressing Homeowner Concerns",
    author: "Dmitry Kur",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Homeowner Guide",
    tags: ["Trust", "Quality", "Sizing", "Concerns"],
    content: `
## Adopting New Technology Can Be Daunting

Adopting a new heating and cooling system can be daunting, especially one that's unfamiliar like geothermal. Many homeowners have legitimate concerns about making such a significant investment. Let's address the most common ones.

## "Can I Trust This Technology?"

Geothermal systems have been around for over 70 years. The ground loop components typically last 50+ years, while the indoor heat pump unit lasts 20-25 years — nearly double the lifespan of conventional HVAC systems.

The technology is proven, reliable, and backed by decades of real-world performance data. Over 1.5 million geothermal systems are currently operating in the United States alone.

## "How Do I Know I'm Getting Quality?"

Look for installers who are:
- **IGSHPA Certified** — The gold standard for geothermal installers
- **Licensed and insured** — Verify with your state licensing board
- **Experienced** — Ask for references and case studies
- **Transparent** — They should provide detailed proposals and answer all questions

At GeoPioneer, all our technicians are IGSHPA certified, and we provide comprehensive warranties on both equipment and installation.

## "What If the System Is Sized Wrong?"

Proper sizing is critical. An undersized system won't heat or cool effectively, while an oversized system wastes money and cycles inefficiently.

Professional installers perform a **Manual J load calculation** to determine exactly what your home needs. This considers:
- Square footage and ceiling height
- Insulation levels
- Window types and orientation
- Local climate data
- Occupancy patterns

We also conduct thermal conductivity testing on your property to ensure the ground loop is perfectly matched to your soil conditions.

## Making the Decision

The best way to overcome skepticism is through education and due diligence. Ask questions, request references, and don't rush the decision. A quality geothermal installer will welcome your scrutiny — it's how trust is built.

Ready to learn more? Schedule a free consultation and we'll walk you through every aspect of the process.
    `
  },
  "geothermal-101": {
    id: 2,
    title: "Geothermal Heating & Cooling 101: Efficiency, Benefits & Myths",
    author: "Dmitry Kur",
    date: "March 8, 2024",
    readTime: "4 min read",
    category: "Education",
    tags: ["Efficiency", "Benefits", "Myths", "GSHP"],
    content: `
## Unlocking Superior Efficiency

Geothermal heat pumps, also known as ground-source heat pumps (GSHP), are among the most efficient home heating and cooling systems available today. But how do they work, and what makes them so effective?

## How Geothermal Works

Just a few feet below the surface, the earth maintains a constant temperature of around 50-55°F year-round. Geothermal systems tap into this stable temperature using a loop of pipes buried underground.

**In winter:** The system extracts heat from the ground and transfers it into your home.

**In summer:** The process reverses — heat is pulled from your home and deposited into the cooler ground.

Because the system moves heat rather than generating it through combustion, it achieves remarkable efficiency levels.

## The Efficiency Advantage

Geothermal systems deliver 3-5 units of heating or cooling energy for every 1 unit of electrical energy consumed. This translates to:

- **300-500% efficiency** compared to 95% for the best gas furnaces
- **40-60% reduction** in energy bills
- **Significant carbon footprint reduction**

## Common Myths Debunked

**Myth: "Geothermal only works in certain climates"**
Reality: Geothermal works everywhere because ground temperature is stable regardless of air temperature. Systems operate successfully from Alaska to Florida.

**Myth: "The installation destroys your yard"**
Reality: Modern horizontal drilling techniques minimize surface disruption. Most lawns are fully restored within weeks.

**Myth: "It's too expensive"**
Reality: While upfront costs are higher, federal tax credits (30%) and state incentives significantly reduce the investment. Most homeowners see payback within 5-7 years.

## Is Geothermal Right for You?

Geothermal is ideal for homeowners who:
- Plan to stay in their home long-term
- Want to reduce energy bills and carbon footprint
- Are building new or replacing aging HVAC equipment
- Have adequate yard space for the ground loop

Contact us for a free assessment to see if geothermal makes sense for your home.
    `
  },
  "renew-home-netzero": {
    id: 3,
    title: "Renew Your Home to NetZero with GeoPioneer Innovations",
    author: "Dmitry Kur",
    date: "March 3, 2024",
    readTime: "3 min read",
    category: "NetZero",
    tags: ["NetZero", "Renovation", "Sustainability"],
    content: `
## Transform Your Old House Into a Sustainable Home

Are you looking to transform your old house into a sustainable, energy-efficient home? GeoPioneer offers innovative solutions to help you achieve NetZero energy consumption.

## What Is NetZero?

A NetZero home produces as much energy as it consumes over the course of a year. This is achieved through a combination of:

1. **Energy efficiency improvements** — Reducing how much energy you need
2. **Renewable energy generation** — Producing clean energy on-site
3. **Smart energy management** — Optimizing when and how energy is used

## The GeoPioneer Approach

We take a holistic approach to NetZero renovations:

### Step 1: Energy Audit
We assess your home's current energy performance, identifying areas of heat loss, inefficient systems, and opportunities for improvement.

### Step 2: Efficiency First
Before adding renewable energy, we optimize your home's envelope:
- Air sealing and insulation upgrades
- High-performance windows
- LED lighting and efficient appliances

### Step 3: Geothermal Installation
Replace your fossil fuel heating system with an ultra-efficient geothermal heat pump. This single change can reduce your heating and cooling energy use by 50-70%.

### Step 4: Solar Integration
Add rooftop solar panels to generate clean electricity. Combined with geothermal, your home can achieve true NetZero status.

### Step 5: Smart Controls
Install smart thermostats and energy monitoring systems to optimize performance and track your progress.

## Real Results

Our NetZero renovations have helped Massachusetts homeowners:
- Eliminate heating oil and gas bills entirely
- Reduce electricity costs by 80% or more
- Increase home value by 10-20%
- Achieve energy independence

Ready to start your NetZero journey? Contact GeoPioneer today for a free consultation.
    `
  },
  "achieve-netzero-standard": {
    id: 4,
    title: "Achieve NetZero Standard with GeoPioneer Renewable Solutions",
    author: "Dmitry Kur",
    date: "March 3, 2024",
    readTime: "3 min read",
    category: "Renewable Energy",
    tags: ["NetZero", "Renewable", "Environment"],
    content: `
## Passionate About Sustainable Renovations?

Are you passionate about renovating old houses to be more environmentally friendly? Look no further than GeoPioneer, a startup based in New England dedicated to sustainable home transformations.

## Our Mission

At GeoPioneer, we believe every home can be part of the clean energy future. Our mission is to make NetZero renovations accessible, affordable, and hassle-free for Massachusetts homeowners.

## Why Choose GeoPioneer?

### Local Expertise
We're based in Massachusetts and understand the unique challenges of New England homes — from colonial-era construction to harsh winters. Our solutions are tailored to perform in our climate.

### Integrated Solutions
Unlike contractors who specialize in just one area, we provide complete NetZero packages:
- Geothermal heating and cooling
- Solar panel installation
- Battery storage systems
- Weatherization and insulation
- Smart home integration

### Incentive Maximization
Massachusetts offers some of the best renewable energy incentives in the country. We help you navigate:
- 30% Federal Tax Credit for geothermal and solar
- Mass Save rebates
- SMART solar incentives
- Net metering credits

### Quality Guarantee
All our installations are performed by certified technicians and backed by comprehensive warranties. We stand behind our work.

## Take the First Step

Achieving NetZero status is a journey, and it starts with understanding your home's current performance and potential. 

Schedule a free home energy assessment with GeoPioneer. We'll provide a detailed roadmap showing exactly how to achieve NetZero — including costs, savings, and timeline.

Join the growing community of Massachusetts homeowners who are leading the clean energy revolution. Contact us today.
    `
  }
}

const BlogPostPage = () => {
  const { slug } = useParams()
  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-blue-100">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-600 prose-strong:text-gray-800 prose-ul:text-gray-600 prose-ol:text-gray-600">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">{paragraph.replace('## ', '')}</h2>
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-800">{paragraph.replace('### ', '')}</h3>
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-semibold text-gray-800 mt-4">{paragraph.replace(/\*\*/g, '')}</p>
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index} className="ml-6 text-gray-600">{paragraph.replace('- ', '')}</li>
                } else if (paragraph.match(/^\d+\./)) {
                  return <li key={index} className="ml-6 text-gray-600 list-decimal">{paragraph.replace(/^\d+\.\s*/, '')}</li>
                } else if (paragraph.trim()) {
                  return <p key={index} className="text-gray-600 my-4 leading-relaxed">{paragraph}</p>
                }
                return null
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Home with Geothermal?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment and discover how much you can save with Massachusetts' most efficient heating and cooling solution
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/calculator">
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              >
                Calculate Your Savings
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
