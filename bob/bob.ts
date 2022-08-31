export function hey(message: string): string {
  message = message.trim();
  if (!message) return 'Fine. Be that way!';
  if (/^(?=.*[A-Z])[A-Z %^*@#$(),.!0-9]*$/.test(message)) return 'Whoa, chill out!';
  if (/^(?=.*[A-Z])[A-Z %^*@#$(),.!0-9]*[?]$/.test(message)) return "Calm down, I know what I'm doing!";
  if (/.*[?]$/.test(message)) return 'Sure.';
  return 'Whatever.';
}
