import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { tasksModule } from "./tasks/tasks.module";
import { sharedModule } from "./shared/shared.module";

@NgModule({
  declarations : [AppComponent,HeaderComponent,UserComponent],
  bootstrap : [AppComponent],
  imports : [BrowserModule,FormsModule,tasksModule,sharedModule   ]
})
export class appModule {}
