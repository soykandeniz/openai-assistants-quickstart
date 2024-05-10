export let assistantId = "asst_S6arGqaI3RISSz4kKH9ouThX"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
