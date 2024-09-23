import { LitElement, css, html } from 'lit';

export class TeamInfo extends LitElement {
    static get properties() {
        return {
            teamData: Object
        }
    }

    static styles = css`
    .team-info {
      border: 1px solid #ccc;
      padding: 1rem;
      margin-top: 1rem;
    }
    .team-info img {
      max-width: 150px;
    }
  `;

    constructor() {
        super()
        this.teamData = {}
    }

    render() {
        return html`
          <div class="team-info">
            ${this.teamData.name
              ? html`
                  <h2>${this.teamData.name}</h2>
                  <p><strong>League:</strong> ${this.teamData.league}</p>
                  <p><strong>Founded:</strong> ${this.teamData.founded}</p>
                  <p><strong>Location:</strong> ${this.teamData.location}</p>
                  <p><strong>Country:</strong> ${this.teamData.country}</p>
                  <img src="${this.teamData.image}" alt="Team Badge">
                `
              : html`<p>No team data available.</p>`}
          </div>
        `;
      }
 }
customElements.define('team-info', TeamInfo);
