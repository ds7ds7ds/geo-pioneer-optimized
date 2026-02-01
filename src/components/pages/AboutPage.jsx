import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Users, Award, MapPin, Phone } from 'lucide-react'

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Managing Director",
      title: "Engineering Leadership",
      experience: "Master's Degree in Engineering, Certified Designer and Installer for Ground Source Heat Pumps (IGSHPA)",
      certifications: ["IGSHPA Certified", "Master's Engineering", "Multi-State Licensed"]
    },
    {
      name: "Operations Executive",
      title: "Project Management",
      experience: "More than half a decade of operations experience with effective project management and support",
      certifications: ["Project Management", "Customer Relations", "Operations"]
    },
    {
      name: "Drilling & Installation",
      title: "Field Crews (10+ Professionals)",
      experience: "Expert drilling teams with over 1 million feet drilled worldwide using high-tech Comacchio equipment",
      certifications: ["NGWA Certified", "Safety Trained", "Equipment Specialists"]
    }
  ]

  const certifications = [
    "IGSHPA Designer Certification",
    "IGSHPA Installer Certification",
    "Electrical License - Massachusetts",
    "HIC Registration - Home Improvement Contractor",
    "Drilling Licenses - Geothermal Boring",
    "EPA Section 608 Certified Technicians",
    "OSHA 30-Hour Safety Certification",
    "MassSave Partner (Pending Approval)",
    "Mass Climate Bank ESHLP Approved",
    "Better Business Bureau A+ Rating"
  ]

  const serviceAreas = [
    "Greater Boston",
    "MetroWest",
    "North Shore",
    "South Shore",
    "Central Massachusetts",
    "Cape Cod"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/geo-drilling-backyard.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-blue-500/20 text-blue-400 border-blue-400/30 text-sm px-4 py-1">
            Massachusetts Geothermal Experts
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">GeoPioneer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Massachusetts' leading geothermal installation company, pioneering clean energy solutions 
            for homes and businesses across New England.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To make geothermal heating and cooling accessible and affordable for every Massachusetts 
                homeowner, reducing energy costs while protecting our environment for future generations.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in vertical bore geothermal systems designed specifically for New England's 
                rocky terrain and limited space constraints, using European-style compact drilling equipment 
                that minimizes property disruption.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Over 1 million feet drilled worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">IGSHPA certified designers and installers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Licensed in MA, RI, ME, CT, NY, and NGWA</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why We Started</h3>
              <p className="text-gray-600 mb-4">
                After seeing too many Massachusetts homeowners struggle with expensive heating oil and 
                propane bills, we founded GeoPioneer to bring efficient, affordable geothermal solutions 
                to New England.
              </p>
              <p className="text-gray-600">
                Our compact drilling approach and focus on existing home retrofits makes geothermal 
                accessible even in dense suburban areas with limited yard space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              5 core team members + 10+ field professionals delivering expert geothermal solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">
                    {member.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Certifications & Credentials</h2>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Areas</h2>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800 text-sm">
                  <strong>Note:</strong> We provide free site assessments throughout our service area. 
                  Contact us to confirm coverage for your specific location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Quality First</h3>
              <p className="text-blue-100">
                We use only the highest quality equipment and materials, backed by comprehensive warranties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Customer Focus</h3>
              <p className="text-blue-100">
                Your satisfaction is our priority. We provide transparent pricing and clear communication throughout.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Environmental Responsibility</h3>
              <p className="text-blue-100">
                Every installation reduces carbon emissions and helps create a cleaner future for Massachusetts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work with Massachusetts' Geothermal Experts?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for a free consultation and site assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+17816545879">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-8 py-3 font-bold shadow-lg">
                <Phone className="h-5 w-5 mr-2" />
                Call (781) 654-5879
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold">
                Request Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
