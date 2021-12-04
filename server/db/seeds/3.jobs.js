exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        {
          id: 1,
          title: 'Build me a website',
          description: 'I need a website built for my business, just a simple one that allows for login/register, and view a few items.',
          service_type_id: 8,
          paid: true,
          created_member_id: 1,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 1,
          status: 'open'
        },
        {
          id: 2,
          title: 'Fix my car battery',
          description: 'I need a car battery fixed',
          service_type_id: 9,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2017-03-01',
          updated_date: '2017-03-01',
          deleted_date: '',
          location_id: 4,
          status: 'pending'
        },
        {
          id: 3,
          title: 'Need a tutor for Javascript',
          description: 'I am looking for a tutor for javascript as I am a beginner developer and self-learning so would love to have a tutor for few hours a week',
          service_type_id: 10,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 5,
          status: 'open'
        },
        {
          id: 4,
          title: 'Gardener to maintain hedges',
          description: 'Overgrown hedges around the garden need to be maintained, just a quick tidy up as they are overgrowing and need to be trimmed',
          service_type_id: 7,
          paid: false,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-10-07',
          updated_date: '2016-10-07',
          deleted_date: '',
          location_id: 2,
          status: 'assigned'
        },
        {
          id: 5,
          title: 'Leaky taps need fixing',
          description: 'Both taps in the kitchen need fixing, I am not sure if they are leaking or not',
          service_type_id: 1,
          paid: false,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 5,
          status: 'open'
        },
        {
          id: 6,
          title: 'Front fence to be painted',
          description: 'Front fence originally white needs a fresh coat of paint please',
          service_type_id: 8,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-02-13',
          updated_date: '2016-02-14',
          deleted_date: '',
          location_id: 4,
          status: 'assigned'
        },
        {
          id: 7,
          title: 'Builder to fix old furniture',
          description: 'I have an old chair in the living room and a broken coffee table that need repairing',
          service_type_id: 6,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 3,
          status: 'open'
        },
        {
          id: 8,
          title: 'Painter for one wall in bedroom',
          description: 'Feature wall needs to be painted with two colours - paint provided',
          service_type_id: 4,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 2,
          status: 'pending'
        },
        {
          id: 9,
          title: 'Lights out in kitchen',
          description: 'Two ceiling lights in the kitchen are not working. No idea why as bulbs are new',
          service_type_id: 2,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 2,
          status: 'open'
        },
        {
          id: 10,
          title: 'Require a mechanic for faulty a/c in car',
          description: 'Air con in the car is not working. Has been recently repaired but seems to be broken again',
          service_type_id: 9,
          paid: true,
          created_member_id: 2,
          expected_start: '2017-01-01',
          expected_end: '2017-01-02',
          actual_start: '',
          actual_end: '',
          created_date: '2016-01-01',
          updated_date: '2016-01-01',
          deleted_date: '',
          location_id: 2,
          status: 'pending'
        }
      ])
    })
}
