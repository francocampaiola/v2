import { currentRole, experience, profile, projects } from "@/content/data";
import { localize } from "@/lib/i18n";
import { getPosts } from "@/lib/writing";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${profile.name}`,
    "",
    `> ${profile.role.en}. ${profile.headline.en} ${profile.intro.en}`,
    "",
    `Currently: ${currentRole.role.en} at ${currentRole.company} (${currentRole.url}), and building FACHA (https://facha.app).`,
    "",
    "## Case studies",
    "",
    ...projects.map((p) => `- [${localize(p.name, "en")}](${profile.url}/en/projects/${p.slug}): ${p.summary.en}`),
    "",
    ...(() => {
      const posts = getPosts("en").filter((p) => !p.draft);
      return posts.length > 0
        ? ["## Writing", "", ...posts.map((p) => `- [${p.title}](${profile.url}/en/writing/${p.slug}): ${p.summary}`), ""]
        : [];
    })(),
    "## Experience",
    "",
    ...experience.map((j) => `- ${j.role.en}, ${j.company} (${j.start}–${j.end ?? "present"}): ${j.summary.en}`),
    "",
    "## Contact",
    "",
    `- Email: ${profile.email}`,
    ...profile.social.map((s) => `- ${s.label}: ${s.href}`),
    `- Resume: ${profile.url}/resume.pdf`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
