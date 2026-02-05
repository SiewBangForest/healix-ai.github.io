
import { GoogleGenAI, Type } from "@google/genai";

// Guideline compliance: create GoogleGenAI instance directly using process.env.API_KEY
// Always initialize Gemini client right before use with named apiKey parameter.
export const getGeminiResponse = async (prompt: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: "You are Healix AI, a compassionate and expert health & wellness coach. Provide personalized guidance, habit improvement suggestions, and symptom education. Keep advice non-medical and focus on lifestyle, nutrition, and mental habits. Be encouraging and concise.",
        temperature: 0.7,
      },
    });

    // Access the text property directly on GenerateContentResponse
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my wellness brain right now. Please try again in a moment!";
  }
};

export const generateScenarioResponse = async (scenario: string, choice: string) => {
  // Guideline compliance: The API key must be obtained exclusively from process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Scenario: ${scenario}. User chose: ${choice}. Explain the physiological impact of this choice and give a better alternative if needed.`,
      config: {
        systemInstruction: "You are a wellness educator. Analyze choices in a health scenario and explain their impact on the body and mind in simple, engaging terms.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { type: Type.STRING },
            bodyImpact: { type: Type.STRING },
            betterAlternative: { type: Type.STRING }
          },
          required: ["analysis", "bodyImpact", "betterAlternative"]
        }
      }
    });

    // Access the text property and parse the JSON string result
    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Gemini Scenario Error:", error);
    return null;
  }
};
