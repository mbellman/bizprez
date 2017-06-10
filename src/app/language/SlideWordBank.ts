import { IMap } from 'app/interfaces/IMap';
import { INoun, IVerb } from 'app/interfaces/Words';

export const Nouns: IMap<INoun> = {
  ASSET: {
    word: 'asset',
    plural: 'assets',
    possessive: 'asset\'s'
  },
  RESOURCE: {
    word: 'resource',
    plural: 'resources',
    possessive: 'resource\'s'
  }
};

export const Verbs: IMap<IVerb> = {
  SYNERGIZE: {
    word: 'synergize',
    tenses: {
      past: 'synergized',
      continuous: 'synergizing',
      future: 'will synergize'
    }
  }
};
