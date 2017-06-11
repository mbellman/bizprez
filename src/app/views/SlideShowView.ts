import View from 'core/View';
import { IMap } from 'core/Types';
import { Slide } from 'app/slider/Slide';

interface ISlideShowModel {
  slides: Array<Slide>;
}

export default class SlideShowView extends View<ISlideShowModel> {
  public render (model: ISlideShowModel): string {
    return `
      ${
        View.for(model.slides, slide => {
          const { view, model } = slide.settings;

          return view.render(model);
        })
      }
    `;
  }
}
