import Video from "next-video";
import mobilVideo from "/videos/trailer.mp4";

export default function About() {
  return (
    <div>
      <section className="-mt-2 grid grid-cols-2 bg-gray-50 p-8">
        <div>
          <p className="text-gray-dark mb-5 font-semibold md:text-lg">
            Welcome to our platform
          </p>
          <h1 className="mb-10 text-4xl font-bold text-blue-500 lg:w-4/5">
            Innovative solutions for your driving choices
          </h1>
          <p className="text-gray-txt mb-10 lg:w-4/5">
            why <span className="font-bold">automatic sport</span>, because our
            company has been founded by <span className="font-bold">Avin </span>
            since <span className="font-bold">1980</span> and of course always
            provides quality vehicles that make you all comfortable when
            driving, with very classy vehicle designs,
          </p>
        </div>
        <div>
          <Video src={mobilVideo}></Video>
        </div>
      </section>
    </div>
  );
}
