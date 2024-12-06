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
      {/* Hero Section avec logo */}
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
            <div className="relative w-48 h-48">
              <Image
                src="/images/grander/logo.jpg"
                alt="Logo Grander"
                width={192}
                height={192}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Section Présentation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-blue-dark mb-4">
              Qu&apos;est-ce que la technologie Grander ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              La technologie Grander représente une approche innovante dans le traitement 
              de l&apos;eau, basée sur les découvertes de Johann Grander. Cette méthode unique 
              permet de revitaliser l&apos;eau sans ajout de produits chimiques.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-medium mr-2">✓</span>
                <span>Amélioration naturelle de la qualité de l&apos;eau</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-medium mr-2">✓</span>
                <span>Solution écologique sans produits chimiques</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-medium mr-2">✓</span>
                <span>Applications domestiques et industrielles</span>
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/images/grander/goutte.jpg"
              alt="Goutte d'eau Grander"
              width={800}
              height={600}
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>

        {/* Section Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-dark mb-8 text-center">
            Applications
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-blue-dark/30"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-blue-dark mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Contact */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-dark mb-6">
            Intéressé par la technologie Grander ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            En tant qu&apos;apporteur d&apos;affaires officiel, je peux vous conseiller sur la 
            meilleure solution adaptée à vos besoins.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-medium hover:bg-blue-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Me contacter
          </a>
        </div>
      </div>
    </div>
  )
}

export default Grander
