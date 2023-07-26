import { Component, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() menuOpen = new EventEmitter<boolean>();
  tema: string = "Light Mode";
  toggleB: boolean = false;
  darkMode: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  toggle(origin: string) {
    if(origin === 'toggle'){
      this.toggleB = !this.toggleB;
    } else if (origin === 'search') {
      this.toggleB = true;
    }
    this.menuOpen.emit(this.toggleB);
  }

  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.tema = "Dark Mode";
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.tema = "Light Mode";
      this.renderer.removeClass(document.body, 'dark');
    }
  }

}
