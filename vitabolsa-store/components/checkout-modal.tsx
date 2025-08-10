"use client"

import type React from "react"

import { useState } from "react"
import { X, CreditCard, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCart } from "@/contexts/cart-context"

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, getTotalPrice, clearCart } = useCart()
  const [step, setStep] = useState<"info" | "payment" | "success">("info")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular procesamiento de pago
    setTimeout(() => {
      setStep("success")
      clearCart()
    }, 2000)
  }

  const handleClose = () => {
    setStep("info")
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-60 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">
            {step === "info" && "Información de Envío"}
            {step === "payment" && "Información de Pago"}
            {step === "success" && "¡Compra Exitosa!"}
          </h2>
          <Button variant="ghost" size="sm" onClick={handleClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          {step === "info" && (
            <form onSubmit={handleSubmitInfo} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Dirección</Label>
                <Input id="address" name="address" value={formData.address} onChange={handleInputChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">Ciudad</Label>
                  <Input id="city" name="city" value={formData.city} onChange={handleInputChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zipCode">Código Postal</Label>
                  <Input id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleInputChange} required />
                </div>
              </div>
              <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                <Truck className="h-4 w-4 mr-2" />
                Continuar al Pago
              </Button>
            </form>
          )}

          {step === "payment" && (
            <form onSubmit={handleSubmitPayment} className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Resumen del Pedido</h3>
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>${(Number.parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t mt-2 pt-2 flex justify-between font-semibold">
                  <span>Total:</span>
                  <span className="text-orange-600">${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Nombre en la Tarjeta</Label>
                <Input id="cardName" name="cardName" value={formData.cardName} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Fecha de Vencimiento</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/AA"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <CreditCard className="h-4 w-4 mr-2" />
                Pagar ${getTotalPrice().toFixed(2)}
              </Button>
            </form>
          )}

          {step === "success" && (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">¡Pago Exitoso!</h3>
              <p className="text-gray-600 mb-4">
                Tu pedido ha sido procesado correctamente. Recibirás un email de confirmación en breve.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-green-700">
                  <strong>Número de Orden:</strong> VB-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <p className="text-sm text-green-700">
                  <strong>Tiempo estimado de entrega:</strong> 2-3 días hábiles
                </p>
              </div>
              <Button onClick={handleClose} className="bg-orange-600 hover:bg-orange-700">
                Continuar Comprando
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
