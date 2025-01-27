import React, {lazy} from 'react'

import { Customer } from '../Main/Castomer/customer'

const PricingDashboar = lazy(() => import('../Pricing/PrisingDashboard/prisingDashboard'))
const ProPlan = lazy(() => import('../Pricing/ProPlans/ProPlan'))
const Purchases = lazy(() => import('../Main/Purchases/purchases'))

const Display_pricing = () =>{
    return (
        <div className="container">
            <PricingDashboar />
            <ProPlan />
            <Purchases />
            <Customer />
        </div>
    )
}

export default Display_pricing