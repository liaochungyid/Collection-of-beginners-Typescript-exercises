export class Series {
  private readonly _series: number[];

  constructor(series: string) {
    if (!series) throw new Error('series cannot be empty');
    if (!series.match(/^[\d]*$/g)) throw new Error("only allow digits");
    this._series = series.split("").map(d => Number(d));
  }

  slices(sliceLength: number): number[][] {
    if (sliceLength < 0) throw new Error('slice length cannot be negative');
    if (!sliceLength) throw new Error('slice length cannot be zero');

    const seriesLength = this._series.length;
    if (sliceLength === seriesLength) return [this._series];
    if (sliceLength > seriesLength) throw new Error('slice length cannot be greater than series length');

    return [...Array(seriesLength - sliceLength + 1).keys()].map(i => this._series.slice(i, i + sliceLength));

  }
}
