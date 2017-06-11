import { IMap } from 'core/Types';
import { Words } from 'app/language/Words';

export interface IAssociations {
  nouns?: Array<string>;
  verbs?: Array<string>;
}

export interface ITenses {
  past: string;
  continuous: string;
}

export interface IWord {
  word: string;
  associations?: IAssociations;
}

export interface INoun extends IWord {
  plural?: string;
  possessive?: string;
  article?: 'a' | 'an';
}

export interface IVerb extends IWord {
  tenses: ITenses;
}

export type Definition = INoun | IVerb;

export namespace Definitions {
  export const Nouns: IMap<INoun> = {
    [Words.Nouns.ASSET]: {
      word: 'asset',
      plural: 'assets',
      possessive: 'asset\'s',
      article: 'an',
      associations: {
        verbs: [
          Words.Verbs.DIVERSIFY,
          Words.Verbs.MANAGE
        ]
      }
    },
    [Words.Nouns.BRAND]: {
      word: 'brand',
      plural: 'brands',
      article: 'a',
      associations: {
        verbs: [
          Words.Verbs.DIVERSIFY,
          Words.Verbs.RECOGNIZE,
          Words.Verbs.SYNERGIZE
        ]
      }
    },
    [Words.Nouns.CRITICAL_MASS]: {
      word: 'critical mass',
      associations: {
        verbs: [
          Words.Verbs.ACHIEVE
        ]
      }
    },
    [Words.Nouns.DIVERSIFICATION]: {
      word: 'diversification',
      plural: 'diversification'
    },
    [Words.Nouns.DIVERSITY]: {
      word: 'diversity',
      plural: 'diversity',
      possessive: 'diversity\'s'
    },
    [Words.Nouns.LIFTOFF]: {
      word: 'liftoff',
      associations: {
        verbs: [
          Words.Verbs.ACHIEVE
        ]
      }
    },
    [Words.Nouns.MANAGEMENT]: {
      word: 'management',
      plural: 'management',
      possessive: 'management\'s'
    },
    [Words.Nouns.PORTFOLIO]: {
      word: 'portfolio',
      plural: 'portfolios',
      possessive: 'portfolio\'s',
      article: 'a'
    },
    [Words.Nouns.RESOURCE]: {
      word: 'resource',
      plural: 'resources',
      possessive: 'resource\'s',
      article: 'a'
    },
    [Words.Nouns.SHAREHOLDER]: {
      word: 'shareholder',
      plural: 'shareholders',
      possessive: 'shareholder\'s',
      article: 'a'
    },
    [Words.Nouns.TALENT]: {
      word: 'talent',
      plural: 'talent'
    }
  };

  export const Verbs: IMap<IVerb> = {
    [Words.Verbs.ACHIEVE]: {
      word: 'achieve',
      tenses: {
        past: 'achieved',
        continuous: 'achieving'
      },
      associations: {
        nouns: [
          Words.Nouns.CRITICAL_MASS,
          Words.Nouns.LIFTOFF
        ]
      }
    },
    [Words.Verbs.DIVERSIFY]: {
      word: 'diversify',
      tenses: {
        past: 'diversified',
        continuous: 'diversifying'
      },
      associations: {
        nouns: [
          Words.Nouns.DIVERSIFICATION,
          Words.Nouns.PORTFOLIO,
          Words.Nouns.SHAREHOLDER
        ]
      }
    },
    [Words.Verbs.HELP]: {
      word: 'help',
      tenses: {
        past: 'helped',
        continuous: 'helping'
      },
      associations: {
        verbs: [
          Words.Verbs.ACHIEVE,
          Words.Verbs.IDENTIFY,
          Words.Verbs.MANAGE,
          Words.Verbs.RECOGNIZE,
          Words.Verbs.SYNERGIZE
        ]
      }
    },
    [Words.Verbs.IDENTIFY]: {
      word: 'identify',
      tenses: {
        past: 'identified',
        continuous: 'identifying'
      },
      associations: {
        nouns: [
          Words.Nouns.BRAND,
          Words.Nouns.RESOURCE,
          Words.Nouns.TALENT
        ]
      }
    },
    [Words.Verbs.MANAGE]: {
      word: 'manage',
      tenses: {
        past: 'managed',
        continuous: 'managing'
      },
      associations: {
        nouns: [
          Words.Nouns.ASSET,
          Words.Nouns.BRAND,
          Words.Nouns.RESOURCE,
          Words.Nouns.SHAREHOLDER,
          Words.Nouns.TALENT
        ]
      }
    },
    [Words.Verbs.RECOGNIZE]: {
      word: 'recognize',
      tenses: {
        past: 'recognized',
        continuous: 'recognizing'
      },
      associations: {
        nouns: [
          Words.Nouns.BRAND,
          Words.Nouns.TALENT
        ]
      }
    },
    [Words.Verbs.SYNERGIZE]: {
      word: 'synergize',
      tenses: {
        past: 'synergized',
        continuous: 'synergizing'
      },
      associations: {
        nouns: [
          Words.Nouns.BRAND,
          Words.Nouns.RESOURCE
        ]
      }
    }
  };
}
