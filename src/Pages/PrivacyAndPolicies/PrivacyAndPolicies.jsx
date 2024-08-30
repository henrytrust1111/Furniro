import React from "react";
import muggo from "/images/products/muggo.png";
import ReuseableHero from "../../Components/ReuseableHero";

const PrivacyAndPolicies = () => {
  return (
    <>
    <ReuseableHero page={"Privacy & Policy"} page1={"Privacy & Policy"} />
      <div className="container mx-auto px-4 py-8 mt-[53px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Privacy and Policy
            </h1>
            <p className="text-gray-600 mb-6">
              Welcome to Furniro, your trusted source for luxurious furniture
              designed to enhance your dining rooms, living rooms, and bedrooms.
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines how we collect,
              use, and safeguard your data when you interact with our website
              and services.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <img
              src={muggo}
              alt="Fancy Furniture"
              className="w-full h-52 rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We collect personal information that you provide directly to us,
              such as when you create an account, place an order, or subscribe
              to our newsletter. This may include your name, email address,
              phone number, shipping address, and payment information.
              Additionally, we may collect non-personal data through cookies and
              similar technologies to improve your browsing experience.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              The information we collect is used to provide, maintain, and
              improve our services. We use your personal data to process
              transactions, manage your account, respond to customer inquiries,
              and send you promotional materials if you have opted in. Your
              information also helps us enhance our product offerings and
              customize your shopping experience.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-4">
              We implement robust security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. We use SSL encryption for all data transfers and
              ensure that our payment processing partners comply with the
              highest standards of data protection.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Third-Party Sharing
            </h2>
            <p className="text-gray-600 mb-4">
              Furniro does not sell, trade, or rent your personal information to
              third parties. However, we may share your data with trusted
              service providers who assist us in operating our website,
              conducting our business, or servicing you, as long as those
              parties agree to keep your information confidential. We may also
              disclose your information if required by law.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to access, correct, or delete your personal
            information at any time. If you wish to update your details or
            remove your account, please contact our support team. Additionally,
            you can opt out of receiving marketing communications by following
            the unsubscribe instructions in our emails.
          </p>
          <p className="text-gray-600 mb-4">
            By using Furniro, you consent to the terms of this Privacy Policy.
            We reserve the right to update this policy as needed to reflect
            changes in our practices or legal requirements. We encourage you to
            review this page periodically to stay informed about how we protect
            your information.
          </p>
          <p className="text-gray-600">
            If you have any questions or concerns about our Privacy Policy,
            please do not hesitate to contact us. Your privacy is important to
            us, and we are committed to ensuring that your experience with
            Furniro is safe and secure.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolicies;
