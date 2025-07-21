import React from 'react'

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    price: '₹9999 / 10 Years',
    features: [
      'Access to yoga sessions',
      '1 nutrition consultation/month',
      'Community newsletter',
    ],
    color: 'primary',
  },
  {
    id: 2,
    name: 'Premium Plan',
    price: '₹19999 / 10 Years',
    features: [
      'All Basic features',
      'Unlimited gym access',
      'Weekly wellness workshops',
      '2 spa sessions/month',
    ],
    color: 'success',
  },
  {
    id: 3,
    name: 'Elite Plan',
    price: '₹34999 / 10 Years',
    features: [
      'All Premium features',
      'Personal wellness coach',
      'Monthly mental wellness retreat',
      'Exclusive club events',
    ],
    color: 'dark',
  },
];


function Buymembership() {
  return (
    <div>
      <div className="container my-5">
      <h2 className="text-center mb-4">Membership Plans</h2>
      <div className="row justify-content-center">
        {plans.map((plan) => (
          <div className="col-md-6 col-lg-4 mb-4" key={plan.id}>
            <div className={`card border-${plan.color} h-100 shadow`}>
              <div className={`card-header text-white bg-${plan.color} text-center`}>
                <h4 className="my-1">{plan.name}</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h3 className="card-title text-center mb-3">{plan.price}</h3>
                <ul className="list-group list-group-flush mb-4">
                  {plan.features.map((feature, index) => (
                    <li className="list-group-item" key={index}>
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBuyNow(plan.name)}
                  className={`btn btn-${plan.color} mt-auto`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Buymembership
