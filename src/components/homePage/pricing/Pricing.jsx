import { Check } from "lucide-react";
import React from "react";

const Pricing = () => {
  return (
    <div className="py-30 px-5">
      <div className="container mx-auto text-center ">
        <h1 className=" text-3xl md:text-4xl lg:text-6xl font-extrabold leading-normal">
          Choose Your Plan
        </h1>
        <p className="py-2 text-black/60 leading-normal">
          Flexible pricing for individuals, professionals, and teams.
        </p>

        <div className="py-10 grid md:grid-cols-2 lg:grid-cols-3 px-5 gap-10 lg:20 xl:gap-25">

          {/* BASIC */}
          <div className=" bg-gray-100 shadow-md text-left rounded-2xl flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className=" pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Basic</h2>
              <p className="text-black/80 ">Great for beginners</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$5</span>
                <span className="text-xl  text-black/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10 text-gray-600">
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>5 premium tools access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>10 templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>5 projects</span>
                </li>
              </ul>

              <button className="w-full text-white mt-auto btn btn-primary rounded-full gradient-bg hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* PRO */}
          <div className=" gradient-bg text-white text-left rounded-2xl  relative flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className="badge absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-100 text-yellow-600 px-4 py-3 rounded-full text-[10px] sm:text-sm font-semibold shadow-md">
              Best Value
            </div>

            <div className=" pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Pro</h2>
              <p className="text-white/80 ">For growing professionals</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$19</span>
                <span className="text-xl  text-white/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10">
                <li className="flex items-start gap-3">
                  <Check />
                  <span>All tools unlocked</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Unlimited templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Unlimited projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Cloud sync</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check />
                  <span>Basic analytics</span>
                </li>
              </ul>

              <button className="w-full mt-auto bg-white font-semibold py-4 rounded-full btn border-none shadow-none hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                <h1 className="gradient-text ">Upgrade Now</h1>
              </button>
            </div>
          </div>

          {/* BUSINESS */}
          <div className=" bg-gray-100 shadow-md text-left rounded-2xl  flex-1 flex flex-col hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
            <div className="pt-12 pb-8 px-8 flex-1 flex flex-col">
              <h2 className="text-3xl font-bold mb-1">Business</h2>
              <p className="text-black/80 ">For teams & companies</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold ">$49</span>
                <span className="text-xl  text-black/80">/Month</span>
              </div>

              <ul className="space-y-1.5 mb-10 text-gray-600">
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Everything in Pro</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Team access (5 users)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check color="lightgreen" />
                  <span>Priority support</span>
                </li>
              </ul>

              <button className="w-full text-white mt-auto btn btn-primary rounded-full gradient-bg hover:shadow-lg hover:shadow-indigo-400/50 transition duration-300">
                Contact Team
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;