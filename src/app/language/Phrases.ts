export namespace Phrases {
  export const VerbPhrases = {
    VERB_NOUN: '{verb.tenses.continuous} {noun.plural}',
    VERB_VERB_NOUN: '{verb.tenses.continuous} {verb.word} {noun.plural}',
    VERB_ADJECTIVE_NOUN: '{verb.tenses.continuous} {adjective.word} {noun.plural}'
  };

  export const AdjectivePhrases = {
    ADJECTIVE_NOUN: '{adjective.word} {noun.word}'
  }

  export const NounPhrases = {
    NOUN: '{noun.plural}',
    NOUN_NOUN: '{noun.word} {noun.word}'
  };
}
