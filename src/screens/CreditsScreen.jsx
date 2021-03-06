import React, { Component } from 'react';
import SocialIconList from '../components/SocialIconList';
import ButtonLink from '../components/ButtonLink';
import withTransition from '../hocs/withTransition';
import { APP_TITLE, colors, projectURL } from '../constants';

class CreditsScreen extends Component {
  componentDidMount() {
    document.title = `${APP_TITLE} | Credits `;
  }

  render() {
    return (
      <div className="CreditsScreen">
        <header>
          <img
            alt="Black & white scanography (taken using a document scanner) of Juan. Has short hair and beard, wears black sunglasses and smiles showing the teeth."
            className="CreditsScreen-avatar"
            src="https://github.com/soulchainer.png?size=300"
          />
        </header>
        <div className="CreditsScreen-body">
          <p className="CreditsScreen-body-text">
            Developed by Juan Riquelme González.
          </p>
          <a
            className="CreditsScreen-githubButton"
            href={projectURL}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>View on GitHub</span>
          </a>
          <p className="CreditsScreen-body-text">
            You can find me on:
          </p>
          <SocialIconList />
        </div>
        <ButtonLink id="mainmenu" label="Main menu" to="/" />
        <style jsx>{`
          .CreditsScreen {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 2rem 0;
            width: 90vmin;
          }

          .CreditsScreen-avatar {
            border-radius: 50%;
            box-shadow: .3rem .3rem ${colors.shadow};
            height: 300px;
            max-height: 50vmin;
            max-width: 50vmin;
            width: 300px;
          }

          .CreditsScreen-body {
            align-items: center;
            color: antiquewhite;
            display: flex;
            flex-direction: column;
            font-family: 'Lato', sans-serif;
            font-size: 1.2rem;
            margin: 3vmin 1vmin;
            max-width: calc(90% - 2rem);
            text-align: center;
          }

          .CreditsScreen-githubButton {
            border: .25rem solid ${colors.shadowWhite};
            box-shadow: .3rem .3rem ${colors.shadow};
            box-sizing: content-box;
            color: ${colors.white};
            font-family: 'Francois One', sans-serif;
            font-size: 1.4rem;
            letter-spacing: .1em;
            line-height: 2rem;
            max-width: 90%;
            padding: .5rem 1rem;
            text-decoration: none;
            transition: border-color .1s .4s, background-color .4s;
          }

          .CreditsScreen-githubButton:hover {
            background-color: ${colors.green};
            border-color: ${colors.green};
            color: ${colors.black};
            transition: border-color .1s, background-color .4s .1s;
          }
        `}</style>
      </div>
    );
  }
}

export default withTransition(CreditsScreen);
