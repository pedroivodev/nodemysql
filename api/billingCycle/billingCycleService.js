/*const _ = require('lodash')
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle
  .after('get', sendErrorsOrNext)
  .after('post', sendErrorsOrNext)
  .after('put', sendErrorsOrNext)
  .after('delete', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
  const bundle = res.locals.bundle
  if (bundle.errors) {
    var errors = parseErrors(bundle.errors)
    console.log(JSON.stringify(bundle.errors))
    res.status(500).json({ errors })
  } else {
    console.log('segue o baile')
    next()
  }
}

function parseErrors(nodeRestfulErrors) {
  const errors = []

  _.forIn(nodeRestfulErrors, error => errors.push(error.message))

  return errors;
}

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      res.status(500).json({ errors:[error] })
    } else {
      res.json({value})
    }
  })
})

module.exports = BillingCycle*/
