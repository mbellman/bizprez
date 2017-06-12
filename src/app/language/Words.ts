export namespace Words {
  export enum Categories {
    VERB,
    ADJECTIVE,
    NOUN
  }

  export enum Verbs {
    ACHIEVE = 'ACHIEVE',
    DIVERSIFY = 'DIVERSIFY',
    GROW = 'GROW',
    HELP = 'HELP',
    IDENTIFY = 'IDENTIFY',
    MANAGE = 'MANAGE',
    RECOGNIZE = 'RECOGNIZE',
    SYNERGIZE = 'SYNERGIZE'
  }

  export enum Adjectives {
    NEGATIVE = 'NEGATIVE',
    POSITIVE = 'POSITIVE'
  }

  export enum Nouns {
    ASSET = 'ASSET',
    BRAND = 'BRAND',
    CRITICAL_MASS = 'CRITICAL_MASS',
    DIVERSIFICATION = 'DIVERSIFICATION',
    DIVERSITY = 'DIVERSITY',
    GROWTH = 'GROWTH',
    LIFTOFF = 'LIFTOFF',
    MANAGEMENT = 'MANAGEMENT',
    PORTFOLIO = 'PORTFOLIO',
    RESOURCE = 'RESOURCE',
    SHAREHOLDER = 'SHAREHOLDER',
    TALENT = 'TALENT'
  }

  export namespace Types {
    export type Verb = keyof typeof Words.Verbs;
    export type Adjective = keyof typeof Words.Adjectives;
    export type Noun = keyof typeof Words.Nouns;
    export type All = Verb | Adjective | Noun;
  }
}
