import React, { FunctionComponent } from 'react'
import {
  EuiButton,
  EuiCode,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiText,
  EuiTitle,
} from '@elastic/eui'

import MyComponent from '../components/my_component'
import { EuiLink } from '@elastic/eui'

const Index: FunctionComponent = () => (
  <EuiPage restrictWidth>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Elastic's Next.js EUI Starter</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
        <EuiPageHeaderSection>
          <EuiButton iconType="logoGithub" href="https://github.com/elastic/next-eui-starter" fill>
            Open in Github
          </EuiButton>
        </EuiPageHeaderSection>
      </EuiPageHeader>

      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle>
              <h2>Getting started</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
          <EuiPageContentHeaderSection />
        </EuiPageContentHeader>

        <EuiPageContentBody>
          <EuiText>
            <p>
              This{' '}
              <EuiLink external={true} target="_blank" href="https://nextjs.org/">
                Next.js
              </EuiLink>{' '}
              EUI Starter is intended to help you quickly build and deploy prototypes for Kibana apps with the{' '}
              <EuiLink href="https://elastic.github.io/eui/" external={true} target="_blank">
                EUI library
              </EuiLink>
              .
            </p>

            <h3>Clone the project</h3>
            <p>
              To use this starter, simply run{' '}
              <EuiCode>git clone https://github.com/elastic/next-eui-starter my-app</EuiCode>. Then{' '}
              <EuiCode>cd my-app</EuiCode> and start editing.
            </p>

            <h3>Running locally</h3>
            <p>
              <EuiCode>yarn dev</EuiCode>
            </p>

            <h3>Deploying to GitHub Pages</h3>
            <p>
              Make sure that your repo has Github Pages enabled in settings. Then run <EuiCode>yarn build-docs</EuiCode>
              , commit the results and push to GitHub.
            </p>
            <p>
              <EuiCode>yarn deploy</EuiCode>
            </p>
            <MyComponent />
          </EuiText>
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
)

export default Index
