import Dictionary from 'app/language/Dictionary';
import { U } from 'app/Utilities';
import { IAssociations } from 'app/language/Definitions';
import { Words } from 'app/language/Words';
import { ICreator } from 'app/creators/ICreator';

export interface IPresentationModel {
  subject: Words.Types.All;
  topics: Array<Words.Types.All>;
  goals: Array<Words.Types.Noun>;
}

export class PresentationModelCreator implements ICreator<IPresentationModel> {
  public create (): IPresentationModel {
    const subject: Words.Types.All = <Words.Nouns>U.randomFromEnum(Words.Nouns);
    const topics: Array<Words.Types.All> = this._getTopics(subject);

    return {
      subject,
      topics,
      goals: []
    };
  }

  private _getTopics (subject: Words.Types.All): Array<Words.Types.All> {
    let topics: Array<Words.Types.All> = [];
    const subjectAssociations: Array<Words.Types.All> = Dictionary.getAssociatedWords(subject);

    U.loop(U.random(3, 5), () => {
      if (subjectAssociations.length > 0 && U.chance(0.8)) {
        topics.push(U.randomFromArray(subjectAssociations));
      } else {
        topics.push(Dictionary.getRandomWord());
      }
    });

    return topics;
  }
}
