const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

export class SimpleCipher {
  public readonly key: string;

  constructor(_key: string = "") {
    if (_key.split("").some(k => ALPHABET.indexOf(k) === -1)) throw new Error("Invalid key!");

    this.key = _key || [...Array(100)]
      .map(() => ALPHABET[Math.floor(Math.random() * ALPHABET.length)])
      .join("");
  }

  private cipher(char: string, position: number, direction: number): string {
    return ALPHABET.indexOf(char) >= 0 ?
    ALPHABET[( 
      ALPHABET.indexOf(char) + 
      direction * ALPHABET.indexOf(this.key[position % this.key.length]) +
      ALPHABET.length
    ) % ALPHABET.length ]
    :
    ""
  }

  encode(plaintext: string): string {
    return [...plaintext.toLowerCase()]
      .map((p, i) => this.cipher(p, i, 1))
      .join("");
  }

  decode(cipherText: string): string {
    return [...cipherText.toLowerCase()]
      .map((c, i) => this.cipher(c, i, -1))
      .join("");
  }
}
