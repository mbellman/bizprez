import Dictionary from 'app/language/Dictionary';
import PhraseGenerator from 'app/language/generators/PhraseGenerator';
import ExpressionGenerator from 'app/language/generators/ExpressionGenerator';
import { U } from 'app/Utilities';
import { ICreator } from 'app/creators/ICreator';
import { IPresentationModel } from 'app/creators/PresentationModelCreator';
import { Words } from 'app/language/Words';
import { IBulletPointSlideModel } from 'app/views/BulletPointSlideView';

export class BulletPointSlideModelCreator implements ICreator<IBulletPointSlideModel> {
  constructor (private _presentationModel: IPresentationModel) {}

  public create (): IBulletPointSlideModel {
    const slideTheme: Words.Types.All = this._getTheme();
    const header: string = this._getHeader(slideTheme);
    const bulletPoints: Array<string> = this._getBulletPoints(slideTheme);

    return { header, bulletPoints };
  }

  private _getTheme (): Words.Types.All {
    const { _presentationModel: presentation } = this

    return U.chance(0.5) ? presentation.subject : U.randomFromArray(presentation.topics);
  }

  private _getHeader (slideTheme: Words.Types.All): string {
    const wordType: Words.Categories = Dictionary.getWordType(slideTheme);

    switch (wordType) {
      case Words.Categories.VERB:
        return PhraseGenerator.generateVerbPhrase(<Words.Types.Verb>slideTheme);
      case Words.Categories.ADJECTIVE:
        return PhraseGenerator.generateAdjectivePhrase(<Words.Types.Adjective>slideTheme);
      case Words.Categories.NOUN:
        return PhraseGenerator.generateNounPhrase(<Words.Types.Noun>slideTheme);
    }
  }

  private _getBulletPoints (slideTheme: Words.Types.All): Array<string> {
    let bulletPoints: Array<string> = [];

    U.loop(U.random(3, 6), () => {
      const phrase: string = ExpressionGenerator.generateQuestion(slideTheme);

      bulletPoints.push(phrase);
    });

    return bulletPoints;
  }
}
