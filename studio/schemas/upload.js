export default {
  name: 'upload',
  title: 'Uploads',
  type: 'document',
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'uploadType',
      type: 'array',
      title: 'Upload Type',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Public Talk Schedule', value: 'schedulePublicTalk' },
          { title: 'Midweek Meeting Schedule', value: 'scheduleMidweek' },
          { title: 'Field Service Groups', value: 'fieldServiceGroups' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'uploadFile',
      title: 'File',
      type: 'file',
      options: {
        accept: '.pdf',
        storeOriginalFilename: false,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
