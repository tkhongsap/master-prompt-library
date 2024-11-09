export const writing = {
  title: 'Writing',
  icon: '✍️',
  level: 'category',
  subcategories: [
    {
      title: 'Content Writing',
      prompts: [
        {
          id: 'blog-post-structure',
          title: 'Blog Post Structure',
          description: 'Create engaging blog content structure',
          template: `Act as a content writing expert. Help me create a blog post about [TOPIC] including: 1) Attention-grabbing headline options 2) Engaging introduction with hook 3) Main points outline 4) Supporting evidence needed 5) Call-to-action conclusion 6) SEO considerations. Target audience is [TARGET_AUDIENCE].`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['blog', 'content', 'structure']
        },
        {
          id: 'content-calendar',
          title: 'Content Calendar',
          description: 'Plan content calendar effectively',
          template: `Act as a content strategist. Help me create a content calendar for [TIMEFRAME] including: 1) Content themes 2) Content types mix 3) Publishing schedule 4) Distribution channels 5) Success metrics 6) Resource requirements. Focus on [BUSINESS_GOALS].`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['content', 'planning', 'calendar']
        }
      ]
    }
  ]
}; 