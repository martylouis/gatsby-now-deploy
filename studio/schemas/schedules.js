export default {
  name: 'schedules',
  title: 'Schedules',
  type: 'document',
  fields: [
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'schedule',
      title: 'Schedule',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'upload' } }],
    },
  ],
};
