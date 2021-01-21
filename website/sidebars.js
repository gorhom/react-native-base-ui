module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['doc1', 'doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Inputs',
          collapsed: false,
          items: ['components/button'],
        },
      ],
    },
  ],
};
