import SimpleBanner from '../shared/components/banner/simpleBanner'
import BlankButton from '../shared/components/buttons/blankButton'
import Layout from '../shared/layout/layout'

export default function Home() {
  return (
    <Layout>
      <SimpleBanner class="mb-5">
        <h1 className='font-medium text-2xl text-slate-900'>Dashboard</h1>
      </SimpleBanner>

      <div className="w-full py-5 px-6 rounded-lg bg-white mb-10">
        <h3 className='font-medium text-lg leading-6 text-slate-900 mb-2'>Boostez vos paiements</h3>
        <p className='font-normal text-sm mb-5 text-slate-500'>Vous y êtes presque -- Activez votre compte pour réduire vos limites</p>
        <BlankButton class='max-w-fit mr-3 sm:mb-0 mb-3' text="complètez la configuration"></BlankButton>
        <BlankButton class='max-w-fit border-none bg-transparent' text="Ignorer pour l'instant"></BlankButton>
      </div>

      <SimpleBanner>
        <h2 className='font-medium text-2xl text-slate-900 mb-5'>Commencez à accepter les paiements sur votre site</h2>
      </SimpleBanner>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gris-cols-1 gap-x-6 gap-y-6 mb-11">

        <div className="flex gap-4 p-4 rounded bg-white">

          <div className="w-12 h-12 flex justify-center items-center rounded bg-primary-900">
            <svg className='w-6 h-6 stroke-white' aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H9M8 12L18 12M15.7778 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H15.7778C15.3482 7 15 7.34822 15 7.77778V16.2222C15 16.6518 15.3482 17 15.7778 17Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col sm:w-64">
            <h5 className='font-semibold text-base leading-7 text-slate-900 mb-2'>Créer un lien de paiemnet</h5>
            <p className='text-sm font-normal text-slate-500 mb-2'>Vendre des produits ou des abonnements en partageant un lien pour les clients</p>
            <a href="" className='font-medium text-sm leading-6 text-primary-900 underline'>Commencer</a>
          </div>

        </div>

        <div className="flex gap-4 p-4 rounded bg-white">

          <div className="w-12 h-12 flex justify-center items-center rounded bg-primary-900">
            <svg className='w-6 h-6 stroke-white' aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 11H12.5M17.5 15H12.5M17.5 7H12.5M9 3L9 21M7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col sm:w-64">
            <h5 className='font-semibold text-base leading-7 text-slate-900 mb-2'>Ajouter un bouton de paiement</h5>
            <p className='text-sm font-normal text-slate-500 mb-2'>Personnalisez un bouton de paiement intelligent permettant à vos clients de vous payer plus rapidement</p>
            <a href="" className='font-medium text-sm leading-6 text-primary-900 underline'>Commencer</a>
          </div>

        </div>

        <div className="flex gap-4 p-4 rounded bg-white">

          <div className="w-12 h-12 flex justify-center items-center rounded bg-primary-900">
            <svg className='w-6 h-6 stroke-white' aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2C11.3807 2 12.5 3.11929 12.5 4.5V6H13.5C14.8978 6 15.5967 6 16.1481 6.22836C16.8831 6.53284 17.4672 7.11687 17.7716 7.85195C18 8.40326 18 9.10218 18 10.5H19.5C20.8807 10.5 22 11.6193 22 13C22 14.3807 20.8807 15.5 19.5 15.5H18V17.2C18 18.8802 18 19.7202 17.673 20.362C17.3854 20.9265 16.9265 21.3854 16.362 21.673C15.7202 22 14.8802 22 13.2 22H12.5V20.25C12.5 19.0074 11.4926 18 10.25 18C9.00736 18 8 19.0074 8 20.25V22H6.8C5.11984 22 4.27976 22 3.63803 21.673C3.07354 21.3854 2.6146 20.9265 2.32698 20.362C2 19.7202 2 18.8802 2 17.2V15.5H3.5C4.88071 15.5 6 14.3807 6 13C6 11.6193 4.88071 10.5 3.5 10.5H2C2 9.10218 2 8.40326 2.22836 7.85195C2.53284 7.11687 3.11687 6.53284 3.85195 6.22836C4.40326 6 5.10218 6 6.5 6H7.5V4.5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="flex flex-col sm:w-64">
            <h5 className='font-semibold text-base leading-7 text-slate-900 mb-2'>Intégrer un SDK</h5>
            <p className='text-sm font-normal text-slate-500 mb-2'>Connectez votre magasin, outil ou produit en utilisant une version SDK disponible pour vous</p>
            <a href="" className='font-medium text-sm leading-6 text-primary-900 underline'>Commencer</a>
          </div>

        </div>

      </div>

      <div className="sm:max-w-xl w-full border border-gray-200 mx-auto mb-10"></div>

      <SimpleBanner>
        <h2 className='font-medium text-2xl text-slate-900 mb-3'>Complétez votre profil (1/4)</h2>
      </SimpleBanner>

      <div className="max-w-md rounded-xl h-2 bg-gray-200 mb-6">
        <div className="h-full w-1/4 rounded-xl bg-green-500"></div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gris-cols-1 items-center sm:divide-x divide-y divide-gray-200 mb-11">

        <div className="flex gap-2 sm:pr-8 pb-6">

          <div className="w-6 h-6">
            <svg className='w-6 h-6 stroke-slate-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 10.5V6.8C20 5.11984 20 4.27976 19.673 3.63803C19.3854 3.07354 18.9265 2.6146 18.362 2.32698C17.7202 2 16.8802 2 15.2 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H12M14 11H8M10 15H8M16 7H8M18 21V15M15 18H21" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="">
            <h6 className='font-medium text-base leading-7 mb-1.5'>Téléchargez vos documents</h6>
            <p className='text-slate-500 text-sm font-normal'>Vos documents identifieront votre compte et vous donneront un accès complet à l'API de paiement</p>
          </div>

        </div>

        <div className="flex gap-2 sm:px-8 py-6">

          <div className="w-6 h-6">
            <svg className='w-6 h-6 stroke-slate-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="">
            <h6 className='font-medium text-base leading-7 mb-1.5'>Définissez votre fuseau horaire</h6>
            <p className='text-slate-500 text-sm font-normal'>L'ajout de votre fuseau horaire nous aideras lorsque nous aurons besoin d'éffectuer certaines verifications.</p>
          </div>

        </div>

        <div className="flex gap-2 sm:pl-8 pt-6">

          <div className="w-6 h-6">
            <svg className='w-6 h-6 stroke-slate-500' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.38028 8.85323C9.07627 10.3028 10.0251 11.6615 11.2266 12.8631C12.4282 14.0646 13.7869 15.0134 15.2365 15.7094C15.3612 15.7693 15.4235 15.7992 15.5024 15.8222C15.7828 15.904 16.127 15.8453 16.3644 15.6752C16.4313 15.6274 16.4884 15.5702 16.6027 15.4559C16.9523 15.1063 17.1271 14.9315 17.3029 14.8172C17.9658 14.3862 18.8204 14.3862 19.4833 14.8172C19.6591 14.9315 19.8339 15.1063 20.1835 15.4559L20.3783 15.6508C20.9098 16.1822 21.1755 16.448 21.3198 16.7333C21.6069 17.3009 21.6069 17.9712 21.3198 18.5387C21.1755 18.8241 20.9098 19.0898 20.3783 19.6213L20.2207 19.7789C19.6911 20.3085 19.4263 20.5733 19.0662 20.7756C18.6667 21 18.0462 21.1614 17.588 21.16C17.1751 21.1588 16.8928 21.0787 16.3284 20.9185C13.295 20.0575 10.4326 18.433 8.04466 16.045C5.65668 13.6571 4.03221 10.7947 3.17124 7.76131C3.01103 7.19687 2.93092 6.91464 2.9297 6.5017C2.92833 6.04347 3.08969 5.42298 3.31411 5.02348C3.51636 4.66345 3.78117 4.39863 4.3108 3.86901L4.46843 3.71138C4.99987 3.17993 5.2656 2.91421 5.55098 2.76987C6.11854 2.4828 6.7888 2.4828 7.35636 2.76987C7.64174 2.91421 7.90747 3.17993 8.43891 3.71138L8.63378 3.90625C8.98338 4.25585 9.15819 4.43065 9.27247 4.60643C9.70347 5.26932 9.70347 6.1239 9.27247 6.78679C9.15819 6.96257 8.98338 7.13738 8.63378 7.48698C8.51947 7.60129 8.46231 7.65845 8.41447 7.72526C8.24446 7.96269 8.18576 8.30695 8.26748 8.5873C8.29048 8.6662 8.32041 8.72854 8.38028 8.85323Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <div className="">
            <h6 className='font-medium text-base leading-7 mb-1.5'>Vérifiez votre numéro de téléphone</h6>
            <p className='text-slate-500 text-sm font-normal'>Ce numéro sera utilisé pour vous donner des informations sur l'état de tous vos paiements sur notre plateforme</p>
          </div>

        </div>

      </div>

    </Layout>
  )
}
