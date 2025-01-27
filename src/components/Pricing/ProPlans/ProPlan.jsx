import React from 'react'
import './ProPlan.css'

import { X } from 'lucide-react';
import { Check } from 'lucide-react';

const plan = [
    {id: 1, faetures: 'Support 24/7', free: <Check />, nofree: <Check />},
    {id: 2, faetures: 'Fast Delivery', free: <Check />, nofree: <Check />},
    {id: 3, faetures: '20% Off Food Deals', free: <Check />, nofree: <Check />},
    {id: 4, faetures: 'Transaction History', free: <Check />, nofree: <Check />},
    {id: 5, faetures: 'Weekend Deals', free: <X />, nofree: <Check />},
    {id: 6, faetures: 'Dashboard Access', free: <X />, nofree: <Check />},
    {id: 7, faetures: 'Premium Group Access', free: <X />, nofree: <Check />}
]

const ProPlan = () => {
    return (
        <div className="proplan">
            <div className="proplan-box">
                <ul className="proplan-common proplan-title-list">
                    <li className="proplan-item-main proplan-title-item">
                        <p className="proplan-title">Pricing</p>
                        <p className="proplan-title-text">Affordable Basic <br />& Pro Plans</p>
                    </li>
                    <li className="proplan-title-item">
                        <p className="proplan-title">Basic</p>
                        <p className="proplan-title-text">Completely 100% <br />Free Plan</p>
                    </li>
                    <li className="proplan-title-item">
                        <p className="proplan-title">Premium</p>
                        <p className="proplan-title-text">Amazing Premium <br /> Features Plan</p>
                    </li>
                </ul>

                <ul className="proplan-common proplan-price-list">
                    <li className="proplan-item-main proplan-price-item"></li>
                    <li className="proplan-price-item">
                        <p className="proplan-price-dollar">$</p>
                        <p className="proplan-price_price">0</p>
                        <p className="proplan-price_days">/month</p>
                    </li>
                    <li className="proplan-price-item">
                        <p className="proplan-price-dollar">$</p>
                        <p className="proplan-price_price">5</p>
                        <p className="proplan-price_days">/month</p>
                    </li>
                </ul>

                <p className="proplan-features">Core features</p>

                <ul className="proplan-common proplan-plan-list">
                    {plan.map((elem) => (
                        <li key={elem.id} className="proplan-plan-item">
                            <p className="proplan-item-main proplan-plan-features">{elem.faetures}</p>
                            <div className="proplan-plan-icons-box">
                                <span className={`${elem.free.type === X ? 'proplan-plan-icons-x' : ''} proplan-plan-icons`}>{elem.free}</span>
                                <span className="proplan-plan-icons">{elem.nofree}</span>
                            </div>
                            
                        </li>
                    ))}
                </ul>

                <div className="proplan-btn-list">
                    <button className="proplan-btn-item">START FREE</button>
                    <button className="proplan-btn-item">START PRO</button>
                </div>
            </div>
        </div>
    )
}

export default ProPlan