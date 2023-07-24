import React from 'react'

const Dashboard = () => {
  return (
    <div className=''>
      <div class="dashboard container">
        <section class="main pt-4">
          <h1>Dashboard</h1>
          <div className=''>
            <div class="insights">
              <div class="sales">
                <span><i class="bi bi-wallet2"></i></span>
                <div class="middle">
                  <div class="left">
                    <h3>Wallet</h3>
                    <h1>₦25,024</h1>
                  </div>
                  <div class="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                      <p>81%</p>
                    </div>
                  </div>
                </div>
                <small class="text-muted"><a href="#">Fund Wallet</a></small>
              </div>

              <div class="expenses ">
                <span><i class="bi bi-wallet2"></i></span>
                <div class="middle">
                  <div class="left">
                    <h3>Wallet</h3>
                    <h1>₦25,024</h1>
                  </div>
                  <div class="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                      <p>62%</p>
                    </div>
                  </div>
                </div>
                <small class="text-muted"><a href="#">Fund Wallet</a></small>
              </div>

              <div class="income">
                <span><i class="bi bi-briefcase"></i></span>
                <div class="middle">
                  <div class="left">
                    <h3>Transactions</h3>
                    <h1>24 <span class="text-muted">Transaction(s)</span></h1>
                  </div>
                  <div class="progress">
                    <svg>
                      <circle cx="38" cy="38" r="36"></circle>
                    </svg>
                    <div class="number">
                      <p>44%</p>
                    </div>
                  </div>
                </div>
                <small class="text-muted"><a href="#">Last 24 Hours</a></small>
              </div>
            </div>

            <div class="recent-orders">
              <h2>Recent Orders</h2>
              <table>
                <thead>
                  <tr>
                    <th>Transaction Type</th>
                    <th>Transaction ID</th>
                    <th>Amount/Price</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td>
                  </tr>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td>
                  </tr>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td>
                  </tr>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td>
                  </tr>
                  <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td class="warning">Pending</td>
                    <td class="primary">Details</td>
                  </tr>
                </tbody>
              </table>
              <a href="#">Show All</a>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}

export default Dashboard