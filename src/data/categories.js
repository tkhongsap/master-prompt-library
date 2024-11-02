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
            title: 'Blog Content Strategy',
            description: 'Create engaging blog content that drives traffic',
            template: 'Act as a content marketing strategist. Help me create a blog post about [TOPIC] that will engage readers and drive traffic. Consider SEO best practices, reader engagement, and conversion optimization.'
          },
          {
            title: 'Social Media Campaign',
            description: 'Design viral social media campaigns',
            template: 'Act as a social media marketing expert. Help me create a viral campaign for [PLATFORM] that will increase engagement and reach. Include hashtag strategy and content ideas.'
          }
        ]
      },
      {
        title: 'Brand Strategy',
        prompts: [
          {
            title: 'Brand Voice Development',
            description: 'Create a unique and consistent brand voice',
            template: 'Act as a brand strategist. Help me develop a unique brand voice for [COMPANY] that reflects our values and resonates with our target audience.'
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
        title: 'Sales Scripts',
        prompts: [
          {
            title: 'Cold Email Template',
            description: 'Write compelling cold emails that get responses',
            template: 'Act as a sales expert. Help me write a cold email template for [PRODUCT/SERVICE] that will grab attention and generate responses.'
          },
          {
            title: 'Sales Call Script',
            description: 'Create effective sales call scripts',
            template: 'Act as a sales trainer. Create a sales call script for [PRODUCT/SERVICE] that addresses common objections and guides the conversation to close.'
          }
        ]
      },
      {
        title: 'Negotiation',
        prompts: [
          {
            title: 'Price Negotiation',
            description: 'Handle price objections effectively',
            template: 'Act as a negotiation expert. Provide strategies and scripts for handling price objections for [PRODUCT/SERVICE] while maintaining value proposition.'
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
        title: 'Creative Writing',
        prompts: [
          {
            title: 'Story Development',
            description: 'Create compelling story structures',
            template: 'Act as a creative writing coach. Help me develop a story outline for [GENRE] that includes character development, plot structure, and key story beats.'
          },
          {
            title: 'Dialogue Writing',
            description: 'Write natural, engaging dialogue',
            template: 'Act as a dialogue expert. Help me write realistic dialogue for a scene where [SCENE DESCRIPTION].'
          }
        ]
      },
      {
        title: 'Business Writing',
        prompts: [
          {
            title: 'Professional Emails',
            description: 'Write clear, effective business emails',
            template: 'Act as a business writing expert. Help me write a professional email for [SITUATION] that is clear, concise, and achieves the desired outcome.'
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
            title: 'Business Plan',
            description: 'Create comprehensive business plans',
            template: 'Act as a business strategist. Help me create a business plan outline for [BUSINESS TYPE] that covers market analysis, financial projections, and growth strategy.'
          },
          {
            title: 'SWOT Analysis',
            description: 'Conduct detailed SWOT analyses',
            template: 'Act as a strategic consultant. Help me conduct a SWOT analysis for [COMPANY/PROJECT] that identifies key opportunities and threats.'
          }
        ]
      },
      {
        title: 'Operations',
        prompts: [
          {
            title: 'Process Optimization',
            description: 'Streamline business processes',
            template: 'Act as an operations expert. Help me optimize the process for [BUSINESS PROCESS] to improve efficiency and reduce costs.'
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
        title: 'Data Analysis',
        prompts: [
          {
            title: 'Data Interpretation',
            description: 'Extract insights from data',
            template: 'Act as a data analyst. Help me interpret [TYPE OF DATA] to identify key trends and actionable insights.'
          },
          {
            title: 'KPI Development',
            description: 'Create effective KPI frameworks',
            template: 'Act as a metrics specialist. Help me develop KPIs for [BUSINESS AREA] that align with business objectives and provide actionable insights.'
          }
        ]
      },
      {
        title: 'Reporting',
        prompts: [
          {
            title: 'Executive Dashboard',
            description: 'Design effective executive dashboards',
            template: 'Act as a business intelligence expert. Help me design an executive dashboard for [BUSINESS AREA] that highlights key metrics and insights.'
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
            title: 'Daily Planning',
            description: 'Create effective daily schedules and routines',
            template: 'Act as a productivity coach. Help me create a daily schedule that maximizes productivity and maintains work-life balance.'
          },
          {
            title: 'Task Prioritization',
            description: 'Prioritize tasks effectively',
            template: 'Act as a productivity expert. Help me prioritize my tasks using proven methodologies like the Eisenhower Matrix for [LIST OF TASKS].'
          }
        ]
      },
      {
        title: 'Workflow Optimization',
        prompts: [
          {
            title: 'Automation Strategy',
            description: 'Identify and automate repetitive tasks',
            template: 'Act as an automation specialist. Help me identify opportunities to automate [WORK PROCESS] and suggest tools and approaches.'
          }
        ]
      }
    ]
  }
]; 