import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {PagesComponent} from "./pages.component";
import {ServerInfoComponent} from "./server/server_info_card/ServerInfoComponent";
import {ServerHistoryComponent} from "./server/server-history/ServerHistoryComponent";
import {ServerLogsComponent} from "./server/server-logs/ServerLogsComponent";
import {DashboardMainComponent} from "./main_dashboard/DashboardMainComponent";


const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardMainComponent,
  },
    {path: 'server/:id',
  component: ServerInfoComponent,

},
{path: 'logs',
component: ServerLogsComponent,

},
{path: 'history',
component: ServerHistoryComponent,

},
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
