import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Ravi.jpg"
          alt="an image showing Ravi"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ravi</h1>
      <p>I blog about web development -especially frontend framework like React.</p>
    </section>
  );
}
