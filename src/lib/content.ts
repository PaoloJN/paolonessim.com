import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Post } from "@/types/type";

function readFile(filePath: string): Post | null {
    try {
        const rawContent = fs.readFileSync(filePath, "utf-8");
        const { data, content } = matter(rawContent);

        const slug = path.basename(filePath, path.extname(filePath));

        return {
            ...data,
            slug,
            content,
        } as Post;
    } catch (error) {
        console.error(`Failed to read or parse the file at ${filePath}:`, error);
        return null;
    }
}

function getFilesRecursively(directory: string): string[] {
    try {
        const entries = fs.readdirSync(directory, { withFileTypes: true });
        const files = entries.flatMap((entry) => {
            const fullPath = path.join(directory, entry.name);
            if (entry.isDirectory()) {
                return getFilesRecursively(fullPath);
            } else if (path.extname(entry.name) === ".mdx") {
                return [fullPath];
            }
            return [];
        });
        return files;
    } catch (error) {
        console.error(`Failed to read directory at ${directory}:`, error);
        return [];
    }
}

export function getPosts(directory: string): Post[] {
    let files: string[] = [];

    if (directory === "all") {
        const baseDir = path.join(process.cwd(), "src", "content");
        files = getFilesRecursively(baseDir);
    } else {
        const targetDir = path.join(process.cwd(), "src", "content", directory);
        files = getFilesRecursively(targetDir);
    }

    return files.map((file) => readFile(file)).filter((post): post is Post => post !== null);
}
