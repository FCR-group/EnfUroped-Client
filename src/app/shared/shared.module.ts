import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './../material.module';
import { BaseContentComponent } from './components/base-content/base-content.component';
import { NavBarComponent } from './components/base-content/components/nav-bar/nav-bar.component';
import { NavColumnComponent } from './components/base-content/components/nav-column/nav-column.component';

@NgModule({
    declarations: [BaseContentComponent, NavBarComponent, NavColumnComponent],
    imports: [CommonModule, MaterialModule, RouterModule],
    exports: [BaseContentComponent],
})
export class SharedModule {}
