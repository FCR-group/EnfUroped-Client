import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseContentComponent } from './components/base-content/base-content.component';

@NgModule({
    declarations: [BaseContentComponent],
    imports: [CommonModule],
    exports: [BaseContentComponent],
})
export class SharedModule {}
