import { AssistantResponse } from "ai";
import OpenAI from "openai";

// TODO: Implement Search engine with specific domain instead of using assistant knowledge.

const openai = new OpenAI({
  defaultHeaders: { "OpenAI-Beta": "assistants=v2" },
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("OpenAI API Key:", process.env.OPENAI_API_KEY);
console.log("Assistant ID:", process.env.ASSISTANT_ID);

export const maxDuration = 30;

export async function OPTIONS(req: Request) {
  return new Response("Ok", { status: 200 });
}

export async function POST(req: Request) {
  // Parse the request body
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  console.log("Thread ID:", input.threadId);
  console.log("Message:", input.message);

  // Create a thread if needed
  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

  console.log("Thread ID Created:", threadId);

  // Add a message to the thread
  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: input.message,
  });

  console.log("Message Created:", createdMessage.id);

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream, sendDataMessage }) => {
      // Run the assistant on the thread
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error("ASSISTANT_ID is not set");
          })(),
      });

      // forward run status would stream message deltas
      let runResult = await forwardStream(runStream);

      // status can be: queued, in_progress, requires_action, cancelling, cancelled, failed, completed, or expired
      while (
        runResult?.status === "requires_action" &&
        runResult.required_action?.type === "submit_tool_outputs"
      ) {
        const tool_outputs =
          runResult.required_action.submit_tool_outputs.tool_calls.map(
            (toolCall: any) => {
              const parameters = JSON.parse(toolCall.function.arguments);

              switch (toolCall.function.name) {
                // configure your tool calls here

                default:
                  throw new Error(
                    `Unknown tool call function: ${toolCall.function.name}`,
                  );
              }
            },
          );

        runResult = await forwardStream(
          openai.beta.threads.runs.submitToolOutputsStream(
            threadId,
            runResult.id,
            {
              tool_outputs,
            },
          ),
        );
      }
    },
  );
}
