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
            template: 'Act as a content strategist. Help me develop a blog content strategy for [INDUSTRY/NICHE] that includes: 1) Target audience analysis 2) Content pillars and themes 3) SEO keyword strategy 4) Content formats and types 5) Publishing schedule 6) Success metrics. Consider [BUSINESS_GOALS] and [TARGET_AUDIENCE].'
          },
          {
            title: 'Content Calendar Development',
            description: 'Design an effective content calendar',
            template: 'Act as a content planning expert. Help me create a content calendar for [TIMEFRAME] that includes: 1) Content themes 2) Post types 3) Publishing dates 4) Channel distribution 5) Key messages. Focus on [CONTENT_GOALS] and [TARGET_AUDIENCE_PREFERENCES].'
          }
        ]
      },
      {
        title: 'Digital Marketing',
        prompts: [
          {
            title: 'PPC Campaign Blueprint',
            description: 'Design effective PPC campaigns',
            template: 'Act as a PPC specialist. Help me create a comprehensive PPC campaign for [PRODUCT/SERVICE] including: 1) Campaign structure 2) Keyword strategy 3) Ad copy variations 4) Bidding strategy 5) Landing page requirements. Budget is [BUDGET] targeting [TARGET_AUDIENCE].'
          },
          {
            title: 'SEO Content Optimization',
            description: 'Optimize content for search engines',
            template: 'Act as an SEO expert. Help me optimize [CONTENT_TYPE] for [TARGET_KEYWORD] including: 1) Title tag 2) Meta description 3) Heading structure 4) Content outline 5) Internal linking strategy. Consider search intent for [TARGET_AUDIENCE].'
          }
        ]
      },
      {
        title: 'Email Marketing',
        prompts: [
          {
            title: 'Email Sequence Framework',
            description: 'Design effective email sequences',
            template: 'Act as an email marketing specialist. Help me create an email sequence for [CAMPAIGN_TYPE] including: 1) Email flow structure 2) Subject line formulas 3) Content themes 4) Call-to-action strategy 5) Timing and frequency.'
          },
          {
            title: 'Newsletter Engagement Strategy',
            description: 'Create engaging newsletters',
            template: 'Act as a newsletter expert. Help me develop a newsletter strategy for [AUDIENCE_TYPE] including: 1) Content mix 2) Engagement tactics 3) Personalization approach 4) Growth strategies 5) Success metrics.'
          }
        ]
      },
      {
        title: 'Growth Marketing',
        prompts: [
          {
            title: 'Growth Experiment Design',
            description: 'Design effective growth experiments',
            template: 'Act as a growth marketing expert. Help me design a growth experiment for [GROWTH_GOAL] including: 1) Hypothesis formation 2) Test parameters 3) Success metrics 4) Implementation plan 5) Analysis framework.'
          },
          {
            title: 'User Acquisition Funnel',
            description: 'Create user acquisition funnels',
            template: 'Act as a user acquisition specialist. Help me create a funnel for [TARGET_AUDIENCE] including: 1) Channel strategy 2) Conversion points 3) Content mapping 4) Optimization opportunities 5) ROI tracking.'
          }
        ]
      },
      {
        title: 'Product Marketing',
        prompts: [
          {
            title: 'Product Launch Playbook',
            description: 'Create product launch strategies',
            template: 'Act as a product marketing manager. Help me create a launch plan for [PRODUCT_NAME] including: 1) Launch timeline 2) Messaging framework 3) Channel strategy 4) Success metrics 5) Stakeholder communication.'
          },
          {
            title: 'Feature Announcement Template',
            description: 'Design feature announcements',
            template: 'Act as a product communications expert. Help me create a feature announcement for [FEATURE_NAME] including: 1) Value proposition 2) Use cases 3) Technical details 4) Launch materials 5) Customer education plan.'
          }
        ]
      },
      {
        title: 'Brand Marketing',
        prompts: [
          {
            title: 'Brand Voice Guidelines',
            description: 'Develop brand voice guidelines',
            template: 'Act as a brand strategist. Help me create brand voice guidelines for [COMPANY_NAME] including: 1) Tone characteristics 2) Writing principles 3) Dos and donts 4) Example applications 5) Implementation guide.'
          },
          {
            title: 'Brand Identity Framework',
            description: 'Create brand identity frameworks',
            template: 'Act as a brand identity expert. Help me develop a brand identity framework for [BRAND_NAME] including: 1) Core values 2) Personality traits 3) Visual elements 4) Messaging pillars 5) Brand story.'
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
            template: 'Act as a sales outreach expert. Design a 5-email sequence for [TARGET_AUDIENCE] promoting [PRODUCT/SERVICE]. Include: 1) Subject lines 2) Email body copy 3) Call-to-actions 4) Follow-up strategy 5) Timing between emails.'
          },
          {
            title: 'LinkedIn Outreach Template',
            description: 'Design LinkedIn outreach messages',
            template: 'Act as a social selling expert. Create a LinkedIn outreach sequence for [TARGET_PERSONA] including: 1) Connection request message 2) Initial follow-up 3) Value-add message 4) Meeting request. Focus on [INDUSTRY_SPECIFICS].'
          }
        ]
      },
      {
        title: 'Pipeline Management',
        prompts: [
          {
            title: 'Sales Pipeline Setup',
            description: 'Create effective sales pipeline structure',
            template: 'Act as a sales operations expert. Help me design a sales pipeline for [BUSINESS_TYPE] including: 1) Stage definitions 2) Entry/exit criteria 3) Key metrics 4) Follow-up cadence 5) Conversion targets.'
          },
          {
            title: 'Lead Scoring System',
            description: 'Develop lead scoring framework',
            template: 'Act as a lead management expert. Help me create a lead scoring system for [BUSINESS_TYPE] including: 1) Scoring criteria 2) Point allocation 3) Qualification thresholds 4) Automation rules 5) Review process.'
          }
        ]
      },
      {
        title: 'Negotiation',
        prompts: [
          {
            title: 'Price Negotiation Script',
            description: 'Handle price negotiations effectively',
            template: 'Act as a negotiation expert. Create a script for negotiating [PRODUCT/SERVICE] pricing including: 1) Value positioning 2) Common objection responses 3) Price anchoring strategies 4) Alternative options 5) Closing techniques 6) ROI demonstration 7) Competitive analysis 8) Decision timeline.'
          },
          {
            title: 'Deal Closing Framework',
            description: 'Framework for closing sales deals',
            template: 'Act as a sales closing specialist. Develop a framework for closing [DEAL_TYPE] including: 1) Pre-close checklist 2) Stakeholder alignment steps 3) Final presentation structure 4) Objection handling 5) Follow-up strategy 6) Contract terms 7) Implementation plan 8) Success metrics.'
          }
        ]
      },
      {
        title: 'Sales Psychology',
        prompts: [
          {
            title: 'Objection Handling Guide',
            description: 'Master common sales objections',
            template: 'Act as a sales psychology expert. Create an objection handling guide for [PRODUCT/SERVICE] including: 1) Common objections list 2) Psychological principles 3) Response frameworks 4) Body language tips 5) Tone guidance 6) Follow-up questions 7) Success stories 8) Practice scenarios.'
          },
          {
            title: 'Buyer Psychology Framework',
            description: 'Understand buyer motivations',
            template: 'Act as a buyer psychology specialist. Develop a framework for understanding [BUYER_TYPE] including: 1) Decision drivers 2) Pain points 3) Influence factors 4) Trust building 5) Risk mitigation 6) Value perception 7) Decision process 8) Emotional triggers.'
          }
        ]
      },
      {
        title: 'Account Management',
        prompts: [
          {
            title: 'Client Retention Strategy',
            description: 'Develop effective retention plans',
            template: 'Act as an account management expert. Create a retention strategy for [CLIENT_TYPE] including: 1) Relationship mapping 2) Value delivery plan 3) Communication cadence 4) Success metrics 5) Growth opportunities 6) Risk assessment 7) Feedback loops 8) Renewal process.'
          },
          {
            title: 'Account Growth Plan',
            description: 'Plan account expansion strategies',
            template: 'Act as a strategic account manager. Design a growth plan for [ACCOUNT_NAME] including: 1) Current state analysis 2) Opportunity mapping 3) Stakeholder management 4) Action items 5) Resource requirements 6) Timeline planning 7) Success metrics 8) Risk mitigation.'
          }
        ]
      },
      {
        title: 'Sales Enablement',
        prompts: [
          {
            title: 'Sales Pitch Deck',
            description: 'Create compelling pitch decks',
            template: 'Act as a sales enablement specialist. Design a pitch deck for [PRODUCT/SERVICE] including: 1) Problem statement 2) Solution overview 3) Value proposition 4) Market analysis 5) Competitive advantages 6) Case studies 7) Pricing strategy 8) Next steps.'
          },
          {
            title: 'Value Proposition Design',
            description: 'Craft powerful value propositions',
            template: 'Act as a value proposition expert. Create a value proposition for [OFFERING] including: 1) Customer profile 2) Pain points addressed 3) Benefits mapping 4) ROI calculation 5) Competitive analysis 6) Use cases 7) Success metrics 8) Delivery methodology.'
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
            template: 'Act as a content writing expert. Help me create a blog post about [TOPIC] including: 1) Attention-grabbing headline options 2) Engaging introduction with hook 3) Main points outline 4) Supporting evidence needed 5) Call-to-action conclusion 6) SEO considerations. Target audience is [TARGET_AUDIENCE].'
          },
          {
            title: 'Content Calendar',
            description: 'Plan content calendar effectively',
            template: 'Act as a content strategist. Help me create a content calendar for [TIMEFRAME] including: 1) Content themes 2) Content types mix 3) Publishing schedule 4) Distribution channels 5) Success metrics 6) Resource requirements. Focus on [BUSINESS_GOALS].'
          }
        ]
      },
      {
        title: 'Copywriting',
        prompts: [
          {
            title: 'Landing Page Copy',
            description: 'Write converting landing page copy',
            template: 'Act as a conversion copywriter. Create landing page copy for [PRODUCT/SERVICE] including: 1) Headline variations 2) Subheadline options 3) Value proposition 4) Feature-benefit pairs 5) Social proof elements 6) Call-to-action variations. Target audience is [TARGET_AUDIENCE].'
          },
          {
            title: 'Email Campaign Copy',
            description: 'Create compelling email campaigns',
            template: 'Act as an email copywriter. Design an email campaign for [PRODUCT/SERVICE] including: 1) Subject line variations 2) Preview text options 3) Email body structure 4) Persuasive elements 5) Call-to-action buttons 6) A/B testing ideas. Campaign goal is [CAMPAIGN_GOAL].'
          }
        ]
      },
      {
        title: 'Technical Writing',
        prompts: [
          {
            title: 'User Documentation',
            description: 'Create user-friendly documentation',
            template: 'Act as a technical writer. Create user documentation for [PRODUCT/FEATURE] including: 1) Product overview 2) Getting started guide 3) Feature explanations 4) Step-by-step tutorials 5) Troubleshooting guide 6) FAQs. Target user level is [USER_LEVEL].'
          },
          {
            title: 'API Documentation',
            description: 'Write comprehensive API docs',
            template: 'Act as an API documentation specialist. Create API documentation for [API_NAME] including: 1) Authentication guide 2) Endpoint descriptions 3) Request/response examples 4) Error handling 5) Rate limiting details 6) Code samples in [PROGRAMMING_LANGUAGE].'
          }
        ]
      },
      {
        title: 'Creative Writing',
        prompts: [
          {
            title: 'Story Structure',
            description: 'Develop compelling story structures',
            template: 'Act as a creative writing coach. Help me develop a story in [GENRE] including: 1) Plot outline 2) Character profiles 3) Setting descriptions 4) Key story beats 5) Conflict development 6) Resolution approach. Story theme is [THEME].'
          },
          {
            title: 'Dialogue Writing',
            description: 'Create authentic dialogue',
            template: 'Act as a dialogue writing expert. Help me write dialogue for [SCENE_TYPE] including: 1) Character voice development 2) Subtext implementation 3) Conflict expression 4) Emotional undertones 5) Pacing suggestions 6) Dialogue tags usage. Character dynamics are [RELATIONSHIP_TYPE].'
          }
        ]
      },
      {
        title: 'Business Writing',
        prompts: [
          {
            title: 'Business Proposal',
            description: 'Write winning business proposals',
            template: 'Act as a business writing consultant. Create a business proposal for [PROJECT/SERVICE] including: 1) Executive summary 2) Problem statement 3) Proposed solution 4) Implementation plan 5) Budget breakdown 6) Timeline 7) Risk mitigation 8) Expected ROI.'
          },
          {
            title: 'Business Report',
            description: 'Create professional business reports',
            template: 'Act as a business report specialist. Create a report structure for [REPORT_TYPE] including: 1) Executive summary 2) Key findings 3) Data analysis 4) Recommendations 5) Action items 6) Resource requirements 7) Success metrics 8) Next steps.'
          }
        ]
      },
      {
        title: 'UX Writing',
        prompts: [
          {
            title: 'UI Copy Guidelines',
            description: 'Create consistent UI copy',
            template: 'Act as a UX writer. Create UI copy guidelines for [PRODUCT/APP] including: 1) Voice and tone guide 2) Button text patterns 3) Error message templates 4) Form field labels 5) Navigation labels 6) Help text standards. Consider [USER_CONTEXT].'
          },
          {
            title: 'User Flow Copy',
            description: 'Write effective user flow copy',
            template: 'Act as a UX content strategist. Create copy for [USER_FLOW] including: 1) Onboarding messages 2) Feature introduction 3) Success states 4) Error states 5) Empty states 6) Confirmation messages. Target user is [USER_TYPE].'
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
            template: 'Act as a business strategist. Create a Business Model Canvas for [BUSINESS_TYPE] including: 1) Value propositions 2) Customer segments 3) Revenue streams 4) Key resources 5) Cost structure 6) Key activities 7) Channels 8) Customer relationships 9) Key partners.'
          },
          {
            title: 'Strategic Plan',
            description: 'Develop strategic plans',
            template: 'Act as a strategic planning consultant. Create a strategic plan for [ORGANIZATION] including: 1) Vision/mission 2) SWOT analysis 3) Strategic objectives 4) Key initiatives 5) Success metrics 6) Resource allocation 7) Timeline 8) Risk mitigation.'
          }
        ]
      },
      {
        title: 'Operations',
        prompts: [
          {
            title: 'Process Optimization',
            description: 'Optimize business processes',
            template: 'Act as an operations expert. Help me optimize [PROCESS_NAME] including: 1) Current state mapping 2) Bottleneck identification 3) Efficiency metrics 4) Improvement opportunities 5) Implementation roadmap 6) Resource requirements 7) Success criteria 8) Change management plan.'
          },
          {
            title: 'Workflow Design',
            description: 'Design efficient workflows',
            template: 'Act as a process improvement specialist. Help me design a workflow for [BUSINESS_FUNCTION] including: 1) Process steps 2) Role assignments 3) Decision points 4) Documentation requirements 5) Quality controls 6) Performance metrics 7) System requirements 8) Training needs.'
          }
        ]
      },
      {
        title: 'Finance',
        prompts: [
          {
            title: 'Financial Forecast',
            description: 'Create financial projections',
            template: 'Act as a financial analyst. Create a financial forecast for [BUSINESS_TYPE] including: 1) Revenue projections 2) Cost estimates 3) Cash flow analysis 4) Growth assumptions 5) Sensitivity analysis 6) Key metrics 7) Risk factors 8) Monthly breakdown.'
          },
          {
            title: 'Budget Planning',
            description: 'Develop comprehensive budgets',
            template: 'Act as a budget planning expert. Create a budget plan for [DEPARTMENT/PROJECT] including: 1) Income sources 2) Fixed costs 3) Variable expenses 4) Contingency allocation 5) ROI calculations 6) Monitoring metrics 7) Adjustment triggers 8) Review schedule.'
          }
        ]
      },
      {
        title: 'Leadership',
        prompts: [
          {
            title: 'Team Management Framework',
            description: 'Improve team management',
            template: 'Act as a leadership coach. Develop a team management framework for [TEAM_SIZE/TYPE] including: 1) Role definitions 2) Communication protocols 3) Performance metrics 4) Development plans 5) Feedback systems 6) Conflict resolution 7) Recognition programs 8) Team building activities.'
          },
          {
            title: 'Leadership Development',
            description: 'Develop leadership skills',
            template: 'Act as a leadership development expert. Create a development plan for [LEADERSHIP_LEVEL] including: 1) Core competencies 2) Skill assessment 3) Learning objectives 4) Action items 5) Mentorship structure 6) Progress metrics 7) Resource allocation 8) Timeline milestones.'
          }
        ]
      },
      {
        title: 'Innovation',
        prompts: [
          {
            title: 'Product Innovation Process',
            description: 'Drive product innovation',
            template: 'Act as an innovation consultant. Design an innovation process for [PRODUCT_TYPE] including: 1) Idea generation 2) Evaluation criteria 3) Prototype development 4) Testing methodology 5) Feedback loops 6) Implementation phases 7) Success metrics 8) Risk mitigation.'
          },
          {
            title: 'Design Thinking Workshop',
            description: 'Facilitate design thinking',
            template: 'Act as a design thinking facilitator. Create a workshop plan for [CHALLENGE_TYPE] including: 1) Problem definition 2) User research 3) Ideation exercises 4) Prototype methods 5) Testing approach 6) Iteration process 7) Implementation strategy 8) Success criteria.'
          }
        ]
      },
      {
        title: 'Customer Success',
        prompts: [
          {
            title: 'Customer Journey Map',
            description: 'Map customer experiences',
            template: 'Act as a customer experience expert. Help me create a journey map for [CUSTOMER_SEGMENT] including: 1) Touchpoints identification 2) Pain points analysis 3) Emotion mapping 4) Opportunity areas 5) Success metrics 6) Implementation priorities 7) Resource needs 8) Timeline planning.'
          },
          {
            title: 'Success Metrics Framework',
            description: 'Define success metrics',
            template: 'Act as a customer success strategist. Develop a metrics framework for [BUSINESS_TYPE] including: 1) KPI definition 2) Data collection methods 3) Reporting structure 4) Analysis approach 5) Action triggers 6) Review cadence 7) Improvement process 8) Stakeholder communication.'
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
            template: 'Act as a data visualization expert. Design a dashboard for [DATA_TYPE] including: 1) Key metrics selection 2) Chart types 3) Layout design 4) Interactivity features 5) Color scheme 6) User navigation. Consider [AUDIENCE] and [OBJECTIVES].'
          },
          {
            title: 'Chart Selection',
            description: 'Choose appropriate chart types',
            template: 'Act as a data visualization specialist. Recommend chart types for [DATA_POINTS] including: 1) Data relationship analysis 2) Comparison requirements 3) Trend visualization 4) Audience considerations 5) Space constraints 6) Interactive elements.'
          }
        ]
      },
      {
        title: 'Statistical Analysis',
        prompts: [
          {
            title: 'A/B Test Design',
            description: 'Design effective A/B tests',
            template: 'Act as a statistical analyst. Help me design an A/B test for [EXPERIMENT] including: 1) Hypothesis formulation 2) Sample size calculation 3) Variable control 4) Success metrics 5) Statistical significance thresholds.'
          },
          {
            title: 'Statistical Model Selection',
            description: 'Choose appropriate statistical models',
            template: 'Act as a statistics expert. Help me select the appropriate statistical model for analyzing [DATA_TYPE] considering: 1) Data distribution 2) Variable relationships 3) Sample size 4) Analysis objectives 5) Assumptions testing.'
          }
        ]
      },
      {
        title: 'Business Intelligence',
        prompts: [
          {
            title: 'BI Dashboard Strategy',
            description: 'Create effective BI dashboards',
            template: 'Act as a BI consultant. Design a business intelligence strategy for [BUSINESS_AREA] including: 1) Key metrics selection 2) Data sources mapping 3) Dashboard layout 4) Update frequency 5) Access permissions 6) Training requirements 7) Success metrics 8) Maintenance plan.'
          },
          {
            title: 'KPI Framework',
            description: 'Develop comprehensive KPI frameworks',
            template: 'Act as a KPI specialist. Create a KPI framework for [DEPARTMENT] including: 1) Metric definitions 2) Data collection methods 3) Calculation formulas 4) Target setting 5) Reporting frequency 6) Visualization approach 7) Review process 8) Action thresholds.'
          }
        ]
      },
      {
        title: 'Data Mining',
        prompts: [
          {
            title: 'Data Pattern Analysis',
            description: 'Identify meaningful patterns',
            template: 'Act as a data mining expert. Create an analysis plan for [DATA_TYPE] including: 1) Pattern identification methods 2) Correlation analysis 3) Anomaly detection 4) Trend analysis 5) Insight extraction 6) Validation approach 7) Reporting format 8) Action recommendations.'
          },
          {
            title: 'Predictive Modeling',
            description: 'Build predictive models',
            template: 'Act as a predictive modeling specialist. Design a modeling approach for [PREDICTION_GOAL] including: 1) Feature selection 2) Model selection 3) Training strategy 4) Validation method 5) Performance metrics 6) Implementation plan 7) Monitoring system 8) Update protocol.'
          }
        ]
      },
      {
        title: 'Predictive Analytics',
        prompts: [
          {
            title: 'Forecasting Model',
            description: 'Create forecasting models',
            template: 'Act as a forecasting expert. Design a forecasting model for [METRIC] including: 1) Variable selection 2) Model architecture 3) Data preprocessing 4) Training approach 5) Validation methods 6) Error metrics 7) Implementation steps 8) Maintenance plan.'
          },
          {
            title: 'Risk Analysis',
            description: 'Conduct risk analysis',
            template: 'Act as a risk analytics specialist. Create a risk analysis framework for [BUSINESS_AREA] including: 1) Risk identification 2) Impact assessment 3) Probability calculation 4) Mitigation strategies 5) Monitoring plan 6) Reporting structure 7) Review frequency 8) Escalation protocol.'
          }
        ]
      },
      {
        title: 'Data Storytelling',
        prompts: [
          {
            title: 'Data Narrative',
            description: 'Create compelling data stories',
            template: 'Act as a data storytelling expert. Create a narrative framework for [ANALYSIS_TYPE] including: 1) Story arc development 2) Key message identification 3) Data visualization selection 4) Audience engagement 5) Presentation flow 6) Call-to-action design 7) Supporting materials 8) Delivery guidelines.'
          },
          {
            title: 'Executive Presentation',
            description: 'Present data to executives',
            template: 'Act as a data presentation specialist. Design an executive presentation for [DATA_INSIGHTS] including: 1) Executive summary 2) Key findings 3) Business impact 4) Visualization hierarchy 5) Recommendation framework 6) Implementation roadmap 7) Resource requirements 8) Success metrics.'
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
            template: 'Act as a time management expert. Design a daily planning system for [ROLE/PROFESSION] including: 1) Priority setting 2) Time blocking 3) Energy management 4) Buffer planning 5) Review process 6) Contingency planning.'
          },
          {
            title: 'Time Blocking Template',
            description: 'Design effective time blocking schedules',
            template: 'Act as a productivity coach. Create a time blocking template for [SCHEDULE_TYPE] including: 1) Core work blocks 2) Focus periods 3) Break scheduling 4) Flexibility allowance 5) Review intervals 6) Energy optimization.'
          }
        ]
      },
      {
        title: 'Task Management',
        prompts: [
          {
            title: 'Task Prioritization Matrix',
            description: 'Create effective task prioritization systems',
            template: 'Act as a task management expert. Help me create a prioritization matrix for [PROJECT/ROLE] including: 1) Urgency criteria 2) Impact assessment 3) Effort estimation 4) Dependencies mapping 5) Resource allocation.'
          },
          {
            title: 'Project Breakdown Framework',
            description: 'Break down complex projects effectively',
            template: 'Act as a project management specialist. Help me break down [PROJECT_NAME] into manageable tasks including: 1) Major deliverables 2) Task dependencies 3) Timeline estimates 4) Resource requirements 5) Milestone definitions.'
          }
        ]
      },
      {
        title: 'Goal Setting',
        prompts: [
          {
            title: 'SMART Goals Framework',
            description: 'Create effective SMART goals',
            template: 'Act as a goal-setting expert. Create SMART goals for [OBJECTIVE] including: 1) Specific metrics 2) Measurement criteria 3) Achievability assessment 4) Relevance alignment 5) Time-bound deadlines 6) Progress tracking 7) Milestone definition 8) Success indicators.'
          },
          {
            title: 'OKR Development',
            description: 'Design effective OKRs',
            template: 'Act as an OKR specialist. Develop OKRs for [TEAM/DEPARTMENT] including: 1) Objective definition 2) Key results formulation 3) Success metrics 4) Progress tracking 5) Review cadence 6) Alignment strategy 7) Scoring method 8) Adjustment protocol.'
          }
        ]
      },
      {
        title: 'Focus & Deep Work',
        prompts: [
          {
            title: 'Deep Work Protocol',
            description: 'Design deep work routines',
            template: 'Act as a deep work coach. Create a deep work protocol for [ROLE/TASK] including: 1) Environment setup 2) Time blocking 3) Distraction management 4) Energy optimization 5) Recovery periods 6) Progress tracking 7) Adjustment triggers 8) Success metrics.'
          },
          {
            title: 'Focus Session Design',
            description: 'Structure effective focus sessions',
            template: 'Act as a productivity expert. Design focus sessions for [WORK_TYPE] including: 1) Session duration 2) Break intervals 3) Environment optimization 4) Progress tracking 5) Energy management 6) Distraction handling 7) Success metrics 8) Review process.'
          }
        ]
      },
      {
        title: 'Meeting Efficiency',
        prompts: [
          {
            title: 'Meeting Framework',
            description: 'Create efficient meeting structures',
            template: 'Act as a meeting efficiency expert. Design a meeting framework for [MEETING_TYPE] including: 1) Agenda structure 2) Time allocation 3) Role assignments 4) Decision protocol 5) Action item tracking 6) Follow-up process 7) Feedback loop 8) Success metrics.'
          },
          {
            title: 'Meeting Optimization',
            description: 'Optimize meeting effectiveness',
            template: 'Act as a meeting facilitator. Create an optimization plan for [MEETING_CATEGORY] including: 1) Pre-meeting preparation 2) Participant engagement 3) Time management 4) Decision-making process 5) Documentation method 6) Follow-up system 7) Effectiveness metrics 8) Improvement cycle.'
          }
        ]
      },
      {
        title: 'Workflow Optimization',
        prompts: [
          {
            title: 'Process Improvement',
            description: 'Optimize existing workflows',
            template: 'Act as a process improvement specialist. Create an optimization plan for [WORKFLOW_NAME] including: 1) Current state analysis 2) Bottleneck identification 3) Improvement opportunities 4) Implementation steps 5) Resource requirements 6) Timeline planning 7) Success metrics 8) Review process.'
          },
          {
            title: 'Automation Strategy',
            description: 'Develop automation strategies',
            template: 'Act as an automation expert. Design an automation strategy for [PROCESS_NAME] including: 1) Task analysis 2) Automation opportunities 3) Tool selection 4) Implementation steps 5) Training requirements 6) ROI calculation 7) Maintenance plan 8) Success metrics.'
          }
        ]
      }
    ]
  }
]; 