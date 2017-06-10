import { ICreator } from 'app/interfaces/ICreator';
import { ISubjectModel } from 'app/interfaces/ISubjectModel';

export default class SubjectCreator implements ICreator<ISubjectModel> {
  public constructor () {

  }

  public create (): ISubjectModel {
    return {
      subject: this._getSubject(),
      values: []
    };
  }

  private _getSubject (): string {
    return '';
  }
}
