import View from 'core/View';
import { IMap } from 'core/Types';

export interface IBulletPointSlideModel {
  header: string;
  bulletPoints: Array<string>;
}

export default class BulletPointSlideView extends View<IBulletPointSlideModel> {
  public render (model: IBulletPointSlideModel): string {
    return `
      <div class="slide slide-bulletpoints">
        <div class="header">${model.header}</div>
        <ul>
          ${
            View.for(model.bulletPoints, bulletPoint => {
              return `<li>${bulletPoint}</li>`;
            })
          }
        </ul>
      </div>
    `;
  }
}
