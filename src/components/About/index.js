import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quos
        voluptatibus, saepe culpa soluta fuga, unde autem ipsa accusamus
        nesciunt amet et illo eos, distinctio sed! Qui atque minima quis? Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Molestias quibusdam
        nobis voluptatem debitis repudiandae. Expedita, culpa, quisquam vero
        rerum id cumque esse nisi a labore ut eius totam ab maxime?Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Impedit eum sit
        necessitatibus error ipsa aperiam magni laborum optio laboriosam quis,
        natus iste. Commodi quasi nobis nesciunt iure assumenda cupiditate a!
      </div>
    </section>
  );
}

export default About;
