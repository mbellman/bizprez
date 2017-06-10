import SubjectCreator from 'app/creators/SubjectCreator';
import SlideCreator from 'app/creators/SlideCreator';

export default class Presentation {
  public constructor () {
		console.log('Main!');
	}

	public begin (): void {
		console.log('Begin!');
	}
}
