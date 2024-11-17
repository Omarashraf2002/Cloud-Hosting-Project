import Hero from "@/components/Home/Hero";
import WebHostingPlan from "@/components/Home/WebHostingPlan";

export default function page() {
  return (
    <section>
      <Hero />
      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose your Web Hosting Plan
      </h2>
      <div className="container flex justify-center items-center flex-wrap my-7 md:gap-7    ">
        <WebHostingPlan />
        <WebHostingPlan />
        <WebHostingPlan />
      </div>
    </section>
  );
}
