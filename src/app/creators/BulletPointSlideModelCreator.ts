import Phrases from 'app/language/Phrases';
import { U } from 'app/Utilities';
import { ICreator } from 'app/creators/ICreator';
import { ISubjectModel } from 'app/creators/SubjectModelCreator';
import { IBulletPointSlideModel } from 'app/views/BulletPointSlideView';

export class BulletPointSlideModelCreator implements ICreator<IBulletPointSlideModel> {
  constructor (private _subjectModel: ISubjectModel) {}

  public create (): IBulletPointSlideModel {
    const header: string = Phrases.generateTopic(this._subjectModel.subject);
    const bulletPoints: Array<string> = this._createBulletPoints();

    return { header, bulletPoints };
  }

  private _createBulletPoints (): Array<string> {
    let bulletPoints: Array<string> = [];

    U.loop(U.random(3, 6), () => {
      const phrase: string = Phrases.generatePhrase(this._subjectModel);

      bulletPoints.push(phrase);
    });

    return bulletPoints;
  }
}
