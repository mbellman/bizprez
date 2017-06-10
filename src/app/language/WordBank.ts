import { IMap } from 'app/interfaces/IMap';
import { INoun, IVerb } from 'app/interfaces/IWords';

export const Nouns: IMap<INoun> = {
  ASSET: {
    word: 'asset',
    plural: 'assets',
    possessive: 'asset\'s'
  },
  MANAGEMENT: {
    word: 'management',
    plural: 'management',
    possessive: 'management\'s'
  },
  CRITICAL_MASS: {
    word: 'critical mass',
    plural: 'critical masses',
    possessive: 'critical mass\''
  },
  PORTFOLIO: {
    word: 'portfolio',
    plural: 'portfolios',
    possessive: 'portfolio\'s'
  },
  RESOURCE: {
    word: 'resource',
    plural: 'resources',
    possessive: 'resource\'s'
  }
};

export const Verbs: IMap<IVerb> = {
  ACHIEVE: {
    word: 'achieve',
    tenses: {
      past: 'achieved',
      continuous: 'achieving'
    }
  },
  SYNERGIZE: {
    word: 'synergize',
    tenses: {
      past: 'synergized',
      continuous: 'synergizing'
    }
  }
};
