export const site = {
  name: "The PT Room",
  title: "The PT Room — Karl Morris Personal Training",
  description:
    "Professional personal training in a private studio in St Helens. Led by Karl Morris. One to One Training and Small Groups. Consultation is free. 01744 734529.",
  url: "https://theptroom.co.uk",
  trainer: "Karl Morris",
  email: "info@theptroom.co.uk",
  phoneDisplay: "01744 734529",
  phoneTel: "+441744734529",
  address: {
    line1: "The PT Room",
    street: "60 North John Street",
    city: "St Helens",
    postcode: "WA10 2JT",
  },
  social: {
    facebook: "https://www.facebook.com/theptroom2019",
    instagram: "https://www.instagram.com/theptroom",
    youtube: "https://youtu.be/KfOel6LFKjM",
  },
  films: [
    "https://www.facebook.com/theptroom2019/videos/491483565677208/",
    "https://www.facebook.com/theptroom2019/videos/542395779704245/",
    "https://www.facebook.com/theptroom2019/videos/683243712183723/",
    "https://www.facebook.com/theptroom2019/videos/477423232798284/",
    "https://www.facebook.com/theptroom2019/videos/1221716111323996/",
  ],
} as const;

export const nav = [
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    name: "One to One Training",
    text: "A fully equipped private room, and the hour is yours. Coaching, a plan, and the session delivered with you — not shouted across a gym floor.",
  },
  {
    name: "Small Groups",
    text: "Train with a partner or a few friends. Same coaching, shared objectives, and the cost split between you.",
  },
  {
    name: "Strength & conditioning",
    text: "Barbells, kettlebells, and dumbbells, taught in sessions you can follow. Programming that builds strength and fitness over time.",
  },
  {
    name: "Weight Management",
    text: "Diet and behaviour coaching in-session. For people who want to change body composition, and who know bad habits die hard.",
  },
  {
    name: "Group Training",
    text: "Up to groups of four. The intensity of personal training, with peer pressure from people you actually like.",
  },
] as const;

export const principles = [
  {
    name: "Client focus",
    text: "Always the focus. In-depth movement analysis and coaching, for exceptional results.",
  },
  {
    name: "Science driven",
    text: "Persistent research into the best methods of training, and of change.",
  },
  {
    name: "Organisation",
    text: "Sessions are planned. Times are clear, and changed with enough notice when they have to move.",
  },
  {
    name: "Consistency",
    text: "Do what you say and say what you do. Sessions are not cancelled without a good reason.",
  },
] as const;

export const testimonials = [
  {
    name: "Phil Picton",
    programme: "12 week weightloss program",
    pull: "After only 2 weeks my weight is down and my energy levels are up.",
    quote:
      "I’ve recently started a 3 month programme here and it’s brilliant. I’m over weight and needed help. Had all the excuses in the book including not really knowing what to do in a gym. This has been the best decision I’ve made coming here. Karl is very patient and talks you through and shows you every drill to do it properly and safely. After only 2 weeks my weight is down and my energy levels are up. Karl is supportive in a way that if your struggling he doesn’t just push and shout you through a drill he does it with you like your a team. He customises the workout to suit you and makes you feel like you can do more each time. The privacy that the gym studio offers is great for me and anybody else who feels slightly self conscious about working out as there is only me and Karl in the room. He has helped me adapt my diet to help the weight loss and explained where I was going wrong with my diet but explained it in a calm and understanding way. I can’t recommend Karl and the PT Room enough. He is helping turn my life around and helping me to have more energy to spend time with my children, and you can’t put a price on that and I can’t thank Karl enough.",
  },
  {
    name: "Libby Jackson",
    programme: "2 x 12 week programmer",
    pull: "Karl has also given me lots of confidence in going to the gym and working out.",
    quote:
      "Would 100% recommend Karl, he has helped and is still helping me achieve my goals. Karl has also given me lots of confidence in going to the gym and working out. So I would 100% recommend if looking too lose weight and improve on your strength and conditioning!",
  },
  {
    name: "Victoria Melia",
    programme: "12 Session block",
    pull: "The PT Room is a safe haven for anyone wanting to sweat and learn away from the bustle of a big gym.",
    quote:
      "Been working with Karl for a few weeks now and already my deadlift and squat technique has improved beyond belief, thanks to his superb coaching. The PT Room is a safe haven for anyone wanting to sweat and learn away from the bustle of a big gym. I highly recommend Karl and urge all the ladies (and gents) to get your beast mode on and go lift heavy or box your stress away. You won’t regret it!",
  },
] as const;

export const gallery = [
  {
    src: "/images/hero.jpg",
    width: 1800,
    height: 1198,
    alt: "Karl Morris coaching a barbell squat in the private studio",
  },
  {
    src: "/images/coach.jpg",
    width: 1600,
    height: 900,
    alt: "Karl Morris in the studio beside the painted PT Room mark",
  },
  {
    src: "/images/fist-bump.jpg",
    width: 1600,
    height: 900,
    alt: "Fist bump between coach and client after a session",
  },
  {
    src: "/images/boxing.jpg",
    width: 1600,
    height: 900,
    alt: "Boxing session in the studio",
  },
  {
    src: "/images/boxing-2.jpg",
    width: 1600,
    height: 900,
    alt: "Pad work during a boxing session",
  },
  {
    src: "/images/curls.jpg",
    width: 1600,
    height: 900,
    alt: "Barbell curl in the private training room",
  },
  {
    src: "/images/press.jpg",
    width: 1600,
    height: 900,
    alt: "Overhead press with a coach watching the bar path",
  },
  {
    src: "/images/row.jpg",
    width: 1600,
    height: 900,
    alt: "Cable row in the studio",
  },
  {
    src: "/images/back.jpg",
    width: 1600,
    height: 900,
    alt: "Client training with their back to the camera",
  },
  {
    src: "/images/floor.jpg",
    width: 1600,
    height: 900,
    alt: "Floor work in the private studio",
  },
  {
    src: "/images/studio.jpg",
    width: 480,
    height: 720,
    alt: "The red-brick studio building on North John Street, St Helens",
  },
] as const;
