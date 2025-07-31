"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const pricingPlans = [
  {
    packageName: "Basic",
    features: [
      "HRM",
      "CRM",
      "Accounting Dashboard",
      "User Management",
    ],
    priceMonthly: "29",
    extra: [],
  },
  {
    packageName: "Standard",
    features: [
      "All Basic Features",
      "Projects",
      "Support",
      "Zoom",
      "Messenger",
    ],
    priceMonthly: "59",
    extra: [],
  },
  {
    packageName: "Pro",
    features: [
      "All Standard Features",
      "POS System",
      "Custom Roles",
      "Branding",
    ],
    priceMonthly: "99",
    extra: [],
  },
];

const includedBenefits = [
  "14-day Free Trial",
  "No Credit Card Required",
  "Cancel Anytime",
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose the best plan for your business. All plans come with essential features to empower your workflow."
          center
          width="665px"
        />

        <div className="w-full mb-8 flex flex-col items-center">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 w-full">
            {pricingPlans.map((plan, idx) => (
              <PricingBox
                key={plan.packageName}
                packageName={plan.packageName}
                price={plan.priceMonthly}
                duration="mo"
                subtitle={
                  idx === 0
                    ? "Best for startups and small teams."
                    : idx === 1
                    ? "For growing teams, includes advanced collaboration."
                    : "For businesses needing full customization and features."
                }
              >
                <div className="mb-3">
                  <h5 className="font-semibold text-md mb-2">Features Included:</h5>
                  {plan.features.map((feature, i) => (
                    <OfferList key={i} text={feature} status="active" />
                  ))}
                </div>
              </PricingBox>
            ))}
          </div>
          <div className="mt-8 w-full flex flex-col items-center">
            {includedBenefits.map((benefit, i) => (
              <div key={i} className="flex items-center mb-2">
                <span className="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary">
                  {/* Check Icon */}
                  <svg width="8" height="6" viewBox="0 0 8 6" className="fill-current">
                    <path d="M2.90567 6.00024C2.68031 6.00024 2.48715 5.92812 2.294 5.74764L0.169254 3.43784C-0.0560926 3.18523 -0.0560926 2.78827 0.169254 2.53566C0.39461 2.28298 0.74873 2.28298 0.974086 2.53566L2.90567 4.66497L7.02642 0.189715C7.25175 -0.062913 7.60585 -0.062913 7.83118 0.189715C8.0566 0.442354 8.0566 0.839355 7.83118 1.09198L3.54957 5.78375C3.32415 5.92812 3.09882 6.00024 2.90567 6.00024Z" />
                  </svg>
                </span>
                <span className="text-base font-medium text-body-color">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Decorative SVG (unchanged) */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;