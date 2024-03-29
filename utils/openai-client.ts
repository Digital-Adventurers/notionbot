import { OpenAI } from 'langchain/llms';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI Credentials');
}

export const openai = new OpenAI({
  temperature: 0,
  maxTokens: 500,
  modelName: 'gpt-3.5-turbo',
});
