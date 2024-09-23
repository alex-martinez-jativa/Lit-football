import { LitElement, html } from 'lit';

export class TeamForm extends LitElement {
    _handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const teamValue = formData.get('team') || ''
        this.dispatchEvent(new CustomEvent('team-submitted', {
            detail: { team: teamValue },
            bubbles: true,
            composed: true
          }));
        e.target.reset()
      }
    
      _teamForm() {
        return html`
        <form id="teamForm" @submit=${this._handleSubmit}>
            <label for="team">Team Name:</label>
            <input type="text" id="team" name="team" required>
            <button type="submit">Search</button>
        </form>
      `
      }

      render() {
        return html`
        ${this._teamForm()}
        `
      }
}
customElements.define('team-form', TeamForm);
