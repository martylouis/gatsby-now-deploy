export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      title: 'Select Public Talk Schedule Upload',
      name: 'schedulePublicTalk',
      type: 'reference',
      to: [{ type: 'upload' }],
      // options: {
      //   filter: 'uploadType == $uploadType',
      //   filterParams: { uploadType: 'schedulePublicTalk' },
      // },
    },
    {
      title: 'Select Midweek Meeting Schedule Upload',
      name: 'scheduleMidweek',
      type: 'reference',
      to: [{ type: 'upload' }],
      // options: {
      //   filter: 'uploadType == $uploadType',
      //   filterParams: { uploadType: 'schedulePublicTalk' },
      // },
    },
  ],
};
