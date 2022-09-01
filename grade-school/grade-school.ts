interface GRADE { 
  [key: number]: string[] 
}

export class GradeSchool {
  private _grade: GRADE = {};

  roster(): GRADE {
    return JSON.parse(JSON.stringify(this._grade));
  }

  add(name: string, grade: number): void {
    for (let key in this._grade) {
      const names = this._grade[Number(key)];
      const indexOfName = names.indexOf(name);
      if (indexOfName !== -1) { names.splice(indexOfName, 1); break; }
    }
    this._grade[grade] ? this._grade[grade].push(name) : this._grade[grade] = [name];
    this._grade[grade].sort()
  }

  grade(grade: number): string[] {
    return this.roster()[grade] || [];
  }
}
