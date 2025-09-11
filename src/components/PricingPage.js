import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = {
    starter: {
      name: 'Starter',
      description: 'Perfect for small schools',
      icon: 'S',
      color: 'emerald',
      monthly: 99,
      yearly: 990,
      features: [
        'Up to 500 students',
        'Basic AI evaluation',
        'Standard analytics',
        'Email support',
        '5GB storage',
        'Basic reporting',
        'Mobile app access'
      ]
    },
    professional: {
      name: 'Professional',
      description: 'For growing institutions',
      icon: 'P',
      color: 'blue',
      monthly: 299,
      yearly: 2990,
      popular: true,
      features: [
        'Up to 2,000 students',
        'Advanced AI evaluation',
        'Real-time analytics',
        'Priority support',
        '50GB storage',
        'Custom integrations',
        'Advanced reporting',
        'Parent portal',
        'API access'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      description: 'For large organizations',
      icon: 'E',
      color: 'purple',
      monthly: 799,
      yearly: 7990,
      features: [
        'Unlimited students',
        'Premium AI features',
        'Advanced analytics',
        '24/7 dedicated support',
        'Unlimited storage',
        'White-label solution',
        'Custom workflows',
        'Multi-campus support',
        'Dedicated account manager',
        'SLA guarantee'
      ]
    },
    custom: {
      name: 'Custom',
      description: 'Tailored to your needs',
      icon: 'C',
      color: 'pink',
      monthly: 'Contact',
      yearly: 'Contact',
      features: [
        'Custom student limits',
        'Bespoke AI solutions',
        'Custom analytics',
        'Dedicated account manager',
        'Custom integrations',
        'On-premise deployment',
        'Custom training',
        'Priority development',
        'Compliance assistance'
      ]
    }
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
          bg: 'from-[#693393] to-[#0b79ee]',
          text: 'text-[#693393]',
          button: 'from-[#693393] to-[#0b79ee] hover:from-[#0b79ee] hover:to-[#693393]'
        },
        blue: {
          bg: 'from-[#0b79ee] to-[#6366f1]',
          text: 'text-[#0b79ee]',
          button: 'from-[#0b79ee] to-[#6366f1] hover:from-[#6366f1] hover:to-[#0b79ee]'
        },
        purple: {
          bg: 'from-[#6366f1] to-[#693393]',
          text: 'text-[#6366f1]',
          button: 'from-[#6366f1] to-[#693393] hover:from-[#693393] hover:to-[#6366f1]'
        },
        pink: {
          bg: 'from-[#693393] to-[#6366f1]',
          text: 'text-[#693393]',
          button: 'from-[#693393] to-[#6366f1] hover:from-[#6366f1] hover:to-[#693393]'
        }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" style={{fontFamily: 'Lexend, "Noto Sans", sans-serif'}}>
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 px-6 lg:px-10 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-4 text-[#0d141c]">
            <div className="relative">
              <img 
                src="/icon-logo.png" 
                alt="BeyondGrades.ai Logo" 
                className="size-10 rounded-xl shadow-lg object-contain"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h2 className="text-[#0d141c] text-xl font-bold leading-tight tracking-[-0.015em]">BeyondGrades.ai</h2>
              <p className="text-xs text-[#49719c] font-medium">Evaluate | Aggregate | Analyze</p>
            </div>
          </Link>
          
          <Link 
            className="flex min-w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-11 px-6 bg-gradient-to-r from-[#693393] to-[#0b79ee] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:from-[#0b79ee] hover:to-[#693393] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl" 
            to="/login"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-[#693393]">Flexible Pricing</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-[#0d141c] mb-6">
            Choose the Perfect Plan for
            <span className="bg-gradient-to-r from-[#693393] to-[#0b79ee] bg-clip-text text-transparent"> Your Institution</span>
          </h1>
          <p className="text-xl text-[#49719c] max-w-4xl mx-auto mb-12">
            From small schools to large universities, we have a plan that fits your needs and budget. 
            Start with our free trial and scale as you grow.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-[#0d141c]' : 'text-[#49719c]'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-16 h-8 bg-gray-200 rounded-full transition-colors duration-300 focus:outline-none"
            >
              <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${billingCycle === 'yearly' ? 'transform translate-x-8' : ''}`}></div>
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-[#0d141c]' : 'text-[#49719c]'}`}>Yearly</span>
            {billingCycle === 'yearly' && (
              <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">Save 17%</span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(plans).map(([key, plan]) => {
              const colors = getColorClasses(plan.color);
              const price = billingCycle === 'monthly' ? plan.monthly : plan.yearly;
              
              return (
                <div key={key} className={`bg-white/90 backdrop-blur-md rounded-3xl p-8 border ${plan.popular ? 'border-2 border-blue-200' : 'border-gray-200/50'} hover:shadow-2xl transition-all duration-500 relative`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-3xl">{plan.icon}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d141c] mb-2">{plan.name}</h3>
                    <p className="text-[#49719c] text-sm mb-4">{plan.description}</p>
                    <div className="mb-6">
                      {typeof price === 'number' ? (
                        <>
                          <span className="text-4xl font-black text-[#0d141c]">${price}</span>
                          <span className="text-[#49719c] text-sm">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                          {billingCycle === 'yearly' && (
                            <div className="text-sm text-emerald-600 font-semibold mt-1">
                              Save ${(plan.monthly * 12) - plan.yearly}/year
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-2xl font-black text-[#0d141c]">{price}</span>
                      )}
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-sm text-[#49719c] mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className={`${colors.text} mr-3`}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-gradient-to-r ${colors.button} text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105`}>
                    {key === 'custom' ? 'Contact Us' : 'Start Free Trial'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-6 lg:px-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Detailed Feature Comparison</h2>
            <p className="text-xl text-[#49719c] max-w-3xl mx-auto">
              Compare all features across our plans to find the perfect fit for your institution.
            </p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-200/50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-bold text-[#0d141c]">Features</th>
                    <th className="text-center p-6 font-bold text-[#0d141c]">Starter</th>
                    <th className="text-center p-6 font-bold text-[#0d141c]">Professional</th>
                    <th className="text-center p-6 font-bold text-[#0d141c]">Enterprise</th>
                    <th className="text-center p-6 font-bold text-[#0d141c]">Custom</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="p-6 font-medium text-[#0d141c]">Student Limit</td>
                    <td className="p-6 text-center text-[#49719c]">500</td>
                    <td className="p-6 text-center text-[#49719c]">2,000</td>
                    <td className="p-6 text-center text-[#49719c]">Unlimited</td>
                    <td className="p-6 text-center text-[#49719c]">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-25">
                    <td className="p-6 font-medium text-[#0d141c]">AI Evaluation</td>
                    <td className="p-6 text-center"><span className="text-emerald-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-blue-500">✓ Advanced</span></td>
                    <td className="p-6 text-center"><span className="text-purple-500">✓ Premium</span></td>
                    <td className="p-6 text-center"><span className="text-pink-500">✓ Bespoke</span></td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-6 font-medium text-[#0d141c]">Analytics Dashboard</td>
                    <td className="p-6 text-center"><span className="text-emerald-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-blue-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-purple-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-pink-500">✓</span></td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-25">
                    <td className="p-6 font-medium text-[#0d141c]">Storage</td>
                    <td className="p-6 text-center text-[#49719c]">5GB</td>
                    <td className="p-6 text-center text-[#49719c]">50GB</td>
                    <td className="p-6 text-center text-[#49719c]">Unlimited</td>
                    <td className="p-6 text-center text-[#49719c]">Custom</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-6 font-medium text-[#0d141c]">API Access</td>
                    <td className="p-6 text-center text-gray-400">✗</td>
                    <td className="p-6 text-center"><span className="text-blue-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-purple-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-pink-500">✓</span></td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-25">
                    <td className="p-6 font-medium text-[#0d141c]">White-label Solution</td>
                    <td className="p-6 text-center text-gray-400">✗</td>
                    <td className="p-6 text-center text-gray-400">✗</td>
                    <td className="p-6 text-center"><span className="text-purple-500">✓</span></td>
                    <td className="p-6 text-center"><span className="text-pink-500">✓</span></td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="p-6 font-medium text-[#0d141c]">Support</td>
                    <td className="p-6 text-center text-[#49719c]">Email</td>
                    <td className="p-6 text-center text-[#49719c]">Priority</td>
                    <td className="p-6 text-center text-[#49719c]">24/7 Dedicated</td>
                    <td className="p-6 text-center text-[#49719c]">Dedicated Manager</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0d141c] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-[#49719c]">
              Got questions? We've got answers. Here are the most common questions about our pricing.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Is there a free trial available?</h3>
              <p className="text-[#49719c]">Yes! We offer a 30-day free trial for all plans. No credit card required to get started.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Can I change plans later?</h3>
              <p className="text-[#49719c]">Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">What payment methods do you accept?</h3>
              <p className="text-[#49719c]">We accept all major credit cards, bank transfers, and can accommodate institutional purchase orders.</p>
            </div>
            
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50">
              <h3 className="text-lg font-bold text-[#0d141c] mb-3">Is there a setup fee?</h3>
              <p className="text-[#49719c]">No setup fees for Starter and Professional plans. Enterprise and Custom plans include complimentary setup and migration assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#693393] via-[#0b79ee] to-[#6366f1] rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of institutions already using BeyondGrades.ai. Start your free trial today!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white text-[#693393] text-lg font-bold leading-normal tracking-[0.015em] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg" 
                  to="/login"
                >
                  <span>Start Free Trial</span>
                </Link>
                
                <Link 
                  className="group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-16 px-8 bg-white/20 backdrop-blur-md text-white text-lg font-bold leading-normal tracking-[0.015em] border-2 border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  to="/contact"
                >
                  <span>Talk to Sales</span>
                </Link>
              </div>
              
              <p className="text-blue-100 text-sm mt-6">
                No credit card required • 30-day free trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;