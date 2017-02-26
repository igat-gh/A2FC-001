import { Component } from '@angular/core'
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { DebugElement } from '@angular/core'
import { RotationDirective } from './rotation.directive'
import { By } from '@angular/platform-browser'

@Component({ template: `<span [rotation]="45">Some text</span>` })
class TestComponent { }

describe('RotationDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let de: DebugElement

  beforeEach(() => {
    fixture = TestBed
      .configureTestingModule({ declarations: [ RotationDirective, TestComponent ] })
      .createComponent(TestComponent)

    // trigger initial data binding
    fixture.detectChanges()

    // debug element
    de = fixture.debugElement.query(By.directive(RotationDirective))
  })

  it('should rotate element', () => {
    const style = de.nativeElement.style
    expect(style.transform).toBe('rotate(45deg)')
  })

})