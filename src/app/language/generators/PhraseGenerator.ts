import Dictionary from 'app/language/Dictionary';
import { U } from 'app/Utilities';
import { Phrases } from 'app/language/Phrases';
import { Words } from 'app/language/Words';
import { IAssociations, INoun, IVerb, Definition, Definitions } from 'app/language/Definitions';
import { IPresentationModel } from 'app/creators/PresentationModelCreator';
import { IMap } from 'core/Types';

export default class PhraseGenerator {
  public static generateVerbPhrase (word: Words.Types.Verb): string {
    const wordChain: Array<Words.Types.All> = PhraseGenerator._getWordChain(word);
    let phrase: string;

    switch (wordChain.length) {
      case 2:
        phrase = Phrases.VerbPhrases.VERB_NOUN;

        break;
      case 3:
        phrase = Phrases.VerbPhrases.VERB_VERB_NOUN;

        break;
    }

    return PhraseGenerator._transformPhrase(phrase, wordChain);
  }

  public static generateNounPhrase (word: Words.Types.Noun): string {
    let associations: Array<Words.Types.All> = Dictionary.getAssociatedWords(word);
    let phrase: string = Phrases.NounPhrases.NOUN;
    let wordChain: Array<Words.Types.All> = [word];

    const associatedNouns = associations.filter(association => {
      return Dictionary.getWordType(association) === Words.Categories.NOUN
    });

    if (associatedNouns.length > 0) {
      const associatedNoun: Words.Types.Noun = <Words.Types.Noun>U.randomFromArray(associatedNouns);

      phrase = Phrases.NounPhrases.NOUN_NOUN;
      wordChain.push(associatedNoun);
    }

    return PhraseGenerator._transformPhrase(phrase, wordChain);
  }

  public static generateAdjectivePhrase (word: Words.Types.Adjective): string {
    return Dictionary.getDefinition(word).word;
  }

  private static _getWordChain (word: Words.Types.All): Array<Words.Types.All> {
    let wordChain: Array<Words.Types.All> = [];
    let nextWord: Words.Types.All = word;

    while (true) {
      let nextWordType: Words.Categories = Dictionary.getWordType(nextWord);
      let associations: Array<Words.Types.All> = Dictionary.getAssociatedWords(nextWord);

      wordChain.push(nextWord);

      if (nextWordType === Words.Categories.NOUN) {
        return wordChain;
      }

      if (associations.length > 0) {
        nextWord = U.randomFromArray(associations);
      } else {
        return wordChain;
      }
    }
  }

  private static _transformPhrase (phrase: string, words: Array<Words.Types.All>): string {
    const wordTokens: Array<string> = phrase.split(' ');

    return words.map((word, i) => {
      return PhraseGenerator._parseWordToken(wordTokens[i], word);
    }).join(' ');
  }

  private static _parseWordToken (token: string, word: Words.Types.All): string {
    const tokens: Array<string> = token.replace(/[{}]/g, '').split('.').slice(1);
    const definition: Definition = Dictionary.getDefinition(word);
    let value: any = definition;

    while (true) {
      if (!value) {
        return definition.word;
      }

      if (typeof value === 'string') {
        return value;
      }

      value = value[tokens.shift()];
    }
  }
}
