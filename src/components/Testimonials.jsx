import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className={`${styles.flexCenter} flex-col`}>
      <h2 className={[styles.heading2, styles.flexCenter]}>TESTIMONIALS</h2>
      <div className="heading__line"></div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        What People are saying about us
      </p>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
