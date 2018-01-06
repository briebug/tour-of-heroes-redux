import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";
import { RouterStateSerializer, StoreRouterConnectingModule } from "@ngrx/router-store";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { PowersService } from "../core/services/powers.service";
import { AppEffects } from "./app.effects";
import { appMetaReducers, appReducer } from "./app.reducer";
import { PowersEffects } from "./powers/effects/powers";
import { CustomRouterStateSerializer } from "./shared/utils";
import * as fromPowers from "./powers/reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule,
    StoreModule.forRoot(appReducer, {
      metaReducers: appMetaReducers
    }),
    StoreModule.forFeature('powers', fromPowers.reducers),
    EffectsModule.forRoot([
      AppEffects
    ]),
    EffectsModule.forFeature([
      PowersEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    PowersService
  ]
})
export class StateModule {

  constructor(@Optional() @SkipSelf() parentModule: StateModule) {
    if (parentModule) {
      throw new Error(
        'StateModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StateModule,
      providers: [
        {
          provide: RouterStateSerializer,
          useClass: CustomRouterStateSerializer
        }
      ]
    };
  }

}
