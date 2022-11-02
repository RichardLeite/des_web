import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CardConteudoComponent } from './card-conteudo/card-conteudo.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
    declarations: [
        ButtonComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        FilterComponent,
        CardConteudoComponent,
        NotFoundComponent
    ],
    exports: [
        ButtonComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        FilterComponent,
        CardConteudoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
