import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, Calendar, User, Clock, ArrowRight, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'

const blogPosts = {
  "from-skeptic-to-believer": {
    id: 1,
    title: "From Skeptic to Believer: Addressing Homeowner Concerns About Geothermal",
    author: "Dmitry Kur",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Homeowner Guide",
    tags: ["Trust", "Quality", "Sizing", "Concerns", "Investment"],
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    sections: [
      {
        type: "intro",
        content: "Making the switch to geothermal heating and cooling is one of the most significant home improvement decisions you'll ever make. It's natural to have questions, doubts, and even fears about investing in technology that might be unfamiliar. At GeoPioneer, we've guided hundreds of Massachusetts homeowners through this journey, and we've heard every concern imaginable. This guide addresses the most common worries head-on—with honest answers and real data."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Modern home with energy-efficient systems",
        caption: "Modern homes are increasingly adopting geothermal technology for reliable, efficient heating and cooling."
      },
      {
        type: "heading",
        content: "\"Can I Really Trust This Technology?\""
      },
      {
        type: "paragraph",
        content: "This is the question we hear most often, and it's completely valid. You're being asked to invest tens of thousands of dollars in a system that works underground, out of sight. How can you be sure it will actually perform as promised?"
      },
      {
        type: "paragraph",
        content: "Here's the reassuring truth: geothermal technology isn't new or experimental. The first commercial geothermal heat pump was installed in 1948—over 75 years ago. Since then, the technology has been refined, improved, and proven in millions of installations worldwide. Today, over 1.5 million geothermal systems operate in the United States alone, from the frozen tundra of Alaska to the humid heat of Florida."
      },
      {
        type: "callout",
        icon: "check",
        title: "Proven Track Record",
        content: "The underground loop components of a geothermal system typically last 50+ years with zero maintenance. The indoor heat pump unit lasts 20-25 years—nearly double the lifespan of conventional HVAC equipment. Many systems installed in the 1980s are still running strong today."
      },
      {
        type: "paragraph",
        content: "The U.S. Department of Energy, Environmental Protection Agency, and Energy Star all endorse geothermal as the most efficient and environmentally friendly heating and cooling technology available. This isn't fringe science—it's established, mainstream technology backed by decades of research and real-world performance data."
      },
      {
        type: "heading",
        content: "\"How Do I Know I'm Getting Quality Installation?\""
      },
      {
        type: "paragraph",
        content: "A geothermal system is only as good as its installation. Even the best equipment will underperform if it's installed incorrectly. This is why choosing the right installer is arguably more important than choosing the right equipment brand."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Professional technician working on HVAC system",
        caption: "Certified technicians ensure your geothermal system is installed to the highest standards."
      },
      {
        type: "paragraph",
        content: "When evaluating installers, look for these critical qualifications:"
      },
      {
        type: "list",
        items: [
          "**IGSHPA Certification** — The International Ground Source Heat Pump Association sets the gold standard for installer training. IGSHPA-certified installers have completed rigorous coursework in system design, loop installation, and heat pump operation.",
          "**State Licensing** — Verify that the company holds all required Massachusetts contractor licenses. Check with the state licensing board to confirm there are no complaints or disciplinary actions.",
          "**Proven Experience** — Ask how many geothermal systems the company has installed. Request references from past customers, and actually call them. Ask about the installation process, system performance, and customer service.",
          "**Comprehensive Warranties** — Quality installers stand behind their work with robust warranties covering both equipment and installation labor. Be wary of anyone who seems reluctant to put guarantees in writing.",
          "**Transparent Proposals** — A professional installer will provide detailed written proposals explaining exactly what you're getting, why it's designed that way, and what it will cost. If someone can't clearly explain their approach, that's a red flag."
        ]
      },
      {
        type: "paragraph",
        content: "At GeoPioneer, every member of our installation team holds IGSHPA certification. We've completed over 300 installations across Massachusetts, and we provide a 10-year warranty on our workmanship in addition to manufacturer equipment warranties. We encourage you to check our references—we're proud of every system we've installed."
      },
      {
        type: "heading",
        content: "\"What If the System Is Sized Wrong?\""
      },
      {
        type: "paragraph",
        content: "Proper sizing is absolutely critical to geothermal system performance. An undersized system will struggle to maintain comfortable temperatures during extreme weather. An oversized system will short-cycle, wasting energy and causing premature wear on components. Either scenario leads to frustrated homeowners and higher costs."
      },
      {
        type: "callout",
        icon: "alert",
        title: "The Danger of Guesswork",
        content: "Some contractors size systems based on rules of thumb or square footage alone. This approach frequently leads to problems. Every home is unique, and accurate sizing requires detailed analysis—not shortcuts."
      },
      {
        type: "paragraph",
        content: "Professional geothermal installers use a rigorous sizing process that includes:"
      },
      {
        type: "list",
        items: [
          "**Manual J Load Calculation** — This industry-standard method calculates your home's exact heating and cooling requirements based on square footage, ceiling height, insulation levels, window types, orientation, and local climate data.",
          "**Thermal Conductivity Testing** — Before designing your ground loop, we test your soil's thermal properties. Different soil types transfer heat at different rates, and this data is essential for proper loop sizing.",
          "**Detailed Home Assessment** — We physically inspect your home, looking at ductwork condition, air sealing, insulation, and other factors that affect system performance.",
          "**Computer Modeling** — We use specialized software to model your system's performance under various conditions, ensuring it will meet your needs even during the coldest winter nights and hottest summer days."
        ]
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Engineer reviewing technical plans",
        caption: "Proper system design requires detailed engineering analysis, not guesswork."
      },
      {
        type: "heading",
        content: "\"Is the Investment Really Worth It?\""
      },
      {
        type: "paragraph",
        content: "Let's talk numbers. Yes, geothermal systems cost more upfront than conventional HVAC equipment. A typical residential installation in Massachusetts ranges from $20,000 to $35,000 before incentives. That's a significant investment—we won't pretend otherwise."
      },
      {
        type: "paragraph",
        content: "However, the financial picture looks very different when you consider the complete equation:"
      },
      {
        type: "list",
        items: [
          "**30% Federal Tax Credit** — The Inflation Reduction Act provides a 30% tax credit for geothermal installations through 2032. On a $30,000 system, that's $9,000 back in your pocket.",
          "**State and Utility Incentives** — Massachusetts offers additional rebates through Mass Save and other programs, potentially saving thousands more.",
          "**Energy Savings** — Most homeowners see 40-60% reductions in heating and cooling costs. For a home spending $4,000 annually on heating oil and air conditioning, that's $1,600-$2,400 saved every year.",
          "**Longevity** — Your geothermal system will last 20-25 years indoors and 50+ years underground. Over its lifetime, you'll avoid 2-3 conventional system replacements.",
          "**Home Value** — Studies show homes with geothermal systems sell for 3-6% more than comparable homes without them."
        ]
      },
      {
        type: "callout",
        icon: "lightbulb",
        title: "Real Payback Example",
        content: "A typical Massachusetts homeowner switching from oil heat saves approximately $2,000 annually. After the 30% tax credit, their net investment might be $21,000. Simple payback: about 10 years—with 15+ years of additional savings to follow, plus a system that adds value to their home."
      },
      {
        type: "heading",
        content: "\"What About Maintenance and Repairs?\""
      },
      {
        type: "paragraph",
        content: "One of geothermal's most underappreciated benefits is its low maintenance requirements. The underground loop has no moving parts and requires zero maintenance—it simply sits there, quietly transferring heat for decades. The indoor heat pump unit needs only annual inspections, similar to any heating system."
      },
      {
        type: "paragraph",
        content: "Because geothermal systems don't rely on outdoor units exposed to weather, there's no condenser coil to clean, no refrigerant lines running outside to protect, and no equipment sitting in the elements. The entire system is sheltered and protected."
      },
      {
        type: "paragraph",
        content: "When repairs are eventually needed—typically after 15-20 years—they're usually straightforward heat pump component replacements, similar to servicing any HVAC equipment. And because the expensive ground loop lasts 50+ years, you'll never need to dig up your yard again."
      },
      {
        type: "heading",
        content: "Making the Decision"
      },
      {
        type: "paragraph",
        content: "We understand that choosing geothermal is a significant decision. That's why we never pressure homeowners to move quickly. Take your time, do your research, and ask tough questions. A quality installer will welcome your scrutiny—it's how trust is built."
      },
      {
        type: "paragraph",
        content: "If you're ready to learn more, we invite you to schedule a free, no-obligation consultation. We'll assess your home, answer your questions, and provide a detailed proposal tailored to your specific situation. Whether you ultimately choose GeoPioneer or another installer, we want you to make an informed decision you'll feel confident about for decades to come."
      }
    ]
  },
  "geothermal-101": {
    id: 2,
    title: "Geothermal Heating & Cooling 101: Everything You Need to Know",
    author: "Dmitry Kur",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Education",
    tags: ["Efficiency", "Benefits", "Technology", "GSHP", "How It Works"],
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    sections: [
      {
        type: "intro",
        content: "Imagine a heating and cooling system that delivers 400% efficiency, slashes your energy bills in half, and runs quietly for decades with minimal maintenance. It sounds too good to be true—but this technology exists, it's proven, and it's available right now for your home. Welcome to the world of geothermal heating and cooling."
      },
      {
        type: "heading",
        content: "The Science Behind the Magic"
      },
      {
        type: "paragraph",
        content: "While air temperatures in Massachusetts swing wildly throughout the year—from below zero in January to over 90°F in August—something remarkable happens just a few feet beneath your lawn. Starting at about 6 feet deep, the earth maintains a nearly constant temperature of 50-55°F, regardless of the season above."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Green landscape representing the earth's stable temperature",
        caption: "Just a few feet below the surface, the earth maintains a constant temperature year-round—the key to geothermal efficiency."
      },
      {
        type: "paragraph",
        content: "This stable underground temperature is the foundation of geothermal technology. A geothermal heat pump doesn't generate heat through combustion like a furnace or electrical resistance like a space heater. Instead, it moves heat—extracting it from the ground in winter and depositing it back into the ground in summer."
      },
      {
        type: "callout",
        icon: "lightbulb",
        title: "The Key Insight",
        content: "Moving heat is dramatically more efficient than creating heat. For every unit of electricity a geothermal system consumes, it delivers 3-5 units of heating or cooling energy. That's 300-500% efficiency—compared to just 95% for the most efficient gas furnace."
      },
      {
        type: "heading",
        content: "How a Geothermal System Works"
      },
      {
        type: "paragraph",
        content: "A geothermal system consists of three main components working together seamlessly:"
      },
      {
        type: "subheading",
        content: "1. The Ground Loop"
      },
      {
        type: "paragraph",
        content: "This is a series of pipes buried in your yard, filled with a water-based solution that circulates continuously. The loop can be installed horizontally in trenches (if you have enough yard space) or vertically in boreholes (for smaller lots). As the solution circulates through the ground, it absorbs or releases heat depending on the season."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Underground pipe installation",
        caption: "Ground loops are installed in either horizontal trenches or vertical boreholes, depending on your property."
      },
      {
        type: "subheading",
        content: "2. The Heat Pump"
      },
      {
        type: "paragraph",
        content: "Located inside your home (typically in the basement or utility room), the heat pump is the heart of the system. It contains a compressor, heat exchangers, and controls that concentrate the heat collected from the ground and distribute it through your home. In summer, the process reverses—the heat pump extracts heat from your indoor air and sends it to the ground loop for disposal."
      },
      {
        type: "subheading",
        content: "3. The Distribution System"
      },
      {
        type: "paragraph",
        content: "This is how the heating and cooling reaches your living spaces. Most geothermal systems connect to existing ductwork, but they can also work with radiant floor heating, high-velocity mini-ducts, or fan coil units. If your home has functional ducts, transitioning to geothermal is straightforward."
      },
      {
        type: "heading",
        content: "The Heating Cycle (Winter)"
      },
      {
        type: "paragraph",
        content: "When temperatures drop and your thermostat calls for heat, here's what happens:"
      },
      {
        type: "list",
        items: [
          "The circulating solution in your ground loop absorbs heat from the surrounding earth (remember, it's a constant 50-55°F down there).",
          "This warmed solution travels through pipes to the heat pump inside your home.",
          "The heat pump uses a refrigeration cycle to concentrate this low-grade heat into high-temperature heat.",
          "A fan blows air across the heated coils, and warm air circulates through your ducts.",
          "The now-cooled solution returns to the ground loop to collect more heat, and the cycle continues."
        ]
      },
      {
        type: "heading",
        content: "The Cooling Cycle (Summer)"
      },
      {
        type: "paragraph",
        content: "On hot summer days, the process reverses elegantly:"
      },
      {
        type: "list",
        items: [
          "The heat pump extracts heat from your indoor air, cooling your home.",
          "This captured heat is transferred to the circulating solution.",
          "The solution carries the heat underground, where it dissipates into the cooler earth.",
          "The cooled solution returns to collect more heat, and the cycle continues.",
          "As a bonus, some of this captured heat can be redirected to preheat your domestic hot water—essentially free hot water in summer!"
        ]
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1631545806609-35dde9b58a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Modern thermostat on wall",
        caption: "Your geothermal system operates automatically, responding to your thermostat just like any heating and cooling system."
      },
      {
        type: "heading",
        content: "The Efficiency Advantage: Breaking Down the Numbers"
      },
      {
        type: "paragraph",
        content: "Let's put geothermal efficiency in perspective with some real comparisons:"
      },
      {
        type: "list",
        items: [
          "**Electric Resistance Heat**: 100% efficiency (1 unit of heat per unit of electricity)",
          "**High-Efficiency Gas Furnace**: 95% efficiency",
          "**Air-Source Heat Pump**: 200-300% efficiency (varies with outdoor temperature)",
          "**Geothermal Heat Pump**: 300-500% efficiency (consistent year-round)"
        ]
      },
      {
        type: "paragraph",
        content: "The consistency is key. Air-source heat pumps lose efficiency as outdoor temperatures drop—exactly when you need heating most. Geothermal systems maintain their extraordinary efficiency regardless of weather conditions because the ground temperature never changes significantly."
      },
      {
        type: "callout",
        icon: "check",
        title: "Real Savings",
        content: "For a typical 2,500 sq ft Massachusetts home, switching from oil heat to geothermal typically saves $2,000-$3,000 annually on heating costs. Add air conditioning savings, and the total benefit is even greater."
      },
      {
        type: "heading",
        content: "Debunking Common Myths"
      },
      {
        type: "subheading",
        content: "Myth #1: \"Geothermal Only Works in Certain Climates\""
      },
      {
        type: "paragraph",
        content: "This is completely false. Because geothermal systems rely on stable underground temperatures rather than air temperatures, they work effectively everywhere—from Alaska to Arizona. In fact, geothermal systems are particularly advantageous in climates with cold winters, where they dramatically outperform air-source heat pumps."
      },
      {
        type: "subheading",
        content: "Myth #2: \"Installation Will Destroy My Yard\""
      },
      {
        type: "paragraph",
        content: "Modern installation techniques minimize disruption significantly. Vertical boring rigs have a surprisingly small footprint, and horizontal installations are typically restored within weeks. Within a single growing season, you usually can't tell any work was done. We've installed systems in beautifully landscaped yards, and homeowners are consistently surprised by how quickly their lawns recover."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1558904541-efa843a96f01?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Beautiful landscaped residential yard",
        caption: "After installation is complete, your yard returns to normal—often within just a few weeks."
      },
      {
        type: "subheading",
        content: "Myth #3: \"It's Too Expensive\""
      },
      {
        type: "paragraph",
        content: "The upfront cost is higher than conventional systems—that's true. But this narrow view ignores the complete financial picture. When you factor in the 30% federal tax credit, state incentives, 40-60% energy savings, longer equipment lifespan, and increased home value, geothermal often provides a better return on investment than traditional HVAC systems. Think of it as buying 50 years of heating and cooling at today's prices."
      },
      {
        type: "subheading",
        content: "Myth #4: \"Geothermal Systems Are Noisy\""
      },
      {
        type: "paragraph",
        content: "Actually, the opposite is true. With no outdoor compressor unit, geothermal systems are remarkably quiet. The indoor heat pump operates at about the same noise level as a refrigerator. Your neighbors will never hear it running—and neither will you unless you're standing next to it."
      },
      {
        type: "heading",
        content: "Is Geothermal Right for Your Home?"
      },
      {
        type: "paragraph",
        content: "Geothermal is an excellent choice for homeowners who:"
      },
      {
        type: "list",
        items: [
          "Plan to stay in their home for 7+ years (to capture the full financial benefits)",
          "Currently heat with oil, propane, or electric resistance (the savings are most dramatic)",
          "Want to reduce their carbon footprint significantly",
          "Are building a new home or need to replace aging HVAC equipment",
          "Value long-term savings over lowest upfront cost",
          "Have adequate yard space for the ground loop (though vertical systems work on smaller lots)"
        ]
      },
      {
        type: "paragraph",
        content: "The best way to find out if geothermal makes sense for your specific situation is to schedule a professional assessment. At GeoPioneer, we provide free consultations that include a detailed analysis of your home's heating and cooling needs, your property's suitability for different loop configurations, and a complete cost-benefit projection tailored to your circumstances."
      }
    ]
  },
  "renew-home-netzero": {
    id: 3,
    title: "Transform Your Home to NetZero: A Complete Guide to Energy Independence",
    author: "Dmitry Kur",
    date: "March 3, 2024",
    readTime: "9 min read",
    category: "NetZero",
    tags: ["NetZero", "Renovation", "Sustainability", "Energy Independence", "Solar"],
    heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    sections: [
      {
        type: "intro",
        content: "What if your home could produce as much energy as it consumes? What if your utility bills dropped to near zero—or you actually received payments from the power company? This isn't a futuristic fantasy. Thousands of homeowners have already achieved NetZero status, and with today's technology and incentives, it's more achievable than ever before."
      },
      {
        type: "heading",
        content: "What Does NetZero Actually Mean?"
      },
      {
        type: "paragraph",
        content: "A NetZero home produces as much clean energy as it consumes over the course of a year. Note the key phrase: \"over the course of a year.\" Your home doesn't need to be energy-independent every moment of every day. On cloudy winter days, you'll draw power from the grid. On sunny summer afternoons, you'll export excess power back to the grid. At year's end, these flows balance out."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Home with solar panels on roof",
        caption: "Solar panels are a key component of most NetZero homes, generating clean electricity from sunlight."
      },
      {
        type: "paragraph",
        content: "NetZero is achieved through a strategic combination of three elements: dramatically reducing energy demand, generating clean energy on-site, and intelligently managing when and how energy is used."
      },
      {
        type: "heading",
        content: "The GeoPioneer NetZero Roadmap"
      },
      {
        type: "paragraph",
        content: "After guiding hundreds of Massachusetts homeowners through energy transformations, we've developed a proven approach that maximizes results while minimizing hassle. Here's how we take older homes from energy hogs to NetZero heroes."
      },
      {
        type: "subheading",
        content: "Phase 1: The Energy Audit"
      },
      {
        type: "paragraph",
        content: "Every successful renovation starts with understanding where you are today. Our comprehensive energy audit includes:"
      },
      {
        type: "list",
        items: [
          "**Blower Door Testing** — We pressurize your home to identify every air leak, from obvious gaps to hidden drafts you never knew existed.",
          "**Thermal Imaging** — Infrared cameras reveal insulation gaps, thermal bridges, and areas where heat escapes through your building envelope.",
          "**HVAC Assessment** — We evaluate your existing heating and cooling systems, ductwork, and controls to understand current efficiency and identify upgrade opportunities.",
          "**Energy Bill Analysis** — Historical usage data reveals patterns and helps us project savings from various improvement scenarios.",
          "**Solar Site Assessment** — We analyze your roof orientation, shading, and structural capacity for solar panel installation."
        ]
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Home energy audit with thermal imaging",
        caption: "Thermal imaging reveals hidden energy losses that are invisible to the naked eye."
      },
      {
        type: "subheading",
        content: "Phase 2: Reduce Energy Demand"
      },
      {
        type: "paragraph",
        content: "Before adding renewable energy systems, we optimize your home's efficiency. Why? Because it's far more cost-effective to reduce energy needs than to generate more energy. Every improvement here means fewer solar panels needed later."
      },
      {
        type: "paragraph",
        content: "Key demand reduction strategies include:"
      },
      {
        type: "list",
        items: [
          "**Air Sealing** — Plugging air leaks is typically the single most cost-effective improvement. We seal gaps around windows, doors, electrical outlets, plumbing penetrations, and the attic hatch.",
          "**Insulation Upgrades** — Adding insulation to attics, walls, and basements dramatically reduces heat loss in winter and heat gain in summer. Modern blown-in and spray foam insulation can be installed with minimal disruption.",
          "**High-Performance Windows** — If your windows are old and leaky, upgrading to double or triple-pane windows with low-E coatings makes a significant difference in both comfort and efficiency.",
          "**LED Lighting** — Switching all remaining incandescent and CFL bulbs to LEDs reduces lighting energy use by 75% or more.",
          "**Efficient Appliances** — When appliances need replacement, choosing Energy Star models locks in savings for years to come."
        ]
      },
      {
        type: "callout",
        icon: "lightbulb",
        title: "The 50% Rule",
        content: "A thorough efficiency upgrade can reduce a home's energy consumption by 30-50%. That's like getting 30-50% of the way to NetZero before installing any renewable energy systems."
      },
      {
        type: "subheading",
        content: "Phase 3: Install Geothermal"
      },
      {
        type: "paragraph",
        content: "Now comes the game-changer. Replacing your fossil fuel heating system with a geothermal heat pump typically reduces heating and cooling energy consumption by 50-70%. For homes that were previously heating with oil or propane, this single change often represents the largest carbon reduction of the entire project."
      },
      {
        type: "paragraph",
        content: "Geothermal also simplifies your path to NetZero because it runs on electricity—which means it can be powered by solar panels. A home running on oil heat and grid electricity requires two separate energy systems. A geothermal home runs entirely on electricity, which can come entirely from your roof."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Modern heat pump unit",
        caption: "Geothermal heat pumps provide ultra-efficient heating and cooling using electricity—perfect for pairing with solar."
      },
      {
        type: "subheading",
        content: "Phase 4: Add Solar"
      },
      {
        type: "paragraph",
        content: "With your energy demand dramatically reduced, you now need fewer solar panels to reach NetZero. A home that once required 40 panels might now need only 20-25 after efficiency improvements and geothermal installation."
      },
      {
        type: "paragraph",
        content: "Modern solar panels are more efficient and affordable than ever. Combined with Massachusetts' excellent net metering policies (which credit you for excess energy sent to the grid) and federal tax incentives, solar provides compelling financial returns while eliminating your remaining energy costs."
      },
      {
        type: "subheading",
        content: "Phase 5: Smart Controls and Monitoring"
      },
      {
        type: "paragraph",
        content: "The final piece of the puzzle is intelligent energy management. Smart thermostats, energy monitors, and home automation systems help you optimize when and how energy is used, maximizing self-consumption of your solar generation and minimizing grid dependence."
      },
      {
        type: "heading",
        content: "Real Results from Real Homes"
      },
      {
        type: "paragraph",
        content: "Let's look at a real example. The Andersons, a family in Lexington, lived in a 1960s colonial that was hemorrhaging energy. Their annual energy costs exceeded $6,000 between heating oil, electricity for AC, and general usage."
      },
      {
        type: "paragraph",
        content: "After completing our NetZero roadmap:"
      },
      {
        type: "list",
        items: [
          "Air sealing and insulation upgrades reduced energy needs by 35%",
          "Geothermal installation eliminated oil dependency and reduced heating/cooling costs by 60%",
          "A 10kW solar array now generates more electricity than the home consumes annually",
          "Their total annual energy cost: approximately $200 (grid connection fees and small winter shortfalls)"
        ]
      },
      {
        type: "callout",
        icon: "check",
        title: "The Andersons' Results",
        content: "Annual savings: $5,800. Net investment after incentives: approximately $45,000. Simple payback: under 8 years. And they'll continue saving for decades while living in a more comfortable, valuable home."
      },
      {
        type: "heading",
        content: "Getting Started on Your NetZero Journey"
      },
      {
        type: "paragraph",
        content: "The path to NetZero doesn't have to happen all at once. Many homeowners phase their improvements over several years, starting with efficiency upgrades, adding geothermal when their existing system needs replacement, and finishing with solar when the time is right."
      },
      {
        type: "paragraph",
        content: "The important thing is to start with a plan. Our free NetZero assessment gives you a complete roadmap showing the optimal sequence of improvements, expected costs, available incentives, and projected savings for each phase. There's no pressure and no obligation—just the information you need to make informed decisions about your home's energy future."
      },
      {
        type: "paragraph",
        content: "Ready to start your journey to energy independence? Contact GeoPioneer today to schedule your free assessment."
      }
    ]
  },
  "achieve-netzero-standard": {
    id: 4,
    title: "Massachusetts Incentives & Rebates: Maximize Your Savings on Geothermal and Solar",
    author: "Dmitry Kur",
    date: "March 3, 2024",
    readTime: "8 min read",
    category: "Renewable Energy",
    tags: ["Incentives", "Rebates", "Tax Credits", "Massachusetts", "Savings"],
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    sections: [
      {
        type: "intro",
        content: "Massachusetts homeowners have access to some of the most generous renewable energy incentives in the nation. Between federal tax credits, state programs, and utility rebates, it's possible to offset 40-50% of your geothermal and solar installation costs. This guide breaks down exactly what's available and how to claim every dollar you deserve."
      },
      {
        type: "heading",
        content: "Federal Tax Credits: The Foundation of Your Savings"
      },
      {
        type: "paragraph",
        content: "The Inflation Reduction Act of 2022 supercharged federal incentives for clean energy, and homeowners are the biggest beneficiaries. These credits apply directly to your federal tax liability—meaning they reduce your taxes dollar-for-dollar, not just your taxable income."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Calculator and financial documents",
        caption: "Federal and state incentives can offset 40-50% of your renewable energy installation costs."
      },
      {
        type: "subheading",
        content: "Geothermal Tax Credit: 30%"
      },
      {
        type: "paragraph",
        content: "The federal Residential Clean Energy Credit provides a 30% tax credit for geothermal heat pump installations. This credit is available through 2032, with a gradual phase-down thereafter. There's no maximum limit—if you install a $35,000 system, you receive a $10,500 tax credit."
      },
      {
        type: "callout",
        icon: "check",
        title: "What's Covered",
        content: "The 30% credit applies to the total installed cost, including equipment, labor, permits, and even the cost of removing your old system. Essentially, everything on your installer's invoice qualifies."
      },
      {
        type: "paragraph",
        content: "Important notes about claiming this credit:"
      },
      {
        type: "list",
        items: [
          "You must have sufficient tax liability to claim the full credit. If you owe $8,000 in federal taxes and have a $10,500 credit, you can carry the remaining $2,500 forward to future tax years.",
          "The credit applies to your primary residence and second homes, but not rental properties.",
          "Both new construction and retrofits qualify.",
          "There's no income limit—the credit is available regardless of how much you earn."
        ]
      },
      {
        type: "subheading",
        content: "Solar Tax Credit: 30%"
      },
      {
        type: "paragraph",
        content: "Solar installations qualify for the same 30% federal tax credit, with the same rules and timelines. If you install both geothermal and solar, you can claim 30% on both systems. For a combined $60,000 installation, that's $18,000 in federal tax credits."
      },
      {
        type: "heading",
        content: "Massachusetts State Incentives"
      },
      {
        type: "paragraph",
        content: "Beyond federal programs, Massachusetts offers additional incentives that can further reduce your costs."
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        alt: "Massachusetts state flag and landscape",
        caption: "Massachusetts offers some of the best renewable energy incentives in the country."
      },
      {
        type: "subheading",
        content: "Mass Save Heat Pump Rebates"
      },
      {
        type: "paragraph",
        content: "Mass Save, sponsored by Massachusetts utilities, offers rebates for heat pump installations. While rebate amounts vary by equipment type and utility provider, typical incentives include:"
      },
      {
        type: "list",
        items: [
          "**Ground-source heat pumps**: Rebates up to $15,000 for whole-home geothermal systems",
          "**Additional incentives**: Enhanced rebates may be available for income-eligible households",
          "**Weatherization rebates**: Separate rebates for insulation and air sealing often stack with heat pump incentives"
        ]
      },
      {
        type: "callout",
        icon: "alert",
        title: "Check Current Amounts",
        content: "Rebate amounts change periodically. Contact Mass Save or your utility provider for current offers. GeoPioneer stays up-to-date on all available incentives and will help you claim everything you qualify for."
      },
      {
        type: "subheading",
        content: "SMART Solar Incentives"
      },
      {
        type: "paragraph",
        content: "The Solar Massachusetts Renewable Target (SMART) program provides ongoing payments for solar energy generation. Unlike one-time rebates, SMART pays you for every kilowatt-hour your system produces over a 10-year period. Payments vary based on system size and other factors, but typically add significant value over the life of your solar installation."
      },
      {
        type: "subheading",
        content: "Net Metering"
      },
      {
        type: "paragraph",
        content: "Massachusetts requires utilities to offer net metering, which credits you for excess solar energy sent to the grid. When your panels produce more than you need (common on sunny summer days), that excess flows to the grid and you receive credits on your bill. Those credits offset electricity you draw from the grid at night or during cloudy weather."
      },
      {
        type: "paragraph",
        content: "Net metering effectively turns the grid into a giant battery—storing your excess production and returning it when you need it, with no equipment cost to you."
      },
      {
        type: "heading",
        content: "Financing Options"
      },
      {
        type: "paragraph",
        content: "Even with generous incentives, geothermal and solar installations require significant upfront investment. Several financing options can help make these improvements accessible:"
      },
      {
        type: "list",
        items: [
          "**Mass Save HEAT Loan**: 0% interest loans up to $50,000 for qualifying energy improvements, including geothermal heat pumps. This is one of the best financing deals available anywhere.",
          "**Home Equity Loans**: Using your home's equity often provides lower interest rates than other financing options, and interest may be tax-deductible.",
          "**Solar Loans**: Many lenders offer specialized solar loans with competitive rates and terms designed around expected energy savings.",
          "**PACE Financing**: Property Assessed Clean Energy programs allow you to finance improvements through your property tax bill."
        ]
      },
      {
        type: "heading",
        content: "Putting It All Together: A Real Example"
      },
      {
        type: "paragraph",
        content: "Let's walk through the numbers for a typical Massachusetts home installing geothermal and solar:"
      },
      {
        type: "list",
        items: [
          "**Geothermal system cost**: $32,000",
          "**Solar system cost (8kW)**: $24,000",
          "**Total investment**: $56,000"
        ]
      },
      {
        type: "paragraph",
        content: "Now let's apply available incentives:"
      },
      {
        type: "list",
        items: [
          "**Federal tax credit (30%)**: -$16,800",
          "**Mass Save geothermal rebate**: -$10,000",
          "**Net cost**: $29,200"
        ]
      },
      {
        type: "callout",
        icon: "lightbulb",
        title: "Nearly 50% Savings",
        content: "Incentives reduced this homeowner's cost from $56,000 to $29,200—a savings of $26,800. Plus, SMART payments will provide ongoing income for the next 10 years, and energy savings will exceed $3,000 annually."
      },
      {
        type: "heading",
        content: "How GeoPioneer Helps You Maximize Incentives"
      },
      {
        type: "paragraph",
        content: "Navigating the incentive landscape can be overwhelming. Programs change, eligibility requirements vary, and paperwork can be confusing. That's why GeoPioneer handles incentive management as part of our standard service."
      },
      {
        type: "paragraph",
        content: "We stay current on all available programs, help you understand which incentives you qualify for, and assist with applications and documentation. Our goal is to ensure you receive every dollar available—because those savings make the difference between a good investment and a great one."
      },
      {
        type: "paragraph",
        content: "Ready to see how much you can save? Contact us for a free consultation and personalized incentive analysis. We'll show you exactly what's available for your specific situation and help you plan the most cost-effective path to clean, efficient home energy."
      }
    ]
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

  const renderSection = (section, index) => {
    switch (section.type) {
      case 'intro':
        return (
          <p key={index} className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {section.content}
          </p>
        )
      case 'heading':
        return (
          <h2 key={index} className="text-2xl lg:text-3xl font-bold mt-12 mb-6 text-gray-800">
            {section.content}
          </h2>
        )
      case 'subheading':
        return (
          <h3 key={index} className="text-xl lg:text-2xl font-semibold mt-8 mb-4 text-gray-800">
            {section.content}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className="text-gray-600 my-4 leading-relaxed text-lg">
            {section.content}
          </p>
        )
      case 'image':
        return (
          <figure key={index} className="my-8">
            <img 
              src={section.src} 
              alt={section.alt}
              className="w-full rounded-xl shadow-lg"
            />
            {section.caption && (
              <figcaption className="text-center text-gray-500 mt-3 text-sm italic">
                {section.caption}
              </figcaption>
            )}
          </figure>
        )
      case 'list':
        return (
          <ul key={index} className="my-6 space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start text-gray-600 text-lg">
                <span className="text-green-500 mr-3 mt-1">•</span>
                <span dangerouslySetInnerHTML={{ 
                  __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>') 
                }} />
              </li>
            ))}
          </ul>
        )
      case 'callout':
        const icons = {
          check: <CheckCircle className="h-6 w-6 text-green-500" />,
          alert: <AlertCircle className="h-6 w-6 text-amber-500" />,
          lightbulb: <Lightbulb className="h-6 w-6 text-blue-500" />
        }
        const bgColors = {
          check: 'bg-green-50 border-green-200',
          alert: 'bg-amber-50 border-amber-200',
          lightbulb: 'bg-blue-50 border-blue-200'
        }
        return (
          <div key={index} className={`my-8 p-6 rounded-xl border-2 ${bgColors[section.icon]}`}>
            <div className="flex items-center gap-3 mb-3">
              {icons[section.icon]}
              <h4 className="font-bold text-gray-800 text-lg">{section.title}</h4>
            </div>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img 
            src={post.heroImage} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <Badge className="mb-4 bg-blue-500/20 text-blue-200 border-blue-400/30">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-300">
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
      <article className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {post.sections.map((section, index) => renderSection(section, index))}

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h4 className="text-sm font-semibold text-gray-500 mb-4">TOPICS</h4>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-700 px-4 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DK</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{post.author}</h4>
                  <p className="text-gray-600">Founder & Geothermal Specialist at GeoPioneer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Transform Your Home with Geothermal?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Get a free assessment and discover how much you can save with Massachusetts' most efficient heating and cooling solution
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/calculator">
              <Button 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Calculate Your Savings
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
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
