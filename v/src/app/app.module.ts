import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { MatButtonModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FileExplorerComponent } from './file-explorer/file-explorer.component';


@NgModule({
  declarations: [
    AppComponent,
    FileExplorerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
