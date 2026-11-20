
const CONFIG = {
  name: "Mithun Hossain",
  title: "Software Engineering Student",
  tagline: "Software Engineering student building practical software with C, Java, JavaScript, HTML, CSS, and SQL. I enjoy solving problems, learning new technologies, and turning ideas into useful projects.",
  university: "Daffodil International University",
  degree: "B.Sc. in Software Engineering",
  cgpa: "3.84 / 4.00",
  email: "mhmithun212@gmail.com",
  github: "https://github.com/MH-Mithun",
  linkedin: "https://www.linkedin.com/in/mithun-hossain-3ba704365/",
  photo: "image/image.png",              // optional: "photo.jpg" (put the image next to index.html)
  cvLink: "assets/cv.pdf",   // your CV file (replace assets/cv.pdf) or a full link
  cvName: "Mithun_Hossain_CV.pdf",       // file name the visitor downloads
  location: "Dhaka, Bangladesh",
  bio: "I am a motivated Software Engineering student at Daffodil International University with a average CGPA of 3.84 out of 4.00. I have a strong foundation in C, Java, JavaScript, HTML, CSS, and SQL. I am familiar with Object-Oriented Programming, Data Structures, Algorithms, Database Management, and Web Development. I enjoy building practical projects and solving programming problems. I have experience working with tools such as Visual Studio Code and IntelliJ IDEA. I am passionate about learning new technologies and improving my technical skills. I am interested in frontend, backend, and full-stack development, and I value teamwork, creativity, and continuous learning.",
  goal: "To become a skilled Software Engineer and contribute to real-world software development projects.",
  seeking: "I am actively seeking opportunities to gain professional experience and grow as a software developer."
};

/* MY JOURNEY: copy one object to add an update. category: Achievement | Project | Learning | Event */
const journeyData = [
  { date: "2026-11-10", title: "Started a full-stack project", sub: "Personal project", category: "Project", text: "Began building a web app with a JavaScript front end and a SQL database.", tags: ["JavaScript", "SQL"] },
  { date: "2026-10-02", title: "Reached a 3.84 CGPA", sub: "Daffodil International University", category: "Achievement", text: "Kept a strong academic record in the Software Engineering program.", tags: ["Academics"] },
  { date: "2026-08-18", title: "Learning backend development", sub: "Self-study", category: "Learning", text: "Exploring server-side concepts and REST API design.", tags: ["Backend", "APIs"] },
  { date: "2026-06-25", title: "Joined a programming event", sub: "University event", category: "Event", text: "Took part in a coding session and practiced algorithm problems with peers.", tags: ["Algorithms"] }
];

const skills = [
  { group: "Languages", bars: [["C", 85], ["Java", 88], ["JavaScript", 80], ["SQL", 82]] },
  { group: "Web", bars: [["HTML", 92], ["CSS", 85]] },
  { group: "Concepts", badges: ["OOP", "Data Structures", "Algorithms", "DBMS", "Web Development"] },
  { group: "Tools", badges: ["VS Code", "IntelliJ IDEA" ,"XAMPP", "Git & GitHub","Figma"] }
];

const projects = [
  { title: "Ride Sharing System", text: "It solves the problem of finding a ride quickly and efficiently.", stack: ["Java", "SQL"],image: "image/rideshare.png", github: "https://github.com/MH-Mithun/Ride_Sharing_System", demo: "#" },
  { title: "Sneakers E-commerce", text: "An online store for buying and selling sneakers.", stack: ["HTML", "CSS", "JavaScript"],image: "image/sneakers.png", github: "https://github.com/MH-Mithun/Sneakers-E-Commerce", demo: "#" },
  { title: "Portfolio Website", text: "A personal website to showcase my projects and skills.", stack: ["C", "Algorithms"],image: "image/protfolio.png", github: "https://github.com/MH-Mithun/Portfolio", demo: "#" }
];


const focus = [
  { t: "AI & Machine Learning", d: "Research and development in artificial intelligence and machine learning." },
  { t: "System Design and Architecture", d: "Designing and implementing scalable software systems." },
  { t: "Full-stack", d: "Connecting interface, logic, and data into complete working projects." }
];

const certs = [
  { org: "Tech Academy", title: "UI/UX Design", date: "June 2024" },
  { org: "Programming Hero", title: "Advanced Web Development", date: "June 2025" }
];
const langs = ["Bangla", "English", "Hindi"];
const interests = ["Coding", "Problem solving", "Learning new technologies","Gaming & Esports","Entrepreneurship & Startup Ideas"];
const achievements = {
  stats: [["3.84", "CGPA out of 4.00"], [skills.flatMap(g => g.bars || []).length, "Languages and web skills"], [projects.length, "Projects built"], [certs.length, "Certificates earned"]],
  cards: [
    { t: "Strong academic record", d: "Maintaining a CGPA of 3.84 out of 4.00 in Software Engineering at Daffodil International University.", tags: ["CGPA 3.84"] },
    { t: "Hands-on project work", d: "Building practical projects with Java, JavaScript, HTML, CSS, and SQL.", tags: ["Java", "Web"] },
    { t: "Teamwork and learning", d: "Collaborating with others and improving my skills through practice.", tags: ["Teamwork"] }
  ]
};

const starters = ["What are your skills?", "Tell me about your education", "Are you open to internships?"];

/* Chatbot instructions: it only uses the info above */
const SYSTEM_PROMPT = `You are the friendly personal assistant on ${CONFIG.name}'s portfolio website. Answer visitors' questions about ${CONFIG.name} using ONLY the information below. Be concise (1 to 4 sentences). If the answer is not in the information, say: "I don't have that information, please contact ${CONFIG.name} directly."
INFO: ${CONFIG.title} at ${CONFIG.university}, ${CONFIG.degree}, CGPA ${CONFIG.cgpa}. Location: ${CONFIG.location}. Email: ${CONFIG.email}. GitHub: ${CONFIG.github}. LinkedIn: ${CONFIG.linkedin}.
Bio: ${CONFIG.bio}
Goal: ${CONFIG.goal} ${CONFIG.seeking}
Skills: ${skills.map(s => s.group + ": " + (s.bars ? s.bars.map(b => b[0]).join(", ") : s.badges.join(", "))).join("; ")}.
Projects: ${projects.map(p => p.title + " (" + p.stack.join(", ") + "): " + p.text).join(" | ")}
Certificates: ${certs.map(c => c.title).join("; ")}. Languages: ${langs.join(", ")}. Interests: ${interests.join(", ")}.
Recent updates: ${journeyData.map(j => j.date + " " + j.title).join("; ")}.`;

/* =====================================================
   SITE LOGIC (no need to edit below)
   ===================================================== */
const $ = id => document.getElementById(id);
const el = (t, c, txt) => { const e = document.createElement(t); if (c) e.className = c; if (txt != null) e.textContent = txt; return e; };
const icon = id => `<svg class="i" aria-hidden="true"><use href="#${id}"/></svg>`;

document.querySelectorAll("[data-bind=name]").forEach(n => n.textContent = CONFIG.name);
document.title = CONFIG.name + " | " + CONFIG.title;
$("role").textContent = CONFIG.title + " at " + CONFIG.university;
$("tagline").textContent = CONFIG.tagline;
$("bio").textContent = CONFIG.bio;
$("goal").textContent = CONFIG.goal;
["cv", "footCv"].forEach(id => { const a = $(id); a.href = CONFIG.cvLink; a.setAttribute("download", CONFIG.cvName); });
$("uni").textContent = CONFIG.university;
$("degree").textContent = CONFIG.degree;
$("cgpa").textContent = "CGPA: " + CONFIG.cgpa;
$("yr").textContent = new Date().getFullYear();

const socials = [["gh", "GitHub", CONFIG.github], ["li", "LinkedIn", CONFIG.linkedin], ["ml", "Email", "mailto:" + CONFIG.email]];
$("social").innerHTML = socials.map(s => `<a href="${s[2]}" aria-label="${s[1]}" target="_blank" rel="noopener">${icon(s[0])}</a>`).join("");
$("clinks").innerHTML = socials.map(s => `<a href="${s[2]}" target="_blank" rel="noopener">${icon(s[0])}<span>${s[1]}</span></a>`).join("");

const langCount = (skills[0].bars || []).length;
achievements.stats.forEach(f => {
  const d = el("div", "stat"); d.append(el("b", "", f[0]), el("span", "", f[1])); $("facts").append(d);
});

/* Journey */
const cats = ["All", "Achievement", "Project", "Learning", "Event"];
let activeCat = "All";
const fmt = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
function renderJourney() {
  const list = journeyData.filter(j => activeCat === "All" || j.category === activeCat).sort((a, b) => b.date.localeCompare(a.date));
  const t = $("timeline"); t.innerHTML = "";
  if (!list.length) { t.append(el("li", "empty", "No updates in this category yet.")); return; }
  list.forEach(j => {
    const li = el("li", "entry"), m = el("div", "meta"); li.dataset.cat = j.category;
    m.append(el("time", "", fmt(j.date)), el("span", "pill", j.category));
    li.append(m, el("h3", "", j.title));
    if (j.sub) li.append(el("p", "sub", j.sub));
    li.append(el("p", "", j.text));
    if (j.tags) { const s = el("div", "stack"); j.tags.forEach(x => s.append(el("span", "", x))); li.append(s); } t.append(li);
  });
}
cats.forEach(c => {
  const b = el("button", "chip", c); b.setAttribute("aria-pressed", c === "All");
  b.onclick = () => { activeCat = c; $("filters").querySelectorAll(".chip").forEach(x => x.setAttribute("aria-pressed", x === b)); renderJourney(); };
  $("filters").append(b);
});
renderJourney();

/* Skills */
skills.forEach(g => {
  const c = el("div", "card"); c.append(el("div", "ico", g.group[0]), el("h3", "", g.group));
  if (g.bars) g.bars.forEach(b => {
    const w = el("div", "bar"), top = el("div"), tr = el("div", "track"), f = el("div", "fill");
    top.append(el("span", "", b[0]), el("span", "", b[1] + "%")); f.dataset.w = b[1]; tr.append(f); w.append(top, tr); c.append(w);
  });
  else { const w = el("div", "badges"); g.badges.forEach(b => w.append(el("span", "badge", b))); c.append(w); }
  $("skillGrid").append(c);
});

/* Projects and experience */
projects.forEach(p => {
  const c = el("div", "card proj"); const th = el("div", "thumb");
if (p.image) {
  th.classList.add("has-img");
  const im = el("img"); im.src = p.image; im.alt = p.title + " screenshot"; im.loading = "lazy";
  im.onerror = () => { th.classList.remove("has-img"); th.textContent = "</>"; };
  th.append(im);
} else th.textContent = "</>";
c.append(th, el("h3", "", p.title), el("p", "", p.text));
  const s = el("div", "stack"); p.stack.forEach(x => s.append(el("span", "", x)));
  const b = el("div", "btns");
  [["GitHub", p.github, "btn ghost sm"], ["Live demo", p.demo, "btn sm"]].forEach(x => { const a = el("a", x[2], x[0]); a.href = x[1]; a.target = "_blank"; a.rel = "noopener"; b.append(a); });
  c.append(s, b); $("projGrid").append(c);
});

/* Contact form opens the visitor's email app */
$("form").onsubmit = e => {
  e.preventDefault(); const f = e.target;
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + f.n.value)}&body=${encodeURIComponent(f.m.value + "\n\nFrom: " + f.n.value + " (" + f.e.value + ")")}`;
};

/* Theme */
const root = document.documentElement;
try { const s = localStorage.getItem("theme"); if (s) root.dataset.theme = s; } catch (e) {}
$("theme").onclick = () => {
  const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches;
  root.dataset.theme = dark ? "light" : "dark";
  try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
};

/* Active link, reveal, skill bars */
const links = [...document.querySelectorAll("#links a")];
const io = new IntersectionObserver(es => es.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  en.target.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%");
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(r => io.observe(r));
const so = new IntersectionObserver(es => es.forEach(en => {
  if (en.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section").forEach(s => so.observe(s));

/* Chatbot (calls /api/chat, which holds your API key on the server) */
let history = [];
const chat = $("chat"), msgs = $("msgs");
function bubble(txt, who) { const m = el("div", "m " + who, txt); msgs.append(m); msgs.scrollTop = msgs.scrollHeight; return m; }
function greet() { msgs.innerHTML = ""; history = []; $("starters").style.display = "flex"; bubble(`Hi! I'm ${CONFIG.name}'s assistant. Ask me about skills, education, projects, or goals.`, "bot"); }
function toggleChat(open) { chat.classList.toggle("open", open); $("chatToggle").setAttribute("aria-expanded", open); if (open) $("cin").focus(); }
$("chatToggle").onclick = () => toggleChat(!chat.classList.contains("open"));
$("close").onclick = () => { toggleChat(false); $("chatToggle").focus(); };
$("clear").onclick = greet;
starters.forEach(q => { const b = el("button", "", q); b.onclick = () => ask(q); $("starters").append(b); });
async function ask(q) {
  q = q.trim(); if (!q) return;
  $("cin").value = ""; $("starters").style.display = "none";
  bubble(q, "me"); history.push({ r: "Visitor", t: q });
  const typing = el("div", "m bot dots"); typing.innerHTML = "<span></span><span></span><span></span>"; msgs.append(typing); msgs.scrollTop = msgs.scrollHeight;
  let reply;
  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ system: SYSTEM_PROMPT, messages: history.map(h => ({ role: h.r === "Visitor" ? "user" : "assistant", content: h.t })) })
    });
    if (!r.ok) throw new Error("api " + r.status);
    const data = await r.json();
    reply = (data.reply || "").trim() || "Sorry, I could not come up with an answer.";
  } catch (err) {
    reply = `The assistant is unavailable right now. Please email ${CONFIG.email} and ${CONFIG.name} will reply.`;
  }
  typing.remove(); bubble(reply, "bot"); history.push({ r: "Assistant", t: reply });
}
$("send").onclick = () => ask($("cin").value);
$("cin").addEventListener("keydown", e => { if (e.key === "Enter") ask($("cin").value); });
/* Hero, about and education extras */
const stack = skills.flatMap(g => g.bars ? g.bars.map(b => b[0]) : []);
[["University", CONFIG.university], ["Degree", CONFIG.degree], ["CGPA", CONFIG.cgpa], ["Location", CONFIG.location], ["Email", CONFIG.email]].forEach(([k, v]) => {
  const d = el("div"); d.append(el("span", "", k), el("b", "", v)); $("info").append(d);
});
focus.forEach(f => { const c = el("div", "card focus"); c.append(el("h3", "", f.t), el("p", "", f.d)); $("focusGrid").append(c); });
if (CONFIG.photo) { const im = el("img"); im.src = CONFIG.photo; im.alt = CONFIG.name; im.style.cssText = "width:100%;height:100%;object-fit:cover"; $("photo").replaceChildren(im); $("photo").removeAttribute("role"); }
$("ring").style.setProperty("--p", parseFloat(CONFIG.cgpa) / 4 * 100);
$("ringVal").textContent = CONFIG.cgpa.split(" ")[0];
skills.find(g => g.group === "Concepts").badges.forEach(b => $("course").append(el("span", "badge", b)));
const roles = ["Software Engineering Student", "Frontend Enthusiast", "Backend Learner", "Full-stack Developer in the making"];
let ri = 0, ci = 0, del = false; const ty = $("typed");
if (matchMedia("(prefers-reduced-motion:reduce)").matches) ty.textContent = roles[0];
else (function tick() {
  const w = roles[ri]; ci += del ? -1 : 1; ty.textContent = w.slice(0, ci);
  let d = del ? 35 : 70;
  if (!del && ci === w.length) { del = true; d = 1400; } else if (del && ci === 0) { del = false; ri = (ri + 1) % roles.length; d = 300; }
  setTimeout(tick, d);
})();
addEventListener("scroll", () => { const h = document.documentElement; $("prog").style.width = (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight) * 100) + "%"; }, { passive: true });

/* Reference-style extras */
const initials = CONFIG.name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();
$("mono").textContent = initials; $("mono2").textContent = initials;
$("loc").textContent = CONFIG.location;
$("fsub").textContent = CONFIG.title + " · " + CONFIG.location;
$("fsocial").innerHTML = $("social").innerHTML;
$("flinks").innerHTML = $("links").innerHTML.replace('class="only-m"', "");
certs.forEach(x => { const d = el("div", "card cert"); d.append(el("small", "", x.org + " · Certificate of completion"), el("h3", "", x.title), el("p", "done", "✓ " + x.date)); $("certGrid").append(d); });
achievements.cards.forEach(a => { const d = el("div", "card"), s = el("div", "stack"); a.tags.forEach(t => s.append(el("span", "", t))); d.append(el("h3", "", a.t), el("p", "", a.d), s); $("achGrid").append(d); });
langs.forEach(x => $("langs").append(el("span", "badge", x)));
interests.forEach(x => $("interests").append(el("span", "badge", x)));

const hc = document.querySelector(".hcard");
if (hc && matchMedia("(hover:hover)").matches && !matchMedia("(prefers-reduced-motion:reduce)").matches) {
  hc.addEventListener("pointermove", e => { const r = hc.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5; hc.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg)`; });
  hc.addEventListener("pointerleave", () => { hc.style.transform = ""; });
}

const menu = $("menu"), nav = $("links");
function setMenu(o) { nav.classList.toggle("open", o); menu.setAttribute("aria-expanded", o); menu.textContent = o ? "✕" : "☰"; }
menu.onclick = () => setMenu(!nav.classList.contains("open"));
nav.addEventListener("click", e => { if (e.target.tagName === "A") setMenu(false); });
addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
greet();
