interface IWord {
  word: string
}

export interface INoun extends IWord {
  plural: string,
  possessive: string
}


export interface IVerb extends IWord {
  tenses: {
    past: string,
    continuous: string,
    future: string
  }
}
