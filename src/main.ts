#!/usr/bin/env node

import ollama from "ollama";

const args: string[] = process.argv;
const prompt: string = args.slice(2).join(" ");

if (!prompt.length) process.exit(0);

(async() => {
    const response = await ollama.chat({
        model: "llama2",
        messages: [
            { role: 'user', content: prompt }
        ],
        stream: true
    });
    for await (const part of response) {
        process.stdout.write(part.message.content);
    }
    console.log("\n");
})();
