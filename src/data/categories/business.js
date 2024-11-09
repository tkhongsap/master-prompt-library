export const business = {
  title: 'Business',
  icon: '📊',
  level: 'category',
  subcategories: [
    {
      title: 'Strategy',
      prompts: [
        {
          id: 'business-model-canvas',
          title: 'Business Model Canvas',
          description: 'Create comprehensive business models',
          template: `Act as a business strategist. Create a Business Model Canvas for [BUSINESS_TYPE] including: 1) Value propositions 2) Customer segments 3) Revenue streams 4) Key resources 5) Cost structure 6) Key activities 7) Channels 8) Customer relationships 9) Key partners.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['business model', 'strategy', 'planning']
        },
        {
          id: 'strategic-plan',
          title: 'Strategic Plan',
          description: 'Develop strategic plans',
          template: `Act as a strategic planning consultant. Create a strategic plan for [ORGANIZATION] including: 1) Vision/mission 2) SWOT analysis 3) Strategic objectives 4) Key initiatives 5) Success metrics 6) Resource allocation 7) Timeline 8) Risk mitigation.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['strategy', 'planning', 'business']
        }
      ]
    }
  ]
}; 