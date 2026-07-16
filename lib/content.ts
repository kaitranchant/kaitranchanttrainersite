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

export const services = [
  {
    name: "Online Training",
    blurb:
      "Custom programming for home or gym — with check-ins, form feedback, and accountability built in.",
    details:
      "Includes SwiftCoach access for tracking + check-ins · program design · warm-up, custom work, cool-down",
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
    details: "60 minutes · Horseheads, Elmira & Corning",
    tiers: [
      { label: "Per session", price: "$75" },
      { label: "4 sessions / mo", price: "$260" },
    ],
  },
  {
    name: "Nutrition Coaching",
    blurb:
      "Fuel your training, not a diet plan. Simple structures that support performance — sustainable habits, clear targets, results you can keep.",
    details: "Monthly coaching · pairs well with training",
    tiers: [{ label: "Per month", price: "$100" }],
  },
] as const;

export const testimonials = [
  {
    name: "Nicole Sharpsteen",
    role: "Client · Google review",
    quote:
      "I can’t recommend Kai enough! I’ve never been someone who enjoys going to the gym, but the accountability has made all the difference. Every workout is encouraging, challenging, and tailored to where I am in life. At this stage, staying strong and healthy is more important than ever, and having someone who keeps me motivated and accountable has been invaluable. If you’re looking for a trainer who genuinely cares about your success, I highly recommend Kai!",
    photo: "/images/nicole-kai-selfie.png",
  },
  {
    name: "Jordan R.",
    role: "Amateur competitor",
    quote:
      "Placeholder testimonial — swap this for a real client quote. Sessions feel athletic, focused, and never cookie-cutter.",
  },
  {
    name: "Sam T.",
    role: "Rebuilding after injury",
    quote:
      "Placeholder testimonial — swap this for a real client quote. I finally feel like an athlete again — without rushing past smart progress.",
  },
] as const;

export const faqs = [
  {
    q: "What’s the cancellation policy?",
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
