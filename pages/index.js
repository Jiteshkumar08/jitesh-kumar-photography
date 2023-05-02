import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestPosts from "@lib/getLatestPosts";
import { isInstramPostEnabled } from "featureToggles/feature_flag";

export default function Home({ posts }) {
  return (
    <ContainerBlock
      title="Jitesh Kumar - Photographer, Designer, Explorer, Freelancer"
      description="This is a photography portfolio of Jitesh Kumar"
    >
      <Hero />
      <FavouriteProjects />
      {isInstramPostEnabled && <LatestCode posts={posts} />}
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log("something",process.env.INSTAGRAM_AUTH_TOKEN);
  const token = process.env.INSTAGRAM_AUTH_TOKEN;
  const posts = await getLatestPosts(token);
  // // console.log("REPOSITORIES", repositories);

  return {
    props: {
      posts,
    },
  };
};
