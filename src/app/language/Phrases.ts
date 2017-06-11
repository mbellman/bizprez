import { U } from 'app/Utilities';
import { Words } from 'app/language/Words';
import { INoun, IVerb, Definition, Definitions } from 'app/language/Definitions';
import { WordType, Dictionary } from 'app/language/Dictionary';
import { ISubjectModel } from 'app/creators/SubjectModelCreator';

export default class Phrases {
  public static generateSubject (model: ISubjectModel): string {
    return Dictionary.getDefinition(model.subject).word;
  }

  public static generateTopic (word: string): string {
    let topic: string = '';
    let loopCounter: number = 0;

    while (1) {
      loopCounter++;

      const type = Dictionary.getWordType(word);
      const definition: Definition = Dictionary.getDefinition(word);
      const associatedVerbs: Array<string> = Dictionary.getAssociatedVerbs(word);
      const associatedNouns: Array<string> = Dictionary.getAssociatedNouns(word);

      switch (type) {
        case WordType.VERB:
          topic += (loopCounter === 1 ? (<IVerb>definition).tenses.continuous : definition.word) + ' ';

          break;
        case WordType.NOUN:
          if (associatedVerbs.length > 0 && U.random(0, 1)) {
            return Phrases.generateTopic(U.randomFromArray(associatedVerbs));
          }

          topic += (<INoun>definition).plural || definition.word;

          return topic;
      }

      if (associatedVerbs.length > 0) {
        word = U.randomFromArray(associatedVerbs);
      }

      if (associatedNouns.length > 0) {
        word = U.randomFromArray(associatedNouns);
      }
    }
  }

  public static generatePhrase (model: ISubjectModel): string {
    return '';
  }

  public static generateSentence (model: ISubjectModel): string {
    return '';
  }

  public static generateQuestion (model: ISubjectModel): string {
    return '';
  }
}
