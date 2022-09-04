const Codon2Protein: {[key: string]: string} = {
  "AUG": "Methionine",
  "UUU": "Phenylalanine",
  "UUC": "Phenylalanine",
  "UUA": "Leucine",
  "UUG": "Leucine",
  "UCU": "Serine",
  "UCC": "Serine",
  "UCA": "Serine",
  "UCG": "Serine",
  "UAU": "Tyrosine",
  "UAC": "Tyrosine",
  "UGU": "Cysteine",
  "UGC": "Cysteine",
  "UGG": "Tryptophan",
  "UAA": "STOP",
  "UAG": "STOP",
  "UGA": "STOP",
}

export function translate(input: string): string[] {
  const result = input.match(/[AUCG]{3}/g)?.map(codon => Codon2Protein[codon]) ?? []
  const indexOfStop = result.indexOf("STOP");
  return indexOfStop !== -1 ? result.slice(0, indexOfStop) : result;
}
