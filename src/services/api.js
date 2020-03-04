export const getPayments = async (id) => {
  const response = await fetch(`http://localhost:4000/api/payments${id ? `/${id}` : ''}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  const json = await response.json();
  return json;
};

export const getRefunds = () => null;


// class Api {
//   get(url, options) {
//     /*
//      * Implement your fetch logic here.
//      *
//      * There are 4 API endpoints:
//      * - Payments index: http://localhost:4000/api/payments
//      * - Payment details: http://localhost:4000/api/payments/:payment_id
//      * - Payment refunds (not every payment has refunds): http://localhost:4000/api/payments/:payment_id/refunds
//      * - Customer details: http://localhost:4000/api/customers/:customer_id
//      */

//     throw new Error(
//       'Please implement your fetch logic in src/services/api/index.js.',
//     );
//   }
// }

// export default new Api();
