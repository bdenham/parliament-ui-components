import React from 'react'
import PropTypes from 'prop-types'
import Provider from '@react/react-spectrum/Provider'
import { Header, Footer, Feedback, Nav } from 'parliament-ui-components'

const data = {
  name: 'Authentication',
  version: '1.0.0',
  description: 'Authentication',
  author: 'Hiren Shah',
  view_type: 'mdbook',
  meta_keywords: 'adobe i/o, authentication',
  meta_description: 'default description',
  publish_date: '02/08/2019',
  show_edit_github_banner: false,
  base_path: 'https://raw.githubusercontent.com',
  pages: [
    {
      importedFileName: 'Authentication Overview',
      path:
        'AdobeDocs/adobeio-auth/stage/AuthenticationOverview/AuthenticationGuide.md',
      title: 'Authentication Overview',
      pages: [
        {
          importedFileName: 'API Key Integration',
          pages: [],
          path:
            'AdobeDocs/adobeio-auth/stage/AuthenticationOverview/APIKeyIntegration.md',
          title: 'API Key Integration'
        },
        {
          importedFileName: 'OAuth Integration',
          pages: [],
          path:
            'AdobeDocs/adobeio-auth/stage/AuthenticationOverview/OAuthIntegration.md',
          title: 'OAuth Integration'
        },
        {
          importedFileName: 'Service Account Integration',
          pages: [],
          path:
            'AdobeDocs/adobeio-auth/stage/AuthenticationOverview/ServiceAccountIntegration.md',
          title: 'Service Account Integration'
        }
      ]
    },
    {
      importedFileName: 'OAuth Authentication',
      pages: [
        {
          importedFileName: 'OAuth Scopes',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/OAuth/Scopes.md',
          title: 'OAuth Scopes'
        },
        {
          importedFileName: 'OAuth Sample Code',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/OAuth/samples/samples.md',
          title: 'OAuth Sample Code'
        }
      ],
      path: 'AdobeDocs/adobeio-auth/stage/OAuth/OAuth.md',
      title: 'OAuth Authentication'
    },
    {
      importedFileName: 'JWT (Service Account) Authentication',
      pages: [
        {
          importedFileName: 'Create a Public Key Certificate',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/JWT/JWTCertificate.md',
          title: 'Create a Public Key Certificate'
        },
        {
          importedFileName: 'JWT Metascopes',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/JWT/Scopes.md',
          title: 'JWT Metascopes'
        },
        {
          importedFileName: 'JWT Sample Code',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/JWT/samples/samples.md',
          title: 'JWT Sample Code'
        }
      ],
      path: 'AdobeDocs/adobeio-auth/stage/JWT/JWT.md',
      title: 'JWT (Service Account) Authentication'
    },
    {
      importedFileName: 'Tools',
      pages: [
        {
          importedFileName: 'OAuth 2.0 Playground',
          pages: [],
          path:
            'AdobeDocs/adobeio-auth/stage/Resources/Tools/OAuthPlayground.md',
          title: 'OAuth 2.0 Playground'
        },
        {
          importedFileName: 'Postman',
          pages: [],
          path: 'AdobeDocs/adobeio-auth/stage/Resources/Tools/Postman.md',
          title: 'Postman'
        }
      ],
      path: 'AdobeDocs/adobeio-auth/stage/Resources/Tools/ToolsOverview.md',
      title: 'Tools'
    },
    {
      importedFileName: 'IMS APIs',
      pages: [],
      path: 'AdobeDocs/adobeio-auth/stage/Resources/IMS.md',
      title: 'IMS APIs'
    },
    {
      importedFileName: 'FAQs',
      pages: [],
      path: 'AdobeDocs/adobeio-auth/stage/FAQ/Index.md',
      title: 'FAQ'
    },
    {
      importedFileName: 'Support',
      pages: [],
      path: 'Support/Index.md',
      title: 'Support'
    }
  ]
}

const index = ({ location }) => {
  const title = 'Test Title'
  return (
    <Provider theme='lightest'>
      <Header siteTitle={title} />
      <div>Hello world!</div>
      <Nav
        data={data.pages}
        path={location.pathname}
        urlPrefix='AdobeDocs/adobeio-auth/stage'
      />
      <Feedback
        gitUrl='https://git.corp.adobe.com/devrel/parliament-client-template'
        filePath='README.md'
        branch='master'
      />
      <Footer />
    </Provider>
  )
}

index.propTypes = {
  location: PropTypes.object
}

index.defaultProps = {
  location: {}
}

export default index
