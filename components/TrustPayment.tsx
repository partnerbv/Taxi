export default function TrustPayment() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-secondary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-secondary-900/5 border border-secondary-100 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Trust badges */}
            <div>
              <h3 className="text-lg font-bold text-secondary-900 mb-6">Waarom klanten ons vertrouwen</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Verzekerd</div>
                    <div className="text-xs text-secondary-500">Volledig gedekt</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary-50 rounded-xl border border-primary-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">Gecertificeerd</div>
                    <div className="text-xs text-secondary-500">Ervaren chauffeurs</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary-900">5.0 Rating</div>
                    <div className="text-xs text-secondary-500">Klant Reviews</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment methods */}
            <div className="lg:border-l lg:border-secondary-200 lg:pl-8">
              <h3 className="text-lg font-bold text-secondary-900 mb-6">Betaalmethoden</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'PIN', icon: '\uD83D\uDCB3' },
                  { name: 'Contant', icon: '\uD83D\uDCB5' },
                  { name: 'Creditcard', icon: '\uD83D\uDCB3' },
                  { name: 'Factuur', icon: '\uD83D\uDCC4' },
                  { name: 'iDEAL', icon: '\uD83C\uDFE6' },
                ].map((method) => (
                  <div
                    key={method.name}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary-50 rounded-xl border border-secondary-200 hover:bg-secondary-100 transition-colors"
                  >
                    <span className="text-lg">{method.icon}</span>
                    <span className="text-sm font-medium text-secondary-700">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
