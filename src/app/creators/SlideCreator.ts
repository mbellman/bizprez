import Slide from 'app/slider/Slide';
import { Nouns, Verbs } from 'app/language/WordBank';
import { ICreator } from 'app/interfaces/ICreator';
import { ISubjectModel } from 'app/interfaces/ISubjectModel';

export default class SlideCreator implements ICreator<Slide> {
  public constructor (private _subjectModel: ISubjectModel) {}

  public create (): Slide {
    return new Slide();
  }
}
