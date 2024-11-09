export const productivity = {
  title: 'Productivity',
  icon: '⚡',
  level: 'category',
  subcategories: [
    {
      title: 'Time Management',
      prompts: [
        {
          id: 'daily-planning-system',
          title: 'Daily Planning System',
          description: 'Create effective daily planning systems',
          template: `Act as a time management expert. Design a daily planning system for [ROLE/PROFESSION] including: 1) Priority setting 2) Time blocking 3) Energy management 4) Buffer planning 5) Review process 6) Contingency planning.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['planning', 'time management', 'productivity']
        },
        {
          id: 'time-blocking-template',
          title: 'Time Blocking Template',
          description: 'Design effective time blocking schedules',
          template: `Act as a productivity coach. Create a time blocking template for [SCHEDULE_TYPE] including: 1) Core work blocks 2) Focus periods 3) Break scheduling 4) Flexibility allowance 5) Review intervals 6) Energy optimization.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['time blocking', 'scheduling', 'productivity']
        }
      ]
    },
    {
      title: 'Task Management',
      prompts: [
        {
          id: 'task-prioritization-matrix',
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

Share your task load and let's make it manageable!`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['task management', 'prioritization', 'productivity']
        },
        {
          id: 'project-planning',
          title: 'Project Planning Framework',
          description: 'Create comprehensive project plans',
          template: `You are an expert project planner with extensive experience...`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['project management', 'planning', 'task management', 'team coordination']
        }
      ]
    },
    {
      title: 'Goal Setting',
      prompts: [
        {
          id: 'smart-goals-framework',
          title: 'SMART Goals Framework',
          description: 'Create effective SMART goals',
          template: `Act as a goal-setting expert. Create SMART goals for [OBJECTIVE] including: 1) Specific metrics 2) Measurement criteria 3) Achievability assessment 4) Relevance alignment 5) Time-bound deadlines 6) Progress tracking 7) Milestone definition 8) Success indicators.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['goals', 'planning', 'productivity']
        }
      ]
    },
    {
      title: 'Focus & Deep Work',
      prompts: [
        {
          id: 'deep-work-protocol',
          title: 'Deep Work Protocol',
          description: 'Design deep work routines',
          template: `Act as a deep work coach. Create a deep work protocol for [ROLE/TASK] including: 1) Environment setup 2) Time blocking 3) Distraction management 4) Energy optimization 5) Recovery periods 6) Progress tracking 7) Adjustment triggers 8) Success metrics.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['deep work', 'focus', 'productivity']
        }
      ]
    }
  ]
}; 