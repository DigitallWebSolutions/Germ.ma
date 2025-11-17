import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Details from './components/Details';
import OfferReminder from './components/OfferReminder';
import PaymentModal from './components/PaymentModal';
import StickyBar from './components/StickyBar';
import Toast from './components/Toast';
import config from './config.json';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.animate-section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handlePaymentSelect = (method) => {
    const message = config.payment.whatsappMessageTemplate
      .replace('{{productName}}', config.product.name)
      .replace('{{price}}', config.pricing.price)
      .replace('{{paymentMethod}}', method.name);

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${config.contact.phone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsModalOpen(false);
    setToastMessage('تم فتح الواتساب - أكمل طلبك الآن!');
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <main className="pb-24">
        <Hero onOrderClick={handleOrderClick} />
        <Features />
        <Details />
        <OfferReminder onOrderClick={handleOrderClick} />
      </main>
      <StickyBar onOrderClick={handleOrderClick} />
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPaymentSelect={handlePaymentSelect}
      />
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}

export default App;
