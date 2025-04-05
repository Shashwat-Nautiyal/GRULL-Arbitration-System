import { ArrowRight, Shield, Users, Gavel } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Decentralized Justice for</span>
            <span className="block text-indigo-600">On-Chain Disputes</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            A transparent and fair arbitration system powered by blockchain technology. 
            Resolve disputes efficiently with decentralized jurors and smart contracts.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="/disputes"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Register Dispute
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="/stake"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Become a Juror
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Secure & Transparent</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                All dispute resolutions are recorded on the blockchain, ensuring complete transparency and immutability.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Decentralized Jurors</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Cases are reviewed by a diverse pool of qualified jurors who stake tokens to ensure fair judgments.
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
              <Gavel className="h-12 w-12 text-indigo-600" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Swift Resolution</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Smart contracts automate the enforcement of decisions, providing quick and efficient dispute resolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}