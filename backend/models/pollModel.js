const mongoose = require('mongoose');
const asyncHandler = require('your-async-handler-library'); // Replace with your async handler library

const optionSchema = {
  type: String,
  required: [true, 'Please add a text value'],
};

const pollSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    question: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
);

// Dynamically add options to pollSchema
for (let i = 1; i <= 3; i++) {
  const optionField = `option${i}`;
  pollSchema.add({ [optionField]: optionSchema });
}

const Poll = mongoose.model('Poll', pollSchema);

const setPoll = asyncHandler(async (req, res) => {
  const requiredFields = ['question'];
  const options = [];

  // Validate required fields
  for (const field of requiredFields) {
    if (!req.body[field]) {
      res.status(400);
      throw new Error(`Please add a text field for ${field}`);
    }
  }

  // Collect options dynamically
  for (const key in req.body) {
    if (key.startsWith('option')) {
      options.push(req.body[key]);
    }
  }

  // Create poll data
  const pollData = {
    question: req.body.question,
    user: req.user.id,
  };

  // Add options to pollData
  options.forEach((option, index) => {
    const optionField = `option${index + 1}`;
    pollData[optionField] = option;
  });

  const poll = await Poll.create(pollData);

  res.status(200).json(poll);
});

export default setPoll;
