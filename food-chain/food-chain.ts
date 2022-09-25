const animals = ['', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];
const clauses = [
  "",
  "I don't know why she swallowed the fly. Perhaps she'll die.",
  "She swallowed the spider to catch the fly.",
  "She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.",
  "She swallowed the cat to catch the bird.",
  "She swallowed the dog to catch the cat.",
  "She swallowed the goat to catch the dog.",
  "She swallowed the cow to catch the goat."
];
const actions = [
  "",
  "",
  "It wriggled and jiggled and tickled inside her.",
  "How absurd to swallow a bird!",
  "Imagine that, to swallow a cat!",
  "What a hog, to swallow a dog!",
  "Just opened her throat and swallowed a goat!",
  "I don't know how she swallowed a cow!",
  "She's dead, of course!"
]

function ver(n: number): string {
  return actions[n] ? "\n" + actions[n] : "";
}

function vers(n: number): string {
  if (n > 7) return "";
  let result = "";
  while (n) {
    result += "\n" + clauses[n];
    n -= 1;
  }
  return result;
}

export function verse(n: number): string {
  return `I know an old lady who swallowed a ${animals[n]}.${ver(n)}${vers(n)}\n`
}

export function verses(start: number, end: number): string {
  let result = "";
  while (start < end) {
    result += verse(start) + "\n"
    start += 1;
  }
  return result + verse(end);
}
