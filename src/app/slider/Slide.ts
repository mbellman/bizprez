import View from 'core/View';
import { IMap } from 'core/Types';

export interface ISlideSettings {
  view: View<IMap<any>>;
  model: IMap<any>;
  totalSteps: number;
}

export class Slide {
  private _currentStep: number = 0;
  private _onStep: () => void = () => {};
  private _onFinish: () => void = () => {};

  public constructor (public readonly settings: ISlideSettings) {}

  public attach (target: Element | string): void {
    const { view, model } = this.settings;

    view.attach(target).update(model);
  }

  public on (event: 'step' | 'finish', handler: () => void): void {
    switch (event) {
      case 'step':
        this._onStep = handler;
        break;
      case 'finish':
        this._onFinish = handler;
        break;
    }
  }

  public nextStep (): void {
    const isFinished: boolean = ++this._currentStep >= this.settings.totalSteps;

    if (this._onStep) {
      this._onStep();
    }

    if (isFinished && this._onFinish) {
      this._onFinish();
    }
  }
}
