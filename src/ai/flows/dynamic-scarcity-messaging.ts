'use server';
/**
 * @fileOverview This file defines a Genkit flow for generating dynamic scarcity messages.
 *
 * - generateScarcityMessage - A function that generates a dynamic scarcity message.
 * - GenerateScarcityMessageInput - The input type for the generateScarcityMessage function.
 * - GenerateScarcityMessageOutput - The return type for the generateScarcityMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateScarcityMessageInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  initialQuantity: z.number().describe('The initial quantity of the product.'),
  currentQuantity: z.number().describe('The current quantity of the product.'),
  timeRemaining: z.string().describe('The amount of time remaining for the offer.'),
});
export type GenerateScarcityMessageInput = z.infer<typeof GenerateScarcityMessageInputSchema>;

const GenerateScarcityMessageOutputSchema = z.object({
  scarcityMessage: z.string().describe('The dynamically generated scarcity message.'),
});
export type GenerateScarcityMessageOutput = z.infer<typeof GenerateScarcityMessageOutputSchema>;

export async function generateScarcityMessage(input: GenerateScarcityMessageInput): Promise<GenerateScarcityMessageOutput> {
  return generateScarcityMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateScarcityMessagePrompt',
  input: {schema: GenerateScarcityMessageInputSchema},
  output: {schema: GenerateScarcityMessageOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating compelling scarcity messages.

  Based on the following information, generate a short, persuasive scarcity message to encourage users to purchase the product.

  Product Name: {{{productName}}}
  Initial Quantity: {{{initialQuantity}}}
  Current Quantity: {{{currentQuantity}}}
  Time Remaining: {{{timeRemaining}}}

  The message should be concise and create a sense of urgency.
  Focus on the limited availability and the potential for missing out. Make it really short.
  Do not include any links or URLs in the output.
  Here are some examples:
  "Only a few left! Get yours before they're gone."
  "Time is running out! Secure your copy now."
  "Limited stock available. Don't miss out!"
  "Hurry, offer ends soon!"
  "Almost sold out! Act fast."
  `,
});

const generateScarcityMessageFlow = ai.defineFlow(
  {
    name: 'generateScarcityMessageFlow',
    inputSchema: GenerateScarcityMessageInputSchema,
    outputSchema: GenerateScarcityMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
