import { IAssociations, INoun, IVerb, Definition, Definitions } from 'app/language/Definitions';
import { Words } from 'app/language/Words';

export enum WordType {
  NOUN,
  VERB
}

export namespace Dictionary {
  export function getWordType (word: string): WordType {
    if (word in Definitions.Nouns) {
      return WordType.NOUN;
    } else if (word in Definitions.Verbs) {
      return WordType.VERB;
    }
  }

  export function getDefinition (word: string): Definition {
    switch (Dictionary.getWordType(word)) {
      case WordType.NOUN:
        return Definitions.Nouns[word];
      case WordType.VERB:
        return Definitions.Verbs[word];
    }
  }

  export function getAssociations (word: string): IAssociations {
    return Dictionary.getDefinition(word).associations || {};
  }

  export function getAssociatedNouns (word: string): Array<string> {
    return Dictionary.getAssociations(word).nouns || [];
  }

  export function getAssociatedVerbs (word: string): Array<string> {
    return Dictionary.getAssociations(word).verbs || [];
  }
}
