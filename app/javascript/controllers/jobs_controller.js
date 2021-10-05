import { Controller } from 'stimulus';

export default class extends Controller {
  push() {
    fetch('/admin/jobs', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector("[name='csrf-token']").content,
      },
    });
  }
}
