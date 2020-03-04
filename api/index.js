const { send } = require('micro');
const cors = require('micro-cors')();
const { router, get } = require('microrouter');


// Data layer
const {
  getPayment,
  getCustomer,
  getPayments,
  getPaymentRefunds,
} = require('./datafetcher');

// Routes
const Root = (req, res) => send(res, 404, 'All routes are under the /api namespace.');

const PaymentsOverview = (req, res) => send(res, 200, getPayments());

const PaymentDetails = (req, res) => {
  const payment = getPayment(req.params.id);

  if (!payment) {
    return send(res, 404, 'Could not find payment.');
  }

  return send(res, 200, payment);
};

const CustomerDetails = (req, res) => {
  const customer = getCustomer(req.params.id);

  if (!customer) {
    return send(res, 404, 'Could not find customer.');
  }

  return send(res, 200, customer);
};

const PaymentRefunds = (req, res) => {
  const payment = getPayment(req.params.id);

  if (!payment) {
    return send(res, 404, 'Could not find payment');
  }

  const refunds = getPaymentRefunds(req.params.id);
  return send(res, 200, refunds);
};

const NotFound = (req, res) => send(res, 404, 'Whoops. Not sure what you are looking for.');

module.exports = router(
  get('/', cors(Root)),
  get('/api/payments(/)', cors(PaymentsOverview)),
  get('/api/payments/:id/refunds(/)', cors(PaymentRefunds)),
  get('/api/payments/:id(/)', cors(PaymentDetails)),
  get('/api/customers/:id(/)', cors(CustomerDetails)),
  get('/*', cors(NotFound)),
);
