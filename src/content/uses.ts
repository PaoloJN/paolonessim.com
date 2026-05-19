export type UsesEntry = { key: string; value: string };

export const uses: Record<string, UsesEntry[]> = {
    editor: [
        { key: "editor", value: "Cursor — fork of VS Code, AI inline" },
        { key: "font", value: "Geist Mono · 13.5pt" },
        { key: "theme", value: "Vitesse Light / Vitesse Black" },
        { key: "keybinds", value: "VS Code defaults · `cmd-k` everywhere" },
        { key: "ai", value: "Claude Sonnet for prose, Opus for hard code" },
    ],
    shell: [
        { key: "shell", value: "zsh + oh-my-zsh" },
        { key: "prompt", value: "starship · two-line, time + git branch" },
        { key: "term", value: "Ghostty · 90×30, low transparency" },
        { key: "mux", value: "tmux for long-running sessions" },
    ],
    web: [
        { key: "stack", value: "Next.js 14 · React 19 · Tailwind 3" },
        { key: "lang", value: "TypeScript strict" },
        { key: "deploy", value: "Vercel · pnpm" },
        { key: "package", value: "pnpm — workspaces by default" },
        { key: "fonts", value: "next/font + Google Fonts" },
    ],
    vision: [
        { key: "lang", value: "Python 3.11 + uv" },
        { key: "stack", value: "OpenCV · NumPy · PyTorch" },
        { key: "robotics", value: "ROS 2 Humble (when needed)" },
        { key: "viz", value: "matplotlib + rerun.io" },
    ],
    hardware: [
        { key: "mcu", value: "RP2040 · ESP32-S3" },
        { key: "tools", value: "KiCad · soldering iron · oscilloscope" },
        { key: "firmware", value: "MicroPython for prototypes, C for prod" },
        { key: "fab", value: "JLCPCB · Prusa i3 MK3 at home" },
    ],
};
