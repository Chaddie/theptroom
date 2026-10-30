import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "One to One Training, Small Groups, Strength & conditioning, Weight Management, and Group Training for up to four people at The PT Room, St Helens.",
};

export default function TrainingPage() {
  return (
    <article className="wrap page-hero">
      <p className="eyebrow">Training</p>
      <h1>One to one, and small groups.</h1>
      <div className="prose">
        <p>
          Karl Morris Personal Training. Expert coaching with barbells,
          kettlebells, and dumbbells, plus diet and behaviour coaching when
          the goal is body composition. The consultation is free. Cost is
          agreed then — the studio does not publish a price list.
        </p>
      </div>
      <div className="service-list">
        {services.map((service, index) => (
          <section className="service" key={service.name}>
            <span className="index">0{index + 1}</span>
            <h2>{service.name}</h2>
            <p>
              {service.name === "Strength & conditioning"
                ? "Ever wanted to learn how to train with barbells, kettlebells, and dumbbells, but didn’t know how or who to ask? Years of experience go into easy to follow sessions, with effective programming. Over time, this will improve your overall strength and fitness."
                : service.name === "Weight Management"
                  ? "People come to exercise from different perspectives. For some it’s to change their body composition. Excellent behavioural and dietary coaching gives you the best possible chance at building confidence in your own ability to make a change."
                  : service.name === "Group Training"
                    ? "Offering up to groups of four people, this shared experience is a great way to get the most out of training with your friends or partner. The same as regular personal training, but with shared objectives."
                    : service.text}
            </p>
          </section>
        ))}
      </div>
      <p>
        <Link className="button on-paper" href="/contact">
          Book a free consultation
        </Link>
      </p>
    </article>
  );
}
