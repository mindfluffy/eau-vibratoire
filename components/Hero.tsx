import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-blue-dark/50"></div>
      </div>

      {/* Contenu Hero */}
      <div className="relative z-10 h-full flex items-center justify-center text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Découvrez la Science de l'Eau Vivante
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Explorez les mystères de l'eau et ses bienfaits pour la santé et l'agriculture
          </p>
          <Link 
            href="/blog"
            className="inline-block bg-blue-medium hover:bg-blue-light text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
