import SlideCreator from 'app/creators/SlideCreator';
import SlideShowView from 'app/views/SlideShowView';
import { U } from 'app/Utilities';
import { Slide } from 'app/slider/Slide';
import { ISubjectModel, SubjectModelCreator } from 'app/creators/SubjectModelCreator';

export default class Presentation {
  private _subjectModel: ISubjectModel;
  private _slides: Array<Slide> = [];

  public constructor () {
    this._subjectModel = new SubjectModelCreator().create();

    this._createSlides(10);

    new SlideShowView()
      .attach('.presentation')
      .update({
        slides: this._slides
      });
	}

	public begin (): void {
		console.log('Begin!');
	}

  public nextSlide (): void {

  }

  private _createSlides (count: number): void {
    const slideCreator: SlideCreator = new SlideCreator(this._subjectModel);

    U.loop(count, () => this._slides.push(slideCreator.create()));
  }
}
