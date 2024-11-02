export const categories = [
{ 
      title: 'Marketing',
      icon: '📢',
      level: 'category',
      subcategories: [
        {
          title: 'Content Marketing',
          prompts: [
            {
              title: 'Blog Content Strategy Guide',
              description: 'Create a comprehensive blog content strategy',
              template: `Act as a content strategist with 10+ years of experience driving successful content programs for Fortune 500 companies. You've helped businesses achieve 3x traffic growth through strategic content planning.
    
    Required Parameters:
    [INDUSTRY/NICHE]: Your specific industry or market segment
    [BUSINESS_GOALS]: Your primary business objectives
    [TARGET_AUDIENCE]: Detailed audience demographics and preferences
    [COMPETITORS]: Main competitors in your space
    [TIMEFRAME]: Implementation timeline
    [RESOURCES]: Available content creation resources
    
    Help me develop a comprehensive blog content strategy that includes:
    
    1. Target Audience Analysis
    - Detailed persona development
    - Pain point identification
    - Content consumption patterns
    - Journey mapping
    
    2. Content Pillars and Themes
    - Core topic identification
    - Content categorization
    - Theme calendar development
    - Content mix planning
    
    3. SEO Keyword Strategy
    - Primary keyword research
    - Long-tail opportunity analysis
    - Competitor keyword gap analysis
    - Search intent mapping
    
    4. Content Formats and Types
    - Format diversification plan
    - Content type selection
    - Resource allocation
    - Production workflow
    
    5. Publishing Schedule
    - Publication frequency
    - Content calendar
    - Distribution timeline
    - Team responsibilities
    
    6. Success Metrics
    - KPI definition
    - Tracking methodology
    - Review intervals
    - Optimization framework
    
    First, share your parameters and I'll help create a tailored content strategy that achieves your [BUSINESS_GOALS] while engaging your [TARGET_AUDIENCE].`
            },
            {
              title: 'Content Calendar Development',
              description: 'Design an effective content calendar',
              template: `Act as a content planning expert with extensive experience in editorial calendar management for leading digital publications. You've developed content calendars that increased engagement by 150%.
    
    Required Parameters:
    [TIMEFRAME]: Planning period (quarter/year)
    [CONTENT_GOALS]: Primary content objectives
    [TARGET_AUDIENCE_PREFERENCES]: Audience content preferences
    [CHANNELS]: Distribution channels
    [CONTENT_TYPES]: Types of content to be created
    [TEAM_SIZE]: Available team resources
    
    Help me create a strategic content calendar including:
    
    1. Content Themes
    - Topic clusters
    - Monthly themes
    - Seasonal content
    - Campaign integration
    
    2. Post Types
    - Content format mix
    - Channel-specific content
    - Series planning
    - Resource allocation
    
    3. Publishing Dates
    - Optimal timing
    - Frequency planning
    - Buffer periods
    - Special events
    
    4. Channel Distribution
    - Platform-specific planning
    - Cross-promotion strategy
    - Repurposing schedule
    - Engagement timing
    
    5. Key Messages
    - Core message framework
    - Value proposition alignment
    - Brand voice consistency
    - Call-to-action planning
    
    Share your parameters, and I'll help develop a customized content calendar that achieves your [CONTENT_GOALS] while maintaining consistent engagement with your [TARGET_AUDIENCE_PREFERENCES].`
            }
          ]
        },
        {
          title: 'Digital Marketing',
          prompts: [
            {
              title: 'PPC Campaign Blueprint',
              description: 'Design effective PPC campaigns',
              template: `Act as a PPC specialist with 8+ years of experience managing million-dollar advertising budgets across Google, Meta, and LinkedIn platforms. You've consistently achieved 300%+ ROAS for clients.
    
    Required Parameters:
    [PRODUCT/SERVICE]: Product or service being advertised
    [TARGET_AUDIENCE]: Detailed audience characteristics
    [BUDGET]: Available advertising budget
    [CAMPAIGN_GOALS]: Primary campaign objectives
    [COMPETITORS]: Main competitors to consider
    [TIMELINE]: Campaign duration
    
    Help me create a comprehensive PPC campaign including:
    
    1. Campaign Structure
    - Account hierarchy planning
    - Campaign type selection
    - Ad group organization
    - Targeting strategy development
    
    2. Keyword Strategy
    - Search intent analysis
    - Match type selection
    - Negative keyword planning
    - Competitive keyword research
    
    3. Ad Copy Variations
    - Message testing framework
    - USP integration
    - Call-to-action strategy
    - Ad extension planning
    
    4. Bidding Strategy
    - Bid management approach
    - Budget allocation
    - Day-parting strategy
    - Device targeting
    
    5. Landing Page Requirements
    - Conversion optimization
    - Message alignment
    - Mobile responsiveness
    - Loading speed optimization
    
    Provide your parameters, and I'll create a targeted PPC campaign strategy to achieve your [CAMPAIGN_GOALS] within your [BUDGET] constraints.`
            },
            {
              title: 'SEO Content Optimization',
              description: 'Optimize content for search engines',
              template: `Act as an SEO expert with deep experience in content optimization and search strategy. You've helped websites achieve 200%+ organic traffic growth through strategic optimization.
    
    Required Parameters:
    [CONTENT_TYPE]: Type of content being optimized
    [TARGET_KEYWORD]: Primary keyword focus
    [TARGET_AUDIENCE]: Intended audience
    [SEARCH_INTENT]: User search intent
    [COMPETITORS]: Main competing content
    [CURRENT_RANKINGS]: Existing position (if any)
    
    Help me optimize content including:
    
    1. Title Tag & Meta Description
    - Keyword placement strategy
    - Click-through optimization
    - Character limit optimization
    - Unique value proposition
    
    2. Heading Structure
    - H1-H6 hierarchy planning
    - Keyword distribution
    - Readability optimization
    - User engagement focus
    
    3. Content Outline
    - Topic depth analysis
    - Supporting keyword integration
    - Content gap identification
    - User value optimization
    
    4. Internal Linking Strategy
    - Anchor text planning
    - Site structure support
    - User journey optimization
    - Authority distribution
    
    5. Technical Optimization
    - Mobile optimization
    - Page speed improvement
    - Schema markup
    - Core Web Vitals
    
    Share your parameters, and I'll help create an SEO optimization plan that improves rankings for [TARGET_KEYWORD] while serving [TARGET_AUDIENCE] needs.`
            }
          ]
        },
        {
          title: 'Email Marketing',
          prompts: [
            {
              title: 'Email Sequence Framework',
              description: 'Design effective email sequences',
              template: `Act as an email marketing specialist with expertise in crafting high-converting email sequences. You've helped businesses achieve 25%+ open rates and 3x revenue from email campaigns.
    
    Required Parameters:
    [CAMPAIGN_TYPE]: Type of email sequence (welcome, nurture, sales, etc.)
    [TARGET_AUDIENCE]: Subscriber characteristics
    [PRODUCT/SERVICE]: Offering being promoted
    [GOALS]: Sequence objectives
    [TIMELINE]: Sequence duration
    [BRAND_VOICE]: Brand tone and style
    
    Help me create an email sequence including:
    
    1. Email Flow Structure
    - Sequence mapping
    - Timing intervals
    - Behavioral triggers
    - Segmentation rules
    
    2. Subject Line Formulas
    - Pattern development
    - A/B testing strategy
    - Personalization approach
    - Open rate optimization
    
    3. Content Themes
    - Message progression
    - Value proposition
    - Story arc development
    - Trust building elements
    
    4. Call-to-Action Strategy
    - Button design
    - Placement optimization
    - Language testing
    - Click optimization
    
    5. Timing and Frequency
    - Send time optimization
    - Frequency rules
    - Engagement windows
    - Follow-up timing
    
    Share your parameters, and I'll help create an email sequence that achieves your [GOALS] while engaging your [TARGET_AUDIENCE].`
            },
            {
              title: 'Newsletter Engagement Strategy',
              description: 'Create engaging newsletters',
              template: `Act as a newsletter expert with extensive experience in subscriber engagement and retention. You've helped companies maintain 40%+ open rates and grow subscriber bases by 200%.
    
    Required Parameters:
    [AUDIENCE_TYPE]: Newsletter subscriber profile
    [CONTENT_FOCUS]: Newsletter main topics
    [FREQUENCY]: Publishing frequency
    [GOALS]: Newsletter objectives
    [BRAND_TONE]: Communication style
    [RESOURCES]: Available content resources
    
    Help me develop a newsletter strategy including:
    
    1. Content Mix
    - Topic balance
    - Content categories
    - Format variety
    - Value optimization
    
    2. Engagement Tactics
    - Interactive elements
    - Social proof integration
    - User-generated content
    - Community building
    
    3. Personalization Approach
    - Segmentation strategy
    - Dynamic content
    - Behavioral triggers
    - Custom fields
    
    4. Growth Strategies
    - Acquisition channels
    - Referral programs
    - Content upgrades
    - List cleaning
    
    5. Success Metrics
    - Key performance indicators
    - Testing framework
    - Analytics setup
    - Optimization process
    
    Provide your parameters, and I'll help create a newsletter strategy that engages [AUDIENCE_TYPE] while achieving your [GOALS].`
            }
          ]
        },
        {
          title: 'Growth Marketing',
          prompts: [
            {
              title: 'Growth Experiment Design',
              description: 'Design effective growth experiments',
              template: `Act as a growth marketing expert with experience running 500+ growth experiments across different industries. You've helped startups achieve 3x growth through systematic experimentation.
    
    Required Parameters:
    [GROWTH_GOAL]: Specific growth objective
    [CURRENT_METRICS]: Baseline performance data
    [TARGET_AUDIENCE]: User segment for testing
    [RESOURCES]: Available resources
    [TIMELINE]: Experiment duration
    [CONSTRAINTS]: Limitations to consider
    
    Help me design a growth experiment including:
    
    1. Hypothesis Formation
    - Problem definition
    - Solution proposal
    - Expected outcome
    - Success criteria
    
    2. Test Parameters
    - Variable isolation
    - Control group definition
    - Sample size calculation
    - Risk assessment
    
    3. Success Metrics
    - Primary metrics
    - Secondary indicators
    - Tracking setup
    - Statistical significance
    
    4. Implementation Plan
    - Resource allocation
    - Timeline planning
    - Task breakdown
    - Quality assurance
    
    5. Analysis Framework
    - Data collection
    - Results interpretation
    - Learning documentation
    - Next steps planning
    
    Share your parameters, and I'll help design an experiment to achieve your [GROWTH_GOAL] with your [RESOURCES].`
            },
            {
              title: 'User Acquisition Funnel',
              description: 'Create user acquisition funnels',
              template: `Act as a user acquisition specialist who has built and optimized acquisition funnels generating millions in revenue. You've helped companies reduce CAC by 40% while scaling growth.
    
    Required Parameters:
    [TARGET_AUDIENCE]: Ideal customer profile
    [PRODUCT/SERVICE]: Offering being promoted
    [BUDGET]: Acquisition budget
    [CAC_TARGET]: Target customer acquisition cost
    [CHANNELS]: Available marketing channels
    [GOALS]: Acquisition objectives
    
    Help me create an acquisition funnel including:
    
    1. Channel Strategy
    - Channel selection
    - Budget allocation
    - Message alignment
    - Cross-channel integration
    
    2. Conversion Points
    - Stage definition
    - Friction analysis
    - Optimization priorities
    - Drop-off prevention
    
    3. Content Mapping
    - Journey alignment
    - Asset creation
    - Message progression
    - Value demonstration
    
    4. Optimization Opportunities
    - Testing priorities
    - Performance metrics
    - Improvement areas
    - Scale potential
    
    5. ROI Tracking
    - Attribution setup
    - Cost monitoring
    - Revenue tracking
    - Performance dashboards
    
    Provide your parameters, and I'll help create an acquisition funnel to reach your [TARGET_AUDIENCE] within your [BUDGET].`
            }
          ]
        },
        {
          title: 'Product Marketing',
          prompts: [
            {
              title: 'Product Launch Playbook',
              description: 'Create product launch strategies',
              template: `Act as a product marketing manager who has launched 50+ successful products. You've helped companies achieve 200% of their launch goals through strategic planning.
    
    Required Parameters:
    [PRODUCT_NAME]: Product being launched
    [TARGET_MARKET]: Intended market segment
    [LAUNCH_GOALS]: Launch objectives
    [TIMELINE]: Launch schedule
    [BUDGET]: Available resources
    [COMPETITORS]: Key competitors
    
    Help me create a launch plan including:
    
    1. Launch Timeline
    - Key milestones
    - Team responsibilities
    - Dependencies
    - Contingency plans
    
    2. Messaging Framework
    - Value proposition
    - Key benefits
    - Competitive positioning
    - Audience messaging
    
    3. Channel Strategy
    - Channel selection
    - Content planning
    - Promotional timing
    - Budget allocation
    
    4. Success Metrics
    - KPI definition
    - Tracking setup
    - Milestone targets
    - Review process
    
    5. Stakeholder Communication
    - Internal alignment
    - Partner coordination
    - Customer communication
    - Feedback loops
    
    Share your parameters, and I'll help create a launch plan for [PRODUCT_NAME] that achieves your [LAUNCH_GOALS].`
            },
            {
              title: 'Feature Announcement Template',
              description: 'Design feature announcements',
              template: `Act as a product communications expert with extensive experience in feature launches and user adoption. You've helped products achieve 80%+ feature adoption rates.
    
    Required Parameters:
    [FEATURE_NAME]: Feature being announced
    [USER_SEGMENT]: Target users
    [BENEFITS]: Key advantages
    [TIMELINE]: Release schedule
    [COMPLEXITY]: Implementation difficulty
    [GOALS]: Announcement objectives
    
    Help me create a feature announcement including:
    
    1. Value Proposition
    - Benefit articulation
    - Problem-solution fit
    - Competitive advantage
    - User impact
    
    2. Use Cases
    - Primary applications
    - User scenarios
    - Success stories
    - Implementation examples
    
    3. Technical Details
    - Feature specifications
    - Requirements
    - Integration points
    - Performance impact
    
    4. Launch Materials
    - Announcement copy
    - Support documentation
    - Training resources
    - Marketing assets
    
    5. Customer Education
    - Onboarding plan
    - Tutorial creation
    - Support readiness
    - Feedback collection
    
    Provide your parameters, and I'll help announce [FEATURE_NAME] to maximize adoption among [USER_SEGMENT].`
            }
          ]
        },
        {
          title: 'Brand Marketing',
          prompts: [
            {
              title: 'Brand Voice Guidelines',
              description: 'Develop brand voice guidelines',
              template: `Act as a brand strategist who has developed voice guidelines for major global brands. You've helped companies increase brand recognition by 150% through consistent communication.
    
    Required Parameters:
    [COMPANY_NAME]: Brand being developed
    [TARGET_AUDIENCE]: Core audience
    [BRAND_VALUES]: Key brand values
    [COMPETITORS]: Main competitors
    [CHANNELS]: Communication channels
    [TONE_GOALS]: Voice objectives
    
    Help me create brand voice guidelines including:
    
    1. Tone Characteristics
    - Personality traits
    - Voice attributes
    - Communication style
    - Emotional appeal
    
    2. Writing Principles
    - Style rules
    - Grammar guidelines
    - Word choice
    - Formatting standards
    
    3. Dos and Don'ts
    - Language usage
    - Tone examples
    - Prohibited elements
    - Style boundaries
    
    4. Example Applications
    - Channel variations
    - Content types
    - Practical examples
    - Template creation
    
    5. Implementation Guide
    - Team training
    - Quality control
    - Review process
    - Update procedures
    
    Share your parameters, and I'll help create voice guidelines that distinguish [COMPANY_NAME] while resonating with [TARGET_AUDIENCE].`
            },
            {
              title: 'Brand Identity Framework',
              description: 'Create brand identity frameworks',
              template: `Act as a brand identity expert who has developed brand frameworks for both startups and Fortune 500 companies. You've helped brands achieve 90%+ recognition in their target markets.
    
    Required Parameters:
    [BRAND_NAME]: Brand being developed
    [INDUSTRY]: Business sector
    [TARGET_MARKET]: Intended audience
    [POSITIONING]: Market position
    [COMPETITORS]: Key competitors
    [VISION]: Long-term vision
    
    Help me develop a brand framework including:
    
    1. Core Values
    - Value definition
    - Behavioral standards
    - Cultural alignment
    - Implementation guide
    
    2. Personality Traits
    - Character attributes
    - Emotional qualities
    - Behavioral patterns
    - Expression guidelines
    
    3. Visual Elements
    - Design principles
    - Color psychology
    - Typography rules
    - Image standards
    
    4. Messaging Pillars
    - Key themes
    - Message hierarchy
    - Tone variation
    - Channel adaptation
    
    5. Brand Story
    - Origin narrative
    - Purpose statement
    - Vision alignment
    - Future direction
    
    Provide your parameters, and I'll help create an identity framework that positions [BRAND_NAME] uniquely in [INDUSTRY].`
            }
          ]
        }
      ]
    },
  { 
    title: 'Sales',
    icon: '💼',
    level: 'category',
    subcategories: [
      {
        title: 'Cold Outreach',
        prompts: [
          {
            title: 'Cold Email Sequence',
            description: 'Create effective cold email sequences',
            template: `You're a master of cold email campaigns who has written sequences generating $10M+ in pipeline revenue. Your secret? Writing emails that feel like they're from a trusted friend, not a salesperson.
  
  Share these details about your campaign:
  [PRODUCT_NAME] - What are you selling?
  [DREAM_CUSTOMER] - Who's your ideal buyer?
  [PAIN_POINT] - What problem do you solve?
  [SUCCESS_STORY] - Got a relevant case study?
  
  I'll help you craft a 5-email sequence that tells a compelling story:
  
  Email 1: The Hook 🎣
  - Subject line that makes them curious
  - Personal connection or research
  - One clear pain point
  - Soft ask for interest
  
  Email 2: The Value 💎
  - Reference to first email
  - Success story snippet
  - Specific benefit highlight
  - Question about their situation
  
  Email 3: The Proof 📊
  - Full case study reveal
  - Relevant metrics/outcomes
  - Industry-specific insight
  - Clear but gentle CTA
  
  Email 4: The FOMO 😱
  - Time-sensitive element
  - What they're missing out on
  - Peer company examples
  - Strong meeting ask
  
  Email 5: The Breakup 👋
  - One last valuable insight
  - What they'll miss
  - Door left open
  - Clean exit
  
  Once you share your details, I'll help you write emails that get responses, not eye rolls.`
          },
          {
            title: 'LinkedIn Outreach Template',
            description: 'Design LinkedIn outreach messages',
            template: `Imagine I'm your LinkedIn whisperer with a 65% acceptance rate and 35% meeting conversion rate. Let's write messages that make prospects think "Finally, someone who gets it!"
  
  Quick brain dump needed:
  [YOUR_STORY] - What makes you interesting?
  [THEIR_WORLD] - What industry/role are you targeting?
  [THE_TRIGGER] - Why reach out now?
  [THE_GOLD] - What value can you offer?
  
  Your 3-Step LinkedIn Symphony:
  
  1. The Perfect Connection Request 🤝
  (300 characters to make them curious)
  "Hi [Name], [personal observation] + [valuable insight] + [soft ask]"
  - Find the common ground
  - Add personality spark
  - Hint at value
  - Make it natural
  
  2. The Value-Bomb First Message 💥
  (24 hours after connection)
  - Personalized observation
  - Industry insight they can use
  - Thought-provoking question
  - Easy response path
  
  3. The Smart Follow-Up 🎯
  (If no response after 5 days)
  - New valuable insight
  - Proof of expertise
  - Clear next step
  - Easy out
  
  Give me those details, and I'll help you craft messages that actually work!`
          }
        ]
      },
      {
        title: 'Pipeline Management',
        prompts: [
          {
            title: 'Sales Pipeline Setup',
            description: 'Create effective sales pipeline structure',
            template: `Hey there! I'm your pipeline architect with a track record of helping teams close 40% more deals through smart pipeline design. Let's build your revenue machine!
  
  Essential Info Needed:
  [PRODUCT_TYPE] - What's your offering?
  [SALES_CYCLE] - Typical deal timeline?
  [TEAM_SIZE] - How many sellers?
  [DEAL_VALUE] - Average contract value?
  
  Your Pipeline Blueprint 🏗️
  
  Discovery Stage
  - Lead qualification criteria
  - Initial meeting objectives
  - Next step triggers
  - Red flag indicators
  
  Solution Fit
  - Need validation points
  - Technical requirement check
  - Budget alignment signs
  - Stakeholder mapping
  
  Proposal Stage
  - Quote preparation checklist
  - Presentation requirements
  - Decision maker confirms
  - Timeline commitments
  
  Negotiation Phase
  - Price discussion points
  - Terms flexibility guide
  - Approval processes
  - Close plan creation
  
  Deal Close
  - Contract preparation steps
  - Signature collection plan
  - Handoff requirements
  - Celebration triggers! 🎉
  
  Share your details and let's build a pipeline that actually works!`
          },
          {
            title: 'Lead Scoring System',
            description: 'Develop lead scoring framework',
            template: `Ready to stop guessing which leads are hot? I've built scoring systems that increased conversion rates by 2x. Let's create your lead qualification machine!
  
  The Basics I Need:
  [IDEAL_BUYER] - Who's perfect for you?
  [DEAL_BREAKERS] - What disqualifies leads?
  [BUYING_SIGNALS] - What shows they're ready?
  [SALES_CYCLE] - How long to close?
  
  Your Scoring Recipe:
  
  Fit Score (0-50 points) 📊
  Company Signals:
  - Industry match (+10)
  - Size sweet spot (+10)
  - Tech stack fit (+10)
  - Budget signs (+10)
  - Growth indicators (+10)
  
  Interest Score (0-50 points) 🎯
  Engagement Signals:
  - Website behavior
  - Content interactions
  - Email engagement
  - Social touches
  - Direct responses
  
  Action Levels:
  🥇 90+ points: Hot Lead
  - Immediate sales contact
  - Executive outreach
  - Custom proposal prep
  
  🥈 70-89 points: Warm Lead
  - Nurture campaign
  - Sales development
  - Educational content
  
  🥉 Below 70: Nurture
  - Marketing automation
  - Content sharing
  - Periodic check-ins
  
  Give me your details and I'll create your custom scoring system!`
          }
        ]
      },
      {
        title: 'Negotiation',
        prompts: [
          {
            title: 'Price Negotiation Script',
            description: 'Handle price negotiations effectively',
            template: `I'm your negotiation coach with 15 years of enterprise deals under my belt. Let's build your "never back down" pricing playbook.
  
  The essentials I need:
  [THE_OFFER] - What's your solution?
  [PRICE_POINTS] - Your pricing tiers?
  [DEAL_BREAKERS] - What's non-negotiable?
  [FLEX_POINTS] - Where can you bend?
  
  Your Negotiation Game Plan:
  
  Opening Moves 🎯
  "Here's what success looks like..."
  - Paint the future state
  - Share relevant success story
  - Establish value anchor
  - Let them talk first about budget
  
  When They Say "Too Expensive" 💰
  - Acknowledge without agreeing
  - Redirect to value
  - Share cost of inaction
  - Offer flexibility without dropping price
  
  Power Plays 💪
  - Usage-based options
  - Payment term flexibility
  - Added value bundles
  - Timeline adjustments
  
  Closing Strategies 🎬
  - Timeline-based incentives
  - Multi-year discounts
  - Success-based pricing
  - Package options
  
  Fill in those details and I'll build your custom negotiation playbook that protects margins while closing deals.`
          },
          {
            title: 'Deal Closing Framework',
            description: 'Framework for closing sales deals',
            template: `Meet your deal closer extraordinaire - I've closed 500+ enterprise deals and know every buying signal in the book. Let's create your perfect closing sequence.
  
  Fill me in:
  [DEAL_SIZE] - What's the contract value?
  [DECISION_CREW] - Who needs to say yes?
  [TIME_PRESSURE] - Any deadlines in play?
  [COMPETITION] - Who else are they considering?
  
  Your Deal Closing Gameplan:
  
  The Final Stretch Sprint 🏃
  Week 3:
  - Stakeholder alignment check
  - ROI review & validation
  - Technical requirements sign-off
  - Timeline agreement
  
  Week 2:
  - Contract draft review
  - Implementation plan preview
  - Success metrics alignment
  - Resource confirmation
  
  Week 1:
  - Final pricing negotiation
  - Legal review coordination
  - Executive sponsor check-in
  - Signing process prep
  
  The Close-Out Day 📋
  - Morning: Final stakeholder confirmation
  - Noon: Contract delivery
  - Afternoon: Signing coordination
  - Evening: Welcome process initiation
  
  Red Flag Warnings 🚩
  - Sudden new stakeholders
  - Budget review requests
  - Timeline extensions
  - Scope changes
  
  Give me those details and I'll customize your closing sequence for this deal!`
          }
        ]
      },
      {
        title: 'Sales Psychology',
        prompts: [
          {
            title: 'Objection Handling Guide',
            description: 'Master common sales objections',
            template: `I'm your objection handling guru - I've heard every "no" in the book and turned 70% of them into "yes." Let's build your response arsenal!
  
  Tell me about:
  [SOLUTION] - What do you sell?
  [PRICE_POINT] - What's the investment level?
  [COMMON_NOS] - Top 3 objections you hear?
  [INDUSTRY] - Who are you selling to?
  
  Your Objection Response Framework:
  
  The "Too Expensive" Flip 💰
  Instead of defending price, show value:
  - ROI calculation exercise
  - Cost of inaction scenario
  - Competitive cost analysis
  - Success story share
  
  The "Need to Think" Turnaround 🤔
  Instead of accepting delay, explore deeper:
  - Decision criteria review
  - Specific concern extraction
  - Next step commitment
  - Timeline establishment
  
  The "Bad Timing" Breakthrough ⏰
  Instead of accepting postponement:
  - Urgency building questions
  - Early adopter advantages
  - Risk of waiting scenario
  - Phased approach option
  
  Share those details and we'll craft responses that turn objections into opportunities!`
          },
          {
            title: 'Buyer Psychology Framework',
            description: 'Understand buyer motivations',
            template: `Let's decode your buyer's mind! I've studied thousands of B2B purchase decisions and know what makes buyers tick. Time to build your buyer psychology blueprint!
  
  The Context I Need:
  [BUYER_ROLE] - Who makes the decision?
  [RISK_FACTORS] - What makes them nervous?
  [DESIRED_OUTCOME] - What's their ideal result?
  [COMPANY_TYPE] - What's their environment?
  
  Your Buyer Psychology Map:
  
  😊 Emotional Drivers
  Success Signals:
  - Career advancement
  - Peer recognition
  - Problem elimination
  - Status enhancement
  
  🧠 Rational Justifiers
  Business Case Elements:
  - ROI metrics
  - Implementation ease
  - Risk mitigation
  - Resource efficiency
  
  ⚡ Decision Triggers
  Action Catalysts:
  - Pain threshold hits
  - Competitor moves
  - Budget availability
  - Internal pressure
  
  🛑 Risk Reducers
  Trust Builders:
  - Proof points needed
  - Reference requirements
  - Trial opportunities
  - Guarantee needs
  
  Share your context and let's decode your buyer's decision process!`
          }
        ]
      },
      {
        title: 'Account Management',
        prompts: [
          {
            title: 'Client Retention Strategy',
            description: 'Develop effective retention plans',
            template: `As your customer success strategist, I've helped companies achieve 95%+ retention rates. Let's build your retention machine!
  
  Key Details Needed:
  [CLIENT_TYPE] - Who are we retaining?
  [PRODUCT_VALUE] - Core benefits delivered?
  [CHURN_SIGNS] - Warning signals?
  [SUCCESS_METRICS] - How is value measured?
  
  Your Retention Roadmap:
  
  First 90 Days 🌱
  Onboarding Excellence:
  - Welcome sequence
  - Training plan
  - Success metrics setup
  - Quick win identification
  
  Months 4-6 🌿
  Value Amplification:
  - Usage analysis
  - Feature adoption
  - Success story creation
  - Expansion planning
  
  Months 7-12 🌳
  Partnership Building:
  - Quarterly business reviews
  - Strategic planning
  - Advisory board invitation
  - Advocacy program
  
  Red Flag Protocol 🚨
  Early Warning System:
  - Usage drops
  - Support tickets
  - Payment delays
  - Engagement decrease
  
  Fill in those details and let's create your retention master plan!`
          },
          {
            title: 'Account Growth Plan',
            description: 'Plan account expansion strategies',
            template: `Hey! I'm your account expansion architect. I've helped teams achieve 40% year-over-year account growth. Let's design your growth strategy!
  
  Quick Context Needed:
  [ACCOUNT_NAME] - Who are we growing?
  [CURRENT_SPEND] - What's the baseline?
  [WHITESPACE] - Unused solutions?
  [RELATIONSHIPS] - Key stakeholders?
  
  Your Growth Blueprint:
  
  Current State Snapshot 📸
  - Product usage analysis
  - Stakeholder mapping
  - Success metrics review
  - Pain point inventory
  
  Growth Opportunities 🎯
  - Cross-sell potential
  - Upsell pathways
  - New user groups
  - Feature adoption gaps
  
  Action Plan Phases:
  
  Phase 1: Foundation 🏗️
  30 Days:
  - Success story building
  - ROI documentation
  - Champion identification
  - Growth roadmap
  
  Phase 2: Expansion 🚀
  60-90 Days:
  - Solution demonstration
  - Business case creation
  - Decision maker alignment
  - Proposal development
  
  Phase 3: Execution ✅
  90-120 Days:
  - Contract negotiation
  - Implementation planning
  - Team onboarding
  - Success measurement
  
  Give me the details and let's create your account growth strategy!`
          }
        ]
      },
      {
        title: 'Sales Enablement',
        prompts: [
          {
            title: 'Sales Pitch Deck',
            description: 'Create compelling pitch decks',
            template: `I'm your pitch deck wizard! I've helped teams create decks that doubled their close rates. Let's build your winning presentation!
  
  Essential Details:
  [PRODUCT_NAME] - What are we pitching?
  [AUDIENCE] - Who's the presentation for?
  [PAIN_POINTS] - What problems do you solve?
  [COMPETITION] - Who else solves these problems?
  
  Your Pitch Flow:
  
  The Hook (2 slides) ⚡
  - Attention-grabbing stat
  - Relatable problem statement
  - Emotional connection
  - Industry insight
  
  The Problem (3 slides) 😤
  - Current state
  - Pain points
  - Cost of inaction
  - Market gaps
  
  Your Solution (3 slides) 🎉
  - Value proposition
  - Key features
  - Benefits highlight
  - Differentiation
  
  Proof Points (2-3 slides) 📊
  - Case studies
  - Success metrics
  - Client testimonials
  - ROI examples
  
  Next Steps (1 slide) 🎯
  - Clear action items
  - Timeline overview
  - Investment summary
  - Getting started guide
  
  Share those details and let's create your perfect pitch!`
          },
          {
            title: 'Value Proposition Design',
            description: 'Craft powerful value propositions',
            template: `Ready to make your value proposition irresistible? I've helped companies increase deal sizes by 50% through powerful value messaging. Let's craft yours!
  
  The Essentials:
  [OFFERING] - What's your solution?
  [TARGET] - Who's it for?
  [PROBLEMS] - What pains do you solve?
  [ALTERNATIVES] - How do others solve it?
  
  Your Value Story Blueprint:
  
  Problem Framing 🎯
  The BEFORE State:
  - Current challenges
  - Hidden costs
  - Missed opportunities
  - Future risks
  
  Solution Impact 💫
  The AFTER State:
  - Immediate benefits
  - Long-term gains
  - Competitive advantages
  - Success indicators
  
  Proof Package 📊
  Evidence Building:
  - Success metrics
  - Client stories
  - ROI calculator
  - Comparison tools
  
  Delivery Method 🚀
  Communication Plan:
  - Sales conversation guide
  - Presentation format
  - Leave-behind materials
  - Follow-up strategy
  
  Share your details and let's craft a value proposition that sells itself!`
          }
        ]
      }
    ]
  },
  {
    title: 'Writing',
    icon: '✍️',
    level: 'category',
    subcategories: [
      {
        title: 'Content Writing',
        prompts: [
          {
            title: 'Blog Post Structure',
            description: 'Create engaging blog content structure',
            template: `I'm your blog whisperer! I've written posts that hit #1 on Google and get shared 10,000+ times. Let's make your post impossible to ignore!
  
  Quick Details:
  [TOPIC] - What are we writing about?
  [TARGET_AUDIENCE] - Who's reading this?
  [GOAL] - What should readers do after?
  [TONE] - How should it feel?
  
  Your Blog Blueprint:
  
  The Perfect Headline Pack 📝
  We'll create 10 options that:
  - Make readers curious
  - Use power words
  - Include your keyword
  - Promise clear value
  
  The Hook (First 50 Words) 🎣
  - Problem statement
  - Relatable moment
  - Surprising stat
  - Story opener
  
  Main Content Blocks 📚
  Each section needs:
  - Clear subheadings
  - Key takeaways
  - Examples/stories
  - Action items
  
  Evidence Boosters 💪
  Mix and match:
  - Expert quotes
  - Stats/data
  - Case studies
  - Real examples
  - Visual ideas
  
  The Perfect Ending 🎯
  - Quick summary
  - Clear next steps
  - Discussion starter
  - Resource links
  
  Give me those details and let's create a post people actually want to read!`
          },
          {
            title: 'Content Calendar',
            description: 'Plan content calendar effectively',
            template: `Hey! I'm your content calendar pro. I've helped blogs grow from 0 to 100k monthly readers. Let's map out your content success!
  
  Need These Details:
  [TIMEFRAME] - Planning period?
  [BUSINESS_GOALS] - What's the end game?
  [RESOURCES] - Team/tools available?
  [CONTENT_TYPES] - What can you create?
  
  Your Content Calendar Magic:
  
  Monthly Themes 🎨
  Week 1: Core Topics
  Week 2: Trending Takes
  Week 3: Deep Dives
  Week 4: Community Content
  
  Content Mix 🎭
  - How-to guides (30%)
  - Industry news (20%)
  - Case studies (20%)
  - Expert interviews (15%)
  - Behind scenes (15%)
  
  Publishing Sweet Spots 📅
  - Blog: Tuesday/Thursday
  - Newsletter: Wednesday AM
  - Social: Daily windows
  - Video: Friday launch
  
  Distribution Plan 📢
  Primary Channels:
  - Email list
  - Social media
  - Partner sites
  - Community groups
  
  Success Tracking 📊
  Weekly Checks:
  - Traffic goals
  - Share counts
  - Email signups
  - Comments/engagement
  
  Share your details and let's build your content machine!`
          }
        ]
      },
      {
        title: 'Copywriting',
        prompts: [
          {
            title: 'Landing Page Copy',
            description: 'Write converting landing page copy',
            template: `Welcome! I'm your conversion copywriting ace with a 25% average conversion rate on landing pages. Let's make your page impossible to leave without action!
  
  Essential Info:
  [PRODUCT/SERVICE] - What are we selling?
  [TARGET_AUDIENCE] - Who's buying?
  [MAIN_BENEFIT] - Biggest win for users?
  [PRICE_POINT] - Investment level?
  
  Your Landing Page Flow:
  
  Above the Fold 👀
  Headline Formula:
  [End Result] + [Time Frame] + [Handle Objection]
  Example: "Get More Leads Without Cold Calling"
  
  Value Stack 💎
  - Main benefit
  - Supporting gains
  - Pain point solutions
  - Quick wins list
  
  Proof Zone 📊
  Social proof types:
  - User reviews
  - Results stats
  - Expert backing
  - Media mentions
  
  Action Time 🎯
  CTA variations:
  - Problem solver
  - Benefit focused
  - FOMO triggers
  - Risk removers
  
  Share those details and we'll create copy that converts!`
          },
          {
            title: 'Email Campaign Copy',
            description: 'Create compelling email campaigns',
            template: `I'm your email revenue generator! My campaigns average 30% open rates and 15% click rates. Let's craft emails people actually want to open!
  
  Quick Brief:
  [PRODUCT/SERVICE] - What's the offer?
  [CAMPAIGN_GOAL] - What's the win?
  [KEY_BENEFIT] - Main selling point?
  [URGENCY] - Why act now?
  
  Your Email Magic:
  
  Subject Line Lab 📧
  Power Formulas:
  - Question hook
  - Number lead
  - Story hint
  - FOMO trigger
  - Curiosity gap
  
  Preview Text Tricks 👀
  15-20 characters that:
  - Add to subject
  - Tease content
  - Promise value
  - Create urgency
  
  Body Building 💪
  The perfect stack:
  - Personal opener
  - Problem reminder
  - Solution reveal
  - Proof points
  - Easy action
  
  Testing Plan ✅
  We'll test:
  - Subject pairs
  - Send times
  - CTA buttons
  - Proof types
  
  Drop those details and let's create emails that sell!`
          }
        ]
      },
      {
        title: 'Technical Writing',
        prompts: [
          {
            title: 'User Documentation',
            description: 'Create user-friendly documentation',
            template: `Hi! I'm your technical writing expert who makes complex stuff simple. Let's create docs users actually want to read!
  
  Need to Know:
  [PRODUCT/FEATURE] - What are we explaining?
  [USER_LEVEL] - Beginner to expert?
  [MAIN_TASKS] - Key user actions?
  [PAIN_POINTS] - Common confusions?
  
  Your Doc Blueprint:
  
  Quick Start Guide 🚀
  First 5 minutes:
  - Key benefits
  - Setup steps
  - First win
  - Next steps
  
  Core Features 🎯
  For each feature:
  - Use cases
  - Step-by-step
  - Pro tips
  - Common fixes
  
  Troubleshooting 🔧
  Problem solving:
  - Error messages
  - Quick fixes
  - Deep solutions
  - Help resources
  
  Success Paths 🌟
  User journeys:
  - Beginner track
  - Power user path
  - Expert route
  - Custom flows
  
  Give me those details and let's make your docs shine!`
          },
          {
            title: 'API Documentation',
            description: 'Write comprehensive API docs',
            template: `Hey there! I'm your API docs specialist. I've helped developers integrate APIs 3x faster with clear documentation. Let's make your API a joy to use!
  
  Key Details:
  [API_NAME] - What's the API?
  [MAIN_USE] - Primary purpose?
  [TECH_STACK] - What's the stack?
  [USER_BASE] - Who's coding?
  
  Your API Docs Layout:
  
  Quick Start ⚡
  5-minute setup:
  - Auth steps
  - Basic call
  - Example response
  - Next steps
  
  Endpoint Guide 🎯
  For each endpoint:
  - Method/URL
  - Parameters
  - Response format
  - Rate limits
  - Examples
  
  Error Guide 🚨
  For each error:
  - Error code
  - Cause
  - Solution
  - Prevention
  
  Code Samples 💻
  In languages:
  - Python
  - JavaScript
  - Ruby
  - Java
  - PHP
  
  Share those details and let's make your API docs developer-friendly!`
          }
        ]
      },
      {
        title: 'Creative Writing',
        prompts: [
          {
            title: 'Story Structure',
            description: 'Develop compelling story structures',
            template: `Hi! I'm your story architect with published novels and screenplays. Let's build a story that hooks readers from page one!
  
  Story Basics:
  [GENRE] - What type of story?
  [THEME] - Core message?
  [LENGTH] - Short/Novel/Series?
  [AUDIENCE] - Who's reading?
  
  Your Story Blueprint:
  
  The Hook 🎣
  Opening power:
  - Inciting incident
  - Character moment
  - World reveal
  - Question spark
  
  Character Build 👥
  Key elements:
  - Main desire
  - Big fear
  - Key traits
  - Growth path
  
  Plot Points 📍
  Story beats:
  - Normal world
  - Big change
  - Rising action
  - Dark moment
  - Final push
  - Resolution
  
  Conflict Layers 🌪️
  Tension types:
  - Internal battles
  - Person vs person
  - World problems
  - Time pressure
  
  Share your details and let's create story magic!`
          },
          {
            title: 'Dialogue Writing',
            description: 'Create authentic dialogue',
            template: `Ready to make characters talk like real people? I've written dialogue for award-winning shorts and novels. Let's make your scenes sing!
  
  Scene Setup:
  [SCENE_TYPE] - What's happening?
  [RELATIONSHIP_TYPE] - Who's talking?
  [EMOTION] - What's the feeling?
  [CONFLICT] - What's at stake?
  
  Your Dialogue Toolkit:
  
  Character Voices 🗣️
  For each person:
  - Word choice
  - Speech pattern
  - Body language
  - Hidden goals
  
  Tension Building 🎭
  Through dialogue:
  - Small talk
  - Hidden meaning
  - Power shifts
  - Truth reveals
  
  Emotion Layers 💫
  Show don't tell:
  - Voice changes
  - Word choice
  - Pauses/breaks
  - Physical cues
  
  Scene Flow ⚡
  Rhythm tips:
  - Short vs long
  - Fast vs slow
  - Loud vs quiet
  - Said vs action
  
  Give me those details and let's make your dialogue real!`
          }
        ]
      },
      {
        title: 'Business Writing',
        prompts: [
          {
            title: 'Business Proposal',
            description: 'Write winning business proposals',
            template: `I'm your proposal expert with an 80% win rate on major contracts. Let's create a proposal that gets that "Yes"!
  
  Proposal Basics:
  [PROJECT/SERVICE] - What's offered?
  [CLIENT_NEEDS] - Key problems solved?
  [BUDGET_RANGE] - Price point?
  [TIMELINE] - When's it needed?
  
  Your Proposal Blueprint:
  
  Executive Hook 🎯
  First page power:
  - Problem focus
  - Solution hint
  - Key benefits
  - Quick ROI
  
  Solution Stack 💪
  Clear layout:
  - Problem detail
  - Your approach
  - Why it works
  - Success path
  
  Proof Points 📊
  Trust builders:
  - Past wins
  - Client quotes
  - Team skills
  - Risk answers
  
  Action Plan 🚀
  Make it real:
  - Clear steps
  - Timeline view
  - Team roles
  - Success marks
  
  Share those details and let's write a winner!`
          },
          {
            title: 'Business Report',
            description: 'Create professional business reports',
            template: `Hey! I'm your report clarity expert. I help teams understand complex data and take action. Let's make your report count!
  
  Report Essentials:
  [REPORT_TYPE] - What kind?
  [MAIN_GOAL] - Key takeaway?
  [AUDIENCE] - Who's reading?
  [DATA_SOURCES] - What info?
  
  Your Report Recipe:
  
  Executive Brief 📋
  One-page power:
  - Key finding
  - Big numbers
  - Main actions
  - Quick wins
  
  Data Story 📊
  Clear views:
  - Trend lines
  - Comparisons
  - Breakdowns
  - Highlights
  
  Action Items ✅
  Next steps:
  - Quick fixes
  - Big moves
  - Team tasks
  - Time goals
  
  Success Track 🎯
  Measure it:
  - Key metrics
  - Check points
  - Win marks
  - Review plan
  
  Give me those details and let's make data clear!`
          }
        ]
      },
      {
        title: 'UX Writing',
        prompts: [
          {
            title: 'UI Copy Guidelines',
            description: 'Create consistent UI copy',
            template: `Hello! I'm your UX writing pro who's helped apps boost user success rates by 40%. Let's make your UI text clear and friendly!
  
  UI Details:
  [PRODUCT/APP] - What's the tool?
  [USER_CONTEXT] - Who's using it?
  [BRAND_VOICE] - How should it sound?
  [KEY_ACTIONS] - Main user tasks?
  
  Your UI Copy Map:
  
  Button Text 🔘
  Action words that:
  - Show clear next steps
  - Feel low risk
  - Create confidence
  - Match user goals
  
  Error Messages 🚨
  Helpful alerts:
  - What went wrong
  - How to fix it
  - Next step options
  - Support links
  
  Success Notes 🌟
  Happy moments:
  - Action confirmed
  - Next steps clear
  - Value shown
  - Keep going hint
  
  Help Text 💡
  Smart support:
  - Quick tips
  - Example uses
  - Power moves
  - Learn more
  
  Share those details and let's make your UI text shine!`
          },
          {
            title: 'User Flow Copy',
            description: 'Write effective user flow copy',
            template: `I'm your user flow expert! I've helped apps increase completion rates by 60% with better copy. Let's guide users to success!
  
  Flow Basics:
  [USER_FLOW] - What's the process?
  [USER_TYPE] - Who's doing it?
  [MAIN_GOAL] - End result?
  [PAIN_POINTS] - Common blocks?
  
  Your Flow Guide:
  
  Welcome Steps 👋
  First moments:
  - Clear benefits
  - Easy starts
  - Quick wins
  - Next hints
  
  Feature Intro 🎯
  Show the way:
  - Use cases
  - Simple steps
  - Pro tips
  - Value proof
  
  Success Paths 🌟
  Happy endings:
  - Task done
  - Value shown
  - Next moves
  - Power tips
  
  Help Moments 💡
  Smart support:
  - Quick fixes
  - Clear next steps
  - Help options
  - Success tips
  
  Give me those details and let's make your user flow smooth!`
          }
        ]
      }
    ]
  },
  { 
    title: 'Business',
    icon: '📊',
    level: 'category',
    subcategories: [
      {
        title: 'Strategy',
        prompts: [
          {
            title: 'Business Model Canvas',
            description: 'Create comprehensive business models',
            template: `I'm your business model expert who's helped 100+ startups get funded. Let's map out your success!
  
  Quick Details Needed:
  [BUSINESS_TYPE] - What's your venture?
  [TARGET_MARKET] - Who are you serving?
  [REVENUE_MODEL] - How will you make money?
  [UNIQUE_VALUE] - Why choose you?
  
  Your Business Model Map:
  
  Value Zone 💎
  - Core promise
  - Pain killers
  - Gain creators
  
  Market Zone 🎯
  - Customer segments
  - Channel strategy
  - Key relationships
  
  Money Zone 💰
  - Revenue streams
  - Cost structure
  - Margins focus
  
  Operations Zone ⚙️
  - Key activities
  - Core resources
  - Critical partners
  
  Share those details, and I'll help build your business model blueprint!`
          },
          {
            title: 'Strategic Plan',
            description: 'Develop strategic plans',
            template: `Hey! I'm your strategy whisperer, helping companies 3x their growth. Let's plan your success path!
  
  Need to Know:
  [ORGANIZATION] - Company details
  [TIME_HORIZON] - Planning period
  [MAIN_GOALS] - Key objectives
  [RESOURCES] - Available assets
  
  Your Strategy Map:
  
  Vision Clarity 👀
  - Future state
  - Mission focus
  - Core values
  
  Market Position 🎯
  - SWOT snapshot
  - Competitor map
  - Growth spaces
  
  Action Plan 🚀
  - Key initiatives
  - Quick wins
  - Long plays
  - Risk plans
  
  Success Track 📊
  - Core metrics
  - Check points
  - Review cycle
  
  Drop those details and let's create your winning strategy!`
          }
        ]
      },
      {
        title: 'Operations',
        prompts: [
          {
            title: 'Process Optimization',
            description: 'Optimize business processes',
            template: `I've helped teams cut process time by 50%. Let's make your operations smooth!
  
  Key Info Needed:
  [PROCESS_NAME] - What are we fixing?
  [PAIN_POINTS] - Current problems?
  [TIME_GOALS] - Target improvements?
  [TEAM_SIZE] - Who's involved?
  
  Your Process Fix:
  
  Current State 📍
  - Process map
  - Time waste
  - Pain points
  - Cost drains
  
  Quick Wins 🎯
  - Easy fixes
  - Time saves
  - Cost cuts
  - Team wins
  
  Future Flow ⚡
  - New steps
  - Tech tools
  - Role clarity
  - Check points
  
  Success Signs 📈
  - Time saved
  - Cost down
  - Team happy
  - Quality up
  
  Share those details and let's optimize your process!`
          },
          {
            title: 'Workflow Design',
            description: 'Design efficient workflows',
            template: `I'm your workflow wizard! Ready to make work flow like water? Let's build!
  
  Quick Brief:
  [BUSINESS_FUNCTION] - What's the work?
  [TEAM_ROLES] - Who's involved?
  [TOOLS] - Current systems?
  [BOTTLENECKS] - Main slowdowns?
  
  Your Workflow Plan:
  
  Process Steps 🚀
  - Start points
  - Key actions
  - Hand-offs
  - End goals
  
  Role Clear 👥
  - Who does what
  - When to do it
  - How to do it
  - Who to ask
  
  Quality Gates ✅
  - Check points
  - Fix loops
  - Sign-offs
  - Reviews
  
  Flow Tools 🛠️
  - Tech needs
  - Team docs
  - Help guides
  - Quick fixes
  
  Give me those details and let's make work flow!`
          }
        ]
      },
      {
        title: 'Finance',
        prompts: [
          {
            title: 'Financial Forecast',
            description: 'Create financial projections',
            template: `I'm your numbers navigator! Let's map your money future with real accuracy.
  
  Must-Have Details:
  [BUSINESS_TYPE] - What's your business?
  [CURRENT_REVENUE] - Where are you now?
  [GROWTH_GOALS] - Where to next?
  [MARKET_SIZE] - How big's the pie?
  
  Your Money Map:
  
  Revenue Roads 💰
  - Sales paths
  - Growth curves
  - Price points
  - Market share
  
  Cost Control 📊
  - Fixed costs
  - Variable costs
  - Break points
  - Save spots
  
  Cash Flow 💸
  - Money in
  - Money out
  - Safe gaps
  - Risk spots
  
  Growth Guide 📈
  - Month goals
  - Quarter marks
  - Year targets
  - Win signs
  
  Share your numbers and let's chart your growth!`
          },
          {
            title: 'Budget Planning',
            description: 'Develop comprehensive budgets',
            template: `Ready to make every dollar count? I've helped teams save 30% while growing fast!
  
  Quick Facts:
  [DEPARTMENT/PROJECT] - What's the scope?
  [BUDGET_SIZE] - How much money?
  [TIME_PERIOD] - How long?
  [KEY_GOALS] - Main wins needed?
  
  Your Budget Blueprint:
  
  Money In 💵
  - Main sources
  - Growth areas
  - Risk spots
  - Back-ups
  
  Money Out 💳
  - Must-haves
  - Nice-to-haves
  - Save spots
  - Flex funds
  
  Track & Check 📊
  - Week looks
  - Month checks
  - Fix triggers
  - Win marks
  
  ROI Rules 📈
  - Cost wins
  - Value proof
  - Quick saves
  - Growth signs
  
  Tell me your numbers and let's make them work!`
          }
        ]
      },
      {
        title: 'Leadership',
        prompts: [
          {
            title: 'Team Management Framework',
            description: 'Improve team management',
            template: `I help teams crush goals while having fun! Let's build your dream team system.
  
  Team Details:
  [TEAM_SIZE/TYPE] - Who's on board?
  [WORK_STYLE] - Remote/Office/Hybrid?
  [MAIN_GOALS] - Key wins needed?
  [CHALLENGES] - Current blocks?
  
  Your Team Guide:
  
  Role Clear 👥
  - Who does what
  - Skill fits
  - Growth paths
  - Win zones
  
  Team Flow 🌊
  - Talk rules
  - Meet times
  - Help paths
  - Fun spots
  
  Win Track 🎯
  - Goal checks
  - Quick fixes
  - Win shares
  - Team ups
  
  Growth Path 📈
  - Learn plans
  - Skill jumps
  - Lead grows
  - Team wins
  
  Share your team details and let's build success!`
          },
          {
            title: 'Leadership Development',
            description: 'Develop leadership skills',
            template: `Ready to level up your leadership? I've helped 500+ leaders find their spark!
  
  Quick Brief:
  [LEADERSHIP_LEVEL] - Where are you now?
  [NEXT_GOALS] - Where to next?
  [TEAM_SIZE] - Who do you lead?
  [CHALLENGES] - Biggest hurdles?
  
  Your Leader Path:
  
  Skill Stack 💪
  - Must-haves
  - Next steps
  - Power moves
  - Pro tips
  
  Growth Map 🗺️
  - Quick wins
  - Big jumps
  - Help spots
  - Win signs
  
  Team Magic ✨
  - Trust builds
  - Team grows
  - Win shares
  - Fun adds
  
  Success Signs 🎯
  - Goal hits
  - Team wins
  - Happy folks
  - Growth show
  
  Let's build your leadership superpowers!`
          }
        ]
      },
      {
        title: 'Innovation',
        prompts: [
          {
            title: 'Product Innovation Process',
            description: 'Drive product innovation',
            template: `Let's create something amazing! I've helped launch 50+ successful products.
  
  Quick Facts:
  [PRODUCT_TYPE] - What are we making?
  [USER_NEEDS] - What problem to fix?
  [MARKET_GAP] - Why now?
  [RESOURCES] - What's available?
  
  Your Innovation Path:
  
  Idea Magic ⚡
  - Need finds
  - Pain fixes
  - New ways
  - Quick tests
  
  Build Smart 🔨
  - Test bits
  - User checks
  - Fast fixes
  - Win proofs
  
  Test & Learn 🔬
  - User views
  - Quick changes
  - Win checks
  - Fix flows
  
  Launch Plan 🚀
  - Market fit
  - User love
  - Growth path
  - Win signs
  
  Share those details and let's innovate!`
          },
          {
            title: 'Design Thinking Workshop',
            description: 'Facilitate design thinking',
            template: `Time to solve big problems! I run workshops that find real solutions fast.
  
  Workshop Needs:
  [CHALLENGE_TYPE] - What's the problem?
  [TEAM_SIZE] - Who's joining?
  [TIME_BLOCK] - How long?
  [GOALS] - What's success?
  
  Your Workshop Flow:
  
  Problem Hunt 🔍
  - User chats
  - Pain finds
  - Need maps
  - Why digs
  
  Idea Burst 💡
  - Brain dumps
  - Wild ideas
  - Mix & match
  - Pick wins
  
  Make & Test 🛠️
  - Quick builds
  - User tests
  - Fast fixes
  - Win checks
  
  Action Plan 📋
  - Next steps
  - Team tasks
  - Quick wins
  - Check times
  
  Ready to run your innovation day?`
          }
        ]
      },
      {
        title: 'Customer Success',
        prompts: [
          {
            title: 'Customer Journey Map',
            description: 'Map customer experiences',
            template: `Let's make customers smile! I've helped brands boost satisfaction by 40%.
  
  Quick Info:
  [CUSTOMER_SEGMENT] - Who are they?
  [MAIN_GOALS] - What do they want?
  [PAIN_POINTS] - What bugs them?
  [TOUCH_POINTS] - Where do we meet?
  
  Your Journey Map:
  
  First Touch 👋
  - Find us how
  - Feel what
  - Need what
  - Get what
  
  Use Flow 🌊
  - Do what
  - Need help
  - Get stuck
  - Win how
  
  Grow More 📈
  - Want more
  - Tell friends
  - Come back
  - Love why
  
  Fix Fast ⚡
  - Spot problems
  - Fix quick
  - Make happy
  - Keep close
  
  Share those details and let's map customer joy!`
          },
          {
            title: 'Success Metrics Framework',
            description: 'Define success metrics',
            template: `Ready to measure what matters? Let's track the numbers that drive growth!
  
  Need to Know:
  [BUSINESS_TYPE] - What's your focus?
  [KEY_GOALS] - Main wins needed?
  [DATA_ACCESS] - What can we track?
  [TEAM_SIZE] - Who's watching?
  
  Your Metrics Map:
  
  Must Track 📊
  - Money moves
  - User love
  - Team wins
  - Growth signs
  
  Check Times ⏰
  - Day looks
  - Week views
  - Month digs
  - Quarter big
  
  Fix Fast 🔧
  - Spot drops
  - Find why
  - Fix quick
  - Track up
  
  Win More 🎯
  - Set goals
  - Check often
  - Share wins
  - Grow smart
  
  Give me those details and let's measure success!`
          }
        ]
      }
    ]
  },
  { 
    title: 'Data Analytics',
    icon: '📈',
    level: 'category',
    subcategories: [
      {
        title: 'Data Visualization',
        prompts: [
          {
            title: 'Dashboard Design',
            description: 'Create effective data dashboards',
            template: `I've built dashboards for Fortune 500s that turn data chaos into clarity. Let's make your data speak!
  
  Essential Info:
  [DATA_TYPE] - What are we tracking?
  [AUDIENCE] - Who's looking?
  [OBJECTIVES] - Key decisions needed?
  [UPDATE_FREQUENCY] - How often fresh?
  
  Your Dashboard Blueprint:
  
  Top Level View 👀
  - Must-know numbers (3-5 max)
  - Trend spotlights
  - Alert indicators
  - Action triggers
  
  Deep Dive Zones 🎯
  - Drill-down paths
  - Detail views
  - Compare options
  - Time slices
  
  Visual Power 🎨
  - Chart picks
  - Color meaning
  - Space use
  - Click flows
  
  Action Triggers ⚡
  - Alert rules
  - Change flags
  - Risk spots
  - Win signs
  
  Share your details and let's build a dashboard that drives decisions!`
          },
          {
            title: 'Chart Selection',
            description: 'Choose appropriate chart types',
            template: `Ready to pick perfect charts? I've helped teams boost data understanding by 80% with smart visuals!
  
  Quick Brief:
  [DATA_POINTS] - What numbers?
  [STORY_GOAL] - What to show?
  [COMPARE_TYPE] - How to match?
  [SPACE_LIMITS] - Where shown?
  
  Chart Magic Menu:
  
  Compare Things 📊
  - Bar charts (categories)
  - Radar (multiple metrics)
  - Tables (precise numbers)
  - Icons (simple diffs)
  
  Show Change 📈
  - Line (trends)
  - Area (parts of whole)
  - Spark (quick trends)
  - Steps (phases)
  
  See Parts 🥧
  - Pie (simple parts)
  - Tree (hierarchy)
  - Stack (layers)
  - Heat (intensity)
  
  Tell Stories 🎭
  - Flow (process)
  - Scatter (relations)
  - Maps (location)
  - Mix (complete view)
  
  Give me those details and let's pick your perfect charts!`
          }
        ]
      },
      {
        title: 'Statistical Analysis',
        prompts: [
          {
            title: 'A/B Test Design',
            description: 'Design effective A/B tests',
            template: `I'm your A/B test ace! Let's design experiments that find real answers, not just numbers.
  
  Test Essentials:
  [EXPERIMENT] - What to test?
  [SAMPLE_SIZE] - How many users?
  [SUCCESS_METRIC] - What's a win?
  [TIME_FRAME] - How long?
  
  Your Test Plan:
  
  Hypothesis Clear 🎯
  - Current state
  - Change idea
  - Win guess
  - Risk check
  
  Test Setup ⚙️
  - Group splits
  - Time picks
  - Tool choice
  - Clean data
  
  Watch Rules 👀
  - Stop signs
  - Win marks
  - Fail flags
  - Check times
  
  Result Read 📊
  - Stat checks
  - Size effect
  - Risk math
  - Next moves
  
  Share those details and let's design your perfect test!`
          },
          {
            title: 'Statistical Model Selection',
            description: 'Choose appropriate statistical models',
            template: `Time to pick the right math for your data! I help teams find insights, not just p-values.
  
  Need to Know:
  [DATA_TYPE] - What numbers?
  [GOAL] - What to learn?
  [SIZE] - How much data?
  [CLEAN_LEVEL] - How messy?
  
  Your Stats Map:
  
  Basic Looks 👀
  - Mean/median picks
  - Spread checks
  - Shape views
  - Clean needs
  
  Relation Finds 🔍
  - Correlation picks
  - Regression fits
  - Group splits
  - Time trends
  
  Deep Dives 🤿
  - Factor finds
  - Cluster spots
  - Pattern seeks
  - Outlier checks
  
  Result Rules 📋
  - Power needs
  - Size effects
  - Check lists
  - Next steps
  
  Tell me your data story and let's pick your perfect model!`
          }
        ]
      },
      {
        title: 'Business Intelligence',
        prompts: [
          {
            title: 'BI Dashboard Strategy',
            description: 'Create effective BI dashboards',
            template: `Let's turn your data into decisions! I've helped teams cut decision time by 60% with smart BI.
  
  Quick Facts:
  [BUSINESS_AREA] - What to track?
  [USERS] - Who needs this?
  [DATA_SOURCES] - Where's the data?
  [DECISIONS] - What to solve?
  
  Your BI Plan:
  
  Data Connect 🔌
  - Source links
  - Clean rules
  - Update times
  - Join maps
  
  View Build 🎨
  - Page flows
  - Click paths
  - Filter sets
  - Drill routes
  
  Share Rules 🔑
  - Who sees what
  - Update times
  - Alert sets
  - Help guides
  
  Win Track 📈
  - Use checks
  - Speed tests
  - Help needs
  - Fix times
  
  Share those details and let's build your BI success!`
          },
          {
            title: 'KPI Framework',
            description: 'Develop comprehensive KPI frameworks',
            template: `Ready to measure what moves business? I've helped teams find the 20% of metrics that drive 80% of growth!
  
  Need These:
  [DEPARTMENT] - Which team?
  [GOALS] - What wins?
  [DATA_ACCESS] - What's trackable?
  [FREQUENCY] - How often check?
  
  Your Metric Mix:
  
  Must Tracks 📊
  - Money moves
  - Growth signs
  - Risk spots
  - Team pace
  
  Check Times ⏰
  - Daily peeks
  - Week views
  - Month digs
  - Quarter big
  
  Fix Fast 🔧
  - Spot drops
  - Find why
  - Fix quick
  - Learn more
  
  Level Up 📈
  - Set bars
  - Raise goals
  - Share wins
  - Beat last
  
  Give me those details and let's build your perfect KPI set!`
          }
        ]
      },
      {
        title: 'Data Mining',
        prompts: [
          {
            title: 'Data Pattern Analysis',
            description: 'Identify meaningful patterns',
            template: `Let's find gold in your data! I help teams spot patterns worth millions in revenue.
  
  Quick Brief:
  [DATA_TYPE] - What data?
  [GOAL] - What to find?
  [SIZE] - How much data?
  [TIME_SPAN] - How long look?
  
  Your Mining Map:
  
  Pattern Hunt 🔍
  - Trend spots
  - Group finds
  - Time cycles
  - Odd marks
  
  Deep Dive 🤿
  - Why digs
  - Link finds
  - Gap spots
  - Risk checks
  
  Find Gems 💎
  - Win patterns
  - Loss warns
  - Growth signs
  - Change hints
  
  Use It 🎯
  - Fix lists
  - Try ideas
  - Track wins
  - Learn more
  
  Share your data details and let's find your insights!`
          },
          {
            title: 'Predictive Modeling',
            description: 'Build predictive models',
            template: `Time to see the future in your data! I've built models that predict with 85%+ accuracy.
  
  Model Needs:
  [PREDICTION_GOAL] - What to know?
  [DATA_HAVE] - What numbers?
  [TIME_AHEAD] - How far look?
  [ACCURACY_NEED] - How sure?
  
  Your Model Path:
  
  Data Prep 🧹
  - Clean rules
  - Fix gaps
  - Sort must/nice
  - Test splits
  
  Model Pick 🎯
  - Simple start
  - Add smarts
  - Test fits
  - Pick best
  
  Check Good 📊
  - Number tests
  - Real tries
  - Fix needs
  - Win marks
  
  Use Smart 🚀
  - Watch works
  - Fix fast
  - Learn more
  - Grow sure
  
  Give me those details and let's predict your future!`
          }
        ]
      },
      {
        title: 'Predictive Analytics',
        prompts: [
          {
            title: 'Forecasting Model',
            description: 'Create forecasting models',
            template: `Let's see tomorrow today! I build forecasts that help teams plan with confidence.
  
  Need to Know:
  [METRIC] - What to predict?
  [HISTORY] - How much past?
  [FACTORS] - What affects it?
  [ACCURACY] - How sure need?
  
  Your Forecast Path:
  
  Data Ready 📊
  - Clean up
  - Fill gaps
  - Find patterns
  - Pick parts
  
  Model Build 🔨
  - Start simple
  - Add smart
  - Test fit
  - Pick best
  
  Check True ✅
  - Past tests
  - Real tries
  - Fix needs
  - Sure levels
  
  Use Well 🎯
  - Watch works
  - Fix quick
  - Learn more
  - Grow better
  
  Share those details and let's predict your wins!`
          },
          {
            title: 'Risk Analysis',
            description: 'Conduct risk analysis',
            template: `Time to spot troubles before they hit! I help teams cut surprises by 70% with smart risk spots.
  
  Quick Facts:
  [BUSINESS_AREA] - What to watch?
  [RISK_TYPES] - What could go wrong?
  [IMPACT_SIZE] - How bad could it be?
  [TIME_FRAME] - How far ahead?
  
  Your Risk Radar:
  
  Find Risks 🔍
  - List all
  - Rank bad
  - Group like
  - Miss none
  
  Size Up 📏
  - How likely
  - How bad
  - Total hurt
  - Fix cost
  
  Fix Plan 🛠️
  - Quick wins
  - Big moves
  - Watch points
  - Team jobs
  
  Stay Safe ⚡
  - Check often
  - Warn early
  - Fix fast
  - Learn more
  
  Tell me your worries and let's build your safety net!`
          }
        ]
      },
      {
        title: 'Data Storytelling',
        prompts: [
          {
            title: 'Data Narrative',
            description: 'Create compelling data stories',
            template: `Let's make your data tell stories that stick! I help teams get 90% better buy-in with clear data tales.
  
  Story Needs:
  [ANALYSIS_TYPE] - What data story?
  [AUDIENCE] - Who listens?
  [KEY_MESSAGE] - Main point?
  [ACTION_WANT] - What do?
  
  Your Story Build:
  
  Hook Start 🎣
  - Grab minds
  - Show why care
  - Hint big find
  - Promise help
  
  Show Clear 📈
  - Best charts
  - Simple flow
  - Clear call
  - Next step
  
  Prove True ✅
  - Data back
  - Real examples
  - Fix doubts
  - Show works
  
  Move Act 🎯
  - Clear ask
  - Easy start
  - Help offer
  - Win view
  
  Share your story needs and let's make data speak!`
          },
          {
            title: 'Executive Presentation',
            description: 'Present data to executives',
            template: `Ready to wow the C-suite? I help teams get executive buy-in in the first 5 minutes!
  
  Quick Brief:
  [DATA_INSIGHTS] - What found?
  [EXEC_LEVEL] - Who's there?
  [ASK_SIZE] - What want?
  [TIME_SLOT] - How long?
  
  Your Exec Deck:
  
  Start Strong 💥
  - Big number
  - Why care
  - Market link
  - Money impact
  
  Show Fast 🚀
  - Key charts
  - Clear flow
  - Risk note
  - Win path
  
  Prove Worth 💰
  - ROI clear
  - Market fit
  - Team ready
  - Risk fix
  
  Close Deal ✅
  - Ask clear
  - Next steps
  - Team needs
  - Win view
  
  Give me those details and let's build your exec win!`
          }
        ]
      }
    ]
  },
  { 
    title: 'Productivity',
    icon: '⚡',
    level: 'category',
    subcategories: [
      {
        title: 'Time Management',
        prompts: [
          {
            title: 'Daily Planning System',
            description: 'Create effective daily planning systems',
            template: `I've helped 1000+ busy pros double their output while working less. Let's hack your day!
  
  Quick Brief:
  [ROLE/PROFESSION] - What's your work?
  [PEAK_HOURS] - When are you sharp?
  [MAIN_GOALS] - Big wins needed?
  [COMMON_BLOCKS] - What kills flow?
  
  Your Day Design:
  
  Power Start 🌅
  - First hour wins
  - Energy kicks
  - No-noise zone
  - Quick wins
  
  Focus Blocks 🎯
  - Deep work times
  - Break spots
  - Shield tricks
  - Flow hacks
  
  Energy Keep ⚡
  - Peak use
  - Slump dodge
  - Boost times
  - Rest smart
  
  Day Win 🏆
  - End strong
  - Quick review
  - Next prep
  - Win list
  
  Share your day and let's make it flow like magic!`
          },
          {
            title: 'Time Blocking Template',
            description: 'Design effective time blocking schedules',
            template: `Ready to own your hours? I help busy pros get 5 hours back each week with smart blocks!
  
  Need to Know:
  [SCHEDULE_TYPE] - Fixed or flex?
  [ENERGY_PATTERN] - Peak times?
  [MUST_DOS] - Non-negotiables?
  [FLEX_SPOTS] - Where's wiggle room?
  
  Your Time Map:
  
  Power Blocks 💪
  - Deep work zones
  - Focus times
  - Shield methods
  - Win marks
  
  Break Smart 🌟
  - Energy keeps
  - Mind fresh
  - Body move
  - Quick reset
  
  Flex Flow 🌊
  - Shift spots
  - Bump rules
  - Catch-up times
  - Buffer zones
  
  Track Wins 🎯
  - Block checks
  - Fix fast
  - Win notes
  - Next better
  
  Give me your schedule and let's make time work for you!`
          }
        ]
      },
      {
        title: 'Task Management',
        prompts: [
          {
            title: 'Task Prioritization Matrix',
            description: 'Create effective task prioritization systems',
            template: `Let's make busy simple! I help teams cut task stress by 70% with smart sorting.
  
  Quick Facts:
  [PROJECT/ROLE] - What's the work?
  [DEADLINES] - When needed?
  [TEAM_SIZE] - Who helps?
  [IMPACT_GOALS] - What matters most?
  
  Your Task Tamer:
  
  Must Do Now ⚡
  - Fire kills
  - Big wins
  - Cost of wait
  - Quick hits
  
  Plan Smart 📋
  - Next up
  - Prep needs
  - Team help
  - Time fits
  
  Sort Fast 🔄
  - 2-min rule
  - Batch like
  - Drop okay
  - Shift flex
  
  Stay Cool 😎
  - Check times
  - List clean
  - Win track
  - Next clear
  
  Share your task load and let's make it manageable!`
          },
          {
            title: 'Project Breakdown Framework',
            description: 'Break down complex projects effectively',
            template: `Complex project? Let's make it simple! I turn big scary goals into easy next steps.
  
  Need These:
  [PROJECT_NAME] - What we building?
  [END_DATE] - When needed?
  [TEAM_SIZE] - Who helps?
  [MAIN_BLOCKS] - Big parts?
  
  Your Project Map:
  
  Big Picture 🗺️
  - End goal clear
  - Main parts
  - Must haves
  - Nice adds
  
  Step Stack 📚
  - Part sizes
  - Order right
  - Team fits
  - Time needs
  
  Do Order 📋
  - First moves
  - Next steps
  - Check points
  - Win marks
  
  Flow Keep 🌊
  - Stuck fixes
  - Team talks
  - Time checks
  - Win track
  
  Give me your project and let's break it down right!`
          }
        ]
      },
      {
        title: 'Goal Setting',
        prompts: [
          {
            title: 'SMART Goals Framework',
            description: 'Create effective SMART goals',
            template: `Turn dreams into done! I help teams hit goals 3x faster with SMART planning.
  
  Quick Brief:
  [OBJECTIVE] - Big dream?
  [TIME_FRAME] - When by?
  [RESOURCES] - What's available?
  [BLOCKERS] - What might stop you?
  
  Your Goal Guide:
  
  Make Clear 🎯
  - Numbers set
  - Time fixed
  - Team clear
  - Win defined
  
  Get Real 💪
  - Have check
  - Need list
  - Gap find
  - Fix plan
  
  Track Right 📊
  - Check times
  - Win marks
  - Fix spots
  - Next steps
  
  Win More 🏆
  - Small wins
  - Team hype
  - Learn fast
  - Level up
  
  Share your dream and let's make it real!`
          },
          {
            title: 'OKR Development',
            description: 'Design effective OKRs',
            template: `Let's build OKRs that actually work! I help teams turn big dreams into weekly wins.
  
  Need to Know:
  [TEAM/DEPARTMENT] - Who's this for?
  [QUARTER_GOALS] - What's the win?
  [MEASURE_HOW] - Track numbers?
  [TEAM_SIZE] - Who's involved?
  
  Your OKR Build:
  
  Dream Big 🌟
  - Clear aim
  - Bold reach
  - Team buzz
  - Why clear
  
  Get Real 📊
  - Number goals
  - Time marks
  - Team jobs
  - Check ways
  
  Track Smart 👀
  - Week looks
  - Month checks
  - Fix fast
  - Win share
  
  Level Up 🚀
  - Aim high
  - Start small
  - Learn quick
  - Grow sure
  
  Share your goals and let's make them happen!`
          }
        ]
      },
      {
        title: 'Focus & Deep Work',
        prompts: [
          {
            title: 'Deep Work Protocol',
            description: 'Design deep work routines',
            template: `Ready to enter the flow state? I help pros get 3 hours of deep work daily, guaranteed.
  
  Quick Facts:
  [ROLE/TASK] - Deep work on what?
  [BEST_TIME] - When sharp?
  [SPACE_OPTIONS] - Where work?
  [BLOCK_TYPES] - What distracts?
  
  Your Focus Force:
  
  Space Make 🏰
  - Spot pick
  - Noise kill
  - Tool set
  - Sign clear
  
  Mind Prep 🧠
  - Start rule
  - Ramp up
  - Flow hook
  - Lock in
  
  Stay Deep 🌊
  - Time block
  - Break right
  - Back fast
  - Win keep
  
  Track Growth 📈
  - Time log
  - Deep check
  - Fix list
  - Next best
  
  Share your focus needs and let's build your flow state!`
          },
          {
            title: 'Focus Session Design',
            description: 'Structure effective focus sessions',
            template: `Let's make focus easy! I help busy pros get 2x done in half the time with smart sessions.
  
  Session Needs:
  [WORK_TYPE] - What tasks?
  [TIME_BLOCKS] - How long?
  [ENERGY_LEVEL] - When peak?
  [ENVIRONMENT] - Where work?
  
  Your Focus Flow:
  
  Start Strong 🚀
  - Mind clear
  - Space set
  - Tools ready
  - Time block
  
  Keep Flow 🌊
  - Block noise
  - Mind fresh
  - Body good
  - Focus lock
  
  Break Smart ⚡
  - Time right
  - Move some
  - Mind rest
  - Back quick
  
  End Sharp 🎯
  - Win list
  - Next clear
  - Space clean
  - Energy save
  
  Give me your focus goals and let's make magic happen!`
          }
        ]
      },
      {
        title: 'Meeting Efficiency',
        prompts: [
          {
            title: 'Meeting Framework',
            description: 'Create efficient meeting structures',
            template: `Cut meeting waste! I help teams turn hour meetings into 15-minute wins.
  
  Quick Brief:
  [MEETING_TYPE] - What kind?
  [PEOPLE_COUNT] - How many?
  [MAIN_GOAL] - Key outcome?
  [TIME_BOX] - How long?
  
  Your Meeting Magic:
  
  Start Sharp ⚡
  - Goal clear
  - Time set
  - Roles clear
  - Energy up
  
  Stay On 🎯
  - Topic lock
  - Time track
  - Park lot
  - Move on
  
  End Strong 💪
  - Action clear
  - Who does
  - When by
  - Next set
  
  Keep Good 📋
  - Notes quick
  - Share fast
  - Track done
  - Win mark
  
  Share your meeting type and let's make it work!`
          },
          {
            title: 'Meeting Optimization',
            description: 'Optimize meeting effectiveness',
            template: `Turn meetings from time sinks to win tanks! I help teams cut meeting time by 50%.
  
  Need These:
  [MEETING_CATEGORY] - What type?
  [PAIN_POINTS] - What's wrong?
  [PEOPLE_MIX] - Who's there?
  [WIN_NEEDS] - Success look like?
  
  Your Meeting Fix:
  
  Prep Power 📋
  - Must list
  - Read first
  - Think done
  - Ask ready
  
  Run Tight ⚡
  - Time box
  - Focus lock
  - Move fast
  - Park smart
  
  End Right 🎯
  - Do clear
  - Who what
  - When check
  - Next set
  
  Stay Good 📈
  - Notes fast
  - Share quick
  - Track wins
  - Fix next
  
  Give me your meeting details and let's make them count!`
          }
        ]
      },
      {
        title: 'Workflow Optimization',
        prompts: [
          {
            title: 'Process Improvement',
            description: 'Optimize existing workflows',
            template: `Let's make work flow! I help teams cut process time by 40% while boosting quality.
  
  Quick Facts:
  [WORKFLOW_NAME] - What process?
  [CURRENT_TIME] - How long now?
  [TEAM_SIZE] - Who's in it?
  [PAIN_POINTS] - What's slow?
  
  Your Flow Fix:
  
  See Now 👀
  - Steps list
  - Time use
  - Stuck spots
  - Team pain
  
  Fix Fast ⚡
  - Quick wins
  - Cut waste
  - Add flow
  - Team ease
  
  Check Good 📊
  - Time track
  - Team happy
  - Work smooth
  - Win more
  
  Keep Up 🚀
  - Fix fast
  - Learn more
  - Grow smart
  - Win big
  
  Share your workflow and let's make it smooth!`
          },
          {
            title: 'Automation Strategy',
            description: 'Develop automation strategies',
            template: `Ready to automate? I help teams save 10+ hours weekly with smart tech.
  
  Need to Know:
  [PROCESS_NAME] - What to fix?
  [MANUAL_TIME] - How long now?
  [TOOLS_HAVE] - What tech?
  [SKILL_LEVEL] - Team tech savvy?
  
  Your Auto Plan:
  
  Task Pick 🎯
  - Time sinks
  - Repeat stuff
  - Error prone
  - Quick wins
  
  Tool Match 🔧
  - What fits
  - Cost good
  - Learn easy
  - Team like
  
  Test Smart 📊
  - Start small
  - Fix fast
  - Team train
  - Grow sure
  
  Keep Good ⚡
  - Check works
  - Fix bugs
  - Add more
  - Win big
  
  Tell me what to automate and let's save time!`
          }
        ]
      }
    ]
  }  
]; 