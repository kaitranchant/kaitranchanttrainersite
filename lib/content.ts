/** Swap this for Calendly / Acuity when ready */
export const BOOKING_HREF =
  "https://calendly.com/kaitranchant/30min";

export const INSTAGRAM_HREF = "https://instagram.com/kaitranchant";

export const audiences = [
  {
    name: "Hybrid comp prep",
    description:
      "Whether it's HYROX, DEKA, or another hybrid race, prep is more than being fit — it's being ready for the specific demands of race day. That means building your engine with running volume and compromised-running work, getting strong on the stations (sled push and pull, wall balls, lunges, farmer's carry), and pacing strategy so you don't blow up halfway through. Your prep block is built backwards from your race date, so you peak on the start line — not three weeks before it.",
  },
  {
    name: "College-bound athletes",
    description:
      "If you're a high school athlete trying to play at the next level, the off-season is where you separate yourself. That means building strength and power when there's room to train hard, sharpening speed and conditioning as the season nears, and managing load so you show up to camp ready — not burnt out. Programming is built around your sport, your season, and the testing numbers coaches actually look at.",
  },
  {
    name: "Body composition",
    description:
      "If your goal is changing your body composition, that means training for how your body performs, not just how it looks — building muscle, burning fat, and improving mobility and conditioning, all built together, not chased separately. The training is built around progressive overload and smart volume, not random workouts chasing a burn. Nutrition coaching pairs with it to make sure the changes stick, not just show up for a few weeks and disappear.",
  },
] as const;

export const services = [
  {
    name: "Online Training",
    for: "For: racers with a date on the calendar, and athletes training on their own schedule",
    includes: [
      "Programming built around your competition calendar — race prep blocks, off-season builds, and in-season maintenance",
      "Every plan written from scratch around your goals — not pulled from a template",
      "Full SwiftCoach access to log workouts, track progress, and see your week at a glance",
      "Bi-weekly check-in calls to review progress and adjust your plan",
      "Direct messaging between sessions — ask questions, send form videos, get feedback in real time",
    ],
    tiers: [
      { label: "1 session / week", price: "$150/mo" },
      { label: "2 sessions / week", price: "$200/mo", popular: true },
      { label: "3 sessions / week", price: "$250/mo" },
    ],
  },
  {
    name: "In-Home Training",
    for: "For: athletes who want eyes on every session",
    includes: [
      "I come to you — whether it's race-prep intervals, a strength phase, or a full performance block, coached wherever you train",
      "60-minute sessions at your location — no commute, no gym membership needed",
      "Real-time coaching and hands-on form correction, every single rep",
      "Guided warm-up and post-workout stretching built into every session",
      "Progress logged in SwiftCoach so you can see how each session builds over time",
    ],
    tiers: [
      { label: "Per session", price: "$75" },
      { label: "4 sessions / mo", price: "$260" },
      { label: "8 sessions / mo", price: "$480" },
    ],
  },
  {
    name: "Track Day",
    for: "For: athletes who need real speed work, not just a treadmill",
    includes: [
      "Sprint mechanics, conditioning intervals, and race-pace work built into your prep block",
      "Live, in-person coaching on acceleration and top-end speed",
      "Interval work structured around your race, season, or combine timeline",
      "Small groups capped at 6 — real coaching, not a crowd, solo or bring your training partners",
      "Speed sessions synced to SwiftCoach so they connect with the rest of your training",
    ],
    tiers: [
      { label: "Solo session", price: "$80" },
      { label: "Group (2–6 athletes)", price: "$45/athlete" },
      { label: "4-week block (solo)", price: "$280" },
      { label: "4-week block (group, per athlete)", price: "$160" },
    ],
  },
  {
    name: "Nutrition Coaching",
    for: "For: anyone whose training outpaces their eating",
    includes: [
      "Fuel for training, not a diet plan — built around your training load, race prep, and recovery",
      "Meal plan built around your preferences and restrictions — real food, not a cookie-cutter diet",
      "Macro targets that actually fit your schedule and your training",
      "Bi-weekly check-ins so your plan evolves as you do",
      "Meal plans, shopping lists, and logging all managed through SwiftCoach",
    ],
    tiers: [
      { label: "Per month", price: "$125/mo" },
      { label: "Training add-on", price: "$75/mo" },
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Nicole S.",
    tags: ["Body composition"],
    duration: "training for 3 years",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
    photo: "/images/nicole-kai-selfie.png",
  },
  {
    name: "Katie J.",
    tags: ["Volleyball Athlete"],
    duration: "training for 1 year",
    quote:
      "Kai’s knowledge and expertise is evident in every session and his guidance has led to consistent, measurable results. He has the perfect blend of encouragement and challenge that keeps me progressing each week. Beyond the workouts, he holds me accountable for hydration and nutrition creating a comprehensive training experience!",
    photo: "/images/katie-johnston.png",
  },
  {
    name: "Lisa N.",
    tags: ["Body composition"],
    duration: "training for 2 years",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
    photo: "/images/nicole-kai-selfie.png",
  },
  {
    name: "Sherry B.",
    tags: ["Body composition"],
    duration: "training for 2 years",
    quote:
      "I have been training with Kai for over two years now and my body strength has increased considerably. Through his programs, I’ve been able to help reverse signs of early bone loss. Kai pushes me out of my comfort zone because he knows I’m capable, even when I don’t see it myself. He also helps me set achievable goals for outside of the gym, whether it’s step targets or meal planning. Training with Kai has been one of the best decisions I’ve made for my health.",
  },
] as const;

export const faqs = [
  {
    q: "Can you get me ready for a specific competition date?",
    a: "Yes — that's the core of what I do. Tell me your race or event date and we build backwards from it: a prep block with the right mix of strength, conditioning, and event-specific work, dosed so you peak on the day. HYROX, DEKA, a competitive season opener, or a testing combine — if there's a date on the calendar, we train to it.",
  },
  {
    q: "Do you work with high school athletes trying to play in college?",
    a: "Absolutely — 3 of my 4 years coaching have been focused on HS and collegiate S&C. For athletes: off-season strength and power, speed work, and the testing numbers recruiters look at. For parents: structured, supervised programming with load management built in, so your athlete develops without getting hurt. Happy to talk with both of you at the free consult.",
  },
  {
    q: "How far out from my race should we start?",
    a: "Ideally 8–16 weeks — enough time for a real strength block before we sharpen conditioning and event-specific work. Closer than that? We can still make meaningful progress; the plan just gets more focused. Either way, tell me your date at the consult and I'll tell you exactly what's realistic.",
  },
  {
    q: "I already have a program from my sport coach — do we work around it?",
    a: "Yes — we coordinate, not conflict. Team lifting and practice come first; I program around your team calendar so the volume adds up to development, not burnout. That usually means filling the gaps your team program can't: individual weaknesses, speed work, or extra recovery management.",
  },
  {
    q: "What’s your cancellation policy?",
    a: "Cancellations within 24 hours of your session are subject to the full session charge. Give me a heads-up sooner and we’ll reschedule — no drama.",
  },
  {
    q: "What should I bring?",
    a: "Gym clothes you can move in, a water bottle, and shoes you train in. Training at your place? Whatever equipment you have is fine — I’ll program around it. Online: a device for Zoom check-ins works.",
  },
  {
    q: "Is the first session free?",
    a: "Yes. Your first consult is free — we’ll talk goals, how you move, and whether training together is the right fit. No pressure, no weird sales script.",
  },
  {
    q: "Do you work with beginners?",
    a: "Absolutely. “Train like an athlete” doesn’t mean you already are one — it means we train with purpose, progression, and good form from day one. Beginners are welcome; I’ll meet you where you are and build from there.",
  },
  {
    q: "I’m coming back from injury or time off — is that okay?",
    a: "Yes. We’ll start where your body is today and rebuild with the same athletic standards, just dialed to your timeline. Share any medical guidance you’ve been given and I’ll program around it.",
  },
  {
    q: "Where do sessions happen?",
    a: "In-home across Horseheads, Elmira, and Corning. Online clients train wherever they like and we meet on Zoom for consults and check-ins.",
  },
  {
    q: "What’s SwiftCoach?",
    a: "SwiftCoach is the training & coaching app I built — every client gets access. Workouts, progress, nutrition, recovery, and health tracking in one place, so you’re never guessing what to do next.",
  },
] as const;
