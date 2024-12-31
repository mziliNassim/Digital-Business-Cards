import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex items-start justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className=" max-w-screen-lg bg-white dark:bg-gray-900">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Privacy Policy
              </h1>

              <div className="space-y-8 text-gray-600 dark:text-gray-300">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    1. Information We Collect
                  </h2>
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      Personal Information
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name, email address, phone number</li>
                      <li>Professional information (job title, company)</li>
                      <li>Profile photos and company logos</li>
                      <li>Social media handles and website URLs</li>
                    </ul>

                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                      Usage Data
                    </h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Device and browser information</li>
                      <li>IP address and location data</li>
                      <li>Card view statistics and engagement metrics</li>
                      <li>Feature usage patterns</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    2. How We Use Your Information
                  </h2>
                  <div className="space-y-4">
                    <p>Your information is used to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Create and maintain your digital business cards</li>
                      <li>Process payments and manage subscriptions</li>
                      <li>Provide analytics and usage statistics</li>
                      <li>Improve our services and user experience</li>
                      <li>Send service updates and marketing communications</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    3. Data Storage and Security
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We implement industry-standard security measures to
                      protect your data:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Regular security audits and penetration testing</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Encrypted database storage</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    4. Data Sharing and Third Parties
                  </h2>
                  <div className="space-y-4">
                    <p>We share data with trusted service providers for:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Payment processing</li>
                      <li>Analytics services</li>
                      <li>Cloud storage</li>
                      <li>Email delivery</li>
                    </ul>
                    <p>
                      We never sell your personal information to third parties.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    5. Your Rights and Choices
                  </h2>
                  <div className="space-y-4">
                    <p>You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal data</li>
                      <li>Correct inaccurate information</li>
                      <li>Request data deletion</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Export your data</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    6. Cookies and Tracking
                  </h2>
                  <div className="space-y-4">
                    <p>We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Maintain user sessions</li>
                      <li>Remember preferences</li>
                      <li>Analyze usage patterns</li>
                      <li>Improve performance</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    7. Changes to This Policy
                  </h2>
                  <p>
                    We may update this privacy policy periodically. Users will
                    be notified of significant changes via email or service
                    notifications.
                  </p>
                </section>
              </div>

              <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>Last updated: December 31, 2024</p>
                <p className="mt-2">
                  Privacy concerns? Contact our Data Protection Officer at
                  privacy@digitalbusinesscards.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
