export const dataAnalytics = {
  title: 'Data Analytics',
  icon: '📈',
  level: 'category',
  subcategories: [
    {
      title: 'Data Visualization',
      prompts: [
        {
          id: 'dashboard-design',
          title: 'Dashboard Design',
          description: 'Create effective data dashboards',
          template: `Act as a data visualization expert. Design a dashboard for [DATA_TYPE] including: 1) Key metrics selection 2) Chart types 3) Layout design 4) Interactivity features 5) Color scheme 6) User navigation. Consider [AUDIENCE] and [OBJECTIVES].`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['dashboard', 'visualization', 'data']
        }
      ]
    }
  ]
}; 