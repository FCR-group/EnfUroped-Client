import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavColumnComponent } from './nav-column.component';

describe('NavColumnComponent', () => {
    let component: NavColumnComponent;
    let fixture: ComponentFixture<NavColumnComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavColumnComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavColumnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
