export const sales = {
  title: 'Sales',
  icon: '💼',
  level: 'category',
  subcategories: [
    {
      title: 'Cold Outreach',
      prompts: [
        {
          id: 'cold-email-sequence',
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

Once you share your details, I'll help you write emails that get responses, not eye rolls.`,
          version: '1.0',
          lastUpdated: '2024-03-21',
          tags: ['email', 'outreach', 'sales']
        }
      ]
    }
    // ... other subcategories
  ]
}; 