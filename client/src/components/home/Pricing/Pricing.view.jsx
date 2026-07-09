"use client";

import React from "react";
import Card from "@/components/ui/Card.view";
import Button from "@/components/ui/Button.view";
import Badge from "@/components/ui/Badge.view";
import { Check, X, Flame, CreditCard, CheckCircle2, ShoppingCart } from "lucide-react";

export function PricingView({
  selectedPlan,
  isModalOpen,
  checkoutStep,
  formData,
  openCheckout,
  closeCheckout,
  handleInputChange,
  submitCheckout,
}) {
  const plans = [
    {
      id: "vehicular",
      title: "Vehicular Tag",
      subtitle: "Windshield sticker for cars/bikes",
      originalPrice: 399,
      price: 199,
      badge: null,
      features: [
        { name: "Privacy Masked Calling", active: true },
        { name: "Wrong Parking Alerts", active: true },
        { name: "Windshield Sticker Tag", active: true },
        { name: "Emergency Medical Profile", active: false },
        { name: "GPS Location Share on Scan", active: false },
        { name: "Waterproof Epoxy Keytag", active: false },
      ],
      popular: false,
      buttonStyle: "outline",
    },
    {
      id: "sos",
      title: "SOS Tag",
      subtitle: "For keys, drivers & helmet safety",
      originalPrice: 499,
      price: 299,
      badge: "Most Popular",
      features: [
        { name: "Privacy Masked Calling", active: true },
        { name: "Wrong Parking Alerts", active: true },
        { name: "Windshield Sticker Tag", active: true },
        { name: "Emergency Medical Profile", active: true },
        { name: "GPS Location Share on Scan", active: true },
        { name: "Waterproof Epoxy Keytag", active: true },
      ],
      popular: true,
      buttonStyle: "primary",
    },
    {
      id: "pets",
      title: "Pets & Keys Tag",
      subtitle: "Metal keyring loop for pets/bags",
      originalPrice: 299,
      price: 149,
      badge: null,
      features: [
        { name: "Privacy Masked Calling", active: true },
        { name: "Wrong Parking Alerts", active: false },
        { name: "Windshield Sticker Tag", active: false },
        { name: "Emergency Medical Profile", active: false },
        { name: "GPS Location Share on Scan", active: true },
        { name: "Waterproof Epoxy Keytag", active: true },
      ],
      popular: false,
      buttonStyle: "outline",
    },
  ];

  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="primary" pill className="mb-4">
            Best Value in India
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 tracking-tight">
            Best Value in India
          </h2>
          <p className="text-zinc-500 mt-4 text-base sm:text-lg">
            No monthly subscription. One-time purchase for a lifetime of smart security and convenience.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto px-2 md:px-0">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              hoverEffect
              overflowHidden={false}
              className={`relative flex flex-col justify-between p-8 border ${
                plan.popular
                  ? "border-indigo-600 shadow-xl shadow-indigo-600/10 scale-105 md:scale-105 z-10 animate-glow bg-white"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[10px] font-bold tracking-widest uppercase py-1 px-4 rounded-full flex items-center gap-1 shadow-md shadow-indigo-600/30">
                  <Flame className="h-3.5 w-3.5 text-amber-300 fill-amber-300" />
                  {plan.badge}
                </span>
              )}

              <div>
                {/* Title */}
                <h3 className="font-display font-black text-xl text-zinc-900">{plan.title}</h3>
                <p className="text-xs text-zinc-400 font-semibold mt-1">{plan.subtitle}</p>

                {/* Pricing info */}
                <div className="mt-5 flex items-baseline gap-2 text-zinc-900">
                  <span className="text-xs font-semibold text-zinc-400 line-through">
                    ₹{plan.originalPrice}
                  </span>
                  <span className="text-2xl font-bold font-display">₹</span>
                  <span className="text-5xl font-black font-display tracking-tight">{plan.price}</span>
                  <span className="text-xs font-semibold text-zinc-400 ml-1">/ lifetime</span>
                </div>

                {/* Features Divider */}
                <div className="my-6 border-t border-zinc-100" />

                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feat) => (
                    <li
                      key={feat.name}
                      className={`flex items-start gap-2.5 text-xs font-medium ${
                        feat.active ? "text-zinc-700" : "text-zinc-400 opacity-60"
                      }`}
                    >
                      {feat.active ? (
                        <div className="bg-emerald-50 border border-emerald-100 rounded-full p-0.5 shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                      ) : (
                        <div className="bg-rose-50 border border-rose-100 rounded-full p-0.5 shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-rose-500" />
                        </div>
                      )}
                      <span>{feat.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Button */}
              <div className="mt-8">
                <Button
                  variant={plan.buttonStyle}
                  size="md"
                  onClick={() => openCheckout(plan)}
                  className={`w-full font-bold shadow-xs active:scale-[0.98] ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-650/20"
                      : "border-zinc-300 text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950"
                  }`}
                >
                  Buy Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Taxes info bar */}
        <div className="text-center mt-12 max-w-2xl mx-auto">
          <Badge variant="glass" pill className="bg-indigo-50 border border-indigo-100/50 py-2 px-6 rounded-2xl">
            <span className="text-xs sm:text-sm font-semibold text-indigo-900 lowercase first-letter:uppercase">
              🚚 all prices are inclusive of taxes and shipping charges. No monthly fees!
            </span>
          </Badge>
        </div>
      </div>

      {/* Checkout Simulator Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-zinc-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header Close */}
            <button
              onClick={closeCheckout}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-xl transition-all cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Step 1: Form Fill */}
            {checkoutStep === "form" && (
              <form onSubmit={submitCheckout} className="space-y-4">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100 mb-2">
                    <ShoppingCart className="h-3.5 w-3.5" />
                    Secure checkout
                  </div>
                  <h3 className="font-display font-black text-xl text-zinc-900">Order: {selectedPlan?.title}</h3>
                  <p className="text-xs font-semibold text-zinc-400 mt-1">
                    One-time payment of ₹{selectedPlan?.price}
                  </p>
                </div>

                <div className="space-y-3.5 text-left">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-zinc-50 text-zinc-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Mobile Number</label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter 10-digit number"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-zinc-50 text-zinc-800"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Shipping Address</label>
                    <textarea
                      required
                      name="address"
                      rows="2"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Street name, Landmark, City, State"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-zinc-50 text-zinc-800 resize-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Pincode</label>
                    <input
                      required
                      type="text"
                      name="pin"
                      value={formData.pin}
                      onChange={handleInputChange}
                      placeholder="400001"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-zinc-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 bg-zinc-50 text-zinc-800 font-mono"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" variant="primary" size="lg" className="w-full font-bold flex items-center justify-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Place Cod Order (Free Shipping)
                  </Button>
                </div>
              </form>
            )}

            {/* Step 2: Processing Gate */}
            {checkoutStep === "processing" && (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-indigo-100 border-t-indigo-600 animate-spin" />
                <h4 className="font-display font-extrabold text-lg text-zinc-800">Processing Your Order</h4>
                <p className="text-xs text-zinc-500 font-medium">Securing connection to shipping networks...</p>
              </div>
            )}

            {/* Step 3: Success Banner */}
            {checkoutStep === "success" && (
              <div className="py-8 text-center flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h4 className="font-display font-black text-xl text-emerald-800">Order Placed Successfully!</h4>
                <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-4 w-full text-left space-y-1.5 text-xs text-zinc-600">
                  <p><strong>Name:</strong> {formData.name}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Shipping:</strong> {formData.address} - {formData.pin}</p>
                </div>
                <p className="text-xs text-zinc-500 font-medium">
                  Thank you! You will receive confirmation updates shortly. Dispatch in 24 hours.
                </p>
                <div className="pt-4 w-full">
                  <Button variant="outline" size="md" onClick={closeCheckout} className="w-full font-bold">
                    Close Window
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
