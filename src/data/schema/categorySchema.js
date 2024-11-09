export const categorySchema = {
  title: {
    type: String,
    required: true,
    maxLength: 50
  },
  icon: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['category'],
    required: true
  },
  subcategories: [{
    title: {
      type: String,
      required: true
    },
    prompts: [{
      id: {
        type: String,
        required: true,
        unique: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      template: {
        type: String,
        required: true
      },
      version: {
        type: String,
        required: true
      },
      lastUpdated: {
        type: Date,
        required: true
      },
      tags: {
        type: Array,
        of: String
      }
    }]
  }]
}; 