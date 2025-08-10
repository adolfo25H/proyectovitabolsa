"use client"

import { useState } from "react"
import { ShoppingCart, Star, Truck, Shield, Heart, Leaf } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"

export default function VitaBolsaStore() {
  const { addToCart, getTotalItems } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
    })
  }

  const products = [
    {
      id: 1,
      name: "💪 Mix Energético",
      description:
        "Almendra natural, nuez pecana, semilla de girasol tostada, arándano deshidratado, semilla de calabaza",
      price: "$35.50",
      originalPrice: "$45.00",
      image: "/public/mix energetico.png",
      rating: 4.8,
      badge: "Más Vendido",
      benefits: "Ideal para deportistas y actividad física",
    },
    {
      id: 2,
      name: "💪 Mix Proteico",
      description: "Almendra, pistache sin sal, semilla de cáñamo, semilla de chía, nuez de la india (anacardo)",
      price: "$35.50",
      originalPrice: "$45.00",
      image: "/public/mix proteicos.jpg",
      rating: 4.9,
      badge: "Alto en Proteína",
      benefits: "Perfecto para construcción muscular",
    },
    {
      id: 3,
      name: "🌿 Mix Omega 3",
      description: "Nuez, semilla de linaza, semilla de chía, piñón, semilla de sésamo",
      price: "$35.50",
      originalPrice: "$45.00",
      image: "/public/omega 3.jpg",
      rating: 4.7,
      badge: "Súper Saludable",
      benefits: "Rico en ácidos grasos esenciales",
    },
    {
      id: 4,
      name: "🍯 Mix Gourmet",
      description:
        "Almendra caramelizada, pistacho tostado, nuez de macadamia, semilla de amapola, arándano deshidratado",
      price: "$35.00",
      originalPrice: "$45.00",
      image: "/public/mix gourmet.jpg",
      rating: 4.9,
      badge: "Premium",
      benefits: "Sabor exclusivo y sofisticado",
    },
    {
      id: 5,
      name: "🔥 Mix Picante",
      description:
        "Pepita de calabaza con chile y limón, cacahuate enchilado, almendra salada, semilla de girasol, nuez con paprika",
      price: "$35.00",
      originalPrice: "$45.00",
      image: "/public/picante mix.jpg",
      rating: 4.6,
      badge: "Sabor Intenso",
      benefits: "Para los amantes del picante",
    },
    {
      id: 6,
      name: "🌴 Mix Tropical",
      description: "Coco deshidratado, nuez de la india, almendra, piña deshidratada, plátano deshidratado",
      price: "$35.50",
      originalPrice: "$45.00",
      image: "/public/tropical.jpg",
      rating: 4.8,
      badge: "Exótico",
      benefits: "Sabores tropicales únicos",
    },
  ]

  const benefits = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "100% Natural",
      description: "Sin conservantes ni aditivos artificiales",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Saludable",
      description: "Rico en vitaminas, minerales y antioxidantes",
    },
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Envío Gratis",
      description: "En compras mayores a $100",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Calidad Garantizada",
      description: "Satisfacción 100% garantizada",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Image src="/vitabolsa-logo.png" alt="VitaBolsa Logo" width={120} height={60} className="h-12 w-auto" />
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-700 hover:text-orange-600 font-medium">
                Inicio
              </Link>
              <Link href="#productos" className="text-gray-700 hover:text-orange-600 font-medium">
                Productos
              </Link>
              <Link href="#beneficios" className="text-gray-700 hover:text-orange-600 font-medium">
                Beneficios
              </Link>
              <Link href="#contacto" className="text-gray-700 hover:text-orange-600 font-medium">
                Contacto
              </Link>
            </nav>

            <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Carrito ({getTotalItems()})
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Bolsas de Fruta
                <span className="text-orange-600 block">100% Naturales</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Descubre nuestra selección premium de frutos secos y frutas deshidratadas. Nutrición pura en cada bolsa,
                directamente de la naturaleza a tu mesa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  Ver Productos
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  Conocer Más
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="VitaBolsa productos"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
                ¡Envío Gratis!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Productos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada VitaBolsa está cuidadosamente seleccionada para ofrecerte la mejor calidad y sabor
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-3 left-3 bg-orange-600 hover:bg-orange-700">{product.badge}</Badge>
                    <Button
                      size="sm"
                      className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-3 text-sm leading-relaxed">{product.description}</p>
                    <p className="text-green-600 text-xs font-medium mb-4">{product.benefits}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-orange-600">{product.price}</span>
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700" onClick={() => handleAddToCart(product)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Por qué elegir VitaBolsa?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos comprometemos con la calidad, frescura y tu satisfacción
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">¡Comienza tu vida saludable hoy!</h2>
          <p className="text-xl text-orange-100 mb-8">
            Únete a miles de clientes satisfechos que ya disfrutan de nuestros productos naturales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
              Ver Todos los Productos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
            >
              Suscríbete y Ahorra 15%
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/vitabolsa-logo.png" alt="VitaBolsa Logo" width={100} height={50} className="h-10 w-auto" />
              </div>
              <p className="text-gray-400">
                Tu fuente confiable de frutos secos y frutas deshidratadas de la más alta calidad.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Frutos Secos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Frutas Deshidratadas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Mixes Especiales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Ofertas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Ayuda</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Envíos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Devoluciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Síguenos</h3>
              <p className="text-gray-400 mb-4">Mantente al día con nuestras ofertas y novedades</p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-400 hover:text-white hover:border-white bg-transparent"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 VitaBolsa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
