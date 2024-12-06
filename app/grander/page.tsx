'use client'

import Image from 'next/image'
import { FC } from 'react'

interface ApplicationItem {
  title: string
  description: string
  image: string
}

const Grander: FC = () => {
  const applications: ApplicationItem[] = [
    {
      title: "Eau Potable",
      description: "Une eau pure et vivante pour votre consommation quotidienne",
      image: "/images/grander/eau-boire.jpg"
    },
    {
      title: "Système de Distribution",
      description: "Solutions pour l'amélioration de votre réseau d'eau",
      image: "/images/grander/robinet.jpg"
    },
    {
      title: "Dynamisation de l'Eau",
      description: "Redonnez à l'eau ses propriétés naturelles",
      image: "/images/grander/ondulation.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/grander/danseuse.jpg"
            alt="Eau Grander"
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-blue-dark/50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
              Technologie Grander
            </h1>
          </div>
        </div>
      </div>

      {/* Section Description */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark mb-8">
            La Révolution de l'Eau Vivante
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            La technologie Grander représente une avancée majeure dans le domaine de la dynamisation de l'eau.
            Basée sur les découvertes de Johann Grander, elle permet de restaurer les propriétés naturelles de l'eau
            et d'améliorer sa qualité intrinsèque.
          </p>
        </div>
      </div>

      {/* Section Applications */}
      <div className="bg-blue-light/10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark text-center mb-12">
            Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={app.image}
                    alt={app.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-dark mb-2">{app.title}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Avantages */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-dark text-center mb-12">
            Les Avantages
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-dark mb-2">Naturel et Écologique</h3>
              <p className="text-gray-600">Une solution respectueuse de l'environnement, sans produits chimiques ni électricité.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-dark mb-2">Durable et Sans Entretien</h3>
              <p className="text-gray-600">Un investissement unique pour des années d'eau dynamisée.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-dark mb-2">Applications Multiples</h3>
              <p className="text-gray-600">Utilisable pour l'eau potable, l'agriculture, les piscines et bien plus encore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Grander
