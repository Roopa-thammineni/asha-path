
import { BusinessIdea, Language } from '@/types';

// Replace with your valid API Key from Google AI Studio
const GEMINI_API_KEY = 'AIzaSyA3vvvbKo1aFNTjoQTU_LDFs2LxUbh1GLE'; 
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function getBusinessSuggestions(
  location: string,
  budget: string,
  skills: string[],
  language: Language
): Promise<Partial<BusinessIdea>[]> {
  
  // Safety check to ensure the function handles missing keys gracefully
  if (!GEMINI_API_KEY || GEMINI_API_KEY.includes('AIzaSyA3vvvbKo1aFNTjoQTU_LDFs2LxUbh1GLE')) {
    throw new Error("API Key not configured.");
  }

  const prompt = `
    You are an expert business consultant for women in India.
    Based on this profile, suggest 3 realistic micro-business ideas.
    
    Profile:
    - Location: ${location}
    - Budget: ${budget}
    - Skills: ${skills.join(', ')}
    
    Response Requirements:
    - Respond ONLY with a valid JSON array.
    - Each object must have: name, estimatedIncome, difficulty, demand, and description.
    - Language: ${language === 'hi' ? 'Hindi' : language === 'te' ? 'Telugu' : 'English'}.
  `;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { 
          response_mime_type: "application/json", // Correct field for v1 API
          temperature: 0.7 
        }
      })
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(errorBody.error?.message || "AI Connection Failed");
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
      return JSON.parse(data.candidates[0].content.parts[0].text);
    }
    
    throw new Error("Invalid AI response format");
  } catch (error) {
    console.error("Gemini Service Error:", error);
    throw error; 
  }
}