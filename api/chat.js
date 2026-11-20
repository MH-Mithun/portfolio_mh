// Vercel serverless function: keeps your Anthropic API key private.
// Set ANTHROPIC_API_KEY in Vercel > Project > Settings > Environment Variables.
const MODEL = "claude-haiku-5-5"; // change to "claude-sonnet-5-5" for higher quality

module.exports = async (req, res) => {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  try {
    const { system, messages } = req.body || {};
    if (typeof system !== "string" || !Array.isArray(messages) || !messages.length) {
      return res.status(400).json({ error: "Bad request" });
    }
    // Basic limits so nobody can abuse your key
    const clean = messages.slice(-12).map(m => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content || "").slice(0, 500)
    }));
    if (clean[0].role !== "user") clean.shift();
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 300, system: system.slice(0, 5000), messages: clean })
    });
    if (!r.ok) return res.status(502).json({ error: "Upstream error" });
    const data = await r.json();
    const reply = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("\n");
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: "Server error" });
  }
};
