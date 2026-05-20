import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { readingTime } from "reading-time-estimator";

const WRITING_DIR = path.join(process.cwd(), "src/content/writing");

export type WritingFrontmatter = {
    title: string;
    date: string;
    summary?: string;
    draft?: boolean;
};

export type WritingMeta = WritingFrontmatter & {
    slug: string;
    readMinutes: number;
};

export type Writing = WritingMeta & {
    content: string;
};

function readFile(slug: string): Writing {
    const raw = fs.readFileSync(path.join(WRITING_DIR, `${slug}.mdx`), "utf8");
    const { data, content } = matter(raw);
    const fm = data as Omit<WritingFrontmatter, "date"> & { date: string | Date };
    const minutes = Math.max(1, readingTime(content, 220).minutes);
    const rawDate = fm.date;
    const dateIso =
        rawDate instanceof Date
            ? rawDate.toISOString().slice(0, 10)
            : String(rawDate);

    return {
        slug,
        title: fm.title,
        date: dateIso,
        summary: fm.summary,
        draft: fm.draft ?? false,
        readMinutes: minutes,
        content,
    };
}

export function getAllWritings(opts: { includeDrafts?: boolean } = {}): WritingMeta[] {
    if (!fs.existsSync(WRITING_DIR)) return [];

    const files = fs.readdirSync(WRITING_DIR).filter((f) => f.endsWith(".mdx"));

    return files
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const full = readFile(slug);
            const meta: WritingMeta = {
                slug: full.slug,
                title: full.title,
                date: full.date,
                summary: full.summary,
                draft: full.draft,
                readMinutes: full.readMinutes,
            };
            return meta;
        })
        .filter((w) => (opts.includeDrafts ? true : !w.draft))
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getWritingBySlug(slug: string): Writing | null {
    const file = path.join(WRITING_DIR, `${slug}.mdx`);
    if (!fs.existsSync(file)) return null;
    return readFile(slug);
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(WRITING_DIR)) return [];
    return fs
        .readdirSync(WRITING_DIR)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}

export function formatWritingDate(iso: string): string {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    const dd = String(d.getUTCDate()).padStart(2, "0");
    const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
    const yy = String(d.getUTCFullYear()).slice(-2);
    return `${dd} / ${mm} / ${yy}`;
}
