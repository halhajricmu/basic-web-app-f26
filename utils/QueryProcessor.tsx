export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Hamad";
  }

  if (query.toLowerCase().includes("age")) {
    return "67";
  }

if (query.toLowerCase().includes("andrew id")) {
  return "halhajri";
}
// "Which of the following is an anagram of listen: banana, google, enlists, silent?"
if (query.toLowerCase().includes("anagram of")) {
  const match = query.toLowerCase().match(/anagram of (\w+):\s*(.+?)\??$/);
  if (match) {
    const sortWord = (w: string) => w.split("").sort().join("");
    const target = sortWord(match[1]);
    const options = match[2].split(",").map((w) => w.trim());
    return options.filter((w) => sortWord(w) === target).join(", ");
  }
}
  return "";
}
