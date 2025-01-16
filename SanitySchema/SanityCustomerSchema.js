//Customer schema
export default {
    name: 'customer',
    type: 'document',
    title: 'Customers',
    fields: [
      { name: 'name', type: 'string', title: 'Name' }, //name
      { name: 'email', type: 'string', title: 'Email' , validation: (Rule) => Rule.regex(/^\S+@\S+\.\S+$/, { name: 'email' }).warning( 'Please provide a valid email address.' ), }, //email
      { name: 'contact', type: 'string', title: 'Contact Number', validation: (Rule) => Rule.regex(/^\+?[1-9]\d{1,14}$/, { name: 'phone number' }).warning( 'Please provide a valid phone number.' ), }, //contact no
      { name: 'address', type: 'string', title: 'Address' }, //address
    ],
  };
  