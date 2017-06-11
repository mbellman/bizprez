import { IMap } from 'core/Types';

abstract class View<Model> {
  private _element: Element = document.createElement('div');
  private _target: Element;

  public static for<T> (items: Array<T>, handler: (item: T) => string): string {
    return items.map(handler).join('');
  }

  public update (model: Model): this {
    const html = this.render(model);

    this._element.innerHTML = html;

    return this;
  }

  public attach (target: Element | string): this {
    this.detach();

    if (typeof target === 'string') {
      target = document.querySelector(target);
    }

    this._target = target;

    this._target.appendChild(this._element);

    return this;
  }

  public detach (): this {
    if (this._isAttached()) {
      this._target.removeChild(this._element);
    }

    return this;
  }

  public abstract render (model: Model): string;

  private _isAttached (): boolean {
    return this._target && this._target.contains(this._element);
  }
}

export default View;
