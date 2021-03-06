import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./containers/index/index.component";
import { HeroComponent } from "./containers/hero/hero.component";
import { EditComponent } from "./containers/edit/edit.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':id',
    component: HeroComponent
  },
  {
    path: ':id/edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule {

}
