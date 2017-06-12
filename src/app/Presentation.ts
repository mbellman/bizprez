import SlideCreator from 'app/creators/SlideCreator';
import SlideShowView from 'app/views/SlideShowView';
import { U } from 'app/Utilities';
import { Slide } from 'app/slider/Slide';
import { IPresentationModel, PresentationModelCreator } from 'app/creators/PresentationModelCreator';

export default class Presentation {
  private _presentationModel: IPresentationModel;
  private _slides: Array<Slide> = [];

  public constructor () {
    this._presentationModel = new PresentationModelCreator().create();

    console.log(this._presentationModel);

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
    const slideCreator: SlideCreator = new SlideCreator(this._presentationModel);

    U.loop(count, () => this._slides.push(slideCreator.create()));
  }
}
