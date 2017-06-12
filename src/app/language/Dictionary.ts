import { U } from 'app/Utilities';
import { IAssociations, INoun, IVerb, Definition, Definitions } from 'app/language/Definitions';
import { Words } from 'app/language/Words';

export default class Dictionary {
  public static getDefinition (word: Words.Types.All): Definition {
    return (
      Definitions.Verbs[word] ||
      Definitions.Adjectives[word] ||
      Definitions.Nouns[word]
    );
  }

  public static getWordType (word: Words.Types.All): Words.Categories {
    if (word in Definitions.Verbs) {
      return Words.Categories.VERB;
    } else if (word in Definitions.Adjectives) {
      return Words.Categories.ADJECTIVE;
    } else if (word in Definitions.Nouns) {
      return Words.Categories.NOUN;
    }
  }

  public static getAssociatedWords (word: Words.Types.All): Array<Words.Types.All> {
    const associations: IAssociations = Dictionary.getDefinition(word).associations || {};

    return [].concat(associations.nouns || [], associations.verbs || []);
  }

  public static getRandomWord (): Words.Types.All {
    const wordLists = [Words.Nouns, Words.Adjectives, Words.Verbs];

    return <Words.Types.All>U.randomFromEnum(U.randomFromArray(wordLists));
  }
}
