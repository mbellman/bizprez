import { U } from 'app/Utilities';
import { Words } from 'app/language/Words';
import { ICreator } from 'app/creators/ICreator';

export interface ISubjectModel {
  subject: string;
  values: Array<string>;
}

export class SubjectModelCreator implements ICreator<ISubjectModel> {
  public create (): ISubjectModel {
    return {
      subject: U.randomProp(Words.Nouns),
      values: this._getValues()
    };
  }

  private _getValues (): Array<string> {
    const count: number = U.random(3, 5);
    let values: Array<string> = [];

    U.loop(U.random(3, 5), () => values.push(U.randomProp(Words.Nouns)));

    return values;
  }
}
