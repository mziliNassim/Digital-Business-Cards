import React from "react";

const Terms = () => {
  return (
    <>
      <section className="bg-white overflow-y-hidden dark:bg-gray-900">
        <div className="flex items-start justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className=" max-w-screen-lg bg-white dark:bg-gray-900">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Terms and Conditions
              </h1>

              <div className="space-y-8 text-gray-600 dark:text-gray-300">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    1. Digital Business Cards Usage
                  </h2>
                  <div className="space-y-4">
                    <p>
                      By using our digital business card service, you agree to
                      maintain accurate and up-to-date information. Cards must
                      not contain inappropriate, misleading, or offensive
                      content. Users are prohibited from impersonating others or
                      creating cards for entities they don't represent.
                    </p>
                    <p>
                      Each user is entitled to create and maintain up to five
                      active digital business cards under a single account.
                      Premium subscribers may create additional cards as
                      specified in their subscription plan.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    2. User Responsibilities
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Users are responsible for maintaining the confidentiality
                      of their account credentials and all activities conducted
                      through their account. Any suspected unauthorized access
                      should be reported immediately to our support team.
                    </p>
                    <p>You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and truthful information</li>
                      <li>Update your card details when information changes</li>
                      <li>Respect intellectual property rights</li>
                      <li>
                        Not engage in any automated scanning or scraping of
                        other users' cards
                      </li>
                      <li>Not use the service for any unlawful purposes</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    3. Privacy and Data Usage
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We collect and process personal information as outlined in
                      our Privacy Policy. This includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Contact information (name, email, phone number)</li>
                      <li>
                        Professional details (job title, company, industry)
                      </li>
                      <li>Profile images and logos</li>
                      <li>Usage data and analytics</li>
                    </ul>
                    <p>
                      Your data is stored securely and encrypted in transit and
                      at rest. We do not sell personal information to third
                      parties.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    4. Intellectual Property Rights
                  </h2>
                  <div className="space-y-4">
                    <p>
                      All content and materials available through the service
                      are protected by intellectual property rights. Users
                      retain ownership of their personal information and
                      content.
                    </p>
                    <p>
                      By uploading content, you grant us a non-exclusive,
                      worldwide license to host, store, and display the content
                      in connection with our service.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    5. Premium Subscriptions
                  </h2>
                  <div className="space-y-4">
                    <p>
                      Premium features are available through paid subscriptions.
                      Subscription fees are billed in advance on a monthly or
                      annual basis. Cancellations take effect at the end of the
                      current billing period.
                    </p>
                    <p>Premium features include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Additional card templates</li>
                      <li>Advanced analytics</li>
                      <li>Custom branding options</li>
                      <li>Priority support</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    6. Termination
                  </h2>
                  <div className="space-y-4">
                    <p>
                      We reserve the right to suspend or terminate accounts that
                      violate these terms. Users may delete their account at any
                      time through the account settings.
                    </p>
                    <p>Upon termination:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>All active digital cards will be deactivated</li>
                      <li>
                        User data will be retained for 30 days before permanent
                        deletion
                      </li>
                      <li>
                        No refunds will be issued for unused subscription
                        periods
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                <p>Last updated: December 31, 2024</p>
                <p className="mt-2">
                  Contact us at support@digitalbusinesscards.com for any
                  questions regarding these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
