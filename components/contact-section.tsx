"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ContactForm } from "./contact-form"
import { Notification } from "./notification"
import { Phone, Mail, MapPin, Clock, ExternalLink, Facebook, Instagram } from "lucide-react"

export function ContactSection() {
  const [notification, setNotification] = useState<{
    show: boolean
    title: string
    message: string
    variant: "success" | "error" | "warning" | "info"
  }>({
    show: false,
    title: "",
    message: "",
    variant: "success",
  })

  const handleSuccessNotification = (message: string) => {
    setNotification({
      show: true,
      title: "Succes!",
      message,
      variant: "success",
    })
  }

  const handleErrorNotification = (message: string) => {
    setNotification({
      show: true,
      title: "Eroare",
      message,
      variant: "error",
    })
  }

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      {notification.show && (
        <Notification
          title={notification.title}
          message={notification.message}
          variant={notification.variant}
          onClose={() => setNotification({ ...notification, show: false })}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contactați-ne</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aveți întrebări sau doriți să programați un serviciu? Suntem aici să vă ajutăm!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm onSubmitSuccess={handleSuccessNotification} onSubmitError={handleErrorNotification} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl shadow-xl overflow-hidden h-full">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Informații de Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Telefon</h4>
                      <a
                        href="tel:+40755322752"
                        className="text-blue-100 hover:text-white transition-colors flex items-center mt-1"
                      >
                        +40 755 322 752
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email</h4>
                      <a
                        href="mailto:eliezer.cleaning.sm@gmail.com"
                        className="text-blue-100 hover:text-white transition-colors flex items-center mt-1"
                      >
                        eliezer.cleaning.sm@gmail.com
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Adresă</h4>
                      <p className="text-blue-100 mt-1">Satu Mare, România</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Program</h4>
                      <div className="text-blue-100 mt-1">
                        <p>Luni - Vineri: 08:00 - 20:00</p>
                        <p>Sâmbătă: 09:00 - 18:00</p>
                        <p>Duminică: Închis</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start mt-6">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <Facebook className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Facebook</h4>
                      <a
                        href="https://www.facebook.com/profile.php?id=61565136025145"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors flex items-center mt-1"
                      >
                        Urmărește-ne pe Facebook
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start mt-6">
                    <div className="bg-white/20 p-2 rounded-full mr-4">
                      <Instagram className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Instagram</h4>
                      <a
                        href="https://www.instagram.com/eliezer.cleaning/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-white transition-colors flex items-center mt-1"
                      >
                        Urmărește-ne pe Instagram
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/20">
                  <h4 className="font-medium text-lg mb-3">Zonă de Acoperire</h4>
                  <p className="text-blue-100">
                    Oferim servicii de curățenie în Satu Mare și împrejurimi, inclusiv localitățile din apropiere.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
