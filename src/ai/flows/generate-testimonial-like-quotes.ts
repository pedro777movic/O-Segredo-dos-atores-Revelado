'use server';

/**
 * @fileOverview Generates testimonial-like quotes based on provided examples.
 *
 * - generateTestimonialLikeQuotes - A function that generates testimonial-like quotes.
 * - GenerateTestimonialLikeQuotesInput - The input type for the generateTestimonialLikeQuotes function.
 * - GenerateTestimonialLikeQuotesOutput - The return type for the generateTestimonialLikeQuotes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialLikeQuotesInputSchema = z.object({
  baseTestimonials: z
    .array(z.string())
    .describe('An array of existing testimonials to base the new quotes on.'),
  numberOfQuotes: z
    .number()
    .min(1)
    .max(5)
    .default(3)
    .describe('The number of testimonial-like quotes to generate.'),
});
export type GenerateTestimonialLikeQuotesInput = z.infer<
  typeof GenerateTestimonialLikeQuotesInputSchema
>;

const GenerateTestimonialLikeQuotesOutputSchema = z.object({
  quotes: z.array(z.string()).describe('The generated testimonial-like quotes.'),
});
export type GenerateTestimonialLikeQuotesOutput = z.infer<
  typeof GenerateTestimonialLikeQuotesOutputSchema
>;

export async function generateTestimonialLikeQuotes(
  input: GenerateTestimonialLikeQuotesInput
): Promise<GenerateTestimonialLikeQuotesOutput> {
  return generateTestimonialLikeQuotesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTestimonialLikeQuotesPrompt',
  input: {schema: GenerateTestimonialLikeQuotesInputSchema},
  output: {schema: GenerateTestimonialLikeQuotesOutputSchema},
  prompt: `You are an expert marketing copywriter specialized in writing highly believable social proof testimonials.

  Based on the following testimonials:

  {{#each baseTestimonials}}
  - "{{{this}}}"
  {{/each}}

  Generate {{numberOfQuotes}} new testimonial-like quotes that sound like they could have come from real users.  Make them concise and focus on the benefits of the underlying product.  The product helps men improve their sexual performance and confidence.
  Format the output as a JSON object containing a "quotes" field that contains an array of strings.
  Make sure the quotes are diverse and reflect different aspects of the product's value.
  `,
});

const generateTestimonialLikeQuotesFlow = ai.defineFlow(
  {
    name: 'generateTestimonialLikeQuotesFlow',
    inputSchema: GenerateTestimonialLikeQuotesInputSchema,
    outputSchema: GenerateTestimonialLikeQuotesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
