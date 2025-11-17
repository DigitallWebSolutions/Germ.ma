import { Video, Headphones, FileText, FolderOpen, CheckCircle } from 'lucide-react';
import config from '../config.json';

function Features() {
  const features = [
    { icon: Video, text: 'فيديوهات تعليمية', color: 'text-red-600' },
    { icon: Headphones, text: 'تسجيلات صوتية', color: 'text-blue-600' },
    { icon: FileText, text: 'ملفات PDF', color: 'text-green-600' },
    { icon: FolderOpen, text: '+8000 ملف', color: 'text-yellow-600' },
  ];

  return (
    <section className="bg-white px-4 py-8">
      <div className="max-w-md mx-auto animate-section">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          ماذا ستحصل عليه؟
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-4 text-center hover:scale-105 transition-all duration-200 shadow-sm"
            >
              <feature.icon size={36} className={`${feature.color} mx-auto mb-2`} />
              <p className="text-sm font-semibold text-gray-800">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-6 border-2 border-red-200">
          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="text-green-600" size={24} />
            محتوى الحزمة:
          </h4>
          <ul className="space-y-3">
            {config.product.mainBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-800">
                <span className="text-red-600 font-bold mt-1">✓</span>
                <span className="text-sm leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Features;
