export const marketing = {
    "title": "Marketing",
    "icon": "📢",
    "level": "category",
    "subcategories": [
      {
        "title": "Brand Strategy",
        "prompts": [
          {
            "id": "brand-tagline-creation",
            "title": "Brand Tagline Creation",
            "description": "Generate impactful and memorable taglines for a new brand based on provided context and examples of successful taglines, including those from Thai products.",
            "template": `Act like a world-renowned brand strategist with over two decades of experience in crafting compelling brand narratives and innovative marketing strategies.
  
  You possess a deep understanding of various industries and have a unique ability to distill a brand's essence into memorable taglines. Your expertise encompasses a creative process that includes thorough market research, understanding the brand's core values, and identifying its unique selling proposition.
  
  Throughout your career, you have transformed numerous brands into household names by developing taglines that resonate deeply with their target audiences. Your work is characterized by creativity, insightfulness, and the ability to capture a brand's identity in a few powerful words.
  
  **Context of the Brand:**
  
  ### context ###
  Brand Name: Midnight Brew
  Bold Flavor: Experience the intense, deep flavors of our carefully selected black tea leaves.
  Pure Ingredients: Made with 100% natural black tea leaves. No additives or preservatives.
  Sustainably Sourced: Our tea is ethically sourced from the finest tea gardens, ensuring sustainability and fairness.
  Eco-Friendly Packaging: Packaged in recyclable materials because we love the planet as much as we love tea.
  Versatile Enjoyment: Perfect for a morning kickstart, an afternoon pick-me-up, or a cozy evening wind-down.
  Health Benefits: Rich in antioxidants, our tea supports overall wellness and vitality.
  Easy Preparation: Whether you like it hot or cold, our tea brews perfectly every time, offering convenience without compromising on taste.
  Community Connection: A portion of every purchase goes towards supporting tea-growing communities around the world.
  ### context ###
  
  **Examples of Successful Taglines:**
  
  ### taglines ###
  "Just Do It" - Nike
  "I'm Lovin' It" - McDonald's
  "Think Different" - Apple
  "Because You're Worth It" - L'Oréal
  "Got Milk?" - American Milk Processors
  "Don't Leave Home Without It" - American Express
  "The Breakfast of Champions" - Wheaties
  "It's Finger Lickin' Good" - KFC
  "Melts in Your Mouth, Not in Your Hands" - M&M's
  "Snap! Crackle! Pop!" - Rice Krispies
  "They're Grrreat!" - Frosted Flakes
  "Have a Break, Have a Kit Kat" - Kit Kat
  "Red Bull Gives You Wings" - Red Bull
  "Can You Hear Me Now? Good." - Verizon
  "There Are Some Things Money Can't Buy. For Everything Else, There's MasterCard." - MasterCard
  "The Happiest Place on Earth" - Disneyland
  "What Happens Here, Stays Here" - Las Vegas
  "America Runs on Dunkin'" - Dunkin' Donuts
  "A Diamond is Forever" - De Beers
  "Taste the Rainbow" - Skittles
  "Meedee" - Thai Beverage
  "น้ำใจไทย" (Thai Hospitality) - Various Thai Brands
  ### taglines ###
  
  **Instructions:**
  
  1. **Chain of Thought (COT):**
     - **Analyze the Brand:**
       - **Mission & Vision:** Understand Midnight Brew's mission and vision to align the tagline with its long-term goals.
       - **Target Audience:** Identify and analyze the demographics, preferences, and behaviors of Midnight Brew’s primary audience.
       - **Market Positioning:** Assess how Midnight Brew is positioned in the market relative to competitors.
       - **Unique Selling Proposition (USP):** Determine what sets Midnight Brew apart from other tea brands.
       - **Emotional & Rational Benefits:** Explore both the emotional connections and rational advantages Midnight Brew offers to its customers.
  
  2. **Generate Taglines:**
     - **Creativity & Memorability:** Ensure each tagline is creative, easy to remember, and succinct.
     - **Authenticity:** The tagline should authentically reflect Midnight Brew’s values and appeal.
     - **Variety:** Provide a diverse range of options to choose from, ensuring each is unique.
  
  3. **Include Thai Taglines:**
     - Incorporate examples from Thai products to add cultural diversity and broaden the creative perspective.
  
  4. **Iterative Refinement:**
     - After generating the taglines, prompt the user to select their preferred options.
     - Iterate on the selected taglines to refine and perfect them.
  
  **Task:**
  
  Using your creative expertise and strategic thinking, generate a comprehensive list of potential taglines that encapsulate Midnight Brew’s essence. Each tagline should be impactful, memorable, and succinct, conveying the brand's values and appeal to its target audience in a way that's both authentic and compelling. Ensure each tagline is unique to provide a variety of options to choose from.
  
  **Next Steps:**
  
  After presenting the taglines, ask the user which tagline numbers they prefer. Use their selections to iterate and brainstorm new variations, fine-tuning the options to craft the best possible tagline for Midnight Brew.
  
  Let's dive in and craft exceptional taglines step-by-step.`,
            "version": "1.2",
            "lastUpdated": "2024-11-09",
            "tags": ["brand", "tagline", "strategy", "marketing", "Thai", "COT"]
          }
        ]
      },
      {
        "title": "Social Media",
        "prompts": [
          {
            "id": "perfect-hook",
            "title": "Perfect Hook",
            "description": "Generate 10 creative and impactful hook sentences for a social media post, avoiding common clichés, emojis, and questions, and ensuring simplicity and originality.",
            "template": `Act like an experienced social media expert with more than 20 years of experience in digital marketing, capturing people's attention & writing copies.
  
  I want you to write the perfect hook for my post.
  
  My post is missing a hook, which is the first (or three first) line(s) of the post.
  
  You know well that the hook is 80% of the result of a post. It is essential for my job that my hook is perfect.
  
  Here's my post between angle brackets <>:
  
  <post>
  </post>
  
  I want you to generate 10 different potential hooks.
  
  Be creative. Do not use emojis. Do not ask questions. Write a normal sentence (not all words with capital letters). Be & think outside of the box. Do not use what everyone overused as hooks.
  
  Some of the hooks are one-liners, some are three-liners (with line breaks). Do both.
  
  Hooks are short sentences. Impactful. 
  
  If the sentence is long, cut it into two and use a line break.
  
  Remember, avoid fancy jargon, use conversational middle-school English. 
  
  Let's approach this step-by-step with precision and creativity.`,
            "version": "1.0",
            "lastUpdated": "2024-11-09",
            "tags": ["social media", "hook", "marketing"]
          }
        ]
      },
      {
        "title": "Post Analysis",
        "prompts": [
          {
            "id": "post-analysis",
            "title": "Analyze Marketing Posts",
            "description": "Analyze provided marketing posts to identify key elements, strengths, and areas for improvement, and offer actionable recommendations.",
            "template": `Act like an experienced marketing strategist specializing in post-performance analysis and content optimization. With over a decade of experience, you excel at identifying what makes posts effective and providing actionable recommendations to improve future campaigns.
  
  Your objective is to analyze and review the provided marketing posts. Focus on identifying their strengths, weaknesses, and areas for improvement, as well as offering practical suggestions to enhance engagement and reach.
  
  Here are the posts for your analysis, provided between angle brackets “<>”:
  
  <post 1>
  </post 1>
  
  <post 2>
  </post 2>
  
  <post 3>
  </post 3>
  
  <post 4>
  </post 4>
  
  **Your Analysis Task:**
  
  For each provided post, create a comprehensive analysis covering the following:
  
  1. **Key Elements:**
     - **Niche & Topic:** Identify the post's niche and core topic.
     - **Objective:** What was the post trying to achieve? (e.g., engagement, lead generation, brand awareness, etc.)
     - **Hook:** Evaluate the effectiveness of the post’s opening lines and their ability to grab attention.
     - **Tone & Voice:** Was the tone aligned with the brand’s personality? Was it consistent and engaging?
     - **Engagement Drivers:** Highlight the elements that encouraged interaction (e.g., visuals, storytelling, call-to-action).
  
  2. **Strengths:**
     - What worked well in this post? Identify elements such as compelling storytelling, clear structure, or emotional resonance.
  
  3. **Weaknesses:**
     - Highlight areas for improvement, such as unclear messaging, weak calls-to-action, or overly complex language.
  
   4. **Audience Fit:**
      - Was the content relevant to the target audience? Provide insights into how well the post aligns with the audience's preferences and interests.
  
   5. **Performance Insights:**
      - If performance data is available (e.g., likes, comments, shares), interpret the numbers and their implications for the post's success.
  
   6. **Recreation Guide:**
      - Answer: "How can I easily recreate this post?"
      - Provide a step-by-step guide for creating a similar post, breaking it down into clear components.
  
  **Additional Task:**
  
  Once the analysis for each post is complete, summarize your findings and create actionable recommendations for improving future marketing posts. Ensure your suggestions are practical and aligned with the goals of the campaign.
  
  Let’s analyze and refine each post with actionable precision.`,
            "version": "1.0",
            "lastUpdated": "2024-11-09",
            "tags": ["post analysis", "content strategy", "marketing"]
          }
        ]
      }
    ]
  }
;
