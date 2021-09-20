export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '614882b7228cbc87bbac35f3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-irujfxm3',
                  apiId: 'bca05ff7-bff1-44be-ba21-4fabfd5410ba'
                },
                {
                  buildHookId: '614882b7a3ea2db25e0c6b8b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-urqed35d',
                  apiId: '2a53f7f5-a737-445f-8157-231d463a2dc0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonoroboto/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-urqed35d.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
