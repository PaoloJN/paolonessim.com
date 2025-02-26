import SiteHeader from "@/components/site-header";
import AboutMe from "@/components/about-me";
import PostsList from "@/components/posts-list";
import GithubGraph from "@/components/github-graph";
import ProjectsList from "@/components/projects-list";

// import SnowFallEffect from "@/components/snowfall";
// import Location from "@/components/location";

// Add effects for example for christmas add snowfall effect and christmas hat on avatar
// for halloween add pumpkin and bats flying around
// for new year add fireworks and new year hat on avatar

export default async function Home() {
    // console.log(data);
    return (
        <section className="items-center container py-12 md:py-10 space-y-12">
            <SiteHeader index={1} />
            <AboutMe index={2} />
            <GithubGraph index={3} />

            <PostsList index={3} category={"all"} />
            {/* <ProjectsList index={4} /> */}

            {/* <Location index={5} /> */}
            {/* <PostsList index={4} /> */}
        </section>
    );
}
