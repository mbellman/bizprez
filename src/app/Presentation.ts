import SubjectModelCreator from 'app/creators/SubjectModelCreator';
import SlideCreator from 'app/creators/SlideCreator';
import Slide from 'app/slider/Slide';
import { ISubjectModel } from 'app/interfaces/ISubjectModel';

export default class Presentation {
  private _slides: Array<Slide> = [];

  public constructor () {
    this._createSlides(10);
	}

	public begin (): void {
		console.log('Begin!');
	}

  public nextSlide (): void {

  }

  private _createSlides (count: number): void {
    const subjectModel: ISubjectModel = new SubjectModelCreator().create();
    const slideCreator: SlideCreator = new SlideCreator(subjectModel);

    for (let i = 0; i < count; i++) {
      this._slides.push(slideCreator.create());
    }
  }
}
