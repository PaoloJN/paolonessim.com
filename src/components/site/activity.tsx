import { fetchGithubContributions } from "@/lib/heatmap";
import ActivityClient from "./activity-client";

export default async function Activity() {
    const data = await fetchGithubContributions("paolojn");
    return <ActivityClient data={data} />;
}
