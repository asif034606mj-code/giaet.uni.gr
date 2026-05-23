import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini client
let aiClient: GoogleGenAI | null = null;
function getAi(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("WARNING: GEMINI_API_KEY environment variable is not defined. AI Study Assistant will fall back to smart local simulation.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey || "MOCK_KEY",
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return aiClient;
}

// REST Endpoint: AI Study Assistant API proxy
app.post("/api/study-helper", async (req, res) => {
  const { question, programContext, userContext } = req.body;
  if (!question) {
    return res.status(400).json({ error: "No question provided." });
  }

  const promptText = `
    Student context: ${userContext || "Global student"}
    Enrolled / Exploring academic program: ${programContext || "General engineering"}
    Question: "${question}"
  `;

  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Sane fallback simulation if someone has didn't configure their key yet
      const fallbackAnswers = [
        "In GIAET's curriculum, advanced manufacturing and engineering are driven by solid math. If you're studying Automation or Robotics, I highly recommend looking at module IEC 61131-3 for PLC ladder logic.",
        "Under Germany energy standards, decentralized smart grids must establish bi-directional frequency filters to stabilize loads. This is covered extensively in the Energy Technology BSc program (ET-401).",
        "Interesting query! For computer science, compiler parsing uses discrete set tables and lexical automata to translate logic inputs. Be sure to explore GIAET's virtual cloud terminal for hands-on deployment.",
        "Thermodynamic efficiency is bound by the Carnot Limit: η = 1 - (Tc / Th). In our BSc Mechanical Engineering curriculum (ME-203), you will simulate fluid dynamics and thermal fatigue with high precision."
      ];
      const randomAnswer = fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)];
      return res.json({
        text: `[Local Simulation Protocol - API Key Not Detected]\n\n${randomAnswer}\n\nOur full-stack route is successfully prepared! Configure your GEMINI_API_KEY secret in Settings -> Secrets for native live intelligence.`
      });
    }

    const ai = getAi();
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptText,
      config: {
        systemInstruction: "You are the GIAET Interactive AI Study Professor, an eminent academic advisor in Stuttgart. Answer the student's physics, engineering, automation, or software questions comprehensively yet concisely and beautifully formatted in Github-flavored Markdown. Promote high-precision STEM terms and encourage virtual labs when fitting."
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Academic simulation service timed out. Check your backend settings.", details: error.message });
  }
});

// Configure Vite integration
async function main() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[GIAET Server] Academic Web Application service actively deployed on http://localhost:${PORT}`);
  });
}

main().catch((err) => {
  console.error("Failed to launch full-stack GIAET engine:", err);
});
