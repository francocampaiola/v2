import { jobs, milestones, profile, projects } from "@/content/data";
import { getPosts } from "@/lib/writing";

export const dynamic = "force-static";

export function GET() {
  const headline = `${profile.headline.start.en} ${profile.headline.accent.en} ${profile.headline.end.en}`;
  const posts = getPosts("en").filter((p) => !p.draft);
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.role.en} in ${profile.location}. ${headline} ${profile.intro.en}`,
    "",
    "## Work",
    "",
    ...jobs.map((j) => `- ${j.role.en}, ${j.company} (${j.start.en} – ${j.end?.en ?? "now"}): ${j.summary.en}`),
    "",
    "## Personal projects",
    "",
    ...projects.map((p) =>
      p.slug ? `- [${p.name}](${profile.url}/en/projects/${p.slug}): ${p.summary.en}` : `- ${p.name} (${p.period}): ${p.summary.en}`,
    ),
    "",
    "## Milestones",
    "",
    ...milestones.map((m) => `- ${m.year}: ${m.text.en}`),
    "",
    ...(posts.length > 0
      ? ["## Writing", "", ...posts.map((p) => `- [${p.title}](${profile.url}/en/writing/${p.slug}): ${p.summary}`), ""]
      : []),
    "## Contact",
    "",
    `- Email: ${profile.email}`,
    ...profile.social.map((s) => `- ${s.label}: ${s.href}`),
    `- Resume: ${profile.url}/resume.pdf`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
