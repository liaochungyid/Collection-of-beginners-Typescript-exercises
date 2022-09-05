type NucleotideCounts = {[key: string]: number}

export function nucleotideCounts(nucleotides: string): NucleotideCounts {
  return nucleotides.split("")
    .reduce((acc, cur) => {
      if (!(cur in acc)) throw new Error('Invalid nucleotide in strand');
      acc[cur] += 1;
      return acc;
    }, { "A": 0, "C": 0, "G": 0, "T": 0 } as NucleotideCounts);
}
