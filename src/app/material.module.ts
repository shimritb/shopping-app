import { NgModule } from '@angular/core';
import {
 MatCardModule,
 MatButtonModule,
 MatIconModule,
 MatFormFieldModule,
 MatInputModule,
 MatCheckboxModule,
 MatSidenavModule,
 MatToolbarModule,
 MatListModule,
 MatOptionModule,
 MatSelectModule} from '@angular/material';

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatOptionModule,
        MatSelectModule],
    // tslint:disable-next-line:max-line-length
    exports: [
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatOptionModule,
        MatSelectModule]
})
export class MaterialModule {

}
