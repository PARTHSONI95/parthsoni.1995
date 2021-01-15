import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/PARTHSONI95/parthsoni.1995"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label=""
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/PARTHSONI95/parthsoni.1995"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label=""
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
