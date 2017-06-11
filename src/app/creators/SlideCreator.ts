import BulletPointSlideView from 'app/views/BulletPointSlideView';
import { U } from 'app/Utilities';
import { BulletPointSlideModelCreator } from 'app/creators/BulletPointSlideModelCreator';
import { ICreator } from 'app/creators/ICreator';
import { ISubjectModel } from 'app/creators/SubjectModelCreator';
import { ISlideSettings, Slide } from 'app/slider/Slide';
import { IBulletPointSlideModel } from 'app/views/BulletPointSlideView';

enum Slides {
  BULLET_POINT_SLIDE
}

export default class SlideCreator implements ICreator<Slide> {
  public constructor (private _subjectModel: ISubjectModel) {}

  public create (): Slide {
    const slideSettings: ISlideSettings = this._getSlideSettings();

    return new Slide(slideSettings);
  }

  private _getSlideSettings (): ISlideSettings {
    const slideType: Slides = U.randomFromEnum(Slides);

    switch (slideType) {
      case Slides.BULLET_POINT_SLIDE:
        return this._getBulletPointSlideSettings();
    }
  }

  private _getBulletPointSlideSettings (): ISlideSettings {
    const modelCreator: BulletPointSlideModelCreator = new BulletPointSlideModelCreator(this._subjectModel);
    const model: IBulletPointSlideModel = modelCreator.create();

    return {
      view: new BulletPointSlideView(),
      model,
      totalSteps: model.bulletPoints.length
    };
  }
}
