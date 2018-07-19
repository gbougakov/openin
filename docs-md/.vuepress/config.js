module.exports = {
  dest: '../docs',
  title: 'Open in',
  description: 'Let your users choose the app to open the link',
  themeConfig: {
    sidebar: false,
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'gbougakov/openin',

    // Optional options for generating "Edit this page" link

    // if your docs are in a different repo from your main project:
    docsRepo: 'gbougakov/openin',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    sidebar: [
      '/guide.md'
    ]
  },
  base: '/openin/'
}