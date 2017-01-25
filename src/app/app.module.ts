import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionPage } from '../pages/question/question';
import { QuestionPaperPage } from '../pages/question-paper/question-paper';
import { QuestionConfigModalPage } from '../pages/question-config-modal/question-config-modal';
import { QuestionPaperConfigModalPage } from '../pages/question-paper-config-modal/question-paper-config-modal';
import { MasterdataProvider } from '../providers/masterdata-provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionPage,
    QuestionPaperPage,
    QuestionConfigModalPage,
    QuestionPaperConfigModalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [ IonicApp ],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionPage,
    QuestionPaperPage,
    QuestionConfigModalPage,
    QuestionPaperConfigModalPage
  ],
  providers: [ { provide: ErrorHandler, useClass: IonicErrorHandler }, MasterdataProvider ]
})
export class AppModule {
}
