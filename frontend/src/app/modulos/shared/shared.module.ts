import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { CardConteudoComponent } from './card-conteudo/card-conteudo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
    declarations: [
        ButtonComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        FilterComponent,
        CardConteudoComponent,
        NotFoundComponent,
        LoaderComponent
    ],
    exports: [
        ButtonComponent,
        FooterComponent,
        HeaderComponent,
        SearchComponent,
        FilterComponent,
        CardConteudoComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
