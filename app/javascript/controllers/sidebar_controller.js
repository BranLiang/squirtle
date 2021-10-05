import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['menu', 'background', 'menuContent', 'closeBtn']

  open() {
    this.menuTarget.classList.replace('invisible', 'visible');
    this.backgroundTarget.classList.replace('opacity-0', 'opacity-100');
    this.menuContentTarget.classList.replace('-translate-x-full', 'translate-x-0');
    this.closeBtnTarget.classList.replace('opacity-0', 'opacity-100');
  }

  close() {
    this.menuTarget.classList.replace('visible', 'invisible');
    this.backgroundTarget.classList.replace('opacity-100', 'opacity-0');
    this.menuContentTarget.classList.replace('translate-x-0', '-translate-x-full');
    this.closeBtnTarget.classList.replace('opacity-100', 'opacity-0');
  }
}
