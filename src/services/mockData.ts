export const mockCakes = [
  { id: 1, name: 'Chocolate Cake', category_id: 1, image_url: 'https://res.cloudinary.com/dfgkwqmtp/image/upload/v1731612277/2E17657B-7394-4790-950E-6F14D0A0996F_vm7ug8.jpg' },
  { id: 2, name: 'Smith Cake', category_id: 2, image_url: 'https://res.cloudinary.com/dfgkwqmtp/image/upload/v1731610789/IMG_5701_oltsiu.jpg' },
  { id: 3, name: 'Joe & Bea Cake', category_id: 3, image_url: 'https://res.cloudinary.com/dfgkwqmtp/image/upload/v1731611928/27030CB5-C659-4BF4-9A49-6ABFF019549C_xogspj.jpg' },
  { id: 4, name: '25', category_id: 5, image_url: 'https://res.cloudinary.com/dfgkwqmtp/image/upload/v1731610790/IMG_2185_hsvmga.jpg' },
];

export const mockCategories = [
  { id: 1, name: 'Birthday', parent_id: null},
  { id: 2, name: 'Wedding', parent_id: null },
  { id: 3, name: 'Anniversary', parent_id: null },
  { id: 4, name: 'Holiday', parent_id: 5 },
  { id: 5, name: 'Events', parent_id: null },
  { id: 6, name: 'Graduation', parent_id: 5 },
  { id: 7, name: 'Grooms Cake', parent_id: 2 },
  { id: 8, name: 'Bridal Shower', parent_id: 2 },
];