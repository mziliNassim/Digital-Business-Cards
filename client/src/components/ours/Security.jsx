const Security = () => {
  const features = [
    {
      icon: "shield-check",
      title: "End-to-End Encryption",
      description:
        "All data is encrypted in transit and at rest using industry-standard AES-256 encryption. Your business card information is protected at every step.",
    },
    {
      icon: "lock",
      title: "Access Control",
      description:
        "Multi-factor authentication, role-based access control, and session management ensure only authorized users can access and modify business cards.",
    },
    {
      icon: "database",
      title: "Data Protection",
      description:
        "Regular backups, redundant storage, and disaster recovery protocols protect your data. We maintain multiple encrypted copies in secure data centers.",
    },
    {
      icon: "eye",
      title: "Privacy Controls",
      description:
        "Granular privacy settings let you control who can view your cards. Set cards to public, private, or share with specific individuals.",
    },
    {
      icon: "hdd-stack",
      title: "Infrastructure Security",
      description:
        "Our infrastructure is hosted on enterprise-grade cloud providers with SOC 2 and ISO 27001 certifications. Regular security audits and penetration testing.",
    },
    {
      icon: "bell",
      title: "Monitoring & Alerts",
      description:
        "24/7 system monitoring, automated threat detection, and instant alerts for suspicious activities protect against unauthorized access attempts.",
    },
  ];

  return (
    <section className="bg-white overflow-y-hidden dark:bg-gray-900">
      <div className="flex items-start justify-center max-w-screen-xl w-full px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Security
            </h1>

            <div className="space-y-8">
              <p className="text-gray-600 dark:text-gray-300">
                Digital Business Cards prioritizes the security and privacy of
                your business information. Our comprehensive security measures
                protect your data at every level.
              </p>

              <div className="grid gap-8 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1">
                      <i
                        className={`bi bi-${feature.icon} text-xl text-blue-500 dark:text-blue-400`}
                      ></i>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Compliance & Certifications
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Our platform adheres to international security standards and
                  maintains compliance with:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-2">
                  <li>GDPR data protection requirements</li>
                  <li>SOC 2 Type II certification</li>
                  <li>ISO 27001 information security standards</li>
                  <li>PCI DSS for payment processing</li>
                </ul>
              </section>
            </div>

            <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
              <p>Last updated: December 31, 2024</p>
              <p className="mt-2">
                For security concerns, contact security@digitalbusinesscards.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
