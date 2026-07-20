/** Swap this for Calendly / Acuity when ready */
export const BOOKING_HREF =
  "mailto:kaitranchant@gmail.com?subject=Book%20a%20Session%20—%20Free%20Consult";

export const navItems = [
  { id: "top", label: "Top" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "software", label: "SwiftCoach" },
  { id: "results", label: "Results" },
  { id: "locations", label: "Locations" },
  { id: "faq", label: "FAQ" },
  { id: "book", label: "Book" },
] as const;

export const audiences = [
  {
    name: "Athletes",
    description:
      "If you're training for a specific sport or event, that means programming built around your season — building strength and power in the off-season, sharpening speed and conditioning as competition nears, and managing load so you're peaking when it matters, not burnt out before you get there. Whether it's a Hyrox event, a competitive season, or a specific performance goal, the training is built around your calendar, not a generic template.",
  },
  {
    name: "Physique management",
    description:
      "If your goal is building a hybrid physique, that means training for how your body performs, not just how it looks — building muscle, burning fat, and improving mobility and conditioning, all built together, not chased separately. The training is built around progressive overload and smart volume, not random workouts chasing a burn. Nutrition coaching pairs with it to make sure the changes stick, not just show up for a few weeks and disappear.",
  },
  {
    name: "Injury recovery",
    description:
      "Coming back from an injury means rebuilding trust in your body as much as rebuilding strength. Training starts wherever you actually are — not where you used to be — with progressions that respect what your body's ready for, so you come back stronger without setting yourself back.",
  },
  {
    name: "Healthy aging",
    description:
      "Staying strong as you age isn't about doing less — it's about training smarter, with the same principles that build strength at any age: progressive overload, movement quality, and recovery that keeps up with you. The goal is staying capable, confident, and injury-free for the long run, not just getting through a workout.",
  },
] as const;

export const services = [
  {
    name: "Online Training",
    blurb:
      "Custom programming for home or gym — with check-ins, form feedback, and accountability built in.",
    includes: [
      "Custom programming built specifically around your goals — not a template",
      "Full SwiftCoach access to track every workout, log progress, and see your week at a glance",
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
    blurb:
      "I come to you. Real-time coaching and progressive programming built around your goals, schedule, and space.",
    includes: [
      "60-minute sessions, right at your location — no commute, no gym membership needed",
      "Full SwiftCoach access to track every session and watch your progress add up",
      "Warm-up, guided custom programming, and post-workout stretching, every single session",
      "Real-time coaching and form correction, in person, every rep",
    ],
    tiers: [
      { label: "Per session", price: "$75" },
      { label: "4 sessions / mo", price: "$260" },
      { label: "8 sessions / mo", price: "$480" },
    ],
  },
  {
    name: "Nutrition Coaching",
    blurb:
      "Fuel your training, not a diet plan. Simple structures that support performance — sustainable habits, clear targets, results you can keep.",
    includes: [
      "Custom meal plan built around your goals, preferences, and restrictions — not a generic diet",
      "Personalized macro targets that actually fit your training and your life",
      "Monthly check-ins and adjustments, so your plan evolves as you do",
      "SwiftCoach access for meal plans, shopping lists, logging, and check-ins — all in one place",
    ],
    tiers: [
      { label: "Per month", price: "$125/mo" },
      { label: "Training add-on", price: "$75/mo" },
    ],
  },
] as const;

export const testimonials = [
  {
    name: "Nicole Sharpsteen",
    tags: ["Physique management"],
    duration: "training for 3 years",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
    photo: "/images/nicole-kai-selfie.png",
  },
  {
    name: "Katie Johnston",
    tags: ["Volleyball Athlete"],
    duration: "training for 1 year",
    quote:
      "Kai’s knowledge and expertise is evident in every session and his guidance has led to consistent, measurable results. He has the perfect blend of encouragement and challenge that keeps me progressing each week. Beyond the workouts, he holds me accountable for hydration and nutrition creating a comprehensive training experience!",
    photo: "/images/katie-johnston.png",
  },
  {
    name: "Lisa Noni",
    tags: ["Physique management"],
    duration: "training for 2 years",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
    photo: "/images/nicole-kai-selfie.png",
  },
  {
    name: "Sherry Boor",
    tags: ["Physique management"],
    duration: "training for 2 years",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
  },
] as const;

export const faqs = [
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
    q: "I’m coming back from injury, postpartum, or time off — is that okay?",
    a: "Yes. That’s a big part of who I coach. We’ll start smart, respect where your body is today, and rebuild strength with the same athletic standards — just dialed to your timeline. Always share any medical guidance you’ve been given so we can program around it.",
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
