import { LitElement, css, html } from 'lit'
import { TeamForm } from './components/team-form'
import { TeamInfo } from './components/team-info'
import getTeamInfo from './services/getTeamInfo'

export class LitFootball extends LitElement {
  static get properties() {
    return {
      team: String,
      teamData: Object
    }
  }

  constructor() {
    super()
    this.team = ''
    this.teamData = {}
  }
  
  _handleSubmitted(e) {
    this.team = e.detail.team
    getTeamInfo(this.team).then(({teams}) => {
      this._parseTeamData(teams[0])
    })
  }

  _parseTeamData(data) {
    console.log('TEAM DATA:', data)
    this.teamData = {
      name: data.strTeamAlternate,
      league: data.strLeague,
      founded: data.intFormedYear,
      location: data.strLocation,
      country: data.strCountry,
      image: data.strBadge 
    }
  }

  render() {
    return html`
      <main>
        <section>
          <h1>Lit Football App</h1>
        </section>
        <section>
          <team-form @team-submitted="${this._handleSubmitted}"></team-form>
        </section>
        <section>
          <team-info .teamData="${this.teamData}"></team-info>
        </section>
      </main>
    `
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
    `
  }
}

window.customElements.define('lit-football', LitFootball)
